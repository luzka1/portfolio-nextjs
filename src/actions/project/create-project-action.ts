"use server";

import { makePublicProject, ProjectDTO } from "@/dto/project-dto";
import { verifyLoginSession } from "@/lib/login/manage-login";
import { ProjectCreateSchema } from "@/lib/project/validations";
import { ProjectModel } from "@/models/project-model";
import { projectRepository } from "@/repositories/project";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { v4 as uuidV4 } from "uuid";

type CreateProjectActionState = {
  formState: ProjectDTO;
  errors: string[];
  sucess?: string;
};

export async function createProjectAction(
  prevState: CreateProjectActionState,
  formData: FormData,
): Promise<CreateProjectActionState> {
  const isAuthenticated = await verifyLoginSession();

  const makeResult = ({
    formState = makePublicProject(prevState.formState),
    errors = [],
  }: {
    formState?: ProjectDTO;
    errors?: string[];
  }) => ({
    formState,
    errors,
  });

  if (!(formData instanceof FormData)) {
    return makeResult({ errors: ["Dados inválidos"] });
  }

  const formDataToObject = Object.fromEntries(formData.entries());
  const zodParsedObject = ProjectCreateSchema.safeParse(formDataToObject);

  if (!isAuthenticated) {
    return makeResult({
      formState: makePublicProject(prevState.formState),
      errors: ["Você precisa estar logado para criar um novo post!"],
    });
  }

  if (!zodParsedObject.success) {
    const errors = getZodErrorMessages(zodParsedObject.error.format());

    return makeResult({
      formState: makePublicProject(formDataToObject),
      errors,
    });
  }

  const validProjectData = zodParsedObject.data;

  const newProject: ProjectModel = {
    ...validProjectData,
    id: uuidV4(),
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAW37ElV06lFQcWoCyFRGlUXpnzuZ-6TwWyg&s",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    await projectRepository.create(newProject);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return makeResult({
        formState: newProject,
        errors: [e.message],
      });
    }
    return makeResult({
      formState: newProject,
      errors: ["Erro desconhecido!"],
    });
  }

  updateTag("projects");

  redirect("/");
}

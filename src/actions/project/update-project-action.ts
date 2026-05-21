"use server";

import { makePublicProject, ProjectDTO } from "@/dto/project-dto";
import { verifyLoginSession } from "@/lib/login/manage-login";
import { ProjectUpdateSchema } from "@/lib/project/validations";
import { projectRepository } from "@/repositories/project";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { updateTag } from "next/cache";

type UpdateProjectActionState = {
  formState: ProjectDTO;
  errors: string[];
  sucess?: string;
};

export async function updateProjectAction(
  prevState: UpdateProjectActionState,
  formData: FormData,
): Promise<UpdateProjectActionState> {
  const isAuthenticated = await verifyLoginSession();

  const makeResult = ({
    formState = makePublicProject(prevState.formState),
    errors = [],
    sucess,
  }: {
    formState?: ProjectDTO;
    errors?: string[];
    sucess?: string;
  }) => ({
    formState,
    errors,
    sucess,
  });

  if (!(formData instanceof FormData)) {
    return makeResult({ errors: ["Dados inválidos"] });
  }

  const id = formData.get("id")?.toString() || "";

  if (!id || typeof id != "string") {
    return makeResult({ errors: ["Id inválido!"] });
  }

  const formDataToObject = Object.fromEntries(formData.entries());
  const zodParsedObject = ProjectUpdateSchema.safeParse(formDataToObject);

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

  const newProject = {
    ...validProjectData,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAW37ElV06lFQcWoCyFRGlUXpnzuZ-6TwWyg&s",
    git_link: validProjectData.git_link ?? null,
    proj_url: validProjectData.proj_url ?? null,
  };

  let project;

  try {
    project = await projectRepository.update(id, newProject);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return makeResult({
        formState: makePublicProject(formDataToObject),
        errors: [e.message],
      });
    }
    return makeResult({
      formState: makePublicProject(formDataToObject),
      errors: ["Erro desconhecido!"],
    });
  }

  updateTag("projects");
  updateTag(`project-${project.id}`);

  return makeResult({
    formState: makePublicProject(project),
    sucess: Math.random().toString(36).substring(2, 6),
  });
}

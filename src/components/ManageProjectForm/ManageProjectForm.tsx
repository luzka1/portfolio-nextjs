"use client";

import { makePublicProject, ProjectDTO } from "@/dto/project-dto";
import { Input } from "../Input/Input";
import { Button } from "../Button";
import { createProjectAction } from "@/actions/project/create-project-action";
import { useActionState, useEffect } from "react";
import { AdminButton } from "../AdminButton/AdminButton";
import { toast } from "react-toastify";

type ManagePostFormUpdateProps = {
  mode: "update";
  publicPost: ProjectDTO;
};

type ManagePostFormCreateProps = {
  mode: "create";
};

type ManagePostFormProps =
  | ManagePostFormCreateProps
  | ManagePostFormUpdateProps;

export function ManagePostForm(props: ManagePostFormProps) {
  let publicPost;

  const actionsMap = {
    create: createProjectAction,
    update: "",
  };

  const initialState = {
    formState: makePublicProject(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    createProjectAction,
    initialState,
  );

  const { formState } = state;

  useEffect(() => {
    if (state.errors.length > 0) {
      state.errors.forEach((error) => toast.error(error));
    }
  }, [state.errors]);

  return (
    <form action={action}>
      <div className="flex flex-col gap-4">
        <Input
          name="id"
          placeholder="ID gerado automaticamente"
          type="text"
          readOnly
          defaultValue={formState.id}
          disabled={isPending}
        />

        <Input
          name="name"
          placeholder="Digite o nome do projeto"
          type="text"
          defaultValue={formState.name}
          disabled={isPending}
        />

        <Input
          name="tiny_description"
          placeholder="Digite a descrição curta"
          type="text"
          defaultValue={formState.tiny_description}
          disabled={isPending}
        />

        <Input
          name="full_description"
          placeholder="Digite a descrição completa"
          type="text"
          defaultValue={formState.full_description}
          disabled={isPending}
        />

        <Input
          name="git_link"
          placeholder="Cole aqui o link do github do projeto"
          type="text"
          defaultValue={formState.git_link}
          disabled={isPending}
        />

        <Input
          name="proj_url"
          placeholder="Cole aqui o link do projeto (opcional)"
          type="text"
          defaultValue={formState.proj_url}
          disabled={isPending}
        />

        {/* <ImageUploader disabled={isPending} /> */}

        <AdminButton type="submit">Enviar</AdminButton>
      </div>
    </form>
  );
}

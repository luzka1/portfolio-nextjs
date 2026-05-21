"use server";

import { verifyLoginSession } from "@/lib/login/manage-login";
import { projectRepository } from "@/repositories/project";
import { updateTag } from "next/cache";

export async function deleteProjectAction(id: string) {
  const isAuthenticated = await verifyLoginSession();

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  if (!isAuthenticated) {
    return {
      error: "Usuário não autenticado, faça login novamente!",
    };
  }

  let project;

  try {
    project = await projectRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return { error: e.message };
    }
    return {
      error: "Erro desconhecido!",
    };
  }

  updateTag("projects");
  updateTag(`project-${project.id}`);

  return {
    error: "",
  };
}

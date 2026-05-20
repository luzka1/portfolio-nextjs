import { ProjectModel } from "../models/project-model";

export type ProjectDTO = Omit<ProjectModel, "updatedAt">;

export const makePublicProject = (
  project?: Partial<ProjectModel>,
): ProjectDTO => {
  return {
    id: project?.id || "",
    name: project?.name || "",
    img: project?.img || "",
    tiny_description: project?.tiny_description || "",
    full_description: project?.full_description || "",
    git_link: project?.git_link || "",
    proj_url: project?.proj_url || "",
    createdAt: project?.createdAt || "",
  };
};

export const makePublicProjectFromDb = (post: ProjectModel): ProjectDTO => {
  return makePublicProject(post);
};

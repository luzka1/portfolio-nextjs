import { ProjectModel } from "../../models/project-model";

export interface ProjectRepository {
  findAll(): Promise<ProjectModel[]>;
  findById(id: string): Promise<ProjectModel>;

  create(project: ProjectModel): Promise<ProjectModel>;
  delete(id: string): Promise<ProjectModel>;
  update(
    id: string,
    newProjectData: Omit<ProjectModel, "id" | "createdAt " | "updatedAt">,
  ): Promise<ProjectModel>;
}

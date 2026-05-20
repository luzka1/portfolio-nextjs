import { drizzleDb } from "../../db/drizzle";
import { ProjectModel } from "../../models/project-model";
import { asyncDelay } from "../../utils/async-delay";
import { ProjectRepository } from "./project-repository";
import { projectsTable } from "../../db/drizzle/schemas";
import { eq } from "drizzle-orm";

const simulateWait = Number(process.env.SIMULATE_WAIT_IN_MS) || 0;

export class DrizzleProjectRepository implements ProjectRepository {
  async findAll(): Promise<ProjectModel[]> {
    await asyncDelay(simulateWait);

    const projects = await drizzleDb.query.projects.findMany({
      orderBy: (projects, { desc }) => desc(projects.createdAt),
    });

    return projects;
  }

  async findById(id: string): Promise<ProjectModel> {
    await asyncDelay(simulateWait);

    const post = await drizzleDb.query.projects.findFirst({
      where: (projects, { eq }) => eq(projects.id, id),
    });

    if (!post) throw new Error("Projeto não encontrado!");

    return post;
  }

  async create(project: ProjectModel): Promise<ProjectModel> {
    const projectExists = await drizzleDb.query.projects.findFirst({
      where: (projects, { eq }) => eq(projects.id, project.id),
      columns: { id: true },
    });

    if (!!projectExists) {
      throw new Error("Projeto já existe na base de dados!");
    }

    await drizzleDb.insert(projectsTable).values(project);
    return project;
  }

  async delete(id: string): Promise<ProjectModel> {
    const project = await drizzleDb.query.projects.findFirst({
      where: (projects, { eq }) => eq(projects.id, id),
    });

    if (!project) {
      throw new Error("Projeto não existe na base de dados");
    }

    await drizzleDb.delete(projectsTable).where(eq(projectsTable.id, id));

    return project;
  }

  async update(
    id: string,
    newProjectData: Omit<ProjectModel, "id" | "createdAt" | "updatedAt">,
  ): Promise<ProjectModel> {
    const oldPost = await drizzleDb.query.projects.findFirst({
      where: (projects, { eq }) => eq(projects.id, id),
    });

    if (!oldPost) {
      throw new Error("Projeto não existe na base de dados");
    }

    const updatedAt = new Date().toISOString();

    const projectData = {
      name: newProjectData.name,
      img: newProjectData.img,
      tiny_description: newProjectData.tiny_description,
      full_description: newProjectData.full_description,
      proj_url: newProjectData.proj_url,
      git_link: newProjectData.git_link,
      updatedAt,
    };

    await drizzleDb
      .update(projectsTable)
      .set(projectData)
      .where(eq(projectsTable.id, id));

    return {
      ...oldPost,
      ...projectData,
    };
  }
}

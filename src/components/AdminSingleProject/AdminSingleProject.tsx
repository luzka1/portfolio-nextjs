import { findProjectById } from "@/lib/project/public";
import { ManagePostForm } from "../ManageProjectForm/ManageProjectForm";
import { notFound } from "next/navigation";
import { makePublicProjectFromDb } from "@/dto/project-dto";

type AdminSingleProjectProps = {
  idParam: Promise<{ id: string }>;
};

export async function AdminSingleProject({ idParam }: AdminSingleProjectProps) {
  const { id } = await idParam;
  const project = await findProjectById(id);

  if (!project) return notFound();

  const publicProject = makePublicProjectFromDb(project);

  return (
    <div className="bg-mauve-900 rounded-[50px] shadow-purple-950/50 shadow-2xl border border-zinc-800/80 p-12 flex flex-col">
      <p className="font-bold mb-4">Editar projeto {publicProject.name}</p>

      <ManagePostForm mode="update" publicPost={publicProject} />
    </div>
  );
}

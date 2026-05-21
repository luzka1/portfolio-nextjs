import { findAllProjects } from "@/lib/project/public";
import { Edit2Icon, TrashIcon } from "lucide-react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import Link from "next/link";
import { DeleteProject } from "../DeleteProject/DeleteProject";

export default async function ProjectListAdmin() {
  const projects = await findAllProjects();

  if (projects.length <= 0) {
    return (
      <ErrorMessage
        contentTitle="Ops 🤭"
        content="Ainda não existe nenhum post criado, vamos criar algum?"
      />
    );
  }

  return (
    <>
      <div className="flex flex-col">
        {projects.map((project) => (
          <div
            className="flex justify-between p-4 hover:bg-mauve-950/50 rounded-lg transition"
            key={project.id}
          >
            {project.name}
            <div className="flex gap-4">
              <Link href={`/admin/projects/${project.id}`}>
                <Edit2Icon className="hover:cursor-pointer hover:text-white/80" />
              </Link>

              <DeleteProject name={project.name} id={project.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

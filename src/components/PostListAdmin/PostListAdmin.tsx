import { findAllProjects } from "@/lib/project/public";
import { Edit2Icon, TrashIcon } from "lucide-react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export default async function PostListAdmin() {
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
              <Edit2Icon className="hover:cursor-pointer hover:text-white/80" />
              <button
                type="button"
                aria-label={`Excluir post: ${project.name}`}
                title={`Excluir post: ${project.name}`}
                className="text-red-600 hover:cursor-pointer hover:text-red-800"
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

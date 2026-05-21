import PostListAdmin from "@/components/PostListAdmin/ProjectListAdmin";
import { LoaderCircleIcon } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Administração dos projetos",
};

export default async function AdminProjectsPage() {
  return (
    <div className="w-full h-min bg-mauve-900 rounded-2xl shadow-purple-950/50 shadow-2xl border border-zinc-800/80 p-4">
      <Suspense
        fallback={
          <div className="h-100 gap-2 flex justify-center items-center">
            <LoaderCircleIcon className="animate-spin" />
            Carregando projetos...
          </div>
        }
      >
        <PostListAdmin />
      </Suspense>
    </div>
  );
}

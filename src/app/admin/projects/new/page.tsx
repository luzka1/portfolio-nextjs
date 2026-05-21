import { Loading } from "@/components/Loading";
import { ManagePostForm } from "@/components/ManageProjectForm/ManageProjectForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Criar projeto",
};

export default function AdminNewProjectPage() {
  return (
    <div className="bg-mauve-900 rounded-[50px] shadow-purple-950/50 shadow-2xl border border-zinc-800/80 p-12 flex flex-col">
      <p className="font-bold mb-4">Criar projeto</p>
      <Suspense fallback={<Loading />}>
        <ManagePostForm mode="create" />
      </Suspense>
    </div>
  );
}

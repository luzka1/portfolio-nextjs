import { AdminSingleProject } from "@/components/AdminSingleProject/AdminSingleProject";
import { Loading } from "@/components/Loading";
import { Metadata } from "next";
import { Suspense } from "react";

type AdminSingleProjectPage = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Editar projeto",
};

export default function AdmingNewPostPage({ params }: AdminSingleProjectPage) {
  const idParam = params.then((p) => ({ id: p.id }));

  return (
    <Suspense fallback={<Loading />}>
      <AdminSingleProject idParam={idParam} />
    </Suspense>
  );
}

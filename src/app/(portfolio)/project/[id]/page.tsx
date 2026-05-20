import { Loading } from "@/components/Loading";
import { SingleProject } from "@/components/SingleProject/SingleProject";
import { findProjectById } from "@/lib/project/public";
import { Metadata } from "next";
import { Suspense } from "react";

type SingleProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: SingleProjectPageProps): Promise<Metadata> {
  const idParam = params.then((p) => ({ id: p.id }));

  const { id } = await idParam;

  const project = await findProjectById(id);

  return {
    title: project.name,
    description: project.tiny_description,
  };
}

export default async function ProjectPage({ params }: SingleProjectPageProps) {
  const id = params.then((p) => ({ id: p.id }));

  return (
    <Suspense fallback={<Loading />}>
      <SingleProject idParam={id} />
    </Suspense>
  );
}

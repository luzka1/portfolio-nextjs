"use server";

import { cache } from "react";
import { projectRepository } from "../../repositories/project";
import { cacheLife, cacheTag } from "next/cache";
import { notFound } from "next/navigation";

export const findAllProjects = cache(async () => {
  "use cache";
  cacheLife("minutes");
  cacheTag("projects");

  return await projectRepository.findAll();
});

export const findProjectById = cache(async (id: string) => {
  "use cache";
  cacheLife("minutes");
  cacheTag(`post-${id}`);

  const post = await projectRepository.findById(id).catch(() => undefined);

  if (!post) return notFound();

  return post;
});

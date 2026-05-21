import { isUrlOrRelativePath } from "@/utils/is-url-or-relative-path";
import z from "zod";

const ProjectBaseSchema = z.object({
  name: z
    .string()
    .trim()
    .min(5, "Nome precisa ter no mínimo 5 caractéres")
    .max(120, "Título deve ter, no máximo, 120 caracteres"),
  tiny_description: z
    .string()
    .trim()
    .min(5, "A descrição curta precisa ter no mínimo 5 caractéres"),
  full_description: z
    .string()
    .trim()
    .min(5, "A descrição completa precisa ter no mínimo 5 caractéres"),
  git_link: z
    .string()
    .trim()
    .refine(isUrlOrRelativePath, {
      message: "O link do github precisa ser uma URL válida",
    })
    .optional(),
  img: z
    .string()
    .trim()
    .refine(isUrlOrRelativePath, {
      message: "A imagem de capa precisa ser uma URL válida",
    })
    .optional(),
  proj_url: z
    .string()
    .trim()
    .refine(isUrlOrRelativePath, {
      message: "O link do projeto precisa ser uma URL válida",
    })
    .optional(),
});

export const ProjectCreateSchema = ProjectBaseSchema;

export const ProjectUpdateSchema = ProjectBaseSchema.extend({});

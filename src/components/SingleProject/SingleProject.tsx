import { findProjectById } from "@/lib/project/public";
import styles from "./styles.module.css";
import { Button } from "../Button";
import Image from "next/image";

type SingleProjectProps = {
  idParam: Promise<{ id: string }>;
};

export async function SingleProject({ idParam }: SingleProjectProps) {
  const { id } = await idParam;

  const project = await findProjectById(id);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <div className={styles.banner}>
        <Image
          fill
          src={project.img || ""}
          loading="eager"
          className={styles.projectImage}
          alt={`foto do projeto ${project.name}`}
        />
        <div className={styles.links}>
          {project.git_link ? (
            <a target="_blank" href={project.git_link} rel="noreferrer">
              <Button text="Github" type="button" />
            </a>
          ) : null}
          {project.proj_url ? (
            <a target="_blank" href={project.proj_url} rel="noreferrer">
              <Button variant="outlined" text="Projeto" type="button" />
            </a>
          ) : null}
        </div>
      </div>

      <section className={styles.sectionProject}>
        <div className={styles.title}>
          <h2>{project.name}</h2>
          <p>{project.tiny_description}</p>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>
            <h3>DESCRIÇÃO</h3>
          </div>
          <div className={styles.details}>
            <p>{project.full_description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

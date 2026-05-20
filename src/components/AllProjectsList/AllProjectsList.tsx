import styles from "@/app/(portfolio)/projects/styles.module.css";
import { findAllProjects } from "@/lib/project/public";
import { Project } from "../Project";

export async function AllProjectsList() {
  const projects = await findAllProjects();
  return (
    <div className={styles.projects}>
      {projects.map((item, id) => (
        <Project key={item.id} id={id} item={item} />
      ))}
    </div>
  );
}

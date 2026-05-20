import styles from "@/components/Projects/styles.module.css";
import { findAllProjects } from "@/lib/project/public";
import { Project } from "../Project";

export async function ThreeProjectsList() {
  const projects = await findAllProjects();

  return (
    <div className={styles.projects}>
      {projects.slice(0, 3).map((item, id) => (
        <Project key={item.id} id={id} item={item} />
      ))}
    </div>
  );
}

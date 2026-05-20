import { Metadata } from "next";
import styles from "./styles.module.css";
import { Suspense } from "react";
import { AllProjectsList } from "@/components/AllProjectsList";
import { Skeleton } from "@/components";

export const metadata: Metadata = {
  title: "Projetos",
};

export default async function ProjectsPage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>TODOS OS PROJETOS</h1>
            <p>
              Todos os projetos que foram realizados até o momento, clique em
              cada um deles para ter mais detalhes sobre cada projeto.
            </p>
          </div>
          <div className={styles.projects}>
            <Suspense fallback={<Skeleton />}>
              <AllProjectsList />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

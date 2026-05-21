import { Button } from "../Button";
import { Skeleton } from "../Skeleton";
import { ThreeProjectsList } from "../ThreeProjectsList";
import styles from "./styles.module.css";

import { Suspense } from "react";

export function Projects() {
  var buttonValid: boolean = false;

  return (
    <section className={styles.pContainer} id="projects">
      <div className={styles.title}>
        <div>
          <h1>Veja meus projetos</h1>
          <span>
            <p>
              Aqui estão alguns dos meus projetos realizados através das minhas
              experiências
            </p>
          </span>
        </div>
        {!buttonValid ? (
          <a href="/projects">
            <Button text="Ver todos" type="button" />
          </a>
        ) : null}
      </div>
      <div className={styles.projects}>
        <Suspense fallback={<Skeleton />}>
          <ThreeProjectsList />
        </Suspense>
      </div>
    </section>
  );
}

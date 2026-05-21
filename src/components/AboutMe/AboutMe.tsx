"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";

const itemsIcons = [
  {
    alt: "next icon",
    src: "/images/next.svg",
  },
  {
    alt: "javascript icon",
    src: "/images/js.svg",
  },
  {
    alt: "react icon",
    src: "/images/react.svg",
  },
  {
    alt: "figma icon",
    src: "/images/figma.svg",
  },
];

const infos = [
  {
    num: 1,
    text: "Anos de experiência",
  },
  {
    num: 5,
    text: "Cursos completos",
  },
  {
    num: 5,
    text: "Projetos",
  },
];

export const AboutMe = () => {
  return (
    <section className={styles.abContainer} id="about-me">
      <div className={styles.title}>
        <h1>Sobre mim</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
          delay: 0,
        }}
        viewport={{ once: true }}
        className={styles.innerAbContainer}
      >
        <div className={styles.left}>
          <div>
            <h2>Olá, me chamo Lucas Gabriel dos Santos</h2>
          </div>
          <div>
            <p>
              Sou um amante da tecnologia e de arte. Me formei no ensino médio
              integrado ao curso técnico de Informática em 2020, desde então
              criei um enorme interesse na área da tecnologia. Em 2022 me formei
              no Instituto PROA que foi uma ótima experiência, onde eu pude
              aprender conceitos importantes e mais aprofundados sobre
              programação, sendo eles: HTML; CSS; JavaScript; React; JAVA;
              SCRUM; Git e GitHub. Estou me aperfeiçoando em Front-End,
              utilizando, TypeScript, ReactJs e NextJs. No futuro pretendo me
              especializar na área de desenvolvimento web. Além disso, sou
              autodidata nos estudos sobre edição de fotos e vídeos, assim me
              impulsiono criativamente para a realização de projetos.
            </p>
          </div>
          <div className={styles.itens}>
            {infos?.map((item, id) => (
              <div className={`outlinedButton ${styles.btn}`} key={id}>
                <span>+{item.num}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {itemsIcons.map((item, id) => (
            <div key={id}>
              <Image
                src={item.src}
                width={30}
                height={30}
                alt={item.alt}
                className="h-18 w-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

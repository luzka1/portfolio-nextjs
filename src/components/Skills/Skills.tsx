"use client";

import styles from "./styles.module.css";
import { Button } from "..";
import { motion } from "framer-motion";
import Image from "next/image";

const itemsIcons = [
  {
    name: "NextJs",
    alt: "next icon",
    description: "/images/next.svg",
    color: "#000000",
    percent: "50%",
  },
  {
    name: "JavaScript",
    alt: "javascript icon",
    description: "/images/js.svg",
    color: "#F7DF1E",
    percent: "80%",
  },
  {
    name: "React",
    alt: "react icon",
    description: "/images/react.svg",
    color: "#00D8FF",
    percent: "80%",
  },
  {
    name: "Figma",
    alt: "figma icon",
    description: "/images/figma.svg",
    color: "#FF7262",
    percent: "70%",
  },
];

export const Skills = () => {
  const handleClick = () => {
    window.open(
      "https://www.linkedin.com/in/lucas-santos-341856247/",
      "_blank",
    );
  };

  return (
    <section className={styles.hContainer}>
      <div className={styles.title}>
        <h1>Habilidades</h1>
      </div>
      <motion.div
        className={styles.innerHContainer}
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
          delay: 0,
        }}
      >
        <div>
          <p>
            Sou um profissional que está sempre atento às novas tendências do
            ecossistema React, explorando bibliotecas complementares. Além das
            competências técnicas, minha capacidade de trabalhar em equipe e
            comunicar-se eficazmente é crucial, permitindo que eu transforme
            requisitos em soluções criativas e focadas na experiência do
            usuário. O amor pela tecnologia e a curiosidade em explorar novas
            ferramentas me impulsionam em buscar a excelência em cada projeto,
            criando interfaces intuitivas e responsivas atendendo expectativas
            dos usuários. Além de ter um ótimo conhecimento de design de sites e
            edição de imagens utilizando Figma e Photoshop.
          </p>
          <Button text="Linkedin" type="button" onClick={handleClick} />
        </div>
        <div className={styles.allIcons}>
          {itemsIcons.map((item, id) => (
            <div key={id} className={styles.iconItem}>
              <Image
                width={10}
                height={10}
                src={item.description}
                alt={item.alt}
              />
              <div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.percent}</p>
                </div>
                <div className={styles.progressBar}>
                  <div
                    style={{ width: item.percent, backgroundColor: item.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

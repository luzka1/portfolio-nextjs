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
              Sou desenvolvedor Front-End apaixonado por tecnologia e por
              transformar ideias em experiências digitais funcionais e
              intuitivas. Tenho experiência no desenvolvimento de aplicações web
              modernas utilizando tecnologias como ReactJS, Next.js, TypeScript
              e JavaScript, sempre buscando criar interfaces responsivas,
              organizadas e com uma ótima experiência para o usuário.
              <br /> <br />
              Ao longo da minha trajetória, participei de projetos voltados para
              diferentes áreas, incluindo plataformas corporativas e integrações
              financeiras, trabalhando tanto na construção de novas
              funcionalidades quanto na manutenção e evolução de sistemas já
              existentes. Gosto de pensar além do código, entendendo as
              necessidades do negócio e buscando soluções que realmente façam
              sentido para quem vai utilizar o produto. Sou uma pessoa que
              valoriza aprendizado constante, colaboração em equipe e boas
              práticas de desenvolvimento.
              <br /> <br />
              Tenho experiência trabalhando em ambientes ágeis, participando de
              code reviews, integrações com APIs, criação de componentes
              reutilizáveis e melhorias de performance. Além da parte técnica,
              acredito que comunicação, curiosidade e vontade de evoluir fazem
              toda a diferença no desenvolvimento de qualquer projeto.
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

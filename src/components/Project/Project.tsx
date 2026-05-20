"use client";

import styles from "../Projects/styles.module.css";
import { motion } from "framer-motion";
import { ProjectModel } from "../../models/project-model";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProjectProps {
  id: number;
  item: ProjectModel;
}

export const Project = ({ id, item }: ProjectProps) => {
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push(`/project/${item.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0,
      }}
      className={styles.project}
      style={
        id % 2 === 0
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
    >
      <Image
        src={item.img}
        className={styles.image}
        style={{ borderRadius: "8px" }}
        height={0}
        width={1024}
        alt={`foto do projeto ${item.name}`}
        title={`foto do projeto ${item.name}`}
      />
      <div>
        <span>{item.name}</span>
        <p>{item?.tiny_description}</p>
        <button onClick={handleClick}>
          Veja mais sobre o projeto{" "}
          <img src="/images/double-arrow.svg" alt="" />
        </button>
      </div>
    </motion.div>
  );
};

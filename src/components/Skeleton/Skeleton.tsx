"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.css";

export const Skeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        delay: 0,
      }}
      className={styles.skeleton}
    >
      <div className={styles.cardDescription}></div>
    </motion.div>
  );
};

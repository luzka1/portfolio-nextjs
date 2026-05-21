"use client";

import styles from "./styles.module.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { modalAnimation } from "@/ui/animations";
import Image from "next/image";
import { CopyIcon, XIcon } from "lucide-react";

interface IModalProps {
  isOpen: boolean;
  setOpen: () => void;
}

export const ContactModal = ({ isOpen, setOpen }: IModalProps) => {
  const email = "lucasgsantos1727@gmail.com";

  if (!isOpen) {
    return null;
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copiado com sucesso!");
    } catch (err) {
      toast.error("Erro inesperado!");
    }
  };

  const socialsIcons = [
    {
      alt: "github icon",
      description: "/images/github.svg",
      href: "https://github.com/luzka1",
    },
    {
      alt: "linkedin icon",
      description: "/images/linkedin.svg",
      href: "https://www.linkedin.com/in/lvkas/",
    },
    {
      alt: "email icon",
      description: "/images/email.svg",
    },
    {
      alt: "whatsapp icon",
      description: "/images/whatsapp.svg",
      href: `https://wa.me/11961499951?text=Olá%20preciso%20de%20um%20projeto!`,
    },
  ];

  return (
    <div className="background-modal">
      <motion.div
        className={styles.modal}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
      >
        <div>
          <h4 className="text-lg lg:text-4xl font-bold">Meus contatos</h4>
          <div onClick={setOpen}>
            <XIcon className="w-8 h-8 hover:cursor-pointer" />
          </div>
        </div>
        <nav className={styles.navSocials}>
          {socialsIcons.map((item, id) => (
            <div key={id} className={styles.icon}>
              <a href={item.href} target="_blank" rel="noreferrer">
                <Image
                  src={item.description}
                  width={50}
                  height={0}
                  alt={item.alt}
                />
              </a>
            </div>
          ))}
        </nav>
        <div className={styles.copyBoard}>
          <input readOnly placeholder={email} value={email} type="email" />
          <CopyIcon
            className="w-8 h-8 hover:cursor-pointer"
            onClick={() => copyToClipboard()}
          />
        </div>
      </motion.div>
    </div>
  );
};

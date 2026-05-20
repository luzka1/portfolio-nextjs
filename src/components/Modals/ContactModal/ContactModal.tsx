import styles from "./styles.module.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { modalAnimation } from "@/ui/animations";
import Image from "next/image";

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
      href: "https://www.linkedin.com/in/lucas-santos-341856247/",
    },
    {
      alt: "email icon",
      description: "/images/email.svg",
    },
    {
      alt: "whatsapp icon",
      description: "/images/whatsapp.svg",
      // href: `https://wa.me/${dataConfig?.whatsapp_number}?text=${dataConfig?.whatsapp_text}`,
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
          <h3>Meus contatos</h3>
          <div onClick={setOpen}>
            <Image
              src="/images/close.svg"
              alt="close button"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <nav className={styles.navSocials}>
          {socialsIcons.map((item, id) => (
            <div key={id} className={styles.icon}>
              <a href={item.href} target="_blank" rel="noreferrer">
                <Image src={item.description} width={40} alt={item.alt} />
              </a>
            </div>
          ))}
        </nav>
        <div className={styles.copyBoard}>
          <input readOnly placeholder={email} value={email} type="email" />
          <Image
            src="/images/copy.svg"
            alt="copy button"
            onClick={copyToClipboard}
          />
        </div>
      </motion.div>
    </div>
  );
};

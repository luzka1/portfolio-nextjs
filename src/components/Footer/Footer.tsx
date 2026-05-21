"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

import Image from "next/image";

export const Footer = () => {
  const navigate = useRouter();

  const now = Date.now();
  const year = new Date(now).getFullYear();

  const handleScrollToSection = (section: string) => {
    navigate.push("/");

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
    <footer>
      <div className={styles.logo}>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="h-auto w-auto"
        />
      </div>
      <nav className={styles.navSocials}>
        {socialsIcons.map((item, id) => (
          <div key={id} className={styles.icon}>
            <a href={item.href}>
              <Image
                src={item.description}
                width={5}
                height={5}
                alt={item.alt}
              />
            </a>
          </div>
        ))}
      </nav>

      <nav className={styles.navLinks}>
        <button onClick={() => handleScrollToSection("projects")} type="button">
          Projetos
        </button>

        <button onClick={() => handleScrollToSection("about-me")} type="button">
          Sobre mim
        </button>

        <button
          onClick={() => handleScrollToSection("contact-me")}
          type="button"
        >
          Contato
        </button>
      </nav>
      <div className={styles.dev}>
        Desenvolvido por lucasgsantos1727@gmail.com {year} © Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

"use client";

import styles from "./styles.module.css";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Header = () => {
  const navigate = useRouter();
  const headerRef = useRef<HTMLElement>(null);

  const toHomePage = () => {
    navigate.push("/");
  };

  const showHeader = () => {
    if (headerRef.current) {
      headerRef.current.classList.toggle(styles.responsiveHeader);
    }
  };

  const handleScrollToSection = (section: string) => {
    navigate.push("/");

    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.innerHeader}>
        <Image
          width={50}
          height={0}
          src="/images/logo.svg"
          loading="eager"
          alt="logo"
          onClick={toHomePage}
        />
        <button className={styles.btnHeader} onClick={showHeader}>
          &#9776;
        </button>
        <div>
          <button
            onClick={() => handleScrollToSection("about-me")}
            type="button"
          >
            Sobre mim
          </button>
          <button
            onClick={() => handleScrollToSection("projects")}
            type="button"
          >
            Projetos
          </button>
          <button
            onClick={() => handleScrollToSection("contact-me")}
            type="button"
          >
            Contato
          </button>

          <button className={styles.btnHeaderClose} onClick={showHeader}>
            <Image
              width={10}
              height={10}
              src="/images/close.svg"
              alt="close button"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "..";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { modalAnimation } from "@/ui/animations";
import { toast } from "react-toastify";

export const ContactMe = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const serviceId = process.env.EMAILJS_SERVICE_ID || "service_usetfc9";
  const userId = process.env.EMAILJS_USER_ID || "vdolnk6PZIIswd1Jv";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const templateParams = {
      from_email: email,
      subject,
      message,
    };

    if (!serviceId || !userId) {
      toast.error("Serviço ou Usuário inválidos!");
      return;
    }

    emailjs
      .send(serviceId, "template_3gbvmba", templateParams, userId)
      .then((response) => {
        console.log(
          "Email enviado com sucesso!",
          response.status,
          response.text,
        );
        toast.success("Email enviado com sucesso!");
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
        }
        console.error("Falha ao enviar o email:", err);
        toast.error("Falha ao enviar o email.");
      });
  };

  return (
    <section className={styles.cContainer} id="contact-me">
      <motion.div
        className={styles.form}
        variants={modalAnimation}
        initial="hidden"
        whileInView="visible"
      >
        <h3>FALE COMIGO</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              placeholder={"E-mail"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              placeholder={"Assunto"}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder={"Escreva uma mensagem..."}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit" text={"Enviar"} />
        </form>
      </motion.div>
    </section>
  );
};

import type { Metadata } from "next";
import "./globals.css";
import { ToastifyContainer } from "@/components/ToastifyContainer/ToastifyContainer";

export const metadata: Metadata = {
  title: {
    default: "Portifólio | Lucas",
    template: "%s | Lucas",
  },
  description: "Contando um pouco da minha história profissional!",
  icons: "/images/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="">
        {children} <ToastifyContainer />
      </body>
    </html>
  );
}

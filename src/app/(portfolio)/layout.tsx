import { Footer, Header } from "@/components";
import { Suspense } from "react";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="">
        <Header />
        {children}
        <Suspense fallback={<span>Carregando...</span>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

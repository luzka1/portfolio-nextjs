"use client";

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";

export default function RootErrorPage() {
  return (
    <div className="w-full h-screen">
      <ErrorMessage
        pageTitle="Página não encontrada!"
        contentTitle="501"
        content="Erro 501 - Erro interno do site!"
      />
    </div>
  );
}

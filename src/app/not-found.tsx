import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";

export default function NotFoundPage() {
  return (
    <div className="w-full h-screen">
      <ErrorMessage
        pageTitle="Página não encontrada!"
        contentTitle="404"
        content="Erro 404 - A página que você está tentando acessar não existe nesse site!"
      />
    </div>
  );
}

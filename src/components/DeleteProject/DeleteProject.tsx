"use client";

import clsx from "clsx";
import { TrashIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { Dialog } from "../Dialog/Dialog";
import { toast } from "react-toastify";
import { deleteProjectAction } from "@/actions/project/delete-project-action";

type DeleteProjectProps = {
  name: string;
  id: string;
};

export function DeleteProject({ name, id }: DeleteProjectProps) {
  const [isLoading, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    toast.dismiss();

    startTransition(async () => {
      const result = await deleteProjectAction(id);
      setShowDialog(false);

      if (result.error) {
        toast.error(`Erro: ${result.error}`);
        return;
      }

      toast.success("Post excluído com sucesso!");
    });
  }

  return (
    <>
      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title="Apagar post?"
          content={`Tem certeza que deseja excluir o post ${name}`}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isLoading}
        />
      )}
      <button
        className={clsx(
          "text-red-800",
          "transition",
          "hover:text-red-500",
          "cursor-pointer",
          "disabled:text-neutral-400",
          "disabled:hover:scale-100",
          "disabled:cursor-progress",
        )}
        aria-label={`Excluir post: ${name}`}
        title={`Excluir post: ${name}`}
        onClick={handleClick}
        disabled={isLoading}
      >
        <TrashIcon />
      </button>
    </>
  );
}

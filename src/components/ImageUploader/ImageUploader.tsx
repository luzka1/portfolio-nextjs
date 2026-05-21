"use client";

import { uploadImageAction } from "@/actions/project/upload-image-action";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";
import { AdminButton } from "../AdminButton/AdminButton";

type ImageUploaderProps = {
  disabled?: boolean;
};

export function ImageUploader({ disabled }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState("");

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChange() {
    toast.dismiss();

    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      fileInput.value = "";
      setImgUrl("");
      return;
    }

    const uploadMaxSize =
      Number(process.env.NEXT_PUBLIC_IMAGE_UPLOADER_MAX_SIZE) || 921600;

    if (file.size > uploadMaxSize) {
      const readableMaxSize = (uploadMaxSize / 1024).toFixed(2);

      toast.error(`Imagem muito grande. Tamanho máximo: ${readableMaxSize}KB`);
      setImgUrl("");
      fileInput.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        setImgUrl("");
        fileInput.value = "";
        return;
      }

      setImgUrl(result.url);
      toast.success("Imagem enviada!");
    });

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      <AdminButton
        disabled={isUploading || disabled}
        onClick={handleChooseFile}
        type="button"
        className="self-start"
      >
        <ImageUpIcon /> Enviar uma imagem
      </AdminButton>

      {!!imgUrl && (
        <div className="flex flex-col gap-y-4">
          <span>
            <b>URL: </b>
            {imgUrl}
          </span>
          <img className="rounded-lg" src={imgUrl} />
        </div>
      )}

      <input
        className="hidden"
        ref={fileInputRef}
        onChange={handleChange}
        name="file"
        type="file"
        accept="image/*"
        disabled={isUploading || disabled}
      />
    </div>
  );
}

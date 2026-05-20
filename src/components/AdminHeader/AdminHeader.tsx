"use client";

import { logoutAction } from "@/actions/login/logout-action";
import {
  CirclePlusIcon,
  LoaderCircleIcon,
  LogOutIcon,
  PaperclipIcon,
} from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";

export function AdminHeader() {
  const [isPending, startTransition] = useTransition();

  function handleLogout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    startTransition(async () => {
      await logoutAction();
    });
  }

  return (
    <header className="max-w-[90vw] w-full h-min bg-mauve-900 rounded-2xl shadow-purple-950/50 shadow-2xl border border-zinc-800/80 p-4">
      <ul className="flex flex-row gap-4">
        <li>
          <Link
            className="flex gap-2 transition hover:cursor-pointer border-b border-transparent hover:border-white p-2"
            href={"/admin/projects"}
          >
            <PaperclipIcon /> Projetos
          </Link>
        </li>
        <li>
          <Link
            className="flex gap-2 transition hover:cursor-pointer border-b border-transparent hover:border-white p-2"
            href={"/admin/projects/new"}
          >
            <CirclePlusIcon /> Criar Post
          </Link>
        </li>
        <li>
          <a
            className="flex gap-2 transition hover:cursor-pointer border-b border-transparent hover:border-white p-2"
            onClick={handleLogout}
          >
            {isPending && (
              <>
                <LoaderCircleIcon className="animate-spin" /> Espere...
              </>
            )}
            {!isPending && (
              <>
                <LogOutIcon /> Sair
              </>
            )}
          </a>
        </li>
      </ul>
    </header>
  );
}

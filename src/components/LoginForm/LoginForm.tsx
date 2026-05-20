"use client";

import { useActionState, useEffect } from "react";
import { Button } from "../Button";
import { Input } from "../Input/Input";
import { toast } from "react-toastify";
import { loginAction } from "@/actions/login/login-action";

export function LoginForm() {
  const initialState = {
    username: "",
    error: "",
  };

  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.error) {
      toast.dismiss();
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="w-150 bg-mauve-900 rounded-[50px] shadow-purple-950/50 shadow-2xl border border-zinc-800/80 p-12">
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase font-bold text-3xl mb-8">
            Faça seu login
          </span>

          <form
            action={action}
            className="w-full h-full flex flex-col gap-8 justify-center items-center"
          >
            <Input
              required
              name="username"
              type="text"
              defaultValue={state.username}
              placeholder="Insira seu usuário"
              disabled={isPending}
            />
            <Input
              required
              name="password"
              type="password"
              placeholder="Insira sua senha"
              disabled={isPending}
            />
            <Button
              disabled={isPending}
              text={isPending ? "Carregando..." : "Entrar"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

import { useId } from "react";

type InputTextProps = {} & React.ComponentProps<"input">;

export function Input({ ...rest }: InputTextProps) {
  const id = useId();

  return (
    <input
      {...rest}
      className="outline-0 ring-2 ring-transparent rounded-xl py-2.5 px-6 transition bg-background w-full focus:ring-purple-800 disabled:bg-zinc-800 disabled:placeholder-slate-400 disabled:text-slate-400 read-only:bg-zinc-800"
      id={id}
    />
  );
}

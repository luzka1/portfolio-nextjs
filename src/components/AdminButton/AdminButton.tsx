type AdminButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<"button">;

export function AdminButton({ children, ...rest }: AdminButtonProps) {
  return (
    <button
      {...rest}
      className="bg-purple-800 flex gap-2 justify-center items-center py-2 px-6 rounded-lg transition hover:bg-purple-700 hover:cursor-pointer disabled:bg-purple-950/50 disabled:text-zinc-500 disabled:cursor-progress"
    >
      {children}
    </button>
  );
}

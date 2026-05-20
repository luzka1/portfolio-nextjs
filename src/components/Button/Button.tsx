type ButtonVariant = "principal" | "outlined";

type ButtonProps = {
  text?: string;
  onClick?: (e: any) => void;
  variant?: ButtonVariant;
} & React.ComponentProps<"button">;

export const Button = ({
  text,
  onClick,
  variant = "principal",
  ...rest
}: ButtonProps) => {
  const buttonVariants = {
    principal: "principalButton",
    outlined: "outlinedButton",
  };

  return (
    <button className={buttonVariants[variant]} {...rest} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

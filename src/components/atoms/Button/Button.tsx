import cn from "classnames";
import { type VariantProps } from "class-variance-authority";
import { variants } from "./Button.variants";

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof variants> {
  children: React.ReactNode;
}

export const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        variants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

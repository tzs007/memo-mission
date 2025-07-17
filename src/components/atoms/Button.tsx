import cn from "classnames";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        `bg-[#FF3F56] text-white text-base uppercase py-[15px] px-5 transition-colors rounded-full disabled:bg-gray-200 disabled:pointer-events-none`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

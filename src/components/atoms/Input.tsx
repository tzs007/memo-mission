import React from "react";
import cn from "classnames";

interface InputProps extends React.ComponentProps<"input"> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "border rounded-md p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[50px] text-gilroy-medium outline-none focus:ring-0",
        className
      )}
      {...props}
    />
  );
};

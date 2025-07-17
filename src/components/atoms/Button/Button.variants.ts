import { cva } from "class-variance-authority";

export const variants = cva(
  `flex justify-center items-center text-sm font-500 hover:ease-out duration-300 text-nowrap gap-2.5 focus:ring-4 focus:transition-all`,
  {
    variants: {
      variant: {
        default: `
        bg-[#FF3F56] 
        text-white 
        text-base 
        uppercase 
        py-[15px] 
        px-5 
        transition-colors 
        rounded-full 
        disabled:bg-gray-200 
        disabled:pointer-events-none
        `,
      },
      size: {
        sm: "h-8 px-3",
        md: "h-[50px]",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

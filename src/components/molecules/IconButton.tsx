import cn from "classnames";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "components";

interface IconButtonProps extends React.ComponentProps<"button"> {
  iconName: IconName;
}

export const IconButton = ({
  iconName,
  onClick,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(`px-2 py-1.5 transition-colors`, className)}
      onClick={onClick}
      {...props}
    >
      <Icon icon={["fas", iconName]} size="lg" className="text-[#d5d5d5]" />
    </button>
  );
};

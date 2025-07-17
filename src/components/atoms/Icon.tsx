import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconName,
  IconPrefix,
  SizeProp,
} from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  icon: [IconPrefix, IconName];
  className?: string;
  size?: SizeProp;
};

export const Icon = ({ icon, className = "", size }: IconProps) => {
  return <FontAwesomeIcon icon={icon} className={className} size={size} />;
};

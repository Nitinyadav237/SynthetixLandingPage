import { cn } from "../utils";
import CircleArrow from "./circleArrow";

interface ButtonProps {
  className?: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ className, label }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-between gap-2 whitespace-nowrap rounded-full bg-[#151617] px-2 py-2 uppercase text-white lg:h-16 lg:gap-4 lg:px-4",
        className,
      )}
    >
      {label}
      <CircleArrow className="h-12 w-12" />
    </button>
  );
};

export default Button;

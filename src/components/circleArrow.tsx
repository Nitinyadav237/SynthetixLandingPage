import { rightArrow, WhiteArrow } from "../assets/svg";
import { cn } from "../utils";

interface CircleArrowProps {
  className?: string;
  whiteArrow?: string;
}

const CircleArrow: React.FC<CircleArrowProps> = ({
  className = "",
  whiteArrow = "false",
}) => {
  return (
    <div
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full bg-[#def38b] p-2 transition-all duration-200 ease-in-out hover:shadow-lg",
        className,
      )}
    >
      <img
        className="h-14 w-14 -rotate-45 transform hover:scale-105"
        src={whiteArrow==="true" ? WhiteArrow : rightArrow}
        alt={whiteArrow ? "White Arrow" : "Right Arrow"}
      />
    </div>
  );
};

export default CircleArrow;

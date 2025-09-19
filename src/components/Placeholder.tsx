import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceHolderProps = {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
  button?: React.ReactElement<{ className?: string }>;
  className?: string;
};

const PlaceHolder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceHolderProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};

export { PlaceHolder };

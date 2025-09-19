import { Separator } from "@radix-ui/react-separator";

type HeadingProps = {
  title: string;
  description?: string;
};

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold  tracking-tight">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <Separator className="bg-gray-200 h-[1px]" />
    </>
  );
};

export default Heading;

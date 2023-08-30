import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { cn } from "@/utils/cn";

interface Props {
  className?: string;
  image: string;
  alt: string;
}

export function AvatarDemo({ className, image, alt }: Props) {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={image} alt={alt} />
      <AvatarFallback className="text-[8px]">{alt}</AvatarFallback>
    </Avatar>
  );
}

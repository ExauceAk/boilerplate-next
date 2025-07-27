import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvatar({ fullName, image }: { fullName: string; image: string }) {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback className="bg-primary-brand-500 text-white">
        {fullName
          .split(" ")
          .slice(0, 2)
          .map((word) => word.charAt(0))
          .join(" ")}
      </AvatarFallback>
    </Avatar>
  );
}

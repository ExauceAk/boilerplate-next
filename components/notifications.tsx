import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import BellIcon from "@/icons/bell";

export default function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex size-9 items-center justify-center rounded-full border border-primary-neutral-200 bg-primary-neutral-100">
          <BellIcon className="size-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuItem className="text-sm font-medium text-primary-neutral-600">Notification 1</DropdownMenuItem>
        <DropdownMenuItem className="text-sm font-medium text-primary-neutral-600">Notification 1</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

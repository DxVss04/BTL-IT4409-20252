import { Card } from "@/components/ui/card";
<<<<<<< HEAD
import { formatOnlineTime, cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
=======
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, formatOnlineTime } from "@/lib/utils";
import { useChatStore } from "@/stores/useChatStore";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8

interface ChatCardProps {
  convoId: string;
  name: string;
  timestamp?: Date;
  isActive: boolean;
  onSelect: (id: string) => void;
  unreadCount?: number;
  leftSection: React.ReactNode;
  subtitle: React.ReactNode;
}

const ChatCard = ({
  convoId,
  name,
  timestamp,
  isActive,
  onSelect,
  unreadCount,
  leftSection,
  subtitle,
}: ChatCardProps) => {
<<<<<<< HEAD
=======
  const { deleteConversation } = useChatStore();

  const handleDelete = async () => {
    try {
      await deleteConversation(convoId);
      toast.success("Da xoa doan chat");
    } catch (error) {
      console.error(error);
      toast.error("Khong the xoa doan chat. Hay thu lai!");
    }
  };

>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  return (
    <Card
      key={convoId}
      className={cn(
<<<<<<< HEAD
        "border-none p-3 cursor-pointer transition-smooth glass hover:bg-muted/30",
        isActive &&
          "ring-2 ring-primary/50 bg-gradient-to-tr from-primary-glow/10 to-primary-foreground"
=======
        "group border border-transparent p-3 cursor-pointer transition-smooth bg-transparent shadow-none hover:border-primary/20 hover:bg-sidebar-accent/70 hover:shadow-sm",
        isActive &&
          "border-primary/25 bg-sidebar-accent text-sidebar-accent-foreground shadow-sm ring-1 ring-primary/20"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      )}
      onClick={() => onSelect(convoId)}
    >
      <div className="flex items-center gap-3">
        <div className="relative">{leftSection}</div>

        <div className="flex-1 min-w-0">
<<<<<<< HEAD
          <div className="flex items-center justify-between mb-1">
            <h3
              className={cn(
                "font-semibold text-sm truncate",
=======
          <div className="mb-1 flex items-center justify-between gap-2">
            <h3
              className={cn(
                "truncate text-sm font-semibold",
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                unreadCount && unreadCount > 0 && "text-foreground"
              )}
            >
              {name}
            </h3>

<<<<<<< HEAD
            <span className="text-xs text-muted-foreground">
=======
            <span className="shrink-0 text-xs text-muted-foreground">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
              {timestamp ? formatOnlineTime(timestamp) : ""}
            </span>
          </div>

<<<<<<< HEAD
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 flex-1 min-w-0">{subtitle}</div>
            <MoreHorizontal className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 hover:size-5 transition-smooth" />
=======
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-1">{subtitle}</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Mo tuy chon doan chat"
                  className="flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-smooth hover:bg-accent hover:text-accent-foreground group-hover:opacity-100 data-[state=open]:opacity-100"
                  onClick={(event) => event.stopPropagation()}
                >
                  <MoreHorizontal className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                onClick={(event) => event.stopPropagation()}
              >
                <DropdownMenuItem variant="destructive" onSelect={handleDelete}>
                  <Trash2 className="size-4" />
                  Xoa doan chat
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChatCard;

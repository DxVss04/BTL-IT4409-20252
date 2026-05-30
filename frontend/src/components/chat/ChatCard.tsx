import { Card } from "@/components/ui/card";
import { formatOnlineTime, cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

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
  return (
    <Card
      key={convoId}
      className={cn(
        "group border border-transparent p-3 cursor-pointer transition-smooth bg-transparent shadow-none hover:border-primary/20 hover:bg-sidebar-accent/70 hover:shadow-sm",
        isActive &&
          "border-primary/25 bg-sidebar-accent text-sidebar-accent-foreground shadow-sm ring-1 ring-primary/20"
      )}
      onClick={() => onSelect(convoId)}
    >
      <div className="flex items-center gap-3">
        <div className="relative">{leftSection}</div>

        <div className="flex-1 min-w-0">
          <div className="mb-1 flex items-center justify-between gap-2">
            <h3
              className={cn(
                "truncate text-sm font-semibold",
                unreadCount && unreadCount > 0 && "text-foreground"
              )}
            >
              {name}
            </h3>

            <span className="shrink-0 text-xs text-muted-foreground">
              {timestamp ? formatOnlineTime(timestamp) : ""}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-1">{subtitle}</div>
            <MoreHorizontal className="size-4 text-muted-foreground opacity-0 transition-smooth group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChatCard;

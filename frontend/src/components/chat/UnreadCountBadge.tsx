import { Badge } from "../ui/badge";

const UnreadCountBadge = ({ unreadCount }: { unreadCount: number }) => {
  return (
    <div className="pulse-ring absolute z-20 -top-1 -right-1">
<<<<<<< HEAD
      <Badge className="size-5 text-xs bg-gradient-chat border border-background">
=======
      <Badge className="size-5 border border-background bg-gradient-chat text-xs text-white shadow-sm">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        {unreadCount > 9 ? "9+" : unreadCount}
      </Badge>
    </div>
  );
};

export default UnreadCountBadge;

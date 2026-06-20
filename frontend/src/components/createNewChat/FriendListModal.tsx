import { useFriendStore } from "@/stores/useFriendStore";
import { DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { MessageCircleMore, Users } from "lucide-react";
import { Card } from "../ui/card";
import UserAvatar from "../chat/UserAvatar";
import { useChatStore } from "@/stores/useChatStore";

const FriendListModal = () => {
  const { friends } = useFriendStore();
  const { createConversation } = useChatStore();

  const handleAddConversation = async (friendId: string) => {
    await createConversation("direct", "", [friendId]);
  };

  return (
<<<<<<< HEAD
    <DialogContent className="glass max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2 text-xl capitalize">
          <MessageCircleMore className="size-5" />
=======
    <DialogContent className="max-w-md border-border/80 bg-card">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2 text-xl capitalize tracking-tight">
          <MessageCircleMore className="size-5 text-primary" />
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          bắt đầu hội thoại mới
        </DialogTitle>
      </DialogHeader>

      {/* friends list */}
      <div className="space-y-4">
<<<<<<< HEAD
        <h1 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          danh sách bạn bè
        </h1>

        <div className="space-y-2 max-h-60 overflow-y-auto">
=======
        <h1 className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
          danh sách bạn bè
        </h1>

        <div className="beautiful-scrollbar max-h-60 space-y-2 overflow-y-auto pr-1">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          {friends.map((friend) => (
            <Card
              onClick={() => handleAddConversation(friend._id)}
              key={friend._id}
<<<<<<< HEAD
              className="p-3 cursor-pointer transition-smooth hover:shadow-soft glass hover:bg-muted/30 group/friendCard"
=======
              className="group/friendCard cursor-pointer p-3 transition-smooth glass-light hover:border-primary/25 hover:bg-accent/60 hover:shadow-[var(--shadow-soft)]"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            >
              <div className="flex items-center gap-3">
                {/* avatar */}
                <div className="relative">
                  <UserAvatar
                    type="sidebar"
                    name={friend.displayName}
                    avatarUrl={friend.avatarUrl}
                  />
                </div>

                {/* info */}
                <div className="flex-1 min-w-0 flex flex-col">
<<<<<<< HEAD
                  <h2 className="font-semibold text-sm truncate">
=======
                  <h2 className="truncate text-sm font-semibold">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                    {friend.displayName}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    @{friend.username}
                  </span>
                </div>
              </div>
            </Card>
          ))}

          {friends.length === 0 && (
<<<<<<< HEAD
            <div className="text-center py-8 text-muted-foreground">
              <Users className="size-12 mx-auto mb-3 opacity-50" />
=======
            <div className="py-8 text-center text-sm text-muted-foreground">
              <Users className="mx-auto mb-3 size-12 opacity-50" />
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
              Chưa có bạn bè. Thêm bạn vô để tám!
            </div>
          )}
        </div>
      </div>
    </DialogContent>
  );
};

export default FriendListModal;

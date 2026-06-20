import { useChatStore } from "@/stores/useChatStore";
import type { Conversation } from "@/types/chat";
import { SidebarTrigger } from "../ui/sidebar";
import { useAuthStore } from "@/stores/useAuthStore";
import { Separator } from "../ui/separator";
import UserAvatar from "./UserAvatar";
import StatusBadge from "./StatusBadge";
import GroupChatAvatar from "./GroupChatAvatar";
import { useSocketStore } from "@/stores/useSocketStore";

const ChatWindowHeader = ({ chat }: { chat?: Conversation }) => {
  const { conversations, activeConversationId } = useChatStore();
  const { user } = useAuthStore();
  const { onlineUsers } = useSocketStore();

  let otherUser;

  chat = chat ?? conversations.find((c) => c._id === activeConversationId);

  if (!chat) {
    return (
<<<<<<< HEAD
      <header className="md:hidden sticky top-0 z-10 flex items-center gap-2 px-4 py-2 w-full">
=======
      <header className="sticky top-0 z-10 flex w-full items-center gap-2 border-b border-border/70 bg-card/95 px-4 py-3 backdrop-blur md:hidden">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        <SidebarTrigger className="-ml-1 text-foreground" />
      </header>
    );
  }

  if (chat.type === "direct") {
    const otherUsers = chat.participants.filter((p) => p._id !== user?._id);
    otherUser = otherUsers.length > 0 ? otherUsers[0] : null;

    if (!user || !otherUser) return;
  }

  return (
<<<<<<< HEAD
    <header className="sticky top-0 z-10 px-4 py-2 flex items-center bg-background">
=======
    <header className="sticky top-0 z-10 flex items-center border-b border-border/70 bg-card/95 px-4 py-3 backdrop-blur">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      <div className="flex items-center gap-2 w-full">
        <SidebarTrigger className="-ml-1 text-foreground" />
        <Separator
          orientation="vertical"
<<<<<<< HEAD
          className="mr-2 data-[orientation=vertical]:h-4"
        />

        <div className="p-2 w-full flex items-center gap-3">
=======
          className="mr-2 data-[orientation=vertical]:h-6"
        />

        <div className="flex w-full items-center gap-3 py-1">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          {/* avatar */}
          <div className="relative">
            {chat.type === "direct" ? (
              <>
                <UserAvatar
                  type={"sidebar"}
<<<<<<< HEAD
                  name={otherUser?.displayName || "Moji"}
=======
                  name={otherUser?.displayName || "Ugmail"}
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                  avatarUrl={otherUser?.avatarUrl || undefined}
                />
                {/* todo: socket io */}
                <StatusBadge
                  status={
                    onlineUsers.includes(otherUser?._id ?? "") ? "online" : "offline"
                  }
                />
              </>
            ) : (
              <GroupChatAvatar
                participants={chat.participants}
                type="sidebar"
              />
            )}
          </div>

          {/* name */}
<<<<<<< HEAD
          <h2 className="font-semibold text-foreground">
=======
          <h2 className="truncate font-semibold tracking-tight text-foreground">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            {chat.type === "direct" ? otherUser?.displayName : chat.group?.name}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default ChatWindowHeader;

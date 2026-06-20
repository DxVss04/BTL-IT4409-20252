<<<<<<< HEAD
=======
import { cn } from "@/lib/utils";
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
import { useAuthStore } from "@/stores/useAuthStore";
import { useChatStore } from "@/stores/useChatStore";
import type { Conversation } from "@/types/chat";
import ChatCard from "./ChatCard";
<<<<<<< HEAD
import UnreadCountBadge from "./UnreadCountBadge";
import GroupChatAvatar from "./GroupChatAvatar";
=======
import GroupChatAvatar from "./GroupChatAvatar";
import UnreadCountBadge from "./UnreadCountBadge";
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8

const GroupChatCard = ({ convo }: { convo: Conversation }) => {
  const { user } = useAuthStore();
  const { activeConversationId, setActiveConversation, messages, fetchMessages } =
    useChatStore();

  if (!user) return null;

  const unreadCount = convo.unreadCounts[user._id];
  const name = convo.group?.name ?? "";
<<<<<<< HEAD
=======
  const senderId =
    convo.lastMessage?.sender?._id ??
    (typeof convo.lastMessage?.senderId === "string"
      ? convo.lastMessage.senderId
      : convo.lastMessage?.senderId?._id);
  const senderName =
    convo.lastMessage?.sender?.displayName ||
    (typeof convo.lastMessage?.senderId === "object"
      ? convo.lastMessage.senderId.displayName
      : undefined) ||
    convo.participants.find((p) => p._id === senderId)?.displayName ||
    "Người dùng";
  const lastMessage = convo.lastMessage?.imgUrl
    ? `${senderName} đã gửi 1 ảnh`
    : convo.lastMessage?.content ?? "";

>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  const handleSelectConversation = async (id: string) => {
    setActiveConversation(id);
    if (!messages[id]) {
      await fetchMessages();
    }
  };

  return (
    <ChatCard
      convoId={convo._id}
      name={name}
      timestamp={
        convo.lastMessage?.createdAt
          ? new Date(convo.lastMessage.createdAt)
          : undefined
      }
      isActive={activeConversationId === convo._id}
      onSelect={handleSelectConversation}
      unreadCount={unreadCount}
      leftSection={
        <>
          {unreadCount > 0 && <UnreadCountBadge unreadCount={unreadCount} />}
<<<<<<< HEAD
          <GroupChatAvatar
            participants={convo.participants}
            type="chat"
          />
        </>
      }
      subtitle={
        <p className="text-sm truncate text-muted-foreground">
          {convo.participants.length} thành viên
=======
          <GroupChatAvatar participants={convo.participants} type="chat" />
        </>
      }
      subtitle={
        <p
          className={cn(
            "text-sm truncate",
            unreadCount > 0 ? "font-medium text-foreground" : "text-muted-foreground"
          )}
        >
          {lastMessage || `${convo.participants.length} thanh vien`}
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        </p>
      }
    />
  );
};

export default GroupChatCard;

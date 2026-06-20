import { useChatStore } from "@/stores/useChatStore";
import GroupChatCard from "./GroupChatCard";

const GroupChatList = () => {
  const { conversations } = useChatStore();

  if (!conversations) return;

  const groupchats = conversations.filter((convo) => convo.type === "group");
  return (
<<<<<<< HEAD
    <div className="flex-1 overflow-y-auto p-2 space-y-2">
=======
    <div className="flex-1 space-y-1 overflow-y-auto p-1">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      {groupchats.map((convo) => (
        <GroupChatCard
          convo={convo}
          key={convo._id}
        />
      ))}
    </div>
  );
};

export default GroupChatList;

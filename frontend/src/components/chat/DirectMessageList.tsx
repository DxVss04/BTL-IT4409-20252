import { useChatStore } from "@/stores/useChatStore";
import DirectMessageCard from "./DirectMessageCard";

const DirectMessageList = () => {
  const { conversations } = useChatStore();

  if (!conversations) return;

  const directConversations = conversations.filter(
    (convo) => convo.type === "direct"
  );

  return (
<<<<<<< HEAD
    <div className="flex-1 overflow-y-auto p-2 space-y-2">
=======
    <div className="flex-1 space-y-1 overflow-y-auto p-1">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      {directConversations.map((convo) => (
        <DirectMessageCard
          convo={convo}
          key={convo._id}
        />
      ))}
    </div>
  );
};

export default DirectMessageList;

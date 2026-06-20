import type { Friend } from "@/types/user";
import UserAvatar from "../chat/UserAvatar";

interface InviteSuggestionListProps {
  filteredFriends: Friend[];
  onSelect: (friend: Friend) => void;
}

const IniviteSuggestionList = ({
  filteredFriends,
  onSelect,
}: InviteSuggestionListProps) => {
  if (filteredFriends.length === 0) {
    return;
  }

  return (
<<<<<<< HEAD
    <div className="border rounded-lg mt-2 max-h-[180px] overflow-y-auto divide-y">
      {filteredFriends.map((friend) => (
        <div
          key={friend._id}
          className="flex items-center gap-3 p-2 cursor-pointer hover:bg-muted transition"
=======
    <div className="beautiful-scrollbar mt-2 max-h-[180px] overflow-y-auto rounded-lg border border-border/80 bg-card shadow-sm">
      {filteredFriends.map((friend) => (
        <div
          key={friend._id}
          className="flex cursor-pointer items-center gap-3 border-b border-border/60 p-2.5 transition last:border-b-0 hover:bg-accent"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          onClick={() => onSelect(friend)}
        >
          <UserAvatar
            type="chat"
            name={friend.displayName}
            avatarUrl={friend.avatarUrl}
          />

<<<<<<< HEAD
          <span className="font-medium">{friend.displayName}</span>
=======
          <span className="font-semibold">{friend.displayName}</span>
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        </div>
      ))}
    </div>
  );
};

export default IniviteSuggestionList;

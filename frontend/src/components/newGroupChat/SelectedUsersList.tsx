import type { Friend } from "@/types/user";
import UserAvatar from "../chat/UserAvatar";
import { X } from "lucide-react";

interface SelectedUsersListProps {
  invitedUsers: Friend[];
  onRemove: (user: Friend) => void;
}

const SelectedUsersList = ({ invitedUsers, onRemove }: SelectedUsersListProps) => {
  if (invitedUsers.length === 0) {
    return;
  }
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {invitedUsers.map((user) => (
        <div
          key={user._id}
<<<<<<< HEAD
          className="flex items-center gap-1 bg-muted text-sm rounded-full px-3 py-1"
=======
          className="flex items-center gap-2 rounded-full border border-border/80 bg-accent/70 px-3 py-1 text-sm text-accent-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        >
          <UserAvatar
            type="chat"
            name={user.displayName}
            avatarUrl={user.avatarUrl}
          />
          <span>{user.displayName}</span>

          <X
<<<<<<< HEAD
            className="size-3 cursor-pointer hover:text-destructive"
=======
            className="size-3 cursor-pointer text-muted-foreground hover:text-destructive"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            onClick={() => onRemove(user)}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectedUsersList;

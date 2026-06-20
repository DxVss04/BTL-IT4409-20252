import type { FriendRequest } from "@/types/user";
import type { ReactNode } from "react";
import UserAvatar from "../chat/UserAvatar";

interface RequestItemProps {
  requestInfo: FriendRequest;
  actions: ReactNode;
  type: "sent" | "received";
}

const FriendRequestItem = ({ requestInfo, actions, type }: RequestItemProps) => {
  if (!requestInfo) {
    return;
  }
  const info = type === "sent" ? requestInfo.to : requestInfo.from;

  if (!info) {
    return;
  }

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-between rounded-lg shadow-md border border-primary-foreground p-3">
=======
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border/80 bg-card p-3 shadow-sm">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      <div className="flex items-center gap-3">
        <UserAvatar
          type="sidebar"
          name={info.displayName}
        />
        <div>
<<<<<<< HEAD
          <p className="font-medium">{info.displayName}</p>
=======
          <p className="font-semibold">{info.displayName}</p>
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          <p className="text-sm text-muted-foreground">@{info.username}</p>
        </div>
      </div>
      {actions}
    </div>
  );
};

export default FriendRequestItem;

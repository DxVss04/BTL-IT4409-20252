import { useFriendStore } from "@/stores/useFriendStore";
import FriendRequestItem from "./FriendRequestItem";

const SentRequests = () => {
  const { sentList } = useFriendStore();

  if (!sentList || sentList.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Bạn chưa gửi lời mời kết bạn nào.
      </p>
    );
  }

  return (
<<<<<<< HEAD
    <div className="space-y-3 mt-4">
=======
    <div className="mt-4 space-y-3">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      <>
        {sentList.map((req) => (
          <FriendRequestItem
            key={req._id}
            requestInfo={req}
            type="sent"
            actions={
<<<<<<< HEAD
              <p className="text-muted-foreground text-sm">Đang chờ trả lời...</p>
=======
              <p className="text-sm text-muted-foreground">Đang chờ trả lời...</p>
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            }
          />
        ))}
      </>
    </div>
  );
};

export default SentRequests;

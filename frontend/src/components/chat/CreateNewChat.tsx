import { useFriendStore } from "@/stores/useFriendStore";
import { Card } from "../ui/card";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { MessageCircle } from "lucide-react";
import FriendListModal from "../createNewChat/FriendListModal";

const CreateNewChat = () => {
  const { getFriends } = useFriendStore();

  const handleGetFriends = async () => {
    await getFriends();
  };

  return (
    <div className="flex gap-2">
      <Card
<<<<<<< HEAD
        className="flex-1 p-3 glass hover:shadow-soft transition-smooth cursor-pointer group/card"
=======
        className="group/card flex-1 cursor-pointer p-3 transition-smooth glass hover:border-primary/25 hover:shadow-[var(--shadow-soft)]"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        onClick={handleGetFriends}
      >
        <Dialog>
          <DialogTrigger>
            <div className="flex items-center gap-4">
<<<<<<< HEAD
              <div className="size-8 bg-gradient-chat rounded-full flex items-center justify-center group-hover/card:scale-110 transition-bounce">
                <MessageCircle className="size-4 text-white" />
              </div>
              <span className="text-sm font-medium capitalize">
=======
              <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-chat shadow-sm transition-bounce group-hover/card:scale-105">
                <MessageCircle className="size-4 text-white" />
              </div>
              <span className="text-sm font-semibold capitalize text-foreground">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                gửi tin nhắn mới
              </span>
            </div>
          </DialogTrigger>

          <FriendListModal />
        </Dialog>
      </Card>
    </div>
  );
};

export default CreateNewChat;

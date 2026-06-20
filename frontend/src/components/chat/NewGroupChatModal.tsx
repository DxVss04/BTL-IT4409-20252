import { useFriendStore } from "@/stores/useFriendStore";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { UserPlus, Users } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import type { Friend } from "@/types/user";
import IniviteSuggestionList from "../newGroupChat/IniviteSuggestionList";
import SelectedUsersList from "../newGroupChat/SelectedUsersList";
import { toast } from "sonner";
import { useChatStore } from "@/stores/useChatStore";

const NewGroupChatModal = () => {
  const [groupName, setGroupName] = useState("");
  const [search, setSearch] = useState("");
  const { friends, getFriends } = useFriendStore();
  const [invitedUsers, setInvitedUsers] = useState<Friend[]>([]);
  const { loading, createConversation } = useChatStore();

  const handleGetFriends = async () => {
    await getFriends();
  };

  const handleSelectFriend = (friend: Friend) => {
    setInvitedUsers([...invitedUsers, friend]);
    setSearch("");
  };

  const handleRemoveFriend = (friend: Friend) => {
    setInvitedUsers(invitedUsers.filter((u) => u._id !== friend._id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (invitedUsers.length === 0) {
        toast.warning("Bạn phải mời ít nhất 1 thành viên vào nhóm");
        return;
      }

      await createConversation(
        "group",
        groupName,
        invitedUsers.map((u) => u._id)
      );

      setSearch("");
      setInvitedUsers([]);
    } catch (error) {
      console.error("Lỗi xảy ra khi handleSubmit trong NewGroupChatModal:", error);
    }
  };

  const filteredFriends = friends.filter(
    (friend) =>
      friend.displayName.toLowerCase().includes(search.toLowerCase()) &&
      !invitedUsers.some((u) => u._id === friend._id)
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
<<<<<<< HEAD
          onClick={handleGetFriends}
          className="flex z-10 justify-center items-center size-5 rounded-full hover:bg-sidebar-accent transition cursor-pointer"
=======
          size="icon-sm"
          onClick={handleGetFriends}
          className="z-10 flex size-6 cursor-pointer items-center justify-center rounded-md text-sidebar-foreground/70 transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        >
          <Users className="size-4" />
          <span className="sr-only">Tạo nhóm</span>
        </Button>
      </DialogTrigger>

<<<<<<< HEAD
      <DialogContent className="sm:max-w-[425px] border-none">
=======
      <DialogContent className="border-border/80 sm:max-w-[425px]">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        <DialogHeader>
          <DialogTitle className="capitalize">tạo nhóm chat mới</DialogTitle>
        </DialogHeader>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {/* tên nhóm */}
          <div className="space-y-2">
            <Label
              htmlFor="groupName"
<<<<<<< HEAD
              className="text-sm font-semibold"
=======
            className="text-sm font-semibold text-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            >
              Tên nhóm
            </Label>
            <Input
              id="groupName"
              placeholder="Gõ tên nhóm vào đây..."
<<<<<<< HEAD
              className="glass border-border/50 focus:border-primary/50 transition-smooth"
=======
              className="border-border/80 bg-background transition-smooth focus:border-primary/50"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
          </div>

          {/* mời thành viên */}
          <div className="space-y-2">
            <Label
              htmlFor="invite"
<<<<<<< HEAD
              className="text-sm font-semibold"
=======
              className="text-sm font-semibold text-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            >
              Mời thành viên
            </Label>

            <Input
              id="invite"
              placeholder="Tìm theo tên hiển thị..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
<<<<<<< HEAD
              className="flex-1"
=======
              className="flex-1 bg-background"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            />

            {/* danh sách gợi ý */}
            {search && filteredFriends.length > 0 && (
              <IniviteSuggestionList
                filteredFriends={filteredFriends}
                onSelect={handleSelectFriend}
              />
            )}

            {/* danh sách user đã chọn */}
            <SelectedUsersList
              invitedUsers={invitedUsers}
              onRemove={handleRemoveFriend}
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={loading}
<<<<<<< HEAD
              className="flex-1 bg-gradient-chat text-white hover:opacity-90 transition-smooth"
=======
              className="flex-1 bg-gradient-chat text-white transition-smooth hover:shadow-[var(--shadow-glow)]"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            >
              {loading ? (
                <span>Đang tạo...</span>
              ) : (
                <>
                  <UserPlus className="size-4 mr-2" />
                  Tạo nhóm
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewGroupChatModal;

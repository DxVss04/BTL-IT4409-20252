import type { UseFormRegister } from "react-hook-form";
import type { IFormValues } from "../chat/AddFriendModal";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { UserPlus } from "lucide-react";

interface SendRequestProps {
  register: UseFormRegister<IFormValues>;
  loading: boolean;
  searchedUsername: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
}

const SendFriendRequestForm = ({
  register,
  loading,
  searchedUsername,
  onSubmit,
  onBack,
}: SendRequestProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        <span className="success-message">
          Tìm thấy <span className="font-semibold">@{searchedUsername}</span> rồi nè
          🎉
        </span>

        <div className="space-y-4">
          <Label
            htmlFor="message"
<<<<<<< HEAD
            className="text-sm font-semibold"
=======
            className="text-sm font-semibold text-foreground"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          >
            Giới thiệu
          </Label>
          <Textarea
            id="message"
            rows={3}
            placeholder="Chào bạn ~ Có thể kết bạn được không?..."
<<<<<<< HEAD
            className="glass border-border/50 focus:border-primary/50 transition-smooth resize-none"
=======
            className="resize-none border-border/80 bg-background transition-smooth focus:border-primary/50"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            {...register("message")}
          />
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
<<<<<<< HEAD
            className="flex-1 glass hover:text-destructive"
=======
            className="flex-1 hover:border-destructive/25 hover:text-destructive"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            onClick={onBack}
          >
            Quay lại
          </Button>

          <Button
            type="submit"
            disabled={loading}
<<<<<<< HEAD
            className="flex-1 bg-gradient-chat text-white hover:opactity-90 transition-smooth"
=======
            className="flex-1 bg-gradient-chat text-white transition-smooth hover:shadow-[var(--shadow-glow)]"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          >
            {loading ? (
              <span>Đang gửi...</span>
            ) : (
              <>
                <UserPlus className="size-4 mr-2" /> Kết Bạn
              </>
            )}
          </Button>
        </DialogFooter>
      </div>
    </form>
  );
};

export default SendFriendRequestForm;

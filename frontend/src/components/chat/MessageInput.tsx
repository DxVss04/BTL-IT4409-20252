import { useAuthStore } from "@/stores/useAuthStore";
<<<<<<< HEAD
import type { Conversation } from "@/types/chat";
import { useState } from "react";
import { Button } from "../ui/button";
import { ImagePlus, Send } from "lucide-react";
import { Input } from "../ui/input";
import EmojiPicker from "./EmojiPicker";
import { useChatStore } from "@/stores/useChatStore";
import { toast } from "sonner";
=======
import { useChatStore } from "@/stores/useChatStore";
import type { Conversation } from "@/types/chat";
import { ImagePlus, Send, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import EmojiPicker from "./EmojiPicker";
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8

const MessageInput = ({ selectedConvo }: { selectedConvo: Conversation }) => {
  const { user } = useAuthStore();
  const { sendDirectMessage, sendGroupMessage } = useChatStore();
  const [value, setValue] = useState("");
<<<<<<< HEAD

  if (!user) return;

  const sendMessage = async () => {
    if (!value.trim()) return;
    const currValue = value;
    setValue("");

    try {
      if (selectedConvo.type === "direct") {
        const participants = selectedConvo.participants;
        const otherUser = participants.filter((p) => p._id !== user._id)[0];
        await sendDirectMessage(otherUser._id, currValue);
      } else {
        await sendGroupMessage(selectedConvo._id, currValue);
      }
    } catch (error) {
      console.error(error);
      toast.error("Lỗi xảy ra khi gửi tin nhắn. Bạn hãy thử lại!");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
=======
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!user) return null;

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      toast.error("Chi co the gui file anh");
      clearImage();
      return;
    }

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const sendMessage = async () => {
    if (sending || (!value.trim() && !image)) return;

    const currValue = value.trim();
    const currImage = image;

    setSending(true);
    setValue("");
    clearImage();

    try {
      if (selectedConvo.type === "direct") {
        const otherUser = selectedConvo.participants.find((p) => p._id !== user._id);

        if (!otherUser) {
          return;
        }

        await sendDirectMessage(otherUser._id, currValue, currImage);
      } else {
        await sendGroupMessage(selectedConvo._id, currValue, currImage);
      }
    } catch (error) {
      console.error(error);
      toast.error("Loi xay ra khi gui tin nhan. Ban hay thu lai!");
      setValue(currValue);
      if (currImage) {
        setImage(currImage);
        setImagePreview(URL.createObjectURL(currImage));
      }
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex items-center gap-2 p-3 min-h-[56px] bg-background">
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-primary/10 transition-smooth"
      >
        <ImagePlus className="size-4" />
      </Button>

      <div className="flex-1 relative">
        <Input
          onKeyPress={handleKeyPress}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Soạn tin nhắn..."
          className="pr-20 h-9 bg-white border-border/50 focus:border-primary/50 transition-smooth resize-none"
        ></Input>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-8 hover:bg-primary/10 transition-smooth"
          >
            <div>
              <EmojiPicker
                onChange={(emoji: string) => setValue(`${value}${emoji}`)}
              />
            </div>
          </Button>
        </div>
      </div>

      <Button
        onClick={sendMessage}
        className="bg-gradient-chat hover:shadow-glow transition-smooth hover:scale-105"
        disabled={!value.trim()}
      >
        <Send className="size-4 text-white" />
      </Button>
=======
    <div className="flex flex-col gap-2 border-t border-border/70 bg-card/95 p-3 backdrop-blur sm:px-4">
      {imagePreview && (
        <div className="relative w-fit max-w-[220px]">
          <img
            src={imagePreview}
            alt="Anh sap gui"
            className="max-h-32 rounded-lg border border-border object-contain"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon-sm"
            className="absolute -right-2 -top-2"
            onClick={clearImage}
          >
            <X className="size-4" />
          </Button>
        </div>
      )}

      <div className="flex min-h-[48px] items-center gap-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="transition-smooth hover:bg-accent hover:text-accent-foreground"
          onClick={() => fileInputRef.current?.click()}
          disabled={sending}
        >
          <ImagePlus className="size-4" />
        </Button>

        <div className="flex-1 relative">
          <Input
            onKeyDown={handleKeyDown}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Soan tin nhan..."
            className="h-11 resize-none border-border/80 bg-background pr-20 transition-smooth focus:border-primary/50"
            disabled={sending}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="size-8 transition-smooth hover:bg-accent hover:text-accent-foreground"
              disabled={sending}
            >
              <div>
                <EmojiPicker
                  onChange={(emoji: string) => setValue(`${value}${emoji}`)}
                />
              </div>
            </Button>
          </div>
        </div>

        <Button
          onClick={sendMessage}
          className="h-11 bg-gradient-chat px-4 text-white transition-smooth hover:shadow-[var(--shadow-glow)]"
          disabled={sending || (!value.trim() && !image)}
        >
          <Send className="size-4 text-white" />
        </Button>
      </div>
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    </div>
  );
};

export default MessageInput;

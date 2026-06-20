import { cn, formatMessageTime } from "@/lib/utils";
import type { Conversation, Message, Participant } from "@/types/chat";
import UserAvatar from "./UserAvatar";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface MessageItemProps {
  message: Message;
  index: number;
  messages: Message[];
  selectedConvo: Conversation;
  lastMessageStatus: "delivered" | "seen";
}

const MessageItem = ({
  message,
  index,
  messages,
  selectedConvo,
  lastMessageStatus,
}: MessageItemProps) => {
  const prev = index + 1 < messages.length ? messages[index + 1] : undefined;

  const isShowTime =
    index === 0 ||
    new Date(message.createdAt).getTime() -
      new Date(prev?.createdAt || 0).getTime() >
      300000; // 5 phút

  const isGroupBreak = isShowTime || message.senderId !== prev?.senderId;

  const participant = selectedConvo.participants.find(
    (p: Participant) => p._id.toString() === message.senderId.toString()
  );

  return (
    <>
      {/* time */}
      {isShowTime && (
<<<<<<< HEAD
        <span className="flex justify-center text-xs text-muted-foreground px-1">
=======
        <span className="my-4 flex justify-center px-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          {formatMessageTime(new Date(message.createdAt))}
        </span>
      )}

      <div
        className={cn(
<<<<<<< HEAD
          "flex gap-2 message-bounce mt-1",
=======
          "message-bounce mt-1.5 flex gap-2",
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          message.isOwn ? "justify-end" : "justify-start"
        )}
      >
        {/* avatar */}
        {!message.isOwn && (
          <div className="w-8">
            {isGroupBreak && (
              <UserAvatar
                type="chat"
<<<<<<< HEAD
                name={participant?.displayName ?? "Moji"}
=======
                name={participant?.displayName ?? "Ugmail"}
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                avatarUrl={participant?.avatarUrl ?? undefined}
              />
            )}
          </div>
        )}

        {/* tin nhắn */}
        <div
          className={cn(
<<<<<<< HEAD
            "max-w-xs lg:max-w-md space-y-1 flex flex-col",
=======
            "flex max-w-xs flex-col space-y-1 lg:max-w-md",
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            message.isOwn ? "items-end" : "items-start"
          )}
        >
          <Card
            className={cn(
<<<<<<< HEAD
              "p-3",
              message.isOwn ? "chat-bubble-sent border-0" : "chat-bubble-received"
            )}
          >
            <p className="text-sm leading-relaxed break-words">{message.content}</p>
=======
              "overflow-hidden rounded-2xl px-3.5 py-2.5",
              message.imgUrl && "p-1",
              message.isOwn ? "chat-bubble-sent border-0" : "chat-bubble-received"
            )}
          >
            {message.imgUrl && (
              <img
                src={message.imgUrl}
                alt="Anh trong tin nhan"
                className="max-h-80 max-w-full rounded-xl object-contain"
                loading="lazy"
              />
            )}
            {message.content && (
              <p
                className={cn(
                  "break-words text-sm leading-relaxed",
                  message.imgUrl && "px-2 py-1.5"
                )}
              >
                {message.content}
              </p>
            )}
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          </Card>

          {/* seen/ delivered */}
          {message.isOwn && message._id === selectedConvo.lastMessage?._id && (
            <Badge
              variant="outline"
              className={cn(
<<<<<<< HEAD
                "text-xs px-1.5 py-0.5 h-4 border-0",
=======
                "h-5 border-0 px-2 py-0.5 text-[11px] font-semibold",
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
                lastMessageStatus === "seen"
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {lastMessageStatus}
            </Badge>
          )}
        </div>
      </div>
    </>
  );
};

export default MessageItem;

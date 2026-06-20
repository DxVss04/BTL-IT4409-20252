import { SidebarInset } from "../ui/sidebar";
import ChatWindowHeader from "./ChatWindowHeader";

const ChatWelcomeScreen = () => {
  return (
<<<<<<< HEAD
    <SidebarInset className="flex w-full h-full bg-transparent">
      <ChatWindowHeader />
      <div className="flex bg-primary-foreground rounded-2xl flex-1 items-center justify-center">
        <div className="text-center">
          <div className="size-24 mx-auto mb-6 bg-gradient-chat rounded-full flex items-center justify-center shadow-glow pulse-ring">
            <span className="text-3xl">💬</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 bg-gradient-chat bg-clip-text text-transparent">
            Chào mừng bạn đến với Moji!
          </h2>
          <p className="text-muted-foreground">
=======
    <SidebarInset className="flex h-full w-full overflow-hidden rounded-lg bg-card">
      <ChatWindowHeader />
      <div className="flex flex-1 items-center justify-center bg-secondary/50 px-6 dark:bg-background">
        <div className="max-w-md text-center">
          <div className="pulse-ring mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-gradient-chat shadow-glow">
            <span className="text-3xl">💬</span>
          </div>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
            Chào mừng bạn đến với Ugmail!
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            Chọn một cuộc hội thoại để bắt đầu chat!
          </p>
        </div>
      </div>
    </SidebarInset>
  );
};

export default ChatWelcomeScreen;

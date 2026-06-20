import ChatWindowLayout from "@/components/chat/ChatWindowLayout";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const ChatAppPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

<<<<<<< HEAD
      <div className="flex h-screen w-full p-2">
=======
      <div className="flex h-screen w-full p-2 md:p-3">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        <ChatWindowLayout />
      </div>
    </SidebarProvider>
  );
};

export default ChatAppPage;

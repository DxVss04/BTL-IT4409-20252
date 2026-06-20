import { SidebarInset } from "../ui/sidebar";

const ChatWindowSkeleton = () => {
  return (
<<<<<<< HEAD
    <SidebarInset className="flex w-full h-full bg-transparent animate-pulse">
      <div className="flex bg-primary-foreground rounded-2xl flex-1 items-center justify-center">
        <div className="text-center space-y-4">
          <div className="size-42 mx-auto mb-6 bg-muted rounded-full shadow-inner" />
          <div className="w-96 h-10 bg-muted rounded mx-auto" />
          <div className="w-72 h-8 bg-muted rounded mx-auto" />
=======
    <SidebarInset className="flex h-full w-full animate-pulse rounded-lg bg-card">
      <div className="flex flex-1 items-center justify-center bg-secondary/50 dark:bg-background">
        <div className="space-y-4 text-center">
          <div className="mx-auto mb-6 size-24 rounded-full bg-muted shadow-inner" />
          <div className="mx-auto h-10 w-80 max-w-[70vw] rounded bg-muted" />
          <div className="mx-auto h-8 w-64 max-w-[60vw] rounded bg-muted" />
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        </div>
      </div>
    </SidebarInset>
  );
};

export default ChatWindowSkeleton;

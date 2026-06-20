import { Card } from "../ui/card";

const ConversationSkeleton = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card
          key={index}
<<<<<<< HEAD
          className="border-none p-3 glass animate-pulse"
=======
          className="animate-pulse border border-border/70 bg-transparent p-3 shadow-none"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        >
          <div className="flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="size-10 rounded-full bg-muted" />

            {/* Info skeleton */}
            <div className="flex-1 space-y-2">
<<<<<<< HEAD
              <div className="h-3 w-1/2 bg-muted rounded" />
              <div className="h-3 w-3/4 bg-muted rounded" />
=======
              <div className="h-3 w-1/2 rounded bg-muted" />
              <div className="h-3 w-3/4 rounded bg-muted" />
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default ConversationSkeleton;

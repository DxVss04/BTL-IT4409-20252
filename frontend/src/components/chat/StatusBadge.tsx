import { cn } from "@/lib/utils";

const StatusBadge = ({ status }: { status: "online" | "offline" }) => {
  return (
    <div
      className={cn(
<<<<<<< HEAD
        "absolute -bottom-0.5 -right-0.5 size-4 rounded-full border-2 border-card",
=======
        "absolute -bottom-0.5 -right-0.5 size-4 rounded-full border-2 border-card shadow-sm",
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        status === "online" && "status-online",
        status === "offline" && "status-offline"
      )}
    ></div>
  );
};

export default StatusBadge;

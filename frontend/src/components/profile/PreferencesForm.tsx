import { Sun, Moon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
<<<<<<< HEAD
import { useThemeStore } from "@/stores/useThemeStore";
import { useState } from "react";

const PreferencesForm = () => {
  const { isDark, toggleTheme } = useThemeStore();

  //   các bạn cần handle logic setOnlineStatus
  const [onlineStatus, setOnlineStatus] = useState(false);

  return (
    <Card className="glass-strong border-border/30">
=======
import { useAuthStore } from "@/stores/useAuthStore";
import { useThemeStore } from "@/stores/useThemeStore";
import { useUserStore } from "@/stores/useUserStore";

const PreferencesForm = () => {
  const { user } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();
  const { updateProfile } = useUserStore();

  const handleOnlineStatusChange = async (checked: boolean) => {
    await updateProfile({ showOnlineStatus: checked });
  };

  return (
    <Card className="glass-strong">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-primary" />
          Tuỳ chỉnh ứng dụng
        </CardTitle>
        <CardDescription>Cá nhân hoá trải nghiệm trò chuyện của bạn</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
<<<<<<< HEAD
        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <div>
            <Label
              htmlFor="theme-toggle"
              className="text-base font-medium"
            >
=======
        <div className="flex items-center justify-between gap-4 rounded-lg border border-border/70 bg-background p-4">
          <div>
            <Label htmlFor="theme-toggle" className="text-base font-semibold">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
              Chế độ tối
            </Label>
            <p className="text-sm text-muted-foreground">
              Chuyển đổi giữa giao diện sáng và tối
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-muted-foreground" />
            <Switch
              id="theme-toggle"
              checked={isDark}
              onCheckedChange={toggleTheme}
<<<<<<< HEAD
              className="data-[state=checked]:bg-primary-glow"
=======
              className="data-[state=checked]:bg-primary"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            />
            <Moon className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

<<<<<<< HEAD
        {/* Online Status */}
        <div className="flex items-center justify-between">
          <div>
            <Label
              htmlFor="online-status"
              className="text-base font-medium"
            >
=======
        <div className="flex items-center justify-between gap-4 rounded-lg border border-border/70 bg-background p-4">
          <div>
            <Label htmlFor="online-status" className="text-base font-semibold">
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
              Hiển thị trạng thái online
            </Label>
            <p className="text-sm text-muted-foreground">
              Cho phép người khác thấy khi bạn đang online
            </p>
          </div>
          <Switch
            id="online-status"
<<<<<<< HEAD
            checked={onlineStatus}
            onCheckedChange={setOnlineStatus}
            className="data-[state=checked]:bg-primary-glow"
=======
            checked={user?.showOnlineStatus ?? true}
            onCheckedChange={handleOnlineStatusChange}
            className="data-[state=checked]:bg-primary"
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PreferencesForm;

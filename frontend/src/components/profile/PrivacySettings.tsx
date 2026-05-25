import { Shield, Bell, ShieldBan } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PrivacySettings = () => (
  <Card className="glass-strong">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        Quyền riêng tư & Bảo mật
      </CardTitle>
      <CardDescription>
        Quản lý cài đặt quyền riêng tư và bảo mật của bạn
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6">
      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full justify-start bg-background hover:border-warning/30 hover:text-warning"
        >
          <Shield className="h-4 w-4 mr-2" />
          Đổi mật khẩu
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start bg-background hover:border-info/30 hover:text-info"
        >
          <Bell className="h-4 w-4 mr-2" />
          Cài đặt thông báo
        </Button>

        <Button
          variant="outline"
          className="w-full justify-start bg-background hover:border-destructive/30 hover:text-destructive"
        >
          <ShieldBan className="size-4 mr-2" />
          Chặn & Báo cáo
        </Button>
      </div>

      <div className="border-t border-border/70 pt-4">
        <h4 className="mb-3 font-semibold text-destructive">Khu vực nguy hiểm</h4>
        <Button
          variant="destructive"
          className="w-full"
        >
          Xoá tài khoản
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default PrivacySettings;

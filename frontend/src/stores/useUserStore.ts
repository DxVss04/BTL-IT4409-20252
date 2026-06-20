import { userService } from "@/services/userService";
import type { UserState } from "@/types/store";
import { create } from "zustand";
<<<<<<< HEAD
import { useAuthStore } from "./useAuthStore";
import { toast } from "sonner";
import { useChatStore } from "./useChatStore";

export const useUserStore = create<UserState>((set, get) => ({
=======
import { toast } from "sonner";
import { useAuthStore } from "./useAuthStore";
import { useChatStore } from "./useChatStore";
import { useSocketStore } from "./useSocketStore";

export const useUserStore = create<UserState>(() => ({
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  updateAvatarUrl: async (formData) => {
    try {
      const { user, setUser } = useAuthStore.getState();
      const data = await userService.uploadAvatar(formData);

      if (user) {
        setUser({
          ...user,
          avatarUrl: data.avatarUrl,
        });

        useChatStore.getState().fetchConversations();
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Lỗi khi updateAvatarUrl", error);
      toast.error("Upload avatar không thành công!");
=======
      console.error("Loi khi updateAvatarUrl", error);
      toast.error("Upload avatar khong thanh cong!");
    }
  },

  updateProfile: async (payload) => {
    try {
      const user = await userService.updateProfile(payload);
      useAuthStore.getState().setUser(user);

      if (payload.showOnlineStatus !== undefined) {
        useSocketStore
          .getState()
          .socket?.emit("online-visibility", payload.showOnlineStatus);
      }

      useChatStore.getState().fetchConversations();
      return user;
    } catch (error) {
      console.error("Loi khi updateProfile", error);
      toast.error("Cap nhat thong tin khong thanh cong!");
      throw error;
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    try {
      await userService.changePassword(currentPassword, newPassword);
      toast.success("Da doi mat khau. Vui long dang nhap lai.");
      useAuthStore.getState().clearState();
    } catch (error) {
      console.error("Loi khi changePassword", error);
      toast.error("Doi mat khau khong thanh cong!");
      throw error;
    }
  },

  blockAndReportUser: async (username, reason) => {
    try {
      const user = await userService.blockAndReportUser(username, reason);
      useAuthStore.getState().setUser(user);
      toast.success("Da chan nguoi dung va ghi nhan bao cao.");
    } catch (error) {
      console.error("Loi khi blockAndReportUser", error);
      toast.error("Khong the chan hoac bao cao nguoi dung nay!");
      throw error;
    }
  },

  deleteAccount: async () => {
    try {
      await userService.deleteAccount();
      toast.success("Da xoa tai khoan.");
      useAuthStore.getState().clearState();
    } catch (error) {
      console.error("Loi khi deleteAccount", error);
      toast.error("Xoa tai khoan khong thanh cong!");
      throw error;
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    }
  },
}));

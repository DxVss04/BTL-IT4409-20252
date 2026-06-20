import { friendService } from "@/services/friendService";
import type { FriendState } from "@/types/store";
import { create } from "zustand";

<<<<<<< HEAD
export const useFriendStore = create<FriendState>((set, get) => ({
=======
export const useFriendStore = create<FriendState>((set) => ({
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  friends: [],
  loading: false,
  receivedList: [],
  sentList: [],
<<<<<<< HEAD
=======
  hasUnreadFriendRequest: false,
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  searchByUsername: async (username) => {
    try {
      set({ loading: true });

      const user = await friendService.searchByUsername(username);

      return user;
    } catch (error) {
      console.error("Lỗi xảy ra khi tìm user bằng username", error);
      return null;
    } finally {
      set({ loading: false });
    }
  },
  addFriend: async (to, message) => {
    try {
      set({ loading: true });
      const resultMessage = await friendService.sendFriendRequest(to, message);
      return resultMessage;
    } catch (error) {
      console.error("Lỗi xảy ra khi addFriend", error);
      return "Lỗi xảy ra khi gửi kết bạn. Hãy thử lại";
    } finally {
      set({ loading: false });
    }
  },
<<<<<<< HEAD
=======
  addReceivedRequest: (request) => {
    set((state) => {
      const exists = state.receivedList.some((r) => r._id === request._id);

      return {
        receivedList: exists
          ? state.receivedList
          : [request, ...state.receivedList],
        hasUnreadFriendRequest: true,
      };
    });
  },
  addSentRequest: (request) => {
    set((state) => {
      const exists = state.sentList.some((r) => r._id === request._id);

      return {
        sentList: exists ? state.sentList : [request, ...state.sentList],
      };
    });
  },
  markFriendRequestsSeen: () => {
    set({ hasUnreadFriendRequest: false });
  },
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  getAllFriendRequests: async () => {
    try {
      set({ loading: true });

      const result = await friendService.getAllFriendRequest();

      if (!result) return;

      const { received, sent } = result;

      set({ receivedList: received, sentList: sent });
    } catch (error) {
      console.error("Lỗi xảy ra khi getAllFriendRequests", error);
    } finally {
      set({ loading: false });
    }
  },
  acceptRequest: async (requestId) => {
    try {
      set({ loading: true });
      await friendService.acceptRequest(requestId);

      set((state) => ({
        receivedList: state.receivedList.filter((r) => r._id !== requestId),
      }));
    } catch (error) {
      console.error("Lỗi xảy ra khi acceptRequest", error);
    }
  },
  declineRequest: async (requestId) => {
    try {
      set({ loading: true });
      await friendService.declineRequest(requestId);

      set((state) => ({
        receivedList: state.receivedList.filter((r) => r._id !== requestId),
      }));
    } catch (error) {
      console.error("Lỗi xảy ra khi declineRequest", error);
    } finally {
      set({ loading: false });
    }
  },
  getFriends: async () => {
    try {
      set({ loading: true });
      const friends = await friendService.getFriendList();
      set({ friends: friends });
    } catch (error) {
      console.error("Lỗi xảy ra khi load friends", error);
      set({ friends: [] });
    } finally {
      set({ loading: false });
    }
  },
}));

import { chatService } from "@/services/chatService";
import type { ChatState } from "@/types/store";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useAuthStore } from "./useAuthStore";
import { useSocketStore } from "./useSocketStore";

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      conversations: [],
      messages: {},
      activeConversationId: null,
<<<<<<< HEAD
      convoLoading: false, // convo loading
=======
      convoLoading: false,
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
      messageLoading: false,
      loading: false,

      setActiveConversation: (id) => set({ activeConversationId: id }),
      reset: () => {
        set({
          conversations: [],
          messages: {},
          activeConversationId: null,
          convoLoading: false,
          messageLoading: false,
        });
      },
      fetchConversations: async () => {
        try {
          set({ convoLoading: true });
          const { conversations } = await chatService.fetchConversations();

          set({ conversations, convoLoading: false });
        } catch (error) {
<<<<<<< HEAD
          console.error("Lỗi xảy ra khi fetchConversations:", error);
=======
          console.error("Loi xay ra khi fetchConversations:", error);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          set({ convoLoading: false });
        }
      },
      fetchMessages: async (conversationId) => {
        const { activeConversationId, messages } = get();
        const { user } = useAuthStore.getState();

        const convoId = conversationId ?? activeConversationId;

        if (!convoId) return;

        const current = messages?.[convoId];
        const nextCursor =
          current?.nextCursor === undefined ? "" : current?.nextCursor;

        if (nextCursor === null) return;

        set({ messageLoading: true });

        try {
          const { messages: fetched, cursor } = await chatService.fetchMessages(
            convoId,
            nextCursor
          );

          const processed = fetched.map((m) => ({
            ...m,
            isOwn: m.senderId === user?._id,
          }));

          set((state) => {
            const prev = state.messages[convoId]?.items ?? [];
            const merged = prev.length > 0 ? [...processed, ...prev] : processed;

            return {
              messages: {
                ...state.messages,
                [convoId]: {
                  items: merged,
                  hasMore: !!cursor,
                  nextCursor: cursor ?? null,
                },
              },
            };
          });
        } catch (error) {
<<<<<<< HEAD
          console.error("Lỗi xảy ra khi fetchMessages:", error);
=======
          console.error("Loi xay ra khi fetchMessages:", error);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        } finally {
          set({ messageLoading: false });
        }
      },
<<<<<<< HEAD
      sendDirectMessage: async (recipientId, content, imgUrl) => {
=======
      sendDirectMessage: async (recipientId, content, image) => {
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        try {
          const { activeConversationId } = get();
          await chatService.sendDirectMessage(
            recipientId,
            content,
<<<<<<< HEAD
            imgUrl,
=======
            image,
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
            activeConversationId || undefined
          );
          set((state) => ({
            conversations: state.conversations.map((c) =>
              c._id === activeConversationId ? { ...c, seenBy: [] } : c
            ),
          }));
        } catch (error) {
<<<<<<< HEAD
          console.error("Lỗi xảy ra khi gửi direct message", error);
        }
      },
      sendGroupMessage: async (conversationId, content, imgUrl) => {
        try {
          await chatService.sendGroupMessage(conversationId, content, imgUrl);
=======
          console.error("Loi xay ra khi gui direct message", error);
          throw error;
        }
      },
      sendGroupMessage: async (conversationId, content, image) => {
        try {
          await chatService.sendGroupMessage(conversationId, content, image);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
          set((state) => ({
            conversations: state.conversations.map((c) =>
              c._id === get().activeConversationId ? { ...c, seenBy: [] } : c
            ),
          }));
        } catch (error) {
<<<<<<< HEAD
          console.error("Lỗi xảy ra gửi group message", error);
=======
          console.error("Loi xay ra khi gui group message", error);
          throw error;
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        }
      },
      addMessage: async (message) => {
        try {
          const { user } = useAuthStore.getState();
          const { fetchMessages } = get();

          message.isOwn = message.senderId === user?._id;

          const convoId = message.conversationId;

          let prevItems = get().messages[convoId]?.items ?? [];

          if (prevItems.length === 0) {
            await fetchMessages(message.conversationId);
            prevItems = get().messages[convoId]?.items ?? [];
          }

          set((state) => {
            if (prevItems.some((m) => m._id === message._id)) {
              return state;
            }

            return {
              messages: {
                ...state.messages,
                [convoId]: {
                  items: [...prevItems, message],
                  hasMore: state.messages[convoId].hasMore,
                  nextCursor: state.messages[convoId].nextCursor ?? undefined,
                },
              },
            };
          });
        } catch (error) {
<<<<<<< HEAD
          console.error("Lỗi xảy khi ra add message:", error);
=======
          console.error("Loi xay khi ra add message:", error);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        }
      },
      updateConversation: (conversation) => {
        set((state) => ({
          conversations: state.conversations.map((c) =>
            c._id === conversation._id ? { ...c, ...conversation } : c
          ),
        }));
      },
      markAsSeen: async () => {
        try {
          const { user } = useAuthStore.getState();
          const { activeConversationId, conversations } = get();

          if (!activeConversationId || !user) {
            return;
          }

          const convo = conversations.find((c) => c._id === activeConversationId);

          if (!convo) {
            return;
          }

          if ((convo.unreadCounts?.[user._id] ?? 0) === 0) {
            return;
          }

          await chatService.markAsSeen(activeConversationId);

          set((state) => ({
            conversations: state.conversations.map((c) =>
              c._id === activeConversationId && c.lastMessage
                ? {
                    ...c,
                    unreadCounts: {
                      ...c.unreadCounts,
                      [user._id]: 0,
                    },
                  }
                : c
            ),
          }));
        } catch (error) {
<<<<<<< HEAD
          console.error("Lỗi xảy ra khi gọi markAsSeen trong store", error);
=======
          console.error("Loi xay ra khi goi markAsSeen trong store", error);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        }
      },
      addConvo: (convo) => {
        set((state) => {
          const exists = state.conversations.some(
            (c) => c._id.toString() === convo._id.toString()
          );

          return {
            conversations: exists
              ? state.conversations
              : [convo, ...state.conversations],
            activeConversationId: convo._id,
          };
        });
      },
      createConversation: async (type, name, memberIds) => {
        try {
          set({ loading: true });
          const conversation = await chatService.createConversation(
            type,
            name,
            memberIds
          );

          get().addConvo(conversation);

          useSocketStore
            .getState()
            .socket?.emit("join-conversation", conversation._id);
        } catch (error) {
<<<<<<< HEAD
          console.error("Lỗi xảy ra khi gọi createConversation trong store", error);
=======
          console.error("Loi xay ra khi goi createConversation trong store", error);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
        } finally {
          set({ loading: false });
        }
      },
<<<<<<< HEAD
=======
      deleteConversation: async (conversationId) => {
        try {
          await chatService.deleteConversation(conversationId);
          set((state) => {
            const nextMessages = { ...state.messages };
            delete nextMessages[conversationId];

            return {
              conversations: state.conversations.filter(
                (c) => c._id !== conversationId
              ),
              messages: nextMessages,
              activeConversationId:
                state.activeConversationId === conversationId
                  ? null
                  : state.activeConversationId,
            };
          });
        } catch (error) {
          console.error("Loi xay ra khi xoa conversation", error);
          throw error;
        }
      },
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    }),
    {
      name: "chat-storage",
      partialize: (state) => ({ conversations: state.conversations }),
    }
  )
);

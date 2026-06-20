import api from "@/lib/axios";
<<<<<<< HEAD
import type { ConversationResponse, Message } from "@/types/chat";
=======
import type { Conversation, ConversationResponse, Message } from "@/types/chat";
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8

interface FetchMessageProps {
  messages: Message[];
  cursor?: string;
}

const pageLimit = 50;

export const chatService = {
  async fetchConversations(): Promise<ConversationResponse> {
    const res = await api.get("/conversations");
    return res.data;
  },

  async fetchMessages(id: string, cursor?: string): Promise<FetchMessageProps> {
    const res = await api.get(
      `/conversations/${id}/messages?limit=${pageLimit}&cursor=${cursor}`
    );

    return { messages: res.data.messages, cursor: res.data.nextCursor };
  },

  async sendDirectMessage(
    recipientId: string,
    content: string = "",
<<<<<<< HEAD
    imgUrl?: string,
    conversationId?: string
  ) {
    const res = await api.post("/messages/direct", {
      recipientId,
      content,
      imgUrl,
      conversationId,
    });
=======
    image?: File | null,
    conversationId?: string
  ) {
    const formData = new FormData();
    formData.append("recipientId", recipientId);
    formData.append("content", content);

    if (conversationId) {
      formData.append("conversationId", conversationId);
    }

    if (image) {
      formData.append("image", image);
    }

    const res = await api.post("/messages/direct", formData);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8

    return res.data.message;
  },

  async sendGroupMessage(
    conversationId: string,
    content: string = "",
<<<<<<< HEAD
    imgUrl?: string
  ) {
    const res = await api.post("/messages/group", {
      conversationId,
      content,
      imgUrl,
    });
=======
    image?: File | null
  ) {
    const formData = new FormData();
    formData.append("conversationId", conversationId);
    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }

    const res = await api.post("/messages/group", formData);
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
    return res.data.message;
  },

  async markAsSeen(conversationId: string) {
    const res = await api.patch(`/conversations/${conversationId}/seen`);
    return res.data;
  },

  async createConversation(
    type: "direct" | "group",
    name: string,
    memberIds: string[]
<<<<<<< HEAD
  ) {
    const res = await api.post("/conversations", { type, name, memberIds });
    return res.data.conversation;
  },
=======
  ): Promise<Conversation> {
    const res = await api.post("/conversations", { type, name, memberIds });
    return res.data.conversation;
  },

  async deleteConversation(conversationId: string) {
    const res = await api.delete(`/conversations/${conversationId}`);
    return res.data;
  },
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
};

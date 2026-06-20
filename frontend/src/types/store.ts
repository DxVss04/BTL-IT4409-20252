import type { Socket } from "socket.io-client";
import type { Conversation, Message } from "./chat";
import type { Friend, FriendRequest, User } from "./user";

export interface AuthState {
  accessToken: string | null;
  user: User | null;
  loading: boolean;

  setAccessToken: (accessToken: string) => void;
  setUser: (user: User) => void;
  clearState: () => void;
  signUp: (
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  fetchMe: () => Promise<void>;
  refresh: () => Promise<void>;
}

export interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
}

export interface ChatState {
  conversations: Conversation[];
  messages: Record<
    string,
    {
      items: Message[];
      hasMore: boolean; // infinite-scroll
      nextCursor?: string | null; // phân trang
    }
  >;
  activeConversationId: string | null;
  convoLoading: boolean;
  messageLoading: boolean;
  loading: boolean;
  reset: () => void;

  setActiveConversation: (id: string | null) => void;
  fetchConversations: () => Promise<void>;
  fetchMessages: (conversationId?: string) => Promise<void>;
  sendDirectMessage: (
    recipientId: string,
    content: string,
<<<<<<< HEAD
    imgUrl?: string
=======
    image?: File | null
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  ) => Promise<void>;
  sendGroupMessage: (
    conversationId: string,
    content: string,
<<<<<<< HEAD
    imgUrl?: string
=======
    image?: File | null
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  ) => Promise<void>;
  // add message
  addMessage: (message: Message) => Promise<void>;
  // update convo
<<<<<<< HEAD
  updateConversation: (conversation: unknown) => void;
=======
  updateConversation: (conversation: Partial<Conversation> & { _id: string }) => void;
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  markAsSeen: () => Promise<void>;
  addConvo: (convo: Conversation) => void;
  createConversation: (
    type: "group" | "direct",
    name: string,
    memberIds: string[]
  ) => Promise<void>;
<<<<<<< HEAD
=======
  deleteConversation: (conversationId: string) => Promise<void>;
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
}

export interface SocketState {
  socket: Socket | null;
  onlineUsers: string[];
  connectSocket: () => void;
  disconnectSocket: () => void;
}

export interface FriendState {
  friends: Friend[];
  loading: boolean;
  receivedList: FriendRequest[];
  sentList: FriendRequest[];
<<<<<<< HEAD
  searchByUsername: (username: string) => Promise<User | null>;
  addFriend: (to: string, message?: string) => Promise<string>;
=======
  hasUnreadFriendRequest: boolean;
  searchByUsername: (username: string) => Promise<User | null>;
  addFriend: (to: string, message?: string) => Promise<string>;
  addReceivedRequest: (request: FriendRequest) => void;
  addSentRequest: (request: FriendRequest) => void;
  markFriendRequestsSeen: () => void;
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
  getAllFriendRequests: () => Promise<void>;
  acceptRequest: (requestId: string) => Promise<void>;
  declineRequest: (requestId: string) => Promise<void>;
  getFriends: () => Promise<void>;
}

export interface UserState {
  updateAvatarUrl: (formData: FormData) => Promise<void>;
<<<<<<< HEAD
=======
  updateProfile: (
    payload: Partial<
      Pick<
        User,
        | "displayName"
        | "username"
        | "email"
        | "phone"
        | "bio"
        | "showOnlineStatus"
        | "notificationEnabled"
      >
    >
  ) => Promise<User>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  blockAndReportUser: (username: string, reason?: string) => Promise<void>;
  deleteAccount: () => Promise<void>;
>>>>>>> 08b9194a548e657ffafa110f047342d94ec378c8
}

import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  email?: string;
  phone?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  isGroup: boolean;
  participants: User[];
  messages: Message[];
}

export interface AppState {
  currentUser: User;
  contacts: User[];
  chats: Chat[];
  selectedChatId: string | null;
  isProfilePanelOpen: boolean;
  theme: 'light' | 'dark';
  
  // Actions
  selectChat: (chatId: string) => void;
  sendMessage: (chatId: string, text: string) => void;
  toggleProfilePanel: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  addContact: (user: User) => void;
  createChatWithContact: (contactId: string) => void;
}

// Mock Data Models
const MOCK_USER: User = {
  id: 'me',
  name: 'John Doe',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  isOnline: true,
  email: 'john@example.com',
  phone: '+1 234 567 890'
};

const MOCK_CONTACTS: User[] = [
  { id: 'c1', name: 'Alice Wonder', avatar: 'https://i.pravatar.cc/150?u=c1', isOnline: true },
  { id: 'c2', name: 'Bob Smith', avatar: 'https://i.pravatar.cc/150?u=c2', isOnline: false },
  { id: 'c3', name: 'Charlie Davis', avatar: 'https://i.pravatar.cc/150?u=c3', isOnline: true },
];

const MOCK_CHATS: Chat[] = [
  {
    id: 'chat1',
    name: 'Alice Wonder',
    avatar: 'https://i.pravatar.cc/150?u=c1',
    isGroup: false,
    participants: [MOCK_USER, MOCK_CONTACTS[0]],
    messages: [
      { id: 'm1', senderId: 'c1', text: 'Hey! Are you available for a quick call today?', timestamp: new Date(Date.now() - 3600000).toISOString() },
      { id: 'm2', senderId: 'me', text: 'Hey! Yes, I am free after 2 PM.', timestamp: new Date(Date.now() - 1800000).toISOString() },
      { id: 'm3', senderId: 'c1', text: 'Great! I\'ll send you a calendar invite.', timestamp: new Date(Date.now() - 900000).toISOString() },
    ]
  },
  {
    id: 'chat2',
    name: 'Design Team',
    avatar: 'https://i.pravatar.cc/150?u=g1',
    isGroup: true,
    participants: [MOCK_USER, MOCK_CONTACTS[1], MOCK_CONTACTS[2]],
    messages: [
      { id: 'm4', senderId: 'c2', text: 'Did anyone check the new Figma updates?', timestamp: new Date(Date.now() - 7200000).toISOString() },
    ]
  }
];

export const useAppStore = create<AppState>((set, get) => ({
  currentUser: MOCK_USER,
  contacts: MOCK_CONTACTS,
  chats: MOCK_CHATS,
  selectedChatId: MOCK_CHATS[0].id,
  isProfilePanelOpen: false,
  theme: 'light',

  selectChat: (chatId: string) => {
    set({ selectedChatId: chatId, isProfilePanelOpen: false });
  },

  sendMessage: (chatId: string, text: string) => {
    set((state) => {
      const updatedChats = state.chats.map(chat => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: [...chat.messages, {
              id: Date.now().toString(),
              senderId: state.currentUser.id,
              text,
              timestamp: new Date().toISOString()
            }]
          };
        }
        return chat;
      });
      return { chats: updatedChats };
    });
  },

  toggleProfilePanel: () => set((state) => ({ isProfilePanelOpen: !state.isProfilePanelOpen })),
  
  setTheme: (theme: 'light' | 'dark') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ theme });
  },

  addContact: (user: User) => set((state) => ({ contacts: [...state.contacts, user] })),

  createChatWithContact: (contactId: string) => {
    const state = get();
    const contact = state.contacts.find(c => c.id === contactId);
    if (!contact) return;

    // Check if 1-1 chat already exists
    const existingChat = state.chats.find(c => 
      !c.isGroup && c.participants.some(p => p.id === contactId)
    );

    if (existingChat) {
      set({ selectedChatId: existingChat.id });
    } else {
      const newChat: Chat = {
        id: `chat_${Date.now()}`,
        name: contact.name,
        avatar: contact.avatar,
        isGroup: false,
        participants: [state.currentUser, contact],
        messages: []
      };
      set({ chats: [newChat, ...state.chats], selectedChatId: newChat.id });
    }
  }
}));

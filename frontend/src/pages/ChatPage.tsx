import React from 'react';
import Sidebar from '../components/Sidebar';
import ChatArea from '../components/ChatArea';
import ProfilePanel from '../components/ProfilePanel';
import { useAppStore } from '../store/useAppStore';

const ChatPage = () => {
  const { isProfilePanelOpen } = useAppStore();

  return (
    <div className="flex w-full h-full bg-surface">
      <Sidebar />
      <ChatArea />
      {isProfilePanelOpen && <ProfilePanel />}
    </div>
  );
};

export default ChatPage;

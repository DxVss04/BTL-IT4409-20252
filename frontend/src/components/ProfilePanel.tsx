import React from 'react';
import { Phone, Video, Search, Image as ImageIcon, FileText, Link2, ChevronDown, Bell, UserPlus } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

const ProfilePanel = () => {
  const { chats, selectedChatId } = useAppStore();
  const chat = chats.find(c => c.id === selectedChatId);

  if (!chat) return null;

  return (
    <div className="w-80 border-l border-border bg-white flex flex-col h-full flex-shrink-0 transition-all z-10 overflow-y-auto scrollbar-thin">
      {/* Profile Header */}
      <div className="flex flex-col items-center py-8 border-b border-border/60">
        <img src={chat.avatar} alt={chat.name} className="w-20 h-20 rounded-full object-cover shadow-sm mb-3" />
        <h2 className="font-semibold text-lg text-text-primary">{chat.name}</h2>
        {!chat.isGroup && <p className="text-sm text-text-secondary">Active now</p>}
        
        <div className="flex gap-6 mt-6">
           <button className="flex flex-col items-center gap-1 group">
             <div className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center group-hover:bg-primary/10 transition-colors">
               <Search size={18} className="text-text-primary group-hover:text-primary transition-colors" />
             </div>
             <span className="text-xs text-text-secondary font-medium">Search</span>
           </button>
           <button className="flex flex-col items-center gap-1 group">
             <div className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center group-hover:bg-primary/10 transition-colors">
               <Phone size={18} className="text-text-primary group-hover:text-primary transition-colors" />
             </div>
             <span className="text-xs text-text-secondary font-medium">Phone</span>
           </button>
           <button className="flex flex-col items-center gap-1 group">
             <div className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center group-hover:bg-primary/10 transition-colors">
               <Video size={18} className="text-text-primary group-hover:text-primary transition-colors" />
             </div>
             <span className="text-xs text-text-secondary font-medium">Video</span>
           </button>
        </div>
      </div>

      {/* Accordions */}
      <div className="flex flex-col">
        <button className="flex items-center justify-between p-4 hover:bg-surface-hover transition-colors font-semibold text-sm text-text-primary">
           Chat Settings
           <ChevronDown size={18} className="text-text-secondary" />
        </button>
        <div className="px-4 pb-2 space-y-3">
           <div className="flex items-center gap-3 text-sm text-text-primary cursor-pointer hover:text-primary transition-colors">
               <Bell size={18} className="text-text-secondary" /> Mute Notifications
           </div>
           {!chat.isGroup && (
               <div className="flex items-center gap-3 text-sm text-text-primary cursor-pointer hover:text-primary transition-colors">
                   <UserPlus size={18} className="text-text-secondary" /> Create group with {chat.name}
               </div>
           )}
        </div>
        
        <div className="h-2 bg-surface"></div>

        <button className="flex items-center justify-between p-4 hover:bg-surface-hover transition-colors font-semibold text-sm text-text-primary border-t border-border/40">
           Shared Media
           <ChevronDown size={18} className="text-text-secondary" />
        </button>
        <div className="px-4 pb-4">
           <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map(i => (
                 <img key={i} src={`https://picsum.photos/seed/${chat.id}${i}/100/100`} className="w-full aspect-square rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity" alt="Media" />
              ))}
           </div>
        </div>
        
        <button className="flex items-center justify-between p-4 hover:bg-surface-hover transition-colors font-semibold text-sm text-text-primary border-t border-border/40">
           Files
           <ChevronDown size={18} className="text-text-secondary -rotate-90" />
        </button>
        <button className="flex items-center justify-between p-4 hover:bg-surface-hover transition-colors font-semibold text-sm text-text-primary border-t border-border/40">
           Links
           <ChevronDown size={18} className="text-text-secondary -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default ProfilePanel;

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { chats, currentUser, selectedChatId, selectChat } = useAppStore();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <div className="flex h-full border-r border-border bg-surface w-80 md:w-[340px] flex-shrink-0 z-10 transition-all flex-col">
      {/* Header & Search */}
      <div className="flex flex-col bg-white">
          <div className="flex items-center justify-between p-4 pb-2">
             <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search" 
                  className="w-full bg-surface-hover border border-transparent focus:border-primary/40 focus:bg-white rounded-xl py-1.5 pl-9 pr-3 text-sm outline-none transition-all placeholder:text-text-secondary/70 h-9"
                />
             </div>
          </div>
          <div className="flex px-4 pt-1 space-x-4 border-b border-border/80 relative">
             <button className="px-1 py-3 text-sm font-semibold text-primary border-b-2 border-primary">All</button>
             <button className="px-1 py-3 text-sm font-semibold text-text-secondary border-b-2 border-transparent hover:text-text-primary transition-colors">Unread</button>
             
             <button 
               className="absolute right-4 top-2 p-1.5 hover:bg-surface-hover rounded-full text-text-secondary hover:text-primary transition-colors"
               title="New Chat"
               onClick={() => navigate('/contacts')}
             >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
                </svg>
             </button>
          </div>
      </div>
      
      {/* Chat List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin bg-white mt-1">
        {chats.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).map((chat) => (
          <div 
            key={chat.id} 
            onClick={() => selectChat(chat.id)}
            className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${selectedChatId === chat.id ? 'bg-accent/40' : 'hover:bg-surface-hover'}`}
          >
            <div className="relative">
              <img 
                src={chat.avatar} 
                alt="Avatar" 
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
              {!chat.isGroup && chat.participants.some(p => p.id !== currentUser.id && p.isOnline) && (
                 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="ml-3 flex-1 overflow-hidden">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-medium text-text-primary text-[15px] truncate max-w-[140px]">{chat.name}</h3>
                {chat.messages.length > 0 && (
                   <span className="text-xs text-text-secondary flex-shrink-0 ml-2">
                     {new Date(chat.messages[chat.messages.length - 1].timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                   </span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <p className={`text-[13px] truncate pr-2 ${selectedChatId === chat.id ? 'text-text-primary font-medium' : 'text-text-secondary'}`}>
                  {chat.messages.length > 0 
                     ? chat.messages[chat.messages.length - 1].text 
                     : 'Say hi!'}
                </p>
                {/* Simulated Unread dot */}
                {selectedChatId !== chat.id && chat.messages.length % 2 === 0 && chat.messages.length > 0 && (
                   <div className="w-[18px] h-[18px] bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold ml-1 shadow-sm">
                     1
                   </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState, useEffect, useRef } from 'react';
import { Phone, Video, Info, Paperclip, Smile, Send, Image as ImageIcon, MoreVertical, Layout } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

const ChatArea = () => {
  const { chats, selectedChatId, currentUser, sendMessage, toggleProfilePanel, isProfilePanelOpen } = useAppStore();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chat = chats.find(c => c.id === selectedChatId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat?.messages]);

  const handleSend = () => {
    if (message.trim() && selectedChatId) {
      sendMessage(selectedChatId, message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!chat) {
    return (
       <div className="flex-1 flex items-center justify-center bg-slate-50">
          <p className="text-text-secondary">Select a chat to start messaging</p>
       </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-50 h-full relative border-r border-border">
      {/* Header */}
      <div className="h-16 border-b border-border bg-white flex items-center justify-between px-6 px-4 shadow-sm z-10 flex-shrink-0 cursor-pointer" onClick={toggleProfilePanel}>
        <div className="flex items-center">
          <div className="relative">
             <img src={chat.avatar} alt="Chat User" className="w-10 h-10 rounded-full object-cover" />
             {!chat.isGroup && chat.participants.some(p => p.id !== currentUser.id && p.isOnline) && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
             )}
          </div>
          <div className="ml-3">
            <h2 className="font-semibold text-text-primary text-base">{chat.name}</h2>
            {!chat.isGroup && <p className="text-xs text-green-500 font-medium">Online</p>}
            {chat.isGroup && <p className="text-xs text-text-secondary">{chat.participants.length} members</p>}
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-text-secondary" onClick={(e) => e.stopPropagation()}>
          <button className="p-2 hover:bg-surface-hover rounded-full transition-colors" title="Call">
            <Phone size={20} className="text-primary" />
          </button>
          <button className="p-2 hover:bg-surface-hover rounded-full transition-colors" title="Video Call">
            <Video size={20} className="text-primary" />
          </button>
          <div className="w-px h-6 bg-border mx-2"></div>
          <button 
            onClick={toggleProfilePanel}
            className={`p-2 rounded-full transition-colors ${isProfilePanelOpen ? 'bg-primary/10 text-primary' : 'hover:bg-surface-hover'}`}
            title="Toggle Profile Panel"
          >
             <Layout size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin flex flex-col bg-slate-50">
         <div className="flex justify-center my-2">
            <span className="text-xs px-3 py-1 bg-surface-active rounded-full text-text-secondary font-medium shadow-sm">Today</span>
         </div>
         
         {chat.messages.map((msg, idx) => {
            const isMe = msg.senderId === currentUser.id;
            const sender = chat.participants.find(p => p.id === msg.senderId) || currentUser;
            const timeStr = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            return isMe ? (
              <div key={msg.id} className="flex flex-col items-end align-self-end w-full">
                 <div className="flex items-end max-w-lg justify-end">
                    <div className="flex flex-col items-end">
                       <div className="bg-primary text-white p-3 rounded-2xl rounded-br-sm shadow-md shadow-primary/20">
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                       </div>
                       <span className="text-[11px] text-text-secondary mt-1 mr-1 flex items-center">
                          {timeStr} 
                          <span className="ml-1 text-primary">✓✓</span>
                       </span>
                    </div>
                 </div>
              </div>
            ) : (
              <div key={msg.id} className="flex items-end max-w-lg">
                <img src={sender.avatar} alt={sender.name} className="w-8 h-8 rounded-full mb-1 mr-2 object-cover" />
                <div className="flex flex-col">
                   {chat.isGroup && <span className="text-[11px] text-text-secondary ml-1 mb-0.5">{sender.name}</span>}
                   <div className="bg-white border border-border p-3 rounded-2xl rounded-bl-sm shadow-sm">
                     <p className="text-sm text-text-primary leading-relaxed">{msg.text}</p>
                   </div>
                   <span className="text-[11px] text-text-secondary mt-1 ml-1">{timeStr}</span>
                </div>
              </div>
            );
         })}
         <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-border mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
        <div className="flex items-end gap-2">
           <div className="flex gap-1 pb-2">
              <button 
                className="p-2 text-text-secondary hover:bg-surface-hover hover:text-primary rounded-full transition-colors"
                onClick={() => console.log('Open attachment')}
              >
                <Paperclip size={20} />
              </button>
              <button 
                className="p-2 text-text-secondary hover:bg-surface-hover hover:text-primary rounded-full transition-colors hidden sm:block"
                onClick={() => console.log('Open image selector')}
              >
                <ImageIcon size={20} />
              </button>
           </div>
           
           <div className="flex-1 relative bg-surface-hover rounded-2xl border border-border/60 focus-within:border-primary/50 focus-within:bg-white transition-all shadow-inner">
             <textarea 
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               onKeyDown={handleKeyDown}
               placeholder="Type a message... (Press Enter to send)"
               className="w-full bg-transparent max-h-32 min-h-11 py-3 px-4 resize-none outline-none text-sm text-text-primary placeholder:text-text-secondary/70 scrollbar-thin"
               rows={1}
             />
             <div className="absolute right-2 bottom-2">
               <button 
                 className="p-1.5 text-text-secondary hover:text-primary transition-colors"
                 onClick={() => console.log('Open emoji picker')}
               >
                 <Smile size={18} />
               </button>
             </div>
           </div>

           <button 
             onClick={handleSend}
             className={`p-3 rounded-xl transition-all shadow-md ${message.trim() ? 'bg-primary text-white hover:bg-primary-hover shadow-primary/30' : 'bg-surface-active text-text-secondary cursor-not-allowed'}`}
           >
             <Send size={20} className={`${message.trim() ? 'translate-x-0.5 -translate-y-0.5' : ''} transition-transform`} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;

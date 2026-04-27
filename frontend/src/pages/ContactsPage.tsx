import React, { useState } from 'react';
import { UserPlus, Users, ListFilter, MailOpen, MoreHorizontal, UserCheck, MessageCircle } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { useNavigate } from 'react-router-dom';

const ContactsPage = () => {
  const [activeTab, setActiveTab] = useState<'friends' | 'groups' | 'requests'>('friends');
  const { contacts, createChatWithContact } = useAppStore();
  const navigate = useNavigate();

  const handleMessageUser = (userId: string) => {
    createChatWithContact(userId);
    navigate('/');
  };

  return (
    <div className="flex w-full h-full bg-surface">
      {/* Contacts Sidebar */}
      <div className="flex flex-col h-full border-r border-border bg-white w-80 md:w-[340px] flex-shrink-0 z-10 transition-all">
        <div className="p-4 py-5 border-b border-border bg-white flex items-center gap-3">
          <div className="bg-surface-hover p-2.5 rounded-full inline-flex items-center justify-center">
            <ContactIcon className="w-5 h-5 text-primary" />
          </div>
          <h1 className="font-semibold text-lg text-text-primary">Phonebook</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
           <button 
             onClick={() => setActiveTab('friends')}
             className={`w-full flex items-center px-3 py-3 rounded-xl transition-colors ${activeTab === 'friends' ? 'bg-accent/40 text-primary font-medium' : 'hover:bg-surface-hover text-text-primary'}`}
           >
             <UserCheck size={22} className={`mr-4 ${activeTab === 'friends' ? 'text-primary' : 'text-text-secondary'}`} />
             <span className="text-[15px]">Friend List</span>
           </button>
           <button 
             onClick={() => setActiveTab('groups')}
             className={`w-full flex items-center px-3 py-3 rounded-xl transition-colors ${activeTab === 'groups' ? 'bg-accent/40 text-primary font-medium' : 'hover:bg-surface-hover text-text-primary'}`}
           >
             <Users size={22} className={`mr-4 ${activeTab === 'groups' ? 'text-primary' : 'text-text-secondary'}`} />
             <span className="text-[15px]">Groups</span>
           </button>
           <button 
             onClick={() => setActiveTab('requests')}
             className={`w-full flex items-center px-3 py-3 rounded-xl transition-colors ${activeTab === 'requests' ? 'bg-accent/40 text-primary font-medium' : 'hover:bg-surface-hover text-text-primary'}`}
           >
             <MailOpen size={22} className={`mr-4 ${activeTab === 'requests' ? 'text-primary' : 'text-text-secondary'}`} />
             <span className="text-[15px]">Friend Requests</span>
             <span className="ml-auto w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">1</span>
           </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-slate-50 relative h-full">
        <div className="h-16 border-b border-border bg-white flex items-center px-6 shadow-sm z-10 flex-shrink-0">
          <div className="flex items-center text-text-primary font-semibold text-[15px]">
            {activeTab === 'friends' && <UserCheck size={20} className="mr-2 text-text-secondary" />}
            {activeTab === 'groups' && <Users size={20} className="mr-2 text-text-secondary" />}
            {activeTab === 'requests' && <MailOpen size={20} className="mr-2 text-text-secondary" />}
            <span className="capitalize">{activeTab === 'friends' ? 'Friend List' : activeTab === 'groups' ? 'Group List' : 'Friend Requests'}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:px-12 scrollbar-thin">
           <div className="max-w-4xl mx-auto space-y-4">
              {activeTab === 'friends' && (
                <>
                  <div className="flex items-center justify-between font-semibold text-text-primary mb-4">
                     <span className="text-[15px]">Friends ({contacts.length})</span>
                     <div className="flex items-center gap-2">
                       <div className="relative">
                           <input type="text" placeholder="Search friends" className="bg-white border border-border rounded-lg text-sm px-3 py-1.5 focus:outline-none focus:border-primary/50" />
                       </div>
                       <button className="p-1.5 text-text-secondary hover:bg-surface-hover rounded-md border border-transparent hover:border-border transition-colors">
                         <ListFilter size={18} />
                       </button>
                     </div>
                  </div>
                  
                  <div className="mb-6">
                     <div className="text-sm font-bold text-text-secondary bg-surface-active px-3 py-1 inline-block rounded-md mb-2">All Friends</div>
                     <div className="bg-white border border-[rgba(0,0,0,0.05)] rounded-2xl shadow-sm overflow-hidden divide-y divide-border/60">
                        {contacts.map(contact => (
                           <div key={contact.id} className="flex items-center justify-between p-4 hover:bg-surface-hover transition-colors group">
                              <div className="flex items-center gap-4">
                                <div className="relative">
                                  <img src={contact.avatar} className="w-12 h-12 rounded-full object-cover" alt="" />
                                  {contact.isOnline && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
                                </div>
                                <div>
                                   <div className="font-medium text-text-primary text-[15px]">{contact.name}</div>
                                   {contact.phone && <div className="text-xs text-text-secondary">{contact.phone}</div>}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                 <button 
                                   onClick={() => handleMessageUser(contact.id)}
                                   className="p-2 bg-accent/40 text-primary hover:bg-primary hover:text-white rounded-full transition-colors" 
                                   title="Message"
                                 >
                                   <MessageCircle size={18} />
                                 </button>
                                 <button className="p-2 text-text-secondary hover:bg-surface-active rounded-full transition-colors" title="Options">
                                   <MoreHorizontal size={18} />
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                </>
              )}

              {activeTab === 'requests' && (
                <>
                  <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden mt-2 p-6 flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-20 h-20 bg-accent/30 rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-4 text-primary">
                       <UserPlus size={36} />
                    </div>
                    <h3 className="font-semibold text-text-primary text-[17px] mb-1">Friend Request</h3>
                    <p className="text-sm text-text-secondary mb-6 text-center max-w-sm">You have 1 pending friend request from someone you might know.</p>
                    
                    <div className="w-full max-w-md border border-border/80 rounded-xl p-4 flex flex-col gap-4">
                       <div className="flex items-center gap-3">
                         <img src="https://i.pravatar.cc/150?u=xyz" className="w-14 h-14 rounded-full object-cover" alt="" />
                         <div className="flex-1">
                           <h4 className="font-semibold text-[15px] text-text-primary">Alice Wonder</h4>
                           <p className="text-xs text-text-secondary">Sent 2 days ago</p>
                         </div>
                       </div>
                       <div className="bg-surface-hover p-3 rounded-lg border border-border/50 text-[13px] text-text-secondary">
                          "Hi! It's Alice from the conference. I'd love to connect with you!"
                       </div>
                       <div className="flex gap-3 mt-1">
                         <button className="flex-1 py-1.5 bg-surface-active text-text-primary font-medium text-sm rounded-lg hover:bg-border transition-colors">Decline</button>
                         <button className="flex-1 py-1.5 bg-primary text-white font-medium text-sm rounded-lg hover:bg-primary-hover transition-colors shadow-md shadow-primary/20">Accept</button>
                       </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'groups' && (
                <>
                  <div className="bg-white border border-[rgba(0,0,0,0.05)] rounded-2xl shadow-sm overflow-hidden mt-4">
                    <div className="p-5 flex items-center gap-4 text-primary cursor-pointer hover:bg-surface-hover transition-colors border-b border-border/60">
                       <div className="w-12 h-12 bg-accent/40 rounded-full border border-primary/20 flex items-center justify-center">
                          <Users size={22} className="text-primary" />
                          <div className="absolute w-4 h-4 bg-primary text-white rounded-full flex items-center justify-center text-[10px] ml-6 mt-6 border border-white">+</div>
                       </div>
                       <div className="font-semibold text-[15px]">Create New Group</div>
                    </div>

                    {[1, 2, 3].map(agroup => (
                        <div key={agroup} className="flex items-center justify-between p-4 hover:bg-surface-hover transition-colors cursor-pointer group">
                           <div className="flex items-center gap-4">
                             <div className="flex -space-x-4">
                                <img src={`https://i.pravatar.cc/150?u=g1${agroup}`} className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm z-20" alt="" />
                                <img src={`https://i.pravatar.cc/150?u=g2${agroup}`} className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm z-10" alt="" />
                                <img src={`https://i.pravatar.cc/150?u=g3${agroup}`} className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm z-0" alt="" />
                             </div>
                             <div>
                               <div className="font-semibold text-text-primary text-[15px]">Design Team {agroup}</div>
                               <div className="text-xs text-text-secondary mt-0.5">8 members</div>
                             </div>
                           </div>
                           <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-2 bg-accent/40 text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
                                <MessageCircle size={18} />
                              </button>
                           </div>
                        </div>
                    ))}
                  </div>
                </>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

// Extracted small icon
const ContactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7042 17.2528 22.1614 16.5523C21.6186 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0087 6.11684 19.0087 7.005C19.0087 7.89316 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ContactsPage;

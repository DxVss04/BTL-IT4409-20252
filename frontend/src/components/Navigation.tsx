import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MessageSquare, Contact, Settings, LogOut, FileText } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ProfileModal from './ProfileModal';
import { useAppStore } from '../store/useAppStore';

const Navigation = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme, setTheme } = useAppStore();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <>
      <div className="w-16 h-full bg-primary flex flex-col items-center py-6 text-white/70 space-y-8 flex-shrink-0 z-40">
        <div 
          className="w-10 h-10 bg-white/20 rounded-full mb-4 flex items-center justify-center font-bold text-white shadow-sm overflow-hidden cursor-pointer hover:ring-2 hover:ring-white/50 transition-all"
          onClick={() => setIsProfileOpen(true)}
        >
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-full h-full object-cover" />
        </div>
        
        <div className="flex flex-col space-y-4 w-full items-center flex-1 mt-2">
          <NavLink 
            to="/"
            className={({ isActive }) => `p-3 rounded-xl transition-all relative group ${isActive ? 'bg-white/20 text-white' : 'hover:bg-white/10 hover:text-white'}`}
          >
            <MessageSquare size={22} className="transition-transform group-hover:scale-110" />
            {/* Notification Dot */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-primary"></span>
          </NavLink>

          <NavLink 
            to="/contacts"
            className={({ isActive }) => `p-3 rounded-xl transition-all group ${isActive ? 'bg-white/20 text-white' : 'hover:bg-white/10 hover:text-white'}`}
          >
            <Contact size={22} className="transition-transform group-hover:scale-110" />
          </NavLink>

          <NavLink 
            to="/tasks"
            className={({ isActive }) => `p-3 rounded-xl transition-all group ${isActive ? 'bg-white/20 text-white' : 'hover:bg-white/10 hover:text-white'}`}
          >
            <FileText size={22} className="transition-transform group-hover:scale-110" />
          </NavLink>
        </div>

        <div className="flex flex-col items-center space-y-4 mt-auto">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-3 rounded-xl transition-all group ${theme === 'dark' ? 'bg-primary/20 text-white' : 'hover:bg-white/10 hover:text-white'}`}
            title="Toggle theme"
          >
            <Settings size={22} className={`transition-transform group-hover:scale-110 ${theme === 'dark' ? 'rotate-180' : ''}`} />
          </button>

          <button 
            onClick={handleLogout}
            className="p-3 rounded-xl hover:bg-white/10 hover:text-white transition-all group"
            title="Sign out"
          >
            <LogOut size={22} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
};

export default Navigation;

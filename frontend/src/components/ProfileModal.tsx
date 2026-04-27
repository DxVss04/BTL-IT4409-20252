import React from 'react';
import { Camera, X, Edit2, Shield, Settings as SettingsIcon } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-primary to-accent relative">
          <button className="absolute bottom-3 right-3 p-1.5 bg-black/30 backdrop-blur-sm text-white rounded-lg hover:bg-black/50 transition-colors">
             <Camera size={18} />
          </button>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Profile Info */}
        <div className="px-6 pb-6 relative flex-1 overflow-y-auto scrollbar-thin">
           <div className="flex justify-between items-end mb-4">
             <div className="relative -mt-12 border-4 border-white rounded-full z-10">
               <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-24 h-24 rounded-full object-cover" alt="Profile" />
               <button className="absolute bottom-0 right-0 p-1.5 bg-surface-active border border-border text-text-primary rounded-full hover:bg-border transition-colors">
                  <Camera size={14} />
               </button>
             </div>
             <button className="p-2 mb-2 bg-surface-hover text-text-primary rounded-xl hover:bg-border transition-colors font-semibold text-sm flex items-center gap-2">
                <Edit2 size={16} /> Edit Profile
             </button>
           </div>

           <div className="mb-6">
             <h2 className="text-xl font-bold text-text-primary">John Doe</h2>
             <p className="text-sm text-text-secondary">Cloud Architect @ TechCorp</p>
           </div>

           <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Personal Information</h3>
                <div className="bg-surface-hover rounded-xl p-4 space-y-3">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary">Bio</span>
                      <span className="text-text-primary font-medium text-right w-48">Love building scalable system architectures and minimal UIs.</span>
                   </div>
                   <div className="w-full h-px bg-border/60"></div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary">Gender</span>
                      <span className="text-text-primary font-medium">Male</span>
                   </div>
                   <div className="w-full h-px bg-border/60"></div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary">Date of Birth</span>
                      <span className="text-text-primary font-medium">10 Oct 1990</span>
                   </div>
                   <div className="w-full h-px bg-border/60"></div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-text-secondary">Phone</span>
                      <span className="text-text-primary font-medium">+1 234 567 890</span>
                   </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Security & Settings</h3>
                <div className="bg-surface-hover rounded-xl overflow-hidden text-sm">
                   <button className="w-full flex items-center gap-3 p-4 hover:bg-border/60 transition-colors text-text-primary text-left">
                      <Shield size={18} className="text-primary" />
                      <span className="font-medium flex-1">Privacy Settings</span>
                   </button>
                   <div className="w-full bg-border/60 h-px ml-12"></div>
                   <button className="w-full flex items-center gap-3 p-4 hover:bg-border/60 transition-colors text-text-primary text-left">
                      <SettingsIcon size={18} className="text-primary" />
                      <span className="font-medium flex-1">Account Management</span>
                   </button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

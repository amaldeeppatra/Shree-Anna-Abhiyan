import React from 'react';
import { Menu, UserCircle } from 'lucide-react';
import logo from '../../assets/shreeannaabhiyan.png';

const Sidebar = () => {
  return (
    <aside className="w-24 bg-[#DE6B18] text-white p-4 flex flex-col justify-between items-center rounded-l-3xl">
      <div className="flex flex-col items-center gap-y-6">
        <button className="p-3 border-2 border-white rounded-2xl hover:bg-white/20 transition-colors">
          <Menu size={28} />
        </button>
        {/* You can add more navigation icons here if needed */}
      </div>
      <div className="p-2 bg-[#8C3F0B] rounded-2xl cursor-pointer">
        <UserCircle size={40} className="text-[#F3D1B0]" />
      </div>
    </aside>
  );
};

export default Sidebar;
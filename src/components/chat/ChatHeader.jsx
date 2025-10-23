import React from 'react';
import { AlertTriangle, Trash2, Search } from 'lucide-react';
import logo from '../../assets/shreeannaabhiyan.png';

const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Shakti Saathi Logo" className="h-12 w-12" />
        <h1 className="text-2xl font-bold text-green-900">Shakti Saathi</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-red-500">
          <AlertTriangle size={24} />
        </button>
        <button className="text-gray-500 hover:text-red-700">
          <Trash2 size={24} />
        </button>
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-48 pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#DE6B18]"
          />
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
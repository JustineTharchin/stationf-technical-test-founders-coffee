import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/your-logo.png" alt="Logo" className="w-10 h-10" />
      </div>
      <nav className="flex items-center gap-8">
        <a href="/" className="text-black">List of tasks</a>
        <a href="/tasks" className="text-black">Tasks</a>
        <a href="/new-task" className="text-black">New Tasks</a>
      </nav>
      <div>
        <h1 className="text-white text-xl font-barlow font-semibold" style={{ fontFamily: 'Barlow Condensed', color: '#09090B' }}>
          Founders Coffee
        </h1>
      </div>
    </header>
  );
};

export default Header;

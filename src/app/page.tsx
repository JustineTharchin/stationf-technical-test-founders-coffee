import React from 'react';
import './globals.css'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-white text-xl font-barlow font-semibold" style={{ fontFamily: 'Barlow Condensed', color: '#09090B' }}>
          Founders Coffee
        </h1>
      </div>
      <nav className="flex items-center gap-8">
        <a href="/" className="text-white">List of tasks</a>
        <a href="/task" className="text-white">Task</a>
        <a href="/new-task" className="text-white">New Task</a>
      </nav>
      <div>
      </div>
    </header>
  );
};

export default Header;

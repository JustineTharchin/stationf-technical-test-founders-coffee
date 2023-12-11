import React from 'react';

const Header: React.FC = () => {
  return (
    <div>
      <header className="bg-white p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-black text-xl">
            Founders Coffee
          </h1>
        </div>
        <nav className="flex items-center gap-8">
          <a href="/" className="text-black">List of tasks</a>
          <a href="/task" className="text-black">Task</a>
          <a href="/new-task" className="text-black">New Task</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;

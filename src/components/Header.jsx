import React from 'react';
import { MagnifyingGlassIcon, ChatBubbleLeftIcon, HeartIcon, QueueListIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-8">
        <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" alt="Stack Overflow" className="h-8" />
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Your Answers Here..."
            className="w-[400px] pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
        <nav>
          <button className="px-4 py-2 hover:text-orange-500">Products</button>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <ChatBubbleLeftIcon className="h-6 w-6 text-gray-600" />
        <HeartIcon className="h-6 w-6 text-gray-600" />
        <QueueListIcon className="h-6 w-6 text-gray-600" />
        <UserCircleIcon className="h-8 w-8 text-gray-600" />
      </div>
    </header>
  );
}
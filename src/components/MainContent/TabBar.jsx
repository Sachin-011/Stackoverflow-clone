import React from 'react';

export default function TabBar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'interesting', label: 'Interesting' },
    { id: 'bountied', label: 'Bountied' },
    { id: 'hot', label: 'Hot' },
    { id: 'week', label: 'Week' },
    { id: 'month', label: 'Month' }
  ];

  return (
    <div className="flex space-x-4 mb-6">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-1 rounded ${
            activeTab === tab.id
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
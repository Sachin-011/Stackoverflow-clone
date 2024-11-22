import React from 'react';
import { PencilIcon, RadioIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function RightSidebar() {
  return (
    <aside className="w-64 p-4 border-l">
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">The Overflow Blog</h2>
        <ul className="space-y-3">
          <li className="flex gap-2 text-sm">
            <PencilIcon className="h-4 w-4 text-gray-600 flex-shrink-0 mt-1" />
            <span>The unexpected benefits of mentoring others</span>
          </li>
          <li className="flex gap-2 text-sm">
            <RadioIcon className="h-4 w-4 text-gray-600 flex-shrink-0 mt-1" />
            <span>Podcast 354: Building for AR with Niantic Labs' augmented reality SDK</span>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Featured & meta</h2>
        <ul className="space-y-3">
          <li className="flex gap-2 text-sm">
            <InformationCircleIcon className="h-4 w-4 text-[#F48024] flex-shrink-0 mt-1" />
            <span>Beta release of Collective™ on Stack Overflow</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-4">Hot meta post</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-gray-600 font-medium">8</span>
            <p className="text-sm">Tags (driver) and (device-driver) appear to be redundant</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-600 font-medium">27</span>
            <p className="text-sm">How to handle dupes where A is closed as dup of B but I have an answer that...</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
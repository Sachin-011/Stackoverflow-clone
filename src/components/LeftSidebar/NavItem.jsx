import React from 'react';

export default function NavItem({ icon: Icon, text, isHeader = false, isActive = false, indent = false }) {
  const baseClasses = "flex items-center space-x-2 py-1";
  const headerClasses = "font-medium text-gray-900 mt-4 text-xs uppercase"; // Changed to black
  const itemClasses = "hover:bg-[#F1F2F3] cursor-pointer text-[13px] text-gray-600";
  const activeClasses = "text-gray-900 font-medium bg-[#F1F2F3]"; // Added background color
  const indentClasses = indent ? "pl-8" : "";

  return (
    <div className={`${baseClasses} ${isHeader ? headerClasses : isActive ? activeClasses : itemClasses} ${indentClasses}`}>
      {Icon && (
        <Icon 
          className={`h-4 w-4 ${
            isHeader ? 'text-[#F48024]' : // Header icons stay orange
            isActive ? 'text-gray-900' :  // Active icon black
            'text-gray-600'               // Default icon color
          }`} 
        />
      )}
      <span>{text}</span>
    </div>
  );
}
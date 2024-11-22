import React from 'react';
import NavItem from './NavItem';

export default function NavSection({ title, titleIcon, items, indentItems = true }) {
  return (
    <div className="mb-4">
      {title && <NavItem icon={titleIcon} text={title} isHeader={true} />}
      {items.map((item, index) => (
        <NavItem 
          key={index}
          icon={item.icon}
          text={item.text}
          isActive={item.isActive}
          indent={indentItems}
        />
      ))}
    </div>
  );
}
import React from 'react';
import { 
  HomeIcon,
  GlobeAltIcon,
  TagIcon,
  UsersIcon,
  UserGroupIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';
import NavSection from './LeftSidebar/NavSection';

export default function LeftSidebar() {
  const sections = [
    {
      items: [{ icon: HomeIcon, text: 'Home', isActive: true }],
      indentItems: false
    },
    {
      title: 'PUBLIC',
      titleIcon: GlobeAltIcon,
      items: [
        { text: 'Questions' },
        { text: 'Tags' },
        { text: 'Users' }
      ]
    },
    {
      title: 'COLLECTIVES',
      titleIcon: UserGroupIcon,
      items: [
        { text: 'Explore Jobs' }
      ]
    },
    {
      title: 'FIND JOBS',
      titleIcon: BriefcaseIcon,
      items: [
        { text: 'Jobs' },
        { text: 'Companies' }
      ]
    },
    {
      title: 'TEAMS',
      titleIcon: UserGroupIcon,
      items: [
        { text: '+ Create a team' }
      ]
    }
  ];

  return (
    <aside className="w-48 p-4 border-r">
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <NavSection
            key={index}
            title={section.title}
            titleIcon={section.titleIcon}
            items={section.items}
            indentItems={section.indentItems !== false}
          />
        ))}
      </nav>
    </aside>
  );
}
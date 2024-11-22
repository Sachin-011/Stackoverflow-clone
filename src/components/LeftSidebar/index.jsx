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
import NavSection from './NavSection';

export default function LeftSidebar() {
  const sections = [
    {
      items: [{ icon: HomeIcon, text: 'Home', isActive: true }]
    },
    {
      title: 'PUBLIC',
      titleIcon: GlobeAltIcon,
      items: [
        { icon: TagIcon, text: 'Questions' },
        { icon: TagIcon, text: 'Tags' },
        { icon: UsersIcon, text: 'Users' }
      ]
    },
    {
      title: 'COLLECTIVES',
      titleIcon: UserGroupIcon,
      items: [
        { icon: BriefcaseIcon, text: 'Explore Jobs' }
      ]
    },
    {
      title: 'FIND JOBS',
      titleIcon: BriefcaseIcon,
      items: [
        { icon: BriefcaseIcon, text: 'Jobs' },
        { icon: BuildingOfficeIcon, text: 'Companies' }
      ]
    },
    {
      title: 'TEAMS',
      titleIcon: UserGroupIcon,
      items: [
        { icon: PlusCircleIcon, text: '+ Create a team' }
      ]
    }
  ];

  return (
    <aside className="w-48 p-4 border-r">
      <nav className="space-y-4">
        {sections.map((section, index) => (
          <NavSection
            key={index}
            title={section.title}
            titleIcon={section.titleIcon}
            items={section.items}
          />
        ))}
      </nav>
    </aside>
  );
}
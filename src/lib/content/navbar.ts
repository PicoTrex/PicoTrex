import { author } from '@/lib/content/portfolio';
import { NavbarSectionType } from '@/lib/types/sections';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'About', url: '/#about' },
    // { name: 'skills', url: '/#skills' },
    // { name: 'experience', url: '/#experience' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Involved work', url: '/#involved-work' },
    { name: 'Members', url: '/#members' },
    // { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'contact',
    url: `mailto:${author.email}`,
  },
};

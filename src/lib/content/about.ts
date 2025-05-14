import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'About',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'NextJs',
      'TailwindCSS',
      'ExpressJs',
      'AI/ML',
      'Prisma',
      'CSS Animations',
    ],
  },
  img: '/favicons/android-chrome-512x512.png',
};

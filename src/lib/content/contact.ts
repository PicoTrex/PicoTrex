import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'Contact Us',
  subtitle: "If you interested in collaborating, please reach out to us.",
  paragraphs: [
    // '',
    // 'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
    ''
  ],
  link: `mailto:${author.email}`,
};

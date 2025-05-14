import { HeroImageType,HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  // subtitle: 'Hi, my name is',
  subtitle: '',
  title: 'PicoTrex',
  tagline: 'Small data, Deep insights, Meaningful treks',
  description:
    "Exploring infinite possibilities from every pico piece — because in the vast mosaic of knowledge, even the tiniest fragment holds potential. Like found objects in Dada or everyday icons in Pop, each micro-discovery carries the spark to reshape entire disciplines, step by step, insight by insight.",
  specialText: '',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

export const heroImages: HeroImageType[] = [
  {
    src: "/assets/cover/computer0.png",
    alt: "Card 0",
    position: {
      right: "13%",
      top: "10%",
    },
    rotation: 20,
    size: {
      width: 400,
      height: 400,
    },
    delay: 6,
  },
  {
    src: "/assets/cover/computer1.png",
    alt: "Hero Image 2",
    position: {
      right: "10%",
      top: "30%",
    },
    rotation: -10,
    size: {
      width: 400,
      height: 400,
    },
    delay: 7,
  },
  {
    src: "/assets/cover/computer2.png",
    alt: "Hero Image 3",
    position: {
      right: "15%",
      top: "50%",
    },
    rotation: 15,
    size: {
      width: 400,
      height: 400,
    },
    delay: 8,
  },
  {
    src: "/assets/icons/SSD.png",
    alt: "Hero Image 4",
    position: {
      right: "42%",
      top: "30%",
    },
    rotation: -10,
    size: {
      width: 220,
      height: 220,
    },
    delay: 5,
  },
  {
    src: "/assets/icons/keyboard.png",
    alt: "Hero Image 4",
    position: {
      right: "50%",
      top: "5%",
    },
    rotation: 5,
    size: {
      width: 350,
      height: 350,
    },
    delay: 5.5,
  },
  {
    src: "/assets/icons/GPU.png",
    alt: "Hero Image 4",
    position: {
      right: "35%",
      top: "50%",
    },
    rotation: -10,
    size: {
      width: 320,
      height: 320,
    },
    delay: 6,
  },
  {
    src: "/assets/icons/card.png",
    alt: "Hero Image 4",
    position: {
      right: "50%",
      top: "65%",
    },
    rotation: 5,
    size: {
      width: 350,
      height: 350,
    },
    delay: 6.5,
  },
]; 

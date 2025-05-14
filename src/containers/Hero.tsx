'use client';
import { heroImages,heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <div className="relative w-screen min-h-screen left-1/2 -translate-x-1/2">
      <div 
        className="absolute"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, 
            rgba(254, 104, 53, 0.8) 0%,
            rgba(254, 104, 53, 0.7) 15%,
            rgba(254, 104, 53, 0.6) 30%,
            rgba(254, 104, 53, 0.4) 45%,
            transparent 80%)`,
          filter: 'blur(20px)',
          width: '45vw',
          height: '45vw',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '50vw',
          maxHeight: '50vw',
        }}
      />
      <Wrapper
        id="hero"
        className="relative flex flex-col justify-center item-start h-screen gap-6 mt-12 xs:gap-7 xs:mt-0 pl-[6%] md:pl-[8%] lg:pl-[10%]"
      >
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(0) })}
          initial="hidden"
          animate="show"
          className="font-mono text-sm md:text-base text-accent"
        >
          {subtitle}
        </motion.p>

        <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl ">
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="text-custom-black-1 dark:text-slate-200 capitalize mb-2 leading-[1.1]"
          >
            {title}
          </motion.h1>
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(2) })}
            initial="hidden"
            animate="show"
            className="leading-[1.2]"
          >
            {tagline}
          </motion.h1>
        </div>

        <motion.p
          variants={slideUp({ delay: getAnimationDelay(3) })}
          initial="hidden"
          animate="show"
          className="max-w-xl text-base md:text-lg"
        >
          {description}
        </motion.p>

        <motion.p
          variants={slideUp({ delay: getAnimationDelay(4) })}
          initial="hidden"
          animate="show"
          className="font-mono text-xs md:text-sm text-accent"
        >
          {specialText}
        </motion.p>

        {cta && (
          <Button
            size="lg"
            type="link"
            variants={slideUp({ delay: getAnimationDelay(5) })}
            initial="hidden"
            animate="show"
            href={cta?.url ?? '#'}
            className={`mt-5 xs:mt-8 md:mt-10 ${
              cta.hideInDesktop ? 'md:hidden' : ''
            }`}
            sameTab={cta?.sameTab}
          >
            {cta.title}
          </Button>
        )}

        {/* 渲染多个图片 */}
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            variants={slideUp({ delay: getAnimationDelay(image.delay) })}
            initial="hidden"
            animate="show"
            className="absolute"
            style={{
              right: image.position.right,
              top: image.position.top,
              transform: `translate(-50%, -50%) rotate(${image.rotation}deg)`,
              width: `${image.size.width}px`,
              height: `${image.size.height}px`,
              transformOrigin: 'center center',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              priority
              style={{
                transform: `rotate(${image.rotation}deg)`,
                transformOrigin: 'center center',
              }}
            />
          </motion.div>
        ))}
      </Wrapper>
    </div>
  );
};

export default Hero;

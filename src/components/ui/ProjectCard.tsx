'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  year,
  img,
  tags,
  links,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url);
        }}
        className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl"
      >
        <div className="overflow-hidden h-[200px]">
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
          />
        </div>
        <div className="p-4 py-3 space-y-1" >
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs capitalize bg-accent text-white rounded-full px-4 py-1">{tags.join(' | ')}</p>
            <div className="flex items-center space-x-1.5">
              {links.paper && (
                <a href={links.paper} target="_blank" className='block duration-200 hover:text-accent'>
                  <Icon icon="tabler:file-description" width={20} height={20} />
                </a>
              )}
              {links.github && (
                <a href={links.github} target="_blank" className='block duration-200 hover:text-accent'>
                  <Icon icon="tabler:brand-github" width={20} height={20} />
                </a>
              )}
              {links.website && (
                <a href={links.website} target="_blank" className='block duration-200 hover:text-accent'>
                  <Icon icon="tabler:world" width={20} height={20} />
                </a>
              )}
            </div>
          </div>
          <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent ">
          <span className="line-clamp-1 group-hover:line-clamp-none transition-all duration-500 ease-in-out max-h-[1.5em] group-hover:max-h-[100px] overflow-hidden">{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;

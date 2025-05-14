'use client';

import { useTheme } from '@/lib/hooks/use-theme';

import { Wrapper } from '@/components';

import { getSectionAnimation, slideUp } from '@/styles/animations';

import { members } from '../lib/content/members';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Members: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="members" {...getSectionAnimation} className='mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg'>
      <h2 className="heading-secondary text-center">Members</h2>
      <div className="space-y-24">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            variants={slideUp({
              delay: 0.2 * (index + 1),
              duration: 1.25,
              offset: 20
            })}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8`}
          >
            {/* Image Container */}
            <div className="relative w-64 h-64 flex-shrink-0">
              <div
                className="absolute inset-0 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: member.themeColor,
                  transform: member.shadowOffset ? `translate(${member.shadowOffset.x}px, ${member.shadowOffset.y}px)` : 'none',
                  filter: 'blur(8px)',
                  opacity: 0.8
                }}
              />
              <div className="relative w-full h-full">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
              <h3
                className="text-2xl font-bold mb-2 inline-block transition-all duration-300 hover:opacity-80"
                style={{ 
                  color: member.themeColor,
                  textShadow: 'none',
                  position: 'relative'
                }}
              >
                {member.personalUrl ? (
                  <a
                    href={member.personalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-[-2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-current hover:after:transition-all hover:after:duration-300 hover:after:shadow-[0_0_8px_currentColor]"
                  >
                    {member.name}
                  </a>
                ) : (
                  member.name
                )}
              </h3>
              
              {/* Affiliations */}
              <div className={`flex flex-wrap gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center font-bold`}>
                {member.affiliations.map((affiliation, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="relative w-6 h-6">
                      <Image
                        src={affiliation.logo}
                        alt={`${affiliation.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-custom-gray-1 dark:text-custom-gray-2">{affiliation.name}</p>
                  </div>
                ))}
              </div>

              <p className="text-dark-1 leading-relaxed mb-4">
                {member.introduction}
              </p>

              {/* Social Links */}
              {member.socialLinks && (
                <div className={`flex gap-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: member.themeColor }}
                    >
                      <Icon
                        icon="mdi:github"
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isDarkMode ? 'text-white hover:text-black' : 'text-white hover:text-black'
                        }`}
                      />
                    </a>
                  )}
                  {member.socialLinks.website && (
                    <a
                      href={member.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: member.themeColor }}
                    >
                      <Icon
                        icon="mdi:web"
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isDarkMode ? 'text-white hover:text-black' : 'text-white hover:text-black'
                        }`}
                      />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: member.themeColor }}
                    >
                      <Icon
                        icon="mdi:twitter"
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isDarkMode ? 'text-white hover:text-black' : 'text-white hover:text-black'
                        }`}
                      />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: member.themeColor }}
                    >
                      <Icon
                        icon="mdi:linkedin"
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isDarkMode ? 'text-white hover:text-black' : 'text-white hover:text-black'
                        }`}
                      />
                    </a>
                  )}
                  {member.socialLinks.googleScholar && (
                    <a
                      href={member.socialLinks.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: member.themeColor }}
                    >
                      <Icon
                        icon="mdi:google"
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isDarkMode ? 'text-white hover:text-black' : 'text-white hover:text-black'
                        }`}
                      />
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a
                      href={member.socialLinks.email}
                      className="p-2 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: member.themeColor }}
                    >
                      <Icon
                        icon="mdi:email"
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isDarkMode ? 'text-white hover:text-black' : 'text-white hover:text-black'
                        }`}
                      />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Members; 
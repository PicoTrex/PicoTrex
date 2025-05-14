'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';

import { AuthorImage, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation} className='mb-10 mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg'>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            <span className='font-bold text-accent italic'>PicoTrex</span> is a forward-thinking research collective dedicated to uncovering deep insights from small data. 
            Guided by the belief that even the tiniest fragment can hold transformative potential, 
            we explore the vast mosaic of knowledge one pico piece at a time. Our motto — {' '}
          </p>
          <p className='text-center text-accent italic'>Small data, Deep insights, Meaningful treks.</p>
          <p>
          reflects our commitment to meaningful discovery, drawing inspiration from the spontaneity of Dada and the bold clarity of Pop. 
          </p>
          <p>
            At PicoTrex, we envision a research future where micro-discoveries reshape entire disciplines, step by step, insight by insight.
          </p>

          {/* {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )} */}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;

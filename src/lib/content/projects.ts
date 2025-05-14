import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'Involved work',
  projects: [
    {
      id: getId(),
      name: 'LOKI: A Comprehensive Synthetic Data Detection Benchmark using Large Multimodal Models',
      url: 'https://opendatalab.github.io/LOKI/',
      img: '/images/LOKI.jpg',
      year: 2025,
      tags: ['ICLR'],
      links: {
        paper: 'https://arxiv.org/abs/2410.09732',
        github: 'https://github.com/opendatalab/LOKI',
        website: 'https://opendatalab.github.io/LOKI/',
      }
    },
    {
      id: getId(),
      name: 'CrossViewDiff: A Cross-View Diffusion Model for Satellite-to-Street View Synthesis',
      url: 'https://opendatalab.github.io/CrossViewDiff/',
      img: '/images/CrossViewDiff.jpg',
      year: 2024,
      tags: ['arXiv'],
      links: {
        paper: 'https://arxiv.org/abs/2408.14765',
        website: 'https://opendatalab.github.io/CrossViewDiff/',
      }
    }
  ],
};

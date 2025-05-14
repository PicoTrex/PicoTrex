import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "Projects",
  projects: [
    {
      id: getId(),
      paper: 'arXiv',
      name: 'GPT-ImgEval',
      tags: ['LLM', 'Dataset', 'OpenAI'],
      description: 'A Comprehensive Benchmark for Diagnosing GPT4o in Image Generation.',
      authors:
        "Zhiyuan Yan, Junyan Ye, Weijia Li, Zilong Huang, Shenghai Yuan, Xiangyang He, Kaiqing Lin, Jun He, Conghui He, Li Yuan",
      url: 'https://www.getlifegard.com/',
      img: '/images/GPT-ImgEval.jpg',
      links: {
        paper: "https://arxiv.org/abs/2504.02782",
        github: "https://github.com/PicoTrex/GPT-ImgEval",
        website: "",
        huggingface: "https://huggingface.co/datasets/Yejy53/GPT-ImgEval",
      }
    },
  ],
};

export default featuredProjectsSection;

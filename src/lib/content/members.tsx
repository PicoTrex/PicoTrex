export interface Affiliation {
  name: string;
  logo: string;
}

export interface Member {
  name: string;
  affiliations: Affiliation[];
  // introduction: string;
  introduction: JSX.Element;
  themeColor: string;
  imageUrl: string;
  personalUrl?: string;
  shadowOffset?: { x: number; y: number };
  socialLinks?: {
    github?: string;
    website?: string;
    twitter?: string;
    linkedin?: string;
    googleScholar?: string;
    email?: string;
  };
}

export const members: Member[] = [
  {
    name: "Junyan Ye",
    affiliations: [
      {
        name: "Sun Yat-sen University",
        logo: "/assets/affiliations/SYSU.png"
      },
      {
        name: "Shanghai AI Lab",
        logo: "/assets/affiliations/Shanghai_AILAB.png"
      }
    ],
    introduction: (
      <>
        I'm currently a student at Sun Yat-sen University, advised by Prof.{" "}
        <a
          href="https://liweijia.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent underline italic"
        >
          Weijia Li
        </a>
        . I got a B.E. degree at Sun Yat-sen University in 2024. Now I'm serving as a research intern at <span className="italic">Shanghai AI Lab</span>,
        and my mentor is{" "}
        <a
          href="https://conghui.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent underline italic"
        >
          Conghui He
        </a>
        . My ideal is to do influential scientific research!
      </>
    ),
    themeColor: "#e0b771",
    imageUrl: "/assets/members/JunyanYe.png",
    personalUrl: "https://yejy53.github.io/",
    shadowOffset: { x: 15, y: 15 },
    socialLinks: {
      github: "https://github.com/yejy53",
      website: "https://yejy53.github.io/",
      googleScholar: "https://scholar.google.com.hk/citations?user=6IbGkd4AAAAJ&hl=zh-CN&oi=ao",
      email: "mailto:yejy53@mail2.sysu.edu.cn"
    }
  },
  {
    name: "Jun He",
    affiliations: [
      {
        name: "Sun Yat-sen University",
        logo: "/assets/affiliations/SYSU.png"
      }
    ],
    introduction: (
      <>
        I am currently a student at Sun Yat-sen University, with Prof.{" "}
        <a
          href="https://scholar.google.com/citations?user=uWsY6s8AAAAJ&hl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent underline italic"
        >
          Xiang Zhang
        </a>
        {" "} as my supervisor. I got my Bachelor of Engineering degree from Sun Yat-sen University in 2024. 
        My ideal is to be able to do more fascinating projects.
      </>
    ),
    themeColor: "#f5abeb",
    imageUrl: "/assets/members/JunHe.png",
    personalUrl: " ",
    shadowOffset: { x: 15, y: 15 },
    socialLinks: {
      github: "https://github.com/RedShallot",
      googleScholar: "https://scholar.google.com/citations?user=ktFT40UAAAAJ&hl=zh-CN",
      email: "mailto:hejun36mail2.sysu.edu.cn"
    }
  },
  {
    name: "Zilong Huang",
    affiliations: [
      {
        name: "Sun Yat-sen University",
        logo: "/assets/affiliations/SYSU.png"
      }
    ],
    introduction: (
      <>
      <ul>
        <li>
        🎓 Currently a graduate student at SYSU, with Prof.{" "}
        <a
          href="https://ting-devin-han.github.io/Epingpages.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent underline italic"
        >
          Yiping Chen
        </a>.
        </li>
        <li>
        ⚡ Interested in 3D reconstruction / generation, game development, front-end development.
        </li>
        <li>
        🎮 I am a hardcore anime fan, and I also enjoy playing all kinds of games.
        </li>
        <li>
        🌟 <span style={{ fontWeight: "bold" }}>My dream is to bring anime characters into the real world.</span>
        </li>
        <li>
        🔭 I am learning everything I find interesting.
        </li>
      </ul>
      </>
    ),
    themeColor: "#FF6B6B",
    imageUrl: "/assets/members/ZilongHuang.png",
    personalUrl: "https://wangwu.com",
    shadowOffset: { x: 15, y: 15 },
    socialLinks: {
      github: "https://github.com/LongHZ140516",
      googleScholar: "https://scholar.google.com/citations?user=Nq2HLEUAAAAJ&hl=zh-CN",
      email: "mailto:huangzlong5@mail2.sysu.edu.cn"
    }
  }
]; 
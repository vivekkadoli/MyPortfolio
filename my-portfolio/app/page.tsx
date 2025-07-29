// /my-portfolio/app/page.tsx

import {
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGit,
  SiGo,
  SiJson,
  SiElasticsearch,
  SiPostman
} from "react-icons/si";
import { FaDatabase, FaTerminal } from "react-icons/fa";
import { MdOutlineApi } from "react-icons/md";

interface Contributor {
  name: string;
  url: string;
}

interface Project {
  name: string;
  description: string;
  details?: string;
  tech: string[];
  contributors?: Contributor[];
  repo?: string;
  liveDemo?: string;
  startDate: string;
  endDate: string;
}

interface Cert {
  name: string;
  org: string;
  date: string;
  credId?: string;
  url: string;
  skills: string[];
}

const skillLogoList = [
  { label: "API Development", icon: <MdOutlineApi size={32} color="#37f3ff" /> },
  { label: "Advance JavaScript", icon: <SiJavascript size={32} color="#f0db4f" /> },
  { label: "Bash", icon: <FaTerminal size={32} color="#5D8732" /> },
  { label: "CSS3", icon: <SiCss3 size={32} color="#2965f1" /> },
  { label: "Curl", icon: <FaTerminal size={32} color="#5D8732" /> },
  { label: "Elasticsearch", icon: <SiElasticsearch size={32} color="#005571" /> },
  { label: "Express.js", icon: <SiExpress size={32} color="#fff" /> },
  { label: "GitHub", icon: <SiGit size={32} color="#f05033" /> },
  { label: "Go", icon: <SiGo size={32} color="#00ADD8" /> },
  { label: "HTML5", icon: <SiHtml5 size={32} color="#e44d26" /> },
  { label: "JavaScript", icon: <SiJavascript size={32} color="#f0db4f" /> },
  { label: "JSON", icon: <SiJson size={32} color="#f19c00" /> },
  { label: "MongoDB", icon: <SiMongodb size={32} color="#47a248" /> },
  { label: "MySQL", icon: <SiMysql size={32} color="#00758f" /> },
  { label: "Node.js", icon: <SiNodedotjs size={32} color="#68a063" /> },
  { label: "Postman API", icon: <SiPostman size={32} color="#ff6c37" /> },
  { label: "REST APIs", icon: <MdOutlineApi size={32} color="#37f3ff" /> },
  { label: "SQL", icon: <FaDatabase size={32} color="#336791" /> },
  { label: "Secure Shell (SSH)", icon: <FaTerminal size={32} color="#fff" /> },
];

const projects: Project[] = [
  {
    name: "Swamikrupa Traders - Premium Turmeric Products",
    description: "Responsive web application for premium turmeric exports.",
    details: "Contemporary React frontend, advanced forms with country validation, custom full-page scroll, WhatsApp/email auto-message, and mobile-first UX.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (Advanced)", "React.js"],
    contributors: [{ name: "Shubham Powar", url: "https://www.linkedin.com/in/spowartech/" }],
    startDate: "May 2025",
    endDate: "June 2025",
    liveDemo: "#",
    repo: "https://github.com/vivekkadoli/Final"
  },
  {
    name: "AI Image Generator",
    description: "Web app turning prompts into AI images. Fast, responsive, powered by Hugging Face API.",
    details: "Pick model, aspect, count; use light/dark mode; download images instantly.",
    tech: ["HTML5", "CSS3", "JavaScript (Vanilla)", "HuggingFace API"],
    repo: "https://github.com/vivekkadoli/AI_Image_Generator",
    liveDemo: "#",
    startDate: "April 2025",
    endDate: "April 2025"
  }
];

const certifications: Cert[] = [
  {
    name: "AI & Hands on AI Tool workshop",
    org: "aconsultancy.marketing",
    date: "July 2025",
    url: "https://drive.google.com/file/d/1DL2fTOnr_hVucJ6LCUe21K5xXuLLIVr0/view?usp=sharing",
    skills: ["Artificial Intelligence", "Prompt Engineering"]
  },
  {
    name: "Introduction to Node.js LFW111",
    org: "The Linux Foundation",
    date: "March 2025",
    credId: "LF-c3u5wsk7fx",
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/49956cd7-d8e4-40a1-b14c-4838faf8a4f3-vivek-kadoli-c111550d-299e-485d-9529-38d329ac0ea6-certificate.pdf",
    skills: ["Nodejs"]
  },
  {
    name: "React, Nodejs, Express & MongoDB - The MERN FullStack Guide",
    org: "Udemy",
    date: "March 2025",
    credId: "UC-36274ffb-c0c8-4f17-9d59-c58da45efca2",
    url: "http://ude.my/UC-36274ffb-c0c8-4f17-9d59-c58da45efca2",
    skills: ["React.js"]
  }
];

export default function Page() {
  return (
    <div>
      {/* HERO / INTRO */}
      <section id="home" className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="relative max-w-3xl w-full bg-gradient-to-br from-[#24175a] via-[#1b0b3a] to-[#332761] p-12 rounded-3xl shadow-2xl">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 bg-gradient-to-br from-[#37f3ff] to-[#a47aff] rounded-full shadow-2xl flex items-center justify-center border-4 border-[#332761]">
            <span className="text-3xl font-bold text-[#17002d]">VK</span>
          </div>
          <h1 className="mt-10 text-4xl sm:text-5xl font-extrabold text-[#37f3ff] drop-shadow-lg text-center mb-2">
            Vivek Kadoli
          </h1>
          <p className="text-lg text-[#e2e0ef] font-semibold text-center mb-4 tracking-wide">
            Backend Developer | Data Integration Expert | AI Enthusiast
          </p>
          <p className="text-[1.1rem] text-[#bbb9cd] text-center mb-6 max-w-2xl mx-auto">
            Engineer specializing in <span className="text-[#a47aff] font-bold">secure, scalable backend systems</span> and <span className="text-[#37f3ff] font-semibold">integrating modern APIs & data automations</span>.<br/>
            Delivered business-ready digital projects and certified in core backend, fullstack, and AI skills.
          </p>
        </div>
      </section>
      {/* ABOUT */}
      <section
        id="about"
        className="mt-20 max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-tr from-[#20124a] via-[#2a185a] to-[#3a1e6c] shadow-lg border border-[#342075] scroll-mt-32"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#ff5edd]">About Me</h2>
        <p className="mb-3 text-[#e5d6fa] font-medium">
          Associate Software Developer and former Software Trainee with deep hands-on experience in backend automation, API design, cloud/databases, and AI/ML integrations. Passionate about prioritizing effective workloads, writing clear code, and delivering secure, reliable solutions.
        </p>
        <p className="mb-3 text-[#bbb9cd]">
          Skilled in Node.js, Express.js, REST APIs, MongoDB, SQL, scripting, cloud infrastructures, and modern tooling across development and deployment lifecycles.
        </p>
        <p className="mb-3 text-[#bbb9cd]">
          In every project, I value clarity, performance, and close collaboration.
        </p>
      </section>
      {/* SKILLS */}
      <section id="skills" className="mt-20 max-w-5xl mx-auto px-4 scroll-mt-32">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#37f3ff] text-center tracking-wide drop-shadow">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillLogoList.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center justify-center h-28 rounded-2xl bg-gradient-to-br from-[#222140] via-[#261a48] to-[#3e2c5e] border-2 border-[#37f3ff44] shadow-xl neon-glow-skill transform transition-all hover:scale-105 hover:border-[#37f3ff] hover:shadow-2xl hover:neon-glow-skill-strong"
            >
              <span className="mb-2">{item.icon}</span>
              <span className="text-base font-semibold text-[#37f3ff] text-center glow-txt">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="mt-20 mb-10 max-w-6xl mx-auto scroll-mt-32">
        <h2 className="text-4xl font-bold mb-10 text-[#a47aff] text-center tracking-wide drop-shadow">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="rounded-3xl p-6 bg-gradient-to-br from-[#261a48] via-[#322564] to-[#45347b] shadow-2xl border border-[#45347b] hover:border-[#37f3ff] group transition relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold mb-2 text-[#37f3ff] group-hover:text-[#ff5edd] transition">
                {proj.name}
              </h3>
              <p className="mb-1 text-[#f7e8ff] font-medium">{proj.description}</p>
              {proj.details && (
                <p className="text-sm text-[#aaa0d2] mb-2">{proj.details}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-1">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-block bg-[#8e6ded] text-[#190c32] px-2 py-1 rounded-full text-xs font-semibold border border-[#bc94f8] shadow"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(proj.contributors ?? []).length > 0 && (
                <div className="mb-1">
                  <span className="font-semibold text-[#ff5edd] text-xs">Contributors:</span>
                  {(proj.contributors ?? []).map((c, idx, arr) => (
                    <a
                      key={c.name}
                      href={c.url}
                      className="text-[#37f3ff] hover:text-white underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c.name}
                      {idx < arr.length - 1 ? "," : ""}
                    </a>
                  ))}
                </div>
              )}
              <div className="mb-2 text-xs text-[#8e71ce]">
                <span>
                  {proj.startDate} - {proj.endDate}
                </span>
              </div>
              <div className="flex gap-4 mt-3">
                {proj.repo && proj.repo !== "#" && (
                  <a
                    href={proj.repo}
                    className="text-[#37f3ff] underline font-semibold hover:text-[#ff5edd] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {proj.liveDemo && proj.liveDemo !== "#" && (
                  <a
                    href={proj.liveDemo}
                    className="text-[#37f3ff] underline font-semibold hover:text-[#ff5edd] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 group-hover:opacity-100 transition">
                <div className="absolute -inset-6 rounded-3xl neon-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CERTIFICATIONS */}
      <section id="certifications" className="max-w-4xl mx-auto py-14 px-4 scroll-mt-32">
        <h2 className="text-4xl font-bold mb-8 text-[#37f3ff] drop-shadow text-center">
          Certifications
        </h2>
        <div className="space-y-7">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col md:flex-row md:items-center gap-3 p-6 bg-gradient-to-br from-[#271749] via-[#352682] to-[#64429f] rounded-xl shadow-lg border border-[#392478] neon-glow-item"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#a47aff]">{cert.name}</h3>
                <p className="text-[#ede0ff]">{cert.org}</p>
                {cert.credId && (
                  <div className="text-xs text-[#d2bdff] mb-1">
                    Credential ID: <span className="font-mono">{cert.credId}</span>
                  </div>
                )}
                <div className="mb-1 text-xs text-[#ede0ff]">Issued: {cert.date}</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-[#4f357d] text-[#e2e0ef] px-2 py-0.5 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={cert.url}
                className="inline-block px-4 py-1.5 bg-[#37f3ff] text-[#17002d] rounded-lg shadow hover:bg-[#a47aff] hover:text-white font-semibold transition mt-2 md:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Show Credential
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

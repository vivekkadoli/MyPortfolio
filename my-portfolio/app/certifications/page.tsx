interface Cert {
  name: string;
  org: string;
  date: string;
  credId?: string;
  url: string;
  skills: string[];
}

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

export default function Certifications() {
  return (
    <section className="max-w-4xl mx-auto py-14 px-4">
      <h2 className="text-4xl font-bold mb-8 text-[#37f3ff] drop-shadow text-center">Certifications</h2>
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
  );
}

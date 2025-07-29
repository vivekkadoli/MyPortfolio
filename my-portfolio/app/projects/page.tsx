interface Project {
  name: string;
  description: string;
  tech: string[];
  demo: string;
  source: string;
}

const projects: Project[] = [
  {
    name: "AI-Powered Chatbot",
    description: "A live chatbot platform for smart customer queries using OpenAI GPT APIs and Node.js.",
    tech: ["Node.js", "OpenAI API", "Next.js", "Socket.io"],
    demo: "#",
    source: "#",
  },
  {
    name: "Image Recognition API",
    description: "Backend service that auto-detects objects and text in images using Google Vision API.",
    tech: ["Node.js", "Google Cloud Vision", "Express"],
    demo: "#",
    source: "#",
  },
  {
    name: "AI Data Integration Platform",
    description: "Automates integration and transformation of multi-source data with AI mapping suggestions and ETL.",
    tech: ["Node.js", "MongoDB", "OpenAI API", "Next.js"],
    demo: "#",
    source: "#",
  },
];

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Projects</h2>
      <div className="space-y-6">
        {projects.map((proj) => (
          <div key={proj.name} className="p-6 rounded bg-white shadow border">
            <h3 className="text-2xl font-semibold mb-2">{proj.name}</h3>
            <p className="mb-2">{proj.description}</p>
            <div className="mb-2">
              {proj.tech.map(t => (
                <span key={t} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">{t}</span>
              ))}
            </div>
            <div className="space-x-4 mt-2">
              <a href={proj.demo} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={proj.source} className="text-gray-700 underline" target="_blank" rel="noopener noreferrer">Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

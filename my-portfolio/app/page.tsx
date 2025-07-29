import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 tracking-tight">Vivek Kadoli</h1>
        <p className="text-xl text-gray-700 mb-6">
          Backend Developer, Data Integration Expert & Full-Stack Enthusiast
        </p>
        <p className="text-base text-gray-600 max-w-xl mx-auto mb-8">
          Based in Pune, Maharashtra, India. Passionate about building robust backend systems, automating data integration, and delivering smart solutions with AI API integrations.
        </p>
        <a
          href="https://www.linkedin.com/in/vivek-kadoli-4735b3107"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-white bg-blue-700 rounded shadow hover:bg-blue-800 transition"
        >
          View LinkedIn Profile
        </a>
      </div>
    </main>
  );
}


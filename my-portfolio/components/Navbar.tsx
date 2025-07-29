export default function Navbar() {
  return (
    <nav className="w-full flex justify-center space-x-8 py-7 fixed top-0 left-0 bg-[#17002d]/80 z-50 shadow-xl backdrop-blur">
      <a href="#home" className="text-lg font-semibold text-[#37f3ff] hover:text-white tracking-wider transition">Home</a>
      <a href="#about" className="text-lg font-semibold text-[#37f3ff] hover:text-white tracking-wider transition">About</a>
      <a href="#skills" className="text-lg font-semibold text-[#37f3ff] hover:text-white tracking-wider transition">Skills</a>
      <a href="#projects" className="text-lg font-semibold text-[#37f3ff] hover:text-white tracking-wider transition">Projects</a>
      <a href="#certifications" className="text-lg font-semibold text-[#37f3ff] hover:text-white tracking-wider transition">Certifications</a>
    </nav>
  );
}

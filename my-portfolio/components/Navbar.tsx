import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex gap-8 justify-center py-4 bg-white shadow">
      <Link href="/" className="font-semibold text-blue-700 hover:underline">Home</Link>
      <Link href="/about" className="font-semibold text-blue-700 hover:underline">About</Link>
      <Link href="/projects" className="font-semibold text-blue-700 hover:underline">Projects</Link>
    </nav>
  );
}

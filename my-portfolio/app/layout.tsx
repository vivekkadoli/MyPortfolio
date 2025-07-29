import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Vivek Kadoli | Portfolio",
  description: "Backend Developer, Data Integration Expert, AI Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#17002d] via-[#23074d] to-[#331868] min-h-screen scroll-smooth">
        <Navbar />
        <div className="max-w-6xl mx-auto pt-32">{children}</div>
      </body>
    </html>
  );
}

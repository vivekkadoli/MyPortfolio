import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: "Vivek Kadoli | Portfolio",
  description: "Backend Developer, Data Integration Expert, AI Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

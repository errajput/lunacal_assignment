import "./globals.css";

export const metadata = {
  title: "Assignment UI",
  description: "Figma layout with Next.js & TailwindCSS",
  icons: {
    icon: "/play-buttton.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#141718] text-white">{children}</body>
    </html>
  );
}

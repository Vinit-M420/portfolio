// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Vinit M | Full Stack Developer",
  icons: [
    // { rel: "icon", url: "/favicon.ico", type: "image/x-icon" }, // Standard favicon
    { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "32x32" }, // PNG fallback
  ],
  description:
    "I'm Vinit, a full-stack developer based out of Mumbai. This is my personal website to show my interests, projects and creativity.",
  openGraph: {
    title: "Vinit M | Full Stack Developer",
    description:
      "Explore Vinit M's portfolio, featuring innovative web development projects and skills.",
    url: "https://www.vinitm.com",
    type: "website",
    images: [{ url: "/meactually.png", width: 1200, height: 630 }],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
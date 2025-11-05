// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: {
    default: "Vinit M | Full Stack Developer",
    template: "%s | Vinit M",
  },
  description:
    "I'm Vinit, a full-stack developer based out of Mumbai. This is my personal website to show my interests, projects and creativity.",
  openGraph: {
    title: "Vinit M | Full Stack Developer",
    description:
      "Explore Vinit M's portfolio, featuring full-stack projects and skills.",
    url: "https://www.vinitm.com",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinit M | Full Stack Developer",    
    description:
      "Explore Vinit M's portfolio, featuring full-stack projects and skills.",
    images: ["/opengraph-image.png"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
      <link
        rel="preload"
        as="image"
        href="/meactually.png"
        imageSrcSet="/meactually.png 1x"
      />
      <link
        rel="preload"
        as="image"
        href="/bokuto.jpg"
        imageSrcSet="/bokuto.jpg 1x"
      />
      </head>
      <body>{children}</body>
    </html>
  );
}
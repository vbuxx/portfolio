import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://andhika-pramana-portfolio.andhikapramana807.chatgpt.site',
  ),
  title:
    'Andhika Pramana — Full Stack Developer, Founder & AI Engineer in Training',
  description:
    'Andhika Pramana builds launch-ready web products from product idea to production—and is extending that engineering craft into AI.',
  keywords: [
    'Andhika Pramana',
    'Full Stack Developer',
    'Backend Developer',
    'Software Engineer',
    'Founder',
    'Web Developer',
    'AI Engineering Learner',
    'Portfolio',
  ],
  openGraph: {
    title:
      'Andhika Pramana — Full Stack Developer, Founder & AI Engineer in Training',
    description:
      'Web products with a pulse—built from first idea to production, with a new chapter in AI Engineering.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'Andhika Pramana — Full Stack Developer, Founder, and AI Engineer in training.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Andhika Pramana — Full Stack Developer, Founder & AI Engineer in Training',
    description:
      'Web products with a pulse—built from first idea to production, with a new chapter in AI Engineering.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

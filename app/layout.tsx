import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://andhika-pramana-portfolio.andhikapramana807.chatgpt.site',
  ),
  title: 'Andhika Pramana — Fullstack Developer & AI Engineering Learner',
  description:
    'A motion-led portfolio by Andhika Pramana: dependable fullstack products, thoughtful engineering, and a growing practice in AI.',
  keywords: [
    'Andhika Pramana',
    'Fullstack Developer',
    'Software Engineer',
    'Web Developer',
    'AI Engineering Learner',
    'Portfolio',
  ],
  openGraph: {
    title: 'Andhika Pramana — Fullstack Developer & AI Engineering Learner',
    description:
      'Thoughtful web products, built to move. A deliberate journey into AI Engineering.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'Andhika Pramana — Fullstack Developer and AI Engineering learner.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andhika Pramana — Fullstack Developer & AI Engineering Learner',
    description:
      'Thoughtful web products, built to move. A deliberate journey into AI Engineering.',
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

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://andhika-pramana-portfolio.adept-comet-8367.chatgpt.site',
  ),
  title: 'Andhika Pramana — AI & Data Engineer',
  description:
    'Portfolio of Andhika Pramana: data engineering, operational machine learning, and evidence-led research.',
  keywords: [
    'Andhika Pramana',
    'Data Engineer',
    'AI Engineer',
    'Machine Learning',
    'Portfolio',
  ],
  openGraph: {
    title: 'Andhika Pramana — AI & Data Engineer',
    description:
      'Clean data, useful AI, and human decisions—made into understandable systems.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'Andhika Pramana — Data with a pulse. Products with purpose.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andhika Pramana — AI & Data Engineer',
    description:
      'Clean data, useful AI, and human decisions—made into understandable systems.',
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

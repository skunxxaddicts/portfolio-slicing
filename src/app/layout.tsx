import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Edwin Anderson | Junior Frontend Developer Portfolio',
  description: 'A frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly. Specializing in JavaScript, React, HTML5, and CSS.',
  keywords: ['frontend developer', 'web developer', 'React', 'JavaScript', 'HTML5', 'CSS', 'portfolio', 'Edwin Anderson'],
  authors: [{ name: 'Edwin Anderson' }],
  openGraph: {
    title: 'Edwin Anderson | Junior Frontend Developer Portfolio',
    description: 'A frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edwin Anderson | Junior Frontend Developer Portfolio',
    description: 'A frontend developer passionate about creating seamless digital experiences that are fast, responsive, and user-friendly.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

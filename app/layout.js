import { Space_Mono, Syne } from 'next/font/google';
import "./globals.css";
import EffectsProvider from './(home)/_components/effects/EffectsProvider';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

export const metadata = {
  metadataBase: new URL('https://johnrovan.com'),
  title: 'John Rovan | Frontend Developer',
  description: 'Frontend Developer with 2+ years building fast, pixel-perfect web applications. Specializing in React and Next.js. Based in Cebu, Philippines.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer',
    'JavaScript',
    'Cebu Philippines',
    'John Rovan',
  ],
  authors: [{ name: 'John Rovan' }],
  creator: 'John Rovan',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johnrovan.com',
    siteName: 'John Rovan Portfolio',
    title: 'John Rovan | Frontend Developer',
    description: 'Frontend Developer with 2+ years building fast, pixel-perfect web applications. Specializing in React and Next.js.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Rovan | Frontend Developer',
    description: 'Frontend Developer with 2+ years building fast, pixel-perfect web applications. Specializing in React and Next.js.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <EffectsProvider>
          {children}
        </EffectsProvider>
      </body>
    </html>
  );
}

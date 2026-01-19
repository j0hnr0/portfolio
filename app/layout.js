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
  title: "Johnrovan's Portfolio",
  description: "Made with love",
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

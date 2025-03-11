import type { Metadata } from 'next';
import { Geist, Geist_Mono, Work_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Top movies',
  description: 'The website about movies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} antialiased mx-auto`}
      >
        <Header />

        <main className="mt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

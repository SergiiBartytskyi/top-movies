import type { Metadata } from 'next';
import { Geist, Geist_Mono, Work_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

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
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} antialiased  max-w-screen-xl mx-auto`}
      >
        <Header />
        {/* <main className="flex flex-col justify-center items-center gap-2.5"> */}
        <main className="container mx-auto px-4 py-8">{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}

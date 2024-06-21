import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

// import { GeistMono } from 'geist/font/mono';
import './globals.css';

import Footer from '@/components/footer';
import MobileNav from '@/components/mobile-nav';
import NavBar from '@/components/nav';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex flex-col items-center justify-center">
            {/* <NavBar /> */}

            <div className="flex w-full max-w-6xl items-center justify-center pt-4">
              <p className="text-2xl">{`<andreul />`}</p>
            </div>
            <MobileNav />

            <main className="flex min-h-screen max-w-7xl flex-col items-center justify-center">
              {children}
            </main>
            <Footer />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}

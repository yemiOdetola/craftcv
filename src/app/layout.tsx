import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { HydrationZustand } from '@/utils/HydrationZustand';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create your CV',
  description: '[side project for CV generator]',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={``}>
      <body className={inter.className}>
        <HydrationZustand>{children}</HydrationZustand>
      </body>
    </html>
  );
}

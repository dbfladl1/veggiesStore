import { Work_Sans } from 'next/font/google';
import RootLayout from './rootLayout';
import './globals.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-worksans',
});

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={workSans.className}>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
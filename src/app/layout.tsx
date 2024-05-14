import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | Next14 first app',
        default: 'Next js app',
    },
    description: 'Home page description',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='container'>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}

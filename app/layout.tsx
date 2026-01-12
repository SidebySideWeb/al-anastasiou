import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AL. Anastasiou – Κουφώματα Αλουμινίου & Ενεργειακή Αναβάθμιση',
  description: 'Κουφώματα Αλουμινίου, Ενεργειακή Αναβάθμιση, Πρόγραμμα Εξοικονομώ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body className="bg-white text-gray-900">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

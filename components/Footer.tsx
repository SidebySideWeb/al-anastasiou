
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-8 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold industrial-font mb-6">
            AL. <span className="text-yellow-500">ANASTASIOU</span>
          </h2>
          <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
            Η AL. Anastasiou δραστηριοποιείται στον χώρο των κατασκευών και των αλουμινοκατασκευών, προσφέροντας αξιόπιστες λύσεις για κατοικίες και επαγγελματικούς χώρους.
          </p>
          <div className="flex gap-4">
             {/* Simple social icons placeholders */}
             <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
               <span className="font-bold">F</span>
             </div>
             <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
               <span className="font-bold">I</span>
             </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold industrial-font mb-6 text-yellow-500">ΠΛΟΗΓΗΣΗ</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Αρχική</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Υπηρεσίες</Link></li>
            <li><Link href="/exoikonomo" className="text-gray-400 hover:text-white transition-colors">Εξοικονομώ</Link></li>
            <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Επικοινωνία</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold industrial-font mb-6 text-yellow-500">ΕΠΙΚΟΙΝΩΝΙΑ</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex flex-col">
              <span className="text-white font-bold text-xs industrial-font">ΠΕΡΙΟΧΕΣ</span>
              Εύβοια & Αττική
            </li>
            <li className="flex flex-col">
              <span className="text-white font-bold text-xs industrial-font">ΤΗΛΕΦΩΝΟ</span>
              <a href="tel:+302100000000" className="hover:text-yellow-500">+30 2221 000 000</a>
            </li>
            <li className="flex flex-col">
              <span className="text-white font-bold text-xs industrial-font">EMAIL</span>
              <a href="mailto:info@anastasiou-alu.gr" className="hover:text-yellow-500">info@anastasiou-alu.gr</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-zinc-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} AL. Anastasiou – Κουφώματα Αλουμινίου. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

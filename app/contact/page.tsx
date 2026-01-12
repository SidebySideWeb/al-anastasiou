'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real logic would go here
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 industrial-font">ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Για πληροφορίες, προσφορές ή συμμετοχή στο πρόγραμμα Εξοικονομώ, καλέστε μας ή συμπληρώστε τη φόρμα επικοινωνίας.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8 industrial-font">ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-yellow-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg industrial-font mb-1">ΤΗΛΕΦΩΝΟ</h4>
                    <a href="tel:+302221000000" className="text-2xl font-bold hover:text-yellow-600 transition-colors">
                      +30 2221 000 000
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Δευτέρα - Παρασκευή: 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-yellow-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg industrial-font mb-1">EMAIL</h4>
                    <a href="mailto:info@anastasiou-alu.gr" className="text-2xl font-bold hover:text-yellow-600 transition-colors break-all">
                      info@anastasiou-alu.gr
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-yellow-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg industrial-font mb-1">ΠΕΡΙΟΧΕΣ ΕΞΥΠΗΡΕΤΗΣΗΣ</h4>
                    <p className="text-2xl font-bold">Εύβοια & Αττική</p>
                    <p className="text-gray-500 text-sm mt-1">Άμεση απόκριση και αυτοψία στον χώρο σας.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 grayscale">
                <img 
                  src="https://images.unsplash.com/photo-1577017040065-650ee4d43339?q=80&w=2070&auto=format&fit=crop" 
                  alt="Aluminum Work" 
                  className="w-full h-64 object-cover border-b-4 border-yellow-500"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-zinc-50 p-8 md:p-12 border border-zinc-200">
              <h3 className="text-2xl font-bold mb-8 industrial-font italic underline underline-offset-8 decoration-yellow-500 decoration-4">
                ΦΟΡΜΑ ΕΝΔΙΑΦΕΡΟΝΤΟΣ
              </h3>
              
              {submitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 p-8 text-green-700">
                  <h4 className="font-bold mb-2 text-xl industrial-font">ΕΥΧΑΡΙΣΤΟΥΜΕ!</h4>
                  <p>Το μήνυμά σας στάλθηκε επιτυχώς. Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-bold industrial-font underline"
                  >
                    ΝΕΟ ΜΗΝΥΜΑ
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold industrial-font mb-2">ΟΝΟΜΑΤΕΠΩΝΥΜΟ *</label>
                    <input required type="text" className="w-full bg-white border border-zinc-300 p-4 focus:outline-none focus:border-yellow-500 transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold industrial-font mb-2">ΤΗΛΕΦΩΝΟ *</label>
                      <input required type="tel" className="w-full bg-white border border-zinc-300 p-4 focus:outline-none focus:border-yellow-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold industrial-font mb-2">EMAIL</label>
                      <input type="email" className="w-full bg-white border border-zinc-300 p-4 focus:outline-none focus:border-yellow-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold industrial-font mb-2">ΕΝΔΙΑΦΕΡΟΜΑΙ ΓΙΑ</label>
                    <select className="w-full bg-white border border-zinc-300 p-4 focus:outline-none focus:border-yellow-500 transition-colors">
                      <option>Κουφώματα Αλουμινίου</option>
                      <option>Πρόγραμμα Εξοικονομώ</option>
                      <option>Πόρτες & Κάγκελα</option>
                      <option>Ειδική Κατασκευή</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold industrial-font mb-2">ΜΗΝΥΜΑ / ΛΕΠΤΟΜΕΡΕΙΕΣ ΕΡΓΟΥ</label>
                    <textarea rows={4} className="w-full bg-white border border-zinc-300 p-4 focus:outline-none focus:border-yellow-500 transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-5 font-bold industrial-font hover:bg-yellow-500 hover:text-black transition-all transform hover:-translate-y-1">
                    ΑΠΟΣΤΟΛΗ
                  </button>
                  <p className="text-[10px] text-gray-400 text-center uppercase">
                    Τα προσωπικά σας δεδομένα χρησιμοποιούνται αποκλειστικά για την επικοινωνία μας.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

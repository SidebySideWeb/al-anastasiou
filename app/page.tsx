import Link from 'next/link';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-black">
          <img 
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop" 
            alt="Aluminum Constructions" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              ΚΟΥΦΩΜΑΤΑ ΑΛΟΥΜΙΝΙΟΥ <br/>
              <span className="text-yellow-500">& ΕΝΕΡΓΕΙΑΚΗ ΑΝΑΒΑΘΜΙΣΗ</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 industrial-font">
              Ποιότητα κατασκευής, custom λύσεις και πλήρης υποστήριξη στο πρόγραμμα Εξοικονομώ.
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Η AL. Anastasiou δραστηριοποιείται στον χώρο των κατασκευών και των αλουμινοκατασκευών, προσφέροντας αξιόπιστες λύσεις για κατοικίες και επαγγελματικούς χώρους.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-yellow-500 text-black px-8 py-4 text-center font-bold industrial-font hover:bg-yellow-600 transition-all transform hover:-translate-y-1">
                ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ
              </Link>
              <Link href="/exoikonomo" className="bg-transparent border-2 border-white text-white px-8 py-4 text-center font-bold industrial-font hover:bg-white hover:text-black transition-all transform hover:-translate-y-1">
                ΜΑΘΕΤΕ ΓΙΑ ΤΟ ΕΞΟΙΚΟΝΟΜΩ
              </Link>
            </div>
          </div>
        </div>
        {/* Geometric Industrial Accent */}
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-yellow-500 hidden lg:block opacity-20 transform rotate-45 translate-x-16 translate-y-16"></div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-500 font-bold industrial-font tracking-widest block mb-2 underline decoration-4 underline-offset-8">Η ΕΤΑΙΡΕΙΑ ΜΑΣ</span>
              <h2 className="text-4xl font-bold mb-6">ΕΜΠΕΙΡΙΑ & ΤΕΧΝΟΓΝΩΣΙΑ ΣΤΗΝ ΕΥΒΟΙΑ ΚΑΙ ΤΗΝ ΑΤΤΙΚΗ</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Η AL. Anastasiou – Κουφώματα Αλουμινίου προσφέρει σύγχρονες κατασκευές αλουμινίου, προσαρμοσμένες στις ανάγκες κάθε πελάτη.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Με εμπειρία, τεχνογνωσία και ποιοτικά υλικά, αναλαμβάνουμε έργα στην Εύβοια και την Αττική, με στόχο την ενεργειακή αναβάθμιση και τη λειτουργική ανανέωση κάθε χώρου.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4 border-t border-gray-100">
                <div>
                  <h4 className="text-3xl font-bold text-black industrial-font">15+</h4>
                  <p className="text-sm text-gray-500">ΕΤΗ ΕΜΠΕΙΡΙΑΣ</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-black industrial-font">500+</h4>
                  <p className="text-sm text-gray-500">ΟΛΟΚΛΗΡΩΜΕΝΑ ΕΡΓΑ</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-yellow-500 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Workshop" 
                className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Κουφώματα αλουμινίου', icon: 'M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z' },
              { title: 'Πόρτες & κάγκελα', icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z' },
              { title: 'Ανακαινίσεις κουφωμάτων', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
              { title: 'WPC πατώματα πισίνας', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
              { title: 'Σιδηροκατασκευές', icon: 'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
              { title: 'Custom ειδικές κατασκευές', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 border-b-4 border-transparent hover:border-yellow-500 transition-all duration-300 shadow-sm group">
                <div className="w-12 h-12 bg-black text-yellow-500 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                   </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 industrial-font">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6">Επαγγελματικές λύσεις με έμφαση στη λεπτομέρεια και την ποιότητα των υλικών.</p>
                <Link href="/services" className="text-black font-bold text-xs industrial-font flex items-center gap-2 hover:gap-4 transition-all">
                  ΠΕΡΙΣΣΟΤΕΡΑ <span className="text-yellow-500">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-12 industrial-font">ΓΙΑΤΙ ΝΑ ΜΑΣ <span className="text-yellow-500">ΕΠΙΛΕΞΕΤΕ</span></h2>
              <div className="space-y-12">
                {[
                  { title: 'Πολυετής εμπειρία', desc: 'Γνωρίζουμε σε βάθος τον χώρο της κατασκευής και της ενεργειακής αναβάθμισης.' },
                  { title: 'Υψηλή ποιότητα', desc: 'Χρησιμοποιούμε μόνο πιστοποιημένα, ανθεκτικά υλικά από κορυφαίους προμηθευτές.' },
                  { title: 'Custom λύσεις', desc: 'Κάθε έργο είναι μοναδικό. Σχεδιάζουμε λύσεις που ταιριάζουν ακριβώς στον χώρο σας.' },
                  { title: 'Πρόγραμμα Εξοικονομώ', desc: 'Πλήρης υποστήριξη και καθοδήγηση για τη μέγιστη επιδότηση του ακινήτου σας.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 border-2 border-yellow-500 flex items-center justify-center font-bold text-yellow-500">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 industrial-font">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-yellow-500 p-12 text-black flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 industrial-font italic">ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ ΓΙΑ ΠΡΟΣΦΟΡΑ</h3>
              <p className="text-lg mb-8 font-medium">
                Είμαστε εδώ για να συζητήσουμε τις ανάγκες σας και να σας προτείνουμε την καλύτερη οικονομοτεχνική λύση.
              </p>
              <Link href="/contact" className="inline-block bg-black text-white px-10 py-4 font-bold industrial-font hover:opacity-90 transition-opacity self-start">
                ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

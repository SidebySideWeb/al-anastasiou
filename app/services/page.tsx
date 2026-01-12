'use client';

import Link from 'next/link';

export default function Services() {
  const servicesList = [
    {
      title: 'Κουφώματα Αλουμινίου',
      desc: 'Κατασκευή κουφωμάτων αλουμινίου υψηλής ποιότητας, με έμφαση στη θερμομόνωση, την ασφάλεια και τη μοντέρνα αισθητική.',
      image: 'https://images.unsplash.com/photo-1590053142630-f60814421b53?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Πόρτες & Κάγκελα',
      desc: 'Σχεδιασμός και κατασκευή πορτών και κάγκελων προσαρμοσμένων στις διαστάσεις και το ύφος κάθε χώρου.',
      image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Ανακαινίσεις Κουφωμάτων',
      desc: 'Αντικατάσταση παλαιών κουφωμάτων με νέες ενεργειακά αποδοτικές λύσεις για άμεση εξοικονόμηση ενέργειας.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'WPC Πατώματα Πισίνας',
      desc: 'Κατασκευή πατωμάτων πισίνας από WPC υλικά, ανθεκτικά στην υγρασία και τον ήλιο, με χαμηλές απαιτήσεις συντήρησης.',
      image: 'https://images.unsplash.com/photo-1560749003-a4b1e97569ff?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Σιδηροκατασκευές',
      desc: 'Ειδικές μεταλλικές κατασκευές για οικιακή και επαγγελματική χρήση, με έμφαση στη σταθερότητα και την ασφάλεια.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Custom Κατασκευές',
      desc: 'Σχεδιάζουμε και υλοποιούμε ειδικές κατασκευές, πλήρως προσαρμοσμένες στις ανάγκες κάθε έργου.',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-black py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4 industrial-font">ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ</h1>
          <p className="text-yellow-500 font-bold industrial-font tracking-widest">ΕΞΕΙΔΙΚΕΥΜΕΝΕΣ ΛΥΣΕΙΣ ΓΙΑ ΚΑΘΕ ΧΩΡΟ</p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500 opacity-10 skew-x-[-20deg]"></div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {servicesList.map((service, idx) => (
              <div key={idx} className="group">
                <div className="overflow-hidden mb-8 h-80 relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border-8 border-transparent group-hover:border-yellow-500 transition-all duration-300 pointer-events-none"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 industrial-font border-l-4 border-yellow-500 pl-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link href="/contact" className="inline-flex items-center text-sm font-bold industrial-font text-black hover:text-yellow-600 transition-colors">
                  ΖΗΤΗΣΤΕ ΠΡΟΣΦΟΡΑ <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-100 py-16 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold industrial-font mb-2">ΧΡΕΙΑΖΕΣΤΕ ΕΙΔΙΚΗ ΚΑΤΑΣΚΕΥΗ;</h2>
            <p className="text-gray-600">Επικοινωνήστε μαζί μας για να βρούμε την ιδανική λύση για το δικό σας έργο.</p>
          </div>
          <Link href="/contact" className="bg-black text-white px-8 py-4 font-bold industrial-font hover:bg-yellow-500 hover:text-black transition-all">
            ΕΠΙΚΟΙΝΩΝΙΑ
          </Link>
        </div>
      </section>
    </div>
  );
}

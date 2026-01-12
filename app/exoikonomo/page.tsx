import Link from 'next/link';

export default function Exoikonomo() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-yellow-500 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 industrial-font italic">ΕΞΟΙΚΟΝΟΜΩ 2024</h1>
          <p className="text-xl text-black font-semibold max-w-3xl mx-auto leading-relaxed">
            Αναβαθμίστε το ακίνητό σας με επιδότηση έως και 75%. Αναλαμβάνουμε όλη τη διαδικασία των αλουμινοκατασκευών.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 industrial-font">ΤΙ ΕΙΝΑΙ ΤΟ ΠΡΟΓΡΑΜΜΑ ΕΞΟΙΚΟΝΟΜΩ;</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Το πρόγραμμα Εξοικονομώ επιδοτεί παρεμβάσεις ενεργειακής αναβάθμισης κατοικιών, με στόχο τη μείωση της κατανάλωσης ενέργειας και τη βελτίωση της ποιότητας ζωής. Πρόκειται για μια μοναδική ευκαιρία να αντικαταστήσετε τα παλιά σας κουφώματα με ελάχιστο κόστος.
            </p>
          </div>

          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-50 p-10 border-l-8 border-black">
              <h3 className="text-xl font-bold mb-4 industrial-font">ΠΟΙΟΥΣ ΑΦΟΡΑ</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Ιδιοκτήτες κατοικιών (μονοκατοικίες, διαμερίσματα)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Ακίνητα που χρησιμοποιούνται ως κύρια κατοικία
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Ιδιοκτήτες που πληρούν τα εισοδηματικά κριτήρια
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900 p-10 border-l-8 border-yellow-500 text-white">
              <h3 className="text-xl font-bold mb-4 industrial-font">ΟΙ ΠΑΡΕΜΒΑΣΕΙΣ ΜΑΣ</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Αντικατάσταση κουφωμάτων αλουμινίου
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Τοποθέτηση συστημάτων σκίασης (ρολά, πατζούρια)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 font-bold">✓</span>
                  Τοποθέτηση κεντρικής πόρτας ασφαλείας
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-10 industrial-font text-center">Η ΔΙΑΔΙΚΑΣΙΑ ΜΑΣ</h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Μελέτη & Πρόταση', desc: 'Προτείνουμε τα κατάλληλα κουφώματα βάσει των αναγκών του ακινήτου σας.' },
                { step: '02', title: 'Τεχνική Υποστήριξη', desc: 'Συνεργαζόμαστε με μηχανικούς και ενεργειακούς επιθεωρητές για το φάκελό σας.' },
                { step: '03', title: 'Κατασκευή & Τοποθέτηση', desc: 'Παράγουμε και τοποθετούμε τα συστήματα με δικά μας έμπειρα συνεργεία.' },
                { step: '04', title: 'Πιστοποίηση', desc: 'Παραδίδουμε όλα τα απαραίτητα πιστοποιητικά για την ολοκλήρωση της επιδότησης.' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start pb-8 border-b border-gray-100 last:border-0">
                  <div className="text-4xl font-black text-gray-200 industrial-font leading-none">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 industrial-font">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-black p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-6 industrial-font">ΕΙΣΤΕ ΕΠΙΛΕΞΙΜΟΙ;</h2>
            <p className="text-gray-400 mb-10">Συμπληρώστε τη φόρμα για να ελέγξουμε αν το ακίνητό σας μπορεί να ενταχθεί στο πρόγραμμα.</p>
            <Link href="/contact" className="bg-yellow-500 text-black px-12 py-4 font-bold industrial-font hover:bg-yellow-600 transition-colors inline-block">
              ΕΛΕΓΧΟΣ ΕΠΙΛΕΞΙΜΟΤΗΤΑΣ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

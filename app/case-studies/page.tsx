export default function CaseStudies() {
  const cases = [
    {
      title: 'Ενεργειακή Αναβάθμιση Μονοκατοικίας – Χαλκίδα',
      goal: 'Ο ιδιοκτήτης αναζητούσε λύση για τη μείωση της θερμικής απώλειας και τη βελτίωση της ηχομόνωσης σε μια παλιά μονοκατοικία.',
      what: 'Πραγματοποιήθηκε αντικατάσταση όλων των παλαιών ξύλινων κουφωμάτων με νέα ενεργειακά κουφώματα αλουμινίου με θερμοδιακοπή και διπλούς ενεργειακούς υαλοπίνακες.',
      result: 'Μείωση του κόστους θέρμανσης κατά 40% και ριζική αλλαγή της εξωτερικής αισθητικής του σπιτιού.',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000&auto=format&fit=crop'
      ]
    },
    {
      title: 'Custom Σιδηροκατασκευή & Κουφώματα σε Κατάστημα – Αθήνα',
      goal: 'Ανάγκη για μεγάλη βιτρίνα με ελάχιστα προφίλ για μέγιστη ορατότητα και custom εσωτερικά χωρίσματα βιομηχανικού τύπου.',
      what: 'Σχεδιασμός και τοποθέτηση minimal συστημάτων αλουμινίου και κατασκευή custom μεταλλικών διαχωριστικών με γυαλί (Industrial Style).',
      result: 'Ένας μοντέρνος επαγγελματικός χώρος υψηλής αισθητικής με πλήρη λειτουργικότητα και ασφάλεια.',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 industrial-font">PROJECTS & CASE STUDIES</h1>
          <p className="text-yellow-500 font-bold industrial-font tracking-widest">ΔΕΙΓΜΑΤΑ ΤΗΣ ΔΟΥΛΕΙΑΣ ΜΑΣ</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {cases.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-20 last:border-0">
                <h2 className="text-3xl font-bold mb-10 industrial-font border-l-8 border-yellow-500 pl-6">{item.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {item.images.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden bg-gray-100">
                      <img src={img} alt={`Project image ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="bg-zinc-50 p-6">
                    <h4 className="font-bold text-sm mb-3 text-yellow-600 industrial-font">ΣΤΟΧΟΣ ΕΡΓΟΥ</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.goal}</p>
                  </div>
                  <div className="bg-zinc-50 p-6">
                    <h4 className="font-bold text-sm mb-3 text-yellow-600 industrial-font">ΤΙ ΚΑΝΑΜΕ</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.what}</p>
                  </div>
                  <div className="bg-black text-white p-6">
                    <h4 className="font-bold text-sm mb-3 text-yellow-500 industrial-font">ΑΠΟΤΕΛΕΣΜΑ</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

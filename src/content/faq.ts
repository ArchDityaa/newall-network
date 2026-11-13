// src/content/faq.ts
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faq = {
  id: [
    {
      id: 'remote-only',
      question: 'Apakah tim Anda perlu datang ke kantor kami?',
      answer: 'Tidak. Semua layanan dikerjakan jarak jauh, jadi tidak ada yang perlu datang ke kantor Anda.',
    },
    {
      id: 'industries',
      question: 'Bidang usaha apa saja yang Anda tangani?',
      answer: 'Bidang apa pun. Kami tidak terikat pada satu bidang usaha, dan kami memakai AI untuk mempelajari industri, istilah, dan sistem Anda dalam hitungan hari.',
    },
    {
      id: 'how-to-start',
      question: 'Bagaimana cara memulainya?',
      answer: 'Kirim email ke it@newall.network berisi masalah atau rencana Anda. Tidak perlu memakai istilah teknis, dan kami akan membalas lewat email.',
    },
    {
      id: 'proposal',
      question: 'Apa yang kami terima sebelum pekerjaan dimulai?',
      answer: 'Usulan berisi langkah, waktu, dan biaya. Kami menyusunnya setelah mempelajari kondisi Anda.',
    },
    {
      id: 'progress-tracking',
      question: 'Bagaimana kami tahu perkembangan pekerjaannya?',
      answer: 'Lewat laporan progres yang bisa Anda pantau. Setiap pekerjaan dilaporkan dalam bahasa yang mudah dipahami, lengkap dengan bukti yang bisa Anda cek sendiri.',
    },
    {
      id: 'data-leak-check',
      question: 'Apakah Cek Data Bocor menampilkan data saya?',
      answer: 'Tidak. Hasilnya hanya menyebut apakah email Anda pernah bocor, sumbernya, dan jenis data yang ikut bocor. Isi datanya tidak ditampilkan, dan pemeriksaan dibatasi satu kali per hari.',
    },
    {
      id: 'not-law-firm',
      question: 'Apakah Newall Network kantor hukum?',
      answer: 'Bukan. Kami bukan kantor advokat dan tidak mewakili Anda di pengadilan. Kami memberi konsultasi awal dan pendampingan lewat jalur resmi, dan perkara yang membutuhkan advokat kami teruskan ke kantor hukum.',
    },
  ],
  en: [
    {
      id: 'remote-only',
      question: 'Does your team need to visit our office?',
      answer: 'No. All services are delivered remotely, so no one needs to come to your office.',
    },
    {
      id: 'industries',
      question: 'What industries do you work with?',
      answer: 'Any industry. We are not limited to one sector, and we use AI to learn your industry, terminology, and systems within days.',
    },
    {
      id: 'how-to-start',
      question: 'How do we get started?',
      answer: 'Email it@newall.network with your problem or plan. No technical jargon needed — we\'ll reply via email.',
    },
    {
      id: 'proposal',
      question: 'What do we receive before work begins?',
      answer: 'A proposal containing steps, timeline, and cost. We prepare it after understanding your situation.',
    },
    {
      id: 'progress-tracking',
      question: 'How do we track progress?',
      answer: 'Through progress reports you can monitor. Every job is reported in plain language, complete with evidence you can verify yourself.',
    },
    {
      id: 'data-leak-check',
      question: 'Does the Data Leak Check show my data?',
      answer: 'No. Results only state whether your email has been leaked, the source, and what type of data was exposed. The actual data is not displayed, and checks are limited to once per day.',
    },
    {
      id: 'not-law-firm',
      question: 'Is Newall Network a law firm?',
      answer: 'No. We are not a law firm and do not represent you in court. We provide initial consultation and accompaniment through official channels, and refer cases requiring lawyers to law firms.',
    },
  ],
} as const;

export type FAQConfig = typeof faq;
export type FAQByLocale = {
  id: readonly FAQItem[];
  en: readonly FAQItem[];
};
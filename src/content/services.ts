// src/content/services.ts
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: ServiceIcon;
  features: string[];
  longDescription?: string;
}

export type ServiceIcon =
  | 'monitor'
  | 'globe'
  | 'search'
  | 'zap'
  | 'bot'
  | 'database'
  | 'server'
  | 'shield'
  | 'code'
  | 'users';

export const services = {
  id: [
    {
      id: 'it-support',
      name: 'IT Support Jarak Jauh',
      description: 'Bantuan IT harian untuk tim Anda, tanpa harus datang ke kantor.',
      icon: 'monitor' as ServiceIcon,
      features: ['Remote troubleshooting', 'Monitoring 24/7', 'On-call support', 'Device management'],
      longDescription: 'Kami menyediakan dukungan IT penuh untuk tim Anda — dari setup perangkat baru, troubleshooting jaringan, hingga manajemen keamanan endpoint. Semuanya dikerjakan jarak jauh dengan waktu respons cepat.',
    },
    {
      id: 'website-server',
      name: 'Website & Server',
      description: 'Dari membuat website baru sampai merawat website yang sudah ada.',
      icon: 'globe' as ServiceIcon,
      features: ['Modern web development', 'Performance optimization', 'Server management', 'SSL & security'],
      longDescription: 'Kami bangun dan merawat website menggunakan teknologi modern (React, Next.js, Astro) dengan fokus pada kecepatan, SEO, dan aksesibilitas. Termasuk manajemen server, deployment, dan monitoring uptime.',
    },
    {
      id: 'seo',
      name: 'SEO',
      description: 'Supaya bisnis Anda mudah ditemukan di Google, apa pun industrinya.',
      icon: 'search' as ServiceIcon,
      features: ['Technical SEO audit', 'Content strategy', 'Keyword research', 'Monthly reporting'],
      longDescription: 'Pendekatan berbasis data: audit teknis mendalam, riset kata kunci kompetitif, strategi konten, dan pelaporan bulanan yang mudah dipahami manajemen. Kami tidak menjanjikan ranking #1 — kami bangun fondasi yang benar.',
    },
    {
      id: 'automation-bot',
      name: 'Otomasi & Bot',
      description: 'Pekerjaan berulang dikerjakan sistem, bukan orang.',
      icon: 'zap' as ServiceIcon,
      features: ['Workflow automation', 'Custom bots', 'API integration', 'No-code/low-code'],
      longDescription: 'Identifikasi proses manual yang memakan waktu, lalu otomatisasi dengan n8n, Make, atau custom script. Bot untuk WhatsApp, Telegram, Slack, email parsing, data entry, dan sincronisasi antar sistem.',
    },
    {
      id: 'ai-agent',
      name: 'AI Agent',
      description: 'Asisten AI yang memahami bisnis Anda dan bekerja di sistem yang sudah ada.',
      icon: 'bot' as ServiceIcon,
      features: ['Custom knowledge base', 'System integration', 'Autonomous tasks', 'Human-in-the-loop'],
      longDescription: 'AI agent yang dilatih pada dokumen, SOP, dan data bisnis Anda. Bisa menjawab pertanyaan tim, memproses tiket support, drafting email, analisis data, dan eksekusi tugas di CRM/ERP/tools internal.',
    },
    {
      id: 'app-data',
      name: 'Aplikasi & Data',
      description: 'Aplikasi dan sambungan antarsistem yang dibuat sesuai cara kerja Anda.',
      icon: 'database' as ServiceIcon,
      features: ['Custom web apps', 'System integration', 'Data pipeline', 'Dashboard & analytics'],
      longDescription: 'Pengembangan aplikasi internal (admin panel, portal client, dashboard), integrasi antar SaaS (CRM, accounting, HRIS, dll), ETL data pipeline, dan visualisasi data untuk pengambilan keputusan.',
    },
  ],
  en: [
    {
      id: 'it-support',
      name: 'Remote IT Support',
      description: 'Daily IT assistance for your team, without visiting your office.',
      icon: 'monitor' as ServiceIcon,
      features: ['Remote troubleshooting', '24/7 monitoring', 'On-call support', 'Device management'],
      longDescription: 'We provide full IT support for your team — from new device setup, network troubleshooting, to endpoint security management. All done remotely with fast response times.',
    },
    {
      id: 'website-server',
      name: 'Website & Server',
      description: 'From building new websites to maintaining existing ones.',
      icon: 'globe' as ServiceIcon,
      features: ['Modern web development', 'Performance optimization', 'Server management', 'SSL & security'],
      longDescription: 'We build and maintain websites using modern tech (React, Next.js, Astro) focused on speed, SEO, and accessibility. Including server management, deployment, and uptime monitoring.',
    },
    {
      id: 'seo',
      name: 'SEO',
      description: 'So your business is easily found on Google, whatever the industry.',
      icon: 'search' as ServiceIcon,
      features: ['Technical SEO audit', 'Content strategy', 'Keyword research', 'Monthly reporting'],
      longDescription: 'Data-driven approach: deep technical audit, competitive keyword research, content strategy, and monthly reporting that management can actually understand. We don\'t promise #1 rankings — we build the right foundation.',
    },
    {
      id: 'automation-bot',
      name: 'Automation & Bots',
      description: 'Repetitive work done by systems, not people.',
      icon: 'zap' as ServiceIcon,
      features: ['Workflow automation', 'Custom bots', 'API integration', 'No-code/low-code'],
      longDescription: 'Identify time-consuming manual processes, then automate with n8n, Make, or custom scripts. Bots for WhatsApp, Telegram, Slack, email parsing, data entry, and cross-system synchronization.',
    },
    {
      id: 'ai-agent',
      name: 'AI Agent',
      description: 'AI assistants that understand your business and work in your existing systems.',
      icon: 'bot' as ServiceIcon,
      features: ['Custom knowledge base', 'System integration', 'Autonomous tasks', 'Human-in-the-loop'],
      longDescription: 'AI agents trained on your documents, SOPs, and business data. Can answer team questions, process support tickets, draft emails, analyze data, and execute tasks in your CRM/ERP/internal tools.',
    },
    {
      id: 'app-data',
      name: 'Applications & Data',
      description: 'Applications and cross-system connections built for how you work.',
      icon: 'database' as ServiceIcon,
      features: ['Custom web apps', 'System integration', 'Data pipeline', 'Dashboard & analytics'],
      longDescription: 'Internal app development (admin panels, client portals, dashboards), SaaS integrations (CRM, accounting, HRIS, etc.), ETL data pipelines, and data visualization for decision making.',
    },
  ],
} as const;

export type ServicesConfig = typeof services;
export type ServicesByLocale = {
  id: readonly Service[];
  en: readonly Service[];
};
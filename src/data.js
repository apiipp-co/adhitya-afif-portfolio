import React from 'react';

export const GithubIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
    })
  );

export const LinkedinIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z'
    })
  );

export const InstagramIcon = (props) =>
  React.createElement(
    'svg',
    { viewBox: '0 0 24 24', fill: 'currentColor', width: 24, height: 24, ...props },
    React.createElement('path', {
      d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    })
  );

export const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon
};

export const personal = {
  name: 'Adhitya Afif Ardana',
  shortName: 'Afif',

  roles: [
    'AI Engineering',
    'Full-Stack Development',
    'Generative AI & LLMs',
    'Backend & Cloud'
  ],

  description:
    'Informatics Engineering undergraduate focused on AI Engineering and Full-Stack Development, building intelligent, scalable, and user-centered digital products.',

  email: 'adhityaardana73@gmail.com',
  location: 'Yogyakarta, Indonesia',

  heroImage: '/images/profile-hero.jpg',
  cv: '/cv/CV_Adhitya_Afif_Ardana.pdf',

  about: {
    intro:
      'I build technology with purpose.',

    description:
      'I\'m Adhitya Afif, an Informatics Engineering undergraduate at Universitas Sarjanawiyata Tamansiswa, with a technical background in Computer and Network Engineering. I\'m particularly interested in AI Engineering and Full-Stack Development, with a growing focus on building intelligent, scalable, and user-centered digital products.\n\nI enjoy combining software engineering, artificial intelligence, and product thinking to transform ideas and real-world challenges into practical digital solutions. Through hands-on projects, academic research, and continuous learning, I\'m strengthening my skills in modern web development, backend systems, machine learning, Generative AI, and cloud technologies.',

    location: 'Yogyakarta, Indonesia',

    role:
      'Informatics Engineering Undergraduate · Front-End Developer · UI/UX Designer · Machine Learning Enthusiast'
  }
};

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/apiipp-co',
    icon: 'GitHub'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adhityaafifardana/',
    icon: 'LinkedIn'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/apiipp.co?stkn=aGd3ZW1la2lxNTVr&utm_source=qr',
    icon: 'Instagram'
  }
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    id: 'development',
    title: 'Development',
    eyebrow: '01 / BUILD',
    items: [
      {
        name: 'Next.js',
        description: 'React production framework providing server-side rendering, App Router, full-stack API routes, and optimized performance.'
      },
      {
        name: 'React.js',
        description: 'JavaScript library for building modern and interactive user interfaces with a component-based architecture.'
      },
      {
        name: 'TypeScript',
        description: 'Typed superset of JavaScript providing static typing, robust interfaces, and scalable code maintainability.'
      },
      {
        name: 'JavaScript',
        description: 'Programming language used to build dynamic and interactive web experiences across front-end and back-end.'
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapidly building responsive, modern, and pixel-perfect custom user interfaces.'
      },
      {
        name: 'HTML',
        description: 'Standard markup language that structures the content and layout of web pages.'
      },
      {
        name: 'CSS',
        description: 'Stylesheet language used to control the visual presentation and layout of web documents.'
      },
      {
        name: 'Bootstrap',
        description: 'Open-source CSS framework providing pre-built responsive components and a flexible grid system.'
      },
      {
        name: 'Vite',
        description: 'Next-generation front-end build tool offering fast development server and optimized production builds.'
      },
      {
        name: 'Responsive Web Design',
        description: 'Approach to web design that ensures interfaces look and function well across all screen sizes and devices.'
      }
    ]
  },

  {
    id: 'design',
    title: 'Design',
    eyebrow: '02 / CRAFT',
    items: [
      {
        name: 'Figma',
        description: 'Collaborative design tool for UI/UX design, wireframing, prototyping, and design handoff.'
      },
      {
        name: 'UI/UX Design',
        description: 'Practice of designing user interfaces and experiences focused on usability, accessibility, and visual quality.'
      },
      {
        name: 'Wireframing',
        description: 'Low-fidelity visual guide representing the skeletal framework of a digital interface or product.'
      },
      {
        name: 'Prototyping',
        description: 'Creating interactive mockups to simulate and test user flows before final development.'
      },
      {
        name: 'Design Systems',
        description: 'Collection of reusable components and guidelines that ensure visual consistency across products.'
      },
      {
        name: 'Responsive Design',
        description: 'Design methodology ensuring consistent user experience across different screen sizes and devices.'
      }
    ]
  },

  {
    id: 'machine-learning',
    title: 'Machine Learning',
    eyebrow: '03 / INTELLIGENCE',
    items: [
      {
        name: 'Python',
        description: 'High-level programming language widely used in data science, machine learning, and automation.'
      },
      {
        name: 'Machine Learning',
        description: 'Field of AI that enables systems to learn and improve from data without being explicitly programmed.'
      },
      {
        name: 'Natural Language Processing',
        description: 'Branch of AI focused on enabling machines to understand and process human language.'
      },
      {
        name: 'Sentiment Analysis',
        description: 'NLP technique used to classify text data as positive, negative, or neutral sentiment.'
      },
      {
        name: 'Transformers',
        description: 'Deep learning architecture that powers state-of-the-art NLP models using self-attention mechanisms.'
      },
      {
        name: 'IndoBERT',
        description: 'Indonesian pre-trained BERT model optimized for natural language processing tasks in Bahasa Indonesia.'
      },
      {
        name: 'IndoBERTweet',
        description: 'Indonesian BERT variant fine-tuned on Twitter/social media data for informal language NLP tasks.'
      },
      {
        name: 'Scikit-learn',
        description: 'Python machine learning library providing tools for classification, regression, and clustering algorithms.'
      }
    ]
  },

  {
    id: 'tools',
    title: 'Tools & Technologies',
    eyebrow: '04 / SYSTEMS',
    items: [
      {
        name: 'Zustand',
        description: 'Fast, lightweight, and scalable state management solution for modern React applications.'
      },
      {
        name: 'Git',
        description: 'Distributed version control system for tracking changes in source code during software development.'
      },
      {
        name: 'GitHub',
        description: 'Cloud-based platform for hosting Git repositories and enabling collaborative software development.'
      },
      {
        name: 'Prisma ORM',
        description: 'Next-generation Node.js and TypeScript ORM for type-safe database queries, schema migrations, and modeling.'
      },
      {
        name: 'Express.js',
        description: 'Fast, unopinionated, minimalist web framework for Node.js RESTful API architectures.'
      },
      {
        name: 'Supabase',
        description: 'Open-source Firebase alternative providing PostgreSQL database, instant APIs, authentication, and real-time subscriptions.'
      },
      {
        name: 'PostgreSQL',
        description: 'Powerful, open-source object-relational database system with advanced query optimization and Row Level Security.'
      },
      {
        name: 'Arduino',
        description: 'Open-source electronics platform for building digital devices with programmable microcontrollers.'
      },
      {
        name: 'ESP32',
        description: 'Low-cost, low-power microcontroller with integrated Wi-Fi and Bluetooth for IoT applications.'
      },
      {
        name: 'Chart.js',
        description: 'JavaScript library for creating interactive and animated data visualizations in the browser.'
      },
      {
        name: 'Google Colab',
        description: 'Cloud-based Jupyter notebook environment for running Python code with free GPU/TPU access.'
      },
      {
        name: 'VS Code',
        description: 'Lightweight yet powerful source code editor by Microsoft with rich extension ecosystem support.'
      }
    ]
  }
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 'exp-diskominfo-diy-intern',
    role: 'Flutter Front-End & UI/UX Intern',
    company: 'Dinas Komunikasi dan Informatika DIY',
    location: 'Yogyakarta, Indonesia',
    period: 'Apr 2025 — May 2025',
    type: 'Internship',
    logo: '/images/logos/diskominfo-diy.jpeg',
    logoFit: 'cover',
    logoScale: 'scale-[1.08]',
    description:
      'Contributed to the development of the Jogja Istimewa (JogJis) application by designing responsive interfaces, implementing Flutter components, and integrating REST APIs.',
    responsibilities: [
      'Designed user flows and interface screens in Figma.',
      'Developed responsive UI components using Flutter.',
      'Integrated REST APIs into application features.',
      'Collaborated with the team to improve usability and interface consistency.'
    ],
    technologies: ['Flutter', 'Figma', 'REST API'],
    certificate: '/About/Experience/Diskominfo/certificate.pdf',
    images: [
      { src: '/About/Experience/Diskominfo/1.jpg', caption: 'Presenting the Jogja Istimewa Application' },
      { src: '/About/Experience/Diskominfo/2.jpg', caption: 'Developing the Jogja Istimewa Application' },
      { src: '/About/Experience/Diskominfo/3.jpg', caption: 'Diskominfo DIY Internship Team' }
    ]
  },
  {
    id: 'exp-winnicode-msib-intern',
    role: 'Full-Stack Web Developer Intern',
    company: 'PT Winnicode Garuda Indonesia',
    period: 'Jan 2024 — Jun 2024',
    type: 'MSIB Kampus Merdeka',
    logo: '/images/logos/winnicode-garuda.jpeg',
    logoFit: 'contain',
    logoScale: 'scale-[1.08]',
    description:
      'Built a responsive online news platform with 6 core modules, including authentication, search, CRUD content management, and an admin dashboard.',
    responsibilities: [
      'Developed full-stack features using Laravel MVC.',
      'Implemented CRUD functionality with MySQL integration.',
      'Built authentication, search, and admin dashboard features.',
      'Tested, debugged, and managed source code using Git & GitHub.'
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Git'],
    images: []
  },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const education = [
  {
    id: 'edu-ust',
    degree: 'Bachelor of Informatics Engineering',
    institution: 'Universitas Sarjanawiyata Tamansiswa',
    location: 'Yogyakarta, Indonesia',
    period: '2022 — 2027 · Expected Graduation',
    logo: '/images/logos/ust.png',
    description:
      'Informatics Engineering undergraduate building a strong foundation in software engineering, artificial intelligence, machine learning, data analysis, UI/UX design, IoT, and embedded systems. Experienced in turning academic concepts into project-based solutions that combine reliable software, intelligent systems, and user-centered design to solve real-world problems.',
    details: [
      'Currently pursuing a Bachelor of Informatics Engineering with an expected graduation in 2027.',
      'Developed academic projects across web development, intelligent systems, IoT, microcontrollers, sensor integration, and embedded systems—turning technical concepts into functional prototypes.',
      'Applied software engineering, data analysis, machine learning, and user-centered design principles through individual and collaborative projects.',
      'Built hands-on experience in computer networks, system development, research, data processing, and intelligent system implementation.',
      'Currently completing an undergraduate thesis on sentiment analysis using machine learning and Transformer-based NLP models.'
    ],
    images: [
      { src: '/About/Education/UST/campus-aerial.jpg', caption: 'Universitas Sarjanawiyata Tamansiswa — Aerial Campus View' },
      { src: '/About/Education/UST/kkn-team.jpg', caption: 'UST KKN Team — Community Empowerment Program' },
      { src: '/About/Education/UST/campus-event.jpg', caption: 'UST Student Delegation at Campus Event' }
    ]
  },
  {
    id: 'edu-smk',
    degree: 'Computer and Network Engineering',
    institution: 'SMK Muhammadiyah Imogiri',
    location: 'Bantul, Yogyakarta, Indonesia',
    period: '2019 — 2022',
    logo: '/images/logos/smk-muhammadiyah-imogiri.jpeg',
    description:
      'Vocational graduate in Computer and Network Engineering (Teknik Komputer dan Jaringan), with foundational experience in computer systems, networking, hardware, troubleshooting, and IT infrastructure. This technical background became the foundation for further studies in Informatics Engineering and software-based technologies.',
    details: [
      'Built foundational knowledge in computer networking, hardware, operating systems, and network configuration.',
      'Gained hands-on experience in computer installation, troubleshooting, and basic network setup.',
      'Developed practical skills in IT infrastructure and technical problem-solving.',
      'Established a strong technology foundation that led to further studies in Informatics Engineering.'
    ],
    images: [
      { src: '/About/Education/SMK/networking-lab.jpg', caption: 'Computer and Network Engineering Practical Session' },
      { src: '/About/Education/SMK/school-campus.jpg', caption: 'SMK Muhammadiyah Imogiri Campus' }
    ]
  },
];

// ─── TRAINING ────────────────────────────────────────────────────────────────
export const trainings = [
  {
    id: 'training-kada-batch-4',
    program: 'Korean-ASEAN Digital Academy (KADA) — Batch 4',
    title: 'Full-Stack Development & Artificial Intelligence Trainee',
    role: 'Full-Stack Development & Artificial Intelligence Trainee',
    company: 'Ministry of Communication and Digital Affairs RI',
    period: 'Jun 2026 — Aug 2026',
    type: 'Training',
    logo: '/images/logos/asean-digital-academy.png',
    description:
      'Completed an intensive technology program covering full-stack web development, backend systems, DevOps, data analysis, AI & LLM applications, and UI/UX through hands-on learning and a collaborative capstone project.',
    details: [
      'Learned end-to-end full-stack web development from frontend to backend and database integration.',
      'Built backend services using Node.js, Express.js, REST API, and MongoDB.',
      'Studied DevOps, cloud computing, Jenkins, and CI/CD workflows.',
      'Applied data analysis, Generative AI, LLM, and Prompt Engineering in practical learning.',
      'Completed a collaborative capstone project with a real-world development workflow.'
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'REST API',
      'MongoDB',
      'Git',
      'Jenkins',
      'CI/CD',
      'NumPy',
      'pandas',
      'Generative AI',
      'LLM',
      'Prompt Engineering',
      'UI/UX'
    ],
    certificate: '/About/Training/KADA/certificate.pdf',
    images: [
      { src: '/About/Training/KADA/1.jpg', caption: 'Best Students Award — KADA Batch 4' },
      { src: '/About/Training/KADA/2.jpg', caption: 'KADA Batch 4 Closing Ceremony' },
      { src: '/About/Training/KADA/3.jpg', caption: 'EduTrack Project Demo Day' },
      { src: '/About/Training/KADA/4.jpg', caption: 'Closing Ceremony with the KADA Batch 4 Team' },
      { src: '/About/Training/KADA/5.jpg', caption: 'KADA Batch 4 Participant Activities' },
      { src: '/About/Training/KADA/6.jpg', caption: 'KADA Industry Connect' },
      { src: '/About/Training/KADA/7.jpg', caption: 'KADA Batch 4 Project Demo Day' }
    ]
  },
  {
    id: 'training-blkpp-diy',
    program: 'BLKPP Special Region of Yogyakarta',
    title: 'Data Analyst & Data Science Trainee',
    role: 'Data Analyst & Data Science Trainee',
    company: 'BLKPP Special Region of Yogyakarta',
    period: 'May 2026 — Jun 2026',
    type: 'Competency-Based Training (PBK/CBT)',
    description:
      'Completed competency-based training in Data Analyst and Data Science, covering data processing, analysis, visualization, machine learning fundamentals, and data-driven problem solving.',
    details: [
      'Performed data cleaning, exploratory data analysis, and basic statistical analysis.',
      'Applied data visualization techniques to communicate insights effectively.',
      'Learned fundamental concepts of Machine Learning and data interpretation.',
      'Practiced data-driven problem solving while applying data ethics and security principles.'
    ],
    technologies: [
      'Data Cleaning',
      'Data Analysis',
      'Statistics',
      'EDA',
      'Data Visualization',
      'Machine Learning',
      'Data Interpretation',
      'Data Communication',
      'Data-Driven Problem Solving',
      'Data Ethics',
      'Data Security'
    ],
    arsenalLabel: 'Core Skills & Arsenal',
    certificate: '/About/Training/BLKPP/certificate.pdf',
    images: [
      { src: '/About/Training/BLKPP/1.jpg', caption: 'BLKPP Data Analyst and Data Science Training Class' },
      { src: '/About/Training/BLKPP/2.jpg', caption: 'BLKPP PBK/CBT Training Participants' }
    ]
  }
];

// ─── ORGANIZATIONS ────────────────────────────────────────────────────────────
export const organizations = [
  {
    id: 'org-impsi-ust-kominfo',
    role: 'Communications & Information Division Member',
    organization: 'IMPSI - UST (Informatics Study Program Student Association)',
    location: 'Universitas Sarjanawiyata Tamansiswa (UST)',
    period: 'Jan 2022 — Jan 2023',
    logo: '/images/logos/ust.png',
    description:
      'Contributed to IMPSI–UST communications and information programs by managing organizational media, producing digital content, designing information materials, and documenting activities. Supported social media management, event publications, and timely updates for Informatics students while strengthening communication, visual design, and teamwork skills.',
    responsibilities: [],
    images: []
  }
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
export const certifications = [
  {
    id: 'kada-batch-4-certificate',
    name: 'Korea-ASEAN Digital Academy — Certificate of Completion',
    issuer: 'Korea-ASEAN Digital Academy · Elice Inc.',
    date: '20 Aug 2026',
    credentialId: 'KADA-B4-2026-01',
    credentialUrl: '',
    certificate: '/certificates/kada-batch-4/kada-batch-4-certificate.pdf',
    description:
      'Completed 250 hours of intensive training in the Korea-ASEAN Digital Academy Phase 4 program as part of Batch 4.',
    images: [
      {
        src: '/certificates/kada-batch-4/kada-certificate-cover.webp',
        caption: 'Korea-ASEAN Digital Academy — Official Certificate of Completion'
      },
      {
        src: '/certificates/kada-batch-4/kada-certificate-full.webp',
        caption: 'Official Certificate — Adhitya Afif Ardana, Phase 4 Batch 4'
      },
      {
        src: '/certificates/kada-batch-4/kada-certificate-detail.webp',
        caption: 'Credential Details — 250 Training Hours and Batch 4 Completion'
      }
    ]
  },
  {
    id: 'blkpp-data-analyst-certificate',
    name: 'Competency-Based Training — Data Analyst & Data Science',
    issuer: 'BLKPP DIY · Disnakertrans DIY',
    date: '23 Jun 2026',
    credentialId: '563/0633/2026',
    credentialUrl: '',
    certificate: '/certificates/blkpp-data-analyst/blkpp-data-analyst-certificate.pdf',
    description:
      'Passed competency-based vocational training in Data Analyst and Data Science, covering nine verified units from data cleaning through machine learning and data ethics.',
    images: [
      {
        src: '/certificates/blkpp-data-analyst/blkpp-data-analyst-cover.webp',
        caption: 'Data Analyst & Data Science — Official Competency Certificate'
      },
      {
        src: '/certificates/blkpp-data-analyst/blkpp-data-analyst-certificate.webp',
        caption: 'Official Certificate — Competency-Based Training, BLKPP DIY'
      },
      {
        src: '/certificates/blkpp-data-analyst/blkpp-data-analyst-competencies.webp',
        caption: 'Nine Verified Competency Units — Data Analyst & Data Science'
      }
    ]
  },
  {
    id: 'uiux-first-place-imps',
    name: '1st Place — UI/UX Design Competition',
    issuer: 'IMPS-Informatika · SYNTAX 2025',
    date: '06 Jun 2025',
    credentialUrl: '',
    certificate: '/certificates/uiux-first-place-imps/uiux-first-place-certificate.webp',
    description:
      'Awarded 1st Place in the UI/UX Design Competition organized by IMPS-Informatika at SYNTAX 2025.',
    images: [
      {
        src: '/certificates/uiux-first-place-imps/uiux-first-place-cover.webp',
        caption: '1st Place — UI/UX Design Competition, SYNTAX 2025'
      },
      {
        src: '/certificates/uiux-first-place-imps/uiux-first-place-award-photo.webp',
        caption: 'Award Ceremony — Trophy and Certificate Presentation'
      },
      {
        src: '/certificates/uiux-first-place-imps/uiux-first-place-certificate.webp',
        caption: 'Official 1st Place UI/UX Competition Certificate'
      }
    ]
  },
  {
    id: 'toefl-simulation-brighten-english',
    name: 'TOEFL Simulation Test — Score 640',
    issuer: 'Brighten English · Pare Kediri',
    date: '26 Jan 2026',
    credentialId: 'BM0058',
    credentialUrl: '',
    certificate: '/certificates/toefl-brighten-english/toefl-prediction-certificate.pdf',
    description:
      'Achieved a score of 640 on the TOEFL Simulation Test administered by Brighten English Pare Kediri.',
    images: [
      {
        src: '/certificates/toefl-brighten-english/toefl-score-640-cover.webp',
        caption: 'TOEFL Simulation Test — Score 640'
      },
      {
        src: '/certificates/toefl-brighten-english/toefl-prediction-certificate.webp',
        caption: 'Official TOEFL Simulation Test Certificate — Brighten English'
      },
      {
        src: '/certificates/toefl-brighten-english/toefl-score-details.webp',
        caption: 'Score Details — TOEFL 640, Exam Number BM0058'
      }
    ]
  },
  {
    id: 'associate-data-scientist-python-dts',
    name: 'Associate Data Scientist + Python — National Training',
    issuer: 'Digital Talent Academy · Komdigi',
    date: '30 Mar 2026',
    credentialId: '21211993840-2125',
    credentialUrl: '',
    certificate:
      '/certificates/associate-data-scientist-python/associate-data-scientist-python-certificate.pdf',
    description:
      'Completed 31 hours of national data science training covering Python, data preparation, web scraping, exploratory analysis, and machine learning fundamentals.',
    details: [
      'Completed the Associate Data Scientist + Python — National program under Digital Talent Academy, Digital Talent Scholarship 2026.',
      'Studied Python, mathematical practice, Pandas, NumPy, Scikit-learn, data scraping, data exploration, data cleansing, and data annotation.',
      'Certificate issued by Pusat Pengembangan Talenta Digital and electronically signed by the Head of BPSDM Komdigi.'
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Data Scraping',
      'Data Cleansing',
      'Data Annotation'
    ],
    images: [
      {
        src: '/certificates/associate-data-scientist-python/associate-data-scientist-python-cover.webp',
        caption: 'Associate Data Scientist + Python — National Training'
      },
      {
        src: '/certificates/associate-data-scientist-python/associate-data-scientist-python-certificate.webp',
        caption: 'Official Training Certificate — Digital Talent Academy 2026'
      },
      {
        src: '/certificates/associate-data-scientist-python/associate-data-scientist-python-curriculum.webp',
        caption: 'Verified Curriculum — 31 Training Hours Across Nine Modules'
      }
    ]
  },
  {
    id: 'google-cybersecurity-dts',
    name: 'Google Cybersecurity — National Training',
    issuer: 'Digital Talent Academy · Google · Komdigi',
    date: '30 Mar 2026',
    credentialId: '21212162840-118',
    credentialUrl: '',
    certificate:
      '/certificates/google-cybersecurity-dts/google-cybersecurity-certificate.pdf',
    description:
      'Completed 78 hours of national cybersecurity training focused on incident detection and response, Python security automation, career preparation, and AI-assisted job search.',
    details: [
      'Completed the Final Courses and Certificate Cybersecurity — Google — National program under Digital Talent Academy, Digital Talent Scholarship 2026.',
      'Completed 24 hours of detection and response training and 32 hours of cybersecurity task automation with Python.',
      'Completed additional career-readiness and AI-assisted job-search modules, for a verified total of 78 training hours.'
    ],
    technologies: [
      'Cybersecurity',
      'Python',
      'Incident Response',
      'Security Automation',
      'Threat Detection',
      'Artificial Intelligence'
    ],
    images: [
      {
        src: '/certificates/google-cybersecurity-dts/google-cybersecurity-cover.webp',
        caption: 'Google Cybersecurity — National Training'
      },
      {
        src: '/certificates/google-cybersecurity-dts/google-cybersecurity-certificate.webp',
        caption: 'Official Cybersecurity Training Certificate — Digital Talent Academy 2026'
      },
      {
        src: '/certificates/google-cybersecurity-dts/google-cybersecurity-curriculum.webp',
        caption: 'Verified Curriculum — 78 Training Hours Across Four Modules'
      }
    ]
  },
  {
    id: 'data-science-micro-skill-dts',
    name: 'Data Science Fundamentals — Micro Skill',
    issuer: 'Digital Talent Scholarship · Komdigi',
    date: '26 Feb 2026',
    credentialId: '2299818850-18855',
    credentialUrl: '',
    certificate:
      '/certificates/data-science-micro-skill-dts/data-science-certificate.pdf',
    description:
      'Completed a focused introduction to data science covering core concepts, professional roles, foundational skills, sector applications, and future opportunities and challenges.',
    details: [
      'Completed the Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor Micro Skill under Digital Talent Scholarship 2026.',
      'Studied data science concepts, the responsibilities of data scientists, essential skills, practical applications, and the distinction between data science and data analysis.',
      'Completed seven introductory modules delivered by Pusat Pengembangan Literasi Digital for a verified total of one training hour.'
    ],
    technologies: [
      'Data Science',
      'Data Analysis',
      'Data Literacy',
      'Analytics',
      'Problem Solving',
      'Digital Talent Scholarship'
    ],
    images: [
      {
        src: '/certificates/data-science-micro-skill-dts/data-science-fundamentals-cover.webp',
        caption: 'Data Science Fundamentals — Micro Skill'
      },
      {
        src: '/certificates/data-science-micro-skill-dts/data-science-certificate.webp',
        caption: 'Official Micro Skill Certificate — Digital Talent Scholarship 2026'
      },
      {
        src: '/certificates/data-science-micro-skill-dts/data-science-curriculum.webp',
        caption: 'Verified Curriculum — Seven Data Science Modules'
      }
    ]
  },
  {
    id: 'dicoding-genai-azure',
    name: 'Generative AI Applications with Microsoft Azure',
    issuer: 'Dicoding Indonesia · Microsoft',
    date: '10 Feb 2026',
    credentialId: 'JLX1V1KN5Z72',
    credentialUrl: 'https://www.dicoding.com/certificates/JLX1V1KN5Z72',
    certificate:
      '/certificates/dicoding-genai-azure/dicoding-genai-azure-certificate.pdf',
    description:
      'Completed an eight-hour applied Generative AI course covering Azure AI Foundry, model deployment, Prompt Flow, RAG, fine-tuning, Responsible AI, and performance evaluation.',
    details: [
      'Earned Dicoding competency certification for completing Membangun Aplikasi Gen AI dengan Microsoft Azure, valid through 10 February 2029.',
      'Built practical knowledge of Azure AI Foundry model selection and deployment, SDK-based chat applications, Prompt Flow, and retrieval-augmented generation with Azure AI Search.',
      'Studied language-model fine-tuning, Responsible Generative AI risk mitigation, and AI-based application evaluation across eight assessed modules.'
    ],
    technologies: [
      'Microsoft Azure',
      'Generative AI',
      'Azure AI Foundry',
      'RAG',
      'Prompt Flow',
      'Large Language Models',
      'Fine-Tuning',
      'Responsible AI'
    ],
    images: [
      {
        src: '/certificates/dicoding-genai-azure/dicoding-genai-azure-cover.webp',
        caption: 'Generative AI Applications with Microsoft Azure'
      },
      {
        src: '/certificates/dicoding-genai-azure/dicoding-genai-azure-certificate.webp',
        caption: 'Official Dicoding Competency Certificate — Valid Through February 2029'
      },
      {
        src: '/certificates/dicoding-genai-azure/dicoding-genai-azure-curriculum-1.webp',
        caption: 'Azure AI Foundry Curriculum — Planning and Model Deployment'
      },
      {
        src: '/certificates/dicoding-genai-azure/dicoding-genai-azure-curriculum-2.webp',
        caption: 'Applied Generative AI Curriculum — SDK, RAG, Fine-Tuning, and Evaluation'
      }
    ]
  },
  {
    id: 'dicoding-data-science-fabric',
    name: 'Data Science with Microsoft Fabric',
    issuer: 'Dicoding Indonesia · Microsoft',
    date: '06 Feb 2026',
    credentialId: 'JLX15NWQ5Z72',
    credentialUrl: 'https://www.dicoding.com/certificates/JLX15NWQ5Z72',
    certificate:
      '/certificates/dicoding-data-science-fabric/dicoding-data-science-fabric-certificate.pdf',
    description:
      'Completed a six-hour applied data science course covering end-to-end analytics, notebook-based exploration, data preprocessing, MLflow experiment tracking, model deployment, and batch prediction in Microsoft Fabric.',
    details: [
      'Earned Dicoding competency certification for completing Belajar Penerapan Data Science dengan Microsoft Fabric, valid through 6 February 2029.',
      'Applied Microsoft Fabric notebooks and Data Wrangler to explore, clean, transform, and prepare organizational data for machine learning workflows.',
      'Studied MLflow-based experiment tracking, model management, deployment, and batch prediction across six assessed end-to-end modules.'
    ],
    technologies: [
      'Microsoft Fabric',
      'Data Science',
      'Machine Learning',
      'Data Wrangler',
      'MLflow',
      'Data Preprocessing',
      'Model Deployment',
      'Batch Prediction'
    ],
    images: [
      {
        src: '/certificates/dicoding-data-science-fabric/dicoding-data-science-fabric-cover.webp',
        caption: 'Data Science with Microsoft Fabric — End-to-End Workflow'
      },
      {
        src: '/certificates/dicoding-data-science-fabric/dicoding-data-science-fabric-certificate.webp',
        caption: 'Official Dicoding Competency Certificate — Valid Through February 2029'
      },
      {
        src: '/certificates/dicoding-data-science-fabric/dicoding-data-science-fabric-curriculum-1.webp',
        caption: 'Microsoft Fabric Curriculum — Analytics, Notebooks, and Data Wrangler'
      },
      {
        src: '/certificates/dicoding-data-science-fabric/dicoding-data-science-fabric-curriculum-2.webp',
        caption: 'Machine Learning Curriculum — MLflow, Deployment, and Batch Prediction'
      }
    ]
  },
  {
    id: 'dicoding-ai-fundamentals',
    name: 'AI Fundamentals',
    issuer: 'Dicoding Indonesia · Google Cloud Partner',
    date: '15 Feb 2026',
    credentialId: '6RPN7KOQ8X2M',
    credentialUrl: 'https://www.dicoding.com/certificates/6RPN7KOQ8X2M',
    certificate:
      '/certificates/dicoding-ai-fundamentals/dicoding-ai-fundamentals-certificate.pdf',
    description:
      'Completed a 10-hour foundational AI course covering core artificial intelligence concepts, data for AI, introductory machine learning, deep learning, and practical applications.',
    details: [
      'Earned Dicoding competency certification for completing Belajar Dasar AI, valid through 15 February 2029.',
      'Built foundational knowledge of artificial intelligence concepts and the role of data in developing AI systems.',
      'Studied introductory machine learning and deep learning concepts, representative applications, and completed the final course assessment across four learning modules.'
    ],
    technologies: [
      'Artificial Intelligence',
      'Data for AI',
      'Machine Learning',
      'Deep Learning',
      'AI Fundamentals',
      'Model Concepts',
      'Data Literacy',
      'Dicoding Academy'
    ],
    images: [
      {
        src: '/certificates/dicoding-ai-fundamentals/dicoding-ai-fundamentals-cover.webp',
        caption: 'AI Fundamentals — From Data to Deep Learning'
      },
      {
        src: '/certificates/dicoding-ai-fundamentals/dicoding-ai-fundamentals-certificate.webp',
        caption: 'Official Dicoding Competency Certificate — Valid Through February 2029'
      },
      {
        src: '/certificates/dicoding-ai-fundamentals/dicoding-ai-fundamentals-curriculum.webp',
        caption: 'AI Foundations Curriculum — Data, Machine Learning, and Deep Learning'
      }
    ]
  },
  {
    id: 'dicoding-financial-literacy',
    name: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia · DBS Foundation',
    date: '29 Jan 2026',
    credentialId: '1OP8JQNVLPQK',
    credentialUrl: 'https://www.dicoding.com/certificates/1OP8JQNVLPQK',
    certificate:
      '/certificates/dicoding-financial-literacy/dicoding-financial-literacy-certificate.pdf',
    description:
      'Completed a six-hour financial literacy course covering everyday money management, long-term financial planning, investing fundamentals, and responsible borrowing strategies.',
    details: [
      'Earned Dicoding competency certification for completing Introduction to Financial Literacy as part of Coding Camp powered by DBS Foundation 2026, valid through 29 January 2029.',
      'Developed practical knowledge for managing everyday finances, making informed financial decisions, and planning toward long-term goals.',
      'Studied investment fundamentals and smart loan management, then completed a final assessment across three core learning modules.'
    ],
    technologies: [
      'Financial Literacy',
      'Personal Finance',
      'Financial Planning',
      'Investment Fundamentals',
      'Loan Management',
      'Smart Borrowing',
      'Financial Decision-Making',
      'Long-Term Planning'
    ],
    images: [
      {
        src: '/certificates/dicoding-financial-literacy/dicoding-financial-literacy-cover.webp',
        caption: 'Financial Literacy Foundations — Plan, Invest, and Borrow with Purpose'
      },
      {
        src: '/certificates/dicoding-financial-literacy/dicoding-financial-literacy-certificate.webp',
        caption: 'Official Dicoding Competency Certificate — Valid Through January 2029'
      },
      {
        src: '/certificates/dicoding-financial-literacy/dicoding-financial-literacy-curriculum.webp',
        caption: 'Financial Literacy Curriculum — Daily Finance, Investing, and Smart Borrowing'
      },
      {
        src: '/certificates/dicoding-financial-literacy/dicoding-financial-literacy-duration.webp',
        caption: 'Verified Learning Record — Six Hours of Structured Learning'
      }
    ]
  },
  {
    id: 'cisco-data-science-python',
    name: 'Data Science Essentials with Python',
    issuer: 'Cisco Networking Academy',
    date: '31 Mar 2026',
    credentialId: '10ad8278-31c4-4d07-90a5-ab27694a14c4',
    credentialUrl: '',
    certificate:
      '/certificates/cisco-data-science-python/cisco-data-science-python-certificate.pdf',
    description:
      'Successfully completed the Data Science Essentials with Python course offered through the Cisco Networking Academy program.',
    details: [
      'Earned a Cisco Networking Academy certificate for successfully completing Data Science Essentials with Python on 31 March 2026.',
      'The credential formally recognizes completion of foundational data science learning delivered through Python.',
      'Certificate authenticity is documented by the unique credential ID 10ad8278-31c4-4d07-90a5-ab27694a14c4.'
    ],
    technologies: [
      'Python',
      'Data Science',
      'Data Analytics',
      'Data Exploration',
      'Analytical Thinking',
      'Cisco Networking Academy'
    ],
    images: [
      {
        src: '/certificates/cisco-data-science-python/cisco-data-science-python-cover.webp',
        caption: 'Data Science Essentials with Python — Cisco Networking Academy'
      },
      {
        src: '/certificates/cisco-data-science-python/cisco-data-science-python-certificate.webp',
        caption: 'Official Cisco Networking Academy Certificate — 31 March 2026'
      },
      {
        src: '/certificates/cisco-data-science-python/cisco-data-science-python-record.webp',
        caption: 'Verified Credential Record — Completion Date and Certificate ID'
      }
    ]
  },
  {
    id: 'ibm-skillsbuild-ai-agent',
    name: 'Intelligent by Design: Build an AI Agent',
    issuer: 'IBM SkillsBuild',
    date: '04 Aug 2026',
    credentialId: 'ALM-COURSE_3946359',
    credentialUrl: '',
    certificate:
      '/certificates/ibm-skillsbuild-ai-agent/ibm-skillsbuild-ai-agent-certificate.pdf',
    description:
      'Completed a three-hour, 30-minute IBM SkillsBuild course focused on the design and development of an artificial intelligence agent.',
    details: [
      'Earned an IBM SkillsBuild completion certificate for Intelligent by Design: Build an AI Agent on 4 August 2026.',
      'Completed three hours and 30 minutes of structured learning centered on building an AI agent.',
      'Completion is documented under course code ALM-COURSE_3946359 in the Adobe Learning Manager system of record.'
    ],
    technologies: [
      'AI Agents',
      'Artificial Intelligence',
      'Agent Design',
      'Agent Development',
      'IBM SkillsBuild',
      'Adobe Learning Manager'
    ],
    images: [
      {
        src: '/certificates/ibm-skillsbuild-ai-agent/ibm-skillsbuild-ai-agent-cover.webp',
        caption: 'Intelligent by Design — Build an AI Agent'
      },
      {
        src: '/certificates/ibm-skillsbuild-ai-agent/ibm-skillsbuild-ai-agent-certificate.webp',
        caption: 'Official IBM SkillsBuild Completion Certificate — 4 August 2026'
      },
      {
        src: '/certificates/ibm-skillsbuild-ai-agent/ibm-skillsbuild-ai-agent-record.webp',
        caption: 'Verified Learning Record — Duration, Date, and Course Code'
      }
    ]
  },
  {
    id: 'ibm-skillsbuild-granite-classification',
    name: 'Classifying Data Using IBM Granite',
    issuer: 'IBM SkillsBuild',
    date: '04 Aug 2026',
    credentialId: 'ALM-COURSE_4058910',
    credentialUrl: '',
    certificate:
      '/certificates/ibm-skillsbuild-granite-classification/ibm-skillsbuild-granite-classification-certificate.pdf',
    description:
      'Completed a one-hour, 30-minute IBM SkillsBuild course focused on classifying data using IBM Granite.',
    details: [
      'Earned an IBM SkillsBuild completion certificate for Classifying Data Using IBM Granite on 4 August 2026.',
      'Completed one hour and 30 minutes of structured learning focused on applying IBM Granite to data-classification tasks.',
      'Completion is documented under course code ALM-COURSE_4058910 in the Adobe Learning Manager system of record.'
    ],
    technologies: [
      'IBM Granite',
      'Data Classification',
      'Artificial Intelligence',
      'Foundation Models',
      'IBM SkillsBuild',
      'Adobe Learning Manager'
    ],
    images: [
      {
        src: '/certificates/ibm-skillsbuild-granite-classification/ibm-skillsbuild-granite-classification-cover.webp',
        caption: 'Classifying Data Using IBM Granite - IBM SkillsBuild'
      },
      {
        src: '/certificates/ibm-skillsbuild-granite-classification/ibm-skillsbuild-granite-classification-certificate.webp',
        caption: 'Official IBM SkillsBuild Completion Certificate - 4 August 2026'
      },
      {
        src: '/certificates/ibm-skillsbuild-granite-classification/ibm-skillsbuild-granite-classification-record.webp',
        caption: 'Verified Learning Record - Duration, Date, and Course Code'
      }
    ]
  },
  {
    id: 'ibm-skillsbuild-bob-troubleshooting',
    name: 'Lab: Troubleshoot Your Code Using IBM Bob',
    issuer: 'IBM SkillsBuild',
    date: '04 Aug 2026',
    credentialId: 'ALM-COURSE_4071307',
    credentialUrl: '',
    certificate:
      '/certificates/ibm-skillsbuild-bob-troubleshooting/ibm-skillsbuild-bob-troubleshooting-certificate.pdf',
    description:
      'Completed a 30-minute IBM SkillsBuild lab focused on troubleshooting code using IBM Bob.',
    details: [
      'Earned an IBM SkillsBuild completion certificate for Lab: Troubleshoot Your Code Using IBM Bob on 4 August 2026.',
      'Completed 30 minutes of structured, hands-on learning focused on troubleshooting code with IBM Bob.',
      'Completion is documented under course code ALM-COURSE_4071307 in the Adobe Learning Manager system of record.'
    ],
    technologies: [
      'IBM Bob',
      'Code Troubleshooting',
      'Debugging',
      'Software Development',
      'IBM SkillsBuild',
      'Adobe Learning Manager'
    ],
    images: [
      {
        src: '/certificates/ibm-skillsbuild-bob-troubleshooting/ibm-skillsbuild-bob-troubleshooting-cover.webp',
        caption: 'Troubleshoot Your Code Using IBM Bob - IBM SkillsBuild Lab'
      },
      {
        src: '/certificates/ibm-skillsbuild-bob-troubleshooting/ibm-skillsbuild-bob-troubleshooting-certificate.webp',
        caption: 'Official IBM SkillsBuild Completion Certificate - 4 August 2026'
      },
      {
        src: '/certificates/ibm-skillsbuild-bob-troubleshooting/ibm-skillsbuild-bob-troubleshooting-record.webp',
        caption: 'Verified Learning Record - Duration, Date, and Course Code'
      }
    ]
  }
];

// ─── PROJECT CATEGORIES ───────────────────────────────────────────────────────
export const projectCategories = [
  'All',
  'UI/UX Design',
  'Web',
  'Machine Learning',
  'IoT',
  'Other'
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    slug: 'yogyakarta-skate-3d-customizer',
    title: 'Yogyakarta Skate — 3D Skateboard Customizer',
    category: 'Web',
    projectType: 'Interactive 3D Web · E-Commerce',
    year: '2026',

    description:
      'An interactive 3D skateboard customizer for building, saving, and sharing personalized setups through a responsive e-commerce experience.',

    overview:
      'Yogyakarta Skate combines a real-time 3D builder with a modern storefront, allowing users to customize components, explore products, and keep or share complete skateboard setups.',

    problem:
      'Static product photos make custom skateboard combinations difficult to visualize and compare before purchase.',

    solution:
      'Built a responsive WebGL storefront with a real-time 3D configurator, product discovery, saved builds, sharing, and a graceful fallback when 3D rendering is unavailable.',

    features: [
      'Real-Time 3D Builder — Customize decks, wheels, trucks, and bolts with instant visual feedback.',
      'Complete Storefront — Explore products using search, filters, sorting, comparison, wishlist, cart, and demo checkout.',
      'Saved & Shareable Builds — Preserve custom setups with localStorage and IndexedDB, then share them through the Web Share API.',
      'PWA-Ready Experience — Supports installation, offline fallback, and seamless application updates.',
      'Responsive & Accessible — Optimized for desktop, tablet, and mobile with reduced-motion and WebGL fallback support.'
    ],

    role: 'Full-Stack Developer & 3D Web Experience Designer',

    image: '/projects/yogyakarta-skate/cover-v2.webp',
    images: [
      {
        src: '/projects/yogyakarta-skate/cover-v2.webp',
        caption: 'Yogyakarta Skate — Premium 3D Customizer Experience'
      },
      {
        src: '/projects/yogyakarta-skate/home-live.webp',
        caption: 'Immersive Home Experience & Build Your Board Entry Point'
      },
      {
        src: '/projects/yogyakarta-skate/configurator-live.webp',
        caption: 'Real-Time 3D Builder — Deck, Wheels, Trucks & Bolts'
      },
      {
        src: '/projects/yogyakarta-skate/configurator-custom-live.webp',
        caption: 'Customized Setup — Pink Swirl Deck, Yellow Wheels & Gold Trucks'
      },
      {
        src: '/projects/yogyakarta-skate/products-live.webp',
        caption: 'Product Discovery — Latest Drop, Ratings & Pricing'
      },
      {
        src: '/projects/yogyakarta-skate/configurator-mobile-live.webp',
        caption: 'Responsive Mobile 3D Configurator'
      }
    ],

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Three.js',
      'React Three Fiber',
      'Drei',
      'GSAP',
      'WebGL',
      'PWA',
      'IndexedDB',
      'localStorage'
    ],

    links: {
      github: 'https://github.com/apiipp-co/Yogyakarta-Skate-3D-Skateboard-Customizer',
      demo: 'https://yogyakarta-skate-3-d-skateboard-cus-chi.vercel.app'
    },

    featured: true
  },

  {
    id: 2,
    slug: 'railcast-indonesia-railway-forecasting',
    title: 'RailCast Indonesia — Railway Passenger Forecasting',
    category: 'Machine Learning',
    projectType: 'Machine Learning · Time Series Forecasting',
    year: '2026',

    description:
      'An interactive forecasting platform that turns Indonesian railway data into passenger-demand projections, model comparisons, and planning insights.',

    overview:
      'RailCast transforms historical railway passenger data into trend analysis, model evaluation, and 12-month demand forecasts through a clear interactive dashboard.',

    problem:
      'Passenger demand shifts with long-term trends, seasonality, and disruptions, making manual planning less reliable.',

    solution:
      'Built an end-to-end forecasting workflow covering data preparation, exploratory analysis, model benchmarking, uncertainty intervals, and interactive dashboard reporting.',

    features: [
      'Historical Trend Analysis — Reveals long-term growth, seasonal behavior, disruptions, and recovery patterns.',
      '12-Month Forecasting — Projects future passenger demand with clear confidence intervals.',
      'Model Benchmarking — Compares SARIMA, Holt-Winters, Prophet, and baseline models using standard error metrics.',
      'Interactive Dashboard — Brings demand, forecasts, seasonality, model evidence, and insights into one Streamlit experience.',
      'Decision-Ready Insights — Translates complex time-series results into clear evidence for mobility planning.'
    ],

    role: 'Data Scientist & Machine Learning Developer',

    image: '/projects/railcast/cover-v2.webp',
    images: [
      {
        src: '/projects/railcast/cover-v2.webp',
        caption: 'RailCast Indonesia — Railway Forecasting & Mobility Intelligence'
      },
      {
        src: '/projects/railcast/dashboard-overview.webp',
        caption: 'Executive Dashboard — Demand, Outlook & Model Evidence'
      },
      {
        src: '/projects/railcast/future-forecast.webp',
        caption: '12-Month Passenger Forecast with 95% Confidence Interval'
      },
      {
        src: '/projects/railcast/model-comparison.webp',
        caption: 'Model Benchmarking — Test RMSE Comparison'
      },
      {
        src: '/projects/railcast/decomposition.webp',
        caption: 'STL Decomposition — Trend, Seasonality & Residuals'
      },
      {
        src: '/projects/railcast/historical-timeseries.webp',
        caption: 'National Railway Passengers — Monthly History & Disruption Window'
      }
    ],

    technologies: [
      'Python',
      'pandas',
      'NumPy',
      'Time Series',
      'Machine Learning',
      'Statsmodels',
      'Scikit-learn',
      'Prophet',
      'Plotly',
      'Streamlit',
      'BPS Data',
      'Supabase'
    ],

    links: {
      github: 'https://github.com/apiipp-co/RailCast-Indonesia-Railway-Passenger-Forecasting-with-Time-Series',
      demo: ''
    },

    featured: true
  },

  {
    id: 3,
    slug: 'ktp-vision-analytics',
    title: 'KTP Vision Analytics',
    category: 'Machine Learning',
    projectType: 'AI Vision · OCR · Document Intelligence',
    year: '2026',

    description:
      'A privacy-aware document intelligence system that converts Indonesian KTP images into validated, structured, analytics-ready data.',

    overview:
      'KTP Vision Analytics combines document classification, structured OCR, field normalization, deterministic validation, and operational analytics in one auditable workflow.',

    problem:
      'Manual KTP transcription is slow and error-prone, while sensitive identity data demands consistent validation and careful privacy controls.',

    solution:
      'Built an end-to-end pipeline that classifies document images, extracts 18 structured fields, masks sensitive data, validates results with transparent rules, and surfaces quality evidence through an interactive dashboard.',

    features: [
      'Classification-Gated OCR — Verifies KTP images before running structured extraction, reducing irrelevant AI calls.',
      '18-Field Structured Output — Converts visible document evidence into normalized, reusable JSON while preserving missing values as null.',
      'Deterministic Validation — Checks NIK structure, encoded birth data, field consistency, and expiry rules independently from the AI model.',
      'Privacy by Design — Processes uploads in memory, masks PII on public surfaces, and avoids storing original image bytes.',
      'Evidence-Based Evaluation — Validates 20 synthetic fixtures with model metrics, data-quality checks, error analysis, and traceable experiment metadata.'
    ],

    role: 'AI/ML Developer & Document Intelligence Engineer',

    image: '/projects/ktp-vision/cover-v2.webp',
    images: [
      {
        src: '/projects/ktp-vision/cover-v2.webp',
        caption: 'KTP Vision Analytics — Secure OCR, Validation & Document Intelligence'
      },
      {
        src: '/projects/ktp-vision/home-live.webp',
        caption: 'Operational Overview — Identity Data, Made Reliable'
      },
      {
        src: '/projects/ktp-vision/upload-live.webp',
        caption: 'Secure Upload — Consent, In-Memory Processing & AI Disclosure'
      },
      {
        src: '/projects/ktp-vision/data-quality-live.webp',
        caption: 'Dataset Quality — 20 Synthetic Evaluation Images, 0 Integrity Issues'
      },
      {
        src: '/projects/ktp-vision/model-evaluation-live.webp',
        caption: 'Model Evaluation — Traceable Experiments & OCR Quality Evidence'
      }
    ],

    technologies: [
      'Python',
      'AI Vision',
      'OCR',
      'Vision LLM',
      'OpenRouter',
      'Prompt Engineering',
      'JSON',
      'Data Validation',
      'Data Processing',
      'Streamlit',
      'SQL',
      'Database',
      'Data Analytics'
    ],

    links: {
      github: 'https://github.com/apiipp-co/KTP-Vision-Analytics',
      demo: 'https://ktp-vision-analytics.streamlit.app/'
    },

    featured: true
  },

  {
    id: 4,
    slug: 'edutrack-school-management-system',
    title: 'EduTrack — School Management System',
    category: 'Web',
    projectType: 'Web Application · Team Capstone Project',
    year: '2026',

    description:
      'A role-based academic management platform that brings attendance, grading, report cards, and school administration into one structured experience.',

    overview:
      'Developed as a KADA Batch 4 capstone, EduTrack translates end-to-end academic workflows into dedicated interfaces for teachers, students, and superadmins.',

    problem:
      'Attendance, grades, report cards, and account administration are often scattered across spreadsheets and disconnected tools, slowing daily academic operations.',

    solution:
      'Built a responsive React frontend with protected role-based navigation and focused workflows for attendance, weighted grading, report generation, student progress, and school administration.',

    features: [
      'Three Role Experiences — Provides dedicated dashboards, navigation, and permissions for teachers, students, and superadmins.',
      'Protected Academic Access — Implements validated login, protected routes, role-based redirects, logout, and dedicated 403/404 states.',
      'Attendance & Weighted Grading — Supports class attendance, assessment components, configurable weights, and automatic final-score calculation.',
      'Reports & Student Progress — Enables structured report-card generation, detailed subject results, attendance summaries, and downloadable reports.',
      'Integration-Ready Frontend — Uses reusable responsive components and React Router architecture prepared for backend API integration.'
    ],

    role: 'Front-End Developer',
    roleDescription:
      'Implemented responsive interfaces, protected navigation, role-specific flows, and core attendance, grading, and reporting experiences within the KADA Batch 4 capstone team.',

    image: '/projects/edutrack/cover-v2.webp',
    images: [
      {
        src: '/projects/edutrack/cover-v2.webp',
        caption: 'EduTrack — Role-Based Academic Management Experience'
      },
      {
        src: '/projects/edutrack/dashboard.webp',
        caption: 'Teacher Dashboard — Daily Academic Insights & Class Priorities'
      },
      {
        src: '/projects/edutrack/grade-input.webp',
        caption: 'Weighted Grading — Structured Assessment Input & Automatic Final Scores'
      },
      {
        src: '/projects/edutrack/attendance.webp',
        caption: 'Attendance Management — Class Status Tracking & Recap Download'
      },
      {
        src: '/projects/edutrack/reports.webp',
        caption: 'Report Cards — Academic Results, Status & Batch Generation'
      },
      {
        src: '/projects/edutrack/login.webp',
        caption: 'Secure Entry — Institution Login & Role-Based Routing'
      }
    ],

    technologies: [
      'React.js',
      'Vite',
      'JavaScript',
      'React Router',
      'REST API',
      'Supabase',
      'Git',
      'GitHub',
      'Responsive Design',
      'UI/UX'
    ],

    links: {
      github: 'https://github.com/Korean-Asean-Digital-Academy-Batch-4/Front-End',
      organization: 'https://github.com/orgs/Korean-Asean-Digital-Academy-Batch-4/repositories',
      demo: ''
    },

    featured: true
  },

  {
    id: 5,
    slug: 'public-sentiment-analysis-koperasi-desa-merah-putih',
    title: 'Public Sentiment Analysis — Koperasi Desa Merah Putih',
    category: 'Machine Learning',
    projectType: 'Machine Learning · NLP · Sentiment Analysis',
    year: '2026',

    description:
      'An end-to-end Indonesian NLP platform that turns 220,051 real TikTok comments into sentiment intelligence, model evidence, and live predictions.',

    overview:
      'Processed public discussion from 27 TikTok videos into a production-ready analytical workflow spanning data quality, Indonesian-language NLP, machine-learning evaluation, database reporting, and an interactive Streamlit application.',

    problem:
      'Large-scale public-policy conversations are noisy, duplicated, colloquial, and difficult to evaluate consistently. A reproducible pipeline was needed to transform raw discussion into trustworthy sentiment evidence without relying on headline accuracy alone.',

    solution:
      'Engineered a 14-stage workflow covering collection, quality auditing, cleaning, Indonesian text preprocessing, IndoBERT labeling, leak-safe TF-IDF, three-model benchmarking, Supabase storage, Metabase reporting, and real-time Streamlit prediction.',

    features: [
      '220,051 Real Comments — Collected public discussion from 27 TikTok videos published between July 2025 and May 2026.',
      'Evidence-Based Data Quality — Removed duplicated scraper artifacts and non-text content, producing 120,707 clean comments with every decision documented.',
      'IndoBERT Sentiment Labeling — Labeled 119,565 comments with 0.89 mean confidence across negative, neutral, and positive classes.',
      'Leak-Safe Feature Engineering — Fit a 10,000-feature unigram-and-bigram TF-IDF representation on training data only.',
      'Three-Model Benchmark — Compared Logistic Regression, LinearSVC, and Naive Bayes using an 80:20 split and class-aware evaluation.',
      'Macro F1-Led Selection — Selected Logistic Regression for its 0.693 Macro F1 and 71.98% accuracy, prioritizing balanced class performance.',
      'Production Data & BI Layer — Structured seven PostgreSQL tables, twelve indexes, three analytical views, and Metabase-ready reporting queries.',
      'Interactive Deployment — Delivered multipage Streamlit experiences for dataset exploration, EDA, real-time prediction, evaluation, and dashboard insights.'
    ],

    evaluationNote:
      'The corpus is class-imbalanced—58.0% negative, 23.3% neutral, and 18.7% positive—so model selection is based on Macro F1 rather than accuracy alone. Labels are generated by a pretrained IndoBERT model and may still miss sarcasm or nuanced context.',

    role: 'Machine Learning & NLP Developer',
    roleDescription:
      'Designed the complete data and NLP workflow, benchmarked deployable classifiers, structured the analytical database layer, and delivered the interactive prediction and reporting experience.',

    image: '/projects/kopdes-sentiment/cover-v2.webp',
    images: [
      {
        src: '/projects/kopdes-sentiment/cover-v2.webp',
        caption: 'Kopdes Sentiment Intelligence — End-to-End Indonesian NLP Analytics'
      },
      {
        src: '/projects/kopdes-sentiment/sentiment-distribution.webp',
        caption: 'Sentiment Distribution — 119,565 Labeled Public Comments'
      },
      {
        src: '/projects/kopdes-sentiment/top-words-by-sentiment.webp',
        caption: 'Language Signals — Most Frequent Terms Across Sentiment Classes'
      },
      {
        src: '/projects/kopdes-sentiment/sentiment-trend.webp',
        caption: 'Public Opinion Over Time — Daily Sentiment Proportion Analysis'
      },
      {
        src: '/projects/kopdes-sentiment/model-confusion-matrices.webp',
        caption: 'Model Evidence — Logistic Regression, LinearSVC & Naive Bayes'
      }
    ],

    technologies: [
      'Python',
      'pandas',
      'NumPy',
      'NLP',
      'IndoBERT',
      'TF-IDF',
      'Scikit-learn',
      'Sastrawi',
      'Streamlit',
      'Supabase',
      'PostgreSQL',
      'Metabase',
      'Plotly',
      'Google Colab'
    ],

    links: {
      github: 'https://github.com/apiipp-co/Analisis-Sentimen-Publik-terhadap-Koperasi-Desa-Merah-Putih',
      demo: 'https://kopdes-sentiment-analysis.streamlit.app'
    },

    featured: true
  },

  {
    id: 6,
    slug: 'smart-parking-esp32-blynk',
    title: 'Smart Parking — ESP32 & Blynk',
    category: 'IoT',
    projectType: 'IoT · Embedded Systems · Automation',
    year: '2025',

    description:
      'An ESP32-powered parking prototype that detects occupancy, automates entry, and streams live slot status to Blynk.',

    overview:
      'Built as a functional embedded-systems prototype, Smart Parking combines physical sensing, edge control, local status feedback, and wireless monitoring in one demonstrable IoT workflow.',

    problem:
      'Drivers often enter parking areas without knowing whether a space is available, while manual gate and occupancy checks create avoidable delays and provide no convenient remote visibility.',

    solution:
      'Engineered an ESP32-based control system that reads vehicle and slot conditions, operates the entrance gate, communicates availability through local indicators, and synchronizes parking status to Blynk over Wi-Fi.',

    features: [
      'Live Slot Visibility — Detects parking-space conditions and relays availability for immediate monitoring.',
      'Automated Access Workflow — Uses detection input and parking conditions to coordinate vehicle entry and gate movement.',
      'ESP32 Edge Control — Centralizes sensor reading, decision logic, actuator commands, and network communication on the microcontroller.',
      'Local & Remote Feedback — Combines on-device display and status indicators with a Blynk monitoring interface.',
      'Connected Hardware Integration — Unifies sensors, servo-driven access control, display output, and Wi-Fi connectivity in one system.',
      'Functional Prototype — Demonstrates the complete physical workflow through a working tabletop model and recorded project video.'
    ],

    role: 'IoT & Embedded Systems Developer',
    roleDescription:
      'Integrated the ESP32 control logic, detection inputs, gate actuation, local indicators, and Blynk monitoring flow into a functional end-to-end prototype.',

    image: '/projects/smart-parking/cover-v3.webp',
    images: [
      {
        src: '/projects/smart-parking/cover-v3.webp',
        caption: 'Smart Parking — ESP32 Occupancy Monitoring and Automated Gate Control'
      },
      {
        src: '/projects/smart-parking/prototype-demo.webp',
        caption: 'Authentic Prototype — Gate, Vehicle Detection & Live Slot Indicators'
      },
      {
        src: '/projects/smart-parking/system-architecture.webp',
        caption: 'System Architecture — Sensors, ESP32, Outputs, Wi-Fi & Blynk'
      }
    ],

    technologies: [
      'ESP32',
      'IoT',
      'Blynk',
      'Arduino IDE',
      'C/C++',
      'Sensors',
      'Servo Motor',
      'Wi-Fi',
      'Embedded Systems',
      'Real-Time Monitoring',
      'Automation'
    ],

    links: {
      github: 'https://github.com/apiipp-co/SISTEM-MONITORING-DAN-KONTROL-PARKIR-OTOMATIS-MENGGUNAKAN-ESP32-DAN-PLATFORM-BLYNK',
      demo: 'https://youtu.be/2GfIrVPfsi0?si=9DsZne3K6y9QClad',
      demoLabel: 'WATCH DEMO'
    },

    featured: true
  },

  {
    id: 7,
    slug: 'hero-hyper-educational-rivalry-online',
    title: 'HERO — Hyper Educational Rivalry Online',
    category: 'UI/UX Design',
    projectType: 'Mobile UX · Gamified Learning · Interactive Prototype',
    year: '2026',

    description:
      'A first-place mobile UX concept that transforms programming practice into guided missions, instant feedback, visible progression, and friendly competition for IT students.',

    problem:
      'Programming assessments often feel repetitive when learners receive little immediate feedback, cannot see meaningful progress, and have few reasons to return consistently.',

    solution:
      'Designed a connected mobile learning journey where students choose a programming track, complete level-based coding challenges, receive instant results, earn XP and rewards, unlock achievements, and compete through leaderboards and Hero Battles.',

    features: [
      'First-Place Recognition — Won 1st place at Event Syntax for its gamified mobile-learning concept.',
      'Four Learning Tracks — Organizes Front-End, Back-End, Full-Stack, and Python content into clear paths.',
      'Level-Based Challenges — Turns programming assessments into progressive missions with instant answer feedback.',
      'Motivating Progression — Connects XP, streaks, energy, levels, badges, and visible milestones in one reward loop.',
      'Competitive Learning — Uses leaderboards and Hero Battles to create friendly, skill-driven competition.',
      'Reward Economy — Lets learners collect points and gems, unlock achievements, and redeem in-app rewards.',
      'User-Centered Prototype — Refined through interactive prototyping, user-flow mapping, and think-aloud usability testing.'
    ],

    role: 'Product & UI/UX Designer',
    roleDescription:
      'Owned the learning flow, gamification system, interface design, interactive prototype, and usability evaluation.',

    image: '/projects/hero-elearning/cover-v2.webp',
    images: [
      {
        src: '/projects/hero-elearning/cover-v2.webp',
        caption: 'HERO Product Overview — Learning Paths, Coding Challenges, Leaderboard & Hero Battle'
      },
      {
        src: '/projects/hero-elearning/learning-journey.webp',
        caption: 'Core Learning Journey — Choose a Track, Complete Challenges & Build Progress'
      },
      {
        src: '/projects/hero-elearning/competitive-system.webp',
        caption: 'Engagement System — Leaderboard, Hero Battle, Achievements & Rewards'
      }
    ],

    technologies: [
      'Figma',
      'FigJam',
      'UI/UX Design',
      'User-Centered Design',
      'Interactive Prototyping',
      'Gamification',
      'User Flow',
      'Wireframing',
      'Design System',
      'Usability Testing',
      'Think-Aloud Testing'
    ],

    links: {
      github: 'https://github.com/apiipp-co/HERO-Aplikasi-Mobile-Hyper-Educational-Rivalry-Online',
      githubLabel: 'VIEW PROJECT',
      demo: ''
    },

    featured: false
  },

  {
    id: 8,
    slug: 'jogjis-jogja-istimewa-mobile-app',
    title: 'JogJis — Jogja Istimewa Mobile App',
    category: 'UI/UX Design',
    projectType: 'Flutter · Public Digital Services · UI/UX',
    year: '2025',

    description:
      'A cross-platform public-service app developed during my APTIKA internship at Diskominfo DIY, bringing citizen information, complaints, CCTV access, messaging, and account services into one coherent mobile experience.',

    problem:
      'Citizen services become difficult to navigate when public information, complaints, monitoring, and account interactions are spread across disconnected channels with inconsistent interfaces.',

    solution:
      'Designed user flows in Figma and translated approved screens into reusable Flutter components for authentication, onboarding, dashboards, complaints, CCTV, public information, messaging, and profiles, with REST API integration and responsive behavior.',

    features: [
      'Unified Citizen Dashboard — Organizes essential Yogyakarta information and services into clear, discoverable entry points.',
      'End-to-End Account Flow — Covers onboarding, registration, login, verification, password recovery, and profile management.',
      'Public Complaint Workflow — Enables citizens to submit, edit, track, and review the status of their reports.',
      'CCTV & Public Information — Surfaces CCTV locations, monitoring access, news, documents, and regional information.',
      'Reusable Flutter System — Uses consistent custom widgets to accelerate development and maintain visual coherence.',
      'Responsive API-Connected UI — Integrates REST services while adapting navigation and layouts across mobile screen sizes.',
      'Cross-Functional Delivery — Iterated with the APTIKA team through design reviews, implementation feedback, and technical problem-solving.'
    ],

    role: 'Flutter Front-End & UI/UX Intern',
    roleDescription:
      'Dinas Komunikasi dan Informatika DIY — APTIKA Division · Apr 2025 — May 2025',

    image: '/projects/jogjis/cover-v2.webp',
    images: [
      {
        src: '/projects/jogjis/cover-v2.webp',
        caption: 'JogJis Product Overview — Citizen Dashboard, Complaints & Public CCTV'
      },
      {
        src: '/projects/jogjis/service-ecosystem.webp',
        caption: 'Public-Service Ecosystem — Onboarding, Dashboard, Reports & Live Information'
      },
      {
        src: '/About/Experience/Diskominfo/1.jpg',
        caption: 'Presenting the JogJis Flutter Application and Its Education Service Flow'
      },
      {
        src: '/About/Experience/Diskominfo/2.jpg',
        caption: 'Flutter Development Demo — Reusable UI Components and Mobile Implementation'
      },
      {
        src: '/About/Experience/Diskominfo/3.jpg',
        caption: 'APTIKA Internship Team — Dinas Komunikasi dan Informatika DIY'
      }
    ],

    technologies: [
      'Flutter',
      'Dart',
      'Figma',
      'UI/UX Design',
      'REST API',
      'Responsive Design',
      'User Flow',
      'Prototyping',
      'Git',
      'GitHub'
    ],

    links: {
      github: 'https://github.com/apiipp-co/Project-Internship-Diskominfo-DIY-Mobile-apps',
      githubLabel: 'VIEW CODE',
      demo: ''
    },

    featured: false
  },

  {
    id: 9,
    slug: 'cinema-website',
    title: 'Cinema Website',
    category: 'Web',
    year: '2024',
    projectType: 'React.js · Front-End · Responsive Web',

    description:
      'A responsive React cinema catalogue that turns a simple movie dataset into an immersive browsing experience with clear category navigation and reusable content cards.',

    overview:
      'A component-based React learning project focused on translating cinema content into a clear, visually engaging interface across its landing page, trending catalogue, and superhero collection.',

    problem:
      'Static movie lists become difficult to scan when titles, categories, and visual hierarchy are inconsistent, especially when the interface must remain readable across different screen sizes.',

    solution:
      'Built a responsive React interface with a cinematic landing hero, direct category navigation, and reusable movie cards for the Trending and Superhero collections, supported by a structured component architecture and local content assets.',

    features: [
      'Cinematic Landing Experience: Introduces the catalogue through a full-width theatre hero, focused headline, and direct call to action.',
      'Category-Based Discovery: Separates Trending and Superhero selections into clear browsing sections.',
      'Reusable React Components: Organizes navigation, content sections, and movie cards into a maintainable component structure.',
      'Responsive Movie Catalogue: Keeps the grid, imagery, and content hierarchy readable across desktop and smaller screens.',
      'Local Content Architecture: Presents a curated static dataset without relying on an external service or backend.',
      'Front-End Foundations: Strengthened practical skills in React, JavaScript, component composition, and interface styling.'
    ],

    role: 'Front-End Developer',
    roleDescription:
      'Developed the responsive interface, React component structure, navigation flow, movie catalogue sections, and visual presentation.',

    image: '/projects/cinema-website/cover-v2.webp',
    images: [
      {
        src: '/projects/cinema-website/cover-v2.webp',
        caption: 'Cinema Website — Responsive React Catalogue Experience'
      },
      {
        src: '/projects/cinema-website/interface-overview.webp',
        caption: 'Interface Overview — Landing, Trending, and Superhero Collections'
      },
      {
        src: '/projects/cinema-website/tampilan-1.png',
        caption: 'Original Landing Page — Cinematic Hero and Category Navigation'
      },
      {
        src: '/projects/cinema-website/tampilan-2.png',
        caption: 'Trending Movies — Reusable Catalogue Cards'
      },
      {
        src: '/projects/cinema-website/tampilan-3.png',
        caption: 'Complete Browse Flow — Trending and Superhero Sections'
      },
      {
        src: '/projects/cinema-website/tampilan-4.png',
        caption: 'Superhero Movies — Responsive Collection Grid'
      }
    ],

    technologies: [
      'React.js',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design',
      'Component-Based UI',
      'UI Design'
    ],

    links: {
      github: 'https://github.com/apiipp-co/Website-Bioskop-Sederhana',
      githubLabel: 'VIEW CODE',
      demo: ''
    },

    featured: false
  },

  {
    id: 10,
    slug: 'smart-light-control',
    title: 'Smart Light Control — ESP32 Web IoT',
    category: 'IoT',
    year: '2025',
    projectType: 'IoT · Web Development · Embedded Systems',

    description:
      'A local-network IoT lighting prototype that lets users control three room channels from a responsive browser through an ESP32-powered web server.',

    overview:
      'A full hardware-and-web prototype that connects a responsive control dashboard to three ESP32 GPIO outputs for practical, room-based lighting automation over Wi-Fi.',

    problem:
      'Conventional room lighting depends on separate physical switches, giving users no centralized way to view or change multiple lighting states from the device already in their hands.',

    solution:
      'Programmed the ESP32 as a local HTTP web server with dedicated GET and POST endpoints for Dapur, Ruang Tamu, and Ruang Makan, then connected those endpoints to a responsive HTML, CSS, and JavaScript dashboard with visual ON/OFF feedback.',

    features: [
      'Three-Zone Lighting Control: Manages dedicated channels for Dapur, Ruang Tamu, and Ruang Makan from one dashboard.',
      'ESP32 Web Server: Hosts the device-control service directly on the microcontroller over the local Wi-Fi network.',
      'HTTP State Endpoints: Uses GET requests to retrieve output states and POST requests to toggle individual channels.',
      'Responsive Control Dashboard: Keeps the controls accessible from smartphones, tablets, and desktop browsers.',
      'Immediate Visual Feedback: Updates each control to clearly communicate whether its corresponding channel is ON or OFF.',
      'Direct GPIO Automation: Maps the three controlled outputs to ESP32 GPIO pins 4, 5, and 19.',
      'Connection Indicator: Uses an onboard indicator LED to communicate Wi-Fi connection status during startup.',
      'Functional Prototype: Demonstrates the complete interaction from browser input to a visible physical LED response.'
    ],

    role: 'IoT & Embedded Systems Developer',
    roleDescription:
      'Developed the ESP32 firmware, HTTP control routes, GPIO logic, responsive web interface, and end-to-end hardware demonstration.',

    image: '/projects/smart-light-control/cover-v2.webp',
    images: [
      {
        src: '/projects/smart-light-control/cover-v2.webp',
        caption: 'Smart Light Control — ESP32 Hardware and Responsive Web Dashboard'
      },
      {
        src: '/projects/smart-light-control/system-flow.webp',
        caption: 'System Flow — Browser, Local Wi-Fi, ESP32 WebServer, and Three GPIO Outputs'
      },
      {
        src: '/projects/smart-light-control/hardware-cover.jpg',
        caption: 'Original Prototype — Multi-Channel LED Control Demonstration'
      },
      {
        src: '/projects/smart-light-control/dashboard.jpg',
        caption: 'Control Dashboard — Device Categories and Responsive Navigation'
      },
      {
        src: '/projects/smart-light-control/led-control.jpg',
        caption: 'Room Controls — Dapur, Ruang Tamu, and Ruang Makan'
      },
      {
        src: '/projects/smart-light-control/hardware-2.jpg',
        caption: 'Hardware State Test — Multiple Channels Activated'
      },
      {
        src: '/projects/smart-light-control/hardware-3.jpg',
        caption: 'Hardware State Test — Individual Channel Activated'
      },
      {
        src: '/projects/smart-light-control/hardware-4.jpg',
        caption: 'End-to-End Test — Dashboard Command and Physical LED Response'
      }
    ],

    technologies: [
      'ESP32',
      'IoT',
      'C++',
      'Arduino IDE',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Wi-Fi',
      'HTTP',
      'ESP32 WebServer',
      'GPIO Control',
      'Responsive Web Design'
    ],

    links: {
      github: 'https://github.com/apiipp-co/IoT-Web-Development-Kontrol-Lampu-Secara-Wireless-Menggunakan-ESP32',
      githubLabel: 'VIEW CODE',
      demo: ''
    },

    featured: false
  },

  {
    id: 11,
    slug: 'smart-task',
    title: 'SMART TASK — Task Automation App',
    category: 'Web',
    year: '2025',
    projectType: 'Web Application · Productivity · Task Management',

    description:
      'A focused productivity app for capturing tasks, scheduling deadlines, and delivering timely reminders in one simple flow.',

    overview:
      'A lightweight productivity project centered on task creation, date/time scheduling, and reminder feedback, designed to turn scattered to-dos into a clear daily flow.',

    problem:
      'Without a single place to record tasks and deadlines, important work can be forgotten or handled too close to its due time.',

    solution:
      'Built SMART TASK around a short, repeatable flow: open the app, add a task, set its date and time, review the saved item, and receive a reminder when it is due.',

    features: [
      'Quick Task Capture: Adds a task from one focused creation dialog.',
      'Date & Time Scheduling: Assigns a target date and reminder time to each item.',
      'Saved Task View: Displays task title, date, and time in a clean list.',
      'Reminder Feedback: Surfaces scheduled tasks through in-app and device notification states.',
      'Simple Workflow: Keeps create, schedule, review, and reminder steps easy to follow.',
      'Responsive Interface: Presents the workflow clearly across mobile-sized layouts and web screens.',
      'Beginner-Friendly Architecture: Strengthens practical HTML, CSS, JavaScript, and UI/UX foundations.'
    ],

    role: 'Front-End Developer',

    roleDescription:
      'Designed and implemented the task flow, creation form, date/time scheduling states, saved-task view, and reminder feedback.',

    image: '/projects/smart-task/cover-v3.webp',
    images: [
      {
        src: '/projects/smart-task/cover-v3.webp',
        caption: 'SMART TASK — Unified Planning, Scheduling, and Reminder Dashboard'
      },
      {
        src: '/projects/smart-task/workflow-overview.webp',
        caption: 'Workflow Overview — Add, Schedule, Save, and Remind'
      },
      {
        src: '/projects/smart-task/login.png',
        caption: 'Original Welcome Screen — Clear Entry Point'
      },
      {
        src: '/projects/smart-task/dashboard.png',
        caption: 'Task Workspace — Lightweight Daily Overview'
      },
      {
        src: '/projects/smart-task/add-task.png',
        caption: 'Task Creation — Title, Date, and Time Inputs'
      },
      {
        src: '/projects/smart-task/set-date.png',
        caption: 'Scheduling Step — Select a Due Date'
      },
      {
        src: '/projects/smart-task/set-time.png',
        caption: 'Scheduling Step — Set a Reminder Time'
      },
      {
        src: '/projects/smart-task/task-added.png',
        caption: 'Saved Task — Title, Date, and Time at a Glance'
      },
      {
        src: '/projects/smart-task/notification.png',
        caption: 'Reminder State — Task Notification Feedback'
      },
      {
        src: '/projects/smart-task/notification-popup.png',
        caption: 'Device Reminder — Scheduled Task Alert'
      }
    ],

    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Web Development',
      'Task Management',
      'Date & Time Scheduling',
      'Reminder UI',
      'Responsive Design',
      'UI/UX'
    ],

    links: {
      github: 'https://github.com/apiipp-co/Aplikasi-Otomatisasi-Tugas-SMART-TASK-',
      githubLabel: 'VIEW CODE',
      demo: ''
    },

    featured: false
  },

  {
    id: 12,
    slug: 'business-network-system',
    title: 'Business Network System — Main Design',
    category: 'Other',
    year: '2025',
    projectType: 'Network Design · System Architecture · IT Infrastructure',

    description:
      'A layered enterprise network blueprint connecting redundant core infrastructure to multi-floor departmental VLANs.',

    overview:
      'A technical architecture study that turns business requirements into a clear topology, department subnets, device connections, and an expandable office network plan.',

    problem:
      'A multi-floor business environment needs reliable connectivity without mixing department traffic, losing visibility of devices, or making future expansion difficult to plan.',

    solution:
      'Produced a layered network design that connects ISP links to redundant core and distribution switches, then segments departments, endpoints, and server resources through documented VLAN and IP plans.',

    features: [
      'Layered Architecture: Organizes ISP, core, distribution, and access layers into one readable topology.',
      'Multi-Floor Connectivity: Maps network links across three floors and multiple business areas.',
      'Department VLAN Segmentation: Separates Sales, HR, Finance, Administration, ICT, and server resources.',
      'IP Addressing & Subnets: Documents point-to-point links and department network ranges.',
      'Server Room Planning: Places DHCP, DNS, email, and administration resources in a dedicated segment.',
      'Redundant Uplinks: Illustrates resilient paths between core, distribution, and access equipment.',
      'Technical Documentation: Communicates the proposed architecture through a single reference diagram.'
    ],

    role: 'Network & System Designer',

    roleDescription:
      'Mapped business requirements into the topology, layer relationships, VLAN segmentation, IP ranges, and technical documentation.',

    image: '/projects/business-network-system/cover-v3.webp',
    images: [
      {
        src: '/projects/business-network-system/cover-v3.webp',
        caption: 'Business Network Blueprint — Redundant Core, Distribution, and Multi-Floor Access'
      },
      {
        src: '/projects/business-network-system/architecture-overview.webp',
        caption: 'Architecture Overview — Multi-Floor Topology and VLAN Plan'
      },
      {
        src: '/projects/business-network-system/core-distribution-detail.webp',
        caption: 'Core and Distribution Detail — Uplinks and Routing Relationships'
      },
      {
        src: '/projects/business-network-system/vlan-layout-detail.webp',
        caption: 'Access Layer Detail — Department Segments and Server Room'
      },
      {
        src: '/projects/business-network-system/network-topology.png',
        caption: 'Original Technical Diagram — Complete Network Topology'
      }
    ],

    technologies: [
      'Network Design',
      'Network Topology',
      'IP Addressing',
      'VLAN Planning',
      'Subnetting',
      'LAN',
      'Routing',
      'Switching',
      'System Architecture',
      'IT Infrastructure',
      'Network Planning',
      'Technical Documentation'
    ],

    links: {
      github: 'https://github.com/apiipp-co/Perusahaan-Bisnis-Sistem-Jaringan-Desain-Utama',
      githubLabel: 'VIEW PROJECT',
      demo: ''
    },

    featured: false
  }
];

// ─── LEGACY COMPAT (kept for existing journey section references) ──────────────
export const experience = [
  ...experiences,
  ...education.map(e => ({ ...e, role: e.degree, company: e.institution })),
  ...organizations.map(o => ({ ...o, company: o.organization }))
];

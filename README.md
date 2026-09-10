<div align="center">

# 🌐 Adhitya Afif Ardana — Portfolio Website

An interactive, modern, and high-performance personal portfolio website built with **React 19**, **Vite**, **Three.js / React Three Fiber**, and **Tailwind CSS**.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-FF9900?style=for-the-badge&logo=mail.ru&logoColor=white)](https://www.emailjs.com/)

</div>

---

## ✨ Features

- 🪪 **Interactive 3D Lanyard**: Realistic physics-driven 3D ID card simulation using `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier`, and `meshline`.
- 🎬 **Hero Frame Animation**: Dynamic frame sequence render for smooth scrolling & visual engagement.
- 💼 **Project Showcase**: Rich interactive project cards with detailed modal previews, tech stacks, and direct links.
- 📜 **Experience & Education**: Timeline of professional experiences, organizational roles, and academic background.
- 🏆 **Certificates & Awards**: Interactive showcase of verified certifications and achievements.
- 📬 **Working Contact Form**: Seamless contact form integrated with **EmailJS** for direct client inquiries.
- 🎨 **Modern Dark Aesthetics**: Crafted with sleek glassmorphism, responsive grid layouts, and smooth micro-animations.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend Framework** | React 19, Vite |
| **Styling** | Tailwind CSS, PostCSS, Autoprefixer |
| **3D & Graphics** | Three.js, React Three Fiber (R3F), Drei, Rapier Physics, MeshLine |
| **Icons** | Lucide React |
| **Services & APIs** | EmailJS (`@emailjs/browser`) |

---

## 📂 Project Structure

```text
adhitya-afif-portfolio/
├── public/                # Static assets (3D GLB models, frame sequences, images)
│   ├── frames/            # WebP animation frames
│   ├── images/            # Profile and organization logos
│   ├── lanyard/           # 3D lanyard textures and card.glb
│   └── projects/          # Project thumbnail previews
├── src/
│   ├── assets/            # Component-level static assets
│   ├── components/        # Modular UI components
│   │   ├── AboutSection.jsx
│   │   ├── BrickboxSection.jsx
│   │   ├── CertificatesSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── CvModal.jsx
│   │   ├── DetailModal.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroAnimation.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Home.jsx
│   │   ├── Lanyard.jsx      # 3D Physics Lanyard Component
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ScrollingTicker.jsx
│   ├── App.jsx            # Main app router / component tree
│   ├── data.js            # Centralized portfolio data & content
│   ├── index.css          # Global Tailwind styles & directives
│   └── main.jsx           # React DOM entry point
├── .env.example           # Environment variable template
├── .gitignore             # Git ignore configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite build configuration
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/apiipp-co/adhitya-afif-portfolio.git
cd adhitya-afif-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the example environment file and fill in your **EmailJS** credentials:

```bash
# On Windows (PowerShell)
Copy-Item .env.example .env

# On Linux/macOS
cp .env.example .env
```

Open `.env` and configure your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

---

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 👤 Author

**Adhitya Afif Ardana**
- 🌐 Website: [adhityaafif.site](https://adhityaafif.site)
- 💼 LinkedIn: [Adhitya Afif Ardana](https://www.linkedin.com/in/adhityaafifardana/)
- 🐙 GitHub: [@apiipp-co](https://github.com/apiipp-co)
- 📸 Instagram: [@apiipp.co](https://www.instagram.com/apiipp.co/)
- 📧 Email: adhityaardana73@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

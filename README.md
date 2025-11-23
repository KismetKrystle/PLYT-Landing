# Plyant - Urban Nature Network

A modern, interactive landing page for Plyant's XRPL Residency submission, showcasing climate-resilient, financially inclusive food systems powered by blockchain technology.

## 🌱 About Plyant

Plyant is building **The Network of Urban Nature** - transforming concrete jungles into living, breathing ecosystems through hyper-local food systems, AI-powered tools, and blockchain-enabled financial inclusion.

## ✨ Features

### Consumer Landing Page
- **Hero Section**: Dynamic introduction with urban nature imagery
- **Problem Statement**: Interactive display of climate and food security challenges
- **How It Works**: Modern flow visualization of the Plyant ecosystem
- **AI Assistant**: Carousel showcasing AI-powered shopping and growing tools
- **Unified Flows**: Tabbed interface for Money Works, AI Shopping, and AI Growing
- **Community Impact**: Climate resilience metrics and local food system benefits
- **Contact**: Modern contact form with social links

### Technical Deep Dive (For XRPL Judges)
- **Blockchain Technology**: Key XRPL features and integration details
- **System Architecture**: Step-by-step user flow with smart contract implementation
- **Technical Specifications**: Detailed breakdown of the platform's technical stack

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KismetKode/PLYANT-Landing.git
cd Plyant-UN-Landing2025
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Plyant-UN-Landing2025/
├── app/
│   ├── components/
│   │   ├── consumer/          # Consumer-facing components
│   │   │   ├── HeroModern.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── HowItWorksModern.tsx
│   │   │   ├── AIChat.tsx
│   │   │   ├── UnifiedFlows.tsx
│   │   │   ├── CommunityImpact.tsx
│   │   │   └── ...
│   │   ├── BlockchainTech.tsx # Technical components
│   │   ├── SystemArchitecture.tsx
│   │   └── ...
│   ├── context/               # React context providers
│   ├── page.tsx              # Main landing page
│   ├── technology/           # Technical deep dive page
│   └── layout.tsx
├── public/                   # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Design System

### Color Palette
- **Brand Dark**: Primary dark color
- **Brand Light**: Primary light color
- **Brand Earth**: Accent color (#C4A484)
- **Sage Green**: Success/growth color
- **Sky Blue**: Information color
- **Coral**: Warning/alert color
- **Warm Gold**: Highlight color

### Typography
- **Display Font**: Used for headings and titles
- **Serif Font**: Used for body text and descriptions
- **Mono Font**: Used for statistics and data

## 🌐 Key Sections

### Consumer Page (`/`)
The main landing page designed for general users, featuring:
- Climate crisis overview and solutions
- AI-powered tools demonstration
- Community impact metrics
- User flows for different personas

### Technology Page (`/technology`)
Technical documentation for XRPL Residency judges, including:
- XRPL integration details
- Smart contract architecture
- System flow diagrams
- Technical specifications

## 🔗 XRPL Integration

Plyant leverages the XRP Ledger for:
- **Instant Settlement**: 3-5 second transaction times
- **Micropayments**: Ultra-low fees ($0.0001)
- **Secure Escrow**: Smart contract-based fund release
- **Stablecoins**: USDC payments for price stability
- **Automated Contracts**: Farming inputs and harvest sales

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚢 Deployment

This project is deployed on Vercel. Any push to the `master` branch automatically triggers a new deployment.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/KismetKode/PLYANT-Landing)

## 🤝 Contributing

This is a submission for the XRPL Residency program. For inquiries, please contact the team.

## 📄 License

All rights reserved © 2025 Plyant

## 🔗 Links

- **Website**: [plyant.com](https://plyant.com)
- **Email**: hello@plyant.com
- **Location**: Based in Bali, Indonesia 🌴

## 🏆 XRPL Residency

This project is submitted for the XRPL Residency program, showcasing how blockchain technology can democratize climate finance and build resilient food systems.

---

Built with ❤️ by the Plyant team

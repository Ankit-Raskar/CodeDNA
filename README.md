# 🧬 CodeDNA

**CodeDNA** is an innovative web application that decodes any developer's GitHub personality and turns it into a stunning, shareable Trading Card. Powered by real GitHub data and AI insights, CodeDNA analyzes your repositories, top languages, and commit habits to assign you a unique Archetype and generate a beautifully designed, holographic developer card.

## 🌟 Features

- **GitHub Stats Integration**: Fetches real-time data including your total stars, repository count, and top languages used.
- **AI-Powered Insights**: Generates a unique developer "Signature Move" and custom tagline based on your coding history.
- **Unique Archetypes**: Classifies developers into different archetypes (e.g., AI Architect, Frontend Wizard, Backend Beast) with varying rarity levels.
- **Holographic 3D Cards**: Implements a dynamic, tilt-responsive 3D card UI using Framer Motion.
- **Shareable Assets**: Instantly download your CodeDNA card as a high-quality PNG or copy it directly to your clipboard to share on LinkedIn and Twitter.

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Routing**: TanStack Router (File-based routing)
- **State Management**: TanStack Query (React Query)
- **Styling**: Tailwind CSS 4 + Radix UI Primitives
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Image Generation**: html-to-image (Client-side rendering of DOM to PNG)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm (or bun/yarn) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ankit-Raskar/CodeDNA.git
   cd CodeDNA
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📦 Building for Production

To create an optimized production build, run:
```bash
npm run build
```
This will generate a `dist` directory with your static assets, ready to be deployed to Vercel, Netlify, or any other static hosting provider.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Ankit-Raskar/CodeDNA/issues).

## 📄 License

This project is licensed under the MIT License.

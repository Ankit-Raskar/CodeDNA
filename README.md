# 🧬 CodeDNA

**CodeDNA** is an innovative, highly interactive web application that decodes any developer's GitHub personality and turns it into a stunning, shareable experience. Powered by real GitHub data and advanced AI insights, CodeDNA analyzes your repositories, top languages, and commit habits to generate beautiful visualizations, holographic trading cards, and even career predictions.

![CodeDNA Preview](https://github.com/Ankit-Raskar/CodeDNA/assets/preview.png) *(Add a preview image here)*

## 🌟 Key Features

CodeDNA has evolved from a simple trading card generator into a full-fledged developer wrapped experience:

- **Holographic Trading Cards**: Generates a dynamic, tilt-responsive 3D card UI using Framer Motion. Assigns unique Archetypes (e.g., AI Architect, Frontend Wizard) with varying rarity levels based on your coding history.
- **Repository Galaxy**: An interactive, zoomable, and pannable 3D constellation map of all your GitHub repositories. Stars are sized by popularity and clustered by programming language.
- **Time Machine (GitHub Rewind)**: Travel back through your coding history. View your first commits, language evolution, and year-by-year highlights.
- **AI Mentor Chat**: An integrated AI assistant (powered by Groq / LLaMA) that analyzes your code structure and offers personalized advice, roast, or mentorship.
- **Developer Yearbook & Personality**: Fun, AI-generated superlatives (e.g., "Most likely to break production on Friday") and "If you were..." personality comparisons.
- **Career Path Predictor**: Uses your GitHub data to predict your future tech career trajectory and suggests skills to learn next.
- **One-Click Resume Generator**: Automatically compiles your GitHub statistics, top repositories, and languages into a clean, downloadable developer resume.
- **Light & Dark Mode**: A beautiful, meticulously designed UI that perfectly adapts to both light and dark themes with glassmorphic elements and modern aesthetics.
- **Shareable Assets**: Instantly download your CodeDNA card or Resume as high-quality PNGs to share on LinkedIn and Twitter.

## 🛠️ Technology Stack

CodeDNA is built with a modern, high-performance web stack:

- **Frontend Framework**: React 19 + TypeScript
- **Routing**: TanStack Router (File-based, type-safe routing)
- **State & Data Fetching**: TanStack Query (React Query)
- **Styling**: Tailwind CSS 4
- **Animations & Interactions**: Framer Motion & `react-zoom-pan-pinch`
- **Charts & Visualizations**: Recharts & D3.js
- **AI Integration**: Groq Cloud API (Fast LLaMA inference)
- **Image Generation**: `html-to-image` (Client-side rendering of DOM to PNG)
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm (or bun/yarn) installed on your machine.

### Environment Variables
To run CodeDNA locally, you will need access to the GitHub API and Groq AI API. Create a `.env` file in the root directory:

```env
# Required for fetching GitHub data without strict rate limits
VITE_GITHUB_TOKEN=your_github_personal_access_token

# Required for the AI Mentor and AI Feedback features
VITE_GROQ_API_KEY=your_groq_api_key
```

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
This will generate a `.vercel/output` or `dist` directory with your static assets and server functions, ready to be deployed.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Ankit-Raskar/CodeDNA/issues).

## 📄 License

This project is licensed under the MIT License.

# EstateIQ India 🏘️

**AI-Powered Real Estate Investment Heatmap for India**

An intelligent web application that helps investors identify the best real estate investment opportunities across Indian states and cities using AI-powered analysis, live market data, and location intelligence.

---

## 🌟 Features

### 🗺️ Interactive India Map
- Hover and click on Indian states for detailed analysis
- Visual heatmap showing investment potential
- State-wise color coding based on investment ratings

### 🤖 AI-Powered Investment Analysis
- **Gemini 3 Pro Preview** with Google Search for real-time market data
- Investment scoring (1-100) based on multiple factors:
  - Infrastructure development
  - Economic growth
  - Property appreciation trends
  - Rental yields
  - Regulatory environment

### 📊 Comprehensive State Reports
- **Top Investment Cities** with tier classification (Tier 1/2/3)
- **Fastest Growing Cities** with YoY growth rates
- **Market Trends** with data-backed insights
- **Infrastructure Projects** with timelines
- Average price per sq.ft for different localities
- RERA compliance, stamp duty rates, government schemes

### 🏠 Smart Property Valuation
- AI-powered price prediction for any property
- **Google Maps integration** for nearby amenities:
  - Schools, hospitals, transport hubs
  - IT parks, business districts
  - Metro/railway connectivity
- Growth factors and risk analysis
- Rental yield potential

### 🚀 Latest Market Data
- Real-time Q4 2024 / Q1 2025 data via Google Search
- YoY price appreciation rates (2023-2024)
- Emerging micro-markets and localities
- Impact of new infrastructure projects

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Frontend:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **AI Model:** [Gemini 3 Pro Preview](https://ai.google.dev/) with:
  - Google Search grounding
  - Google Maps integration
- **SDK:** [@google/genai](https://www.npmjs.com/package/@google/genai)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Markdown:** [React Markdown](https://github.com/remarkjs/react-markdown)

---

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**
- **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/apikey)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd EstateIQIndia
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**To get your API key:**
1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and paste it in `.env`

**Important:** The `.env` file is already in `.gitignore` to keep your API key secure.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
EstateIQIndia/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes (Server-side)
│   │   ├── state-analysis/       # State investment analysis endpoint
│   │   └── property-valuation/   # Property price prediction endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React Components
│   ├── Header.tsx                # Navigation header
│   ├── IndiaMap.tsx              # Interactive SVG map
│   ├── StateDetail.tsx           # State analysis display
│   ├── InvestmentAnalyzer.tsx    # Property valuation tool
│   └── MapVisualization.tsx      # Google Maps data display
├── services/                     # Service layer
│   └── geminiService.ts          # API route client functions
├── types.ts                      # TypeScript type definitions
├── constants.tsx                 # App constants (map paths, etc.)
├── .env                          # Environment variables (not in git)
├── next.config.mjs               # Next.js configuration
└── tailwind.config.ts            # Tailwind CSS configuration
```

---

## 🔒 Security Features

### Server-Side API Routes
All Gemini API calls are made from **secure server-side routes** (`/api/state-analysis` and `/api/property-valuation`). Your API key is **never exposed** to the client browser.

### Environment Variables
- API key stored in `.env` file (server-side only)
- `.env` file excluded from git via `.gitignore`
- Safe for production deployment on Vercel

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project to Vercel
3. Add environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key
4. Deploy!

Vercel will automatically:
- Detect Next.js configuration
- Install dependencies
- Build and deploy your app
- Provide a production URL

---

## 📊 How It Works

### 1. State Analysis Flow
```
User clicks state →
Frontend calls /api/state-analysis →
Server uses Gemini API with Google Search →
Returns JSON with investment data →
Display in StateDetail component
```

### 2. Property Valuation Flow
```
User enters location details →
Frontend calls /api/property-valuation →
Server uses Gemini API with Google Maps + Search →
Returns price estimate + location analysis →
Display with nearby amenities from Maps
```

---

## 🎨 Customization

### Adding More States
Edit `constants.tsx` to add more state paths to the India map SVG.

### Modifying AI Prompts
Update prompts in:
- `app/api/state-analysis/route.ts` for state analysis
- `app/api/property-valuation/route.ts` for property valuation

### Styling
All styles use Tailwind CSS. Modify `tailwind.config.ts` for theme changes.

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, React, and Google Gemini AI**


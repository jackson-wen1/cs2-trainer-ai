# 🎯 CS2 Training Recommender

An AI-powered Counter-Strike 2 performance analysis tool that provides personalized training recommendations based on your gameplay data.

## 🚀 Features

- **Comprehensive Performance Analysis**: Analyzes aim, positioning, utility usage, and 15+ detailed metrics
- **AI-Powered Recommendations**: Uses Google Vertex AI to generate personalized training suggestions
- **Rank-Based Comparisons**: Compares your performance against players of similar rank (Faceit/Premier)
- **Interactive Dashboard**: Modern, responsive UI with detailed metric breakdowns
- **Real-Time Data**: Integrates with Leetify API for up-to-date player statistics

## 🛠️ Tech Stack

- **Frontend**: React.js with modern CSS animations
- **Backend**: FastAPI (Python)
- **AI**: Google Vertex AI (Gemini 2.0 Flash)
- **Database**: Elasticsearch
- **Data Source**: Leetify API
- **Deployment**: Vercel (Frontend) + Google Cloud Run (Backend)

## 📋 Prerequisites

- Python 3.9+
- Node.js 18+
- Google Cloud Platform account
- Elasticsearch instance
- Leetify API key

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ternasius/cs2-trainer-ai.git
cd cs-ai
```

### 2. Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Create service account key file
# Download from Google Cloud Console and save as service_account.json
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run build
cd ..
```

### 4. Environment Variables
Create a `.env` file in the root directory:
```env
# Leetify API
LEETIFY_API_KEY=your_leetify_api_key
LEETIFY_BASE_URL=https://api-public.cs-prod.leetify.com

# Elasticsearch
ELASTIC_URL=your_elasticsearch_url
ELASTIC_API_KEY=your_elasticsearch_api_key

# Google Cloud
GCP_PROJECT_ID=your_gcp_project_id
GCP_LOCATION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=service_account.json
```

### 5. Deployment Configuration

#### GitHub Secrets (for backend deployment)
Add these secrets to your GitHub repository:
- `GOOGLE_APPLICATION_CREDENTIALS_JSON`
- `ELASTIC_URL`
- `ELASTIC_API_KEY`
- `LEETIFY_API_KEY`
- `LEETIFY_BASE_URL`
- `GCP_PROJECT_ID`
- `GCP_LOCATION`

#### Vercel Environment Variables (for frontend)
In your Vercel project settings, add:
- No environment variables needed (frontend calls backend API directly)

## 🚀 Local Development

### Run Backend
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8080
```

### Run Frontend
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080

## 📊 Data Setup

### Elasticsearch Indexes
Create these indexes in your Elasticsearch instance:

1. **leetify-references**: Tier thresholds (poor, subpar, average, good, great)
2. **premier-references**: Premier rank performance baselines
3. **faceit-references**: Faceit level performance baselines
4. **player_training_data**: Stores analysis results

### Data Import
You can populate the indexes by importing the CSV files from the `reference_tables/` folder:

1. Go to your Elasticsearch dashboard
2. Navigate to each index
3. Import the corresponding CSV file:
   - `leetify-references` ← `reference_tables/leetify_tiers.csv`
   - `premier-references` ← `reference_tables/premier_reference.csv`
   - `faceit-references` ← `reference_tables/faceit_reference.csv`

## 🌐 Deployment

### Automatic Deployment
Push to `main` branch triggers automatic deployment via GitHub Actions:
- Backend deploys to Google Cloud Run
- Frontend can be deployed to Vercel separately

### Manual Deployment

#### Google Cloud Run
```bash
# Build and deploy
docker build -t gcr.io/your-project/cs2-app .
docker push gcr.io/your-project/cs2-app
gcloud run deploy --image gcr.io/your-project/cs2-app
```

#### Vercel (Frontend Only)
1. Go to vercel.com and connect your GitHub repository
2. Set build settings:
   - **Framework**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
3. Deploy (no environment variables needed)

## 🎮 Usage

1. **Enter Steam ID**: Input your Steam64 ID on the homepage
2. **Analysis**: The system fetches data from Leetify and analyzes performance
3. **Results**: View detailed metrics compared to your rank average
4. **Recommendations**: Get AI-generated training suggestions
5. **Track Progress**: Re-analyze periodically to track improvement

## 📈 Metrics Analyzed

### Core Performance
- **Aim**: Overall aim skill rating
- **Positioning**: Map awareness and positioning
- **Utility**: Grenade effectiveness

### Detailed Metrics
- Headshot accuracy
- Spray control
- Counter-strafing
- Crosshair placement
- Reaction time
- Flashbang effectiveness
- HE grenade damage
- Utility retention

### Situational Performance
- CT/T side ratings
- Clutch performance
- Opening duel success

## 📝 License

This project is licensed under the MIT License.

## 🔗 Links

- [Leetify API Documentation](https://leetify.com/api)
- [Google Vertex AI](https://cloud.google.com/vertex-ai)
- [Elasticsearch Documentation](https://www.elastic.co/guide/)

## ⚠️ Disclaimer

This tool is for educational and training purposes. It requires a valid Leetify account and CS2 match data to function properly.
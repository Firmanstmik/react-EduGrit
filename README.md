# Edu-GRIT - Student Grit Analysis Platform

Edu-GRIT is an AI-based platform that analyzes student grit levels through text analysis of survey responses, reflective journals, and academic interactions. It provides insights into student perseverance and passion, offering personalized recommendations for mentoring and counseling.

## 🎯 Features

- **Survey System**: Comprehensive questionnaire to assess student grit
- **AI Analysis**: Advanced text analysis to calculate grit scores (0-100)
- **Visualization**: Interactive charts and graphs using Recharts
- **Dashboard**: Complete overview of all student analyses
- **Responsive Design**: Modern UI with Tailwind CSS
- **SDGs Alignment**: Supports Sustainable Development Goals 3 & 4

## 🚀 Tech Stack

- **Frontend**: React 18 with JSX
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edu-grit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── Card.jsx        # Card wrapper component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Survey.jsx      # Survey form
│   ├── Result.jsx      # Analysis results
│   ├── Dashboard.jsx   # Student dashboard
│   └── About.jsx       # About page
├── services/           # API services
│   └── api.js          # Mock API service
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🎨 Pages Overview

### 1. Home Page (`/`)
- Hero section with mission statement
- Feature highlights
- Call-to-action buttons
- Clean, academic design

### 2. Survey Page (`/survey`)
- Student information form
- 4 open-ended questions in Indonesian
- Text validation and submission
- Loading states

### 3. Result Page (`/result`)
- Grit score visualization
- Detailed analysis charts
- Keyword detection
- Intervention recommendations
- Action buttons for next steps

### 4. Dashboard Page (`/dashboard`)
- Statistics overview
- Student list with filtering
- Search functionality
- Responsive table layout
- Status indicators

### 5. About Page (`/about`)
- Platform mission and vision
- SDGs alignment information
- Technology stack details
- Developer information
- Contact details

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:8000/api
```

### Tailwind CSS
The project uses Tailwind CSS with custom configuration:
- Primary colors: Blue theme
- Grit-specific colors for score visualization
- Responsive design utilities

## 📊 Mock Data

The application includes comprehensive mock data for testing:
- 6 sample students with varying grit scores
- Realistic Indonesian survey responses
- Detailed analysis results
- Intervention recommendations

## 🎯 Key Features Implementation

### Survey Questions (Indonesian)
1. "Apa yang memotivasi Anda untuk tetap bertahan di kuliah?"
2. "Ceritakan pengalaman ketika Anda hampir menyerah namun tetap melanjutkan."
3. "Bagaimana Anda mengatasi kegagalan atau tantangan dalam belajar?"
4. "Apa yang membuat Anda tetap fokus pada tujuan jangka panjang?"

### Grit Score Calculation
- Text analysis of responses
- Keyword detection
- Length-based scoring
- Positive/negative indicator weighting
- Score range: 0-100

### Visualization Components
- Circular progress indicator for main score
- Bar charts for detailed analysis
- Color-coded status indicators
- Responsive chart layouts

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

## 🔮 Future Enhancements

- Backend API integration
- Real AI/ML model implementation
- User authentication
- Advanced analytics
- Export functionality
- Mobile app version

## 👨‍💻 Developer

**Firman Maulana**  
STMIK Lombok  
Email: firmanmaulanastmik@gmail.com

## 📄 License

This project is developed for educational purposes and supports SDGs 3 & 4.

---

**Edu-GRIT** - Empowering students through grit analysis and personalized support.

import axios from 'axios';

// Mock API service for Edu-GRIT
class ApiService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Mock analysis endpoint
  async analyzeGrit(surveyData) {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        const mockResult = {
          success: true,
          data: {
            studentName: surveyData.name,
            studentId: surveyData.studentId,
            gritScore: this.calculateMockGritScore(surveyData),
            keywords: this.extractMockKeywords(surveyData),
            intervention: this.generateMockIntervention(surveyData),
            detailedAnalysis: {
              perseverance: Math.floor(Math.random() * 20) + 70,
              passion: Math.floor(Math.random() * 20) + 65,
              resilience: Math.floor(Math.random() * 20) + 75,
              focus: Math.floor(Math.random() * 20) + 60
            },
            timestamp: new Date().toISOString()
          }
        };
        resolve(mockResult);
      }, 2000);
    });
  }

  // Mock grit score calculation based on text analysis
  calculateMockGritScore(surveyData) {
    let score = 50; // Base score
    
    const responses = [
      surveyData.question1,
      surveyData.question2,
      surveyData.question3,
      surveyData.question4
    ].join(' ').toLowerCase();

    // Positive indicators
    const positiveWords = [
      'motivasi', 'tujuan', 'cita-cita', 'impian', 'semangat', 'tekad',
      'usaha', 'kerja keras', 'pantang menyerah', 'gigih', 'tekun',
      'fokus', 'disiplin', 'konsisten', 'berjuang', 'mencoba',
      'belajar', 'mengembangkan', 'meningkatkan', 'berhasil'
    ];

    // Negative indicators
    const negativeWords = [
      'menyerah', 'putus asa', 'malas', 'tidak bisa', 'sulit',
      'tidak mampu', 'gagal', 'frustasi', 'stress', 'tertekan'
    ];

    // Count positive and negative indicators
    const positiveCount = positiveWords.reduce((count, word) => {
      return count + (responses.includes(word) ? 1 : 0);
    }, 0);

    const negativeCount = negativeWords.reduce((count, word) => {
      return count + (responses.includes(word) ? 1 : 0);
    }, 0);

    // Calculate score based on indicators
    score += positiveCount * 3;
    score -= negativeCount * 2;

    // Adjust based on response length (more detailed responses indicate higher engagement)
    const totalLength = responses.length;
    if (totalLength > 500) score += 10;
    else if (totalLength > 300) score += 5;

    // Ensure score is within bounds
    return Math.max(20, Math.min(100, score));
  }

  // Extract keywords from responses
  extractMockKeywords(surveyData) {
    const allText = [
      surveyData.question1,
      surveyData.question2,
      surveyData.question3,
      surveyData.question4
    ].join(' ').toLowerCase();

    const keywordMap = {
      'motivasi': ['motivasi', 'dorongan', 'alasan'],
      'tujuan': ['tujuan', 'cita-cita', 'impian', 'target'],
      'ketekunan': ['tekun', 'gigih', 'usaha', 'kerja keras'],
      'tantangan': ['tantangan', 'hambatan', 'kesulitan', 'masalah'],
      'semangat': ['semangat', 'spirit', 'energi', 'gairah'],
      'belajar': ['belajar', 'studi', 'pendidikan', 'ilmu'],
      'keluarga': ['keluarga', 'orang tua', 'ibu', 'ayah'],
      'masa depan': ['masa depan', 'karir', 'profesi', 'pekerjaan']
    };

    const detectedKeywords = [];
    Object.entries(keywordMap).forEach(([category, words]) => {
      if (words.some(word => allText.includes(word))) {
        detectedKeywords.push(category);
      }
    });

    return detectedKeywords.slice(0, 5); // Return top 5 keywords
  }

  // Generate intervention recommendation
  generateMockIntervention(surveyData) {
    const score = this.calculateMockGritScore(surveyData);
    
    if (score >= 80) {
      return 'Excellent grit level! Continue current strategies and consider mentoring others.';
    } else if (score >= 60) {
      return 'Good grit level. Focus on maintaining motivation and setting clear goals.';
    } else if (score >= 40) {
      return 'Moderate grit level. Consider seeking academic counseling and developing resilience strategies.';
    } else {
      return 'Low grit level. Strongly recommend seeking academic counseling and developing support systems.';
    }
  }

  // Get all students (for dashboard)
  async getAllStudents() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockStudents = [
          {
            id: 1,
            name: 'Firman Maulana',
            studentId: 'TI19220003',
            gritScore: 95,
            status: 'Strong',
            recommendation: 'Excellent grit level! Continue current strategies.',
            dateAnalyzed: '2024-01-15'
          },
          {
            id: 2,
            name: 'Rizal',
            studentId: 'TI19220004',
            gritScore: 85,
            status: 'Strong',
            recommendation: 'Excellent grit level! Continue current strategies.',
            dateAnalyzed: '2024-01-14'
          },
          {
            id: 3,
            name: 'Melinda',
            studentId: 'TI19220005',
            gritScore: 72,
            status: 'Moderate',
            recommendation: 'Good grit level. Focus on maintaining motivation.',
            dateAnalyzed: '2024-01-13'
          },
          {
            id: 4,
            name: 'Nora',
            studentId: 'TI19220006',
            gritScore: 58,
            status: 'Low',
            recommendation: 'Consider seeking academic counseling.',
            dateAnalyzed: '2024-01-12'
          },
          {
            id: 5,
            name: 'Herman',
            studentId: 'TI19220007',
            gritScore: 91,
            status: 'Strong',
            recommendation: 'Outstanding grit! Consider mentoring others.',
            dateAnalyzed: '2024-01-11'
          },
          {
            id: 6,
            name: 'Hasan',
            studentId: 'TI19220008',
            gritScore: 65,
            status: 'Moderate',
            recommendation: 'Good foundation. Set clear long-term goals.',
            dateAnalyzed: '2024-01-10'
          }
        ];

        resolve({
          success: true,
          data: mockStudents
        });
      }, 1000);
    });
  }
}

export default new ApiService();

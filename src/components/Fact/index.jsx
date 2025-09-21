import React, { useState, useEffect } from 'react';

// === CSS for the Marquee Effect ===
const marqueeStyles = `
  .marquee-container { 
    /* Default styles for desktop */
    width: 90%;
    max-width: 1200px; /* Prevents it from becoming too wide on large screens */
    margin: 0 auto; /* Centers the container */
    overflow: hidden;
    background: linear-gradient(135deg, #e0f2f7 0%, #b2dfdb 50%, #e0f2f7 100%);
    padding: 12px;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(15, 118, 110, 0.1);
    border-bottom: 1px solid rgba(15, 118, 110, 0.1);
    border-radius:10px;
  }

  .marquee-content { 
    display: inline-block;
    padding-left: 100%;
    animation: marquee 35s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .marquee-text {
    font-size: 1.1rem;
    color: #0f766e;
    font-weight: 600;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  .loading-text {
    font-style: italic;
    color: #14b8a6;
    padding-left: 100%;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }
  
  /* Media query for mobile responsiveness */
  @media (max-width: 768px) {
    .marquee-container {
      width: 95%; /* Use more of the screen width on smaller devices */
    }

    .marquee-text, .loading-text {
      font-size: 0.95rem; /* Make font slightly smaller on mobile */
    }
  }
`;

const MedicalFactMarquee = () => {
  const [fact, setFact] = useState("Loading medical fact...");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Inject styles when component mounts
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = marqueeStyles;
    document.head.appendChild(styleSheet);

    // Clean up styles when component unmounts
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  useEffect(() => {
    const fetchMedicalFact = async () => {
      setIsLoading(true);
      setError(null);

      // Array of common medical conditions with ICD-10 codes for MedlinePlus API
      const medicalTopics = [
        { code: 'I25', system: '2.16.840.1.113883.6.90', emoji: '🩺' }, // Heart disease
        { code: 'E11', system: '2.16.840.1.113883.6.90', emoji: '🩸' }, // Diabetes
        { code: 'I10', system: '2.16.840.1.113883.6.90', emoji: '💓' }, // Hypertension
        { code: 'J44', system: '2.16.840.1.113883.6.90', emoji: '🫁' }, // COPD
        { code: 'M79.3', system: '2.16.840.1.113883.6.90', emoji: '🦴' }, // Osteoporosis
        { code: 'F32', system: '2.16.840.1.113883.6.90', emoji: '🧠' }, // Depression
        { code: 'C78', system: '2.16.840.1.113883.6.90', emoji: '🎗️' }, // Cancer prevention
      ];

      try {
        // Select a random medical topic
        const randomTopic = medicalTopics[Math.floor(Math.random() * medicalTopics.length)];

        // MedlinePlus Connect API URL
        // Note: This is a proxy URL. You would need to set up a proxy to forward this request
        // to https://connect.medlineplus.gov/service to avoid CORS issues.
        const apiUrl = `/api/medlineplus/service?mainSearchCriteria.v.c=${randomTopic.code}&mainSearchCriteria.v.cs=${randomTopic.system}&knowledgeResponseType=application/json`;

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Extract medical information from the API response
        if (data && data.feed && data.feed.entry && data.feed.entry.length > 0) {
          const entry = data.feed.entry[0];
          const title = entry.title?._value || 'Medical Information';
          const summary = entry.summary?._value || entry.content?._value;

          if (summary) {
            // Create a concise fact from the summary
            let shortFact = summary.replace(/<[^>]*>/g, ''); // Remove HTML tags
            shortFact = shortFact.substring(0, 150) + (shortFact.length > 150 ? '...' : '');
            setFact(`${randomTopic.emoji} ${title}: ${shortFact}`);
          } else {
            setFact(`${randomTopic.emoji} ${title}: Learn more about this important health topic.`);
          }
        } else {
          // Fallback to predefined facts if API doesn't return expected data
          const fallbackFacts = [
            "🩺 Regular check-ups can help detect health issues early when they're most treatable.",
            "💓 30 minutes of daily exercise can reduce heart disease risk by up to 35%.",
            "🧠 7-9 hours of quality sleep helps brain function and memory consolidation.",
            "🥗 Eating colorful fruits and vegetables provides essential antioxidants for health.",
            "💧 Staying hydrated supports kidney function and helps regulate body temperature.",
            "🦴 Weight-bearing exercises help maintain bone density and prevent osteoporosis.",
          ];
          const randomFallback = fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)];
          setFact(randomFallback);
        }
      } catch (e) {
        console.error("Failed to fetch medical fact:", e);
        // Use fallback facts when API fails
        const fallbackFacts = [
          "🩺 Regular medical screenings are key to early detection and prevention.",
          "💓 Heart disease remains the leading cause of death, but it's largely preventable.",
          "🧠 Mental health is just as important as physical health - seek help when needed.",
          "🥗 A balanced diet rich in nutrients supports overall health and wellbeing.",
          "💧 Proper hydration is essential for optimal body function and health.",
        ];
        const randomFallback = fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)];
        setFact(randomFallback);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedicalFact();

    // Refresh fact every 45 seconds to give time to read
    const interval = setInterval(fetchMedicalFact, 45000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="marquee-container">
      {isLoading ? (
        <span className="marquee-content loading-text">Loading medical fact...</span>
      ) : error ? (
        <span className="marquee-content marquee-text" style={{ color: '#dc2626' }}>⚠️ {error}</span>
      ) : (
        <span className="marquee-content marquee-text">{fact}</span>
      )}
    </div>
  );
};

export default MedicalFactMarquee;

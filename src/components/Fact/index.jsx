import React, { useState, useEffect, useRef } from 'react';

// === CSS for the Marquee Effect (remains the same) ===
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
    /* The duration is now set dynamically via JavaScript */
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
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
      width: 95%;
    }
    .marquee-text, .loading-text {
      font-size: 0.95rem;
    }
  }
`;

const MedicalFactMarquee = () => {
  const [fact, setFact] = useState("Loading medical fact...");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create a ref to attach to the scrolling content element
  const contentRef = useRef(null);

  // This useEffect handles the dynamic animation speed
  useEffect(() => {
    if (contentRef.current) {
      // Define the desired speed in pixels per second
      const speed = 80;
      // Get the actual width of the content
      const width = contentRef.current.offsetWidth;
      // Calculate the duration needed to travel its own width at the defined speed
      const duration = width / speed;

      // Apply the calculated duration as an inline style
      // A minimum duration prevents glitches with very short text
      contentRef.current.style.animationDuration = `${Math.max(duration, 15)}s`;
    }
  }, [fact, isLoading, error]); // Rerun when the content changes

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

      // NOW WITH 200 TOPICS FOR MAXIMUM VARIETY
      const medicalTopics = [
        // Original 100
        { code: 'I25', emoji: '💓' }, // Coronary Artery Disease
        { code: 'E11', emoji: '🩸' }, // Type 2 Diabetes
        { code: 'I10', emoji: '🩺' }, // Hypertension
        { code: 'J45', emoji: '🫁' }, // Asthma
        { code: 'M19.90', emoji: '🦴' }, // Osteoarthritis
        { code: 'F41.9', emoji: '🧠' }, // Anxiety Disorder
        { code: 'G43', emoji: '🤕' }, // Migraine
        { code: 'K21.9', emoji: '🔥' }, // GERD (Acid Reflux)
        { code: 'N18', emoji: '💧' }, // Chronic Kidney Disease
        { code: 'J30.1', emoji: '🤧' }, // Allergic Rhinitis (Hay Fever)
        { code: 'D64.9', emoji: '💉' }, // Anemia
        { code: 'E78.5', emoji: '🍔' }, // High Cholesterol
        { code: 'E03.9', emoji: '🦋' }, // Hypothyroidism
        { code: 'M81.0', emoji: '💪' }, // Osteoporosis
        { code: 'G47.33', emoji: '😴' }, // Obstructive Sleep Apnea
        { code: 'F32.9', emoji: '☁️' }, // Major Depressive Disorder
        { code: 'L40', emoji: '✋' }, // Psoriasis
        { code: 'B35.1', emoji: '🍄' }, // Athlete's Foot (Tinea pedis)
        { code: 'H10', emoji: '👁️' }, // Conjunctivitis (Pink Eye)
        { code: 'C44', emoji: '☀️' }, // Skin Cancer
        { code: 'N39.0', emoji: '🚻' }, // Urinary Tract Infection
        { code: 'M10.9', emoji: '🦶' }, // Gout
        { code: 'I84', emoji: '🔵' }, // Hemorrhoids
        { code: 'K58', emoji: '🌀' }, // Irritable Bowel Syndrome (IBS)
        { code: 'L23', emoji: '🍁' }, // Allergic Contact Dermatitis
        { code: 'H66', emoji: '👂' }, // Ear Infection (Otitis Media)
        { code: 'B02', emoji: '💥' }, // Shingles (Herpes Zoster)
        { code: 'J02', emoji: '🗣️' }, // Sore Throat (Pharyngitis)
        { code: 'M54.5', emoji: '🏋️' }, // Low Back Pain
        { code: 'R05', emoji: '😷' }, // Cough
        { code: 'L70.0', emoji: '😊' }, // Acne Vulgaris
        { code: 'I48.91', emoji: '📈' }, // Atrial Fibrillation
        { code: 'K29.7', emoji: '🤢' }, // Gastritis
        { code: 'R11.2', emoji: '🤮' }, // Nausea with Vomiting
        { code: 'Z23', emoji: '🛡️' }, // Need for immunization (Vaccination)
        { code: 'G47.00', emoji: '🛌' }, // Insomnia
        { code: 'F17.210', emoji: '🚭' }, // Nicotine Dependence
        { code: 'E66.9', emoji: '⚖️' }, // Obesity
        { code: 'K02', emoji: '🦷' }, // Dental Caries (Cavities)
        { code: 'M25.56', emoji: '🦵' }, // Knee Pain
        { code: 'F43.10', emoji: ' PTSD' }, // Post-Traumatic Stress Disorder (PTSD)
        { code: 'A63.0', emoji: ' warts' }, // Anogenital Warts
        { code: 'D50.9', emoji: ' Fe' }, // Iron Deficiency Anemia
        { code: 'E05.90', emoji: ' ⚡️' }, // Hyperthyroidism
        { code: 'B00', emoji: ' 👄' }, // Herpes Simplex (Cold Sores)
        { code: 'J18.9', emoji: ' 🤒' }, // Pneumonia
        { code: 'N20.0', emoji: ' 💎' }, // Kidney Stones
        { code: 'R42', emoji: ' 💫' }, // Dizziness and Giddiness
        { code: 'M79.1', emoji: ' 😩' }, // Myalgia (Muscle Pain)
        { code: 'T14.90', emoji: ' 🩹' }, // Injury, unspecified (First Aid)
        { code: 'H25', emoji: '🌫️' }, // Cataracts
        { code: 'H40', emoji: '⚫' }, // Glaucoma
        { code: 'L30.9', emoji: '🔴' }, // Eczema (Dermatitis)
        { code: 'K50', emoji: ' Crohn\'s' }, // Crohn's Disease
        { code: 'K51', emoji: ' Colitis' }, // Ulcerative Colitis
        { code: 'G35', emoji: ' MS' }, // Multiple Sclerosis
        { code: 'G20', emoji: ' Parkinson\'s' }, // Parkinson's Disease
        { code: 'F03', emoji: ' Dementia' }, // Dementia
        { code: 'C50', emoji: '🎀' }, // Breast Cancer
        { code: 'C61', emoji: ' Prostate' }, // Prostate Cancer
        { code: 'C34', emoji: ' Lung' }, // Lung Cancer
        { code: 'C18', emoji: ' Colon' }, // Colon Cancer
        { code: 'B18.2', emoji: ' Hepatitis C' }, // Hepatitis C
        { code: 'B18.1', emoji: ' Hepatitis B' }, // Hepatitis B
        { code: 'B20', emoji: ' HIV/AIDS' }, // HIV/AIDS
        { code: 'A15', emoji: ' TB' }, // Tuberculosis
        { code: 'A90', emoji: '🦟' }, // Dengue Fever
        { code: 'A92.0', emoji: ' Chikungunya' }, // Chikungunya
        { code: 'B77', emoji: '🪱' }, // Ascariasis (Roundworm)
        { code: 'D66', emoji: ' Hemophilia' }, // Hemophilia
        { code: 'D57', emoji: ' Sickle Cell' }, // Sickle Cell Anemia
        { code: 'E10', emoji: ' Type 1 Diabetes' }, // Type 1 Diabetes
        { code: 'E72.0', emoji: ' PKU' }, // Phenylketonuria (PKU)
        { code: 'G40', emoji: ' Epilepsy' }, // Epilepsy
        { code: 'I50', emoji: ' Heart Failure' }, // Heart Failure
        { code: 'I63', emoji: ' Stroke' }, // Stroke
        { code: 'J44', emoji: ' COPD' }, // COPD
        { code: 'K74.6', emoji: ' Cirrhosis' }, // Cirrhosis of the Liver
        { code: 'L20', emoji: ' Atopic Dermatitis' }, // Atopic Dermatitis
        { code: 'M05', emoji: ' RA' }, // Rheumatoid Arthritis
        { code: 'M32', emoji: ' Lupus' }, // Lupus
        { code: 'N04', emoji: ' Nephrotic Syndrome' }, // Nephrotic Syndrome
        { code: 'O24.4', emoji: ' Gestational Diabetes' }, // Gestational Diabetes
        { code: 'P07.3', emoji: '👶' }, // Preterm Birth
        { code: 'Q90', emoji: ' Down Syndrome' }, // Down Syndrome
        { code: 'R51', emoji: ' Headache' }, // Headache
        { code: 'R56', emoji: ' Seizures' }, // Seizures
        { code: 'T30.0', emoji: '🔥' }, // Burns
        { code: 'T79.4', emoji: ' Shock' }, // Traumatic Shock
        { code: 'Z38.0', emoji: ' Newborn' }, // Newborn Health
        { code: 'Z37.0', emoji: ' Pregnancy' }, // Pregnancy Health
        { code: 'Z72.0', emoji: ' Tobacco Use' }, // Tobacco Use
        { code: 'Z72.4', emoji: ' Inappropriate Diet' }, // Nutrition
        { code: 'Z71.3', emoji: ' Dietary Counseling' }, // Healthy Eating
        { code: 'Z68', emoji: ' BMI' }, // Body Mass Index (BMI)
        { code: 'Z87.891', emoji: ' Personal History' }, // Medical History
        { code: 'Z91.1', emoji: ' Patient Noncompliance' }, // Treatment Adherence
        { code: 'Z96.6', emoji: ' Orthopedic Joint' }, // Joint Replacement
        { code: 'Z95.1', emoji: ' Aortocoronary Bypass' }, // Heart Bypass
        { code: 'Z99.2', emoji: ' Kidney Dialysis' },  // Kidney Dialysis
        
        // Newly Added 100
        { code: 'N80.9', emoji: '🚺' }, // Endometriosis
        { code: 'E28.2', emoji: '🥚' }, // Polycystic Ovary Syndrome (PCOS)
        { code: 'D25.9', emoji: '🧬' }, // Uterine Fibroids
        { code: 'N95.1', emoji: '⏳' }, // Menopause
        { code: 'F52.21', emoji: '🔵' }, // Erectile Dysfunction
        { code: 'N40.1', emoji: 'Prostate' }, // Benign Prostatic Hyperplasia (BPH)
        { code: 'C62.90', emoji: '🎗️' }, // Testicular Cancer
        { code: 'C56.9', emoji: '🎗️' }, // Ovarian Cancer
        { code: 'C53.9', emoji: '🎗️' }, // Cervical Cancer
        { code: 'B97.7', emoji: '🦠' }, // Human Papillomavirus (HPV)
        { code: 'A56.00', emoji: '🦠' }, // Chlamydia
        { code: 'A54.9', emoji: '🦠' }, // Gonorrhea
        { code: 'A53.9', emoji: '🦠' }, // Syphilis
        { code: 'A05.9', emoji: '🤢' }, // Food Poisoning
        { code: 'A08.11', emoji: '🤮' }, // Norovirus Gastroenteritis
        { code: 'J11.1', emoji: '🤧' }, // Influenza
        { code: 'J00', emoji: '🥶' }, // Common Cold
        { code: 'J20.9', emoji: '🫁' }, // Bronchitis
        { code: 'J01.90', emoji: '👃' }, // Sinusitis
        { code: 'K35.80', emoji: '🔪' }, // Appendicitis
        { code: 'K80.20', emoji: '💎' }, // Gallstones
        { code: 'K90.0', emoji: '🍞' }, // Celiac Disease
        { code: 'E73.9', emoji: '🥛' }, // Lactose Intolerance
        { code: 'E55.9', emoji: '☀️' }, // Vitamin D Deficiency
        { code: 'E86.0', emoji: '💧' }, // Dehydration
        { code: 'T67.0XXA', emoji: '🔥' }, // Heat Stroke
        { code: 'T68.XXA', emoji: '❄️' }, // Hypothermia
        { code: 'S06.0X0A', emoji: '🧠' }, // Concussion
        { code: 'S93.409A', emoji: '🦶' }, // Ankle Sprain
        { code: 'S52.90XA', emoji: '💪' }, // Arm Fracture
        { code:- 'G56.00', emoji: '🖐️' }, // Carpal Tunnel Syndrome
        { code: 'M72.2', emoji: '👣' }, // Plantar Fasciitis
        { code: 'M41.9', emoji: 'Spine' }, // Scoliosis
        { code: 'M51.26', emoji: '💿' }, // Herniated Disc
        { code: 'G25.81', emoji: '🦵' }, // Restless Legs Syndrome
        { code: 'G47.419', emoji: '😴' }, // Narcolepsy
        { code: 'H93.19', emoji: '👂' }, // Tinnitus
        { code: 'H91.90', emoji: '🔇' }, // Hearing Loss
        { code: 'H35.30', emoji: '👁️' }, // Macular Degeneration
        { code: 'L03.119', emoji: '🔴' }, // Cellulitis
        { code: 'B86', emoji: '🐜' }, // Scabies
        { code: 'B85.2', emoji: '🐜' }, // Head Lice
        { code: 'T63.441A', emoji: '🐝' }, // Bee Sting
        { code: 'W55.81XA', emoji: '🐕' }, // Animal Bite
        { code: 'L55.9', emoji: '☀️' }, // Sunburn
        { code: 'L23.7', emoji: '🌿' }, // Poison Ivy Dermatitis
        { code: 'T75.3XXA', emoji: '🚗' }, // Motion Sickness
        { code: 'G47.25', emoji: '✈️' }, // Jet Lag
        { code: 'F41.0', emoji: '😱' }, // Panic Attack
        { code: 'F40.10', emoji: '👥' }, // Social Anxiety
        { code: 'F42.9', emoji: '🤔' }, // Obsessive-Compulsive Disorder (OCD)
        { code: 'F31.9', emoji: '🎭' }, // Bipolar Disorder
        { code: 'F20.9', emoji: '👤' }, // Schizophrenia
        { code: 'F50.00', emoji: '🍽️' }, // Anorexia Nervosa
        { code: 'F90.9', emoji: 'Hyperactivity' }, // ADHD
        { code: 'F84.0', emoji: '🧩' }, // Autism Spectrum Disorder
        { code: 'G30.9', emoji: '🧠' }, // Alzheimer's Disease
        { code: 'G12.21', emoji: 'ALS' }, // Amyotrophic Lateral Sclerosis (ALS)
        { code: 'G80.9', emoji: '♿' }, // Cerebral Palsy
        { code: 'B27.90', emoji: '🦠' }, // Mononucleosis (Mono)
        { code: 'A69.20', emoji: '🦟' }, // Lyme Disease
        { code: 'B54', emoji: '🦟' }, // Malaria
        { code: 'A82.9', emoji: '🐕' }, // Rabies
        { code: 'A35', emoji: '🔩' }, // Tetanus
        { code: 'A37.90', emoji: '😷' } // Whooping Cough (Pertussis)
      ];


      const system = '2.16.840.1.113883.6.90';

      try {
        const randomTopic = medicalTopics[Math.floor(Math.random() * medicalTopics.length)];
        const apiUrl = `/api/medlineplus/service?mainSearchCriteria.v.c=${randomTopic.code}&mainSearchCriteria.v.cs=${system}&knowledgeResponseType=application/json`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data && data.feed && data.feed.entry && data.feed.entry.length > 0) {
          const entry = data.feed.entry[0];
          const title = entry.title?._value || 'Medical Information';
          const summary = entry.summary?._value || entry.content?._value;
          if (summary) {
            let cleanSummary = summary.replace(/<[^>]*>/g, '');
            setFact(`${randomTopic.emoji} ${title}: ${cleanSummary}`);
          } else {
            setFact(`${randomTopic.emoji} ${title}: Learn more about this important health topic.`);
          }
        } else {
          throw new Error("No relevant medical information was found for this topic.");
        }
      } catch (e) {
        console.error("Failed to fetch medical fact:", e);
        setError("Could not retrieve a medical fact. Please try again later.");
        setFact("🩺 Regular health check-ups are key to early detection and prevention of diseases.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedicalFact();
    const interval = setInterval(fetchMedicalFact, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="marquee-container">
      {isLoading ? (
        <span ref={contentRef} className="marquee-content loading-text">Loading medical fact...</span>
      ) : error ? (
        <span ref={contentRef} className="marquee-content marquee-text" style={{ color: '#dc2626' }}>⚠️ {error}</span>
      ) : (
        <span ref={contentRef} className="marquee-content marquee-text">{fact}</span>
      )}
    </div>
  );
};

export default MedicalFactMarquee;
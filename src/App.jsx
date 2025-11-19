import React, { useState, useEffect } from "react";
import "./App.css";
import { HeroGeometric } from "./components/ui/shape-landing-hero";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Initialize theme on mount and update when isDark changes
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const teamMembers = [
    {
      name: "Dr. Rasmus Erlemann",
      image: "/team/rasmus-erlemann.jpg",
      alt: "Dr. Rasmus Erlemann"
    },
    {
      name: "Charles Morris",
      image: "/team/charles-morris.jpg",
      alt: "Charles Morris"
    },
    {
      name: "Sanjyot Sathe",
      image: "/team/sanjyot-sathe.jpg",
      alt: "Sanjyot Sathe"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="page">
      {/* Nav - positioned over hero */}
      <header className="nav">
        <div className="nav-left">
          <img 
            src="/team/logo.png" 
            alt="ClaritasQuantum Logo" 
            className="logo-image"
            onError={(e) => {
              // Try alternative formats if logo.png doesn't exist
              const formats = ['/team/logo.jpg', '/logo.png', '/logo.svg', '/logo.jpeg'];
              const currentSrc = e.target.src;
              const currentFormat = currentSrc.split('.').pop();
              const nextFormatIndex = formats.findIndex(f => f.includes(currentFormat)) + 1;
              
              if (nextFormatIndex < formats.length) {
                e.target.src = formats[nextFormatIndex];
              } else {
                // Fallback to text logo if no image formats work
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }
            }}
          />
          <div className="logo-circle" style={{ display: 'none' }}>Q</div>
          <div className="logo-text">
            <span className="logo-name">ClaritasQuantum</span>
            <span className="logo-tagline">Securing Tomorrow, Today</span>
          </div>
        </div>
        <div className="nav-right">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#who-we-are" className="nav-link">
            Who We Are
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </header>

      {/* Animated Hero Section */}
      <div className="hero-geometric-container">
        <HeroGeometric 
          title1="ClaritasQuantum"
          title2="Securing Tomorrow, Today"
        />
      </div>

      {/* Original Hero Section - keeping for content below */}
      <main className="hero" style={{ marginTop: 0 }}>
        <div className="hero-container">
          <div className="hero-text">
            <h1>
              Know your <span className="highlight">post-quantum risk</span> before
              attackers do.
            </h1>
            <p className="hero-subtitle">
              We help build quantum-safe infrastructure by uncovering assets vulnerable to post-quantum threats. 
              Our PQ Score reveals quantum exposure and highlights the key systems impacting your security posture.
            </p>

            <div className="hero-actions" id="cta">
              <a href="mailto:ssathe1@charlotte.edu?subject=Schedule a PQ Readiness Call" className="primary-btn">
                Schedule a PQ Readiness Call
              </a>
              <button className="ghost-btn">View Sample Report</button>
            </div>

            <div className="hero-meta">
              <div className="meta-item">
                <span className="meta-label">Focus</span>
                <span className="meta-value">Post-Quantum Readiness</span>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <span className="meta-label">Approach</span>
                <span className="meta-value">
                  Vendor-neutral • NIST-standardized • Minimal impact
                </span>
              </div>
            </div>
          </div>

          {/* Right side stats card */}
          <div className="hero-card">
          <h2>Example Engagement Snapshot</h2>
          <p className="hero-card-sub">
            External scan & PQ scoring for a large university environment.
          </p>

          <div className="stats-grid">
            <div className="stat">
              <span className="stat-label">Assets discovered</span>
              <span className="stat-value">981</span>
              <span className="stat-note">Domains, IPs & services</span>
            </div>
            <div className="stat">
              <span className="stat-label">Crypto algorithms</span>
              <span className="stat-value">13</span>
              <span className="stat-note">7 quantum-vulnerable</span>
            </div>
            <div className="stat">
              <span className="stat-label">PQ Readiness Score</span>
              <span className="stat-value score-bad">65 / 100</span>
              <span className="stat-note">Grade: D (room to improve)</span>
            </div>
            <div className="stat">
              <span className="stat-label">Recommended path</span>
              <span className="stat-note">
                Migrate to ML-KEM for key exchange & ML-DSA for signatures.
              </span>
            </div>
          </div>

          <div className="hero-card-footer">
            <span className="pill">Pilot-proven</span>
            <span className="pill pill-outline">
              Built on NIST & CNSA 2.0 guidance
            </span>
          </div>
          </div>
        </div>
      </main>

      {/* Mission */}
      <section className="mission" id="about">
        <h2>Our Mission</h2>
        <div className="mission-grid">
          <div className="mission-item">
            <div className="mission-icon">
              <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="4" fill="currentColor"/>
                <ellipse cx="20" cy="20" rx="12" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8"/>
                <ellipse cx="20" cy="20" rx="12" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" transform="rotate(60 20 20)"/>
                <ellipse cx="20" cy="20" rx="12" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" transform="rotate(120 20 20)"/>
                <circle cx="20" cy="14" r="2" fill="currentColor"/>
                <circle cx="28" cy="23" r="2" fill="currentColor"/>
                <circle cx="12" cy="23" r="2" fill="currentColor"/>
              </svg>
            </div>
            <p>
              Help build quantum-safe infrastructure by uncovering assets vulnerable to post-quantum threats.
            </p>
          </div>
          <div className="mission-item">
            <div className="mission-icon">
              <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="8" y1="32" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M32 32 L28 30 M32 32 L28 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 8 L6 12 M8 8 L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="10" y="28" width="3" height="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="15" y="24" width="3" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="20" y="20" width="3" height="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="25" y="16" width="3" height="16" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M11 30 L15 26 L19 22 L23 18 L27 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27 14 L25 16 M27 14 L25 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p>
              Deliver a PQ Score that reveals quantum exposure and highlights the key systems impacting their security posture.
            </p>
          </div>
          <div className="mission-item">
            <div className="mission-icon">
              <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <ellipse cx="20" cy="20" rx="12" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <ellipse cx="20" cy="20" rx="12" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(90 20 20)"/>
                <path d="M8 20 A12 12 0 0 1 32 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M32 20 A12 12 0 0 1 8 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <circle cx="32" cy="20" r="1.5" fill="currentColor"/>
                <circle cx="8" cy="20" r="1.5" fill="currentColor"/>
                <path d="M32 20 L30 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 20 L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p>
              Build a unified ontology of internal and external assets that empowers next-generation cybersecurity visibility, analysis, and defense.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="features">
        <h2>What We Do</h2>
        <p className="features-sub">
          Comprehensive post-quantum readiness solutions designed to protect your infrastructure 
          while ensuring compliance and providing actionable security roadmaps.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Post-Quantum Readiness Scoring</h3>
            <p>
              Deliver a comprehensive PQ Score that quantifies your quantum exposure and 
              identifies the critical systems impacting your security posture.
            </p>
          </div>
          <div className="feature-card">
            <h3>Asset Mapping & Analysis</h3>
            <p>
              Map and analyze assets and cryptographic dependencies to reveal vulnerabilities 
              and strengthen quantum-era resilience across your entire infrastructure.
            </p>
          </div>
          <div className="feature-card">
            <h3>Compliance & Roadmaps</h3>
            <p>
              Ensure compliance with evolving post-quantum regulations while equipping you 
              with practical, ready-to-act security roadmaps tailored to your environment.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="differentiators">
        <h2>Our Differentiators</h2>
        <p className="differentiators-sub">
          What sets ClaritasQuantum apart in the post-quantum security landscape.
        </p>

        <div className="differentiators-grid">
          <div className="differentiator-card">
            <h3>PQ Cryptography Expertise</h3>
            <p>
              Deep expertise across all major NIST-standardized algorithms, ensuring 
              you receive guidance based on the latest cryptographic standards.
            </p>
          </div>
          <div className="differentiator-card">
            <h3>Vendor-Neutral Approach</h3>
            <p>
              Our vendor-neutral methodology ensures optimal solution fit for your 
              specific needs, free from product bias or vendor lock-in.
            </p>
          </div>
          <div className="differentiator-card">
            <h3>Proven Assessment Framework</h3>
            <p>
              Battle-tested assessment framework designed for minimal operational impact 
              while delivering comprehensive insights into your quantum readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are" id="who-we-are">
        <h2>Who We Are</h2>
        <div className="team-carousel-container">
          <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous slide">
            <span>‹</span>
          </button>
          <div className="team-carousel">
            <div 
              className="team-carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="team-photo">
                    <img 
                      src={member.image} 
                      alt={member.alt}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'linear-gradient(135deg, #a5b4fc 0%, rgba(255, 255, 255, 0.9) 50%, #fda4af 100%)';
                      }}
                    />
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next slide">
            <span>›</span>
          </button>
        </div>
        <div className="carousel-dots">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Simple contact / footer */}
      <footer className="footer" id="contact">
        <div className="footer-main">
          <div>
            <h4>Get in touch</h4>
            <p>
              Ready to discuss a pilot, proof of concept, or full enterprise
              assessment?
            </p>
          </div>
          <div className="footer-actions">
            <a href="mailto:ssathe1@charlotte.edu" className="primary-btn">
              Email Us
            </a>
            <a
              href="https://www.claritasquantum.com"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              claritasquantum.com
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <span>© {new Date().getFullYear()} ClaritasQuantum</span>
            <span className="dot">•</span>
            <span>Securing Tomorrow, Today</span>
          </div>
          <div className="footer-nsf">
            <img src="/logo/nsf_logo.jpg" alt="NSF Logo" className="nsf-logo" />
            <span>Funded by NSF I-Corps</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

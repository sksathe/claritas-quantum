import React, { useState, useEffect } from "react";
import "./App.css";
import { HeroGeometric } from "./components/ui/shape-landing-hero";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    // Initialize theme on mount and update when isDark changes
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="page">
      {/* Nav - positioned over hero */}
      <header className="nav">
        <div className="nav-left">
          <img 
            src="/logo.png" 
            alt="ClaritasQuantum Logo" 
            className="logo-image"
            onLoad={(e) => {
              // Hide text logo when image loads successfully
              const textLogo = e.target.nextElementSibling?.nextElementSibling;
              if (textLogo) {
                textLogo.style.display = 'none';
              }
            }}
            onError={(e) => {
              // Try alternative formats if logo.png doesn't exist
              const formats = ['/logo.svg', '/logo.jpg', '/logo.jpeg'];
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
              <button className="primary-btn">
                Schedule a PQ Readiness Call
              </button>
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
            <div className="mission-icon">🔒</div>
            <p>
              Help build quantum-safe infrastructure by uncovering assets vulnerable to post-quantum threats.
            </p>
          </div>
          <div className="mission-item">
            <div className="mission-icon">📊</div>
            <p>
              Deliver a PQ Score that reveals quantum exposure and highlights the key systems impacting their security posture.
            </p>
          </div>
          <div className="mission-item">
            <div className="mission-icon">🌐</div>
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
        <div className="team-grid">
          <div className="team-member">
            <div className="team-photo">
              <img 
                src="/team/rasmus-erlemann.jpg" 
                alt="Dr. Rasmus Erlemann"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #a5b4fc 0%, rgba(255, 255, 255, 0.9) 50%, #fda4af 100%)';
                }}
              />
            </div>
            <div className="team-info">
              <h3>Dr. Rasmus Erlemann</h3>
              <p className="team-role">Technical Lead</p>
              <p className="team-bio">
                Dr. Rasmus Erlemann brings 15 years of experience in cybersecurity and data science, 
                with extensive research conducted at UNCC and NTNU. His expertise drives our technical 
                innovation and ensures our solutions meet the highest standards of post-quantum security.
              </p>
            </div>
          </div>

          <div className="team-member">
            <div className="team-photo">
              <img 
                src="/team/david-yu.jpg" 
                alt="Dr. David Yu"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #a5b4fc 0%, rgba(255, 255, 255, 0.9) 50%, #fda4af 100%)';
                }}
              />
            </div>
            <div className="team-info">
              <h3>Dr. David Yu</h3>
              <p className="team-role">Industry Mentor</p>
              <p className="team-bio">
                Dr. David Yu brings over 20 years of global experience in finance, investment, and valuation. 
                His background includes leadership roles at Inception, AAVA, Bank of America Merrill Lynch, 
                Libra Group, NYU Shanghai, and Johns Hopkins University, providing strategic guidance to our team.
              </p>
            </div>
          </div>

          <div className="team-member">
            <div className="team-photo">
              <img 
                src="/team/charles-morris.jpg" 
                alt="Charles Morris"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #a5b4fc 0%, rgba(255, 255, 255, 0.9) 50%, #fda4af 100%)';
                }}
              />
            </div>
            <div className="team-info">
              <h3>Charles Morris</h3>
              <p className="team-role">Co-Entrepreneurial Lead</p>
              <p className="team-bio">
                Charles Morris is a BS student in Computer Science at UNCC, holding CompTIA Security+ and 
                Network+ certifications. He has experience building AI-driven platforms and has successfully 
                completed the NSF I-Corps Regional program, bringing entrepreneurial energy to our mission.
              </p>
            </div>
          </div>

          <div className="team-member">
            <div className="team-photo">
              <img 
                src="/team/sanjyot-sathe.jpg" 
                alt="Sanjyot Sathe"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #a5b4fc 0%, rgba(255, 255, 255, 0.9) 50%, #fda4af 100%)';
                }}
              />
            </div>
            <div className="team-info">
              <h3>Sanjyot Sathe</h3>
              <p className="team-role">Co-Entrepreneurial Lead</p>
              <p className="team-bio">
                Sanjyot Sathe is an MS student in Computer Science at UNCC, with expertise in cloud computing, 
                DevOps automation, and microservice architectures. She previously served as Software Engineer II 
                at UBS, bringing real-world industry experience to our technical development.
              </p>
            </div>
          </div>
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
            <a href="mailto:contact@claritasquantum.com" className="primary-btn">
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
          <span>© {new Date().getFullYear()} ClaritasQuantum</span>
          <span className="dot">•</span>
          <span>Securing Tomorrow, Today</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

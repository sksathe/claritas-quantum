import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page">
      {/* Nav */}
      <header className="nav">
        <div className="nav-left">
          <div className="logo-circle">Q</div>
          <div className="logo-text">
            <span className="logo-name">ClaritasQuantum</span>
            <span className="logo-tagline">Securing Tomorrow, Today</span>
          </div>
        </div>
        <div className="nav-right">
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#cta" className="nav-button">
            Book a Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="hero">
        <div className="hero-text">
          <h1>
            Know your <span className="highlight">post-quantum risk</span> before
            attackers do.
          </h1>
          <p className="hero-subtitle">
            ClaritasQuantum helps enterprises map their internal and external
            cryptographic assets, quantify post-quantum exposure, and build a
            practical migration roadmap.
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
              <span className="meta-label">What we do</span>
              <span className="meta-value">
                External attack surface + internal crypto inventory
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
      </main>

      {/* Features */}
      <section className="features" id="about">
        <h2>What ClaritasQuantum Delivers</h2>
        <p className="features-sub">
          Start with a lightweight assessment. Leave with a clear, prioritized
          plan to get quantum-ready.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3>External Attack Surface Scan</h3>
            <p>
              Enumerate public-facing assets, TLS endpoints, and exposed
              services. Identify legacy crypto, weak cipher suites, and
              high-impact CVEs.
            </p>
          </div>
          <div className="feature-card">
            <h3>Internal Crypto Inventory</h3>
            <p>
              Map certificates, keys, databases, and code paths across cloud and
              on-prem to build a true cryptographic bill of materials (CBOM).
            </p>
          </div>
          <div className="feature-card">
            <h3>PQ Readiness Score & Roadmap</h3>
            <p>
              Quantify post-quantum exposure using graph-based scoring and get a
              phased migration roadmap aligned with NIST PQC and CNSA 2.0.
            </p>
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

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BarChart3,
  CalendarClock,
  ChevronRight,
  FileText,
  Mail,
  Menu,
  PieChart,
  ShieldCheck,
  Star,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";
import "./styles.css";

function ObraLogo() {
  return (
    <span className="logo-lockup" aria-hidden="true">
      <span>
        <strong>Obra<span>HR</span></strong>
        <small>Building better workplaces</small>
      </span>
    </span>
  );
}

const stats = [
  { icon: UsersRound, value: "500+", label: "Happy Clients" },
  { icon: FileText, value: "10K+", label: "Employees Managed" },
  { icon: Star, value: "99%", label: "Customer Satisfaction" },
];

const features = [
  {
    icon: UsersRound,
    tone: "mint",
    title: "Employee Management",
    text: "Store employee data, departments, locations, profiles, and 201 files in one secure workspace.",
  },
  {
    icon: CalendarClock,
    tone: "blue",
    title: "Time & Attendance",
    text: "Track time, attendance, shifts, overtime, rest days, and activity logs with less manual checking.",
  },
  {
    icon: WalletCards,
    tone: "violet",
    title: "Payroll Management",
    text: "Run payroll periods, payslips, compensation, recurring deductions, and adjustments with confidence.",
  },
  {
    icon: ShieldCheck,
    tone: "gold",
    title: "Compliance Ready",
    text: "Prepare contribution settings, government reports, and role-aware payroll records for local workflows.",
  },
  {
    icon: PieChart,
    tone: "teal",
    title: "Reports & Analytics",
    text: "Get clear views of attendance, payroll, leaves, and HR activity so teams can decide faster.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page-shell">
      <section className="landing-card" id="home">
        <header className="site-header">
          <a className="brand" href="#home" aria-label="ObraHR home">
            <ObraLogo />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About Us</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-actions">
            <a className="ghost-button" href="#contact">Log In</a>
            <a className="blue-button" href="#contact">Get Started</a>
          </div>
          <button
            className="mobile-menu"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
            <a href="#resources" onClick={closeMenu}>Resources</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <h1>Smarter HR. Stronger Teams.</h1>
            <p>
              ObraHR helps organizations streamline HR processes, improve
              employee experience, and build a better workplace for everyone.
            </p>
            <div className="hero-actions">
              <a className="blue-button large" href="#contact">Get Started</a>
              <a className="outline-button large" href="#contact">
                Book a Demo
                <ChevronRight size={18} />
              </a>
            </div>
            <div className="stats-row" aria-label="ObraHR platform stats">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="stat-item" key={item.label}>
                    <Icon size={30} />
                    <div>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero-visual" aria-label="Meet BAO, your HR buddy">
            <div className="bao-orb" />
            <div className="dot-field" />
            <img className="bao-hero" src="/brand/bao/bao-guide.png" alt="BAO, the ObraHR carabao mascot pointing as a helpful HR guide" />
            <div className="meet-bao">
              <span className="arrow-line" />
              <strong>Meet BAO</strong>
              <small>Your HR Buddy</small>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <h2>Everything You Need to Manage Your People</h2>
            <p>ObraHR brings all your HR functions together in one easy-to-use platform.</p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-card" key={feature.title}>
                  <span className={`feature-icon ${feature.tone}`}>
                    <Icon size={30} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="simple-band" id="about">
          <div className="laptop-preview">
            <img src="/screenshots/dashboard.png" alt="ObraHR dashboard analytics preview" />
          </div>
          <div className="simple-copy">
            <h2>HR Made Simple. People Made Stronger.</h2>
            <p>
              ObraHR helps HR, payroll, and operations teams focus on what
              matters most: people, clarity, and growth.
            </p>
            <a className="blue-button large" href="#contact">
              Get Started Today
              <ChevronRight size={18} />
            </a>
          </div>
          <img className="bao-peek" src="/brand/bao/bao-self-service.png" alt="BAO smiling with a tablet" />
        </section>

        <section className="hidden-anchor" id="pricing" aria-label="Pricing" />
        <section className="hidden-anchor" id="resources" aria-label="Resources" />
        <section className="contact-strip" id="contact">
          <div>
            <h2>Ready to introduce ObraHR?</h2>
            <p>Connect this page to your booking form, sales email, or lead capture flow.</p>
          </div>
          <a className="outline-button large" href="mailto:hello@obrahr.com">
            <Mail size={18} />
            Contact Sales
          </a>
        </section>

        <footer className="site-footer">
          <ObraLogo />
          <p>2026 ObraHR. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
            <a href="#contact">Help Center</a>
          </nav>
        </footer>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

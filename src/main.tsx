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

type LegalDialogType = "privacy" | "terms";

const legalContent: Record<
  LegalDialogType,
  {
    title: string;
    intro: string;
    sections: Array<{ heading: string; text: string }>;
  }
> = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how ObraHR collects, uses, and protects information when visitors use this website or contact our team.",
    sections: [
      {
        heading: "Information We Collect",
        text:
          "We may collect contact details, company information, inquiry details, and basic website usage data when you submit a form, email us, or interact with our pages.",
      },
      {
        heading: "How We Use Information",
        text:
          "We use information to respond to inquiries, provide product information, improve the website, support sales conversations, and maintain secure business records.",
      },
      {
        heading: "Data Protection",
        text:
          "We take reasonable administrative and technical steps to protect information from unauthorized access, loss, misuse, or disclosure.",
      },
      {
        heading: "Sharing Information",
        text:
          "We do not sell personal information. We may share limited information with service providers who help us operate the website or respond to requests.",
      },
      {
        heading: "Contact",
        text:
          "For privacy questions or requests, contact us at support@obrahr.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      "These Terms of Service outline the basic terms for using the ObraHR website and requesting information about our HRIS and payroll platform.",
    sections: [
      {
        heading: "Website Use",
        text:
          "You may use this website to learn about ObraHR, request information, and contact our team. You agree not to misuse the site or attempt to disrupt its operation.",
      },
      {
        heading: "Product Information",
        text:
          "Website content is provided for general informational purposes. Features, pricing, availability, and service details may change over time.",
      },
      {
        heading: "Intellectual Property",
        text:
          "The ObraHR name, branding, images, page content, and visual design are owned by ObraHR or its licensors and may not be copied without permission.",
      },
      {
        heading: "No Professional Advice",
        text:
          "Content on this website does not constitute legal, tax, payroll, or compliance advice. Organizations should verify requirements with qualified professionals.",
      },
      {
        heading: "Contact",
        text:
          "For questions about these terms, contact us at support@obrahr.com.",
      },
    ],
  },
};

function LegalDialog({
  type,
  onClose,
}: {
  type: LegalDialogType;
  onClose: () => void;
}) {
  const content = legalContent[type];
  const titleId = `${type}-dialog-title`;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="legal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="legal-dialog-header">
          <div>
            <span>ObraHR</span>
            <h2 id={titleId}>{content.title}</h2>
          </div>
          <button className="dialog-close" type="button" aria-label="Close dialog" onClick={onClose}>
            <X size={22} />
          </button>
        </header>
        <div className="legal-dialog-body">
          <p className="legal-intro">{content.intro}</p>
          {content.sections.map((section) => (
            <article key={section.heading}>
              <h3>{section.heading}</h3>
              <p>{section.text}</p>
            </article>
          ))}
          <p className="legal-note">Last updated: 2026</p>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [legalDialog, setLegalDialog] = useState<LegalDialogType | null>(null);
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
          <a className="outline-button large" href="mailto:support@obrahr.com">
            <Mail size={18} />
            Contact Sales
          </a>
        </section>

        <footer className="site-footer">
          <ObraLogo />
          <p>2026 ObraHR. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            <button type="button" onClick={() => setLegalDialog("privacy")}>Privacy Policy</button>
            <button type="button" onClick={() => setLegalDialog("terms")}>Terms of Service</button>
            <a href="#contact">Help Center</a>
          </nav>
        </footer>
      </section>
      {legalDialog ? <LegalDialog type={legalDialog} onClose={() => setLegalDialog(null)} /> : null}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

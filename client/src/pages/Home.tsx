import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  CircleArrowOutUpRight,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const marketRows = [
  { name: "HDFC Securities", type: "Pre-IPO", sector: "Financial Services", price: "₹ 7,800", move: "+12.4%", positive: true },
  { name: "Tata Capital", type: "Pre-IPO", sector: "Financial Services", price: "₹ 1,100", move: "+8.7%", positive: true },
  { name: "Studds Accessories", type: "Unlisted", sector: "Consumer", price: "₹ 680", move: "+6.2%", positive: true },
  { name: "Bira 91", type: "Unlisted", sector: "F&B", price: "₹ 250", move: "−2.1%", positive: false },
];

const offerings = [
  { number: "01", title: "Pre-IPO access", copy: "Get closer to the companies shaping tomorrow, before they reach the public market.", icon: Sparkles },
  { number: "02", title: "Unlisted shares", copy: "Explore a curated universe of private companies across India's most dynamic sectors.", icon: BarChart3 },
  { number: "03", title: "Delisted & ESOPs", copy: "Navigate complex off-market opportunities with a team that knows the mechanics inside out.", icon: ShieldCheck },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All opportunities");

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-ivory selection:bg-lime selection:text-ink">
      <div className="ticker-bar">
        <div className="ticker-track">
          <span>PRIVATE MARKET INTELLIGENCE</span><span className="ticker-dot">✳</span><span>INDIA'S GROWTH STORY</span><span className="ticker-dot">✳</span><span>ACCESS BEYOND THE INDEX</span><span className="ticker-dot">✳</span><span>PRIVATE MARKET INTELLIGENCE</span><span className="ticker-dot">✳</span><span>INDIA'S GROWTH STORY</span>
        </div>
      </div>

      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="Wealth Wisdom India home" onClick={closeMenu}>
          <span className="brand-symbol"><span /><span /><span /></span>
          <span className="brand-name">WEALTH<br /><em>WISDOM</em></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#opportunities" onClick={closeMenu}>Opportunities</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#market" onClick={closeMenu}>Market pulse</a>
          <a href="#about" onClick={closeMenu}>About WWIPL</a>
          <a className="nav-cta" href="mailto:care@wwipl.com" onClick={closeMenu}>Talk to us <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-vignette" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content page-shell">
            <div className="hero-kicker"><span className="eyebrow-line" /> 19 YEARS IN THE MAKING</div>
            <h1>See the<br /><span>unlisted</span><br />differently<span className="hero-period">.</span></h1>
            <p className="hero-copy">The private market is where tomorrow's most important companies begin. We help you find your place in the story—early, informed, and with confidence.</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#opportunities">Explore opportunities <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#approach">How we work <span>↘</span></a>
            </div>
          </div>
          <div className="hero-side-note">WEALTH WISDOM INDIA PVT. LTD. <span>•</span> EST. 2007</div>
          <div className="hero-bottom page-shell">
            <div className="hero-scroll"><span className="scroll-line" /> Scroll to explore</div>
            <div className="hero-index">01 <span>/</span> 04</div>
          </div>
        </section>

        <section className="intro-section page-shell" id="about">
          <div className="section-label"><span>01</span><span className="label-rule" /> THE LONG VIEW</div>
          <div className="intro-grid">
            <h2>Every great<br />company starts<br /><em>unlisted.</em></h2>
            <div className="intro-body">
              <p className="large-copy">Most investors meet a company after the story is already being told. WWIPL helps you look earlier—at the businesses, founders, and ideas that are still becoming.</p>
              <div className="stat-row">
                <div className="stat-item"><strong>19<span>+</span></strong><span>years of market<br />experience</span></div>
                <div className="stat-item"><strong>500<span>+</span></strong><span>private market<br />opportunities</span></div>
                <div className="stat-item"><strong>01</strong><span>trusted partner<br />through the journey</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="opportunities-section" id="opportunities">
          <div className="page-shell">
            <div className="section-label light"><span>02</span><span className="label-rule" /> WHERE POSSIBILITY LIVES</div>
            <div className="section-heading-row">
              <h2>Find the<br /><em>next chapter.</em></h2>
              <p>We make the private market easier to navigate—so you can spend less time decoding the mechanics and more time understanding the opportunity.</p>
            </div>
            <div className="offering-grid">
              {offerings.map(({ number, title, copy, icon: Icon }) => (
                <a className="offering-card" href="#contact" key={number}>
                  <div className="card-top"><span>{number}</span><Icon size={25} strokeWidth={1.25} /></div>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <div className="card-arrow"><CircleArrowOutUpRight size={20} /></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="market-section page-shell" id="market">
          <div className="section-label"><span>03</span><span className="label-rule" /> MARKET PULSE</div>
          <div className="market-head">
            <div><h2>A signal,<br /><em>not noise.</em></h2><p>Selected names from the private market. For perspective, not prediction.</p></div>
            <a className="text-link dark-link" href="https://wwipl.com/unlisted-share" target="_blank" rel="noreferrer">View all listings <ArrowUpRight size={16} /></a>
          </div>
          <div className="market-tabs" role="tablist" aria-label="Market filters">
            {["All opportunities", "Pre-IPO", "Unlisted"].map((tab) => <button className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)} key={tab}>{tab}</button>)}
          </div>
          <div className="market-table-wrap">
            <div className="market-table market-table-head"><span>Company</span><span>Category</span><span>Sector</span><span>Indicative price</span><span>Signal</span></div>
            {marketRows.filter((row) => activeTab === "All opportunities" || row.type === activeTab.replace("-", "-")).map((row) => (
              <div className="market-table market-row" key={row.name}>
                <strong>{row.name}</strong><span className="pill">{row.type}</span><span>{row.sector}</span><span>{row.price}</span><span className={row.positive ? "positive" : "negative"}>{row.move}</span>
              </div>
            ))}
          </div>
          <p className="table-note">Indicative prices only. Private market investments carry risk and may not be suitable for all investors.</p>
        </section>

        <section className="approach-section" id="approach">
          <div className="page-shell">
            <div className="section-label"><span>04</span><span className="label-rule" /> THE WWIPL APPROACH</div>
            <div className="approach-layout">
              <div className="approach-heading"><h2>Clarity is<br />an <em>edge.</em></h2><p>Access is only the beginning. Our role is to bring structure, context, and care to every decision.</p></div>
              <div className="steps">
                <div className="step"><span>01</span><div><h3>Discover</h3><p>Understand the landscape through research, data, and conversations that go beyond the headline.</p></div></div>
                <div className="step"><span>02</span><div><h3>Decide</h3><p>Get a clear view of the opportunity, the mechanics, and the risks—before you make a move.</p></div></div>
                <div className="step"><span>03</span><div><h3>Stay the course</h3><p>Build with a partner who remains present from first enquiry through the full investment journey.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section page-shell" id="contact">
          <div className="contact-card">
            <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="section-label light"><span>05</span><span className="label-rule" /> START A CONVERSATION</div>
            <h2>Don't follow<br />the crowd.<br /><em>Find the signal.</em></h2>
            <p>Tell us what you're looking for. We'll help you see what's possible.</p>
            <a className="button button-lime" href="mailto:care@wwipl.com">Connect with WWIPL <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <div className="footer-brand"><span className="brand-symbol"><span /><span /><span /></span><span className="brand-name">WEALTH<br /><em>WISDOM</em></span></div>
        <div className="footer-meta"><span>© 2026 Wealth Wisdom India Pvt. Ltd.</span><span>Made for the long view.</span></div>
        <div className="footer-links"><a href="https://wwipl.com/term-n-condition" target="_blank" rel="noreferrer">Terms</a><a href="https://wwipl.com/privacy-policy" target="_blank" rel="noreferrer">Privacy</a><a href="https://www.linkedin.com/company/wealthwisdomindia2/" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </footer>
    </div>
  );
}

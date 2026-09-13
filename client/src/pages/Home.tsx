import { useState } from "react";
import { ArrowUpRight, ChevronRight, Menu, MoveUpRight, Play, Sparkles, TrendingUp, X } from "lucide-react";

const names = [
  ["TATA CAPITAL", "PRE-IPO", "₹1,100", "+8.7%"],
  ["HDFC SECURITIES", "PRE-IPO", "₹7,800", "+12.4%"],
  ["STUDDS", "UNLISTED", "₹680", "+6.2%"],
  ["BIRA 91", "UNLISTED", "₹250", "−2.1%"],
];

const tabs = ["Featured", "Pre-IPO", "Unlisted", "ESOPs"];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Featured");
  return (
    <div className="ww-page">
      <div className="top-rail"><div className="rail-inner"><span>WWIPL PRIVATE MARKET INDEX <b>+14.82%</b></span><span>PRE-IPO ACCESS <i>NOW OPEN</i></span><span>INDIA'S NEXT 100 COMPANIES</span><span>WWIPL PRIVATE MARKET INDEX <b>+14.82%</b></span><span>PRE-IPO ACCESS <i>NOW OPEN</i></span></div></div>
      <header className="ww-header">
        <a className="ww-logo" href="#home"><span className="logo-mark"><i /><i /><i /><i /></span><span><strong>WEALTH</strong><em>WISDOM</em><small>INDIA</small></span></a>
        <nav className={open ? "nav-open" : ""}>
          <a href="#market" onClick={() => setOpen(false)}>Market</a><a href="#access" onClick={() => setOpen(false)}>Access</a><a href="#method" onClick={() => setOpen(false)}>Our edge</a><a href="#insights" onClick={() => setOpen(false)}>Insights</a><a className="header-cta" href="mailto:care@wwipl.com" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <main id="home">
        <section className="command-hero">
          <div className="hero-scanlines" />
          <div className="hero-chart"><svg viewBox="0 0 800 420" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#bcff2c" stopOpacity=".22" /><stop offset="1" stopColor="#bcff2c" stopOpacity="0" /></linearGradient></defs><path className="chart-fill" d="M0 370 L55 342 L90 355 L130 294 L172 305 L220 250 L265 279 L305 220 L346 239 L386 186 L430 215 L462 174 L505 190 L548 122 L590 143 L630 93 L671 112 L720 46 L800 15 L800 420 L0 420Z" /><path className="chart-path" d="M0 370 L55 342 L90 355 L130 294 L172 305 L220 250 L265 279 L305 220 L346 239 L386 186 L430 215 L462 174 L505 190 L548 122 L590 143 L630 93 L671 112 L720 46 L800 15" /></svg><div className="axis-labels"><span>Q1 2023</span><span>Q4 2023</span><span>Q2 2024</span><span>Q4 2024</span><span>NOW</span></div></div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-content">
            <div className="hero-eyebrow"><span className="pulse-dot" /> PRIVATE MARKETS / INDIA <span>↗ LIVE INTELLIGENCE</span></div>
            <h1>Own the<br /><em>before.</em></h1>
            <p>Access the companies building India's next decade—before the market puts a price on the story.</p>
            <div className="hero-actions"><a className="primary-cta" href="#access">Explore private markets <ArrowUpRight size={16} /></a><a className="play-link" href="#method"><span><Play size={11} fill="currentColor" /></span> How WWIPL works</a></div>
            <div className="hero-proof"><span><strong>19+</strong> years in the market</span><span><strong>500+</strong> private opportunities</span><span><strong>01</strong> serious partner</span></div>
          </div>
          <div className="hero-terminal terminal-main"><div className="terminal-top"><span><i /> MARKET PULSE</span><small>09:41:28 IST</small></div><div className="terminal-number">+14.82% <TrendingUp size={18} /></div><div className="terminal-sub">WWIPL PRIVATE MARKET INDEX <span>● LIVE</span></div><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="hero-terminal terminal-float"><span className="terminal-tag">UPCOMING LISTING</span><strong>TATA CAPITAL</strong><small>PRE-IPO / FINANCIAL SERVICES</small><div><b>₹ 1,100</b><em>+8.7%</em></div></div>
          <div className="hero-side-label">WISDOM IS SEEING<br />THE SIGNAL EARLY</div>
          <div className="hero-scroll">SCROLL TO DISCOVER <span>↓</span></div>
        </section>

        <section className="thesis-section" id="access"><div className="section-wrap"><div className="section-kicker"><span>01</span> THE INVESTMENT THESIS</div><div className="thesis-grid"><h2>The most<br />interesting<br /><em>companies</em><br />are still private.</h2><div className="thesis-copy"><p>By the time a company reaches the public market, the easy part of the story is often over. WWIPL gives you a considered way into the part that comes before.</p><a className="arrow-link" href="#method">Why private markets, now <ArrowUpRight size={16} /></a><div className="signal-line"><span>INDIA'S PRIVATE MARKET</span><b /><i>GROWTH STORY ↗</i></div></div></div></div></section>

        <section className="access-section"><div className="section-wrap"><div className="section-kicker pale"><span>02</span> ACCESS, WITHOUT THE NOISE</div><div className="access-head"><h2>Choose your<br /><em>position.</em></h2><p>Curated access to the opportunities that don't show up on a standard brokerage screen.</p></div><div className="access-cards"><article className="access-card card-lime"><div className="card-code">A / 01</div><Sparkles size={24} /><h3>Pre-IPO</h3><p>Get in before a public listing changes the conversation.</p><a href="#market">Explore pre-IPO <ChevronRight size={16} /></a></article><article className="access-card card-blue"><div className="card-code">B / 02</div><div className="card-graph"><span /><span /><span /><span /><span /><span /></div><h3>Unlisted</h3><p>Build exposure to India's private-company ecosystem.</p><a href="#market">Browse unlisted <ChevronRight size={16} /></a></article><article className="access-card card-cream"><div className="card-code">C / 03</div><div className="orbit-small" /><h3>ESOPs & exits</h3><p>Navigate the mechanics of employee shares and secondary deals.</p><a href="#market">See the landscape <ChevronRight size={16} /></a></article></div></div></section>

        <section className="market-section" id="market"><div className="section-wrap"><div className="section-kicker"><span>03</span> THE PRIVATE MARKET SCREEN</div><div className="market-title-row"><div><h2>Names worth<br /><em>knowing.</em></h2><p>Selected opportunities from the WWIPL universe. Not a recommendation—an informed starting point.</p></div><a className="arrow-link" href="https://wwipl.com/unlisted-share" target="_blank" rel="noreferrer">View full market <ArrowUpRight size={16} /></a></div><div className="market-tabs">{tabs.map(tab => <button className={active === tab ? "active" : ""} onClick={() => setActive(tab)} key={tab}>{tab}</button>)}</div><div className="market-list"><div className="market-list-head"><span>Company</span><span>Type</span><span>Indicative price</span><span>Signal</span></div>{names.map((row, index) => <div className="market-list-row" key={row[0]}><span className="company-name"><b>0{index + 1}</b>{row[0]}</span><span className="type-chip">{row[1]}</span><span>{row[2]}</span><span className={row[3].includes("−") ? "down" : "up"}>{row[3]}</span><MoveUpRight size={16} /></div>)}</div></div></section>

        <section className="method-section" id="method"><div className="section-wrap"><div className="section-kicker pale"><span>04</span> THE WWIPL EDGE</div><div className="method-grid"><div><h2>Not just<br /><em>access.</em><br />judgement.</h2><p>We bring more than a list of names. We bring the context to know what deserves your attention—and what doesn't.</p></div><div className="method-steps"><div><span>01</span><h3>See clearly</h3><p>Research, company intelligence, and a lens on the signals beneath the noise.</p></div><div><span>02</span><h3>Move with intent</h3><p>Simple mechanics, direct guidance, and a partner who respects the decision.</p></div><div><span>03</span><h3>Stay informed</h3><p>Because a long-term view is built through conversation, not a one-time transaction.</p></div></div></div></div></section>

        <section className="final-section" id="insights"><div className="final-grid"><div className="final-copy"><div className="section-kicker pale"><span>05</span> THE NEXT MOVE</div><h2>See what the<br /><em>market misses.</em></h2><p>Whether you're building a portfolio or looking for liquidity, start with a sharper conversation.</p><a className="primary-cta" href="mailto:care@wwipl.com">Talk to WWIPL <ArrowUpRight size={16} /></a></div><div className="final-data"><div className="data-title"><span>WWIPL / RESEARCH DESK</span><small>FIELD NOTE 041</small></div><div className="data-quote">“The opportunity is<br />usually hiding in<br /><em>plain sight.</em>”</div><div className="data-footer"><span>INDIA / 2026</span><span>↗ READ THE LATEST</span></div></div></div></section>
      </main>
      <footer className="ww-footer"><a className="ww-logo" href="#home"><span className="logo-mark"><i /><i /><i /><i /></span><span><strong>WEALTH</strong><em>WISDOM</em><small>INDIA</small></span></a><span>© 2026 WEALTH WISDOM INDIA PVT. LTD.</span><div><a href="https://wwipl.com/privacy-policy">Privacy</a><a href="https://wwipl.com/term-n-condition">Terms</a><a href="https://www.linkedin.com/company/wealthwisdomindia2/">LinkedIn</a></div></footer>
    </div>
  );
}

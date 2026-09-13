import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronRight, Menu, MoveUpRight, Play, Search, TrendingUp, X } from "lucide-react";

type Listing = { name: string; type: string; sector: string; price: string; move: string; status: string };

const listings: Listing[] = [
  { name: "Tata Capital", type: "Pre-IPO", sector: "Financial Services", price: "₹ 1,100", move: "+8.7%", status: "Strong interest" },
  { name: "HDFC Securities", type: "Pre-IPO", sector: "Financial Services", price: "₹ 7,800", move: "+12.4%", status: "Active market" },
  { name: "Studds Accessories", type: "Unlisted", sector: "Consumer", price: "₹ 680", move: "+6.2%", status: "Active market" },
  { name: "Bira 91", type: "Unlisted", sector: "Food & Beverage", price: "₹ 250", move: "−2.1%", status: "Watchlist" },
  { name: "ESOP Liquidity Desk", type: "ESOPs", sector: "Secondary transactions", price: "On request", move: "—", status: "Talk to our team" },
];
const tabs = ["All listings", "Pre-IPO", "Unlisted", "ESOPs"];
const sectors = ["All sectors", ...Array.from(new Set(listings.map((listing) => listing.sector)))];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("All listings");
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("All sectors");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const next = listings.filter((listing) => {
      const matchesTab = active === "All listings" || listing.type === active;
      const matchesSector = sector === "All sectors" || listing.sector === sector;
      const haystack = `${listing.name} ${listing.type} ${listing.sector}`.toLowerCase();
      return matchesTab && matchesSector && haystack.includes(query.toLowerCase().trim());
    });
    return [...next].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "price") return Number(b.price.replace(/[^0-9]/g, "")) - Number(a.price.replace(/[^0-9]/g, ""));
      return listings.indexOf(a) - listings.indexOf(b);
    });
  }, [active, query, sector, sort]);

  const resetLookup = () => { setActive("All listings"); setQuery(""); setSector("All sectors"); setSort("featured"); };

  return (
    <div className="ww-page">
      <div className="top-rail"><div className="rail-inner"><span>WWIPL / UNLISTED SHARES</span><span>PRE-IPO OPPORTUNITIES</span><span>ESOP LIQUIDITY</span><span>19+ YEARS OF MARKET EXPERIENCE</span><span>WWIPL / UNLISTED SHARES</span><span>PRE-IPO OPPORTUNITIES</span></div></div>
      <header className="ww-header">
        <a className="ww-logo" href="#home" aria-label="Wealth Wisdom India home"><span className="logo-mark"><i /><i /><i /><i /></span><span><strong>WEALTH</strong><em>WISDOM</em><small>INDIA</small></span></a>
        <nav className={open ? "nav-open" : ""}><a href="#market" onClick={() => setOpen(false)}>Listings</a><a href="#access" onClick={() => setOpen(false)}>Services</a><a href="#method" onClick={() => setOpen(false)}>Why WWIPL</a><a href="#insights" onClick={() => setOpen(false)}>Research</a><a className="header-cta" href="mailto:care@wwipl.com" onClick={() => setOpen(false)}>Speak to an expert <ArrowUpRight size={14} /></a></nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <main id="home">
        <section className="command-hero">
          <div className="hero-scanlines" />
          <div className="hero-chart"><svg viewBox="0 0 800 420" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#bcff2c" stopOpacity=".22" /><stop offset="1" stopColor="#bcff2c" stopOpacity="0" /></linearGradient></defs><path className="chart-fill" d="M0 370 L55 342 L90 355 L130 294 L172 305 L220 250 L265 279 L305 220 L346 239 L386 186 L430 215 L462 174 L505 190 L548 122 L590 143 L630 93 L671 112 L720 46 L800 15 L800 420 L0 420Z" /><path className="chart-path" d="M0 370 L55 342 L90 355 L130 294 L172 305 L220 250 L265 279 L305 220 L346 239 L386 186 L430 215 L462 174 L505 190 L548 122 L590 143 L630 93 L671 112 L720 46 L800 15" /></svg><div className="axis-labels"><span>2023</span><span>2024</span><span>2025</span><span>NOW</span></div></div>
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="hero-content"><div className="hero-eyebrow"><span className="pulse-dot" /> WEALTH WISDOM INDIA <span>PRIVATE MARKET ACCESS</span></div><h1>Buy &amp; sell<br /><em>unlisted</em><br />shares in India.</h1><p>Access pre-IPO, unlisted, delisted shares and ESOP opportunities through a team with 19+ years of market experience.</p><div className="hero-actions"><a className="primary-cta" href="#market">View current listings <ArrowUpRight size={16} /></a><a className="play-link" href="#method"><span><Play size={11} fill="currentColor" /></span> How WWIPL works</a></div><div className="hero-proof"><span><strong>19+</strong> years of experience</span><span><strong>500+</strong> opportunities tracked</span><span><strong>4</strong> ways to access</span></div></div>
          <div className="hero-terminal terminal-main"><div className="terminal-top"><span><i /> WWIPL MARKET SNAPSHOT</span><small>UPDATED TODAY</small></div><div className="terminal-number">500+ <TrendingUp size={18} /></div><div className="terminal-sub">PRIVATE COMPANIES TRACKED <span>● CURATED</span></div><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="terminal-stats"><span><b>4</b> categories</span><span><b>19+</b> years</span></div></div>
          <div className="hero-terminal terminal-float"><span className="terminal-tag">FEATURED PRE-IPO</span><strong>TATA CAPITAL</strong><small>FINANCIAL SERVICES</small><div><b>₹ 1,100</b><em>+8.7%</em></div></div><div className="hero-side-label">PRE-IPO / UNLISTED / ESOPS</div><div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="thesis-section"><div className="section-wrap"><div className="section-kicker"><span>01</span> WHY PRIVATE MARKETS</div><div className="thesis-grid"><h2>Find the next<br /><em>stage of growth.</em></h2><div className="thesis-copy"><p>Some of India's most interesting businesses are not on the stock exchange yet. WWIPL helps investors discover, evaluate, buy and sell shares in that private market.</p><a className="arrow-link" href="#access">Explore our services <ArrowUpRight size={16} /></a><div className="signal-line"><span>PRE-IPO</span><b /><span>UNLISTED</span><b /><span>ESOPS</span></div></div></div></div></section>

        <section className="access-section" id="access"><div className="section-wrap"><div className="section-kicker pale"><span>02</span> OUR SERVICES</div><div className="access-head"><h2>Access the<br /><em>private market.</em></h2><p>One experienced partner for buying, selling, research and liquidity across India's unlisted market.</p></div><div className="access-cards"><a className="access-card card-lime" href="#market"><div className="card-code">01 / BUY</div><Search size={24} /><h3>Pre-IPO shares</h3><p>Explore companies preparing for a future public listing.</p><span className="card-link">View opportunities <ChevronRight size={16} /></span></a><a className="access-card card-blue" href="#market"><div className="card-code">02 / BUY &amp; SELL</div><div className="card-graph"><span /><span /><span /><span /><span /><span /></div><h3>Unlisted shares</h3><p>Buy or sell shares in private companies across sectors.</p><span className="card-link">Browse listings <ChevronRight size={16} /></span></a><a className="access-card card-cream" href="mailto:care@wwipl.com"><div className="card-code">03 / LIQUIDITY</div><div className="orbit-small" /><h3>ESOPs &amp; exits</h3><p>Get help with ESOP transactions and secondary liquidity.</p><span className="card-link">Talk to our team <ChevronRight size={16} /></span></a></div></div></section>

        <section className="market-section" id="market"><div className="section-wrap"><div className="section-kicker"><span>03</span> LIVE LISTINGS DIRECTORY</div><div className="market-title-row"><div><h2>Browse current<br /><em>opportunities.</em></h2><p>Search and filter selected pre-IPO, unlisted and ESOP opportunities. Prices are indicative and subject to availability.</p></div><a className="arrow-link" href="https://wwipl.com/unlisted-share" target="_blank" rel="noreferrer">Open full WWIPL directory <ArrowUpRight size={16} /></a></div><div className="lookup-toolbar"><label className="lookup-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search company, type or sector" aria-label="Search listings" /></label><label><span>Sector</span><select value={sector} onChange={(event) => setSector(event.target.value)}>{sectors.map((item) => <option key={item}>{item}</option>)}</select></label><label><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="name">Company name</option><option value="price">Indicative price</option></select></label><button className="clear-lookup" onClick={resetLookup}>Clear</button></div><div className="market-tabs" role="tablist" aria-label="Listing categories">{tabs.map(tab => <button role="tab" aria-selected={active === tab} className={active === tab ? "active" : ""} onClick={() => setActive(tab)} key={tab}>{tab}</button>)}</div><div className="lookup-summary"><strong>{filtered.length}</strong> {filtered.length === 1 ? "opportunity" : "opportunities"} shown <span>Updated for demonstration · connect live WWIPL data for production</span></div><div className="market-list"><div className="market-list-head"><span>Company / opportunity</span><span>Type</span><span>Sector</span><span>Indicative price</span><span>Signal</span></div>{filtered.length > 0 ? filtered.map((row, index) => <div className="market-list-row" key={row.name}><span className="company-name"><b>{String(index + 1).padStart(2, "0")}</b>{row.name}</span><span className="type-chip">{row.type}</span><span>{row.sector}</span><span>{row.price}</span><span className={row.move.includes("−") ? "down" : row.move === "—" ? "neutral" : "up"}>{row.move}<small>{row.status}</small></span><a href={`mailto:care@wwipl.com?subject=Enquiry about ${row.name}`} aria-label={`Enquire about ${row.name}`}><MoveUpRight size={16} /></a></div>) : <div className="lookup-empty"><strong>No matching opportunities</strong><span>Try another company, category or sector.</span><button onClick={resetLookup}>Reset lookup</button></div>}</div><p className="market-disclaimer">Indicative prices only. Unlisted and pre-IPO investments are higher-risk, less liquid and may not be suitable for every investor.</p></div></section>

        <section className="method-section" id="method"><div className="section-wrap"><div className="section-kicker pale"><span>04</span> WHY INVESTORS USE WWIPL</div><div className="method-grid"><div><h2>From discovery<br />to <em>decision.</em></h2><p>We make the mechanics easier to understand, the information easier to access, and the next step easier to take.</p></div><div className="method-steps"><div><span>01</span><div><h3>Discover opportunities</h3><p>Search across pre-IPO, unlisted, delisted and ESOP opportunities.</p></div></div><div><span>02</span><div><h3>Understand the details</h3><p>Review company information, indicative pricing and transaction context.</p></div></div><div><span>03</span><div><h3>Speak with a specialist</h3><p>Get practical support for buying, selling, settlement and liquidity.</p></div></div></div></div></div></section>

        <section className="final-section" id="insights"><div className="final-grid"><div className="final-copy"><div className="section-kicker pale"><span>05</span> START HERE</div><h2>Looking for<br /><em>private-market</em><br />opportunities?</h2><p>Tell us whether you want to buy, sell, research or discuss an ESOP transaction.</p><a className="primary-cta" href="mailto:care@wwipl.com?subject=Private market enquiry">Speak to WWIPL <ArrowUpRight size={16} /></a></div><div className="final-data"><div className="data-title"><span>WWIPL / INVESTOR DESK</span><small>CARE@WWIPL.COM</small></div><div className="data-quote">Clear information.<br />Direct access.<br /><em>Better decisions.</em></div><div className="data-footer"><span>INDIA / PRIVATE MARKETS</span><a href="mailto:care@wwipl.com">SEND AN ENQUIRY ↗</a></div></div></div></section>
      </main>
      <footer className="ww-footer"><a className="ww-logo" href="#home"><span className="logo-mark"><i /><i /><i /><i /></span><span><strong>WEALTH</strong><em>WISDOM</em><small>INDIA</small></span></a><span>© 2026 WEALTH WISDOM INDIA PVT. LTD.</span><div><a href="https://wwipl.com/privacy-policy">Privacy</a><a href="https://wwipl.com/term-n-condition">Terms</a><a href="https://www.linkedin.com/company/wealthwisdomindia2/">LinkedIn</a></div></footer>
    </div>
  );
}

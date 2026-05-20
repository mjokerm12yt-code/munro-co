<style>
  :root {
    --gold: #c9a84c;
    --gold-light: #e8cb7a;
    --gold-pale: #f5e9c8;
    --black: #080808;
    --dark: #0f0f0f;
    --dark2: #161616;
    --dark3: #1e1e1e;
    --border: #2a2a2a;
    --text: #e8e4dc;
    --muted: #7a7570;
    --white: #faf8f4;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--black);
    color: var(--text);
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    cursor: none;
  }

  /* ── CUSTOM CURSOR ── */
  .cursor {
    position: fixed;
    width: 10px; height: 10px;
    background: var(--gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%,-50%);
    transition: transform 0.1s, width 0.3s, height 0.3s, background 0.3s;
    mix-blend-mode: difference;
  }
  .cursor-ring {
    position: fixed;
    width: 40px; height: 40px;
    border: 1px solid rgba(201,168,76,0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%,-50%);
    transition: transform 0.15s ease, width 0.3s, height 0.3s;
  }

  /* ── NOISE OVERLAY ── */
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9000;
    opacity: 0.5;
  }

  /* ── HEADER / NAV ── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 500;
    padding: 28px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom, rgba(8,8,8,0.95), transparent);
    backdrop-filter: blur(2px);
  }

  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--white);
    text-decoration: none;
  }
  .nav-logo span { color: var(--gold); }

  .nav-links {
    display: flex;
    gap: 40px;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.78rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.3s;
  }
  .nav-links a:hover { color: var(--gold); }

  .nav-cta {
    background: transparent;
    border: 1px solid var(--gold);
    color: var(--gold);
    padding: 10px 24px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: none;
    transition: all 0.3s;
    text-decoration: none;
  }
  .nav-cta:hover { background: var(--gold); color: var(--black); }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 140px 60px 80px;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,168,76,0.07) 0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 50%),
      linear-gradient(160deg, #0a0a0a 0%, #080808 100%);
  }

  .hero-lines {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(201,168,76,0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(201,168,76,0.04) 1px, transparent 1px);
    background-size: 80px 80px;
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
    position: relative;
    z-index: 1;
    animation: fadeSlideUp 1s 0.2s both;
  }
  .hero-eyebrow::before {
    content: '';
    width: 40px;
    height: 1px;
    background: var(--gold);
  }
  .hero-eyebrow span {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 7vw, 7rem);
    font-weight: 300;
    line-height: 1.0;
    letter-spacing: -0.01em;
    max-width: 800px;
    position: relative;
    z-index: 1;
    animation: fadeSlideUp 1s 0.35s both;
  }
  .hero h1 em {
    font-style: italic;
    color: var(--gold);
  }
  .hero h1 .outline {
    -webkit-text-stroke: 1px rgba(201,168,76,0.5);
    color: transparent;
  }

  .hero-sub {
    margin-top: 32px;
    max-width: 480px;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.8;
    color: var(--muted);
    position: relative;
    z-index: 1;
    animation: fadeSlideUp 1s 0.5s both;
  }

  .hero-actions {
    margin-top: 48px;
    display: flex;
    gap: 20px;
    align-items: center;
    position: relative;
    z-index: 1;
    animation: fadeSlideUp 1s 0.65s both;
  }

  .btn-gold {
    background: var(--gold);
    color: var(--black);
    border: none;
    padding: 16px 36px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: none;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .btn-gold::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.15);
    transform: translateX(-100%);
    transition: transform 0.4s;
  }
  .btn-gold:hover::after { transform: translateX(0); }

  .btn-ghost {
    background: transparent;
    color: var(--text);
    border: none;
    padding: 16px 0;
    font-family: 'Outfit', sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: none;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--muted);
    transition: color 0.3s;
  }
  .btn-ghost:hover { color: var(--gold); }
  .btn-ghost .arrow { transition: transform 0.3s; }
  .btn-ghost:hover .arrow { transform: translateX(6px); }

  .hero-stat-strip {
    position: absolute;
    bottom: 60px;
    right: 60px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 1;
    animation: fadeSlideUp 1s 0.8s both;
  }
  .hero-stat { text-align: right; }
  .hero-stat .num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--gold);
    line-height: 1;
  }
  .hero-stat .lbl {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    margin-top: 4px;
  }

  .scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 60px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 1;
    animation: fadeSlideUp 1s 1s both;
  }
  .scroll-line {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: pulse 2s infinite;
  }
  .scroll-hint span {
    writing-mode: vertical-rl;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* ── DIVIDER ── */
  .divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 0;
  }

  /* ── SECTION BASE ── */
  section {
    padding: 120px 60px;
  }

  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .section-label::before {
    content: '';
    width: 30px;
    height: 1px;
    background: var(--gold);
  }
  .section-label span {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 4.5vw, 4rem);
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }
  .section-title em { font-style: italic; color: var(--gold); }

  /* ── ABOUT / INTRO ── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    margin-top: 60px;
  }

  .about-text p {
    font-size: 1rem;
    line-height: 1.9;
    color: var(--muted);
    margin-bottom: 20px;
  }
  .about-text p strong { color: var(--text); font-weight: 500; }

  .about-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .stat-card {
    background: var(--dark2);
    border: 1px solid var(--border);
    padding: 32px 24px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s;
  }
  .stat-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s;
  }
  .stat-card:hover { border-color: rgba(201,168,76,0.3); }
  .stat-card:hover::before { transform: scaleX(1); }

  .stat-card .icon {
    font-size: 1.8rem;
    margin-bottom: 16px;
    display: block;
  }
  .stat-card .val {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem;
    font-weight: 600;
    color: var(--gold);
    line-height: 1;
    display: block;
    margin-bottom: 6px;
  }
  .stat-card .desc {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* ── STRATEGIES ── */
  .strategies { background: var(--dark); }
  .strategies-intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: end;
    margin-bottom: 60px;
  }
  .strategies-intro p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--muted);
    align-self: end;
    padding-bottom: 8px;
  }

  .strategy-list { display: flex; flex-direction: column; gap: 0; }

  .strategy-item {
    border-top: 1px solid var(--border);
    padding: 36px 0;
    display: grid;
    grid-template-columns: 60px 1fr auto;
    gap: 32px;
    align-items: start;
    cursor: none;
    transition: all 0.3s;
    position: relative;
  }
  .strategy-item:last-child { border-bottom: 1px solid var(--border); }
  .strategy-item::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(201,168,76,0.02);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .strategy-item:hover::after { opacity: 1; }

  .strategy-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    font-weight: 300;
    color: var(--gold);
    opacity: 0.6;
    padding-top: 4px;
  }

  .strategy-content h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.7rem;
    font-weight: 400;
    margin-bottom: 10px;
    transition: color 0.3s;
  }
  .strategy-item:hover .strategy-content h3 { color: var(--gold); }

  .strategy-content p {
    font-size: 0.88rem;
    line-height: 1.8;
    color: var(--muted);
    max-width: 560px;
  }

  .strategy-tag {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    border: 1px solid rgba(201,168,76,0.3);
    padding: 5px 12px;
    white-space: nowrap;
    align-self: start;
  }

  /* ── SOUTH AFRICA SPECIFIC ── */
  .sa-section {
    background: var(--dark2);
    position: relative;
    overflow: hidden;
  }
  .sa-section::before {
    content: 'ZA';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Cormorant Garamond', serif;
    font-size: 25vw;
    font-weight: 700;
    color: rgba(201,168,76,0.03);
    line-height: 1;
    pointer-events: none;
  }

  .sa-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    margin-top: 60px;
    background: var(--border);
  }

  .sa-card {
    background: var(--dark2);
    padding: 40px 32px;
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
  }
  .sa-card:hover { background: var(--dark3); }

  .sa-card .num-big {
    font-family: 'Cormorant Garamond', serif;
    font-size: 4rem;
    font-weight: 600;
    color: rgba(201,168,76,0.2);
    line-height: 1;
    margin-bottom: 20px;
    display: block;
  }
  .sa-card h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 14px;
    color: var(--text);
  }
  .sa-card p {
    font-size: 0.85rem;
    line-height: 1.8;
    color: var(--muted);
  }
  .sa-card .badge {
    display: inline-block;
    margin-top: 20px;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
  }

  /* ── PILLARS ── */
  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 60px;
  }

  .pillar {
    padding: 40px 28px;
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
    transition: all 0.4s;
    background: var(--dark2);
  }
  .pillar:hover {
    border-color: rgba(201,168,76,0.4);
    transform: translateY(-6px);
  }

  .pillar .icon-wrap {
    width: 52px;
    height: 52px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 28px;
    transition: border-color 0.3s;
  }
  .pillar:hover .icon-wrap { border-color: var(--gold); }

  .pillar h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.35rem;
    font-weight: 400;
    margin-bottom: 14px;
  }
  .pillar p {
    font-size: 0.82rem;
    line-height: 1.8;
    color: var(--muted);
  }

  .pillar .line {
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 2px;
    background: var(--gold);
    transition: width 0.5s;
  }
  .pillar:hover .line { width: 100%; }

  /* ── TESTIMONIAL MARQUEE ── */
  .marquee-section {
    background: var(--dark);
    padding: 50px 0;
    overflow: hidden;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .marquee-track {
    display: flex;
    gap: 60px;
    animation: marquee 30s linear infinite;
    white-space: nowrap;
  }

  .marquee-item {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }
  .marquee-item .dot {
    width: 6px; height: 6px;
    background: var(--gold);
    border-radius: 50%;
    flex-shrink: 0;
  }
  .marquee-item span {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-style: italic;
    color: var(--muted);
  }
  .marquee-item strong {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    color: var(--gold);
  }

  /* ── CONTACT ── */
  .contact {
    background: var(--black);
    position: relative;
    overflow: hidden;
  }
  .contact::before {
    content: '';
    position: absolute;
    top: -200px; left: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .contact-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: start;
    position: relative;
    z-index: 1;
  }

  .contact-info h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 24px;
  }
  .contact-info h2 em { font-style: italic; color: var(--gold); }

  .contact-info p {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--muted);
    margin-bottom: 48px;
  }

  .contact-details { display: flex; flex-direction: column; gap: 20px; }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 24px;
    border: 1px solid var(--border);
    background: var(--dark2);
    transition: border-color 0.3s;
  }
  .contact-item:hover { border-color: rgba(201,168,76,0.4); }

  .contact-item .ci-icon {
    width: 44px; height: 44px;
    border: 1px solid rgba(201,168,76,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    flex-shrink: 0;
    color: var(--gold);
  }

  .contact-item .ci-label {
    font-size: 0.65rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 4px;
    display: block;
  }
  .contact-item .ci-value {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text);
  }
  .contact-item a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.3s;
  }
  .contact-item a:hover { color: var(--gold); }

  /* Contact form */
  .contact-form { display: flex; flex-direction: column; gap: 16px; }

  .form-group { display: flex; flex-direction: column; gap: 8px; }
  .form-group label {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .form-group input,
  .form-group textarea,
  .form-group select {
    background: var(--dark2);
    border: 1px solid var(--border);
    color: var(--text);
    font-family: 'Outfit', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    padding: 14px 18px;
    outline: none;
    transition: border-color 0.3s;
    width: 100%;
    appearance: none;
  }
  .form-group select { cursor: none; }
  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus { border-color: var(--gold); }
  .form-group textarea { resize: vertical; min-height: 100px; }
  .form-group input::placeholder,
  .form-group textarea::placeholder { color: var(--muted); }

  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  .btn-submit {
    background: var(--gold);
    color: var(--black);
    border: none;
    padding: 16px 36px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: none;
    transition: all 0.3s;
    width: 100%;
    margin-top: 8px;
  }
  .btn-submit:hover { background: var(--gold-light); }

  /* ── FOOTER ── */
  footer {
    background: var(--dark);
    border-top: 1px solid var(--border);
    padding: 40px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }

  .footer-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text);
  }
  .footer-logo span { color: var(--gold); }

  .footer-copy {
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-align: center;
  }

  .footer-links {
    display: flex;
    gap: 28px;
    list-style: none;
  }
  .footer-links a {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.3s;
  }
  .footer-links a:hover { color: var(--gold); }

  /* ── ANIMATIONS ── */
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    nav { padding: 20px 24px; }
    .nav-links, .nav-cta { display: none; }
    section { padding: 80px 24px; }
    .hero { padding: 120px 24px 80px; }
    .hero h1 { font-size: 3rem; }
    .hero-stat-strip { display: none; }
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .about-cards { grid-template-columns: 1fr 1fr; }
    .strategies-intro { grid-template-columns: 1fr; gap: 20px; }
    .sa-grid { grid-template-columns: 1fr; }
    .pillars-grid { grid-template-columns: 1fr 1fr; }
    .contact-inner { grid-template-columns: 1fr; gap: 50px; }
    .form-row { grid-template-columns: 1fr; }
    footer { flex-direction: column; align-items: center; text-align: center; }
    .scroll-hint { display: none; }
  }
  @media (max-width: 600px) {
    .pillars-grid { grid-template-columns: 1fr; }
    .about-cards { grid-template-columns: 1fr; }
    .hero h1 { font-size: 2.4rem; }
  }

  /* Toast */
  .toast {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: var(--gold);
    color: var(--black);
    padding: 14px 24px;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    z-index: 9999;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .toast.show { transform: translateY(0); opacity: 1; }
</style>
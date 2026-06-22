import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  ArrowRight, Check, CheckCircle2, ChevronDown, CircleCheck, Clock3,
  Mail, MapPin, Menu, MessageCircle, MonitorSmartphone, ShieldCheck,
  Sparkles, Star, X, Zap
} from "lucide-react";

// EDIT HERE: Update the business name and contact details in one place.
const business = {
  name: "Local Launch Websites",
  email: "aj.doyle@outlook.ie",
  whatsapp: "+353833597797",
  location: "Based in Ireland, working nationwide",
};

// EDIT HERE: Replace this with your Formspree endpoint, e.g. "https://formspree.io/f/abcxyz".
const formspreeEndpoint = "https://formspree.io/f/xaqzgywp";

const navLinks = ["Home", "Work", "Process", "Pricing", "Contact"];

const problems = [
  "No website, or one that feels out of date",
  "Relying only on Facebook or Instagram",
  "Customers can't find key information quickly",
  "No easy way for people to request a quote",
  "A poor experience on mobile phones",
  "Struggling to look established when starting out",
];

const benefits = [
  ["Based in Ireland", "Local context, clear communication and support that feels close to home.", MapPin],
  ["Affordable packages", "Practical options designed around the realities of small business.", Sparkles],
  ["Fast turnaround", "A focused process that gets your business online without months of waiting.", Clock3],
  ["Mobile-friendly", "A smooth, professional experience on every screen size.", MonitorSmartphone],
  ["Built for enquiries", "Clear calls to action that help turn visitors into real conversations.", MessageCircle],
  ["Plain English", "Helpful advice and honest answers, without unnecessary jargon.", CircleCheck],
];

// EDIT HERE: Change project names, categories, descriptions, and image positions.
const projects = [
  { name: "Carpenter Website Sample", brand: "Craft & Grain", type: "For tradespeople", headline: "Carpentry built around your home.", subhead: "Custom storage, flooring and finish work completed with care across Dublin.", services: ["Fitted storage", "Flooring", "Finish carpentry"], blurb: "A warm, practical layout designed to showcase workmanship and generate quote requests.", pos: "0% 0%" },
  { name: "Consultant Website Sample", brand: "Clear Path Consulting", type: "For consultants", headline: "Practical guidance for your next stage of growth.", subhead: "Clear, focused support for small businesses ready to move forward with confidence.", services: ["Strategy sessions", "Business planning", "Ongoing advice"], blurb: "A calm, credible online presence that explains expertise and makes booking a conversation easy.", pos: "50% 0%" },
  { name: "Cleaning Website Sample", brand: "Simply Fresh", type: "For local services", headline: "A cleaner home, without the hassle.", subhead: "Reliable home and office cleaning from a trusted local team.", services: ["Regular cleaning", "Deep cleaning", "Office cleaning"], blurb: "Clear service information, reassuring trust signals and a straightforward enquiry journey.", pos: "100% 0%" },
  { name: "Landscaper Website Sample", brand: "Field & Form", type: "For outdoor services", headline: "Outdoor spaces made to be enjoyed.", subhead: "Thoughtful garden design, landscaping and maintenance for homes across Ireland.", services: ["Garden design", "Landscaping", "Maintenance"], blurb: "A visual, mobile-friendly site that lets strong project work speak for itself.", pos: "0% 100%" },
  { name: "Electrician Website Sample", brand: "Local Spark Electrical", type: "For tradespeople", headline: "Safe, dependable electrical work.", subhead: "Responsive electrical services for homes and small businesses in your area.", services: ["Repairs", "Installations", "Safety checks"], blurb: "A dependable local service website built around quick access to key details and enquiries.", pos: "50% 100%" },
  { name: "Beauty Business Website Sample", brand: "The Treatment Room", type: "For beauty services", headline: "Feel good in your own skin.", subhead: "Professional beauty treatments in a calm, welcoming local studio.", services: ["Skin treatments", "Brows & lashes", "Beauty packages"], blurb: "A polished service-led design with a clear path from browsing treatments to getting in touch.", pos: "100% 100%" },
];

const process = [
  ["01", "Quick chat", "We learn about your business, customers and what a good website needs to achieve."],
  ["02", "Content & photos", "We help shape your message and gather the words and images needed for the build."],
  ["03", "Website build", "Your site takes shape, with clear updates and an opportunity to review everything."],
  ["04", "Launch & support", "We handle the final checks, get you live and remain available when you need us."],
];

// EDIT HERE: Replace these placeholder prices and package details.
const prices = [
  { name: "Starter Website", price: "€700", note: "A professional starting point for a new or straightforward business website.", features: ["One-page custom website", "Mobile-friendly design", "Contact enquiry form", "Basic SEO setup", "2 rounds of revisions"] },
  { name: "Professional Website", price: "Custom quote", note: "A larger website shaped around your services, content and business goals.", featured: true, features: ["Multiple custom pages", "Quote or enquiry forms", "Portfolio or service gallery", "Enhanced SEO foundations", "Google Business Profile guidance", "30 days launch support"] },
];

function Logo({ light = false }) {
  return <a className={`logo ${light ? "logo-light" : ""}`} href="#home" aria-label={`${business.name} home`}>
    <span className="logo-mark"><span /></span>
    <span>Local Launch<small>WEBSITES</small></span>
  </a>;
}

function Button({ href, children, secondary = false, className = "", onClick }) {
  return <a href={href} onClick={onClick} className={`button ${secondary ? "button-secondary" : ""} ${className}`}>
    {children}<ArrowRight size={17} />
  </a>;
}

function SectionHeading({ eyebrow, title, body, align = "left" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={scrolled ? "scrolled" : ""}>
    <div className="container nav-wrap">
      <Logo />
      <nav className={open ? "open" : ""}>
        {navLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
        <Button href="#enquiry-form" className="nav-cta" onClick={() => setOpen(false)}>Start a Website Enquiry</Button>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="local-pill"><MapPin size={15} /> Proudly based in Ireland</div>
        <h1>Professional websites for small businesses <em>across Ireland.</em></h1>
        <p>Helping Irish tradespeople, sole traders, startups and local businesses build a professional online presence that generates enquiries and wins more customers.</p>
        <div className="hero-actions">
          <Button href="#enquiry-form">Start Your Website Enquiry</Button>
          <Button href="#work" secondary>See Example Work</Button>
        </div>
        <div className="hero-trust">
          <span><CheckCircle2 size={17} /> Affordable packages</span>
          <span><CheckCircle2 size={17} /> Clear, friendly process</span>
          <span><CheckCircle2 size={17} /> No jargon</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Website preview illustration">
        <span className="preview-label">Example customer website</span>
        <div className="browser-frame">
          <div className="browser-bar"><i /><i /><i /><span>yourbusiness.ie</span></div>
          <div className="mock-site">
            <div className="mock-nav"><b>YOUR BUSINESS</b><span>Home &nbsp; Services &nbsp; Work &nbsp; Contact</span></div>
            <div className="mock-hero">
              <div className="mock-copy">
                <small>TRUSTED LOCAL SERVICE</small>
                <strong>Clear services.<br />More enquiries.</strong>
                <p>A professional website that explains what you do, builds trust and makes it easy for customers to contact you.</p>
                <button>Request a quote</button>
              </div>
              <div className="mock-panel">
                <span>Website essentials</span>
                <b>Mobile-ready</b>
                <b>Quote form</b>
                <b>Local SEO</b>
              </div>
            </div>
            <div className="mock-features"><span><b>Services</b>Easy to understand</span><span><b>Trust</b>Reviews & proof</span><span><b>Enquiries</b>Clear next step</span></div>
          </div>
        </div>
        <div className="float-card float-rating"><span><Star size={16} fill="currentColor" /> 5.0</span><small>Trusted locally</small></div>
        <div className="float-card float-lead"><span><Zap size={16} /> New enquiry</span><small>Just now</small></div>
      </div>
    </div>
    <div className="hero-bottom">
      <div className="container"><span>Built for businesses like yours</span><b>TRADES</b><b>CONSULTANTS</b><b>LOCAL SERVICES</b><b>STARTUPS</b><b>SOLE TRADERS</b></div>
    </div>
  </section>;
}

function Problems() {
  return <section className="section problems">
    <div className="container split">
      <div>
        <SectionHeading eyebrow="Sound familiar?" title={<>Running a business is hard enough. <span>Your website shouldn't be.</span></>} body="When you're busy doing the actual work, getting your business online can feel like another full-time job. We make that part simpler." />
        <Button href="#enquiry-form" secondary>Let's make it easier</Button>
      </div>
      <div className="problem-list">
        {problems.map((problem, i) => <div className="problem-row" key={problem}><span>{String(i + 1).padStart(2, "0")}</span><p>{problem}</p><Check size={18} /></div>)}
      </div>
    </div>
  </section>;
}

function WhyUs() {
  return <section className="section why-us">
    <div className="container">
      <div className="why-intro">
        <SectionHeading eyebrow="A better way to build" title="Small business focus. Professional standards." body="You don't need a big agency or a complicated process. You need a capable partner who listens, explains things clearly and gets the important details right." />
        <div className="ireland-badge"><MapPin /><span>Local thinking<small>Built in Ireland</small></span></div>
      </div>
      <div className="benefit-grid">
        {benefits.map(([title, text, Icon]) => <article key={title}><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </div>
  </section>;
}

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (!activeProject) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  return <section className="section portfolio" id="work">
    <div className="container">
      <div className="portfolio-head">
      <SectionHeading eyebrow="Website samples" title="Clear ideas for real-world businesses." body="These concept examples show the style and structure we can create for different types of small business. They are samples, not claimed client projects." />
        <Button href="#enquiry-form" secondary>Discuss your project</Button>
      </div>
      <div className="project-grid">
        {projects.map((project, i) => <article className={`project-card project-${i + 1}`} key={project.name}>
          <button className="project-image" type="button" onClick={() => setActiveProject(project)} style={{ backgroundPosition: project.pos }} aria-label={`Open ${project.name}`}>
            <strong>View website sample</strong>
          </button>
          <small>{project.type}</small><p>{project.blurb}</p>
        </article>)}
      </div>
    </div>
    {activeProject && <div className="sample-modal" role="dialog" aria-modal="true" aria-label={`${activeProject.name} preview`}>
      <button className="modal-backdrop" type="button" onClick={() => setActiveProject(null)} aria-label="Close website preview" />
      <div className="sample-window">
        <div className="sample-window-bar">
          <span><i /><i /><i /></span>
          <small>Interactive concept preview</small>
          <button type="button" onClick={() => setActiveProject(null)} aria-label="Close preview"><X /></button>
        </div>
        <div className="sample-site">
          <nav className="sample-nav">
            <strong>{activeProject.brand}</strong>
            <span>Home&nbsp;&nbsp; Services&nbsp;&nbsp; About&nbsp;&nbsp; Contact</span>
            <a href="#enquiry-form" onClick={() => setActiveProject(null)}>Get a quote</a>
          </nav>
          <div className="sample-hero">
            <div className="sample-hero-copy">
              <small>TRUSTED LOCAL BUSINESS</small>
              <h3>{activeProject.headline}</h3>
              <p>{activeProject.subhead}</p>
              <a href="#enquiry-form" onClick={() => setActiveProject(null)}>Request an enquiry <ArrowRight size={16} /></a>
            </div>
            <div className="sample-hero-image" style={{ backgroundPosition: activeProject.pos }} />
          </div>
          <div className="sample-services">
            {activeProject.services.map((service, index) => <div key={service}><span>0{index + 1}</span><strong>{service}</strong><small>Professional, reliable and clearly explained.</small></div>)}
          </div>
          <div className="sample-proof"><span><CheckCircle2 /> Mobile friendly</span><span><CheckCircle2 /> Clear service information</span><span><CheckCircle2 /> Built for enquiries</span></div>
        </div>
      </div>
    </div>}
  </section>;
}

function Process() {
  return <section className="section process" id="process">
    <div className="container">
      <SectionHeading eyebrow="Simple from the start" title="From first chat to launch in four clear steps." body="You'll always know what's happening, what's needed and what comes next." align="center" />
      <div className="process-grid">
        {process.map(([num, title, text], i) => <article key={title}><span className="process-num">{num}</span>{i < 3 && <div className="process-line" />}<h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="process-cta"><MessageCircle /><div><strong>Not sure where to begin?</strong><span>A quick, no-pressure chat is the perfect place to start.</span></div><Button href="#enquiry-form">Book a quick chat</Button></div>
    </div>
  </section>;
}

function Pricing() {
  return <section className="section pricing" id="pricing">
    <div className="container">
      <SectionHeading eyebrow="Clear, honest pricing" title="Professional websites from €700." body="The final price depends on the number of pages, features, content and overall complexity. You'll receive a clear quote before any work begins." align="center" />
      <div className="pricing-grid">
        {prices.map((price) => <article className={price.featured ? "price-card featured" : "price-card"} key={price.name}>
          {price.featured && <span className="popular">MOST POPULAR</span>}
          <h3>{price.name}</h3><p>{price.note}</p><div className="price"><small>From</small><strong>{price.price}</strong></div>
          <ul>{price.features.map((f) => <li key={f}><Check size={17} />{f}</li>)}</ul>
          <Button href="#enquiry-form" secondary={!price.featured}>Get started</Button>
        </article>)}
      </div>
      <p className="pricing-note">Updates and ongoing support are also available for websites we build, with costs based on the work involved. <a href="#enquiry-form">Tell us what you have in mind</a>.</p>
    </div>
  </section>;
}

function About() {
  return <section className="section about">
    <div className="container about-grid">
      <div className="about-visual">
        <div className="about-shape"><span>IE</span></div>
        <div className="about-note"><strong>Small business,<br />big ambition.</strong><small>We're here for both.</small></div>
      </div>
      <div>
        <SectionHeading eyebrow="A little about us" title="Your local partner for getting online." />
        <p className="about-lead">Local Launch Websites is based in Ireland and built around one simple idea: small businesses deserve websites that look every bit as professional as the work they do.</p>
        <p>We know the early stages of starting or growing a business can be full of hurdles. Our role is to make the website part feel manageable, with honest guidance, clear communication and no technical runaround.</p>
        <p>Whether you're laying the first foundations or refreshing something you've outgrown, we'll meet you where you are and help you take the next step with confidence.</p>
        <Button href="#enquiry-form">Let's have a chat</Button>
      </div>
    </div>
  </section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (formspreeEndpoint.includes("YOUR_FORM_ID")) {
      setFormError("Add your Formspree endpoint in src/App.jsx before this form can send enquiries.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Formspree rejected the submission.");
      }

      e.currentTarget.reset();
      setSent(true);
    } catch {
      setFormError("Something went wrong. Please try again, or contact us by email or WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section className="section contact" id="contact">
    <div className="container contact-grid">
      <div className="contact-copy">
        <span className="eyebrow">Let's talk</span>
        <h2>Ready to give your business the website it deserves?</h2>
        <p>Tell us a little about your business and where you are right now. We'll take a look and come back with some clear, practical next steps.</p>
        <div className="contact-points">
          <a href={`mailto:${business.email}`}><Mail /><span><small>Email</small>{business.email}</span></a>
          <a href={`https://wa.me/${business.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WhatsApp</small>Message on WhatsApp</span></a>
          <div><MapPin /><span><small>Location</small>{business.location}</span></div>
        </div>
      </div>
      <form id="enquiry-form" action={formspreeEndpoint} method="POST" onSubmit={submit}>
        {sent ? <div className="form-success"><CheckCircle2 /><h3>Thanks, your enquiry has been sent.</h3><p>We'll come back to you as soon as possible with a clear next step.</p><button type="button" onClick={() => setSent(false)}>Send another enquiry</button></div> : <>
          <div className="form-head"><h3>Tell us about your business</h3><p>Send a few details and we'll come back with a clear next step.</p></div>
          <div className="form-grid">
            <label>Name *<input name="name" required placeholder="Your name" /></label>
            <label>Business name<input name="business_name" placeholder="Business name" /></label>
            <label>Email *<input name="email" required type="email" placeholder="you@example.ie" /></label>
            <label>Phone<input name="phone" type="tel" placeholder="+353" /></label>
            <label className="full">Current website, if any<input name="current_website" type="url" placeholder="https://" /></label>
            <label>Type of business<select name="business_type" defaultValue=""><option value="" disabled>Select one</option><option>Tradesperson</option><option>Local service</option><option>Consultant</option><option>Startup</option><option>Retail / hospitality</option><option>Other</option></select><ChevronDown /></label>
            <label className="full">What help do you need?<textarea name="message" rows="4" placeholder="Tell us a little about your website or idea..." /></label>
          </div>
          {formError && <p className="form-error">{formError}</p>}
          <button className="submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending enquiry..." : "Send Website Enquiry"} <ArrowRight size={18} /></button>
          <small className="privacy"><ShieldCheck size={14} /> Your details stay private. No spam, ever.</small>
        </>}
      </form>
    </div>
  </section>;
}

function Footer() {
  return <footer>
    <div className="container footer-simple">
      <div>
        <Logo light />
        <p>Professional, affordable websites for small businesses across Ireland.</p>
      </div>
      <div className="footer-contact">
        <a href={`mailto:${business.email}`}>{business.email}</a>
        <a href={`https://wa.me/${business.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">Message on WhatsApp</a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span><span>Built with care in Ireland.</span></div>
    </div>
  </footer>;
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }), { threshold: 0.08 });
    document.querySelectorAll(".section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <><Header /><main><Hero /><Problems /><WhyUs /><Portfolio /><Process /><Pricing /><About /><Contact /></main><Footer /><Analytics /></>;
}

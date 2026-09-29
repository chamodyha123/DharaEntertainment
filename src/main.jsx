import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CakeSlice,
  Check,
  ChevronRight,
  GraduationCap,
  Headphones,
  Heart,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mic2,
  Music2,
  Phone,
  Play,
  Quote,
  School,
  ShieldCheck,
  Sparkles,
  Star,
  Volume2,
  Waves,
  X,
  Zap
} from 'lucide-react';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import './styles.css';

const gear = [
  {
    name: 'Premium Speaker A',
    type: 'High-output PA Speaker',
    image: '/assets/devices/speaker-1.svg',
    specs: ['Powerful full-range audio', 'Clear vocals & deep bass', 'Ideal for indoor/outdoor events']
  },
  {
    name: 'Premium Speaker B',
    type: 'High-output PA Speaker',
    image: '/assets/devices/speaker-2.svg',
    specs: ['Wide sound coverage', 'Balanced high-frequency detail', 'Flexible venue placement']
  },
  {
    name: 'Professional Amplifier',
    type: 'Power Amplification',
    image: '/assets/devices/amplifier.svg',
    specs: ['Stable event-ready power', 'Clean signal handling', 'Reliable protection system']
  },
  {
    name: 'DJ Console',
    type: 'Performance Controller',
    image: '/assets/devices/dj-console.svg',
    specs: ['Professional mixing workflow', 'Live transitions & effects', 'Laptop-ready performance setup']
  },
  {
    name: 'Wireless Microphone',
    type: 'Vocal & Announcements',
    image: '/assets/devices/microphone.svg',
    specs: ['Clear speech reproduction', 'Wireless event mobility', 'Great for ceremonies & speeches']
  },
  {
    name: 'Event Accessories',
    type: 'Cables, stands & support gear',
    image: '/assets/devices/accessories.svg',
    specs: ['Safe cable management', 'Speaker & microphone stands', 'Backup connectors and essentials']
  }
];

const packages = [
  {
    title: 'Essential Sound',
    badge: 'Small Events',
    price: 'Custom Quote',
    description: 'A clean, dependable sound setup for intimate functions and ceremonies.',
    items: ['2 premium speakers', '1 amplifier', '1 wireless microphone', 'Basic event setup', 'On-site operator support']
  },
  {
    title: 'DJ Celebration',
    badge: 'Most Popular',
    price: 'Custom Quote',
    featured: true,
    description: 'Sound, DJ performance and lighting designed to keep celebrations energetic.',
    items: ['Complete sound system', 'DJ console & DJ service', 'Wireless microphone', 'Dance-floor LED lighting', 'Setup + event operator']
  },
  {
    title: 'Signature Event',
    badge: 'Premium',
    price: 'Custom Quote',
    description: 'A polished event production package for weddings, corporate events and large venues.',
    items: ['Expanded sound coverage', 'DJ console & performance', 'Premium lighting arrangement', 'Multiple microphone support', 'Custom event planning']
  }
];

const eventTypes = [
  {
    title: 'Wedding Ceremonies',
    icon: Heart,
    image: '/assets/events/wedding.svg',
    text: 'Elegant ceremony audio, reception music, announcements and dance-floor entertainment planned around your timeline.'
  },
  {
    title: 'Birthday Parties',
    icon: CakeSlice,
    image: '/assets/events/birthday.svg',
    text: 'Fun playlists, energetic DJ sets, microphone support and lighting for memorable celebrations of every size.'
  },
  {
    title: 'School Events',
    icon: GraduationCap,
    image: '/assets/events/school.svg',
    text: 'Reliable audio for school functions, prize givings, concerts, sports days, dances and special programmes.'
  },
  {
    title: 'Corporate Events',
    icon: BriefcaseBusiness,
    image: '/assets/events/corporate.svg',
    text: 'Professional sound reinforcement for presentations, launches, staff gatherings and company celebrations.'
  },
  {
    title: 'Religious Ceremonies',
    icon: Sparkles,
    image: '/assets/events/religious.svg',
    text: 'Respectful and clear audio support for religious functions, speeches, devotional music and community gatherings.'
  },
  {
    title: 'DJ Events',
    icon: Headphones,
    image: '/assets/events/dj-event.svg',
    text: 'DJ-focused production with punchy sound, smooth transitions, audience interaction and vibrant event lighting.'
  }
];

const highlights = [
  { icon: Volume2, title: 'Premium Sound', text: 'Clear, powerful audio tuned for your venue.' },
  { icon: Lightbulb, title: 'Dynamic Lighting', text: 'Atmosphere-focused lighting for key moments.' },
  { icon: ShieldCheck, title: 'Reliable Setup', text: 'Prepared equipment, clean cabling and support.' },
  { icon: Music2, title: 'DJ Entertainment', text: 'Flexible music selections for your audience.' }
];

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1GkBMUyFVd/',
    icon: FaFacebookF,
    ariaLabel: 'DARA Entertainment Facebook'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@dhara_entertainment?_r=1&_t=ZS-9A74NTbB1j6',
    icon: FaTiktok,
    ariaLabel: 'DARA Entertainment TikTok'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGear, setActiveGear] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const onScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="DARA Entertainment home">
          <img src="/assets/dara-logo.png" alt="DARA Entertainment logo" />
          <span>
            <strong>DARA</strong>
            <small>ENTERTAINMENT</small>
          </span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#equipment">Equipment</a>
          <a href="#services">Packages</a>
          <a href="#events">Events</a>
          <a href="#promotions">Promotions</a>
          <a href="#contact" className="nav-cta">Contact Us</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-content">
            <div className="eyebrow"><Waves size={18} /> Sound • Light • DJ Entertainment</div>
            <h1>Turn your event into an <span>unforgettable experience.</span></h1>
            <p>
              Professional sound systems, DJ entertainment and event lighting for weddings, parties,
              school functions, religious ceremonies and corporate events.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">View Packages <ArrowRight size={18} /></a>
              <a href="https://wa.me/94779847112" className="btn btn-ghost" target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
            <div className="hero-follow" aria-label="Follow DARA Entertainment">
              <span>Follow us</span>
              {socialLinks.map(({ name, url, icon: Icon, ariaLabel }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
                  <Icon aria-hidden="true" /> {name}
                </a>
              ))}
            </div>
            <div className="hero-trust">
              <div><strong>6</strong><span>Event categories</span></div>
              <div><strong>100%</strong><span>Event-focused setup</span></div>
              <div><strong>2</strong><span>Direct contact lines</span></div>
            </div>
          </div>

          <div className="hero-card">
            <img className="hero-logo" src="/assets/dara-logo.png" alt="DARA Entertainment logo" />
            <div className="hero-card-badge"><Zap size={17} /> Available for bookings</div>
          </div>
        </section>

        <section className="highlight-strip" aria-label="Service highlights">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={25} />
              <div><strong>{title}</strong><span>{text}</span></div>
            </article>
          ))}
        </section>

        <section className="section" id="equipment">
          <SectionHeading
            kicker="Our Equipment"
            title="Event-ready gear. Clean setup. Powerful performance."
            text="Explore a sample of the equipment we can bring to your event. Replace these demo images and specs with your exact models anytime."
          />

          <div className="equipment-layout">
            <div className="equipment-tabs" role="tablist" aria-label="Equipment list">
              {gear.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveGear(index)}
                  className={index === activeGear ? 'active' : ''}
                  role="tab"
                  aria-selected={index === activeGear}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><strong>{item.name}</strong><small>{item.type}</small></div>
                  <ChevronRight size={20} />
                </button>
              ))}
            </div>

            <div className="equipment-feature">
              <div className="equipment-image-wrap">
                <img src={gear[activeGear].image} alt={gear[activeGear].name} />
                <span className="equipment-chip">DARA GEAR</span>
              </div>
              <div className="equipment-copy">
                <p className="tiny-label">Equipment {String(activeGear + 1).padStart(2, '0')}</p>
                <h3>{gear[activeGear].name}</h3>
                <p>{gear[activeGear].type}</p>
                <ul>
                  {gear[activeGear].specs.map((spec) => <li key={spec}><Check size={17} /> {spec}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="services">
          <SectionHeading
            kicker="Service Packages"
            title="Choose a setup that matches your event."
            text="Package prices can be customized by venue size, duration, location, guest count and extra equipment requirements."
          />

          <div className="package-grid">
            {packages.map((item) => (
              <article key={item.title} className={item.featured ? 'package-card featured' : 'package-card'}>
                <span className="package-badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="package-price">{item.price}</div>
                <ul>
                  {item.items.map((entry) => <li key={entry}><Check size={17} /> {entry}</li>)}
                </ul>
                <a href="#contact" className={item.featured ? 'btn btn-primary full' : 'btn btn-outline full'}>Request This Package</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="events">
          <SectionHeading
            kicker="Events We Support"
            title="Sound and atmosphere for every kind of celebration."
            text="Each event gets a practical setup plan based on the venue, audience, schedule and entertainment style."
          />

          <div className="event-grid">
            {eventTypes.map(({ title, text, image, icon: Icon }) => (
              <article className="event-card" key={title}>
                <div className="event-image">
                  <img src={image} alt={`${title} demo`} />
                  <span><Icon size={18} /> {title}</span>
                </div>
                <div className="event-copy">
                  <p>{text}</p>
                  <a href="#contact">Plan this event <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="promo" id="promotions">
          <div className="promo-art">
            <div className="promo-ring ring-one" />
            <div className="promo-ring ring-two" />
            <img src="/assets/dara-logo.png" alt="DARA Entertainment" />
          </div>
          <div className="promo-copy">
            <span className="promo-tag"><Sparkles size={16} /> Limited-time promotion</span>
            <h2>Book a complete event package and ask about our <span>special combo offer.</span></h2>
            <p>
              Use this area for seasonal discounts, early-booking benefits, free add-ons or special packages.
              This demo promotion can be replaced with your active offer at any time.
            </p>
            <div className="promo-actions">
              <a className="btn btn-primary" href="https://wa.me/94779847112" target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Ask About Promotion
              </a>
              <a className="text-link" href="#contact">Get a custom quote <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section testimonials-section">
          <SectionHeading
            kicker="Why DARA"
            title="Professional service from setup to the final track."
            text="These sample testimonials are placeholders and can be replaced by genuine customer feedback later."
          />
          <div className="testimonial-grid">
            {[
              ['Wedding Reception', 'The sound was clear throughout the venue and the DJ kept the dance floor active all night.'],
              ['School Event', 'Setup was organized, announcements were easy to hear and the event ran smoothly.'],
              ['Birthday Party', 'Great music selection, clean setup and friendly support from start to finish.']
            ].map(([title, quote]) => (
              <article className="testimonial-card" key={title}>
                <Quote size={28} />
                <p>“{quote}”</p>
                <div className="stars" aria-label="5 stars">{Array.from({ length: 5 }).map((_, i) => <Star size={15} fill="currentColor" key={i} />)}</div>
                <strong>{title}</strong>
                <span>Sample customer review</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <span className="section-kicker">Book Your Event</span>
            <h2>Tell us what you’re planning.</h2>
            <p>
              Share your event type, date, venue and expected audience. We can help choose a practical sound,
              DJ and lighting setup.
            </p>

            <div className="contact-list">
              <a href="tel:+94779847112"><span><Phone size={20} /></span><div><small>Call / WhatsApp</small><strong>077 984 7112</strong></div></a>
              <a href="tel:+94766632772"><span><Phone size={20} /></span><div><small>Alternative number</small><strong>076 663 2772</strong></div></a>
              <div><span><MapPin size={20} /></span><div><small>Location</small><strong>Rangenama, Panawala</strong></div></div>
              <a href="mailto:hello@daraentertainment.lk"><span><Mail size={20} /></span><div><small>Email</small><strong>hello@daraentertainment.lk</strong></div></a>
            </div>

            <div className="contact-social">
              <span className="contact-social-label">Follow DARA Entertainment</span>
              <div className="contact-social-links">
                {socialLinks.map(({ name, url, icon: Icon, ariaLabel }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
                    <Icon aria-hidden="true" />
                    <span>{name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Your name<input required name="name" placeholder="Name" /></label>
              <label>Phone number<input required name="phone" placeholder="07X XXX XXXX" /></label>
            </div>
            <div className="form-row">
              <label>Event type
                <select name="event" defaultValue="Wedding Ceremony">
                  {eventTypes.map((event) => <option key={event.title}>{event.title}</option>)}
                </select>
              </label>
              <label>Event date<input type="date" name="date" /></label>
            </div>
            <label>Event location<input name="location" placeholder="Venue / town" /></label>
            <label>Message<textarea rows="5" name="message" placeholder="Tell us about the event, guest count and required services..." /></label>
            <button className="btn btn-primary full" type="submit">Send Inquiry <ArrowRight size={18} /></button>
            {formSent && <p className="form-note success">Demo form submitted. Connect this form to EmailJS, Formspree or your own backend before publishing.</p>}
            <p className="form-note">This demo form does not send messages yet. The WhatsApp and call buttons work immediately.</p>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src="/assets/dara-logo.png" alt="DARA Entertainment" />
          <div><strong>DARA ENTERTAINMENT</strong><span>Sounds • Light • DJ Entertainment</span></div>
        </div>
        <div className="footer-links">
          <a href="#equipment">Equipment</a>
          <a href="#services">Packages</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram"><Instagram size={19} /></a>
          {socialLinks.map(({ name, url, icon: Icon, ariaLabel }) => (
            <a key={name} href={url} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" /></a>
          ))}
          <a href="https://wa.me/94779847112" aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={19} /></a>
        </div>
        <p className="copyright">© {year} DARA Entertainment. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

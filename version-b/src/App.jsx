import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Menu, X, Mail, Phone, MapPin, Activity, Shield, Heart, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// A. NAVBAR
// ==========================================
const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('pl'); // TODO: i18n — toggle is visual only for now

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: { className: 'scrolled-nav', targets: navRef.current },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const navLinks = [
    { label: 'Strona główna', href: '#strona-glowna' },
    { label: 'O Mnie', href: '#o-mnie' },
    { label: 'Oferta', href: '#wspolpraca' },
    { label: 'Jak pracuję', href: '#metody' },
    { label: 'Opinie', href: '#opinie' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 py-4 flex flex-col w-[90%] max-w-5xl border border-transparent [&.scrolled-nav]:bg-background/80 [&.scrolled-nav]:backdrop-blur-xl [&.scrolled-nav]:border-dark/10 [&.scrolled-nav]:text-primary [&.scrolled-nav_button.cta-btn]:bg-accent [&.scrolled-nav_button.cta-btn]:text-white text-white">
      <div className="flex items-center justify-between w-full">
        <div className="font-sans font-bold text-xl tracking-tight">Karolina Bednarska</div>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover-lift">{link.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="hidden md:flex items-center gap-1 bg-dark/20 rounded-full p-1 [.scrolled-nav_&]:bg-dark/10">
            <button
              onClick={() => setLang('pl')}
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-300 ${lang === 'pl' ? 'bg-primary text-background' : 'text-current/60 hover:text-current'}`}
            >PL</button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-300 ${lang === 'en' ? 'bg-primary text-background' : 'text-current/60 hover:text-current'}`}
            >EN</button>
          </div>

          {/* CTA */}
          <button className="cta-btn magnetic-btn bg-white text-primary px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors duration-300">
            <span className="relative z-10">Umów sesję</span>
          </button>

          {/* Hamburger — mobile/tablet */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-3 bg-background/95 backdrop-blur-xl rounded-[1.5rem] border border-dark/10 p-6 flex flex-col gap-3">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-dark font-sans text-sm font-medium py-2 px-4 rounded-xl hover:bg-primary/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// ==========================================
// B. HERO SECTION
// ==========================================
const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="strona-glowna" ref={sectionRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 px-8 md:px-16 bg-dark">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
          alt="Organic nature background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* SEO H1 — visually hidden, screen-reader accessible */}
        <h1 className="sr-only">Terapia Online i Psychoterapia w Warszawie – Karolina Bednarska</h1>

        <p className="hero-reveal text-background/80 font-mono text-sm tracking-widest uppercase mb-4">
          Terapia Online & W Gabinecie
        </p>

        {/* Decorative tagline — aria-hidden, visual only */}
        <p aria-hidden="true" className="hero-reveal text-white flex flex-col leading-[0.85] tracking-tighter mb-8">
          <span className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl">Rozwój to</span>
          <span className="font-drama italic text-accent text-7xl md:text-9xl lg:text-[11rem] ml-0 md:ml-12">Proces.</span>
        </p>

        <div className="hero-reveal flex gap-4">
          <button className="magnetic-btn bg-accent text-white px-8 py-4 rounded-[2rem] font-bold text-lg flex items-center gap-3">
            <span className="relative z-10">Rozpocznij terapię</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </button>
        </div>
      </div>
    </section>
  );
};


// ==========================================
// D. ABOUT / BIO
// ==========================================
const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-img', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        x: -40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
      gsap.from('.about-reveal', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const chips = ['Certyfikowany Terapeuta EMDR', 'Psycholog', 'Superwizja regularna', 'Neurobiologia traumy'];

  return (
    <section id="o-mnie" ref={sectionRef} className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Portrait */}
        <div className="about-img max-w-sm mx-auto md:mx-0 w-full">
          <img
            src="/Images/portrait.jpg"
            alt="Karolina Bednarska — psychoterapeuta i specjalistka EMDR"
            className="w-full aspect-[3/4] object-cover rounded-[3rem]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="about-reveal font-mono text-sm text-accent uppercase tracking-widest">POZNAJMY SIĘ</p>

          <h2 className="about-reveal font-drama italic text-4xl md:text-5xl text-primary leading-tight">
            Jestem tu, żeby towarzyszyć Ci w zmianie.
          </h2>

          <p className="about-reveal text-dark/70 text-lg leading-relaxed">
            Jestem psychologiem oraz dyplomowanym terapeutą EMDR. Specjalizuję się w psychologii
            traumy i pracuję z osobami, które doświadczyły trudnych przeżyć — zarówno jednorazowych
            zdarzeń, jak i przewlekłego stresu wpływającego na codzienne funkcjonowanie.
          </p>

          <p className="about-reveal text-dark/70 leading-relaxed">
            Ukończyłam akredytowane szkolenie z psychoterapii i posiadam certyfikat terapeuty EMDR
            przyznawany przez Polskie Towarzystwo EMDR. Regularnie podnoszę swoje kwalifikacje,
            uczestnicząc w superwizjach i szkoleniach z zakresu neurobiologii traumy.
          </p>

          <div className="about-reveal flex flex-wrap gap-2 mt-2">
            {chips.map(chip => (
              <span key={chip} className="font-mono text-xs text-primary border border-primary/20 rounded-full px-3 py-1.5">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// E. AREAS OF SUPPORT
// ==========================================
const SupportAreas = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.area-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const areas = [
    {
      icon: <Activity className="w-5 h-5 text-accent" />,
      title: 'Zaburzenia nastroju',
      desc: 'Depresja, stany lękowe, chroniczny stres, wypalenie zawodowe oraz dolegliwości somatyczne o podłożu psychologicznym.'
    },
    {
      icon: <Shield className="w-5 h-5 text-accent" />,
      title: 'Zaburzenia lękowe',
      desc: 'Fobie, napady paniki, lęk uogólniony, PTSD i reakcje potraumatyczne wymagające specjalistycznej interwencji EMDR.'
    },
    {
      icon: <Heart className="w-5 h-5 text-accent" />,
      title: 'Zaburzenia odżywiania i uzależnienia',
      desc: 'Anoreksja, bulimia, kompulsywne objadanie się, uzależnienia behawioralne i substancyjne oraz ich psychologiczne źródła.'
    },
    {
      icon: <Users className="w-5 h-5 text-accent" />,
      title: 'Relacje i związki',
      desc: 'Trudności w relacjach partnerskich, rodzinnych i zawodowych, w tym dysfunkcje seksualne oraz kryzysy w związkach.'
    },
  ];

  return (
    <section id="obszary" ref={sectionRef} className="bg-white rounded-[3rem] mx-4 py-24 px-8 md:px-16 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm text-accent uppercase tracking-widest mb-4">GŁÓWNE OBSZARY WSPARCIA</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-dark leading-tight max-w-xl">
            Każda trudność zasługuje<br />na właściwą uwagę.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map(area => (
            <div key={area.title} className="area-card bg-background rounded-[2rem] p-8 border border-primary/10 hover-lift cursor-default flex gap-6">
              <div className="bg-accent/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-1">
                {area.icon}
              </div>
              <div>
                <h3 className="font-sans font-bold text-xl mb-2 text-dark">{area.title}</h3>
                <p className="text-dark/60 leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// F. TESTIMONIALS
// ==========================================
const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: 'Sesje z Karoliną zmieniły mój sposób rozumienia siebie. Po raz pierwszy poczułam, że ktoś naprawdę słucha — bez oceniania, bez pośpiechu. Terapia EMDR pomogła mi przepracować to, co wydawało się nienaruszalne.',
      author: 'A.K., Warszawa',
      tag: 'Terapia EMDR'
    },
    {
      quote: 'Zgłosiłam się z problemami ze snem i narastającym lękiem. Karolina stworzyła przestrzeń, w której czułam się bezpiecznie od pierwszej sesji. Po kilku tygodniach zauważyłam realne zmiany.',
      author: 'M.W., online',
      tag: 'Lęk i bezsenność'
    },
    {
      quote: 'Trafiłam do Karoliny w momencie kryzysu. Jej spokój, kompetencja i zaangażowanie pomogły mi odzyskać grunt pod nogami. Polecam każdemu, kto szuka rzetelnej i empatycznej pomocy.',
      author: 'J.B., Kraków',
      tag: 'Coaching & Terapia'
    },
  ];

  return (
    <section id="opinie" ref={sectionRef} className="bg-dark text-background rounded-[3rem] mx-4 py-24 px-8 md:px-16 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-sm text-accent uppercase tracking-widest mb-4">OPINIE</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl leading-tight">
            Słowa, które<br />dają odwagę innym.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.author} className="testimonial-card bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-4 hover-lift">
              <span aria-hidden="true" className="font-drama italic text-6xl text-accent leading-none">"</span>
              <p className="text-background/80 leading-relaxed flex-1">{t.quote}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="font-sans text-sm font-medium text-background/60">{t.author}</span>
                <span className="font-mono text-xs text-accent border border-accent/30 rounded-full px-3 py-1">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// G. PHILOSOPHY
// ==========================================
const Philosophy = () => {
  const philRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-text', {
        scrollTrigger: {
          trigger: philRef.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    }, philRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="podejscie" ref={philRef} className="relative py-40 px-8 md:px-16 bg-dark text-background overflow-hidden rounded-[3rem] mx-4 mb-8">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop"
          alt="Texture"
          className="w-full h-full object-cover opacity-10 grayscale"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-12">
        <p className="phil-text text-xl md:text-2xl text-background/60 font-sans max-w-2xl">
          Większość terapii skupia się na: <span className="line-through opacity-70">leczeniu objawów w pośpiechu.</span>
        </p>
        <p className="phil-text text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-tight">
          My skupiamy się na: <br />
          <span className="font-drama italic text-accent tracking-normal">głębokim zrozumieniu.</span>
        </p>
      </div>
    </section>
  );
};

// ==========================================
// H. JAK PRACUJĘ — Sticky-stack cards
// ==========================================
const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.geo-spin', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
      gsap.to('.laser-scan', { y: '100%', duration: 2, repeat: -1, yoyo: true, ease: 'linear' });
      gsap.to('.pulse-wave', { strokeDashoffset: 0, duration: 2, repeat: -1, ease: 'power1.inOut' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Pierwsza rozmowa",
      desc: "Na pierwszym spotkaniu rozmawiamy o tym, co Cię tu sprowadziło. Bez formularzy, bez pośpiechu. Pracuję online i w gabinecie w Warszawie — wybierasz, co bardziej Ci odpowiada. Celem jest zrozumienie Twojej sytuacji i wspólna ocena, czy ta forma pracy ma dla Ciebie sens.",
      detail: "Online · Gabinet · Twój grafik",
      visual: (
        <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-40 md:h-40 geo-spin opacity-80 text-primary">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Terapia EMDR",
      desc: "EMDR to metoda oparta na badaniach, która pozwala przetwarzać trudne wspomnienia bez konieczności szczegółowego ich omawiania. Jako certyfikowany terapeuta EMDR używam jej w pracy z traumą, lękiem i reakcjami stresowymi, które utknęły w ciele i nie poddają się samej rozmowie.",
      detail: "Certyfikat PT EMDR · Metoda oparta na dowodach",
      visual: (
        <div className="relative w-32 h-32 md:w-40 md:h-40 border border-primary/20 flex flex-wrap content-start overflow-hidden">
          {[...Array(64)].map((_, i) => <div key={i} className="w-4 h-4 md:w-5 md:h-5 border border-primary/10"></div>)}
          <div className="laser-scan absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_#CC5833]"></div>
        </div>
      )
    },
    {
      num: "03",
      title: "Dalsze kroki",
      desc: "Terapia nie kończy się na sesji. Wspólnie budujemy konkretne strategie na codzienne sytuacje — od radzenia sobie z nawrotami lęku po zmiany w relacjach czy pracy. Niektórzy przychodzą na kilka spotkań, inni zostają dłużej. Tempo jest Twoje.",
      detail: "Konsultacja · Terapia · Coaching",
      visual: (
        <svg viewBox="0 0 100 50" className="w-32 h-16 md:w-40 md:h-20 text-accent">
          <path
            className="pulse-wave"
            d="M 0 25 L 30 25 L 40 5 L 50 45 L 60 25 L 100 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="100 100"
            strokeDashoffset="100"
          />
        </svg>
      )
    }
  ];

  return (
    <section id="metody" className="bg-background relative" ref={containerRef}>
      {steps.map((step, i) => (
        <div key={step.num} className="sticky top-0 h-[100dvh] flex items-center justify-center p-4 md:p-8" style={{ zIndex: i + 1 }}>
          <div className="bg-white w-full max-w-4xl rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl border border-dark/5 gap-8">
            <div className="flex-1 max-w-lg">
              <span className="font-mono text-accent text-sm mb-3 block tracking-wider">{step.num}</span>
              <h3 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-dark">{step.title}</h3>
              <p className="text-dark/65 text-base md:text-lg leading-relaxed mb-4">{step.desc}</p>
              <span className="font-mono text-xs text-primary/50 tracking-wider uppercase">{step.detail}</span>
            </div>
            <div className="flex justify-center items-center shrink-0">
              {step.visual}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// ==========================================
// I. PRICING / MEMBERSHIP
// ==========================================
const Pricing = () => {
  return (
    <section id="wspolpraca" className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4">Wybierz formę wsparcia</h2>
        <p className="text-dark/60">Gabinet i przestrzeń online</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="bg-white rounded-[2rem] p-10 border border-dark/10 text-center">
          <h3 className="font-sans font-bold text-2xl mb-2">Konsultacja</h3>
          <p className="text-dark/60 text-sm mb-8">Pierwsze spotkanie i ocena potrzeb.</p>
          <button className="magnetic-btn w-full py-4 rounded-full border border-dark text-dark font-bold hover:bg-dark hover:text-white transition-colors">
            Umów wizytę
          </button>
        </div>

        <div className="bg-primary text-background rounded-[2rem] p-12 border-2 border-accent transform scale-105 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1 rounded-bl-xl font-mono">
            REKOMENDOWANE
          </div>
          <h3 className="font-sans font-bold text-3xl mb-2">Terapia EMDR</h3>
          <p className="text-background/70 text-sm mb-8">Głębokie przetwarzanie traumy.</p>
          <button className="magnetic-btn w-full py-4 rounded-full bg-accent text-white font-bold transition-transform">
            Rozpocznij terapię
          </button>
        </div>

        <div className="bg-white rounded-[2rem] p-10 border border-dark/10 text-center">
          <h3 className="font-sans font-bold text-2xl mb-2">Coaching</h3>
          <p className="text-dark/60 text-sm mb-8">Rozwój osobisty i zawodowy.</p>
          <button className="magnetic-btn w-full py-4 rounded-full border border-dark text-dark font-bold hover:bg-dark hover:text-white transition-colors">
            Zarezerwuj
          </button>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// J. CONTACT
// ==========================================
const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="kontakt" ref={sectionRef} className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-8">

        {/* Left — heading + CTA */}
        <div className="flex flex-col justify-center gap-6">
          <p className="contact-reveal font-mono text-sm text-accent uppercase tracking-widest">UMÓW WIZYTĘ</p>
          <h2 className="contact-reveal font-drama italic text-5xl md:text-6xl lg:text-7xl text-primary leading-tight">
            Zacznijmy<br />rozmawiać.
          </h2>
          <p className="contact-reveal text-dark/60 leading-relaxed max-w-sm">
            Pierwsza sesja to rozmowa bez zobowiązań — możliwość poznania się i oceny,
            czy ta forma współpracy będzie dla Ciebie właściwa.
          </p>
          <div className="contact-reveal">
            <a
              href="mailto:mojaterapiaonline@gmail.com"
              className="magnetic-btn inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-[2rem] font-bold text-lg"
            >
              Wyślij wiadomość
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right — contact detail cards */}
        <div className="flex flex-col gap-4 justify-center">
          <div className="contact-reveal bg-white rounded-[2rem] p-6 border border-dark/10 flex items-start gap-4">
            <div className="bg-accent/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-1">E-MAIL</p>
              <p className="font-sans font-medium text-dark">mojaterapiaonline@gmail.com</p>
              <p className="text-dark/50 text-sm mt-1">Odpowiedź w ciągu 24h</p>
            </div>
          </div>

          <div className="contact-reveal bg-white rounded-[2rem] p-6 border border-dark/10 flex items-start gap-4">
            <div className="bg-accent/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-mono text-xs text-dark/40 uppercase tracking-widest mb-1">TELEFON & WHATSAPP</p>
              <p className="font-sans font-medium text-dark">+48 794 121 388</p>
              <p className="text-dark/50 text-sm mt-1">Pon–Pt, 9:00–18:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Warsaw office card */}
      <div className="contact-reveal bg-primary text-background rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="bg-background/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-background" />
          </div>
          <div>
            <p className="font-mono text-xs text-background/50 uppercase tracking-widest mb-1">GABINET STACJONARNY</p>
            <p className="font-sans font-bold text-xl text-background">Warszawa</p>
            <p className="text-background/60 text-sm mt-1">Szczegółowy adres podany po umówieniu wizyty.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="font-mono text-xs border border-background/20 text-background/70 rounded-full px-4 py-2">Online</span>
          <span className="font-mono text-xs border border-background/20 text-background/70 rounded-full px-4 py-2">Warszawa</span>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// K. FOOTER
// ==========================================
const Footer = () => {
  return (
    <footer className="bg-dark text-background rounded-t-[4rem] px-8 py-16 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand */}
        <div className="col-span-1">
          <h2 className="font-sans font-bold text-3xl mb-2">Karolina Bednarska</h2>
          <p className="font-drama italic text-xl text-background/60 mb-8">Terapia Online & Gabinet</p>
          <div className="flex items-center gap-3 bg-white/5 inline-flex px-4 py-2 rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-xs uppercase tracking-wider text-background/80">Rejestracja Aktywna</span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-mono text-sm uppercase tracking-widest text-accent mb-6">Nawigacja</h4>
          <ul className="space-y-4 text-background/70 font-sans text-sm">
            <li><a href="#o-mnie" className="hover:text-white transition-colors">O Mnie</a></li>
            <li><a href="#wspolpraca" className="hover:text-white transition-colors">Oferta</a></li>
            <li><a href="#metody" className="hover:text-white transition-colors">Jak pracuję</a></li>
            <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-mono text-sm uppercase tracking-widest text-accent mb-6">Legal</h4>
          <ul className="space-y-4 text-background/70 font-sans text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Regulamin</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-mono text-sm uppercase tracking-widest text-accent mb-6">Kontakt</h4>
          <ul className="space-y-4 text-background/70 font-sans text-sm">
            <li>
              <a href="mailto:mojaterapiaonline@gmail.com" className="hover:text-white transition-colors break-all">
                mojaterapiaonline@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+48794121388" className="hover:text-white transition-colors">
                +48 794 121 388
              </a>
            </li>
            <li className="text-background/50">Warszawa & Online</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// APP COMPONENT
// ==========================================
function App() {
  return (
    <div className="bg-background text-dark min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <SupportAreas />
      <Testimonials />
      <Philosophy />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

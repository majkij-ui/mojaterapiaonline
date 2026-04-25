import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Menu, X, Mail, Phone, MapPin,
  Brain, Tornado, Apple, Heart,
  ChevronDown, ChevronLeft, ChevronRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// TODO: Replace with real Formspree form ID once Karolina creates account at formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// ==========================================
// TOP CONTACT BAR
// ==========================================
const TopBar = () => (
  <div className="hidden md:flex fixed top-0 left-0 right-0 z-[60] bg-dark text-background/80 px-6 py-2 items-center justify-end gap-6 font-mono text-xs tracking-wider">
    <a href="mailto:mojaterapiaonline@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
      <Mail className="w-3 h-3" /> mojaterapiaonline@gmail.com
    </a>
    <a href="tel:+48794121388" className="hover:text-white transition-colors flex items-center gap-2">
      <Phone className="w-3 h-3" /> +48 794 121 388
    </a>
  </div>
);

// ==========================================
// A. NAVBAR
// ==========================================
const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'metody' | 'oferta' | null
  const [lang, setLang] = useState('pl');

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

  // Both dropdowns scroll to the same anchor on the one-page
  const metodyDropdown = [
    { label: 'Psychoterapia w nurcie Psychologii Procesu', href: '#metody' },
    { label: 'Terapia EMDR', href: '#metody' },
    { label: 'Psychotraumatologia poznawczo-behawioralna', href: '#metody' },
  ];

  const ofertaDropdown = [
    { label: 'Psychoterapia indywidualna', href: '#oferta' },
    { label: 'Psychoterapia par i małżeństw', href: '#oferta' },
    { label: 'Psychoterapia dzieci i młodzieży od 12 r.ż.', href: '#oferta' },
    { label: 'Konsultacje seksuologiczne', href: '#oferta' },
    { label: 'Terapia EMDR', href: '#oferta' },
  ];

  const simpleLinks = [
    { label: 'Strona główna', href: '#strona-glowna' },
    { label: 'O Mnie', href: '#o-mnie' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-12 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 py-3 flex flex-col w-[92%] max-w-6xl border border-transparent [&.scrolled-nav]:bg-background/85 [&.scrolled-nav]:backdrop-blur-xl [&.scrolled-nav]:border-dark/10 [&.scrolled-nav]:text-primary [&.scrolled-nav_button.cta-btn]:bg-accent [&.scrolled-nav_button.cta-btn]:text-white text-white"
    >
      <div className="flex items-center justify-between w-full gap-4">
        {/* Brand block */}
        <a href="#strona-glowna" className="flex flex-col leading-tight shrink-0">
          <span className="font-sans font-bold text-lg md:text-xl tracking-tight">Karolina Bednarska</span>
          <span className="font-drama italic text-xs md:text-sm opacity-70">Psychoterapia</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5 text-sm font-medium">
          <a href="#strona-glowna" className="hover-lift">Strona główna</a>
          <a href="#o-mnie" className="hover-lift">O Mnie</a>

          {/* Metody pracy dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('metody')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover-lift flex items-center gap-1">
              Metody pracy <ChevronDown className="w-3 h-3" />
            </button>
            {openDropdown === 'metody' && (
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-background/95 backdrop-blur-xl border border-dark/10 rounded-2xl p-3 min-w-[320px] flex flex-col gap-1 shadow-xl">
                  {metodyDropdown.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-dark text-sm font-sans py-2 px-3 rounded-xl hover:bg-primary/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Oferta dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('oferta')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover-lift flex items-center gap-1">
              Oferta <ChevronDown className="w-3 h-3" />
            </button>
            {openDropdown === 'oferta' && (
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-background/95 backdrop-blur-xl border border-dark/10 rounded-2xl p-3 min-w-[320px] flex flex-col gap-1 shadow-xl">
                  {ofertaDropdown.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-dark text-sm font-sans py-2 px-3 rounded-xl hover:bg-primary/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#kontakt" className="hover-lift">Kontakt</a>
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="hidden md:flex items-center gap-1 bg-dark/20 rounded-full p-1 [.scrolled-nav_&]:bg-dark/10">
            <button
              onClick={() => setLang('pl')}
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold transition-all ${lang === 'pl' ? 'bg-primary text-background' : 'opacity-60'}`}
            >PL</button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold transition-all ${lang === 'en' ? 'bg-primary text-background' : 'opacity-60'}`}
            >EN</button>
          </div>

          <a
            href="#kontakt"
            className="cta-btn magnetic-btn bg-white text-primary px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors duration-300"
          >
            <span className="relative z-10">Umów wizytę</span>
          </a>

          {/* Hamburger */}
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
        <div className="lg:hidden mt-3 bg-background/95 backdrop-blur-xl rounded-[1.5rem] border border-dark/10 p-5 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
          {simpleLinks.slice(0, 2).map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-dark font-sans text-sm font-medium py-2 px-4 rounded-xl hover:bg-primary/10 transition-colors"
            >{link.label}</a>
          ))}

          <details className="group">
            <summary className="text-dark font-sans text-sm font-medium py-2 px-4 rounded-xl hover:bg-primary/10 transition-colors flex items-center justify-between cursor-pointer">
              Metody pracy <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="ml-4 flex flex-col gap-1 mt-1">
              {metodyDropdown.map(item => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                  className="text-dark/70 font-sans text-xs py-2 px-3 rounded-xl hover:bg-primary/10 transition-colors">{item.label}</a>
              ))}
            </div>
          </details>

          <details className="group">
            <summary className="text-dark font-sans text-sm font-medium py-2 px-4 rounded-xl hover:bg-primary/10 transition-colors flex items-center justify-between cursor-pointer">
              Oferta <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="ml-4 flex flex-col gap-1 mt-1">
              {ofertaDropdown.map(item => (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                  className="text-dark/70 font-sans text-xs py-2 px-3 rounded-xl hover:bg-primary/10 transition-colors">{item.label}</a>
              ))}
            </div>
          </details>

          <a href="#kontakt" onClick={() => setMenuOpen(false)}
            className="text-dark font-sans text-sm font-medium py-2 px-4 rounded-xl hover:bg-primary/10 transition-colors">Kontakt</a>
        </div>
      )}
    </nav>
  );
};

// ==========================================
// B. HERO
// ==========================================
const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.15,
        ease: 'power3.out', delay: 0.2,
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
        <h1 className="sr-only">Psychoterapia Online i w gabinecie – Warszawa, Piaseczno – Karolina Bednarska</h1>

        <p className="hero-reveal text-background/80 font-mono text-sm tracking-widest uppercase mb-4">
          Terapia online & w gabinecie (Warszawa lub Piaseczno)
        </p>

        <p aria-hidden="true" className="hero-reveal text-white flex flex-col leading-[0.85] tracking-tighter mb-8">
          <span className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl">Rozwój to</span>
          <span className="font-drama italic text-accent text-7xl md:text-9xl lg:text-[11rem] ml-0 md:ml-12">Proces</span>
        </p>

        <div className="hero-reveal flex gap-4">
          <a
            href="#kontakt"
            className="magnetic-btn bg-accent text-white px-8 py-4 rounded-[2rem] font-bold text-lg flex items-center gap-3"
          >
            <span className="relative z-10">Zarezerwuj konsultację</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// C. ABOUT / BIO
// ==========================================
const About = () => {
  const sectionRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-img', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        x: -40, opacity: 0, duration: 1.2, ease: 'power3.out',
      });
      gsap.from('.about-reveal', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 30, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const chips = ['Psychoterapeuta', 'Terapeuta EMDR', 'Psycholog', 'Psychotraumatolog', 'Superwizja regularna'];

  return (
    <section id="o-mnie" ref={sectionRef} className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Portrait */}
        <div className="about-img max-w-sm mx-auto md:mx-0 w-full md:sticky md:top-32">
          <img
            src="/Images/portrait-new.jpg"
            alt="Karolina Bednarska — psychoterapeuta i terapeuta EMDR"
            className="w-full aspect-[3/4] object-cover rounded-[3rem]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <p className="about-reveal font-mono text-sm text-accent uppercase tracking-widest">POZNAJMY SIĘ</p>

          <h2 className="about-reveal font-drama italic text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
            Witaj na stronie mojego gabinetu online, stacjonującego także w Warszawie oraz Piasecznie.
          </h2>

          <p className="about-reveal text-dark/75 text-base md:text-lg leading-relaxed">
            Nazywam się Karolina Bednarska, jestem psychologiem oraz dyplomowanym terapeutą EMDR. Moje
            kwalifikacje zawodowe obejmują także program licencyjny w Instytucie Psychologii Procesu
            uprawniający mnie do pracy psychoterapeutycznej pod superwizją w nurcie psychoterapii zorientowanej
            na proces. Ukończyłam także studia podyplomowe z psychotraumatologii. Odbyłam liczne warsztaty
            z seksuologii, pracy z ciałem, oddechem oraz mindfulness. Stale dążę do poszerzania swojej wiedzy
            i doskonalenia narzędzi pracy.
          </p>

          {expanded && (
            <div className="about-reveal flex flex-col gap-4 text-dark/70 leading-relaxed border-l-2 border-accent/40 pl-6">
              <p>
                Zanim zdecydowałam się na podążanie za swoją pasją, jaką jest towarzyszenie osobom na drodze
                ich rozwoju, ukończyłam studia inżynierskie i przez kilka lat z sukcesami pracowałam
                w międzynarodowym biznesie. To doświadczenie pozwala mi dziś lepiej rozumieć wyzwania
                w strukturach korporacyjnych. W swojej praktyce psychoterapeutycznej łączę wypracowane
                analityczne podejście z głęboką empatią i szacunkiem do historii osób, z którymi pracuję.
              </p>
              <p>
                Towarzyszę moim klientom w przekraczaniu ograniczeń, odkrywaniu zasobów i rozwiązywaniu
                wewnętrznych konfliktów. Wierzę, że kryzys nie musi być końcem, lecz etapem, który przybliża
                nas do prawdy o nas samych i otwiera drogę do naszego indywidualnego potencjału.
              </p>
              <p>
                Prywatnie moją ulubioną rutyną jest kontakt z naturą oraz aktywność fizyczna. Cenię sobie
                autentyczne relacje z ludźmi. Interesuje mnie to, co wpływa na satysfakcję z życia. Eksploruję
                psychologię relacji oraz kulturę i sztukę jako formy wyrazu jednostek oraz społeczności.
              </p>
              <p>
                Psychoterapię postrzegam jako proces, głęboką pracę, która może prowadzić do wewnętrznej
                wolności, spokoju oraz sprawczości w podejmowaniu świadomych decyzji. Poprzez obserwację
                i uznanie emocji, myśli i fizycznych doznań — zarówno w życiu wewnętrznym, naszych snach,
                a także relacjach — możemy czerpać wiedzę o nas samych. Poprzez poznawanie siebie możemy
                uwolnić się od automatyzmów emocjonalnych i niesłużących nam zachowań.
              </p>
            </div>
          )}

          <button
            onClick={() => setExpanded(v => !v)}
            className="about-reveal self-start text-accent font-mono text-sm uppercase tracking-widest border-b border-accent/40 hover:border-accent pb-1 transition-colors"
          >
            {expanded ? 'zwiń' : 'czytaj dalej'}
          </button>

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
// D. AREAS OF SUPPORT
// ==========================================
const SupportAreas = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.area-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 40, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const areas = [
    {
      icon: <Brain className="w-5 h-5 text-accent" />,
      title: 'Zaburzenia nastroju, dolegliwości psychosomatyczne',
      items: [
        'Zaburzenia depresyjne',
        'Zaburzenia dwubiegunowe',
        'Problemy ze snem',
        'Przewlekłe zmęczenie',
        'Wypalenie zawodowe',
      ],
    },
    {
      icon: <Tornado className="w-5 h-5 text-accent" />,
      title: 'Zaburzenia lękowe',
      items: [
        'Zespół stresu pourazowego (terapia traumy)',
        'Zaburzenia obsesyjno-kompulsywne',
        'Fobie i natręctwa',
        'Stany lękowe',
        'Niskie poczucie własnej wartości',
      ],
    },
    {
      icon: <Apple className="w-5 h-5 text-accent" />,
      title: 'Zaburzenia odżywiania, uzależnienia',
      items: [
        'Zaburzenia odżywiania (kompulsywne objadanie się, bulimia, anoreksja)',
        'Uzależnienia behawioralne oraz od substancji: jedzenia, zakupów, mediów społecznościowych, pracy, seksu itp.',
      ],
    },
    {
      icon: <Heart className="w-5 h-5 text-accent" />,
      title: 'Relacje i związki',
      items: [
        'Trudności w relacjach partnerskich, rodzinnych i zawodowych: wycofanie, nieadaptacyjne sposoby radzenia sobie, trudności komunikacyjne',
        'Kryzys w związku: oddalenie się partnerów, zmiany życiowe, konflikty, niesatysfakcjonujące życie seksualne, brak przyjemności z intymności fizycznej',
      ],
    },
  ];

  return (
    <section id="obszary" ref={sectionRef} className="bg-white rounded-[3rem] mx-4 py-24 px-8 md:px-16 mb-8">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-sm text-accent uppercase tracking-widest mb-12">GŁÓWNE OBSZARY WSPARCIA</p>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map(area => (
            <div key={area.title} className="area-card bg-background rounded-[2rem] p-8 border border-primary/10 hover-lift cursor-default flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
                  {area.icon}
                </div>
                <h3 className="font-sans font-bold text-lg md:text-xl text-dark leading-tight pt-1">{area.title}</h3>
              </div>
              <ul className="space-y-2 text-dark/65 text-sm md:text-base leading-relaxed pl-1">
                {area.items.map(item => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-1.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// E. TESTIMONIALS (ZnanyLekarz)
// ==========================================
const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: 'Z całego serca polecam! Pani Karolina jest bardzo zaangażowana w niesienie wsparcia i analizie stanów, przez które przechodzę. Pomogła mi zrozumieć moje traumy oraz emocje, czuję się silniejsza po każdym spotkaniu i zaczynam rozumieć, jak mogę poradzić sobie ze swoimi przeżyciami, żeby móc częściej oddychać swobodnie. Bardzo szczerze zachęcam — wglądy w siebie, do których pomaga mi dotrzeć, to dla mnie jedna z najważniejszych rzeczy.',
      author: 'A.W.',
    },
    {
      quote: 'Pani Karolina to 5! Terapeuta, z którym miałam przyjemność współpracować. Dopiero przy niej poczułam się bezpiecznie. Czuć zdecydowanie zaangażowanie. Przede wszystkim słucha i nie muszę powtarzać podstawowych informacji. Pomogła mi z moimi lękami, obecnie dużo lepiej śpię. Polecam z całego serca!',
      author: 'K.W.',
    },
    {
      quote: 'Dużo podróżuję i sceptycznie nastawiony postanowiłem dać szansę terapii online — trafiłem na Panią Karolinę i od pierwszej sesji wiedziałem, że będę chciał kontynuować terapię. Czuć zaangażowanie i empatię. Mimo że czułem się z całym pomysłem takiej terapii niezręcznie, to Pani Karolina potrafi sprawić, że rozmowy na każdy temat przebiegają tak komfortowo, na ile to możliwe. Widać uważność i przygotowanie do każdego spotkania. Mogę śmiało polecić Panią Karolinę.',
      author: 'M.K.',
    },
  ];

  return (
    <section id="opinie" ref={sectionRef} className="bg-dark text-background rounded-[3rem] mx-4 py-24 px-8 md:px-16 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-sans font-bold text-4xl md:text-5xl leading-tight">
            Opinie
          </h2>
          <span className="font-mono text-xs text-accent uppercase tracking-widest border border-accent/40 rounded-full px-4 py-2">
            źródło: ZnanyLekarz
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.author} className="testimonial-card bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-4 hover-lift">
              <span aria-hidden="true" className="font-drama italic text-6xl text-accent leading-none">"</span>
              <p className="text-background/80 leading-relaxed flex-1 text-sm md:text-base">{t.quote}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="font-sans text-sm font-medium text-background/60">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// F. METODY PRACY (Sticky-stack — replaces Process)
// ==========================================
const Methods = () => {
  const sectionRef = useRef(null);

  const methods = [
    {
      num: '01',
      title: 'Psychoterapia w nurcie Psychologii Procesu',
      paras: [
        'Psychoterapia w nurcie Psychologii Procesu należy do humanistyczno-doświadczeniowej grupy podejść psychoterapeutycznych. Charakteryzuje ją podmiotowość (klient jako partner, nie „pacjent do naprawienia"), holizm (jedność umysłu, ciała i emocji), nacisk na doświadczanie zamiast intelektualizowania, oraz zaufanie do zasobów klienta.',
        'W Polsce nurt ten jest uznawany m.in. przez Polskie Towarzystwo Psychologiczne. Szkolenie w Instytucie Psychologii Procesu jest akredytowane przez Polskie Stowarzyszenie Psychoterapeutów i Praktyków Psychologii Procesu, członka Polskiej Rady Psychoterapii.',
        'Innowacyjność pracy z procesem polega na zastąpieniu chęci „leczenia" trudności próbą odkrycia ich znaczenia. Symptomy nie są wyłącznie problemami do usunięcia — niosą sens i potencjał rozwojowy. Praca metodą procesu pozwala nadać doświadczeniom egzystencjalny sens.',
      ],
      detail: 'Podejście humanistyczno-doświadczeniowe',
    },
    {
      num: '02',
      title: 'Terapia EMDR',
      paras: [
        'Terapia EMDR to metoda rekomendowana przez Światową Organizację Zdrowia (WHO). Opiera się na założeniu, że dzisiejsze trudności — lęk, depresja, konflikty — mają źródło w nieprzetworzonych doświadczeniach z przeszłości.',
        'Jak to działa: poprzez stymulację bilateralną (ruchy oczu, dźwięki lub dotyk) pomagamy mózgowi bezpiecznie odblokować i przetworzyć bolesne wspomnienia. Cel: zmniejszenie emocjonalnego ciężaru traumy i zmiana negatywnych przekonań na temat siebie i świata.',
        'Skuteczna nie tylko w leczeniu PTSD, ale także zaburzeń lękowych, depresji oraz trudności emocjonalnych wynikających z zaniedbań czy stresu relacyjnego.',
      ],
      detail: 'Rekomendacja WHO · Praca z traumą',
    },
    {
      num: '03',
      title: 'Psychotraumatologia poznawczo-behawioralna',
      paras: [
        'Psychotraumatologia w nurcie poznawczo-behawioralnym (CBT) jest uznawana za jeden z najskuteczniejszych i najlepiej przebadanych modeli terapeutycznych. Koncentruje się na mechanizmach utrzymujących skutki traumy w codziennym życiu.',
        'Celem pracy jest pomoc w bezpiecznym przetworzeniu bolesnych wspomnień przez techniki ekspozycyjne oraz pracę nad zmianą paradygmatu myślenia o sobie i świecie po trudnych doświadczeniach.',
        'Co daje to podejście: jasna struktura i konkretne narzędzia pozwalające zrozumieć fizjologiczne i psychiczne mechanizmy reakcji traumatycznej, zredukować lęk i unikanie, odzyskać poczucie sprawstwa i kontroli nad własnym życiem oraz przekształcić negatywne przekonania.',
      ],
      detail: 'CBT · Najlepiej przebadany model',
    },
  ];

  return (
    <section id="metody" ref={sectionRef} className="bg-background relative">
      {methods.map((m, i) => (
        <div
          key={m.num}
          className="sticky top-0 h-[100dvh] flex items-center justify-center p-4 md:p-8"
          style={{ zIndex: i + 1 }}
        >
          <div className="bg-white w-full max-w-5xl rounded-[3rem] p-8 md:p-12 shadow-xl border border-dark/5 max-h-[85dvh] overflow-y-auto">
            <span className="font-mono text-accent text-sm mb-3 block tracking-wider">{m.num} · METODA PRACY</span>
            <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-dark leading-tight">{m.title}</h3>
            <div className="flex flex-col gap-4 text-dark/70 leading-relaxed text-base md:text-lg mb-6">
              {m.paras.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>
            <span className="font-mono text-xs text-primary/60 tracking-wider uppercase">{m.detail}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

// ==========================================
// G. OFERTA / PRICING (5 cards, horizontal scroll)
// ==========================================
const Pricing = () => {
  const scrollerRef = useRef(null);

  const offers = [
    { title: 'Psychoterapia indywidualna', duration: '55 minut', price: '200 zł', cta: 'Umów wizytę' },
    { title: 'Psychoterapia par i małżeństw', duration: '60 minut', price: '240 zł', cta: 'Umów terapię', highlight: true },
    { title: 'Psychoterapia dzieci i młodzieży od 12 r.ż.', duration: '55 minut', price: '200 zł', cta: 'Zarezerwuj termin' },
    { title: 'Konsultacja', subtitle: 'Pierwsze spotkanie i ocena potrzeb', duration: '55 minut', price: '200 zł', cta: 'Umów wizytę' },
    { title: 'Terapia EMDR', subtitle: 'Głęboka praca z traumą', duration: '55 minut', price: '200 zł', cta: 'Umów terapię' },
  ];

  const scrollBy = (dir) => {
    if (!scrollerRef.current) return;
    const cardWidth = 320;
    scrollerRef.current.scrollBy({ left: dir * (cardWidth + 24), behavior: 'smooth' });
  };

  return (
    <section id="oferta" className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12 px-4">
        <p className="font-mono text-sm text-accent uppercase tracking-widest mb-3">OFERTA</p>
        <h2 className="font-sans font-bold text-4xl md:text-5xl mb-4">Wybierz formę wsparcia</h2>
        <p className="text-dark/60">Gabinet i przestrzeń online</p>
      </div>

      {/* Scroll controls */}
      <div className="hidden md:flex justify-end gap-2 mb-4 max-w-7xl mx-auto px-4">
        <button onClick={() => scrollBy(-1)}
          className="w-12 h-12 rounded-full bg-white border border-dark/10 hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center"
          aria-label="Poprzednia oferta">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => scrollBy(1)}
          className="w-12 h-12 rounded-full bg-white border border-dark/10 hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center"
          aria-label="Następna oferta">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4 -mx-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {offers.map((o) => (
          <div
            key={o.title}
            className={`snap-start shrink-0 w-[300px] md:w-[340px] rounded-[2rem] p-8 flex flex-col ${
              o.highlight
                ? 'bg-primary text-background border-2 border-accent shadow-2xl'
                : 'bg-white border border-dark/10'
            }`}
          >
            <h3 className={`font-sans font-bold text-xl mb-1 leading-tight ${o.highlight ? 'text-background' : 'text-dark'}`}>
              {o.title}
            </h3>
            {o.subtitle && (
              <p className={`text-sm mb-4 ${o.highlight ? 'text-background/70' : 'text-dark/55'}`}>{o.subtitle}</p>
            )}
            <div className={`font-mono text-xs mt-auto pt-6 mb-2 uppercase tracking-wider ${o.highlight ? 'text-background/60' : 'text-dark/40'}`}>
              {o.duration}
            </div>
            <div className={`font-sans font-bold text-3xl mb-6 ${o.highlight ? 'text-accent' : 'text-primary'}`}>
              {o.price}
            </div>
            <a
              href="#kontakt"
              className={`magnetic-btn w-full py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                o.highlight
                  ? 'bg-accent text-white'
                  : 'border border-dark text-dark hover:bg-dark hover:text-white'
              }`}
            >
              {o.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// H. CONTACT (with form)
// ==========================================
const Contact = () => {
  const sectionRef = useRef(null);
  const [mode, setMode] = useState('online'); // 'online' | 'na-zywo'
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 30, opacity: 0, stagger: 0.12, duration: 1, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState('submitting');
    const formData = new FormData(e.target);
    formData.append('preferowana_forma', mode);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitState('success');
        e.target.reset();
      } else {
        setSubmitState('error');
      }
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <section id="kontakt" ref={sectionRef} className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-8">

        {/* Left — heading + intro */}
        <div className="flex flex-col justify-center gap-6">
          <p className="contact-reveal font-mono text-sm text-accent uppercase tracking-widest">UMÓW WIZYTĘ</p>
          <h2 className="contact-reveal font-drama italic text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            Zarezerwuj termin.
          </h2>
          <p className="contact-reveal text-dark/70 leading-relaxed text-lg">
            Pierwsza sesja to rozmowa, możliwość poznania się i oceny, czy ta forma współpracy będzie
            dla Ciebie właściwa.
          </p>
          <p className="contact-reveal text-dark/60 leading-relaxed">
            W celu umówienia terminu konsultacji proszę o wypełnienie formularza bądź bezpośredni kontakt
            telefoniczny/SMS.
          </p>
          <div className="contact-reveal flex flex-col gap-2 mt-2 font-mono text-sm">
            <a href="mailto:mojaterapiaonline@gmail.com" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <Mail className="w-4 h-4" /> mojaterapiaonline@gmail.com
            </a>
            <a href="tel:+48794121388" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> +48 794 121 388
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-reveal bg-white rounded-[2rem] p-8 md:p-10 border border-dark/10 shadow-sm">
          {submitState === 'success' ? (
            <div className="flex flex-col gap-4 py-12 text-center">
              <p className="font-drama italic text-3xl text-primary">Dziękuję!</p>
              <p className="text-dark/65">
                Twoja wiadomość została wysłana. Odpowiem najszybciej, jak to możliwe.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-2 block">
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  name="imie_nazwisko"
                  type="text"
                  required
                  className="w-full bg-background border border-dark/10 rounded-2xl px-4 py-3 text-dark focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-2 block">
                  Adres email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-background border border-dark/10 rounded-2xl px-4 py-3 text-dark focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <p className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-2">
                  Forma konsultacji
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('na-zywo')}
                    className={`flex-1 py-3 px-4 rounded-2xl border-2 transition-all font-medium text-sm ${
                      mode === 'na-zywo'
                        ? 'bg-primary text-background border-primary'
                        : 'bg-background border-dark/10 text-dark hover:border-primary/40'
                    }`}
                  >
                    Na żywo
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('online')}
                    className={`flex-1 py-3 px-4 rounded-2xl border-2 transition-all font-medium text-sm ${
                      mode === 'online'
                        ? 'bg-primary text-background border-primary'
                        : 'bg-background border-dark/10 text-dark hover:border-primary/40'
                    }`}
                  >
                    Online
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-dark/50 uppercase tracking-widest mb-2 block">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="wiadomosc"
                  rows={5}
                  required
                  placeholder="To miejsce na podanie preferencji dotyczących dnia i godziny spotkania, najlepiej podać przynajmniej dwa terminy."
                  className="w-full bg-background border border-dark/10 rounded-2xl px-4 py-3 text-dark focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-dark/30 placeholder:text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="magnetic-btn bg-accent text-white px-8 py-4 rounded-[2rem] font-bold text-base flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {submitState === 'submitting' ? 'Wysyłanie...' : 'Zarezerwuj termin'}
                {submitState !== 'submitting' && <ArrowRight className="w-5 h-5" />}
              </button>

              {submitState === 'error' && (
                <p className="text-accent text-sm text-center">
                  Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na maila.
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Full-width Warsaw/Piaseczno office card */}
      <div className="contact-reveal bg-primary text-background rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="bg-background/10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-background" />
          </div>
          <div>
            <p className="font-mono text-xs text-background/50 uppercase tracking-widest mb-1">GABINET STACJONARNY</p>
            <p className="font-sans font-bold text-xl text-background">Warszawa · Piaseczno</p>
            <p className="text-background/65 text-sm mt-1">Dokładny adres zostanie przesłany po umówieniu wizyty.</p>
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
// I. FOOTER
// ==========================================
const Footer = () => (
  <footer className="bg-dark text-background rounded-t-[4rem] px-8 py-16 md:px-16 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
      <div className="col-span-1">
        <h2 className="font-sans font-bold text-3xl mb-2">Karolina Bednarska</h2>
        <p className="font-drama italic text-xl text-background/60 mb-8">Psychoterapia · EMDR</p>
        <div className="flex items-center gap-3 bg-white/5 inline-flex px-4 py-2 rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="font-mono text-xs uppercase tracking-wider text-background/80">Rejestracja Aktywna</span>
        </div>
      </div>

      <div>
        <h4 className="font-mono text-sm uppercase tracking-widest text-accent mb-6">Nawigacja</h4>
        <ul className="space-y-4 text-background/70 font-sans text-sm">
          <li><a href="#o-mnie" className="hover:text-white transition-colors">O Mnie</a></li>
          <li><a href="#metody" className="hover:text-white transition-colors">Metody pracy</a></li>
          <li><a href="#oferta" className="hover:text-white transition-colors">Oferta</a></li>
          <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-mono text-sm uppercase tracking-widest text-accent mb-6">Legal</h4>
        <ul className="space-y-4 text-background/70 font-sans text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Polityka prywatności</a></li>
        </ul>
      </div>

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
          <li className="text-background/50">Warszawa · Piaseczno · Online</li>
        </ul>
      </div>
    </div>
  </footer>
);

// ==========================================
// APP
// ==========================================
function App() {
  return (
    <div className="bg-background text-dark min-h-screen selection:bg-accent selection:text-white">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <SupportAreas />
      <Testimonials />
      <Methods />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  FileText,
  Users,
  MessageSquare,
  GraduationCap,
  Briefcase,
  Building2,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  Linkedin,
  Send,
  Presentation,
  BookOpen,
  ExternalLink,
} from 'lucide-react';
import {
  siteInfo,
  navigation,
  hero,
  about,
  book,
  servicesSection,
  statsSection,
  contactSection,
  contactForm,
  footer,
} from './content';

// Anima il contenuto (dissolvenza dal basso) la prima volta che entra nel viewport.
function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

// Mostra il form di contatto oltre alle icone cliccabili (email/whatsapp/maps/linkedin).
// Rimettere a true per riattivarlo quando sarà collegato a un invio email reale.
const SHOW_CONTACT_FORM = false;

// Mappatura icone servizi
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'revisione-cv': FileText,
  'colloquio': MessageSquare,
  'consulenza-candidati': Users,
  'consulenza-aziende': Building2,
  'orientamento': GraduationCap,
  'formazione': Presentation,
};

// Icona WhatsApp (non presente in lucide-react)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navigation.menuItems.map((item) => item.id);
      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const highlightTitle = (title: string, highlight: string) => {
    const parts = title.split(highlight);
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="text-primary-600">{highlight}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div className="font-sans text-neutral-800">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('home')}
              className="font-display text-2xl font-bold text-primary-700"
            >
              {siteInfo.brandName}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navigation.menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600'
                      : isScrolled
                      ? 'text-neutral-600 hover:text-primary-600'
                      : 'text-neutral-700 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neutral-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-neutral-700 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={(el) => { sectionsRef.current['home'] = el; }}
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                  {hero.badge}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {highlightTitle(hero.title, hero.titleHighlight)}
              </h1>
              <p className="text-lg text-neutral-600 mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button
                  onClick={() => scrollToSection('servizi')}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {hero.primaryButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => scrollToSection('contatti')}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 text-neutral-700 rounded-xl font-semibold hover:border-primary-600 hover:text-primary-600 transition-all duration-300"
                >
                  {hero.secondaryButton}
                </button>
              </div>
            </div>
            <div className="relative animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Consulenza HR professionale"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">{hero.statNumber}</p>
                    <p className="text-sm text-neutral-500">{hero.statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-400" />
        </div>
      </section>

      {/* About / Chi Sono Section */}
      <section
        ref={(el) => { sectionsRef.current['chi-sono'] = el; }}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal className="relative">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professionista HR"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-xl p-6 text-white">
                <p className="text-3xl font-bold">{about.statNumber}</p>
                <p className="text-primary-100">{about.statLabel}</p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">{about.sectionLabel}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-6">
                {about.title}
              </h2>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                {about.paragraph1}
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                {about.paragraph2}
              </p>

              <div className="grid gap-4">
                {about.experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900">{exp.role}</h3>
                      <p className="text-sm text-primary-600">{exp.company} | {exp.period}</p>
                      <p className="text-neutral-600 text-sm mt-1">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="text-white">
              <span className="text-accent-300 font-semibold uppercase tracking-wider text-sm">{book.sectionLabel}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-6">
                {book.title}
              </h2>
              <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                {book.description}
              </p>
              <ul className="space-y-4 mb-10">
                {book.contents.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5" />
                {book.buttonText}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Reveal>

            <Reveal className="relative flex justify-center lg:justify-end" delay={150}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400/20 to-transparent rounded-2xl transform rotate-3 scale-105" />
                <div className="relative bg-white rounded-lg shadow-2xl p-8 max-w-sm mx-auto transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center mb-6">
                    <BookOpen className="w-20 h-20 text-primary-600" />
                  </div>
                  <p className="text-center text-neutral-600 text-sm font-medium">
                    {book.availabilityText}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-accent-500 fill-accent-500" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={(el) => { sectionsRef.current['servizi'] = el; }}
        className="py-24 bg-gradient-to-b from-neutral-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">{servicesSection.sectionLabel}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
              {servicesSection.title}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              {servicesSection.description}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesSection.services.map((service, index) => {
              const IconComponent = iconMap[service.id] || FileText;
              return (
                <Reveal key={service.id} delay={(index % 3) * 100}>
                <div
                  className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-accent-100 text-accent-700 rounded-full">
                        {service.targetAudience}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                    <p className="text-neutral-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                          <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => scrollToSection('contatti')}
                      className="mt-6 w-full inline-flex items-center justify-center py-3 text-primary-600 font-semibold group-hover:bg-primary-600 group-hover:text-white rounded-xl border-2 border-primary-200 group-hover:border-primary-600 transition-all duration-300"
                    >
                      {servicesSection.requestButton}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-primary-600 font-semibold uppercase tracking-wider text-sm">{statsSection.sectionLabel}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mt-3">
              {statsSection.title}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {statsSection.stats.map((stat, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="h-full text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                  <p className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</p>
                  <p className="text-neutral-600">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={(el) => { sectionsRef.current['contatti'] = el; }}
        className="py-24 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-16 ${SHOW_CONTACT_FORM ? 'lg:grid-cols-2' : 'max-w-2xl mx-auto'}`}>
            <Reveal className="text-white">
              <span className="text-primary-300 font-semibold uppercase tracking-wider text-sm">{contactSection.sectionLabel}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-6">
                {contactSection.title}
              </h2>
              <p className="text-neutral-300 text-lg mb-10 leading-relaxed">
                {contactSection.description}
              </p>

              <div className="space-y-6">
                <a
                  href={`mailto:${contactSection.contactInfo.email.value}`}
                  className="flex items-center gap-4 -m-2 p-2 rounded-xl transition-colors duration-200 hover:bg-white/5"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">{contactSection.contactInfo.email.label}</p>
                    <p className="text-white font-medium">{contactSection.contactInfo.email.value}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${contactSection.contactInfo.phone.value.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 -m-2 p-2 rounded-xl transition-colors duration-200 hover:bg-white/5"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">{contactSection.contactInfo.phone.label} (WhatsApp)</p>
                    <p className="text-white font-medium">{contactSection.contactInfo.phone.value}</p>
                  </div>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactSection.contactInfo.location.value)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 -m-2 p-2 rounded-xl transition-colors duration-200 hover:bg-white/5"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">{contactSection.contactInfo.location.label}</p>
                    <p className="text-white font-medium">{contactSection.contactInfo.location.value}</p>
                  </div>
                </a>
                <a
                  href={`https://${contactSection.contactInfo.linkedin.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 -m-2 p-2 rounded-xl transition-colors duration-200 hover:bg-white/5"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">{contactSection.contactInfo.linkedin.label}</p>
                    <p className="text-white font-medium">{contactSection.contactInfo.linkedin.value}</p>
                  </div>
                </a>
              </div>
            </Reveal>

            {SHOW_CONTACT_FORM && (
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{contactForm.successTitle}</h3>
                  <p className="text-neutral-600">{contactForm.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">{contactForm.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder={contactForm.namePlaceholder}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">{contactForm.emailLabel}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder={contactForm.emailPlaceholder}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">{contactForm.phoneLabel}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder={contactForm.phonePlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">{contactForm.serviceLabel}</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">{contactForm.servicePlaceholder}</option>
                      {servicesSection.services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">{contactForm.messageLabel}</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder={contactForm.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {contactForm.submitButton}
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-display text-xl font-bold">{siteInfo.brandName}</p>
              <p className="text-neutral-400 text-sm mt-1">{siteInfo.brandTagline}</p>
            </div>
            <div className="flex gap-6">
              {navigation.menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} {footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

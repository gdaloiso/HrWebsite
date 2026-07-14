/*
 * CONTENTUTO DEL SITO
 * =====================
 * Modifica questo file per aggiornare i testi del sito.
 * Salva il file e ricarica la pagina per vedere le modifiche.
 */

// ========================================
// INFORMAZIONI GENERALI
// ========================================

export const siteInfo = {
  // Nome del brand/site
  brandName: 'Martina Cutrì',

  // Sottotitolo del brand
  brandTagline: 'Disegna la tua prossima mossa professionale.',

  // Anno di inizio attività (per il copyright)
  startYear: 2024,
};

// ========================================
// NAVIGAZIONE
// ========================================

export const navigation = {
  // Voci del menu principale
  menuItems: [
    { id: 'home', label: 'Home' },
    { id: 'chi-sono', label: 'Chi Sono' },
    { id: 'servizi', label: 'Servizi' },
    { id: 'contatti', label: 'Contatti' },
  ],
};

// ========================================
// SEZIONE HERO (Home)
// ========================================

export const hero = {
  // Etichetta piccolo badge in alto
  badge: 'Consulenza HR Professionale',

  // Titolo principale (puoi usare <span> per evidenziare parole)
  title: 'Valorizza il tuo potenziale',

  // Parola/verso da evidenziare nel titolo (verrà colorato)
  titleHighlight: 'potenziale',

  // Descrizione sotto il titolo
  description: 'Consulenza HR dedicata a candidati e aziende. Ti accompagno nel percorso di crescita professionale con servizi personalizzati: dalla revisione del CV all\'orientamento al lavoro.',

  // Testo primo bottone
  primaryButton: 'Scopri i Servizi',

  // Testo secondo bottone
  secondaryButton: 'Contattami',

  // Statistica mostrata nella card
  statNumber: '5+',
  statLabel: 'Anni di esperienza',
};

// ========================================
// SEZIONE CHI SONO
// ========================================

export const about = {
  // Etichetta sezione
  sectionLabel: 'Chi Sono',

  // Titolo sezione
  title: 'Esperienza e passione per le risorse umane',

  // Primo paragrafo descrittivo
  paragraph1: 'Durante la mia esperienza nel settore delle risorse umane, dedico la mia carriera ad aiutare persone e aziende a raggiungere i loro obiettivi professionali. Dalla selezione del personale alla consulenza strategica, il mio approccio combina competenze tecniche e attenzione umana.',

  // Secondo paragrafo descrittivo
  paragraph2: 'Credo che ogni professionista abbia un potenziale unico da valorizzare. La mia missione è accompagnarti nel tuo percorso, offrendo consulenza personalizzata basata su esperienza concreta e conoscenza approfondita del mercato del lavoro.',

  // Statistica mostrata nella card
  statNumber: '100+',
  statLabel: 'Candidati seguiti',

  // Esperienze lavorative
  experiences: [
    {
      role: 'People Strategist',
      company: 'Azienda Leader Settore',
      period: 'Presente',
      description: 'Gestione completa delle risorse umane, selezione personale, sviluppo organizzativo e implementazione politiche HR.',
    },
    {
      role: 'Account Manager',
      company: 'Società di Consulenza HR',
      period: '2022 - 2023',
      description: 'Selezione professionale per clienti corporate, gestione candidate experience, sviluppo strategie di recruiting.',
    },
    {
      role: 'Formatrice',
      company: 'Fondi Interprofessionali',
      period: '2019 - 2022',
      description: 'Coordinamento attività di formazione e sviluppo.',
    },
  ],
};

// ========================================
// SEZIONE LIBRO
// ========================================

export const book = {
  // Etichetta sezione
  sectionLabel: 'La mia guida',

  // Titolo sezione
  title: 'La guida per la tua carriera',

  // Descrizione
  description: 'Ho raccolto in questo libro i miei anni di esperienza nel settore delle risorse umane. Una guida pratica e accessibile, per chi vuole costruire una carriera di successo, affrontare al meglio i colloqui e valorizzare le proprie competenze.',

  // Elenco dei contenuti del libro
  contents: [
    'Strategie per un CV vincente',
    'Tecniche per superare i colloqui',
    'Come valorizzare le tue competenze',
      ],

  // Testo del bottone
  buttonText: 'Prossimamente acquistabile su Amazon',

  // Link ad Amazon (INSERISCI IL TUO LINK QUI)
  amazonLink: 'https://www.amazon.it/dp/YOUR_BOOK_ASIN',

  // Testo sotto la copertina
  availabilityText: 'Prossimamente disponibile su Amazon',
};

// ========================================
// SEZIONE SERVIZI
// ========================================

export const servicesSection = {
  // Etichetta sezione
  sectionLabel: 'I Miei Servizi',

  // Titolo sezione
  title: 'Soluzioni su misura per te',

  // Descrizione sezione
  description: 'Ogni servizio è pensato per rispondere alle esigenze specifiche di candidati, aziende e giovani in cerca di orientamento professionale.',

  // Testo bottone "richiedi informazioni" nelle card
  requestButton: 'Richiedi informazioni',

  // Elenco dei servizi
  services: [
    {
      id: 'revisione-cv',
      title: 'Revisione CV',
      description: 'Analisi approfondita del tuo curriculum vitae con suggerimenti personalizzati per valorizzare le tue competenze e aumentare le possibilità di selezione.',
      targetAudience: 'Candidati',
      features: [
        'Analisi struttura e contenuto',
        'Ottimizzazione parole chiave',
        'Format personalizzato',
        'Feedback dettagliato',
      ],
    },
    {
      id: 'colloquio',
      title: 'Colloquio di Selezione',
      description: 'Simulazione del primo colloquio di selezione con feedback immediato per prepararti al meglio e affrontare con sicurezza i colloqui reali.',
      targetAudience: 'Candidati',
      features: [
        'Simulazione reale',
        'Domande comportamentali',
        'Feedback costruttivo',
        'Consigli di miglioramento',
      ],
    },
    {
      id: 'consulenza-candidati',
      title: 'Consulenza Candidati',
      description: 'Percorso personalizzato per candidati in cerca di nuova occupazione, dalla definizione degli obiettivi alla strategia di ricerca lavoro.',
      targetAudience: 'Candidati',
      features: [
        'Definizione obiettivi',
        'Piano d\'azione personalizzato',
        'Supporto continuo',
        'Networking strategico',
      ],
    },
    {
      id: 'consulenza-aziende',
      title: 'Consulenza Aziende',
      description: 'Supporto alle aziende nella gestione delle risorse umane, dai processi di selezione alla definizione delle politiche HR.',
      targetAudience: 'Aziende',
      features: [
        'Processi di selezione',
        'Descrizione ruoli',
        'Employer branding',
        'Trattenimento talenti',
      ],
    },
    {
      id: 'orientamento',
      title: 'Orientamento al Lavoro',
      description: 'Percorso dedicato a universitari e diplomati per orientarsi nel mondo del lavoro e costruire una carriera di successo.',
      targetAudience: 'Universitari e Diplomati',
      features: [
        'Scoperta attitudini',
        'Piano di carriera',
        'Preparazione colloqui',
        'Networking iniziale',
      ],
    },
    {
      id: 'formazione',
      title: 'Formazione',
      description: 'Corsi di formazione professionali per professionisti: sviluppo delle competenze trasversali, leadership, comunicazione efficace e gestione dei team.',
      targetAudience: 'Professionisti',
      features: [
        'Formazione su misura',
        'Leadership e management',
        'Comunicazione efficace',
        'Team building',
      ],
    },
  ],
};

// ========================================
// SEZIONE STATISTICHE (Perché Scegliermi)
// ========================================

export const statsSection = {
  // Etichetta sezione
  sectionLabel: 'Perché Scegliermi',

  // Titolo sezione
  title: 'Risultati concreti e soddisfazione',

  // Statistiche da mostrare
  stats: [
    { number: '100+', label: 'Candidati supportati' },
    { number: '5+', label: 'Anni di esperienza' },
    { number: '95%', label: 'Tasso di soddisfazione' },
  ],
};

// ========================================
// SEZIONE CONTATTI
// ========================================

export const contactSection = {
  // Etichetta sezione
  sectionLabel: 'Contatti',

  // Titolo sezione
  title: 'Iniziamo insieme il tuo percorso',

  // Descrizione
  description: 'Contattami per una consulenza gratuita di trenta minuti. Insieme valuteremo le tue esigenze e definirò un percorso personalizzato per aiutarti a raggiungere i tuoi obiettivi professionali.',

  // Informazioni di contatto
  contactInfo: {
    email: {
      label: 'Email',
      value: 'info@testt.it',
    },
    phone: {
      label: 'Telefono',
      value: '+39 333 123 4567',
    },
    location: {
      label: 'Sede',
      value: 'Milano, Italia',
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'linkedin.com/in/martina-cutrì-/',
    },
  },
};

// ========================================
// FORM CONTATTI
// ========================================

export const contactForm = {
  // Etichette dei campi
  nameLabel: 'Nome e Cognome *',
  namePlaceholder: 'Il tuo nome',

  emailLabel: 'Email *',
  emailPlaceholder: 'email@esempio.it',

  phoneLabel: 'Telefono',
  phonePlaceholder: '+39 333...',

  serviceLabel: 'Servizio di interesse *',
  servicePlaceholder: 'Seleziona un servizio',

  messageLabel: 'Messaggio *',
  messagePlaceholder: 'Descrivi brevemente le tue esigenze...',

  // Testo bottone invio
  submitButton: 'Invia Messaggio',

  // Messaggi di conferma
  successTitle: 'Messaggio inviato!',
  successMessage: 'Ti risponderò al più presto.',
};

// ========================================
// FOOTER
// ========================================

export const footer = {
  // Testo copyright (l'anno viene aggiornato automaticamente)
  copyright: 'Martina Cutrì. Tutti i diritti riservati.',
};

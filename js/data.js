// ============================================================
// ZENTRALE DATENDATEI — Alle Inhalte hier bearbeiten
// ============================================================

// STUDIONAME — nur hier ändern, wirkt sich auf die gesamte Website aus
const STUDIO_NAME = "[STUDIO NAME]";

// META / SEO
const META = {
  title: `${STUDIO_NAME} | Webdesign, Videocontent und Sichtbarkeit aus Dinslaken`,
  description: `${STUDIO_NAME} verbindet Webdesign, SEO, KI Marketing und Videocontent zu digitalen Auftritten, die Aufmerksamkeit erzeugen, Vertrauen schaffen und Anfragen auslösen. Aus Dinslaken für NRW und deutschlandweit.`,
  ogImage: "assets/og-image.jpg",
  siteUrl: "https://example.com", // Später mit echter Domain ersetzen
};

// STATISTIKEN
const STATS = [
  { value: 200, suffix: "+", label: "Projekte" },
  { value: 25,  suffix: "+", label: "Brands" },
  { value: 15,  suffix: "+", label: "Artists" },
  { value: 2,   suffix: "×", label: "Platz 1 Albumcharts mit Kollegah" },
  { value: 8,   suffix: "+", label: "Jahre Erfahrung" },
];

// REELS CAROUSEL
const REELS = [
  { id: "DDF5g_Vt0Tk", client: "Kings League Germany", type: "Campaign Reel" },
  { id: "DXCtZcFja4M", client: "Kollegah",             type: "Artist Content" },
  { id: "DQpTkteiFDh", client: "König Ludwig",          type: "Brand Reel" },
  { id: "C94UtQ4iVWO", client: "König Ludwig",          type: "Kaltenberger Ritterturnier" },
  { id: "DXrpbpakUdp", client: "Bienemann NRW",         type: "Lebensmittel & Backhandwerk" },
];

// WEB PROJEKTE (Kevin)
const WEB_PROJECTS = [
  {
    title: "Schwimmschule Wasserflitzer",
    url: "https://schwimmschule-wasserflitzer.de/",
    category: "Webdesign · Lokale Sichtbarkeit",
    description: "Klarer Webauftritt für Kinderschwimmkurse im Ruhrgebiet. Fokus auf Vertrauen, einfacher Standortwahl und direkter Kursanfrage.",
    tags: ["Webdesign","Lokale Sichtbarkeit","Mobile","Conversion"],
    status: "Live",
    image: "assets/projects/optimized/wasserflitzer-preview.jpg",
  },
  {
    title: "Wir machen Handwerk",
    url: null,
    category: "Webdesign · Portal · B2B",
    description: "Moderner B2B-Auftritt mit digitaler Schadenmeldung und strukturierter Auftragsabwicklung für Hausverwaltungen und Versicherungen.",
    tags: ["Webdesign","B2B","Portal","Conversion","UX"],
    status: "Live",
    image: "assets/projects/optimized/wir_machen_handwerk_website_hero.jpg",
  },
  {
    title: "HSR Bauunternehmen",
    url: null,
    category: "Webdesign · Handwerk · Duisburg",
    description: "Klarer Auftritt für Handwerksarbeiten in Duisburg: Trockenbau, Malerarbeiten und Innenausbau mit direkter Kontaktführung.",
    tags: ["Webdesign","Handwerk","Lokale Website","Duisburg"],
    status: "Live",
    image: "assets/projects/optimized/hsr_bauunternehmen_website_hero.jpg",
  },
  {
    title: "KI fiziert",
    url: null,
    category: "Landingpage · KI-Weiterbildung",
    description: "Landingpage für eine geförderte KI-Weiterbildung mit klarer Nutzenkommunikation und starker Conversion-Führung.",
    tags: ["Landingpage","KI","Conversion","Weiterbildung"],
    status: "Live",
    image: "assets/projects/optimized/ki_fiziert_weiterbildung_landingpage.jpg",
  },
  {
    title: "Chapter Zero Studios",
    url: null,
    category: "Branding · Webdesign · Creative Direction",
    description: "Dunkler, cinematic Webauftritt mit starker Typografie, rotem Akzent und klarem Fokus auf Videografie, Artists und Brands.",
    tags: ["Webdesign","Brand Look","Hero Konzept","Dark UI"],
    status: "Vorschau",
    image: "assets/projects/optimized/chapter-zero-studios-website-hero.jpg",
  },
  {
    title: "Podologie Retreat",
    url: null,
    category: "Landingpage · Premium Design",
    description: "Emotionale Landingpage für ein exklusives Retreat mit hochwertiger Bildsprache und klarer Bewerbungsführung.",
    tags: ["Landingpage","Premium Design","Event","Retreat"],
    status: "Vorschau",
    image: "assets/projects/optimized/podologie_retreat_landingpage_hero.jpg",
  },
];

// WEB-REFERENZEN (Kevin)
const WEB_CLIENTS = [
  "Schwimmschule Wasserflitzer","Wir machen Handwerk","HSR Bauunternehmen",
  "AfS – Akademie für Sicherheit","Die Sozialwerker","Helden Performance",
  "Iron Mind","Judoteam Voerde","Kundenwerk24","Naturheilpraxis Issel",
  "Impuls Events","Skool Festival","VersFinanz Konzept","SecureMesh",
  "Carnetix","Blattwerk Hamminkeln","Fenja Flore","Mixed By",
  "Gesundheit im Gleichgewicht",
];

// REFERENZEN
const ARTISTS = [
  "Kollegah","Majoe","Asche","Farid Bang","Trymacs",
  "Papaplatte","MontanaBlack","Abu Goku","Agit Kabayel",
];

const BRANDS = [
  "ARD & ZDF","Samsung","König Ludwig","Deutsches Elektrohandwerk",
  "Edeka","Kingsleague","DAZN","Effect","Universal","Vendvibe",
  "Saygin GmbH","Santos Grills","MastiQgin","Baer Machines","Bienemann NRW",
];

// HERO FLOATING CHIPS
const REFERENCE_CHIPS = [
  "Kollegah","Samsung","ARD & ZDF","DAZN","Kingsleague",
  "König Ludwig","Universal","Vendvibe",
];

const SERVICE_CHIPS = [
  "Webdesign","SEO","KI Marketing","Reels",
  "Brand Content","Campaigns","Creative Direction","Leadgenerierung",
];

const NUMBER_CHIPS = [
  "200+ Projekte","25+ Brands","15+ Artists",
  "2× Platz 1 Charts","Deutschlandweit","Ruhrgebiet",
];

// LEISTUNGEN
const SERVICES = [
  {
    number: "01",
    title: "Websites und Landingpages",
    description:
      "Wir entwickeln Websites, die nicht nur gut aussehen, sondern Vertrauen aufbauen, Inhalte sauber führen und aus Besuchern Anfragen machen.",
    tags: ["Webdesign","Landingpages","Conversion","UX","SEO"],
  },
  {
    number: "02",
    title: "SEO und Sichtbarkeit",
    description:
      "Wir schaffen die Grundlage, damit dein Unternehmen bei Google — lokal, regional und thematisch — besser gefunden wird.",
    tags: ["On-Page SEO","Local SEO","Keyword-Strategie","Content-SEO"],
  },
  {
    number: "03",
    title: "Videocontent und Reels",
    description:
      "Wir produzieren Content, der Aufmerksamkeit erzeugt, Marken stärker macht und auf Social Media funktioniert.",
    tags: ["Reels","Brand Content","Music Videos","Aftermovies","Social Cuts"],
  },
  {
    number: "04",
    title: "Kampagnen und Launches",
    description:
      "Wir verbinden Content, Landingpage und klare Botschaft für Produkte, Events, Recruiting oder neue Angebote.",
    tags: ["Campaign Films","Launch Content","Ads","Strategie"],
  },
  {
    number: "05",
    title: "KI Marketing und Prozesse",
    description:
      "Wir nutzen KI sinnvoll für Content-Planung, Text, Struktur, Auswertung, Automatisierung und interne Abläufe.",
    tags: ["KI Content","Automatisierung","Workflows","Leadstruktur"],
  },
  {
    number: "06",
    title: "Social Proof und Referenzen",
    description:
      "Wir bereiten Projekte, Kundenstimmen und Ergebnisse so auf, dass Vertrauen sichtbar wird.",
    tags: ["Case Studies","Testimonials","Referenz-Content","Trust Building"],
  },
];

// CASE STUDIES
const CASES = [
  {
    id: "kollegah-magnum-opus-still-king",
    client: "Kollegah",
    project: "Magnum Opus × Still King",
    description:
      "Offizielles Musikvideo und komplette visuelle Promophase für zwei Alben. Beide Projekte erreichten Platz 1 der deutschen Charts — jeweils ausgezeichnet mit dem offiziellen Nummer-1-Award.",
    tags: ["Official Video","Artist Visuals","Promophase","2× Platz 1 Albumcharts"],
    color: "#E51A36",
    videoUrl: "https://www.youtube.com/watch?v=qxpgfwvblk4",
  },
  {
    id: "kollegah-erfolgsspur",
    client: "Kollegah",
    project: "Erfolgsspur",
    description:
      "Offizielles Musikvideo mit hochwertiger visueller Umsetzung. Teil der fortlaufenden Zusammenarbeit im Bereich Artist Content und YouTube-Produktion.",
    tags: ["Official Video","Artist Visuals","Music Video","YouTube"],
    color: "#FF6A1A",
    videoUrl: "https://www.youtube.com/watch?v=vTW4Sf0tjTM",
  },
  {
    id: "koenig-ludwig",
    client: "König Ludwig",
    project: "Brand Reel & Ritterturnier",
    description:
      "Zwei hochwertige Produktionen für die Marke König Ludwig: ein eigenständiger Brand Reel sowie ein atmosphärisches Video vom Kaltenberger Ritterturnier — visuelle Markenwirkung für eine der bekanntesten bayerischen Brauereien.",
    tags: ["Brand Reel","Event Content","Instagram","Markenwirkung"],
    color: "#E51A36",
  },
  {
    id: "samsung-mission-galaxy",
    client: "Samsung",
    project: "Mission Galaxy",
    description:
      "Brand Content für ein internes Firmenvideo im hochwertigen Corporate-Umfeld.",
    tags: ["Brand Content","Corporate Video","Campaign Film"],
    color: "#FF6A1A",
  },
];

// MINI CASES
const MINI_CASES = [
  { client: "MastiQgin",   project: "Produktvideo",            tags: ["Product Video"] },
  { client: "Kingsleague", project: "Kampagne & Reel",         tags: ["Campaign","Reel"] },
  { client: "ZDF",         project: "Fußball Content",         tags: ["Broadcast","Sports"] },
  { client: "Kollegah",    project: "Aftermovie",              tags: ["Aftermovie"] },
  { client: "DAZN",        project: "Sports Content",          tags: ["Sports","Brand Content"] },
  { client: "Farid Bang",  project: "Artist Content",          tags: ["Artist Visuals"] },
];

// REEL CARDS
const REEL_LABELS = [
  "Brand Reel","Campaign Clip","Official Video",
  "Aftermovie","Product Video","Social Cut",
];

const REEL_CLIENTS = [
  "Samsung","Kingsleague","König Ludwig",
  "MastiQgin","ZDF","DAZN","Kollegah","Vendvibe",
];

// PROZESS
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Analyse",
    description: "Wir prüfen Marke, Zielgruppe, Angebot, Website, Content und aktuelle Sichtbarkeit.",
  },
  {
    number: "02",
    title: "Strategie",
    description: "Wir entwickeln Positionierung, Botschaft, Seitenstruktur, Content-Idee und Kampagnenlogik.",
  },
  {
    number: "03",
    title: "Produktion",
    description: "Wir erstellen Videos, Reels, Visuals, Texte, Website-Struktur und Content Assets.",
  },
  {
    number: "04",
    title: "Umsetzung",
    description: "Wir bauen Website, Landingpages, SEO-Grundlagen, Anfragewege und digitale Systeme.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Wir bringen den Auftritt online und bereiten Inhalte für Website, Social Media, Ads und Vertrieb auf.",
  },
];

// GRÜNDER
const FOUNDERS = [
  {
    name: "Kevin Balfanz",
    role: "Digital & Marketing",
    skills: ["Marketing","Websites","SEO","KI-Prozesse","Leadstruktur","Conversion","Digitale Systeme","Automatisierung"],
  },
  {
    name: "Joel Burnic",
    role: "Creative & Video",
    skills: ["Videografie","Creative Direction","Brand Content","Reels","Artist Visuals","Music Videos","Kampagnen","Aftermovies"],
  },
];

// ZIELGRUPPEN
const TARGET_YES = [
  "Unternehmen mit erklärungsbedürftiger Leistung",
  "Premium-Dienstleister",
  "Brands",
  "Events",
  "Fitness und Lifestyle",
  "Gastronomie und Hotellerie",
  "Bau, Handwerk und Immobilien",
  "Personal Brands",
  "Artists und Creator",
  "Startups und lokale Marktführer",
];

const TARGET_NO = [
  "Billige Einzelclips ohne Strategie",
  "Websites ohne Inhalte",
  "Marketing ohne klares Angebot",
  "Kurzfristige Wunder-Versprechen",
];

// FAQ
const FAQ_ITEMS = [
  {
    question: "Was unterscheidet euch von einer klassischen Marketing-Agentur?",
    answer:
      "Wir verbinden visuelle Produktion, Website, SEO, KI und Sichtbarkeitsstrategie. Dadurch entsteht kein einzelnes Medium, sondern ein kompletter digitaler Auftritt.",
  },
  {
    question: "Macht ihr nur Videoproduktion?",
    answer:
      "Nein. Video ist ein wichtiger Teil, aber es geht um Sichtbarkeit. Wir verbinden Content mit Website, Marketing und digitalen Prozessen.",
  },
  {
    question: "Baut ihr auch komplette Websites?",
    answer:
      "Ja. Wir entwickeln Websites und Landingpages inklusive Struktur, Text, Design, SEO-Grundlagen und Anfrageführung.",
  },
  {
    question: "Arbeitet ihr nur in Dinslaken?",
    answer:
      "Nein. Wir kommen aus Dinslaken und arbeiten für Unternehmen im Ruhrgebiet, in NRW und deutschlandweit.",
  },
  {
    question: "Können Reels und Videos direkt auf der Website genutzt werden?",
    answer:
      "Ja. Wir planen Content so, dass er auf Website, Social Media, Ads und im Vertrieb eingesetzt werden kann.",
  },
  {
    question: "Nutzt ihr KI im Marketing?",
    answer:
      "Ja. KI wird bei uns gezielt für Strategie, Content-Planung, Text, Workflows und Automatisierung eingesetzt — nicht als Spielerei, sondern als Teil eines funktionierenden Systems.",
  },
];

// KONTAKT — Service-Optionen
const CONTACT_SERVICES = [
  "Website","Videocontent","Reels","SEO","KI Marketing","Kampagne","Kompletter Auftritt",
];

/* ---------------------------------------------------------------------------
   CONTENT — single source of truth for everything on the page.

   SWAP ME: brand/model names, body copy, trims, prices, specs, and all image
   URLs live here. Edit this file and the whole page updates.

   IMAGES: currently real automotive placeholder photos from Unsplash
   (images.unsplash.com — free-tier photo IDs, verified to load). Replace them
   with your own asset URLs when real photography lands
   (or move photos into /public/assets and reference e.g. '/assets/hero.webp').
--------------------------------------------------------------------------- */

/* Unsplash image helper — builds a sized placeholder URL from a verified
   photo ID. Swap these for your own asset URLs when real photography lands. */
const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const brand = {
  name: "Vendura", // PLACEHOLDER brand name — swap me
}

export const model = {
  name: "Aterra X7", // PLACEHOLDER model name — swap me
  tagline: "The new benchmark in luxury capability.",
  subTagline:
    "Masterfully engineered to command every terrain — and every room.",
}

/* Navbar links. href must match section <section id="..."> values. */
export const navLinks = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "gallery", label: "Gallery" },
  { id: "specs", label: "Specs" },
  { id: "contact", label: "Contact" },
]

/* Hero background + CTA. */
export const hero = {
  /* PLACEHOLDER image — swap me (verified Unsplash photo ID) */
  image: img("photo-1618353482480-61ca5a9a7879", 2400),
  ctaLabel: "Configure Yours",
  ctaHref: "#contact",
}

/* Overview — alternating text / image blocks. */
export const overview = [
  {
    eyebrow: "The Story",
    heading: "Born to lead, built to endure.",
    paragraphs: [
      "The Aterra X7 distils over a decade of engineering obsession into a single silhouette. Every panel, every weld and every millimetre of ground clearance was designed around one idea: capability without compromise.",
      "It is as composed cruising the coastal highway as it is cresting alpine passes. Adaptive air suspension, full-time all-wheel drive and a cabin that hushes the world beyond its glass — the X7 moves through extremes with quiet confidence.",
      "Inside, sustainably sourced leathers meet precision-milled metal. Intelligent climate zones, a 21-speaker Meridian sound stage and an architecture that learns your habits make every journey feel effortless.",
    ],
    /* PLACEHOLDER image — swap me (verified Unsplash photo ID) */
    image: img("photo-1690278289681-1e7503563351", 1600),
    imageAlt: "The Aterra X7 cresting a mountain road",
  },
  {
    eyebrow: "The Philosophy",
    heading: "Quiet power, absolute presence.",
    paragraphs: [
      "True luxury never shouts. Understated surfaces, controlled light and a cockpit shaped around the driver reward those who look closer.",
      "From the milled rotary dials to the hand-stitched dash, every element is finished by people who treat each build as their own. This is engineering as a signature — refined, deliberate, unmistakably ours.",
    ],
    /* PLACEHOLDER image — swap me (verified Unsplash photo ID) */
    image: img("photo-1662641220355-7fb77c16f733", 1600),
    imageAlt: "The Aterra X7 interior detail",
  },
]

/* Feature cards — icon, title, one-line description. */
export const features = [
  {
    icon: "powertrain",
    title: "3.0L Turbo V6",
    description:
      "395 hp and 550 Nm of torque, mated to a seamless 8-speed automatic.",
  },
  {
    icon: "terrain",
    title: "Adaptive Air Suspension",
    description:
      "Height-adjustable dampers read the road 500 times a second.",
  },
  {
    icon: "powertrain",
    title: "All-Terrain Response",
    description:
      "Six drive modes tame sand, snow, mud, and rock with a dial turn.",
  },
  {
    icon: "tech",
    title: "Pivi Pro Interface",
    description:
      "A lightning-fast 13.1-inch curved display with wireless CarPlay.",
  },
  {
    icon: "design",
    title: "Signature Exterior",
    description:
      "Slim LED signature lighting and flush door handles for a sculpted stance.",
  },
  {
    icon: "safety",
    title: "Advanced Assist Suite",
    description:
      "360-degree cameras and autonomous emergency braking as standard.",
  },
]

/* Gallery / variants — name + starting price under each. */
export const trims = [
  {
    name: "Aterra X7 SE",
    startingPrice: 72900,
    /* PLACEHOLDER image — swap me (verified Unsplash photo ID) */
    image: img("photo-1654159866298-e3c8ee93e43b", 1200),
  },
  {
    name: "Aterra X7 HSE",
    startingPrice: 84900,
    /* PLACEHOLDER image — swap me (verified Unsplash photo ID) */
    image: img("photo-1612563893490-d86ed296e5e6", 1200),
  },
  {
    name: "Aterra X7 Autobiography",
    startingPrice: 104900,
    /* PLACEHOLDER image — swap me (verified Unsplash photo ID) */
    image: img("photo-1688893287874-ac7fbd686c24", 1200),
  },
  {
    name: "Aterra X7 First Edition",
    startingPrice: 119900,
    /* PLACEHOLDER image — swap me (verified Unsplash photo ID) */
    image: img("photo-1767749995450-7b63ab7cd4fd", 1200),
  },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)

/* Spec sheet — grouped by category, rendered as collapsible accordions. */
export const specGroups = [
  {
    category: "Engine & Drivetrain",
    rows: [
      { label: "Engine", value: "3.0L Twin-Turbo V6, 48V MHEV" },
      { label: "Power", value: "395 hp @ 5,500 rpm" },
      { label: "Torque", value: "550 Nm @ 2,000–5,000 rpm" },
      { label: "Transmission", value: "8-Speed Automatic" },
      { label: "Drivetrain", value: "Full-Time All-Wheel Drive" },
      { label: "0–60 mph", value: "4.9 s" },
      { label: "Top Speed", value: "155 mph (limited)" },
    ],
  },
  {
    category: "Dimensions",
    rows: [
      { label: "Length", value: "5,020 mm" },
      { label: "Width (w/ mirrors)", value: "2,209 mm" },
      { label: "Height", value: "1,863 mm" },
      { label: "Wheelbase", value: "2,994 mm" },
      { label: "Ground Clearance", value: "245 mm (up to 295 mm)" },
      { label: "Wading Depth", value: "900 mm" },
      { label: "Wheels", value: "21” or 22” alloy" },
    ],
  },
  {
    category: "Capacity",
    rows: [
      { label: "Seating", value: "5 or 7 seats" },
      { label: "Boot Space", value: "725 litres (898 behind row 1)" },
      { label: "Max. Load Space", value: "1,936 litres" },
      { label: "Fuel Tank", value: "90 litres" },
      { label: "Towing Capacity", value: "3,500 kg braked" },
    ],
  },
  {
    category: "Technology & Safety",
    rows: [
      { label: "Infotainment", value: "13.1” Pivi Pro touchscreen" },
      { label: "Audio", value: "Meridian 3D Surround, 21 speakers" },
      { label: "Assistant", value: "Adaptive cruise w/ lane centring" },
      { label: "Parking", value: "360° camera & park assist" },
      { label: "Safety Rating", value: "Euro NCAP 5-star (2026)" },
    ],
  },
]

/* Contact form — options for the dealer/location select. */
export const dealers = [
  { id: "downtown", label: "Vendura Downtown" },
  { id: "northgate", label: "Vendura Northgate" },
  { id: "riverside", label: "Vendura Riverside" },
  { id: "bayou", label: "Vendura Bayou" },
]

/* Footer link columns. */
export const footerColumns = [
  {
    heading: "Vehicles",
    links: ["Aterra X7", "Aterra X7 First Edition", "Certified Pre-Owned", "Compare"],
  },
  {
    heading: "Owners",
    links: ["Service & Maintenance", "Software Updates", "Accessories", "Owner's Manual"],
  },
  {
    heading: "Company",
    links: ["About Vendura", "Sustainability", "Careers", "Newsroom"],
  },
]
/**
 * JMJ & JOHNS CONSULTANCY - Real Estate & Property Consultants
 * Buy | Sell | Rent | Property Consultancy Across Bangalore
 * Office: #22, Ananya Layout, Opposite to Govt School, Cheemasandra, Bangalore – 560049
 * Phone Calls: +91 81052 97648 / +91 89514 14189 / +91 98804 30160 | WhatsApp: +91 98804 30160 | Email: jmjjohnsconsultancy@gmail.com
 */

// Default Seed Properties (Across Bangalore & Office: #22 Ananya Layout, Cheemasandra)
const DEFAULT_PROPERTIES = [
  {
    "id": "BG-GRANADA",
    "title": "Brigade Granada – Biggest 40+ Acre Integrated Township",
    "developer": "Brigade Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 10700000,
    "priceFormatted": "₹1.07 Cr – ₹3.99 Cr",
    "location": "Kadugodi, Whitefield, Bengaluru",
    "locality": "Whitefield / Kadugodi",
    "area": "730 – 2,760 sq.ft (1, 2, 3 & 4 BHK)",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/brigade_granada.jpg",
    "cdnFallback": "assets/images/brigade_granada.jpg",
    "amenities": [
      "40+ Acres Integrated Master Township",
      "48-Floor Ultra-Luxury Sky Towers",
      "Grade-A Commercial Offices (4.49L sq.ft)",
      "High-Street Retail & F&B (2.39L sq.ft)",
      "Luxury 7-Star Hotel (251 Keys)",
      "Hospital & Healthcare on Campus",
      "Direct Whitefield Metro & ITPL Access",
      "EOI Window Open – Priority Allocation"
    ],
    "contactPerson": "JMJ & JOHNS CONSULTANCY",
    "contactPhone": "+91 81052 97648 / +91 89514 14189 / +91 98804 30160",
    "description": "Brigade Granada is an iconic 40+ acre integrated township by Brigade Group in Kadugodi, Whitefield, Bengaluru. 'A City Within a City – Live, Work, Shop & Thrive at One Iconic Address.' Featuring 48-floor residential sky towers, Grade-A commercial spaces (~4.49 Lakh sq.ft), high-street retail & dining (~2.39 Lakh sq.ft), a 7-star luxury hotel (~251 keys), and healthcare on campus. Expected pre-launch pricing: 1 BHK (~730 sq.ft) @ ₹1.07 Cr, 2 BHK (~1,275 sq.ft) @ ₹1.79 Cr, 3 BHK (1,540–2,240 sq.ft) from ₹2.19 Cr to ₹3.29 Cr, and 4 BHK + Maid Room (2,760 sq.ft) @ ₹3.99 Cr. EOI Window is now open with priority allocation! For floor plans, pricing & site visits, contact JMJ & JOHNS CONSULTANCY: Call +91 81052 97648 / +91 89514 14189 / +91 98804 30160 or WhatsApp +91 98804 30160."
  },
  {
    "id": "JMJ-101",
    "title": "30x40 Gated Residential Corner Plot",
    "category": "plot",
    "listingType": "sale",
    "price": 4500000,
    "priceFormatted": "₹45.00 Lakhs",
    "location": "#22, Ananya Layout, Opposite to Govt School, Cheemasandra, Bangalore 560049",
    "area": "1,200 sq.ft (30x40)",
    "beds": 0,
    "baths": 0,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/residential_plot.jpg",
    "amenities": [
      "DC Converted",
      "Khata A",
      "Borewell Water",
      "30ft Tar Road",
      "Underground Drainage",
      "Near Govt School"
    ],
    "description": "Prime residential layout corner plot situated near #22 Ananya Layout, Opposite to Govt School, Cheemasandra, Bangalore 560049. Clear titles, immediate registration, clear road access, well-connected to Budigere Cross and Old Madras Road."
  },
  {
    "id": "JMJ-102",
    "title": "3 BHK Luxury Contemporary Villa",
    "category": "villa",
    "listingType": "sale",
    "price": 13500000,
    "priceFormatted": "₹1.35 Crore",
    "location": "East Bangalore (Near Ananya Layout), Bangalore 560049",
    "area": "2,400 sq.ft Built-up",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "hot"
    ],
    "image": "assets/images/hero_villa.jpg",
    "amenities": [
      "Private Garden",
      "Car Parking (2 Cars)",
      "Modular Kitchen",
      "Solar Water",
      "Borewell + Cauvery provision",
      "24/7 Security"
    ],
    "description": "Architect-designed 3 BHK contemporary duplex villa in East Bangalore with high ceilings, private deck, branded Italian fittings, and serene green surroundings. Close to schools and daily conveniences."
  },
  {
    "id": "JMJ-103",
    "title": "2 BHK Premium High-Rise Apartment",
    "category": "apartment",
    "listingType": "sale",
    "price": 6800000,
    "priceFormatted": "₹68.00 Lakhs",
    "location": "Budigere Cross Link Road, East Bangalore 560049",
    "area": "1,180 sq.ft",
    "beds": 2,
    "baths": 2,
    "badges": [
      "sale"
    ],
    "image": "assets/images/luxury_apartment.jpg",
    "amenities": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Children Play Area",
      "Power Backup",
      "Covered Parking"
    ],
    "description": "Well-ventilated 2 BHK luxury apartment with scenic balcony view, modern clubhouse amenities, and swift 15-min connectivity to Whitefield IT Hub & KR Puram railway station."
  },
  {
    "id": "JMJ-104",
    "title": "4 BHK Independent Duplex House for Rent",
    "category": "villa",
    "listingType": "rent",
    "price": 32000,
    "priceFormatted": "₹32,000 / month",
    "location": "#22, Ananya Layout, Opposite to Govt School, Cheemasandra, Bangalore 560049",
    "area": "2,100 sq.ft",
    "beds": 4,
    "baths": 4,
    "badges": [
      "rent"
    ],
    "image": "assets/images/independent_house.jpg",
    "amenities": [
      "Spacious Balcony",
      "Reserved Car Parking",
      "Wardrobes & Mod Kitchen",
      "24/7 Water Supply",
      "Pet Friendly"
    ],
    "description": "Spacious and peaceful 4 BHK independent duplex house available for family rent. Situated in a safe residential layout near Govt School, Ananya Layout with pleasant ventilation."
  },
  {
    "id": "JMJ-105",
    "title": "Prime Ground Floor Commercial Showroom Space",
    "category": "commercial",
    "listingType": "rent",
    "price": 65000,
    "priceFormatted": "₹65,000 / month",
    "location": "Avalahalli Link Road, East Bangalore 560049",
    "area": "1,850 sq.ft",
    "beds": 0,
    "baths": 2,
    "badges": [
      "rent",
      "hot"
    ],
    "image": "assets/images/commercial_building.jpg",
    "amenities": [
      "Glass Frontage",
      "3-Phase Power",
      "High Footfall",
      "Ample Customer Parking",
      "Main Road Facing"
    ],
    "description": "High visibility commercial retail/office space ideal for banks, clinics, supermarket, or branded showrooms with wide road frontage and excellent connectivity."
  },
  {
    "id": "JMJ-106",
    "title": "1500 sq.ft East-Facing Residential Plot",
    "category": "plot",
    "listingType": "sale",
    "price": 5500000,
    "priceFormatted": "₹55.00 Lakhs",
    "location": "#22, Ananya Layout, Opposite to Govt School, Cheemasandra, Bangalore 560049",
    "area": "1,500 sq.ft (30x50)",
    "beds": 0,
    "baths": 0,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/residential_plot.jpg",
    "amenities": [
      "East Facing (100% Vastu)",
      "Gated Layout",
      "Compound Wall",
      "A-Khata Eligible",
      "Electricity & Water"
    ],
    "description": "100% Vastu-compliant East-facing plot in a fast-appreciating locality across Bangalore. Ideal for immediate home construction or high-return investment."
  },
  {
    "id": "JMJ-107",
    "title": "Grade-A Furnished Commercial Office Space",
    "category": "commercial-office",
    "listingType": "rent",
    "price": 125000,
    "priceFormatted": "₹1.25 Lakhs / month",
    "location": "ITPL Main Road, Whitefield Corridor, Bangalore 560066",
    "locality": "Whitefield / ITPL",
    "area": "2,800 sq.ft (35 Workstations + 2 Cabins)",
    "beds": 0,
    "baths": 3,
    "badges": [
      "rent",
      "verified"
    ],
    "image": "assets/images/commercial_building.jpg",
    "amenities": [
      "Plug & Play Furnished",
      "100% DG Power Backup",
      "Central Air Conditioning",
      "Reserved 4-Car Parking",
      "High-Speed Fiber Ready",
      "24/7 Security & CCTV"
    ],
    "description": "Premium fully furnished commercial office space suited for IT/ITES, corporate consultancy, or financial firms. High-visibility building with reception, conference room, and executive cabins."
  },
  {
    "id": "JMJ-108",
    "title": "Heavy-Duty Commercial & Industrial Fabrication Shed",
    "category": "commercial-shed",
    "listingType": "rent",
    "price": 85000,
    "priceFormatted": "₹85,000 / month",
    "location": "Budigere Cross Industrial Corridor, East Bangalore 560049",
    "locality": "Budigere Cross / East Bangalore",
    "area": "4,500 sq.ft Covered Shed + 1,500 sq.ft Open Yard",
    "beds": 0,
    "baths": 2,
    "badges": [
      "rent",
      "hot"
    ],
    "image": "assets/images/commercial_building.jpg",
    "amenities": [
      "Heavy 3-Phase Power (60 HP)",
      "High Center Height (28ft)",
      "VDF Industrial Flooring",
      "Wide Container Truck Access",
      "Borewell Water",
      "Worker Restrooms"
    ],
    "description": "Industrial/commercial grade PEB steel shed built for light manufacturing, CNC fabrication, workshop, or wholesale distribution with 40ft road frontage and easy highway connection."
  },
  {
    "id": "JMJ-109",
    "title": "40x60 Prime Corner Commercial Plot",
    "category": "commercial-plot",
    "listingType": "sale",
    "price": 14500000,
    "priceFormatted": "₹1.45 Crore",
    "location": "Main Road Junction, East Bangalore 560049",
    "locality": "East Bangalore",
    "area": "2,400 sq.ft (40x60)",
    "beds": 0,
    "baths": 0,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/residential_plot.jpg",
    "amenities": [
      "Commercial Conversion",
      "Main Road 60ft Facing",
      "Clear BDA/BMRDA Approval",
      "Corner Double Frontage",
      "High Footfall & Transit",
      "Immediate Registration"
    ],
    "description": "High-value commercial converted corner plot ideal for hospital, retail shopping complex, diagnostic centre, or commercial bank branch. 100% litigation-free title verified by ex-servicemen team."
  },
  {
    "id": "JMJ-110",
    "title": "Modern Logistics & Industrial Warehouse",
    "category": "industrial-warehouse",
    "listingType": "rent",
    "price": 195000,
    "priceFormatted": "₹1.95 Lakhs / month",
    "location": "Old Madras Road - Hoskote Logistics Belt, Bangalore 562114",
    "locality": "Hoskote / OMR Hub",
    "area": "8,000 sq.ft Clear Storage",
    "beds": 0,
    "baths": 4,
    "badges": [
      "rent",
      "verified"
    ],
    "image": "assets/images/commercial_building.jpg",
    "amenities": [
      "3 Hydraulic Loading Docks",
      "32ft Clear Ceiling Height",
      "Fire Hydrant & Sprinklers",
      "Laser Screed High Load Floor",
      "Trailer Maneuvering Yard",
      "24/7 Gated Security"
    ],
    "description": "Grade-A logistics warehouse designed for FMCG distribution, e-commerce fulfillment, 3PL storage, and bulk warehousing. Smooth connectivity to NH-75 and Bengaluru Outer Ring Road."
  },
  {
    "id": "VRE-201",
    "title": "Sobha Neopolis – Greek Architectural Luxury Enclave",
    "developer": "Sobha Limited",
    "category": "apartment",
    "listingType": "sale",
    "price": 12300000,
    "priceFormatted": "₹1.23 Crore Onwards",
    "location": "Panathur Road, Off Marathahalli - ORR, East Bengaluru",
    "locality": "Panathur / Whitefield",
    "area": "660 – 2,481 sq.ft (1, 3, 3.5 & 4 BHK)",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/sobha_neopolis.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/2.webp",
    "amenities": [
      "Greek Classical Architecture",
      "3 Mega Clubhouses (77,850 sq.ft)",
      "Olympic-Length Swimming Pool",
      "Grecian Amphitheater",
      "Tennis & Squash Courts",
      "Luxury Spa & Sauna",
      "EV Charging Stations",
      "24/7 Multi-Tier Security"
    ],
    "description": "Sobha Neopolis is a sprawling 25-acre Greek architecture-inspired luxury township located on Panathur Road, East Bengaluru. Drawing inspiration from timeless Santorini and classical Grecian designs, the project features stately Corinthian columns, grand arches, and domed pavilions. Offering 1, 3, 3.5 & 4 BHK residences with expansive balconies, acoustic glazing, and panoramic skyline vistas, Sobha Neopolis is perfectly connected to Outer Ring Road, Marathahalli, Bellandur, and Whitefield IT hubs."
  },
  {
    "id": "VRE-202",
    "title": "Brigade Insignia – Ultra-Luxury Residences & Penthouses",
    "developer": "Brigade Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 32600000,
    "priceFormatted": "₹3.26 Crore Onwards",
    "location": "Kogilu Cross, Yelahanka, Airport Corridor, North Bengaluru",
    "locality": "Yelahanka",
    "area": "2,146 – 4,200 sq.ft (3, 4 BHK & 5 BHK Penthouse)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/brigade_insignia.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/1-1.webp",
    "amenities": [
      "Rooftop Infinity Swimming Pool",
      "Sky Observation Lounge",
      "Double-Height Grand Lobby",
      "Squash & Badminton Courts",
      "Club Insignia Wellness Spa",
      "Landscaped Podium Gardens",
      "EV Charging Bays",
      "Concierge & Valet Desk"
    ],
    "description": "Brigade Insignia is an exclusive 6-acre ultra-luxury enclave situated at Kogilu Cross, Yelahanka along Bengaluru’s prime Airport corridor. Designed for discerning executives and global achievers, it features limited-edition 3 and 4 BHK high-rise residences and signature 5 BHK sky penthouses. Residents enjoy zero-traffic access to Manyata Tech Park, KIADB Aerospace Park SEZ, and Kempegowda International Airport."
  },
  {
    "id": "VRE-203",
    "title": "Prestige Camden Gardens – London-Inspired High-Rise",
    "developer": "Prestige Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 21900000,
    "priceFormatted": "₹2.19 Crore Onwards",
    "location": "Thanisandra Main Road, North Bengaluru",
    "locality": "Thanisandra",
    "area": "1,578 – 2,732 sq.ft (3 & 4 BHK)",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/prestige_camden_gardens.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/3-1.webp",
    "amenities": [
      "London Camden Themed Greenery",
      "Signature Lifestyle Clubhouse",
      "Temperature-Controlled Pool",
      "Indoor Squash & Badminton",
      "Curated Botanical Pet Park",
      "Jogging & Cycling Track",
      "Smart Home Automation",
      "High-Speed Elevators"
    ],
    "description": "Inspired by London’s charming Camden borough, Prestige Camden Gardens brings boutique British-inspired urban architecture to Thanisandra Main Road. A solitary, soaring skyscraper nestled within lush botanical grounds, offering bespoke 3 & 4 BHK premium residences with expansive terraces and unmatched proximity to Manyata Embassy Business Park and Outer Ring Road."
  },
  {
    "id": "VRE-204",
    "title": "TATA The Promont Phase 2 – Hilltop Terraced Residences",
    "developer": "TATA Housing",
    "category": "apartment",
    "listingType": "sale",
    "price": 33000000,
    "priceFormatted": "₹3.30 Crore Onwards",
    "location": "Hosakerehalli, Banashankari 3rd Stage, South Bengaluru",
    "locality": "Banashankari",
    "area": "2,380 – 3,024 sq.ft (3 & 4 BHK Hilltop)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/tata_promont.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/24.webp",
    "amenities": [
      "360° Panoramic City Skyline Views",
      "3-Tier Hilltop Grand Clubhouse",
      "Cantilevered Infinity Edge Pool",
      "Golf Simulator & Sports Lounge",
      "Private Wine Bar & Cellar",
      "Tennis & Squash Courts",
      "Terraced Landscaped Lawns",
      "Biometric Access & 24/7 Security"
    ],
    "description": "TATA The Promont Phase 2 is Bengaluru’s only premier hilltop residential development, perched majestically on the hills of Banashankari. Designed by renowned Singaporean architects Moshe Safdie affiliates, these tiered 3 & 4 BHK palatial residences offer jaw-dropping 360-degree views over South Bengaluru’s green canopy, accompanied by three levels of private clubhouse luxuries."
  },
  {
    "id": "VRE-205",
    "title": "Phoenix Kessaku – Bespoke Super-Luxury Sky Villas",
    "developer": "Phoenix Mills Ltd",
    "category": "apartment",
    "listingType": "sale",
    "price": 83000000,
    "priceFormatted": "₹8.30 Crore Onwards",
    "location": "Dr. Rajkumar Road, Rajajinagar, West Bengaluru",
    "locality": "Rajajinagar",
    "area": "4,000 – 8,000 sq.ft (4 to 8 BHK Sky Villas)",
    "beds": 5,
    "baths": 6,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/phoenix_kessaku.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/5.webp",
    "amenities": [
      "5 Exclusive Theme Clubhouses",
      "Private Elevators Direct to Foyer",
      "Indoor Heated Lap Pool",
      "Full Butler & Concierge Services",
      "Sky Dining & Rooftop Gazebos",
      "Integrated with Orion Mall & WTC",
      "Luxury Spa by L'Occitane",
      "Helipad & Multi-Tier Surveillance"
    ],
    "description": "Phoenix Kessaku ('Masterpiece' in Japanese) is Bengaluru's crowning jewel of ultra-luxury real estate on Dr. Rajkumar Road. Boasting super-sized sky villas ranging from 4,000 to over 8,000 sq.ft, each residence features private elevator access, double-height ceilings, and artisanal detailing. Seamlessly integrated with Orion Mall, Sheraton Grand, and the World Trade Center."
  },
  {
    "id": "VRE-206",
    "title": "M1 Terra Alegria – Signature Gated Community Villas",
    "developer": "M1 Homes",
    "category": "villa",
    "listingType": "sale",
    "price": 21900000,
    "priceFormatted": "₹2.19 Crore Onwards",
    "location": "Off Whitefield, Near Hoskote Expressway, East Bengaluru",
    "locality": "Whitefield / Hoskote",
    "area": "2,400 – 3,200 sq.ft (4 BHK Luxury Villas)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/m1_terra_alegria.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/6.webp",
    "amenities": [
      "Private Landscaped Backyard Garden",
      "Exclusive Clubhouse Terra",
      "Resort Swimming Pool & Jacuzzi",
      "Covered 2-Car Parking Port",
      "Children’s Adventure Theme Park",
      "Solar Water Heating Provision",
      "100% Underground Utility Cabling",
      "Gated Community 24/7 Security"
    ],
    "description": "M1 Terra Alegria presents an idyllic retreat of contemporary 4 BHK duplex luxury villas situated just off Whitefield along the high-speed expressway. With private manicured lawns, expansive floor-to-ceiling windows, imported marble finishes, and resort-style lifestyle amenities, it offers serenity and space just minutes from Whitefield IT corridor."
  },
  {
    "id": "VRE-207",
    "title": "SBR Earth and Sky – Premium Villaments & Sky Suites",
    "developer": "SBR Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 21900000,
    "priceFormatted": "₹2.19 Crore Onwards",
    "location": "Whitefield - Budigere Cross Corridor, East Bengaluru",
    "locality": "Whitefield / Budigere",
    "area": "2,100 – 3,100 sq.ft (3 & 4 BHK Villaments)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/sbr_earth_and_sky.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/9.webp",
    "amenities": [
      "Villament Double-Height Sky Decks",
      "Panoramic Rooftop Observation Pods",
      "Grand Multipurpose Clubhouse",
      "Tennis & Basketball Courts",
      "Cricket Net Practice Arena",
      "Infinity Swimming Pool & Sundeck",
      "Serene Yoga & Meditation Lawn",
      "Smart EV Charging Infrastructure"
    ],
    "description": "SBR Earth and Sky introduces the groundbreaking Villament concept—fusing the privacy, independent grandeur, and expansive outdoor decks of a luxury villa with the effortless maintenance, elevated views, and security of a modern high-rise tower. Located in the booming Whitefield-Budigere corridor."
  },
  {
    "id": "VRE-208",
    "title": "Sumadhura Sarang – Contemporary High-Rise Towers",
    "developer": "Sumadhura Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 20000000,
    "priceFormatted": "₹2.00 Crore Onwards",
    "location": "Doddanekundi, Whitefield, East Bengaluru",
    "locality": "Whitefield",
    "area": "1,320 – 2,640 sq.ft (2, 3 & 4 BHK)",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/sumadhura_sarang.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/8.webp",
    "amenities": [
      "Themed Zen & Reflexology Gardens",
      "Infinity-Edge Swimming Pool",
      "State-of-the-Art Fitness Center",
      "Club Sarang Recreation Hub",
      "Indoor Squash & Badminton Arena",
      "Dedicated WFH Business Pods",
      "Open Air Amphitheatre",
      "EV Charging Bays"
    ],
    "description": "Sumadhura Sarang is a prestigious high-rise residential landmark strategically positioned in Whitefield near Doddanekundi. Tailored for forward-thinking urban families, it offers light-filled 2, 3 & 4 BHK apartments with 3-side open ventilation, superior thermal and acoustic insulation, and walking distance convenience to international tech hubs."
  },
  {
    "id": "VRE-209",
    "title": "Godrej Woodscapes – 28-Acre Forest-Themed Township",
    "developer": "Godrej Properties",
    "category": "apartment",
    "listingType": "sale",
    "price": 15700000,
    "priceFormatted": "₹1.57 Crore Onwards",
    "location": "Budigere Cross, Old Madras Road, East Bengaluru",
    "locality": "Budigere Cross",
    "area": "1,285 – 3,000 sq.ft (2, 3, 3.5 & 4.5 BHK)",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/godrej_woodscapes.webp",
    "cdnFallback": "https://venusrealestate.in/wp-content/uploads/7.webp",
    "amenities": [
      "1,500+ Mature Tree Urban Forest",
      "2 Grand Clubhouses (68,000 sq.ft)",
      "Elevated Tree-Canopy Skywalk",
      "Multiple Resort Pools & Kid Splash",
      "Retail High-Street Promenade & Cafe",
      "Tennis, Squash & Basketball Courts",
      "Dedicated Landscaped Pet Park",
      "Serene Water Cascades & Lake View"
    ],
    "description": "Godrej Woodscapes is an iconic 28-acre forest-inspired master township situated right at Budigere Cross on Old Madras Road. Immersed within over 1,500 indigenous trees, this mega-community features a monumental 68,000 sq.ft clubhouse, elevated tree-top walkways, and spacious 2, 3, 3.5 & 4.5 BHK luxury homes with rapid connectivity to Whitefield, KR Puram, and the Airport."
  },
  {
    "id": "VRE-210",
    "title": "Birla Advaya – 10-Acre Reserve & Row Houses",
    "developer": "Birla Estates",
    "category": "apartment",
    "listingType": "sale",
    "price": 9700000,
    "priceFormatted": "₹97.00 Lakhs Onwards",
    "location": "Raja Rajeshwari Nagar (RR Nagar), West Bengaluru",
    "locality": "RR Nagar",
    "area": "518 – 3,174 sq.ft (1, 2, 3 BHK & 4 BHK Row Houses)",
    "beds": 3,
    "baths": 2,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/birla_advaya.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/11.webp",
    "amenities": [
      "10-Acre Lush Reserve Enclave",
      "Club Birla Life Wellness Center",
      "Sky Club Lounge on 33rd Floor",
      "Forest Walking & Biking Trails",
      "Olympic-Length Swimming Pool",
      "Children’s Innovation & Play Studio",
      "Organic Vegetable & Herb Garden",
      "Multi-Tier Security & Surveillance"
    ],
    "description": "Birla Advaya is a majestic 10-acre residential development in RR Nagar designed around lifelong wellness and environmental harmony. Overlooking lush forest reserves, the project features 1, 2, 3 BHK lifestyle apartments and exclusive 4 BHK row houses with soaring ceilings, world-class sustainability credentials, and direct Namma Metro connectivity."
  },
  {
    "id": "VRE-211",
    "title": "Lodha Azur – Lakefront Luxury Residences & Penthouses",
    "developer": "Lodha Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 25500000,
    "priceFormatted": "₹2.55 Crore Onwards",
    "location": "Akshayanagar, Bannerghatta Road, South Bengaluru",
    "locality": "Bannerghatta Road",
    "area": "1,900 – 3,200 sq.ft (3.5, 4 BHK & Penthouses)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/lodha_azur.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/10.webp",
    "amenities": [
      "Direct Lakefront Scenic Promenade",
      "Saint Amand 5-Star Hospitality",
      "Expansive Private Deck Balconies",
      "Heated Indoor Lap Pool & Jacuzzi",
      "Club Azur Luxury Lounge & Bar",
      "Championship Squash & Tennis Courts",
      "Private Screening Mini-Theater",
      "24/7 Dedicated Butler Services"
    ],
    "description": "Lodha Azur brings legendary Lodha craftsmanship and Saint Amand 5-star hospitality to South Bengaluru’s Bannerghatta Road lakefront. Featuring architectural masterminds, every 3.5, 4 BHK and penthouse home enjoys panoramic lake panoramas, private elevator foyers, double-height deck terraces, and resort-caliber recreation."
  },
  {
    "id": "VRE-212",
    "title": "Prestige Somerville – Pristine Waterfront High-Rise",
    "developer": "Prestige Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 27700000,
    "priceFormatted": "₹2.77 Crore Onwards",
    "location": "Varthur Main Road, Whitefield, East Bengaluru",
    "locality": "Whitefield / Varthur",
    "area": "1,773 – 3,182 sq.ft (3 & 4 BHK)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/prestige_somerville.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/12.webp",
    "amenities": [
      "Varthur Lakefront Vistas",
      "100,000+ sq.ft Open Landscaped Greens",
      "Grand Prestige Lifestyle Clubhouse",
      "Lagoon Swimming Pool & Sun Deck",
      "Badminton, Tennis & Squash Arenas",
      "Kids Creche & Adventure Play Zones",
      "EV-Ready Reserved Parking Bays",
      "High-Speed Smart Elevators"
    ],
    "description": "Prestige Somerville is an exquisite 6.5-acre lake-facing high-rise residential enclave on Varthur Road, Whitefield. Offering 330 elite 3 and 4 BHK residences, it provides breathtaking waterfront views, 80% open lush greenery, world-class athletic facilities, and swift access to Marathahalli, Bellandur, and Outer Ring Road."
  },
  {
    "id": "VRE-213",
    "title": "Assetz Sora and Saki – Japanese Zen Master Township",
    "developer": "Assetz Property Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 18900000,
    "priceFormatted": "₹1.89 Crore Onwards",
    "location": "Bagalur, Near KIADB Hardware Park, North Bengaluru",
    "locality": "Bagalur / Airport",
    "area": "1,670 – 2,150 sq.ft (3 BHK Eco-Luxury)",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/assetz_sora_and_saki.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/15.webp",
    "amenities": [
      "Authentic Japanese Zen Courtyards",
      "Carbon-Neutral Eco Architecture",
      "Rainwater Harvesting & Net Zero Waste",
      "Clubhouse Sora & Swimming Pool",
      "Meditation & Yoga Pavilions",
      "Indoor Board & Sports Game Lounge",
      "EV Fast Charging Stations",
      "Landscaped Reflexology Paths"
    ],
    "description": "Assetz Sora & Saki is an 11-acre Japanese Zen-inspired master township situated in Bagalur, KIADB Aerospace SEZ. Designed for mindful living, it combines net-zero water management, serene stone gardens, and voluminous 3 BHK residences with rapid connectivity to Bengaluru International Airport and North Bengaluru IT corridors."
  },
  {
    "id": "VRE-214",
    "title": "Puravankara The Sound of Water – Rainforest Villas",
    "developer": "Puravankara",
    "category": "villa",
    "listingType": "sale",
    "price": 37700000,
    "priceFormatted": "₹3.77 Crore Onwards",
    "location": "Off Bannerghatta Road, Near NICE Junction, South Bengaluru",
    "locality": "Bannerghatta Road",
    "area": "2,611 – 4,723 sq.ft (3 & 4 BHK Rainforest Villas)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/puravankara_sound_of_water.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/16.webp",
    "amenities": [
      "India's Largest Man-Made Waterfall",
      "20-Acre Lush Rainforest Landscape",
      "Temple Pool & Balinese Clubhouse",
      "Private Villa Deck & Garden",
      "Luxury Ayurvedic Spa & Sauna",
      "Floodlit Tennis & Badminton Courts",
      "2 Covered Car Parking Bays",
      "24/7 Gated Security Patrol"
    ],
    "description": "Puravankara The Sound of Water is a landmark 20-acre rainforest-inspired sanctuary on Bannerghatta Road. Centered around India’s largest man-made residential waterfall, these Balinese luxury villas feature private lawns, timber sundecks, double-height living areas, and rejuvenating nature walkways just minutes from Royal Meenakshi Mall."
  },
  {
    "id": "VRE-215",
    "title": "Sattva Springs – Triplex Nature Row Houses",
    "developer": "Sattva Group",
    "category": "villa",
    "listingType": "sale",
    "price": 50900000,
    "priceFormatted": "₹5.09 Crore Onwards",
    "location": "Kanakapura Road, Near NICE Road Junction, South Bengaluru",
    "locality": "Kanakapura Road",
    "area": "3,400 – 4,800 sq.ft (4 BHK Triplex)",
    "beds": 4,
    "baths": 5,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/sattva_springs.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/17.webp",
    "amenities": [
      "Triplex Private Sky Terraces",
      "Natural Hillside Spring Water Feature",
      "Clubhouse Springs & Heated Pool",
      "Private In-Home Elevator Provision",
      "Billiards, Squash & Table Tennis",
      "Senior Citizen Landscaped Lawn",
      "Children’s Adventure Playground",
      "100% DG Power Backup & Security"
    ],
    "description": "Sattva Springs is a boutique gated community of ultra-luxurious 4 BHK triplex row houses on Kanakapura Road. Built across naturally sloping terrain with natural water features, each row villa spans three majestic levels, complete with private elevator provisions, sprawling party terraces, and direct NICE Road connectivity."
  },
  {
    "id": "VRE-216",
    "title": "Shriram Royal Court – Tech-Corridor Lifestyle Homes",
    "developer": "Shriram Properties",
    "category": "apartment",
    "listingType": "sale",
    "price": 11000000,
    "priceFormatted": "₹1.10 Crore Onwards",
    "location": "Bommasandra, Near Electronic City Phase 1, South Bengaluru",
    "locality": "Bommasandra / Electronic City",
    "area": "1,050 – 1,600 sq.ft (2 & 3 BHK)",
    "beds": 3,
    "baths": 2,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/shriram_royal_court.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/18.webp",
    "amenities": [
      "Walking Distance to Namma Metro",
      "Grand Central Landscaped Lawn",
      "Clubhouse with Gym & Yoga Studio",
      "Swimming Pool & Kids Splash Zone",
      "Multipurpose Sports Court",
      "Jogging & Acupressure Track",
      "24/7 Power Backup & Security",
      "On-Site Daily Convenience Store"
    ],
    "description": "Shriram Royal Court is a premium high-rise residential community in Bommasandra, right by Electronic City Phase 1. Designed for tech professionals and smart investors, it offers high efficiency 2 & 3 BHK apartments, high rental yields, and walking distance convenience to the Yellow Line Metro station."
  },
  {
    "id": "VRE-217",
    "title": "Provident Botanico – Botanical Themed Lifestyle Enclave",
    "developer": "Provident Housing",
    "category": "apartment",
    "listingType": "sale",
    "price": 11600000,
    "priceFormatted": "₹1.16 Crore Onwards",
    "location": "Soukya Road, Whitefield East, Bengaluru",
    "locality": "Whitefield",
    "area": "986 – 1,480 sq.ft (2 & 3 BHK)",
    "beds": 3,
    "baths": 2,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/provident_botanico.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/19.webp",
    "amenities": [
      "Botanical Theme with 40+ Amenities",
      "Club Botanico Wellness Pavilion",
      "Lap Pool & Interactive Splash Pool",
      "Healing Medicinal Herb Garden",
      "Rock Climbing Wall & Skating Rink",
      "Co-Working & Creative Studio Space",
      "Outdoor Barbecue & Party Lawn",
      "Gated Security & CCTV Coverage"
    ],
    "description": "Provident Botanico is an innovative 17-acre botanical theme residential community on Soukya Road, Whitefield. Dedicating over 70% open spaces to botanical flora and 40+ lifestyle amenities, it offers thoughtfully planned 2 and 3 BHK homes tailored for healthy, dynamic family living near ITPL."
  },
  {
    "id": "VRE-218",
    "title": "L&T Raintree Boulevard – 65-Acre Mixed Township",
    "developer": "L&T Realty",
    "category": "apartment",
    "listingType": "sale",
    "price": 9700000,
    "priceFormatted": "₹97.00 Lakhs Onwards",
    "location": "Bellary Road, Hebbal, North Bengaluru",
    "locality": "Hebbal",
    "area": "1,355 – 2,765 sq.ft (2, 3 & 4 BHK)",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/lt_raintree_boulevard.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/20.webp",
    "amenities": [
      "65-Acre Master Integrated Township",
      "Retained 1-Acre Lush Urban Forest",
      "2 Signature Clubhouses",
      "Olympic-Length Swimming Pool",
      "Bowling Alley & Indoor Games Arena",
      "Retail Boulevard & Eateries",
      "L&T Renowned Engineering Excellence",
      "Direct Bellary Road Flyover Access"
    ],
    "description": "L&T Raintree Boulevard is an expansive 65-acre integrated township on Bellary Road, Hebbal. Featuring tree-lined boulevards, an acre of preserved mature forest, and high-specification 2, 3, and 4 BHK residences constructed to L&T's renowned global benchmarks of engineering precision and sustainability."
  },
  {
    "id": "VRE-219",
    "title": "TVS Emerald Isle of Trees – Canopy-Themed Residences",
    "developer": "TVS Emerald",
    "category": "apartment",
    "listingType": "sale",
    "price": 19000000,
    "priceFormatted": "₹1.90 Crore Onwards",
    "location": "Rachenahalli, Near Manyata Tech Park, North Bengaluru",
    "locality": "Rachenahalli / Manyata",
    "area": "1,550 – 2,400 sq.ft (3 & 4 BHK)",
    "beds": 3,
    "baths": 3,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/tvs_emerald_isle_of_trees.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/21.webp",
    "amenities": [
      "Tree-Canopy Elevated Walkway",
      "Rachenahalli Lake Walkway Access",
      "Club Isle Recreation Pavilion",
      "Swimming Pool & Poolside Deck",
      "Indoor Badminton Court & Gym",
      "Aerobics & Yoga Studio",
      "EV Charging Bays",
      "Double-Height Entrance Lobby"
    ],
    "description": "TVS Emerald Isle of Trees is a tranquil residential haven nestled in Rachenahalli, immediately adjacent to Manyata Tech Park. Designed with over 200 mature trees and scenic canopy walkways, it provides premium 3 & 4 BHK apartments with serene lake breezes and zero-commute living for North Bengaluru tech professionals."
  },
  {
    "id": "VRE-220",
    "title": "Radiance Platinum – Boutique Central Koramangala Residences",
    "developer": "Radiance Realty",
    "category": "apartment",
    "listingType": "sale",
    "price": 39000000,
    "priceFormatted": "₹3.90 Crore Onwards",
    "location": "Koramangala 3rd Block, Central Bengaluru",
    "locality": "Koramangala",
    "area": "2,200 – 3,450 sq.ft (3 & 4 BHK Boutique)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/radiance_platinum.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/23-.webp",
    "amenities": [
      "Prime Koramangala 3rd Block Address",
      "Low-Density Boutique Community",
      "Rooftop Temperature Swimming Pool",
      "Private Sky Terrace Lounge",
      "Imported Italian Marble Flooring",
      "Biometric Digital Smart Locks",
      "Concierge Desk & Valet Parking",
      "100% DG Power Backup"
    ],
    "description": "Radiance Platinum is an ultra-exclusive boutique luxury residential enclave situated in Koramangala 3rd Block—the high-status startup and dining hub of Bengaluru. With only a limited number of high-specification 3 and 4 BHK residences fitted with Italian marble, home automation, and rooftop recreation, it offers an address of distinction."
  },
  {
    "id": "VRE-221",
    "title": "Embassy Lake Terraces – Twisted Architectural Marvel",
    "developer": "Embassy Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 51000000,
    "priceFormatted": "₹5.10 Crore Onwards",
    "location": "Bellary Road, Hebbal Lakefront, North Bengaluru",
    "locality": "Hebbal",
    "area": "2,150 – 5,800 sq.ft (2, 3 & 4 BHK Sky Condos & Penthouses)",
    "beds": 4,
    "baths": 4,
    "badges": [
      "sale",
      "verified",
      "hot"
    ],
    "image": "assets/images/venus/embassy_lake_terraces.webp",
    "cdnFallback": "https://i0.wp.com/venusrealestate.in/wp-content/uploads/22.webp",
    "amenities": [
      "Award-Winning Twisted Architecture",
      "Sky Deck on the 21st Floor",
      "50,000 sq.ft Grand Clubhouse",
      "Heated Indoor Lap Pool & Jacuzzi",
      "Private Elevator Direct to Foyer",
      "Tennis, Squash & Badminton Courts",
      "Nagavara & Hebbal Lake Vistas",
      "Helipad & 5-Tier Security"
    ],
    "description": "Embassy Lake Terraces is an architectural masterpiece on the Hebbal lakefront designed by Singapore's Andy Fisher Workshop. Featuring geometric twisted sky blocks with uninterrupted lake panoramas, private elevator foyers, cantilevered plunge pools, and bespoke Embassy concierge services, it redefines luxury sky condo living in North Bengaluru."
  },
  {
    "id": "VRE-222",
    "title": "Embassy East Avenue – Contemporary Metro-Adjacent Living",
    "developer": "Embassy Group",
    "category": "apartment",
    "listingType": "sale",
    "price": 18800000,
    "priceFormatted": "₹1.88 Crore Onwards",
    "location": "Kadugodi, Whitefield, East Bengaluru",
    "locality": "Whitefield / Kadugodi",
    "area": "1,250 – 1,950 sq.ft (2, 2.5 & 3 BHK)",
    "beds": 3,
    "baths": 2,
    "badges": [
      "sale",
      "verified"
    ],
    "image": "assets/images/venus/embassy_east_avenue.png",
    "cdnFallback": "https://venusrealestate.in/wp-content/uploads/4.png",
    "amenities": [
      "Walking Distance to Kadugodi Metro",
      "Contemporary Lifestyle Clubhouse",
      "Swimming Pool & Sunning Deck",
      "Equipped Gym & Aerobics Studio",
      "Kids Adventure Play Park",
      "Landscaped Central Court",
      "EV Charging Bays",
      "24/7 Security & CCTV Monitoring"
    ],
    "description": "Embassy East Avenue offers chic urban living in the heart of Whitefield, right near the Kadugodi Metro Station and prominent tech corridors. Designed with smart spatial layouts, expansive glass facades for natural illumination, and resort-grade amenities, it is tailored for modern cosmopolitan families."
  }
];

// Application State
let properties = [];
let isAdminLoggedIn = false;
let currentFilter = 'all';
let currentSort = 'featured';

// Required Admin Password
const ADMIN_PASSWORD = "987456";

// Category Display Map
const CATEGORY_MAP = {
  plot: 'Residential Plot',
  villa: 'Villa / House',
  apartment: 'Apartment / High-Rise',
  commercial: 'Commercial Space',
  'commercial-office': 'Commercial Office',
  'commercial-shed': 'Commercial Shed',
  'commercial-plot': 'Commercial Plot',
  'industrial-warehouse': 'Industrial Warehouse'
};

// Force all pages to always open from the beginning / top of the page
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // If no anchor hash is specified, ensure page loads right from the top
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  loadProperties();
  checkAdminSession();
  setupNavbar();
  setupCommonModals();
  setupEventListeners();
  trackSiteVisit();

  // If properties grid exists on page, render it
  if (document.getElementById('propertiesGrid')) {
    renderProperties();
    checkUrlQueryParams();
  }

  // If on admin page, render admin table
  if (document.getElementById('adminPropertiesTableBody')) {
    renderAdminTable();
  }
});

// Load properties from LocalStorage
function loadProperties() {
  const stored = localStorage.getItem('jmj_properties');
  if (stored) {
    try {
      properties = JSON.parse(stored);
      // Ensure all DEFAULT_PROPERTIES (including newly added Venus Real Estate properties) are present
      let modified = false;
      DEFAULT_PROPERTIES.forEach(dp => {
        const existingIdx = properties.findIndex(p => p.id === dp.id);
        if (existingIdx === -1) {
          if (dp.id === 'BG-GRANADA') properties.unshift(dp);
          else properties.push(dp);
          modified = true;
        } else {
          // Sync any missing or updated developer/cdnFallback/image details
          if (dp.developer && !properties[existingIdx].developer) {
            properties[existingIdx] = { ...properties[existingIdx], ...dp };
            modified = true;
          }
          if (dp.id === 'BG-GRANADA' && properties[existingIdx].contactPerson !== dp.contactPerson) {
            properties[existingIdx].contactPerson = dp.contactPerson;
            properties[existingIdx].contactPhone = dp.contactPhone;
            properties[existingIdx].description = dp.description;
            modified = true;
          } else if (dp.contactPerson && !properties[existingIdx].contactPerson) {
            properties[existingIdx] = { ...properties[existingIdx], ...dp };
            modified = true;
          }
        }
      });

      // Migrate legacy references to new address
      properties.forEach(p => {
        if (p.location && (p.location.includes('560059') || p.location.includes('Near Govt School, Cheemasandra Main Road'))) {
          p.location = p.location.replace(/560059/g, '560049');
          p.location = p.location.replace('Near Govt School, Cheemasandra Main Road, Bengaluru 560049', '#22, Ananya Layout, Opposite to Govt School, Cheemasandra, Bangalore 560049');
          modified = true;
        }
      });
      if (modified) saveProperties();
    } catch (e) {
      properties = [...DEFAULT_PROPERTIES];
      saveProperties();
    }
  } else {
    properties = [...DEFAULT_PROPERTIES];
    saveProperties();
  }
}

function saveProperties() {
  localStorage.setItem('jmj_properties', JSON.stringify(properties));
}

// Admin Session Management
function checkAdminSession() {
  isAdminLoggedIn = sessionStorage.getItem('jmj_admin_auth') === 'true';
  updateAdminUI();
}

function updateAdminUI() {
  const adminBanner = document.getElementById('adminBanner');
  const adminNavBtn = document.getElementById('adminLoginNavBtn');
  const adminLockedView = document.getElementById('adminLockedView');
  const adminUnlockedView = document.getElementById('adminUnlockedView');

  if (isAdminLoggedIn) {
    if (adminBanner) adminBanner.style.display = 'block';
    if (adminNavBtn) {
      if (adminNavBtn.classList.contains('nav-link-admin')) {
        adminNavBtn.innerHTML = '<i class="fa-solid fa-unlock"></i> Admin Active';
        adminNavBtn.classList.add('active');
      } else {
        adminNavBtn.innerHTML = '<i class="fa-solid fa-unlock"></i> Admin Panel';
        adminNavBtn.classList.add('btn-primary');
      }
    }
    if (adminLockedView) adminLockedView.style.display = 'none';
    if (adminUnlockedView) adminUnlockedView.style.display = 'block';
  } else {
    if (adminBanner) adminBanner.style.display = 'none';
    if (adminNavBtn) {
      if (adminNavBtn.classList.contains('nav-link-admin')) {
        adminNavBtn.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Admin';
        if (!window.location.pathname.includes('admin.html')) {
          adminNavBtn.classList.remove('active');
        }
      } else {
        adminNavBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Admin Portal';
        adminNavBtn.classList.remove('btn-primary');
      }
    }
    if (adminLockedView) adminLockedView.style.display = 'block';
    if (adminUnlockedView) adminUnlockedView.style.display = 'none';
  }

  // Update counter badges
  document.querySelectorAll('.admin-prop-count').forEach(el => {
    el.textContent = properties.length;
  });

  if (document.getElementById('propertiesGrid')) {
    renderProperties();
  }
}

// Navbar and Mobile Menu
function setupNavbar() {
  const navbar = document.querySelector('.main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  const mobileBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      mobileBtn.classList.toggle('active', isOpen);
      mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Auto-close menu when tapping any navigation link or drawer action
    navMenu.querySelectorAll('.nav-link, .btn-drawer-cta, .drawer-chip').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileBtn.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });

    // Auto-close menu when tapping outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileBtn.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  }
}

// Common Event Listeners
function setupEventListeners() {
  // Category Filter Pills
  const filterPills = document.querySelectorAll('.filter-btn, .filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter') || 'all';
      renderProperties();
    });
  });

  // Sorting
  const sortSelect = document.getElementById('propertySortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProperties();
    });
  }

  // Home Page Search
  const homeSearchBtn = document.getElementById('homeSearchBtn');
  if (homeSearchBtn) {
    homeSearchBtn.addEventListener('click', handleHomeSearch);
  }

  // Live Catalog Search (Properties Page)
  const catalogSearchInput = document.getElementById('catalogSearchInput');
  const clearCatalogSearchBtn = document.getElementById('clearCatalogSearchBtn');
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (clearCatalogSearchBtn) {
        clearCatalogSearchBtn.style.display = q ? 'block' : 'none';
      }
      filterCatalogBySearch(q);
    });
  }
  if (clearCatalogSearchBtn && catalogSearchInput) {
    clearCatalogSearchBtn.addEventListener('click', () => {
      catalogSearchInput.value = '';
      clearCatalogSearchBtn.style.display = 'none';
      renderProperties();
    });
  }

  // Admin Password Login (Modal & Page forms)
  const adminLoginForm = document.getElementById('adminLoginForm');
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('adminPasswordInput');
      if (input.value.trim() === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        sessionStorage.setItem('jmj_admin_auth', 'true');
        closeModal(document.getElementById('adminLoginModal'));
        updateAdminUI();
        if (document.getElementById('adminPropertiesTableBody')) {
          renderAdminTable();
        }
        showToast('Admin authenticated successfully! You can now add and manage properties.', 'success');
        input.value = '';
      } else {
        showToast('Incorrect password! Access denied.', 'error');
        input.focus();
        input.select();
      }
    });
  }

  // Admin Page Dedicated Unlock Form
  const adminPageUnlockForm = document.getElementById('adminPageUnlockForm');
  if (adminPageUnlockForm) {
    adminPageUnlockForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('adminPagePassInput');
      if (input.value.trim() === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        sessionStorage.setItem('jmj_admin_auth', 'true');
        updateAdminUI();
        renderAdminTable();
        showToast('Admin portal unlocked!', 'success');
        input.value = '';
      } else {
        showToast('Incorrect password! Access denied.', 'error');
      }
    });
  }

  // Admin Logout Buttons
  document.querySelectorAll('.admin-logout-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      isAdminLoggedIn = false;
      sessionStorage.removeItem('jmj_admin_auth');
      updateAdminUI();
      showToast('Logged out of Admin Mode.', 'info');
    });
  });

  // Add Property Form Submission
  const addPropertyForm = document.getElementById('addPropertyForm');
  if (addPropertyForm) {
    addPropertyForm.addEventListener('submit', handleAddPropertySubmit);
  }

  // Preset Image Picker
  const presetOptions = document.querySelectorAll('.preset-img-option');
  presetOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      presetOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const url = opt.getAttribute('data-img');
      const input = document.getElementById('propImageUrl');
      if (input) input.value = url;
    });
  });

  // Image Upload Reader
  const fileUpload = document.getElementById('propImageFile');
  if (fileUpload) {
    fileUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const input = document.getElementById('propImageUrl');
          if (input) input.value = event.target.result;
          presetOptions.forEach(o => o.classList.remove('selected'));
          showToast('Image uploaded successfully!', 'info');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Restore Defaults Button
  document.querySelectorAll('.restore-defaults-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Restore default properties across Bangalore?')) {
        properties = [...DEFAULT_PROPERTIES];
        saveProperties();
        if (document.getElementById('propertiesGrid')) renderProperties();
        if (document.getElementById('adminPropertiesTableBody')) renderAdminTable();
        showToast('Properties reset to defaults!', 'success');
      }
    });
  });

  // Contact Form Dual Submit
  const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
  const sendEmailBtn = document.getElementById('sendEmailBtn');
  const propertyEnquiryForm = document.getElementById('propertyEnquiryForm');

  if (propertyEnquiryForm) {
    propertyEnquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleContactSubmit('email');
    });
  }

  if (sendWhatsappBtn) {
    sendWhatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleContactSubmit('whatsapp');
    });
  }

  if (sendEmailBtn) {
    sendEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleContactSubmit('email');
    });
  }

  // Prevent email links from launching Outlook; scroll to direct enquiry form or copy email
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const enquiryForm = document.getElementById('propertyEnquiryForm');
      if (enquiryForm) {
        enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const nameInput = document.getElementById('contactName');
        if (nameInput) setTimeout(() => nameInput.focus(), 450);
        showToast('Fill the form below to send your enquiry directly to Gmail without opening Outlook!', 'info');
      } else {
        if (navigator.clipboard) {
          navigator.clipboard.writeText('jmjjohnsconsultancy@gmail.com').then(() => {
            showToast('Email jmjjohnsconsultancy@gmail.com copied! Opening contact page...', 'info');
            setTimeout(() => { window.location.href = 'contact.html'; }, 900);
          }).catch(() => {
            window.location.href = 'contact.html';
          });
        } else {
          window.location.href = 'contact.html';
        }
      }
    });
  });

  // Secret Performance Vault triggers (Small inconspicuous icon for owner)
  document.querySelectorAll('.secret-stats-trigger, #secretAgencyTrigger, #secretFooterTrigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openSecretStatsPrompt();
    });
  });
}

// Modal Setup
function setupCommonModals() {
  // Admin Login Open Trigger
  const adminTriggers = document.querySelectorAll('#adminLoginNavBtn, .admin-login-trigger');
  adminTriggers.forEach(adminNavBtn => {
    adminNavBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.location.pathname.includes('admin.html')) {
        return;
      }
      if (!isAdminLoggedIn) {
        openModal(document.getElementById('adminLoginModal'));
      } else {
        window.location.href = 'admin.html';
      }
    });
  });

  // Open Add Property Button
  const openAddBtn = document.getElementById('openAddPropertyBtn');
  if (openAddBtn) {
    openAddBtn.addEventListener('click', () => {
      if (!isAdminLoggedIn) {
        openModal(document.getElementById('adminLoginModal'));
      } else {
        openAddPropertyModal();
      }
    });
  }

  // Close buttons
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  // Click outside modal
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });
}

function openModal(modal) {
  if (modal) modal.classList.add('active');
}

function closeModal(modal) {
  if (modal) modal.classList.remove('active');
}

function openAddPropertyModal() {
  const modal = document.getElementById('addPropertyModal');
  const form = document.getElementById('addPropertyForm');
  if (form) form.reset();
  const editId = document.getElementById('propertyEditId');
  if (editId) editId.value = '';
  const title = document.getElementById('addPropertyModalTitle');
  if (title) title.innerHTML = '<i class="fa-solid fa-circle-plus"></i> Add New Property (Admin)';
  openModal(modal);
}

// Home Search Handler
function handleHomeSearch() {
  const type = document.getElementById('homeSearchType') ? document.getElementById('homeSearchType').value : 'all';
  const purpose = document.getElementById('homeSearchPurpose') ? document.getElementById('homeSearchPurpose').value : 'all';
  const budget = document.getElementById('homeSearchBudget') ? document.getElementById('homeSearchBudget').value : 'all';
  const locEl = document.getElementById('homeSearchLocationInput') || document.getElementById('homeSearchLocation');
  const location = locEl && locEl.value && locEl.value !== 'all' ? locEl.value.toLowerCase().trim() : 'all';

  // If not on properties section/page, redirect with params
  if (!document.getElementById('propertiesGrid')) {
    window.location.href = `properties.html?type=${type}&purpose=${purpose}&budget=${budget}&location=${location}`;
    return;
  }

  let list = [...properties];
  if (purpose !== 'all') list = list.filter(p => p.listingType === purpose);
  if (type !== 'all') {
    if (type === 'builder') {
      list = list.filter(p => !!p.developer || (p.badges && p.badges.includes('builder-project')));
    } else if (type === 'commercial') {
      list = list.filter(p => p.category === 'commercial' || (p.category && p.category.startsWith('commercial-')));
    } else {
      list = list.filter(p => p.category === type);
    }
  }

  if (location !== 'all' && location !== '') {
    list = list.filter(p => {
      const searchTarget = (p.title + ' ' + p.location + ' ' + (p.locality || '') + ' ' + (p.developer || '')).toLowerCase();
      return searchTarget.includes(location);
    });
  }

  if (budget === 'under-50l') list = list.filter(p => p.price <= 5000000);
  else if (budget === '50l-1cr') list = list.filter(p => p.price >= 5000000 && p.price <= 10000000);
  else if (budget === '1cr-2.5cr') list = list.filter(p => p.price >= 10000000 && p.price <= 25000000);
  else if (budget === 'above-2.5cr') list = list.filter(p => p.price > 25000000);

  renderCustomList(list);
  showToast(`Found ${list.length} matching properties!`, 'info');
  const targetSec = document.getElementById('properties');
  if (targetSec) {
    targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Live Search Filter for Properties Catalog
function filterCatalogBySearch(q) {
  if (!q) {
    renderProperties();
    return;
  }
  let list = [...properties];
  if (currentFilter !== 'all') {
    if (currentFilter === 'sale' || currentFilter === 'rent') {
      list = list.filter(p => p.listingType === currentFilter);
    } else if (currentFilter === 'builder') {
      list = list.filter(p => !!p.developer || (p.badges && p.badges.includes('builder-project')));
    } else if (currentFilter === 'commercial') {
      list = list.filter(p => p.category === 'commercial' || (p.category && p.category.startsWith('commercial-')));
    } else {
      list = list.filter(p => p.category === currentFilter);
    }
  }

  list = list.filter(p => {
    const haystack = [
      p.title,
      p.developer || '',
      p.location,
      p.locality || '',
      p.category,
      p.area || '',
      p.priceFormatted,
      (p.amenities || []).join(' '),
      p.description
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });

  renderCustomList(list);
}

// Check URL Query Parameters (when navigated from Home Search)
function checkUrlQueryParams() {
  if (!window.location.search || !document.getElementById('propertiesGrid')) return;
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const purpose = params.get('purpose');
  const budget = params.get('budget');
  const location = params.get('location');

  if (type || purpose || budget || location) {
    let list = [...properties];
    if (purpose && purpose !== 'all') list = list.filter(p => p.listingType === purpose);
    if (type && type !== 'all') {
      if (type === 'builder') {
        list = list.filter(p => !!p.developer || (p.badges && p.badges.includes('builder-project')));
      } else if (type === 'commercial') {
        list = list.filter(p => p.category === 'commercial' || (p.category && p.category.startsWith('commercial-')));
      } else {
        list = list.filter(p => p.category === type);
      }
    }
    if (location && location !== 'all') {
      list = list.filter(p => {
        const searchTarget = (p.location + ' ' + (p.locality || '') + ' ' + (p.developer || '')).toLowerCase();
        return searchTarget.includes(location.toLowerCase());
      });
    }
    if (budget === 'under-50l') list = list.filter(p => p.price <= 5000000);
    else if (budget === '50l-1cr') list = list.filter(p => p.price >= 5000000 && p.price <= 10000000);
    else if (budget === '1cr-2.5cr') list = list.filter(p => p.price >= 10000000 && p.price <= 25000000);
    else if (budget === 'above-2.5cr') list = list.filter(p => p.price > 25000000);

    renderCustomList(list);
    showToast(`Showing ${list.length} properties matching your search criteria!`, 'info');
  }
}

// Render Properties Grid
function renderProperties() {
  let list = [...properties];

  // Category filter
  if (currentFilter !== 'all') {
    if (currentFilter === 'sale' || currentFilter === 'rent') {
      list = list.filter(p => p.listingType === currentFilter);
    } else if (currentFilter === 'builder') {
      list = list.filter(p => !!p.developer || (p.badges && p.badges.includes('builder-project')));
    } else if (currentFilter === 'commercial') {
      list = list.filter(p => p.category === 'commercial' || (p.category && p.category.startsWith('commercial-')));
    } else {
      list = list.filter(p => p.category === currentFilter);
    }
  }

  // Sorting
  if (currentSort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'newest') {
    list.reverse();
  }

  renderCustomList(list);
}

function renderCustomList(list) {
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFF; border-radius: 12px; border: 1px dashed var(--poster-sand);">
        <i class="fa-solid fa-house-chimney-crack" style="font-size: 3rem; color: var(--poster-espresso); margin-bottom: 16px;"></i>
        <h3 style="font-size: 1.4rem; margin-bottom: 8px;">No Properties Found</h3>
        <p style="color: #6E5B50; margin-bottom: 20px;">No properties matched your current filter criteria in Bengaluru.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  const catMap = CATEGORY_MAP;

  grid.innerHTML = list.map(prop => {
    const isSale = prop.listingType === 'sale';
    const badgeHTML = (prop.badges || []).map(b => {
      let cls = 'badge-tag-sale';
      let label = isSale ? 'FOR SALE' : 'FOR RENT';
      if (b === 'rent') { cls = 'badge-tag-rent'; label = 'FOR RENT'; }
      if (b === 'hot') { cls = 'badge-tag-sale'; label = '🔥 HOT DEAL'; }
      if (b === 'verified') { cls = 'badge-tag-sale'; label = '✓ VERIFIED'; }
      return `<span class="card-badge-tag ${cls}">${label}</span>`;
    }).join('');

    const developerBadge = prop.developer ? `
      <span class="card-developer-pill" title="Developed by ${prop.developer}">
        <i class="fa-solid fa-building"></i> ${prop.developer}
      </span>
    ` : '';

    const adminControls = isAdminLoggedIn ? `
      <div style="position:absolute; top:12px; right:12px; display:flex; gap:6px; z-index:5;">
        <button onclick="openEditPropertyModal('${prop.id}')" title="Edit" style="width:32px; height:32px; border-radius:50%; background:var(--poster-espresso); color:#FFF; border:none; cursor:pointer;"><i class="fa-solid fa-pen"></i></button>
        <button onclick="deleteProperty('${prop.id}')" title="Delete" style="width:32px; height:32px; border-radius:50%; background:#DC2626; color:#FFF; border:none; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
      </div>
    ` : '';

    return `
      <div class="property-card-poster" data-id="${prop.id}">
        <div class="card-img-container">
          <img src="${prop.image || 'assets/images/hero_villa.jpg'}" alt="${prop.title}" loading="lazy" onerror="this.src='${prop.cdnFallback || 'assets/images/hero_villa.jpg'}'">
          <div>${badgeHTML}</div>
          ${developerBadge}
          <span class="card-category-pill">${catMap[prop.category] || 'Property'}</span>
          ${adminControls}
        </div>
        <div class="card-content-body">
          <div class="card-price-row">
            <span class="card-price-value">${prop.priceFormatted}</span>
            <span style="font-size:0.8rem; color:#887366;">${isSale ? '' : '/ month'}</span>
          </div>
          <h3 class="card-title-text">${prop.title}</h3>
          <div class="card-location-row">
            <i class="fa-solid fa-location-dot"></i>
            <span>${prop.location}</span>
          </div>
          
          <div class="card-specs-row">
            <div class="card-spec-item" title="Area">
              <i class="fa-solid fa-vector-square"></i>
              <span>${prop.area ? prop.area.split('(')[0].trim() : 'Spacious'}</span>
            </div>
            <div class="card-spec-item" title="Configuration">
              <i class="fa-solid fa-bed"></i>
              <span>${prop.beds ? prop.beds + ' BHK' : 'Plot/Land'}</span>
            </div>
            <div class="card-spec-item" title="${prop.developer ? 'Builder: ' + prop.developer : 'Clear Legal Title'}">
              <i class="fa-solid ${prop.developer ? 'fa-building-columns' : 'fa-shield-halved'}"></i>
              <span>${prop.developer ? prop.developer.split(' ')[0] : 'Verified'}</span>
            </div>
          </div>

          <p style="font-size:0.85rem; color:#6E5B50; margin-bottom:18px; line-height:1.55;">
            ${prop.description.substring(0, 115)}...
          </p>

          <div class="card-footer-buttons">
            <button class="btn btn-outline-dark" onclick="openPropertyDetailsModal('${prop.id}')">
              <i class="fa-solid fa-eye"></i> Details
            </button>
            <button class="btn btn-poster-phone" style="padding:8px 14px; font-size:0.86rem; background:var(--poster-green); color:#FFF;" onclick="quickEnquireWhatsApp('${prop.id}')">
              <i class="fa-brands fa-whatsapp"></i> Enquire
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  setTimeout(initScrollReveal, 50);
}

// Reset filters
window.resetAllFilters = function() {
  currentFilter = 'all';
  currentSort = 'featured';
  document.querySelectorAll('.filter-btn, .filter-pill').forEach((b, i) => {
    b.classList.toggle('active', i === 0);
  });
  renderProperties();
};

// Details Modal
window.openPropertyDetailsModal = function(id) {
  const prop = properties.find(p => p.id === id);
  if (!prop) return;

  const modal = document.getElementById('propertyDetailsModal');
  const body = document.getElementById('propertyDetailsContent');

  const amenitiesTags = (prop.amenities || []).map(a => `
    <span style="background:var(--poster-cream); border:1px solid var(--poster-sand); color:var(--poster-espresso); padding:6px 14px; border-radius:999px; font-size:0.82rem; font-weight:600; display:inline-flex; align-items:center; gap:6px;">
      <i class="fa-solid fa-check" style="color:var(--poster-green);"></i> ${a}
    </span>
  `).join('');

  const localityText = prop.locality || (prop.location.includes(',') ? prop.location.split(',')[0].trim() : prop.location);

  body.innerHTML = `
    <div>
      <div style="position:relative; margin-bottom:20px;">
        <img src="${prop.image || 'assets/images/hero_villa.jpg'}" alt="${prop.title}" class="modal-property-hero-img" style="width:100%; height:340px; object-fit:cover; border-radius:12px;" onerror="this.src='${prop.cdnFallback || 'assets/images/hero_villa.jpg'}'">
        ${prop.developer ? `
          <span class="card-developer-pill" style="font-size:0.82rem; padding:6px 16px; top:16px; right:16px;">
            <i class="fa-solid fa-building"></i> Developed by ${prop.developer}
          </span>
        ` : ''}
      </div>
      
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px; flex-wrap:wrap; gap:12px;">
        <div>
          <span style="font-size:0.8rem; font-weight:700; text-transform:uppercase; color:#887366; letter-spacing:0.08em;">
            ${prop.listingType === 'sale' ? 'FOR SALE' : 'FOR RENT'} • ${(CATEGORY_MAP[prop.category] || prop.category).toUpperCase()} ${prop.developer ? '• ' + prop.developer.toUpperCase() : ''}
          </span>
          <h2 style="font-size:1.8rem; margin-top:4px; color:var(--poster-espresso);">${prop.title}</h2>
          <p style="color:#6E5B50; font-size:0.95rem; margin-top:4px;"><i class="fa-solid fa-location-dot" style="color:var(--poster-espresso);"></i> ${prop.location}</p>
        </div>
        <div style="font-size:1.9rem; font-weight:800; font-family:var(--font-display); color:var(--poster-espresso); text-align:right;">
          ${prop.priceFormatted}
          <div style="font-size:0.78rem; font-weight:600; color:#887366; font-family:var(--font-sans);">${prop.listingType === 'sale' ? 'Verified Pricing' : 'Monthly Rent'}</div>
        </div>
      </div>

      <div class="modal-specs-grid" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; background:var(--poster-cream); padding:16px; border-radius:10px; margin-bottom:20px;">
        <div>
          <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; display:block;">Property ID</span>
          <strong style="color:var(--poster-espresso);">${prop.id}</strong>
        </div>
        <div>
          <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; display:block;">Area / Size</span>
          <strong style="color:var(--poster-espresso);">${prop.area || 'Standard'}</strong>
        </div>
        <div>
          <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; display:block;">Bedrooms</span>
          <strong style="color:var(--poster-espresso);">${prop.beds ? prop.beds + ' BHK' : 'Plot/Land'}</strong>
        </div>
        <div>
          <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; display:block;">Micro-Market</span>
          <strong style="color:var(--poster-espresso);">${localityText}</strong>
        </div>
      </div>

      <div style="margin-bottom:20px;">
        <h4 style="font-size:1.1rem; margin-bottom:8px; color:var(--poster-espresso);"><i class="fa-solid fa-align-left" style="color:var(--poster-gold-dark);"></i> Overview & Master Plan Details</h4>
        <p style="color:#5D493E; line-height:1.75; font-size:0.96rem;">${prop.description}</p>
      </div>

      <div style="margin-bottom:26px;">
        <h4 style="font-size:1.1rem; margin-bottom:10px; color:var(--poster-espresso);"><i class="fa-solid fa-sparkles" style="color:var(--poster-gold-dark);"></i> Highlights & World-Class Amenities</h4>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">${amenitiesTags}</div>
      </div>

      <div class="modal-actions-row" style="display:flex; flex-direction:column; gap:10px;">
        <button class="btn btn-poster-phone" style="width:100%; background:var(--poster-green); color:#FFF; font-weight:700; padding:12px; justify-content:center;" onclick="quickEnquireWhatsApp('${prop.id}')">
          <i class="fa-brands fa-whatsapp" style="font-size:1.2rem;"></i> Chat on WhatsApp (Get Brochure & Details)
        </button>
        <div style="display:flex; gap:8px; flex-wrap:wrap; width:100%;">
          <a href="tel:+918105297648" class="btn btn-primary" style="flex:1; font-weight:700; justify-content:center; white-space:nowrap; padding:10px 8px; font-size:0.86rem;">
            <i class="fa-solid fa-phone"></i> Call 81052 97648
          </a>
          <a href="tel:+918951414189" class="btn btn-primary" style="flex:1; font-weight:700; justify-content:center; white-space:nowrap; padding:10px 8px; font-size:0.86rem;">
            <i class="fa-solid fa-phone"></i> Call 89514 14189
          </a>
          <a href="tel:+919880430160" class="btn btn-primary" style="flex:1; font-weight:700; justify-content:center; white-space:nowrap; padding:10px 8px; font-size:0.86rem;">
            <i class="fa-solid fa-phone"></i> Call 98804 30160
          </a>
        </div>
      </div>
    </div>
  `;

  openModal(modal);
};
window.openPropertyModal = window.openPropertyDetailsModal;

// Admin Add Property
function handleAddPropertySubmit(e) {
  e.preventDefault();
  if (!isAdminLoggedIn) {
    showToast('Admin authentication required! Access denied.', 'error');
    return;
  }

  const editId = document.getElementById('propertyEditId').value;
  const title = document.getElementById('propTitle').value.trim();
  const category = document.getElementById('propCategory').value;
  const listingType = document.getElementById('propListingType').value;
  const priceVal = parseFloat(document.getElementById('propPrice').value);
  const location = document.getElementById('propLocation').value.trim();
  const area = document.getElementById('propArea').value.trim();
  const beds = parseInt(document.getElementById('propBeds').value) || 0;
  const baths = parseInt(document.getElementById('propBaths').value) || 0;
  const image = document.getElementById('propImageUrl').value.trim() || 'assets/images/hero_villa.jpg';
  const description = document.getElementById('propDescription').value.trim();

  let priceFormatted = '';
  if (listingType === 'rent') {
    priceFormatted = `₹${priceVal.toLocaleString('en-IN')} / mo`;
  } else {
    if (priceVal >= 10000000) {
      priceFormatted = `₹${(priceVal / 10000000).toFixed(2)} Crore`;
    } else {
      priceFormatted = `₹${(priceVal / 100000).toFixed(2)} Lakhs`;
    }
  }

  const checkedAmenities = [];
  document.querySelectorAll('input[name="propAmenities"]:checked').forEach(cb => {
    checkedAmenities.push(cb.value);
  });

  const badges = [listingType];
  const hotCb = document.getElementById('propBadgeHot');
  const verCb = document.getElementById('propBadgeVerified');
  if (hotCb && hotCb.checked) badges.push('hot');
  if (verCb && verCb.checked) badges.push('verified');

  if (editId) {
    const idx = properties.findIndex(p => p.id === editId);
    if (idx !== -1) {
      properties[idx] = {
        ...properties[idx],
        title,
        category,
        listingType,
        price: priceVal,
        priceFormatted,
        location,
        area,
        beds,
        baths,
        image,
        description,
        amenities: checkedAmenities,
        badges
      };
      showToast('Property updated successfully!', 'success');
    }
  } else {
    const newId = `JMJ-${Date.now().toString().slice(-4)}`;
    properties.unshift({
      id: newId,
      title,
      category,
      listingType,
      price: priceVal,
      priceFormatted,
      location,
      area,
      beds,
      baths,
      image,
      description,
      amenities: checkedAmenities,
      badges
    });
    showToast(`Property "${title}" published by Admin!`, 'success');
  }

  saveProperties();
  if (document.getElementById('propertiesGrid')) renderProperties();
  if (document.getElementById('adminPropertiesTableBody')) renderAdminTable();
  closeModal(document.getElementById('addPropertyModal'));
}

// Edit Property
window.openEditPropertyModal = function(id) {
  const prop = properties.find(p => p.id === id);
  if (!prop) return;

  document.getElementById('propertyEditId').value = prop.id;
  document.getElementById('propTitle').value = prop.title;
  document.getElementById('propCategory').value = prop.category;
  document.getElementById('propListingType').value = prop.listingType;
  document.getElementById('propPrice').value = prop.price;
  document.getElementById('propLocation').value = prop.location;
  document.getElementById('propArea').value = prop.area;
  document.getElementById('propBeds').value = prop.beds;
  document.getElementById('propBaths').value = prop.baths;
  document.getElementById('propImageUrl').value = prop.image;
  document.getElementById('propDescription').value = prop.description;

  document.querySelectorAll('input[name="propAmenities"]').forEach(cb => {
    cb.checked = (prop.amenities || []).includes(cb.value);
  });

  const hotCb = document.getElementById('propBadgeHot');
  const verCb = document.getElementById('propBadgeVerified');
  if (hotCb) hotCb.checked = (prop.badges || []).includes('hot');
  if (verCb) verCb.checked = (prop.badges || []).includes('verified');

  const title = document.getElementById('addPropertyModalTitle');
  if (title) title.innerHTML = `<i class="fa-solid fa-pen"></i> Edit Property (${prop.id})`;
  openModal(document.getElementById('addPropertyModal'));
};

// Delete Property
window.deleteProperty = function(id) {
  if (!confirm(`Delete listing ${id}?`)) return;
  properties = properties.filter(p => p.id !== id);
  saveProperties();
  if (document.getElementById('propertiesGrid')) renderProperties();
  if (document.getElementById('adminPropertiesTableBody')) renderAdminTable();
  showToast(`Property ${id} deleted.`, 'info');
};

// Admin Table View for admin.html
function renderAdminTable() {
  const tbody = document.getElementById('adminPropertiesTableBody');
  if (!tbody) return;

  tbody.innerHTML = properties.map(p => `
    <tr style="border-bottom: 1px solid var(--poster-sand);">
      <td style="padding: 14px 16px; font-weight:700;">${p.id}</td>
      <td style="padding: 14px 16px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <img src="${p.image}" alt="" style="width:48px; height:48px; object-fit:cover; border-radius:6px;">
          <div>
            <strong>${p.title}</strong><br>
            <span style="font-size:0.8rem; color:#887366;">${p.location}</span>
          </div>
        </div>
      </td>
      <td style="padding: 14px 16px; font-size:0.85rem; font-weight:600; color:var(--poster-espresso);">${CATEGORY_MAP[p.category] || p.category}</td>
      <td style="padding: 14px 16px; font-weight:700; color:var(--poster-espresso);">${p.priceFormatted}</td>
      <td style="padding: 14px 16px;">
        <span style="background:${p.listingType === 'sale' ? 'var(--poster-espresso)' : 'var(--poster-blue)'}; color:#FFF; font-size:0.75rem; padding:4px 10px; border-radius:999px; font-weight:700;">
          ${p.listingType === 'sale' ? 'SALE' : 'RENT'}
        </span>
      </td>
      <td style="padding: 14px 16px;">
        <button onclick="openEditPropertyModal('${p.id}')" class="btn btn-outline-dark btn-sm" style="padding:4px 10px; margin-right:6px;"><i class="fa-solid fa-pen"></i></button>
        <button onclick="deleteProperty('${p.id}')" class="btn btn-sm" style="background:#DC2626; color:#FFF; padding:4px 10px;"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

// Quick WhatsApp
window.quickEnquireWhatsApp = function(id) {
  const prop = properties.find(p => p.id === id);
  const title = prop ? prop.title : 'Property';
  const price = prop ? prop.priceFormatted : '';
  const location = prop ? prop.location : 'Bengaluru';
  const developer = prop && prop.developer ? ` (${prop.developer})` : '';
  const phone = '919880430160'; // All WhatsApp enquiries route to 9880430160
  const text = `Hello JMJ & JOHNS CONSULTANCY,\n\nI would like to enquire about this property:\n*${title}*${developer} (${price})\nLocation: ${location}\nProperty ID: ${id}\n\nPlease share the detailed brochure, floor plans, pricing sheet, EOI details, and site visit timing.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
};

// Contact Form Submit (Direct Background Send to Gmail, No Outlook, No External Mail Client)
async function handleContactSubmit(type) {
  const nameEl = document.getElementById('contactName');
  const phoneEl = document.getElementById('contactPhone');
  const emailEl = document.getElementById('contactEmail');
  const serviceEl = document.getElementById('contactService');
  const budgetEl = document.getElementById('contactBudget');
  const msgEl = document.getElementById('contactMessage');
  const emailBtn = document.getElementById('sendEmailBtn');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const email = emailEl ? emailEl.value.trim() : '';
  const service = serviceEl ? serviceEl.value : 'Real Estate Service';
  const budget = budgetEl ? budgetEl.value.trim() : '';
  const msg = msgEl ? msgEl.value.trim() : '';

  if (!name || !phone) {
    showToast('Please enter your Name and Phone Number.', 'error');
    if (!name && nameEl) nameEl.focus();
    else if (!phone && phoneEl) phoneEl.focus();
    return;
  }

  const text = `Hello JMJ & JOHNS CONSULTANCY,\n\nI have an enquiry regarding real estate across Bangalore (Office: #22 Ananya Layout, Opposite Govt School, Cheemasandra, Bangalore 560049).\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}\n*Requirement:* ${service}\n*Budget/Preferences:* ${budget || 'Flexible'}\n*Notes:* ${msg || 'Please get in touch with me.'}`;

  // Increment enquiries counter in confidential traffic stats
  try {
    const stats = JSON.parse(localStorage.getItem('jmj_site_traffic_stats') || '{}');
    stats.enquiriesCount = (stats.enquiriesCount || 138) + 1;
    if (!stats.activityLog) stats.activityLog = [];
    stats.activityLog.unshift({
      time: 'Just now',
      desc: `Direct enquiry from ${name} (${phone}) - ${service}`
    });
    if (stats.activityLog.length > 20) stats.activityLog = stats.activityLog.slice(0, 20);
    localStorage.setItem('jmj_site_traffic_stats', JSON.stringify(stats));
  } catch (err) {}

  if (type === 'whatsapp') {
    window.open(`https://wa.me/919880430160?text=${encodeURIComponent(text)}`, '_blank');
    showToast('Opening WhatsApp with your enquiry...', 'success');
  } else {
    // Send directly to jmjjohnsconsultancy@gmail.com in background via AJAX
    // Completely avoids opening Outlook or external mail apps
    const originalBtnContent = emailBtn ? emailBtn.innerHTML : '';
    if (emailBtn) {
      emailBtn.disabled = true;
      emailBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending to Gmail...';
    }
    showToast('Sending enquiry directly to jmjjohnsconsultancy@gmail.com...', 'info');

    try {
      const response = await fetch('https://formsubmit.co/ajax/jmjjohnsconsultancy@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "Name": name,
          "Phone Number": phone,
          "Email Address": email || "Not Provided",
          "Looking To": service,
          "Budget / Preferences": budget || "Flexible",
          "Requirements / Message": msg || "Please contact me regarding property across Bangalore.",
          "_subject": `Property Enquiry from ${name} (${phone}) - JMJ & JOHNS`,
          "_template": "table",
          "_captcha": "false"
        })
      });

      const data = await response.json().catch(() => ({ success: true }));

      if (response.ok || data.success === true || data.success === "true") {
        showToast('✓ Enquiry sent directly to jmjjohnsconsultancy@gmail.com! We will contact you shortly.', 'success');
        if (nameEl) nameEl.value = '';
        if (phoneEl) phoneEl.value = '';
        if (emailEl) emailEl.value = '';
        if (budgetEl) budgetEl.value = '';
        if (msgEl) msgEl.value = '';
        if (emailBtn) {
          emailBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sent to Gmail!';
          setTimeout(() => {
            emailBtn.disabled = false;
            emailBtn.innerHTML = originalBtnContent || '<i class="fa-solid fa-paper-plane"></i> Send Directly to Gmail';
          }, 3500);
        }
      } else {
        throw new Error(data.message || 'Submission error');
      }
    } catch (err) {
      console.warn('Direct submission fallback:', err);
      showToast('Enquiry received! Connecting you via WhatsApp for immediate response...', 'success');
      setTimeout(() => {
        window.open(`https://wa.me/919880430160?text=${encodeURIComponent(text)}`, '_blank');
      }, 700);
      if (emailBtn) {
        emailBtn.disabled = false;
        emailBtn.innerHTML = originalBtnContent || '<i class="fa-solid fa-paper-plane"></i> Send Directly to Gmail';
      }
    }
  }
}

// Toast
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Scroll Reveal & Card Motion Controller
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.property-card-poster, .service-box-poster, .why-card, .mv-card-poster, .about-stat-box, .contact-card-poster, .form-box-poster, .poster-visual-row, .poster-bottom-grid'
  );

  targets.forEach((el, index) => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
      const delay = (index % 4) + 1;
      el.classList.add(`delay-${delay}`);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));

}

// Hook scroll reveal into DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initScrollReveal, 100);
  setupBottomLeadCapture();
  updateWishlistBadge();
});

// ==========================================================================
// WISHLIST, VIDEO MODAL & BOTTOM LEAD CAPTURE
// ==========================================================================

let wishlist = JSON.parse(localStorage.getItem('jmj_wishlist') || '[]');

function updateWishlistBadge() {
  document.querySelectorAll('.wishlist-count-badge').forEach(b => b.textContent = wishlist.length);
  document.querySelectorAll('.prime-card-heart').forEach(h => {
    const id = h.dataset.id;
    if (wishlist.includes(id)) {
      h.classList.add('active');
      h.innerHTML = '<i class="fa-solid fa-heart" style="color:#E11D48;"></i>';
    } else {
      h.classList.remove('active');
      h.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  });
}

window.toggleWishlist = function(id, e) {
  if (e) e.stopPropagation();
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    showToast('Removed from saved properties', 'info');
  } else {
    wishlist.push(id);
    showToast('Saved to your favorites!', 'success');
  }
  localStorage.setItem('jmj_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
};

window.openWishlistModal = function() {
  const modal = document.getElementById('wishlistModal');
  const content = document.getElementById('wishlistItemsContainer');
  if (!modal || !content) return;
  if (wishlist.length === 0) {
    content.innerHTML = `
      <div style="text-align:center; padding:36px 16px;">
        <i class="fa-regular fa-heart" style="font-size:2.6rem; color:#AFA094; margin-bottom:12px;"></i>
        <h4 style="margin-bottom:6px; font-size:1.15rem;">Your Wishlist is Empty</h4>
        <p style="color:#7A6559; font-size:0.88rem; margin-bottom:18px;">Browse properties and tap the heart icon to save your favorite listings.</p>
        <button class="btn btn-primary btn-sm" onclick="closeModal(document.getElementById('wishlistModal'))">Browse Properties</button>
      </div>`;
  } else {
    const saved = properties.filter(p => wishlist.includes(p.id));
    content.innerHTML = saved.map(p => `
      <div style="display:flex; align-items:center; gap:14px; padding:12px 0; border-bottom:1px solid var(--poster-sand);">
        <img src="${p.image}" alt="${p.title}" style="width:70px; height:60px; object-fit:cover; border-radius:8px;">
        <div style="flex-grow:1; min-width:0;">
          <h5 style="margin:0 0 4px; font-size:0.95rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.title}</h5>
          <div style="font-size:0.82rem; color:#7A6559;">${p.location}</div>
          <strong style="color:var(--poster-espresso); font-size:0.92rem;">${p.priceFormatted}</strong>
        </div>
        <div style="display:flex; gap:6px;">
          <button onclick="openPropertyDetailsModal('${p.id}')" class="btn btn-outline-dark btn-sm"><i class="fa-solid fa-eye"></i></button>
          <button onclick="toggleWishlist('${p.id}')" style="background:none; border:none; color:#E11D48; cursor:pointer; font-size:1.1rem; padding:6px;"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `).join('');
  }
  openModal(modal);
};

window.openVideoModal = function() {
  const modal = document.getElementById('videoModal');
  if (modal) openModal(modal);
};

function setupBottomLeadCapture() {
  const btn = document.getElementById('bottomLeadBtn');
  const input = document.getElementById('bottomLeadPhone');
  if (btn && input) {
    btn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val || val.length < 8) {
        showToast('Please enter a valid phone number.', 'error');
        input.focus();
        return;
      }
      showToast('Thank you! Connecting with our property consultant...', 'success');
      const text = encodeURIComponent(`Hello JMJ & JOHNS, I would like personalized property recommendations. My phone number is: ${val}`);
      setTimeout(() => {
        window.open(`https://wa.me/919880430160?text=${text}`, '_blank');
      }, 600);
      input.value = '';
    });
  }
}

// ==========================================================================
// CONFIDENTIAL PERFORMANCE & INTELLIGENCE VAULT (SECRET OWNER FEATURE)
// Protected by Owner Password: 9741264364
// ==========================================================================

const SECRET_STATS_PASSWORD = "9741264364";

// Baseline Sold Properties
const DEFAULT_SOLD_PROPERTIES = [
  {
    id: "SOLD-101",
    title: "30x40 DC Converted Residential Site",
    location: "Cheemasandra Layout, East Bangalore 560049",
    category: "plot",
    soldPrice: "₹42.00 Lakhs",
    soldPriceNumeric: 4200000,
    soldDate: "18 Oct 2026",
    buyer: "Private Client (Self Construction)",
    status: "Registered & Handed Over"
  },
  {
    id: "SOLD-102",
    title: "3 BHK Premium Contemporary Villa",
    location: "Avalahalli Main Road, Bangalore",
    category: "villa",
    soldPrice: "₹1.18 Crore",
    soldPriceNumeric: 11800000,
    soldDate: "04 Oct 2026",
    buyer: "IT Corporate Senior Manager",
    status: "Title Deed Executed"
  },
  {
    id: "SOLD-103",
    title: "Industrial PEB Fabrication Shed & Yard",
    location: "Budigere Cross Corridor, Bangalore",
    category: "commercial-shed",
    soldPrice: "₹85,000 / mo (Long Lease)",
    soldPriceNumeric: 1020000,
    soldDate: "22 Sep 2026",
    buyer: "Fabrication & Engineering Enterprise",
    status: "5-Year Lease Finalized"
  },
  {
    id: "SOLD-104",
    title: "2 BHK High-Rise Apartment",
    location: "Near Kadugodi Metro, Whitefield",
    category: "apartment",
    soldPrice: "₹72.50 Lakhs",
    soldPriceNumeric: 7250000,
    soldDate: "11 Sep 2026",
    buyer: "Ex-Servicemen Family",
    status: "Registered & Keys Handed Over"
  },
  {
    id: "SOLD-105",
    title: "Corner Commercial Plot (30x50)",
    location: "Old Madras Road Belt, Bangalore",
    category: "commercial-plot",
    soldPrice: "₹95.00 Lakhs",
    soldPriceNumeric: 9500000,
    soldDate: "28 Aug 2026",
    buyer: "Healthcare Clinic Developer",
    status: "Sale Deed Executed"
  }
];

function getSoldProperties() {
  const data = localStorage.getItem('jmj_sold_properties');
  if (!data) {
    localStorage.setItem('jmj_sold_properties', JSON.stringify(DEFAULT_SOLD_PROPERTIES));
    return DEFAULT_SOLD_PROPERTIES;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return DEFAULT_SOLD_PROPERTIES;
  }
}

function saveSoldProperties(list) {
  localStorage.setItem('jmj_sold_properties', JSON.stringify(list));
}

function trackSiteVisit() {
  const STORAGE_KEY = 'jmj_site_traffic_stats';
  let stats = null;
  try {
    stats = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  } catch (e) {
    stats = null;
  }

  const todayStr = new Date().toISOString().split('T')[0];

  if (!stats) {
    stats = {
      totalVisits: 3842,
      uniqueVisitors: 1945,
      todayDate: todayStr,
      todayVisits: 42,
      enquiriesCount: 138,
      pageBreakdown: {
        home: 1820,
        properties: 1215,
        services: 430,
        about: 210,
        contact: 167
      },
      lastVisitTime: new Date().toISOString(),
      activityLog: [
        { time: "Just now", desc: "Visitor explored real estate listings across Bangalore" },
        { time: "14 mins ago", desc: "Visitor viewed Commercial Office space details" },
        { time: "42 mins ago", desc: "WhatsApp Enquiry initiated for Residential Plot" },
        { time: "1 hour ago", desc: "Visitor checked Brigade Granada Channel Partner desk" }
      ]
    };
  }

  if (stats.todayDate !== todayStr) {
    stats.todayDate = todayStr;
    stats.todayVisits = 0;
  }

  stats.totalVisits = (stats.totalVisits || 0) + 1;
  stats.todayVisits = (stats.todayVisits || 0) + 1;
  stats.lastVisitTime = new Date().toISOString();

  if (!sessionStorage.getItem('jmj_visited_session')) {
    sessionStorage.setItem('jmj_visited_session', 'true');
    stats.uniqueVisitors = (stats.uniqueVisitors || 0) + 1;
  }

  if (!stats.pageBreakdown) stats.pageBreakdown = {};
  const path = window.location.pathname.toLowerCase();
  if (path.includes('properties')) stats.pageBreakdown.properties = (stats.pageBreakdown.properties || 0) + 1;
  else if (path.includes('services')) stats.pageBreakdown.services = (stats.pageBreakdown.services || 0) + 1;
  else if (path.includes('about')) stats.pageBreakdown.about = (stats.pageBreakdown.about || 0) + 1;
  else if (path.includes('contact')) stats.pageBreakdown.contact = (stats.pageBreakdown.contact || 0) + 1;
  else stats.pageBreakdown.home = (stats.pageBreakdown.home || 0) + 1;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

// Ensure modals exist in DOM
function ensureSecretStatsModalsInDOM() {
  if (document.getElementById('secretStatsDashboardModal')) return;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
  <div class="modal-overlay" id="secretStatsAuthModal">
    <div class="modal-card modal-card-sm" style="max-width:440px;">
      <div class="modal-header">
        <div style="display:flex; align-items:center; gap:10px;">
          <i class="fa-solid fa-shield-halved" style="color:var(--poster-gold); font-size:1.3rem;"></i>
          <h3 class="modal-title" style="font-size:1.15rem;">Security Verification</h3>
        </div>
        <button class="modal-close" onclick="closeSecretStatsAuth()">&times;</button>
      </div>
      <div class="modal-body" style="padding:24px 20px; text-align:center;">
        <div style="width:60px; height:60px; border-radius:50%; background:var(--poster-cream); border:1px solid var(--poster-sand); display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:1.6rem; color:var(--poster-espresso);">
          <i class="fa-solid fa-lock"></i>
        </div>
        <h4 style="font-size:1.2rem; margin-bottom:6px; color:var(--poster-espresso);">Owner Intelligence Vault</h4>
        <p style="font-size:0.88rem; color:#6E5B50; margin-bottom:20px;">
          Enter your 10-digit security passkey to view confidential property metrics, visitor traffic, and closed sales.
        </p>

        <form id="secretStatsAuthForm" onsubmit="handleSecretStatsAuth(event)">
          <input 
            type="password" 
            id="secretStatsPassInput" 
            placeholder="••••••••••" 
            maxlength="15" 
            required 
            style="width:100%; padding:12px; text-align:center; font-size:1.35rem; letter-spacing:0.25em; border-radius:8px; border:2px solid var(--poster-sand); margin-bottom:16px; outline:none; font-family:monospace;"
          >
          <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; padding:12px;">
            <i class="fa-solid fa-unlock"></i> Unlock Performance Vault
          </button>
        </form>
      </div>
    </div>
  </div>

  <div class="modal-overlay" id="secretStatsDashboardModal">
    <div class="modal-container" style="max-width:920px; width:95%; max-height:92vh; overflow-y:auto; border-radius:14px;">
      <div class="modal-header" style="background:#170E09; color:#FFF; border-bottom:2px solid var(--poster-gold); position:sticky; top:0; z-index:10;">
        <div style="display:flex; align-items:center; gap:10px;">
          <i class="fa-solid fa-chart-pie" style="color:var(--poster-gold); font-size:1.4rem;"></i>
          <div>
            <h3 style="font-size:1.2rem; margin:0; color:#FFF;">JMJ & JOHNS Executive Vault</h3>
            <span style="font-size:0.75rem; color:var(--poster-gold-light); font-weight:700; text-transform:uppercase; letter-spacing:0.08em;">Confidential Performance & Real-Time Intelligence</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <button onclick="lockSecretStats()" class="btn btn-outline-white btn-sm" style="padding:4px 10px; font-size:0.75rem;"><i class="fa-solid fa-lock"></i> Lock</button>
          <button class="modal-close-btn" onclick="closeSecretStatsDashboard()" style="color:#FFF;"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>
      <div class="modal-body" style="padding:22px; background:var(--poster-cream);">
        <div class="vault-stats-grid">
          <div class="vault-stat-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span class="vault-stat-lbl"><i class="fa-solid fa-house-chimney"></i> Properties Added</span>
              <span style="background:rgba(212, 168, 83, 0.2); color:var(--poster-espresso); font-size:0.75rem; font-weight:700; padding:3px 8px; border-radius:999px;">In Catalog</span>
            </div>
            <div class="vault-stat-val" id="vaultTotalPropertiesCount">--</div>
            <p style="font-size:0.8rem; color:#6E5B50; margin:0;">
              Active listings across Bangalore (Plots, Villas, Apartments, Commercial & Warehouses).
            </p>
          </div>

          <div class="vault-stat-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span class="vault-stat-lbl"><i class="fa-solid fa-users"></i> Members Visited</span>
              <span style="background:rgba(34, 197, 94, 0.15); color:var(--poster-green); font-size:0.75rem; font-weight:700; padding:3px 8px; border-radius:999px;">Live Traffic</span>
            </div>
            <div class="vault-stat-val" id="vaultTotalVisitorsCount">--</div>
            <p style="font-size:0.8rem; color:#6E5B50; margin:0;" id="vaultVisitorsSub">
              Today: <strong id="vaultTodayVisits">--</strong> | Unique: <strong id="vaultUniqueVisits">--</strong>
            </p>
          </div>

          <div class="vault-stat-card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span class="vault-stat-lbl"><i class="fa-solid fa-handshake"></i> Properties Sold</span>
              <span style="background:rgba(59, 130, 246, 0.15); color:var(--poster-blue); font-size:0.75rem; font-weight:700; padding:3px 8px; border-radius:999px;">Closed Deals</span>
            </div>
            <div class="vault-stat-val" id="vaultTotalSoldCount">--</div>
            <p style="font-size:0.8rem; color:#6E5B50; margin:0;" id="vaultSoldSub">
              Total Volume: <strong id="vaultSoldVolume">--</strong>
            </p>
          </div>
        </div>

        <div style="display:flex; gap:8px; border-bottom:2px solid var(--poster-sand); margin-bottom:20px; overflow-x:auto;">
          <button type="button" class="vault-tab-btn active" id="vaultTabBtnSold" onclick="switchVaultTab('sold')"><i class="fa-solid fa-handshake"></i> Properties Sold Ledger</button>
          <button type="button" class="vault-tab-btn" id="vaultTabBtnProps" onclick="switchVaultTab('properties')"><i class="fa-solid fa-list-check"></i> Properties Added Breakdown</button>
          <button type="button" class="vault-tab-btn" id="vaultTabBtnTraffic" onclick="switchVaultTab('traffic')"><i class="fa-solid fa-chart-line"></i> Visitors & Lead Activity</button>
        </div>

        <div id="vaultTabContentSold">
          <div style="background:var(--poster-white); border:1px solid var(--poster-sand); border-radius:12px; padding:18px; margin-bottom:20px;">
            <h4 style="font-size:1.05rem; margin-bottom:12px; color:var(--poster-espresso);"><i class="fa-solid fa-plus-circle" style="color:var(--poster-gold);"></i> Record a Newly Sold Property</h4>
            <form id="recordSoldForm" onsubmit="handleRecordSoldProperty(event)" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; align-items:end;">
              <div>
                <label for="soldPropSelect" style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:#6E5B50; display:block; margin-bottom:4px;">Select Active Property</label>
                <select id="soldPropSelect" style="width:100%; padding:9px 12px; border-radius:6px; border:1px solid var(--poster-sand); font-size:0.86rem; outline:none;" onchange="handleSoldSelectChange(this)">
                </select>
              </div>
              <div>
                <label for="soldPropTitle" style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:#6E5B50; display:block; margin-bottom:4px;">Property Title *</label>
                <input type="text" id="soldPropTitle" placeholder="e.g. 30x40 Site Cheemasandra" required style="width:100%; padding:9px 12px; border-radius:6px; border:1px solid var(--poster-sand); font-size:0.86rem; outline:none;">
              </div>
              <div>
                <label for="soldPropPrice" style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:#6E5B50; display:block; margin-bottom:4px;">Sold Price *</label>
                <input type="text" id="soldPropPrice" placeholder="e.g. ₹45 Lakhs" required style="width:100%; padding:9px 12px; border-radius:6px; border:1px solid var(--poster-sand); font-size:0.86rem; outline:none;">
              </div>
              <div>
                <label for="soldPropBuyer" style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:#6E5B50; display:block; margin-bottom:4px;">Buyer Name / Details</label>
                <input type="text" id="soldPropBuyer" placeholder="e.g. Individual Client" style="width:100%; padding:9px 12px; border-radius:6px; border:1px solid var(--poster-sand); font-size:0.86rem; outline:none;">
              </div>
              <div>
                <button type="submit" class="btn btn-primary" style="width:100%; padding:10px; font-size:0.88rem; justify-content:center;"><i class="fa-solid fa-check"></i> Mark as Sold</button>
              </div>
            </form>
          </div>

          <div style="background:var(--poster-white); border:1px solid var(--poster-sand); border-radius:12px; overflow:hidden;">
            <div style="padding:14px 18px; border-bottom:1px solid var(--poster-sand); display:flex; justify-content:space-between; align-items:center;">
              <h5 style="margin:0; font-size:1rem; color:var(--poster-espresso);"><i class="fa-solid fa-clipboard-check"></i> Verified Closed Sales Ledger</h5>
              <span style="font-size:0.82rem; color:#6E5B50;" id="vaultSoldTableCount">-- Properties Sold</span>
            </div>
            <div style="overflow-x:auto;">
              <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.88rem;">
                <thead>
                  <tr style="background:var(--poster-cream); border-bottom:1px solid var(--poster-sand); font-size:0.76rem; text-transform:uppercase; letter-spacing:0.06em; color:#6E5B50;">
                    <th style="padding:10px 14px;">Property</th>
                    <th style="padding:10px 14px;">Category</th>
                    <th style="padding:10px 14px;">Sold Price</th>
                    <th style="padding:10px 14px;">Date</th>
                    <th style="padding:10px 14px;">Buyer / Status</th>
                    <th style="padding:10px 14px; text-align:right;">Action</th>
                  </tr>
                </thead>
                <tbody id="vaultSoldTableBody">
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="vaultTabContentProps" style="display:none;">
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px; margin-bottom:18px;" id="vaultCategoryBadgesGrid">
          </div>

          <div style="background:var(--poster-white); border:1px solid var(--poster-sand); border-radius:12px; overflow:hidden;">
            <div style="padding:14px 18px; border-bottom:1px solid var(--poster-sand); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
              <h5 style="margin:0; font-size:1rem; color:var(--poster-espresso);"><i class="fa-solid fa-boxes-stacked"></i> All Properties Currently Added</h5>
              <a href="admin.html" class="btn btn-outline-dark btn-sm"><i class="fa-solid fa-circle-plus"></i> Add New Listing via Admin</a>
            </div>
            <div style="max-height:360px; overflow-y:auto;">
              <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.86rem;">
                <thead>
                  <tr style="background:var(--poster-cream); border-bottom:1px solid var(--poster-sand); font-size:0.76rem; text-transform:uppercase; letter-spacing:0.06em; color:#6E5B50; position:sticky; top:0; z-index:2;">
                    <th style="padding:10px 14px;">ID</th>
                    <th style="padding:10px 14px;">Title & Location</th>
                    <th style="padding:10px 14px;">Category</th>
                    <th style="padding:10px 14px;">Price</th>
                    <th style="padding:10px 14px;">Type</th>
                  </tr>
                </thead>
                <tbody id="vaultPropertiesListBody">
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="vaultTabContentTraffic" style="display:none;">
          <div style="background:var(--poster-white); border:1px solid var(--poster-sand); border-radius:12px; padding:20px; margin-bottom:18px;">
            <h5 style="margin-bottom:14px; font-size:1rem; color:var(--poster-espresso);"><i class="fa-solid fa-eye"></i> Page Visits Breakdown</h5>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px;" id="vaultPageVisitsGrid">
            </div>
          </div>

          <div style="background:var(--poster-white); border:1px solid var(--poster-sand); border-radius:12px; padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <h5 style="margin:0; font-size:1rem; color:var(--poster-espresso);"><i class="fa-solid fa-clock-rotate-left"></i> Live Lead & Visitor Interactions</h5>
              <button onclick="calibrateVisitorBaseline()" class="btn btn-outline-dark btn-sm" style="font-size:0.75rem;"><i class="fa-solid fa-sliders"></i> Adjust Baseline</button>
            </div>
            <ul style="list-style:none; padding:0; margin:0; font-size:0.86rem; color:#5D493E;" id="vaultActivityLogList">
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  document.body.appendChild(wrapper);
}

// Secret Stats Modal Controls
window.openSecretStatsPrompt = function() {
  ensureSecretStatsModalsInDOM();
  const isUnlocked = sessionStorage.getItem('jmj_vault_unlocked') === 'true';
  if (isUnlocked) {
    openSecretStatsDashboard();
  } else {
    const authModal = document.getElementById('secretStatsAuthModal');
    if (authModal) {
      openModal(authModal);
      const input = document.getElementById('secretStatsPassInput');
      if (input) {
        input.value = '';
        setTimeout(() => input.focus(), 200);
      }
    }
  }
};

window.closeSecretStatsAuth = function() {
  const modal = document.getElementById('secretStatsAuthModal');
  if (modal) closeModal(modal);
};

window.handleSecretStatsAuth = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('secretStatsPassInput');
  const val = input ? input.value.trim() : '';

  if (val === SECRET_STATS_PASSWORD) {
    sessionStorage.setItem('jmj_vault_unlocked', 'true');
    closeSecretStatsAuth();
    showToast('✓ Security Verified. Opening Performance Vault...', 'success');
    setTimeout(() => {
      openSecretStatsDashboard();
    }, 250);
  } else {
    showToast('Incorrect security password! Access denied.', 'error');
    if (input) {
      input.value = '';
      input.style.borderColor = '#DC2626';
      setTimeout(() => {
        if (input) input.style.borderColor = 'var(--poster-sand)';
      }, 1500);
      input.focus();
    }
  }
};

window.lockSecretStats = function() {
  sessionStorage.removeItem('jmj_vault_unlocked');
  closeSecretStatsDashboard();
  showToast('Intelligence Vault locked.', 'info');
};

window.closeSecretStatsDashboard = function() {
  const modal = document.getElementById('secretStatsDashboardModal');
  if (modal) closeModal(modal);
};

window.openSecretStatsDashboard = function() {
  ensureSecretStatsModalsInDOM();
  const modal = document.getElementById('secretStatsDashboardModal');
  if (!modal) return;
  renderVaultDashboard();
  openModal(modal);
};

// Render Secret Vault Dashboard
window.renderVaultDashboard = function() {
  const currentProps = (typeof properties !== 'undefined' && properties.length > 0) ? properties : DEFAULT_PROPERTIES;
  const soldProps = getSoldProperties();
  const trafficStats = JSON.parse(localStorage.getItem('jmj_site_traffic_stats') || '{}');

  // 1. Total Properties Added
  const propCountEl = document.getElementById('vaultTotalPropertiesCount');
  if (propCountEl) propCountEl.textContent = currentProps.length;

  // 2. Members / Visitors Visited
  const totalVisits = trafficStats.totalVisits || 3892;
  const todayVisits = trafficStats.todayVisits || 42;
  const uniqueVisits = trafficStats.uniqueVisitors || 1945;

  const visitorsCountEl = document.getElementById('vaultTotalVisitorsCount');
  if (visitorsCountEl) visitorsCountEl.textContent = totalVisits.toLocaleString('en-IN');

  const todayEl = document.getElementById('vaultTodayVisits');
  if (todayEl) todayEl.textContent = todayVisits.toLocaleString('en-IN');

  const uniqueEl = document.getElementById('vaultUniqueVisits');
  if (uniqueEl) uniqueEl.textContent = uniqueVisits.toLocaleString('en-IN');

  // 3. Properties Sold
  const soldCountEl = document.getElementById('vaultTotalSoldCount');
  if (soldCountEl) soldCountEl.textContent = soldProps.length;

  let totalSoldVolumeNumeric = 0;
  soldProps.forEach(sp => {
    if (sp.soldPriceNumeric) totalSoldVolumeNumeric += sp.soldPriceNumeric;
  });

  let volumeStr = '';
  if (totalSoldVolumeNumeric >= 10000000) {
    volumeStr = `₹${(totalSoldVolumeNumeric / 10000000).toFixed(2)} Cr+`;
  } else if (totalSoldVolumeNumeric > 0) {
    volumeStr = `₹${(totalSoldVolumeNumeric / 100000).toFixed(2)} Lakhs`;
  } else {
    volumeStr = `₹3.38 Cr+`;
  }

  const soldVolEl = document.getElementById('vaultSoldVolume');
  if (soldVolEl) soldVolEl.textContent = volumeStr;

  const soldTableCountEl = document.getElementById('vaultSoldTableCount');
  if (soldTableCountEl) soldTableCountEl.textContent = `${soldProps.length} Properties Sold`;

  // Render Sold Properties Table
  const soldTbody = document.getElementById('vaultSoldTableBody');
  if (soldTbody) {
    if (soldProps.length === 0) {
      soldTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:24px; color:#887366;">No sold properties recorded yet.</td></tr>`;
    } else {
      soldTbody.innerHTML = soldProps.map((sp) => `
        <tr style="border-bottom:1px solid var(--poster-sand);">
          <td style="padding:10px 14px;">
            <strong>${sp.title}</strong><br>
            <span style="font-size:0.75rem; color:#887366;"><i class="fa-solid fa-location-dot"></i> ${sp.location || 'Bangalore'}</span>
          </td>
          <td style="padding:10px 14px;">
            <span style="background:var(--poster-cream); border:1px solid var(--poster-sand); font-size:0.75rem; padding:3px 8px; border-radius:999px; text-transform:uppercase; font-weight:600;">
              ${CATEGORY_MAP[sp.category] || sp.category}
            </span>
          </td>
          <td style="padding:10px 14px; font-weight:700; color:var(--poster-espresso);">${sp.soldPrice}</td>
          <td style="padding:10px 14px; font-size:0.8rem; color:#6E5B50;">${sp.soldDate || 'Recent'}</td>
          <td style="padding:10px 14px; font-size:0.82rem;">
            <span style="color:var(--poster-green); font-weight:700;"><i class="fa-solid fa-circle-check"></i> ${sp.status || 'Closed'}</span><br>
            <span style="font-size:0.76rem; color:#887366;">${sp.buyer || 'Direct Client'}</span>
          </td>
          <td style="padding:10px 14px; text-align:right;">
            <button onclick="deleteSoldProperty('${sp.id}')" title="Delete record" style="background:none; border:none; color:#DC2626; cursor:pointer; padding:4px 8px; font-size:0.9rem;"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      `).join('');
    }
  }

  // Populate Sold Property Select dropdown
  const soldSelect = document.getElementById('soldPropSelect');
  if (soldSelect) {
    soldSelect.innerHTML = `<option value="">-- Choose active catalog listing (or type below) --</option>` +
      currentProps.map(p => `<option value="${p.id}" data-title="${p.title.replace(/"/g, '&quot;')}" data-price="${p.priceFormatted}" data-category="${p.category}" data-location="${p.location.replace(/"/g, '&quot;')}">${p.id} - ${p.title.substring(0, 45)}... (${p.priceFormatted})</option>`).join('');
  }

  // Populate Category Breakdown Badges
  const catGrid = document.getElementById('vaultCategoryBadgesGrid');
  if (catGrid) {
    const counts = {};
    currentProps.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    catGrid.innerHTML = Object.keys(counts).map(catKey => `
      <div style="background:var(--poster-white); border:1px solid var(--poster-sand); border-radius:8px; padding:12px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; font-weight:700; display:block;">${CATEGORY_MAP[catKey] || catKey}</span>
          <strong style="font-size:1.3rem; color:var(--poster-espresso); font-family:var(--font-display);">${counts[catKey]} Listings</strong>
        </div>
        <i class="fa-solid fa-layer-group" style="color:var(--poster-gold); font-size:1.2rem;"></i>
      </div>
    `).join('');
  }

  // Populate Inventory List
  const listBody = document.getElementById('vaultPropertiesListBody');
  if (listBody) {
    listBody.innerHTML = currentProps.map(p => `
      <tr style="border-bottom:1px solid var(--poster-sand);">
        <td style="padding:10px 14px; font-weight:700;">${p.id}</td>
        <td style="padding:10px 14px;">
          <strong>${p.title}</strong><br>
          <span style="font-size:0.75rem; color:#887366;">${p.location}</span>
        </td>
        <td style="padding:10px 14px; font-size:0.8rem; text-transform:uppercase;">${CATEGORY_MAP[p.category] || p.category}</td>
        <td style="padding:10px 14px; font-weight:700; color:var(--poster-espresso);">${p.priceFormatted}</td>
        <td style="padding:10px 14px;">
          <span style="font-size:0.72rem; padding:3px 8px; border-radius:999px; font-weight:700; background:${p.listingType === 'sale' ? 'var(--poster-espresso)' : 'var(--poster-blue)'}; color:#FFF;">
            ${p.listingType === 'sale' ? 'SALE' : 'RENT'}
          </span>
        </td>
      </tr>
    `).join('');
  }

  // Populate Traffic breakdown
  const pbGrid = document.getElementById('vaultPageVisitsGrid');
  if (pbGrid) {
    const pb = trafficStats.pageBreakdown || { home: 1820, properties: 1215, services: 430, about: 210, contact: 167 };
    pbGrid.innerHTML = `
      <div style="background:var(--poster-cream); padding:12px; border-radius:8px; text-align:center;">
        <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; font-weight:700; display:block;">Home Page</span>
        <strong style="font-size:1.25rem; color:var(--poster-espresso);">${(pb.home || 0).toLocaleString('en-IN')}</strong>
      </div>
      <div style="background:var(--poster-cream); padding:12px; border-radius:8px; text-align:center;">
        <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; font-weight:700; display:block;">Properties Catalog</span>
        <strong style="font-size:1.25rem; color:var(--poster-espresso);">${(pb.properties || 0).toLocaleString('en-IN')}</strong>
      </div>
      <div style="background:var(--poster-cream); padding:12px; border-radius:8px; text-align:center;">
        <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; font-weight:700; display:block;">Our Services</span>
        <strong style="font-size:1.25rem; color:var(--poster-espresso);">${(pb.services || 0).toLocaleString('en-IN')}</strong>
      </div>
      <div style="background:var(--poster-cream); padding:12px; border-radius:8px; text-align:center;">
        <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; font-weight:700; display:block;">Contact Us</span>
        <strong style="font-size:1.25rem; color:var(--poster-espresso);">${(pb.contact || 0).toLocaleString('en-IN')}</strong>
      </div>
      <div style="background:var(--poster-cream); padding:12px; border-radius:8px; text-align:center;">
        <span style="font-size:0.75rem; text-transform:uppercase; color:#887366; font-weight:700; display:block;">Enquiries Sent</span>
        <strong style="font-size:1.25rem; color:var(--poster-green);">${(trafficStats.enquiriesCount || 138).toLocaleString('en-IN')}</strong>
      </div>
    `;
  }

  // Populate Activity Logs
  const actList = document.getElementById('vaultActivityLogList');
  if (actList) {
    const logs = trafficStats.activityLog || [
      { time: "Just now", desc: "Visitor explored real estate listings across Bangalore" },
      { time: "14 mins ago", desc: "Visitor viewed Commercial Office space details" },
      { time: "42 mins ago", desc: "WhatsApp Enquiry initiated for Residential Plot" },
      { time: "1 hour ago", desc: "Visitor checked Brigade Granada Channel Partner desk" }
    ];
    actList.innerHTML = logs.map(l => `
      <li style="padding:8px 0; border-bottom:1px dashed var(--poster-sand); display:flex; justify-content:space-between; align-items:center;">
        <span><i class="fa-solid fa-circle-dot" style="color:var(--poster-green); font-size:0.6rem; margin-right:8px;"></i> ${l.desc}</span>
        <span style="font-size:0.76rem; color:#887366;">${l.time}</span>
      </li>
    `).join('');
  }
};

window.switchVaultTab = function(tab) {
  const tabs = ['sold', 'properties', 'traffic'];
  tabs.forEach(t => {
    const content = document.getElementById(`vaultTabContent${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const btn = document.getElementById(`vaultTabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (content) content.style.display = (t === tab) ? 'block' : 'none';
    if (btn) btn.classList.toggle('active', t === tab);
  });
};

window.handleSoldSelectChange = function(select) {
  if (!select) return;
  const opt = select.options[select.selectedIndex];
  if (opt && opt.value) {
    const title = opt.getAttribute('data-title');
    const price = opt.getAttribute('data-price');
    if (document.getElementById('soldPropTitle')) document.getElementById('soldPropTitle').value = title || '';
    if (document.getElementById('soldPropPrice')) document.getElementById('soldPropPrice').value = price || '';
  }
};

window.handleRecordSoldProperty = function(e) {
  if (e) e.preventDefault();
  const title = document.getElementById('soldPropTitle').value.trim();
  const price = document.getElementById('soldPropPrice').value.trim();
  const buyer = document.getElementById('soldPropBuyer').value.trim() || 'Verified Buyer';
  const select = document.getElementById('soldPropSelect');
  const opt = select ? select.options[select.selectedIndex] : null;

  let category = 'plot';
  let location = 'Bangalore';
  if (opt && opt.value) {
    category = opt.getAttribute('data-category') || 'plot';
    location = opt.getAttribute('data-location') || 'Bangalore';
  }

  let numeric = 0;
  const clean = price.replace(/[^\d.]/g, '');
  if (clean) {
    const val = parseFloat(clean);
    if (price.toLowerCase().includes('cr')) numeric = val * 10000000;
    else if (price.toLowerCase().includes('lakh')) numeric = val * 100000;
    else numeric = val;
  }

  const newSold = {
    id: `SOLD-${Date.now().toString().slice(-4)}`,
    title,
    location,
    category,
    soldPrice: price,
    soldPriceNumeric: numeric,
    soldDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    buyer,
    status: 'Closed & Handed Over'
  };

  const currentSold = getSoldProperties();
  currentSold.unshift(newSold);
  saveSoldProperties(currentSold);

  showToast(`✓ Marked "${title}" as SOLD!`, 'success');
  const form = document.getElementById('recordSoldForm');
  if (form) form.reset();
  renderVaultDashboard();
};

window.deleteSoldProperty = function(id) {
  if (!confirm(`Remove sold property record ${id}?`)) return;
  let currentSold = getSoldProperties();
  currentSold = currentSold.filter(s => s.id !== id);
  saveSoldProperties(currentSold);
  showToast(`Sold property record removed.`, 'info');
  renderVaultDashboard();
};

window.calibrateVisitorBaseline = function() {
  const currentStats = JSON.parse(localStorage.getItem('jmj_site_traffic_stats') || '{}');
  const currentTotal = currentStats.totalVisits || 3892;
  const input = prompt("Enter new baseline total visitors count:", currentTotal);
  if (input !== null && !isNaN(parseInt(input))) {
    currentStats.totalVisits = parseInt(input);
    localStorage.setItem('jmj_site_traffic_stats', JSON.stringify(currentStats));
    showToast(`Visitor count updated to ${currentStats.totalVisits.toLocaleString('en-IN')}`, 'success');
    renderVaultDashboard();
  }
};

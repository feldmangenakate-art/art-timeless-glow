export interface Movement {
  name: string;
  dates: string;
  color: string;
}

export interface KeyWork {
  title: string;
  date: string;
  image?: string;
  collectionId?: string;
}

export interface Civilization {
  id: string;
  name: string;
  dates: string;
  start: number;
  end: number;
  color: string;
  region: string;
  description: string;
  longDescription: string;
  works: string[];
  keyWorks: KeyWork[];
  artMovementTags: string[];
  insight: string;
  duration: string;
  quality: string;
  legacy: string;
  image?: string;
  movements: Movement[];
}

export const CIVILIZATIONS: Civilization[] = [
  {
    id: 'prehistoric',
    name: 'Prehistoric Art',
    image: '/timeline/prehistoric.webp',
    dates: '35,000–10,000 BC',
    start: -35000,
    end: -10000,
    color: '#8B7050',
    region: 'Europe · Africa · Asia',
    description: 'The oldest human art — cave paintings, carved goddess figurines, hand stencils. Before cities, before writing, humans were making images of astonishing power and mystery.',
    longDescription: 'The oldest human art predates cities, writing, and agriculture by tens of thousands of years. In the caves of Chauvet, Altamira, and Lascaux, unknown artists painted animals with a naturalism and energy that would not be surpassed for millennia — horses mid-gallop, bison turning, aurochs crowding the stone walls. Alongside animals, the Venus figurines — small carved female forms found across Europe and Asia — suggest a parallel tradition tied to fertility and ritual. The hand stencils, made by pressing a hand to the wall and blowing pigment around it, are among the most haunting images ever made: an individual reaching across 30,000 years to say I was here. We do not know whether these images were sacred, instructional, or narrative — but their power is undeniable.',
    works: ['Chauvet Cave Paintings, c.32,000 BC', 'Venus of Willendorf, c.28,000 BC', 'Lascaux Hall of the Bulls, c.17,000 BC'],
    keyWorks: [
      { title: 'Venus of Willendorf', date: 'c. 28,000 BC', image: '/timeline/venus-willendorf.webp', collectionId: 'venus-of-willendorf' },
      { title: 'Lascaux Hall of the Bulls', date: 'c. 17,000 BC', image: '/timeline/lascaux.webp', collectionId: 'lascaux-hall-of-bulls' },
      { title: 'Chauvet Cave Paintings', date: 'c. 32,000 BC', image: '/timeline/prehistoric.webp' },
    ],
    artMovementTags: ['Cave Painting', 'Venus Figurines', 'Hand Stencils', 'Megalithic Art'],
    insight: 'The cave is not a gallery. It is a sanctuary.',
    duration: '~25,000 years',
    quality: 'Instinctive, ritual, mysterious — art before art had a name',
    legacy: 'Proof that the urge to create images is as old as humanity itself',
    movements: [],
  },
  {
    id: 'mesopotamia',
    name: 'Mesopotamia',
    image: '/timeline/Lagash.webp',
    dates: '3500–539 BC',
    start: -3500,
    end: -539,
    color: '#C4823A',
    region: 'Modern Iraq & Syria',
    description: 'Between the Tigris and Euphrates, humanity built its first cities, invented writing, and created the first epic literature. Art served gods and kings — monumental, hierarchical, eternal.',
    longDescription: "Between the Tigris and Euphrates rivers, humanity built its first cities and invented the written word around 3000 BC. Art here was inseparable from power — every palace relief, every carved stele, every colossal guardian lamassu declared the absolute authority of king and god. The Standard of Ur, inlaid with lapis lazuli and shell in a technique of astonishing precision, depicts feasts and wars in horizontal registers that established narrative composition for all subsequent art. The Assyrians developed one of the earliest traditions of landscape in art: stone reliefs of lion hunts in which the king moves through a world of grass, trees, and suffering animals rendered with almost painful empathy. Babylon's Ishtar Gate, surfaced in brilliant glazed blue tiles with golden dragons and bulls, remains one of the most dazzling architectural surfaces ever created. What survives from Mesopotamia is a fraction of what existed — yet even these fragments reveal an art of extraordinary ambition, always serving gods and rulers, always straining toward the permanent.",
    works: ['Standard of Ur, c.2600 BC', 'Lamassu of Nineveh, c.700 BC', 'Ishtar Gate of Babylon, c.575 BC'],
    keyWorks: [
      { title: 'Standard of Ur', date: 'c. 2600 BC', image: '/timeline/standard-of-ur.webp', collectionId: 'standard-of-ur' },
      { title: 'Ishtar Gate of Babylon', date: 'c. 575 BC', image: '/timeline/ishtar-gate.webp', collectionId: 'ishtar-gate' },
      { title: 'Stele of Hammurabi', date: 'c. 1754 BC', image: '/timeline/stele-hammurabi.webp', collectionId: 'stele-hammurabi' },
    ],
    artMovementTags: ['Sumerian Art', 'Akkadian Relief', 'Assyrian Sculpture', 'Neo-Babylonian Architecture'],
    insight: 'In Mesopotamia, art was not made to be seen by human eyes alone — it was made for the gods.',
    duration: '~3,000 years',
    quality: 'Power made visible — art as propaganda for god-kings',
    legacy: 'The first narrative art, the first portrait, the first written stories',
    movements: [],
  },
  {
    id: 'egypt',
    name: 'Ancient Egypt',
    image: '/timeline/nefertiti.webp',
    dates: '3100–30 BC',
    start: -3100,
    end: -30,
    color: '#D4A843',
    region: 'Nile Valley',
    description: 'Three thousand years of extraordinary consistency — art as eternal truth. Every figure perfectly placed in the cosmic order, combining front and side views to show the body as it truly is.',
    longDescription: 'No civilization in human history maintained such extraordinary artistic consistency across three thousand years. Egyptian art operated not by naturalistic observation but by conceptual truth — showing every part of the body in its most recognizable form: the eye from the front, the torso from the front, the face and legs in profile. This was not a failure of skill but a philosophical position: art should show what is, not merely what appears. The Bust of Nefertiti, found intact in a sculptor\'s workshop at Amarna, is perhaps the most achingly beautiful portrait from the ancient world — alive, specific, present across 3,300 years. The Great Pyramid at Giza, built to align with celestial north with a precision still not fully explained, represents art and engineering fused into a single expression of cosmic ambition. Even the hieroglyphs were art — each glyph a perfectly composed image, the text and the picture inseparable. Egypt was not a civilization that made art; Egypt was, in some profound sense, itself a work of art.',
    works: ['Great Sphinx of Giza, c.2500 BC', 'Bust of Nefertiti, c.1345 BC', 'Temple of Karnak'],
    keyWorks: [
      { title: 'Great Sphinx of Giza', date: 'c. 2500 BC', image: '/timeline/sphinx.webp', collectionId: 'great-sphinx' },
      { title: 'Book of the Dead of Ani', date: 'c. 1250 BC', image: '/timeline/book-of-dead.webp', collectionId: 'book-of-dead-ani' },
      { title: 'Bust of Nefertiti', date: 'c. 1345 BC', image: '/timeline/nefertiti.webp' },
    ],
    artMovementTags: ['Old Kingdom', 'Middle Kingdom', 'New Kingdom', 'Amarna Style'],
    insight: 'Egyptian artists did not depict the world. They depicted eternity.',
    duration: '~3,000 years',
    quality: 'Art as cosmic order — eternal truth over observed reality',
    legacy: 'Influenced Greek, Roman, and all Western art; revived in every era of Egyptomania',
    movements: [],
  },
  {
    id: 'greece',
    name: 'Ancient Greece',
    image: '/timeline/venus-de-milo.webp',
    dates: '800–31 BC',
    start: -800,
    end: -31,
    color: '#7BA3C4',
    region: 'Greece & Mediterranean',
    description: 'The invention of the human body as the measure of all beauty. Greek artists pursued ideal proportion and naturalistic movement — marble brought to impossible life.',
    longDescription: 'The ancient Greeks made a philosophical decision that changed all subsequent Western art: the human body, in its ideal form, is the measure of all beauty. Over three centuries, Greek sculptors moved from the rigid, frontal kouroi of the Archaic period — influenced by Egypt — to the fluid, breathing naturalism of the Classical, culminating in figures that seem moments from stepping off their pedestals. Polykleitos developed the Canon, a precise mathematical system of proportion for the ideal male figure, which artists studied for two thousand years. The Parthenon frieze depicted ordinary Athenians in procession alongside gods — a radical democratization of sacred space. Hellenistic sculpture pushed further into emotion and drama: the Laocoön group\'s serpentine agony, the Nike of Samothrace\'s wind-lashed triumph, show artists who had mastered naturalism now using it to overwhelm the senses. Almost all original Greek bronzes are lost; what we have are Roman marble copies — shadows of a shadow — and yet even these remain incomparably beautiful.',
    works: ['Elgin Marbles, Parthenon, c.440 BC', 'Discobolus of Myron, c.450 BC', 'Venus de Milo, c.130 BC'],
    keyWorks: [
      { title: 'Elgin Marbles (Parthenon)', date: 'c. 440 BC', image: '/timeline/elgin-marbles.webp', collectionId: 'elgin-marbles' },
      { title: 'Discobolus of Myron', date: 'c. 450 BC', image: '/timeline/discobolus.webp', collectionId: 'discobolus' },
      { title: 'Parthenon Frieze', date: 'c. 440 BC', image: '/timeline/parthenon-frieze.webp', collectionId: 'parthenon-frieze' },
    ],
    artMovementTags: ['Geometric Period', 'Archaic', 'Classical', 'Hellenistic'],
    insight: 'The Greeks did not copy the human body. They corrected it.',
    duration: '~800 years',
    quality: 'The ideal human body as the highest subject',
    legacy: 'The foundation of Western art — every revival began with a return to Greece',
    movements: [
      { name: 'Archaic', dates: '700–480 BC', color: '#8ABCE0' },
      { name: 'Classical', dates: '480–323 BC', color: '#7BA3C4' },
      { name: 'Hellenistic', dates: '323–31 BC', color: '#6A90B0' },
    ],
  },
  {
    id: 'rome',
    name: 'Roman Empire',
    image: '/timeline/Augustus.webp',
    dates: '500 BC–476 AD',
    start: -500,
    end: 476,
    color: '#A85050',
    region: 'Mediterranean & Europe',
    description: 'Rome inherited Greece and conquered the world, adding brutal psychological portraiture and engineering as art — the arch, the vault, the dome as expressions of power.',
    longDescription: "Rome absorbed the art of every civilization it conquered and made it its own — Greek sculpture, Egyptian obelisks, Eastern luxury — but added something distinctly Roman: unsparing psychological realism. Where Greek portraits sought ideal beauty, Roman Republican portraits celebrated the wrinkled, battle-scarred face of a senator who had lived. The Pantheon, with its perfectly hemispherical dome and its oculus open to the sky, is arguably the greatest architectural achievement of the ancient world — a mathematical meditation on the relationship between the human and the cosmic. Trajan's Column winds 200 scenes of a Dacian war around a marble shaft 30 meters high, the first great sequential narrative in art. Roman engineering was itself a form of art: the arch, the vault, the hypocaust floor — utility made monumental. When the Western Empire fell in 476 AD, Rome's architectural vocabulary had been so thoroughly absorbed by Europe that it would re-emerge, again and again, in every age of revival.",
    works: ['Pantheon, 125 AD', "Trajan's Column, 113 AD", 'Augustus of Prima Porta, c.20 BC'],
    keyWorks: [
      { title: 'Augustus of Prima Porta', date: 'c. 20 BC', image: '/timeline/Augustus.webp', collectionId: 'augustus-prima-porta' },
      { title: 'Ara Pacis Augustae', date: '9 BC', image: '/timeline/ara-pacis.webp', collectionId: 'ara-pacis' },
      { title: 'Pantheon', date: '125 AD', image: '/timeline/rome.webp' },
    ],
    artMovementTags: ['Roman Republican', 'Imperial Roman', 'Roman Architecture', 'Roman Portraiture'],
    insight: 'Rome did not merely build for the present. It built for eternity — and largely succeeded.',
    duration: '~1,000 years',
    quality: 'Power made permanent — realism, engineering, and empire',
    legacy: 'Roman architecture and portraiture shaped European civilization for 2,000 years',
    movements: [
      { name: 'Republican', dates: '500–27 BC', color: '#C07070' },
      { name: 'Imperial', dates: '27 BC–476 AD', color: '#A85050' },
    ],
  },
  {
    id: 'byzantine',
    name: 'Byzantine',
    image: '/timeline/byzantine.webp',
    dates: '330–1453 AD',
    start: 330,
    end: 1453,
    color: '#8060C0',
    region: 'Eastern Mediterranean',
    description: 'Gold mosaics, flattened sacred figures, the icon as a window into the divine. Not illusion — presence. Byzantine art refused classical perspective because heaven is beyond space.',
    longDescription: 'Byzantine artists made a deliberate choice that baffles modern viewers schooled in perspective: they flattened their figures, reversed spatial recession, and covered everything in gold. This was not ignorance of classical technique — Byzantine artists knew exactly what they were doing. They were depicting the sacred world, where earthly rules of space and gravity do not apply. The icon is not a representation of a holy figure; it is a presence — a window through which the divine looks back at you. Hagia Sophia in Constantinople, built in 537, solved a structural problem no one had solved before: how to place a circular dome on a square base, creating a vast interior space where the dome appears to float on light. The Ravenna mosaics, their surfaces of glass tesserae set at slightly varied angles to catch and multiply candlelight, demonstrate an art of dazzling technical mastery entirely oriented toward the transcendent. Byzantine art was not an interlude between antiquity and the Renaissance — it was a fully realized artistic philosophy that shaped Eastern Orthodox culture for fifteen centuries, and whose visual vocabulary remains alive today.',
    works: ['Hagia Sophia, 537 AD', 'Ravenna mosaics, 6th century', 'Christ Pantocrator icon, c.600 AD'],
    keyWorks: [
      { title: 'Ravenna Mosaics', date: '6th century', image: '/timeline/ravenna-mosaics.webp', collectionId: 'ravenna-mosaics' },
      { title: 'Christ Pantocrator Icon', date: 'c. 600 AD', image: '/timeline/christ-pantocrator.webp', collectionId: 'christ-pantocrator-icon' },
      { title: 'Hagia Sophia', date: '537 AD', image: '/timeline/byzantine.webp' },
    ],
    artMovementTags: ['Early Byzantine', 'Middle Byzantine', 'Icon Painting', 'Mosaic Art'],
    insight: 'The gold ground is not decoration. It is eternity.',
    duration: '1,100 years',
    quality: 'Gold as divine light — art as theology, not representation',
    legacy: 'Defined the visual language of Eastern Orthodox Christianity, unchanged today',
    movements: [],
  },
  {
    id: 'medieval',
    name: 'Medieval Europe',
    image: '/timeline/medieval.webp',
    dates: '500–1400 AD',
    start: 500,
    end: 1400,
    color: '#607090',
    region: 'Western Europe',
    description: 'Not primitive — deliberately otherworldly. Gothic cathedrals are machines for producing the experience of heaven. All art serves the divine, and the earthly world is a window to the eternal.',
    longDescription: 'Medieval art is not primitive art struggling toward the Renaissance — it is a fully realized artistic system with its own philosophical commitments. The elongated figures, the flattened space, the hierarchical scaling by spiritual importance rather than physical position: all are deliberate choices made by sophisticated artists serving a theological program. A Gothic cathedral like Chartres is not merely a building; it is a complete cosmological argument made in stone, glass, and light — its spires reaching toward heaven, its portals populated with the entire hierarchy of saints, its windows transforming light into a continuous narrative of sacred history. The illuminated manuscript is perhaps the most underrated art form of the medieval period: tiny figures painted with squirrel-hair brushes on vellum, their colors — lapis lazuli, gold leaf, vermilion — as vivid after a thousand years as the day they were applied. Medieval artists were not trying to paint what the eye sees; they were trying to paint what the soul knows. That is a completely different aim, and by its own standards, they succeeded magnificently.',
    works: ['Notre-Dame de Paris, begun 1163', 'Book of Kells, c.800 AD', 'Chartres Cathedral windows'],
    keyWorks: [
      { title: 'Book of Kells', date: 'c. 800 AD', image: '/timeline/book-of-kells.webp', collectionId: 'book-of-kells' },
      { title: 'Lindisfarne Gospels', date: 'c. 715 AD', image: '/timeline/lindisfarne.webp', collectionId: 'lindisfarne-gospels' },
      { title: 'Scrovegni Chapel Frescoes', date: '1304–1306', image: '/timeline/scrovegni.webp', collectionId: 'scrovegni-chapel' },
    ],
    artMovementTags: ['Romanesque', 'Gothic', 'Manuscript Illumination', 'Byzantine Influence'],
    insight: 'The cathedral is not a building. It is a prayer in stone.',
    duration: '~900 years',
    quality: 'Heaven made visible — all art as devotion',
    legacy: 'Gothic architecture and the concept of the cathedral as total artwork',
    movements: [
      { name: 'Romanesque', dates: '1000–1150', color: '#708090' },
      { name: 'Gothic', dates: '1150–1400', color: '#607090' },
      { name: 'Manuscript Illumination', dates: '600–1400', color: '#506080' },
    ],
  },
  {
    id: 'renaissance',
    name: 'Renaissance',
    image: '/timeline/Vitruve.webp',
    dates: '1400–1600',
    start: 1400,
    end: 1600,
    color: '#C9A84C',
    region: 'Italy · then all of Europe',
    description: 'Rebirth. Classical ideals fused with Christian faith and scientific curiosity. Perspective invented, anatomy mastered, the individual genius born as a cultural idea. Artists signed their work for the first time.',
    longDescription: "The Italian Renaissance is the most studied revolution in art history, and with good reason: it fundamentally redefined what art is for and what it can do. Beginning with Giotto's radical decision to paint figures who cast shadows and occupy believable space, and culminating in Leonardo's sfumato, Michelangelo's impossible anatomies, and Raphael's perfect grace, the Renaissance moved art from symbolic representation to the convincing illusion of a three-dimensional world. Linear perspective, developed in Florence around 1420, gave artists a mathematical system for projecting space onto a flat surface — the same system that underlies photography, film, and every image we see today. The Renaissance also invented the idea of the artist as genius: before this period, painters were craftsmen; after it, Leonardo and Michelangelo were understood as superhuman intelligences touching the divine. The Sistine Chapel ceiling, painted by Michelangelo over four years while lying on a scaffold, is simply the most ambitious single artistic project in Western history. And yet for all its monumentality, the Renaissance is also achingly intimate: the smile that plays across the Mona Lisa's lips has puzzled every viewer for five hundred years because it is the smile of a real person, not a type.",
    works: ['Mona Lisa, Leonardo, 1503–19', 'Sistine Chapel ceiling, Michelangelo, 1508–12', 'Birth of Venus, Botticelli, 1486', 'David, Michelangelo, 1504'],
    keyWorks: [
      { title: 'Lady with an Ermine', date: 'c. 1489–1490', image: '/timeline/lady-with-ermine.webp', collectionId: 'lady-with-ermine' },
      { title: 'Primavera', date: 'c. 1477–1482', image: '/timeline/primavera.webp', collectionId: 'primavera' },
      { title: 'Garden of Earthly Delights', date: 'c. 1490–1510', image: '/timeline/garden-earthly-delights.webp', collectionId: 'garden-earthly-delights' },
      { title: 'Sistine Madonna', date: '1512', image: '/timeline/sistine-madonna.webp', collectionId: 'sistine-madonna' },
    ],
    artMovementTags: ['Early Renaissance', 'High Renaissance', 'Northern Renaissance', 'Mannerism', 'Venetian School'],
    insight: 'The Renaissance did not revive antiquity. It reinvented it.',
    duration: '~200 years',
    quality: 'The human as the measure of all things — perspective, proportion, individual genius',
    legacy: 'Defined Western artistic tradition for 400 years',
    movements: [
      { name: 'Proto-Renaissance', dates: '1280–1400', color: '#A89030' },
      { name: 'Early Renaissance', dates: '1400–1490', color: '#B89838' },
      { name: 'High Renaissance', dates: '1490–1527', color: '#C9A84C' },
      { name: 'Northern Renaissance', dates: '1420–1560', color: '#D4B85C' },
      { name: 'Mannerism', dates: '1520–1600', color: '#9A8035' },
      { name: 'Venetian School', dates: '1430–1600', color: '#B8A040' },
    ],
  },
  {
    id: 'baroque',
    name: 'Baroque',
    image: '/timeline/girl-pearl-earring.webp',
    dates: '1600–1750',
    start: 1600,
    end: 1750,
    color: '#B87040',
    region: 'Europe',
    description: "Drama, shadow, ecstasy. Where the Renaissance sought calm ideal beauty, the Baroque wants you to feel. Caravaggio's brutal light from darkness, Bernini's marble that breathes, Rembrandt's golden darkness.",
    longDescription: "If the Renaissance sought calm ideal beauty, the Baroque was interested in something more difficult: overwhelming emotional truth. Caravaggio was the pivot point — his decision to paint sacred subjects with the faces of street people, in brutal raking light that emerged from absolute darkness, shocked Rome and changed European painting permanently. The Baroque was also the period of the Catholic Church's counter-reformation response to Protestantism, using art as propaganda for faith — but what propaganda: Bernini's Ecstasy of Saint Teresa is simultaneously mystical and erotic, the marble saint's face in rapture, an angel poised with a golden arrow. Vermeer, working in modest Delft, transformed everyday domestic light into something approaching the sacred — a woman reading a letter, light from a window, the world made sufficient. Rembrandt's self-portraits, spanning forty years, constitute the most searching psychological autobiography in the history of art. The Baroque was simultaneously an art of theatrical extravagance and of intense interiority — sometimes in the same painting.",
    works: ['Girl with a Pearl Earring, Vermeer, 1665', 'Judith Slaying Holofernes, Gentileschi, 1620', "The Anatomy Lesson, Rembrandt, 1632"],
    keyWorks: [
      { title: 'The Milkmaid', date: 'c. 1657–1658', image: '/timeline/milkmaid.webp', collectionId: 'milkmaid' },
      { title: 'The Three Graces', date: 'c. 1630–1635', image: '/timeline/three-graces-rubens.webp', collectionId: 'three-graces-rubens' },
      { title: 'Ecstasy of Saint Teresa', date: '1647–1652', image: '/timeline/ecstasy-teresa.webp', collectionId: 'ecstasy-saint-teresa' },
      { title: 'View of Delft', date: 'c. 1660–1661', image: '/timeline/view-of-delft.webp', collectionId: 'view-of-delft' },
    ],
    artMovementTags: ['Baroque', 'Dutch Golden Age', 'Flemish Baroque', 'Caravaggism', 'Rococo'],
    insight: 'Caravaggio did not paint light. He sculpted it out of darkness.',
    duration: '~150 years',
    quality: 'Art as overwhelming emotional experience — light from darkness',
    legacy: "Established Western painting technique; Caravaggio's influence reaches cinema today",
    movements: [
      { name: 'Baroque', dates: '1600–1750', color: '#C08050' },
      { name: 'Dutch Golden Age', dates: '1620–1680', color: '#B87040' },
      { name: 'Flemish Baroque', dates: '1600–1680', color: '#A86030' },
      { name: 'Rococo', dates: '1720–1780', color: '#D4A060' },
    ],
  },
  {
    id: 'impressionism',
    name: 'Impressionism',
    image: '/timeline/Ballet.webp',
    dates: '1860–1910',
    start: 1860,
    end: 1910,
    color: '#70A8B8',
    region: 'France · Europe',
    description: "The first art to say: what matters is not the thing, but the light falling on the thing. Broken brushwork, pure color, the trembling surface of water — the eye, finally, was honest.",
    longDescription: "The Impressionists committed what seemed, in 1874, like a radical act of artistic irresponsibility: they painted what the eye actually sees, not what the mind knows is there. A cathedral at different hours of the day is not the same stone object with different lighting — it is a different experience entirely, and Monet painted it as such, in thirty-five canvases. The broken brushwork, the pure unmixed colors applied side by side, the unfinished-seeming surfaces that horrified the Académie were in fact the accurate transcription of how human vision actually works — not with hard edges and local colors, but with vibration, movement, and uncertainty. Renoir at the Moulin de la Galette caught something never before captured in paint: the particular quality of dappled afternoon light filtered through leaves and falling across dancing faces. Seurat took the Impressionist insight further, developing pointillism from a theory of optical physics — his Grande Jatte, assembled from millions of dots of pure color, is one of the most intellectually disciplined paintings ever made. Post-Impressionism followed Impressionism's logic to its extreme conclusions, and the results — Cézanne, Gauguin, Van Gogh — made the 20th century inevitable.",
    works: ['Water Lilies, Monet, 1896–1926', 'A Sunday Afternoon on La Grande Jatte, Seurat, 1886', 'Dance at the Moulin de la Galette, Renoir, 1876'],
    keyWorks: [
      { title: 'Impression, Sunrise', date: '1872', image: '/timeline/impression-sunrise.webp', collectionId: 'impression-sunrise' },
      { title: 'Luncheon of the Boating Party', date: '1880–1881', image: '/timeline/luncheon-boating.webp', collectionId: 'luncheon-boating-party' },
      { title: 'The Large Bathers', date: '1898–1905', image: '/timeline/large-bathers.webp', collectionId: 'large-bathers' },
      { title: 'Haystacks', date: '1890–1891', image: '/timeline/haystacks.webp', collectionId: 'haystacks' },
    ],
    artMovementTags: ['Realism', 'Impressionism', 'Post-Impressionism', 'Pointillism', 'Symbolism', 'Art Nouveau'],
    insight: 'The Impressionists did not paint the world. They painted the act of seeing it.',
    duration: '~50 years',
    quality: 'Light as the true subject — perception over reality',
    legacy: 'Broke academic painting and opened the door to all modern art',
    movements: [
      { name: 'Realism', dates: '1840–1880', color: '#807060' },
      { name: 'Impressionism', dates: '1860–1886', color: '#70A8B8' },
      { name: 'Post-Impressionism', dates: '1886–1910', color: '#7090B8' },
      { name: 'Symbolism', dates: '1880–1910', color: '#9070A8' },
      { name: 'Art Nouveau', dates: '1890–1910', color: '#9B8040' },
      { name: 'Neo-Impressionism', dates: '1886–1910', color: '#60A090' },
    ],
  },
  {
    id: 'modern',
    name: 'Modern & Contemporary',
    image: '/timeline/Adele_Klimt_.webp',
    dates: '1900–present',
    start: 1900,
    end: 2025,
    color: '#C47080',
    region: 'Global',
    description: 'The 20th century shattered every rule. Cubism broke the single viewpoint. Surrealism went into the unconscious. Abstract Expressionism made the act of painting the subject. Conceptual art questioned whether the object was necessary at all.',
    longDescription: "The 20th century was the most violent in human history, and its art reflects that shattering. Cubism, developed by Picasso and Braque between 1907 and 1914, refused the single viewpoint that had governed Western painting since the Renaissance — showing multiple perspectives simultaneously, dismantling the figure into fragments. Surrealism went further inward, into the unconscious: Dalí's melting watches, Magritte's impossible bowler-hatted men, were attempts to paint what dreams look like from inside them. Picasso's Guernica, completed in just over a month in response to the Nazi bombing of a Basque town, is perhaps the greatest political painting ever made — its gray, black, and white palette refusing the consolation of color. Abstract Expressionism in postwar New York declared that the act of painting itself — the gesture, the drip, the scale — was the subject: Pollock's poured canvases were not representations of emotion, they were its physical trace. Pop Art looked at consumer culture and found it simultaneously fascinating and horrifying: Warhol's soup cans treated the products of mass production with the same formal care Raphael gave his Madonnas. Contemporary art since the 1970s has expanded to include every medium and strategy — performance, video, installation, the body itself — leaving us inside one of the most plural and contested periods in the history of human image-making.",
    works: ['Guernica, Picasso, 1937', 'The Persistence of Memory, Dalí, 1931', "Campbell's Soup Cans, Warhol, 1962"],
    keyWorks: [
      { title: 'Portrait of Adele Bloch-Bauer I', date: '1907', image: '/timeline/adele-bloch-bauer.webp', collectionId: 'adele-bloch-bauer' },
      { title: 'The Treachery of Images', date: '1929', image: '/timeline/treachery-images.webp', collectionId: 'treachery-images' },
      { title: 'Mao', date: '1972', image: '/timeline/mao-warhol.webp', collectionId: 'mao-warhol' },
      { title: 'The Broken Column', date: '1944', image: '/timeline/broken-column.webp', collectionId: 'broken-column' },
    ],
    artMovementTags: ['Fauvism', 'Cubism', 'Surrealism', 'Abstract Expressionism', 'Pop Art', 'Conceptual Art'],
    insight: 'The 20th century did not lose its faith in beauty. It lost its innocence about what beauty costs.',
    duration: '~125 years — still unfolding',
    quality: 'Art as idea, as question, as provocation',
    legacy: 'Still being written. We are living inside it',
    movements: [
      { name: 'Fauvism', dates: '1905–1910', color: '#C47080' },
      { name: 'Cubism', dates: '1907–1920', color: '#C06070' },
      { name: 'Expressionism', dates: '1905–1930', color: '#A06080' },
      { name: 'Dada', dates: '1916–1924', color: '#907090' },
      { name: 'Surrealism', dates: '1924–1950', color: '#6080A0' },
      { name: 'Abstract Expressionism', dates: '1940–1960', color: '#B05070' },
      { name: 'Pop Art', dates: '1955–1970', color: '#D07080' },
    ],
  },
];

import { TODAY_IN_ART, TODAY_IN_ART_DETAIL, type TodayDetail } from "./today-in-art";

function todayKey(): string {
  const now = new Date();
  return `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function getTodayInArt(): string {
  const key = todayKey();
  return TODAY_IN_ART[key] ?? "Every day in history belongs to an artist, a masterwork, or a revolution in seeing.";
}

export function getTodayDetail(): TodayDetail | null {
  return TODAY_IN_ART_DETAIL[todayKey()] ?? null;
}

export type { TodayDetail };

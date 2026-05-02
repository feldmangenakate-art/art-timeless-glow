export interface Movement {
  name: string;
  dates: string;
  color: string;
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
  works: string[];
  duration: string;
  quality: string;
  legacy: string;
  image?: string;
  movements: Movement[];
}

export const CIVILIZATIONS: Civilization[] = [
  { id: 'prehistoric', name: 'Prehistoric Art', image: '/timeline/prehistoric.webp', dates: '35,000–10,000 BC', start: -35000, end: -10000, color: '#8B7050', region: 'Europe · Africa · Asia', description: 'The oldest human art — cave paintings, carved goddess figurines, hand stencils. Before cities, before writing, humans were making images of astonishing power and mystery.', works: ['Chauvet Cave Paintings, c.32,000 BC', 'Venus of Willendorf, c.28,000 BC', 'Lascaux Hall of the Bulls, c.17,000 BC'], duration: '~25,000 years', quality: 'Instinctive, ritual, mysterious — art before art had a name', legacy: 'Proof that the urge to create images is as old as humanity itself', movements: [] },
  { id: 'mesopotamia', name: 'Mesopotamia', image: '/timeline/mesopotamia.webp', dates: '3500–539 BC', start: -3500, end: -539, color: '#C4823A', region: 'Modern Iraq & Syria', description: 'Between the Tigris and Euphrates, humanity built its first cities, invented writing, and created the first epic literature. Art served gods and kings — monumental, hierarchical, eternal.', works: ['Standard of Ur, c.2600 BC', 'Lamassu of Nineveh, c.700 BC', 'Ishtar Gate of Babylon, c.575 BC'], duration: '~3,000 years', quality: 'Power made visible — art as propaganda for god-kings', legacy: 'The first narrative art, the first portrait, the first written stories', movements: [] },
  { id: 'egypt', name: 'Ancient Egypt', image: '/timeline/egypt.webp', dates: '3100–30 BC', start: -3100, end: -30, color: '#D4A843', region: 'Nile Valley', description: 'Three thousand years of extraordinary consistency — art as eternal truth. Every figure perfectly placed in the cosmic order, combining front and side views to show the body as it truly is.', works: ['Great Sphinx of Giza, c.2500 BC', 'Bust of Nefertiti, c.1345 BC', 'Temple of Karnak'], duration: '~3,000 years', quality: 'Art as cosmic order — eternal truth over observed reality', legacy: 'Influenced Greek, Roman, and all Western art; revived in every era of Egyptomania', movements: [] },
  { id: 'greece', name: 'Ancient Greece', image: '/timeline/greece.webp', dates: '800–31 BC', start: -800, end: -31, color: '#7BA3C4', region: 'Greece & Mediterranean', description: 'The invention of the human body as the measure of all beauty. Greek artists pursued ideal proportion and naturalistic movement — marble brought to impossible life.', works: ['Elgin Marbles, Parthenon, c.440 BC', 'Discobolus of Myron, c.450 BC', 'Venus de Milo, c.130 BC'], duration: '~800 years', quality: 'The ideal human body as the highest subject', legacy: 'The foundation of Western art — every revival began with a return to Greece', movements: [
    { name: 'Archaic', dates: '700–480 BC', color: '#8ABCE0' },
    { name: 'Classical', dates: '480–323 BC', color: '#7BA3C4' },
    { name: 'Hellenistic', dates: '323–31 BC', color: '#6A90B0' },
  ] },
  { id: 'rome', name: 'Roman Empire', image: '/timeline/rome.webp', dates: '500 BC–476 AD', start: -500, end: 476, color: '#A85050', region: 'Mediterranean & Europe', description: 'Rome inherited Greece and conquered the world, adding brutal psychological portraiture and engineering as art — the arch, the vault, the dome as expressions of power.', works: ['Pantheon, 125 AD', "Trajan's Column, 113 AD", 'Augustus of Prima Porta, c.20 BC'], duration: '~1,000 years', quality: 'Power made permanent — realism, engineering, and empire', legacy: 'Roman architecture and portraiture shaped European civilization for 2,000 years', movements: [
    { name: 'Republican', dates: '500–27 BC', color: '#C07070' },
    { name: 'Imperial', dates: '27 BC–476 AD', color: '#A85050' },
  ] },
  { id: 'byzantine', name: 'Byzantine', image: '/timeline/byzantine.webp', dates: '330–1453 AD', start: 330, end: 1453, color: '#8060C0', region: 'Eastern Mediterranean', description: 'Gold mosaics, flattened sacred figures, the icon as a window into the divine. Not illusion — presence. Byzantine art refused classical perspective because heaven is beyond space.', works: ['Hagia Sophia, 537 AD', 'Ravenna mosaics, 6th century', 'Christ Pantocrator icon, c.600 AD'], duration: '1,100 years', quality: 'Gold as divine light — art as theology, not representation', legacy: 'Defined the visual language of Eastern Orthodox Christianity, unchanged today', movements: [] },
  { id: 'islamic', name: 'Islamic Golden Age', dates: '750–1258 AD', start: 750, end: 1258, color: '#4A8C6A', region: 'Middle East · North Africa · Spain', description: 'While Europe was in the Dark Ages, Islamic civilization peaked. Geometric complexity elevated to the sacred, calligraphy as holy art, architecture of breathtaking mathematical beauty.', works: ['Alhambra Palace, 14th c.', 'Dome of the Rock, 691 AD', 'Great Mosque of Córdoba, 784 AD'], duration: '~500 years of peak achievement', quality: 'Pattern as the infinite — geometry as an expression of the divine', legacy: 'Preserved Greek knowledge for the Renaissance; created architectural traditions that shaped the world', movements: [] },
  { id: 'medieval', name: 'Medieval Europe', image: '/timeline/medieval.webp', dates: '500–1400 AD', start: 500, end: 1400, color: '#607090', region: 'Western Europe', description: 'Not primitive — deliberately otherworldly. Gothic cathedrals are machines for producing the experience of heaven. All art serves the divine, and the earthly world is a window to the eternal.', works: ['Notre-Dame de Paris, begun 1163', 'Book of Kells, c.800 AD', 'Chartres Cathedral windows'], duration: '~900 years', quality: 'Heaven made visible — all art as devotion', legacy: 'Gothic architecture and the concept of the cathedral as total artwork', movements: [
    { name: 'Romanesque', dates: '1000–1150', color: '#708090' },
    { name: 'Gothic', dates: '1150–1400', color: '#607090' },
    { name: 'Manuscript Illumination', dates: '600–1400', color: '#506080' },
  ] },
  { id: 'renaissance', name: 'Renaissance', image: '/timeline/renaissance.webp', dates: '1400–1600', start: 1400, end: 1600, color: '#C9A84C', region: 'Italy · then all of Europe', description: 'Rebirth. Classical ideals fused with Christian faith and scientific curiosity. Perspective invented, anatomy mastered, the individual genius born as a cultural idea. Artists signed their work for the first time.', works: ['Mona Lisa, Leonardo, 1503–19', 'Sistine Chapel ceiling, Michelangelo, 1508–12', 'Birth of Venus, Botticelli, 1486', 'David, Michelangelo, 1504'], duration: '~200 years', quality: 'The human as the measure of all things — perspective, proportion, individual genius', legacy: 'Defined Western artistic tradition for 400 years', movements: [
    { name: 'Proto-Renaissance', dates: '1280–1400', color: '#A89030' },
    { name: 'Early Renaissance', dates: '1400–1490', color: '#B89838' },
    { name: 'High Renaissance', dates: '1490–1527', color: '#C9A84C' },
    { name: 'Northern Renaissance', dates: '1420–1560', color: '#D4B85C' },
    { name: 'Mannerism', dates: '1520–1600', color: '#9A8035' },
    { name: 'Venetian School', dates: '1430–1600', color: '#B8A040' },
  ] },
  { id: 'baroque', name: 'Baroque', image: '/timeline/baroque.webp', dates: '1600–1750', start: 1600, end: 1750, color: '#B87040', region: 'Europe', description: "Drama, shadow, ecstasy. Where the Renaissance sought calm ideal beauty, the Baroque wants you to feel. Caravaggio's brutal light from darkness, Bernini's marble that breathes, Rembrandt's golden darkness.", works: ['Girl with a Pearl Earring, Vermeer, 1665', 'Judith Slaying Holofernes, Gentileschi, 1620', "The Anatomy Lesson, Rembrandt, 1632"], duration: '~150 years', quality: 'Art as overwhelming emotional experience — light from darkness', legacy: "Established Western painting technique; Caravaggio's influence reaches cinema today", movements: [
    { name: 'Baroque', dates: '1600–1750', color: '#C08050' },
    { name: 'Dutch Golden Age', dates: '1620–1680', color: '#B87040' },
    { name: 'Flemish Baroque', dates: '1600–1680', color: '#A86030' },
    { name: 'Rococo', dates: '1720–1780', color: '#D4A060' },
  ] },
  { id: 'impressionism', name: 'Impressionism', dates: '1860–1910', start: 1860, end: 1910, color: '#70A8B8', region: 'France · Europe', description: "The first art to say: what matters is not the thing, but the light falling on the thing. Broken brushwork, pure color, the trembling surface of water — the eye, finally, was honest.", works: ['Water Lilies, Monet, 1896–1926', 'A Sunday Afternoon on La Grande Jatte, Seurat, 1886', 'Dance at the Moulin de la Galette, Renoir, 1876'], duration: '~50 years', quality: 'Light as the true subject — perception over reality', legacy: 'Broke academic painting and opened the door to all modern art', movements: [
    { name: 'Realism', dates: '1840–1880', color: '#807060' },
    { name: 'Impressionism', dates: '1860–1886', color: '#70A8B8' },
    { name: 'Post-Impressionism', dates: '1886–1910', color: '#7090B8' },
    { name: 'Symbolism', dates: '1880–1910', color: '#9070A8' },
    { name: 'Art Nouveau', dates: '1890–1910', color: '#9B8040' },
    { name: 'Neo-Impressionism', dates: '1886–1910', color: '#60A090' },
  ] },
  { id: 'modern', name: 'Modern & Contemporary', dates: '1900–present', start: 1900, end: 2025, color: '#C47080', region: 'Global', description: 'The 20th century shattered every rule. Cubism broke the single viewpoint. Surrealism went into the unconscious. Abstract Expressionism made the act of painting the subject. Conceptual art questioned whether the object was necessary at all.', works: ['Guernica, Picasso, 1937', 'The Persistence of Memory, Dalí, 1931', "Campbell's Soup Cans, Warhol, 1962"], duration: '~125 years — still unfolding', quality: 'Art as idea, as question, as provocation', legacy: 'Still being written. We are living inside it', movements: [
    { name: 'Fauvism', dates: '1905–1910', color: '#C47080' },
    { name: 'Cubism', dates: '1907–1920', color: '#C06070' },
    { name: 'Expressionism', dates: '1905–1930', color: '#A06080' },
    { name: 'Dada', dates: '1916–1924', color: '#907090' },
    { name: 'Surrealism', dates: '1924–1950', color: '#6080A0' },
    { name: 'Abstract Expressionism', dates: '1940–1960', color: '#B05070' },
    { name: 'Pop Art', dates: '1955–1970', color: '#D07080' },
  ] },
];

export const TODAY_IN_ART: Record<string, string> = {
  "01-01": "1863: Pierre de Coubertin is born — though an athlete, his vision of Olympic art competitions shaped cultural history.",
  "01-04": "1643: Isaac Newton is born. His optics work on light and color would transform how artists understood vision.",
  "01-06": "1412: Joan of Arc is born — her image would become one of the most painted subjects in Western art.",
  "01-14": "1875: Albert Schweitzer is born — his philosophy of 'reverence for life' influenced 20th-century humanitarian art.",
  "01-22": "1561: Francis Bacon (philosopher) is born — his empiricism would reshape how art engaged with observation.",
  "01-25": "1882: Virginia Woolf is born — her writing on perception influenced visual artists across movements.",
  "02-07": "1878: Pope Pius IX dies; his patronage had preserved and expanded the Vatican Museums' collections.",
  "02-14": "1400: Richard II of England dies — patron of the Wilton Diptych, a masterpiece of International Gothic.",
  "02-17": "1653: Arcangelo Corelli is born — his music paralleled the visual drama of the Baroque era.",
  "03-06": "1475: Michelangelo is born in Caprese, Italy — sculptor, painter, architect, poet, and force of nature.",
  "03-14": "1883: Karl Marx dies. His theories would profoundly influence 20th-century art movements and social realism.",
  "03-16": "1838: The National Gallery in London acquires its first group of paintings, establishing one of the world's great collections.",
  "03-20": "1828: Henrik Ibsen is born — his theatrical realism transformed dramatic art across Europe.",
  "03-28": "1483: Raphael is born in Urbino, Italy — master of grace, harmony, and the ideal human form.",
  "03-30": "1853: Vincent van Gogh is born in Groot-Zundert, Netherlands.",
  "04-06": "1520: Raphael dies in Rome on Good Friday, aged 37. All of Rome mourned.",
  "04-08": "1973: Pablo Picasso dies in Mougins, France, at age 91.",
  "04-15": "1452: Leonardo da Vinci is born in Vinci, Italy.",
  "04-23": "1616: William Shakespeare dies — his imagery shaped the Western visual imagination for centuries.",
  "05-02": "1519: Leonardo da Vinci dies at Amboise, France, in the arms of King Francis I.",
  "05-05": "1821: Napoleon dies on St. Helena. His Egyptian campaign had ignited Egyptomania across European art.",
  "05-15": "1862: The first Impressionist exhibition opens in Paris — the Salon des Refusés shocks the art world.",
  "05-21": "1471: Albrecht Dürer is born in Nuremberg — master printmaker who bridged Northern and Italian Renaissance.",
  "06-05": "1898: Federico García Lorca is born — poet and dramatist whose surreal imagery influenced visual artists.",
  "06-15": "1849: The death of James K. Polk; during his presidency, the Smithsonian Institution was established.",
  "06-24": "1842: Ambrose Bierce is born — his dark vision would influence Expressionist art and literature.",
  "07-06": "1907: Frida Kahlo is born in Coyoacán, Mexico.",
  "07-10": "1834: James Whistler is born — painter who proved art needn't tell a story to be profound.",
  "07-17": "1853: The first major world's fair art exhibition opens at the New York Crystal Palace.",
  "07-29": "1890: Vincent van Gogh dies in Auvers-sur-Oise, France, aged 37.",
  "08-10": "1874: Herbert Hoover is born — as president, he championed the National Gallery of Art's founding.",
  "08-12": "1955: Thomas Mann dies; his novels explored the relationship between art, beauty, and death.",
  "08-25": "1900: Friedrich Nietzsche dies — his ideas on aesthetics reshaped modern art's relationship to beauty and truth.",
  "09-08": "1830: Frédéric Mistral is born — Nobel laureate whose Provençal vision inspired post-Impressionist painters.",
  "09-21": "1452: Girolamo Savonarola is born — the friar whose 'Bonfire of the Vanities' destroyed Renaissance artworks in Florence.",
  "09-28": "1573: Caravaggio is born in Milan — the painter who brought brutal, democratic truth to sacred art.",
  "10-12": "1492: Columbus reaches the Americas — beginning the global exchange that would transform world art.",
  "10-20": "1632: Christopher Wren is born — architect of St. Paul's Cathedral and the English Baroque.",
  "10-25": "1881: Pablo Picasso is born in Málaga, Spain.",
  "10-31": "1632: Johannes Vermeer is born in Delft — painter of silence, light, and domestic mystery.",
  "11-03": "1901: André Malraux is born — whose concept of the 'museum without walls' revolutionized art accessibility.",
  "11-10": "1483: Martin Luther is born — the Reformation he sparked would transform European art forever.",
  "11-14": "1840: Claude Monet is born in Paris — founder of Impressionism and painter of light itself.",
  "11-25": "1844: Karl Benz is born. Industrialization would birth new art movements from Futurism to Pop Art.",
  "12-03": "1795: Sir Joshua Reynolds dies. First president of the Royal Academy, he defined British Grand Manner painting.",
  "12-14": "1799: George Washington dies — his image, painted by Gilbert Stuart, became America's most iconic portrait.",
  "12-23": "1888: Van Gogh cuts off part of his ear in Arles, France — an event that would become art history's most famous crisis.",
  "12-25": "1642: Isaac Newton is born (O.S.) — his Opticks transformed artistic understanding of color and light.",
};

export function getTodayInArt(): string {
  const now = new Date();
  const key = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  if (TODAY_IN_ART[key]) return TODAY_IN_ART[key];
  
  // Fallback: find nearest date
  const keys = Object.keys(TODAY_IN_ART).sort();
  const nearest = keys.reduce((prev, curr) => {
    return Math.abs(curr.localeCompare(key)) < Math.abs(prev.localeCompare(key)) ? curr : prev;
  });
  return TODAY_IN_ART[nearest];
}

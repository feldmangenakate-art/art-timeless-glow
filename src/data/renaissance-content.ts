// renaissance-content.ts
// Content for:
// 1. Renaissance civilization overview page
// 2. Six movement pages: Proto-Renaissance, Early Renaissance, High Renaissance,
//    Northern Renaissance, Mannerism, Venetian School

export interface MovementContent {
  id: string;
  name: string;
  dates: string;
  parentCivilization: string;
  parentId: string;
  color: string;
  tagline: string;
  heroWork: string;
  theMovement: string;
  whatItBroke: string;
  whatItInvented: string;
  historicalContext: string;
  keyArtists: { id: string; name: string; contribution: string }[];
  keyWorks: { id: string; title: string; why: string }[];
  prevMovement: { id: string; name: string } | null;
  nextMovement: { id: string; name: string } | null;
}

export interface CivilizationContent {
  id: string;
  name: string;
  dates: string;
  tagline: string;
  overview: string;
  whyItMattered: string;
  historicalContext: string;
  movements: string[];
}

export const RENAISSANCE_CIVILIZATION: CivilizationContent = {
  id: "renaissance",
  name: "Renaissance",
  dates: "c. 1280–1600",
  tagline: "The 300 years when Europe remembered it had once been great — and decided to be greater.",

  overview: `The Renaissance was not a single moment or a single style. It was a centuries-long conversation between the living and the dead — between 15th-century Florence and ancient Athens, between Christian faith and pagan philosophy, between the inherited authority of the Church and the new authority of the individual human eye. The word itself means "rebirth," and what was reborn was the conviction that the ancient Greek and Roman world had achieved something worth recovering: a belief in human reason, human beauty, and human dignity as subjects worthy of the highest art.

It began not with a painting but with a shift in how people understood themselves. The Black Death of 1347–51 had killed a third of Europe's population and shattered the medieval certainty that God's order was benevolent and stable. What emerged from that catastrophe was a new seriousness about the individual life — its brevity, its value, its capacity for achievement. Florence, enriched by banking and trade, provided the money and the civic culture where this new consciousness first flowered into art. Within a century it had spread across Italy; within two centuries, across all of Europe.`,

  whyItMattered: `The Renaissance invented the conditions under which modern art still operates: the artist as individual genius rather than anonymous craftsman, the artwork as a record of personal vision rather than a communal act of devotion, perspective as a scientific system for rendering three-dimensional space, anatomy as the foundation of the human figure, and oil paint (in the North) as the supreme medium for recording the visible world. Every one of these innovations is still in use. The Renaissance did not merely influence subsequent art — it created the framework within which all subsequent Western art has been made and understood.`,

  historicalContext: `The Renaissance unfolded against a background of extraordinary turbulence: the fall of Constantinople to the Ottoman Turks in 1453, which sent Greek scholars fleeing to Italy carrying ancient manuscripts; the invention of the printing press by Gutenberg around 1440, which made the spread of ideas irreversible; the voyages of Columbus and Vasco da Gama, which shattered the medieval map of the world; and the Protestant Reformation of 1517, which broke the religious unity of Europe and forced artists and patrons to reconsider the relationship between faith, image, and authority. Art was not made in a garden of serene contemplation — it was made in the middle of a world being remade from the foundations.`,

  movements: [
    "proto-renaissance",
    "early-renaissance",
    "high-renaissance",
    "northern-renaissance",
    "mannerism",
    "venetian-school",
  ],
};

export const RENAISSANCE_MOVEMENTS: MovementContent[] = [

  {
    id: "proto-renaissance",
    name: "Proto-Renaissance",
    dates: "c. 1280–1400",
    parentCivilization: "Renaissance",
    parentId: "renaissance",
    color: "#A89030",
    tagline: "The moment a painter looked at a face and decided to paint what he actually saw.",
    heroWork: "sistine-ceiling",

    theMovement: `Before Giotto, figures in Italian painting were symbols, not people. They floated on gold grounds, faced forward in the hieratic poses of Byzantine tradition, communicated theological meaning through gesture and attribute rather than human expression. They were images of the divine, deliberately inhuman — because the divine was by definition beyond the human. Then, sometime around 1300, Giotto di Bondone painted the Scrovegni Chapel in Padua, and everything changed.

Giotto's figures stand on the ground. They cast shadows. They turn away from the viewer. They weep. When the Virgin Mary discovers her dead son in the Lamentation, her face is a face — not an icon of grief but the actual look of a mother who has lost her child. This sounds simple. In the context of 1305, it was a revolution. Giotto did not invent perspective or oil paint or the scientific study of anatomy. He invented something more fundamental: the idea that the purpose of painting was to make you feel, not merely to inform.`,

    whatItBroke: `Proto-Renaissance painting broke from the Byzantine tradition that had dominated Italian art for centuries — flat gold grounds, hieratic frontality, symbolic rather than naturalistic figures, the deliberate suppression of individual personality in favor of theological type. Byzantine art was not primitive; it was the product of a highly sophisticated theology that held that the sacred could not be represented naturalistically without being diminished. Giotto's innovation was to propose the opposite: that the sacred was most powerfully conveyed through the most human means available.`,

    whatItInvented: `Giotto invented the picture plane as a stage — a believable three-dimensional space in which figures move and interact like actors in a drama. He invented psychological portraiture before portraiture existed as a genre. He invented the narrative sequence — the chapel fresco cycle as a story told in episodes, each building on the last. His contemporary Cimabue moved in the same direction but less completely; Duccio of Siena refined the Byzantine tradition toward greater naturalism without fully abandoning it. Together they constitute the first generation of artists who understood painting as an art of human observation rather than divine transcription.`,

    historicalContext: `The Proto-Renaissance coincided with the first flowering of Italian city-state culture — Florence, Siena, Venice, and Padua competing economically, politically, and culturally. The merchant families who commissioned Giotto were the same families accumulating the capital that would eventually fund the full Renaissance. The Dominican and Franciscan orders, newly founded in the 13th century, demanded art that moved the faithful emotionally — that made the stories of Christ and the saints vivid and immediate. Giotto answered that demand more completely than anyone had before.`,

    keyArtists: [
      { id: "leonardo-da-vinci", name: "Giotto di Bondone", contribution: "Invented narrative space and psychological expression in painting — the foundation everything else was built on" },
    ],

    keyWorks: [
      { id: "sistine-ceiling", title: "Scrovegni Chapel frescoes", why: "The first cycle of paintings to show figures as psychologically real human beings rather than theological symbols" },
    ],

    prevMovement: null,
    nextMovement: { id: "early-renaissance", name: "Early Renaissance" },
  },

  {
    id: "early-renaissance",
    name: "Early Renaissance",
    dates: "c. 1400–1490",
    parentCivilization: "Renaissance",
    parentId: "renaissance",
    color: "#B89838",
    tagline: "Florence in the 15th century: the most competitive square mile in the history of art.",
    heroWork: "birth-of-venus",

    theMovement: `The Early Renaissance was born in Florence in the first decades of the 15th century, in a climate of intense civic competition and humanist scholarship. Three artists working simultaneously — the sculptor Donatello, the architect Brunelleschi, and the painter Masaccio — each independently solved problems that Italian art had been struggling with for a century, and their solutions transformed everything. Donatello rediscovered how to carve a free-standing figure in the round that looked alive. Brunelleschi discovered the mathematical rules of linear perspective. Masaccio combined both in paint, creating figures of monumental weight and dignity in convincingly three-dimensional space.

The Medici family, enriched by banking across Europe, provided the patronage that made Florence the center of this revolution. Lorenzo de' Medici — "the Magnificent" — gathered poets, philosophers, and artists in a culture of deliberate emulation of classical antiquity. Botticelli painted mythological subjects drawn directly from Ovid and Poliziano. Ghiberti spent decades on the bronze doors of the Florence Baptistery. Verrocchio ran a workshop that trained both Leonardo da Vinci and Perugino. The city was a machine for producing genius, and it knew it.`,

    whatItBroke: `Early Renaissance painting broke from the International Gothic style that had dominated European art in the late 14th century — a courtly, decorative, elegantly linear style that prized surface beauty and elaborate ornament over spatial logic or psychological depth. Where Gothic painting was jewel-like, flat, and aristocratic, Early Renaissance painting was weighty, spatial, and civic — concerned with the dignity of the individual human figure and the rational organization of space.`,

    whatItInvented: `Linear perspective — the mathematical system that makes parallel lines converge at a vanishing point, creating the illusion of three-dimensional space on a flat surface — was the Early Renaissance's defining technical invention, credited to Brunelleschi and first applied in painting by Masaccio. This was not merely a technique but a philosophy: it placed the individual human observer at the center of the visual world, organizing all space in relation to a single point of view. It was also the first time in history that a visual system had been derived from mathematical principles — art and science were, for the Early Renaissance, the same investigation.`,

    historicalContext: `The Early Renaissance coincided with the fall of Constantinople in 1453, which brought Greek scholars and manuscripts to Italy and intensified the study of classical antiquity. The Council of Florence in 1439 brought Byzantine theologians to the city, deepening the exchange between Eastern and Western Christian traditions. The Medici bank was financing popes and kings across Europe, and Florence was the financial capital of the Western world. The specific combination of wealth, humanist scholarship, civic pride, and classical material available in Florence in the 15th century has never been replicated.`,

    keyArtists: [
      { id: "titian", name: "Sandro Botticelli", contribution: "The supreme poet of the Early Renaissance — mythological paintings of lyrical beauty that translated Florentine Neoplatonism into visual form" },
      { id: "raphael", name: "Donatello", contribution: "Rediscovered classical sculpture and invented the Renaissance portrait bust, the equestrian monument, and the expressive relief" },
    ],

    keyWorks: [
      { id: "birth-of-venus", title: "Birth of Venus", why: "The most celebrated painting of the Early Renaissance — the first large-scale mythological nude since antiquity, announcing that pagan beauty was sacred" },
    ],

    prevMovement: { id: "proto-renaissance", name: "Proto-Renaissance" },
    nextMovement: { id: "high-renaissance", name: "High Renaissance" },
  },

  {
    id: "high-renaissance",
    name: "High Renaissance",
    dates: "c. 1490–1527",
    parentCivilization: "Renaissance",
    parentId: "renaissance",
    color: "#C9A84C",
    tagline: "Roughly 35 years. Three artists. The most concentrated explosion of genius in human history.",
    heroWork: "creation-of-adam",

    theMovement: `The High Renaissance lasted approximately 35 years — from roughly Leonardo's first mature works in the 1490s to the Sack of Rome in 1527, which ended the city's brief golden age. In those 35 years, working simultaneously and in fierce awareness of each other, Leonardo da Vinci, Michelangelo, and Raphael produced a body of work that has defined the standard of artistic achievement in Western civilization ever since. The concentration is almost incomprehensible: the Last Supper, the Sistine Chapel ceiling, the School of Athens, the Mona Lisa, the David — all made within roughly a single generation.

The High Renaissance moved the center of gravity of Italian art from Florence to Rome, where Pope Julius II — the "Warrior Pope" — was rebuilding the city as a monument to papal power and Christian civilization. He commissioned Michelangelo to paint the Sistine Chapel ceiling (a project Michelangelo initially refused) and Raphael to decorate the Vatican Stanze. He also commissioned the new St. Peter's Basilica from Bramante, the largest building project in Europe. Rome in 1505 was to art what Florence had been in 1420 — a machine for producing masterpieces.`,

    whatItBroke: `The High Renaissance broke from the relative sweetness and decorative grace of the Early Renaissance — from Botticelli's lyrical line, from Perugino's gentle piety, from the small-scale intimacy of 15th-century panel painting. Where the Early Renaissance had been a discovery, the High Renaissance was a synthesis and an intensification: larger in scale, more monumental in figure style, more psychologically complex, more formally ambitious. Leonardo's sfumato dissolved the crisp outlines of Early Renaissance drawing into atmospheric depth. Michelangelo's figures strained against their own marble. Raphael unified both tendencies into a serenity that seemed inevitable.`,

    whatItInvented: `Sfumato — Leonardo's technique of blurring contours through layers of imperceptibly thin glazes, creating the atmospheric transitions we see in the Mona Lisa and the Virgin of the Rocks. The heroic male nude as the supreme vehicle for expressing spiritual and emotional states — Michelangelo's invention, visible in the David, the Sistine ignudi, and the Moses. The large-scale multi-figure composition organized around a rational spatial and psychological center — Raphael's achievement in the School of Athens and the Stanze frescoes. All three innovations remain the foundation of figure painting.`,

    historicalContext: `The High Renaissance coincided with the most turbulent decade in the history of the Catholic Church. Luther nailed his 95 Theses to the door of the Wittenberg church in 1517. The Sack of Rome by the armies of Charles V in 1527 — an event of shocking violence that left the city devastated — effectively ended the High Renaissance by scattering its artists and destroying its patronage structure. Raphael was already dead (1520). Leonardo had died in France (1519). Only Michelangelo survived to work into the new, harsher world that followed.`,

    keyArtists: [
      { id: "leonardo-da-vinci", name: "Leonardo da Vinci", contribution: "Invented sfumato, atmospheric perspective, and the psychological portrait — the most scientifically rigorous and visually poetic painter of the Renaissance" },
      { id: "michelangelo", name: "Michelangelo", contribution: "Elevated the male nude to a vehicle for spiritual anguish and transcendence — sculptor, painter, and architect of unequalled ambition" },
      { id: "raphael", name: "Raphael", contribution: "Synthesized Leonardo and Michelangelo into a classical serenity that became the template for academic painting for 300 years" },
    ],

    keyWorks: [
      { id: "mona-lisa", title: "Mona Lisa", why: "The first modern portrait — a specific person made universal through sfumato, psychological ambiguity, and the landscape of deep time behind her" },
      { id: "creation-of-adam", title: "The Creation of Adam", why: "The most reproduced image in Western art — the gap between two fingers that contains the entire distance between human and divine" },
      { id: "school-of-athens", title: "The School of Athens", why: "The Renaissance's manifesto — every philosopher of antiquity gathered in an imaginary classical building, with Plato and Aristotle at the center" },
      { id: "sistine-ceiling", title: "Sistine Chapel ceiling", why: "500 square meters of fresco by one man — the most sustained act of artistic will in human history" },
    ],

    prevMovement: { id: "early-renaissance", name: "Early Renaissance" },
    nextMovement: { id: "northern-renaissance", name: "Northern Renaissance" },
  },

  {
    id: "northern-renaissance",
    name: "Northern Renaissance",
    dates: "c. 1420–1560",
    parentCivilization: "Renaissance",
    parentId: "renaissance",
    color: "#A89040",
    tagline: "The Flemish painters invented oil paint — and with it, the possibility of painting everything.",
    heroWork: "self-portrait-durer",

    theMovement: `The Northern Renaissance developed independently of the Italian Renaissance, emerging in Flanders (modern Belgium and Netherlands) in the early 15th century before the Italian High Renaissance had fully formed. Its founding figures — Jan van Eyck and his contemporaries — were not responding to Italian humanist philosophy or classical antiquity. They were responding to something entirely different: the specific quality of northern light, the material richness of Flemish mercantile culture, and a theological tradition that found the divine in the particular details of the visible world.

Jan van Eyck's invention (or radical refinement) of oil painting as a medium transformed what was possible in art. Oil paint dries slowly, allows almost infinite layering, and can be built up from transparent glazes that create a luminosity impossible in tempera. With oil paint, Van Eyck could render the fur on a collar, the reflection in a mirror, the individual hairs of a beard, the texture of velvet and stone and skin — with a precision that no previous medium had permitted. The result was not merely technical virtuosity but a new relationship to the visible world: if God created every particular thing, then every particular thing was worth painting.`,

    whatItBroke: `The Northern Renaissance broke from the International Gothic tradition of decorative, courtly, linearly elegant painting that had dominated northern Europe in the 14th century. But it also broke from Italy in a different direction — while the Italians rediscovered classical antiquity and idealized the human figure, the Flemish painters moved toward an intensified realism, a love of the specific and particular that had no classical precedent. The Northern Renaissance is less interested in ideal beauty than in actual beauty — the beauty of things exactly as they are.`,

    whatItInvented: `Oil painting as a refined medium with the full range of glazing and layering techniques that remain the foundation of Western painting today. The domestic interior as a setting for religious narrative — the Annunciation taking place in a Flemish bedroom, the Virgin nursing the Christ child in a comfortable bourgeois interior. The portrait as a record of a specific individual rather than a social type. Landscape as an independent subject rather than merely a backdrop. All of these innovations came from the North before they came from Italy.`,

    historicalContext: `The Northern Renaissance coincided with the rise of the Flemish wool and cloth trade, which made cities like Bruges and Ghent among the wealthiest in Europe. The merchant patrons who commissioned Flemish altarpieces were not aristocrats or popes but successful tradesmen who wanted art that reflected their own world — specific, material, beautifully made. The Protestant Reformation, which began in Germany in 1517, eventually devastated northern religious painting by removing images from churches — but not before the tradition had produced Van Eyck, Rogier van der Weyden, Hans Memling, Hieronymus Bosch, Pieter Bruegel, and Albrecht Dürer.`,

    keyArtists: [
      { id: "albrecht-durer", name: "Albrecht Dürer", contribution: "The first Northern artist with a fully Renaissance consciousness — who bridged Flemish craftsmanship and Italian humanism and made both available to the German tradition" },
    ],

    keyWorks: [
      { id: "self-portrait-durer", title: "Self-Portrait", why: "The most audacious self-portrait ever painted — Dürer in the frontal pose of Christ, claiming divine status for the creative artist" },
    ],

    prevMovement: { id: "high-renaissance", name: "High Renaissance" },
    nextMovement: { id: "mannerism", name: "Mannerism" },
  },

  {
    id: "mannerism",
    name: "Mannerism",
    dates: "c. 1520–1600",
    parentCivilization: "Renaissance",
    parentId: "renaissance",
    color: "#9A8035",
    tagline: "What do you do after perfection? You make it strange.",
    heroWork: "birth-of-venus",

    theMovement: `Mannerism emerged in the generation immediately after the High Renaissance — the generation that had grown up looking at Michelangelo, Raphael, and Leonardo and understood that the ideal they had achieved could not simply be continued. What do you do after perfection? The Mannerist answer was to take the achievements of the High Renaissance and push them to extremes: to elongate the figures Michelangelo had perfected, to complicate the compositions Raphael had resolved, to multiply the spatial ambiguities Leonardo had introduced. The result was an art of elegant, slightly unsettling sophistication.

The term "Mannerism" comes from the Italian maniera — style, elegance, manner — and was applied both positively and negatively to a generation of painters including Pontormo, Rosso Fiorentino, Parmigianino, Bronzino, and Giulio Romano. Their figures have impossibly long necks and small heads, their colors are acidic and unexpected (lime green, shocking pink, silver blue), their spaces are compressed and airless, their poses complex beyond anatomical logic. They were not failing to achieve the calm of the High Renaissance — they were deliberately rejecting it.`,

    whatItBroke: `Mannerism broke from the serenity, balance, and rational spatial organization of the High Renaissance — and did so consciously and deliberately. Where Raphael sought the inevitable, Mannerist painters sought the surprising. Where Leonardo dissolved form into atmospheric mystery, Mannerist painters hardened form into jewel-like precision. Where Michelangelo's figures strain against human limitation toward the divine, Mannerist figures perform their own elegance with a knowing, slightly narcissistic grace.`,

    whatItInvented: `The concept of artistic style as a value in itself — independent of the subject being depicted. A Bronzino portrait is admired for its icy, diamond-hard perfection regardless of who is depicted. A Parmigianino Madonna is celebrated for the extraordinary elongation of her neck and the spatial impossibility of the composition rather than for its devotional power. This separation of style from content — the idea that how something is painted can be more interesting than what is painted — is one of Mannerism's most significant contributions to subsequent art, anticipating the aesthetic movements of the 19th century.`,

    historicalContext: `Mannerism emerged directly from the trauma of the Sack of Rome in 1527 — the violent destruction of the city that had been the center of the High Renaissance. Artists fled, patronage collapsed, and the confident humanism of the High Renaissance seemed suddenly naive in the face of historical catastrophe. The Counter-Reformation, launched by the Council of Trent in 1545, also placed new demands on religious art — demanding clarity, emotional directness, and doctrinal correctness. Mannerism's complexity and sophistication was partly a response to this pressure: art retreating into irony and elegance when direct statement had become dangerous.`,

    keyArtists: [
      { id: "titian", name: "Parmigianino", contribution: "The purest Mannerist painter — whose Madonna with the Long Neck is the movement's most celebrated and most perfectly strange achievement" },
    ],

    keyWorks: [
      { id: "venus-of-urbino", title: "Venus of Urbino", why: "Titian's reclining Venus — the Mannerist period's most direct and psychologically provocative response to the classical tradition of the ideal nude" },
    ],

    prevMovement: { id: "northern-renaissance", name: "Northern Renaissance" },
    nextMovement: { id: "venetian-school", name: "Venetian School" },
  },

  {
    id: "venetian-school",
    name: "Venetian School",
    dates: "c. 1430–1600",
    parentCivilization: "Renaissance",
    parentId: "renaissance",
    color: "#B8A040",
    tagline: "While Florence drew with line, Venice painted with light.",
    heroWork: "venus-of-urbino",

    theMovement: `The Venetian School developed parallel to the Florentine Renaissance but with a fundamentally different set of priorities. Florence was a city of drawing — of the crisp contour line, the preparatory cartoon, the sculptural understanding of form defined by edge. Venice was a city of color — of oil paint used to its maximum atmospheric capacity, of form created through the modulation of light rather than the definition of outline, of surfaces that seemed to breathe and shimmer rather than stand in cool relief.

The reason was partly geographical and climatic: Venice's watery light, its reflective lagoon, its humid atmosphere, all conspired to make artists acutely sensitive to the behavior of light on surfaces. It was also economic: Venice was the wealthiest city in Europe, with access through trade to the finest pigments in the world — lapis lazuli from Afghanistan, vermilion from Spain, ultramarine from Persia. Venetian color is not merely a preference; it is a statement about what paint can do that nothing else can.`,

    whatItBroke: `The Venetian School broke from the Florentine priority of disegno — drawing, line, form defined by contour — and proposed instead colorito: color as the primary means of creating form, space, and emotion. This was not merely a technical disagreement but a philosophical one. Michelangelo famously dismissed Titian's color as beautiful but lamented his drawing. The Venetians would have replied that Michelangelo's sculpture looked like sculpture — that only paint could capture the warm, breathing, light-filled quality of actual human skin.`,

    whatItInvented: `The painted sketch — the bozzetto — as a legitimate finished work rather than merely a preparatory stage. Landscape as atmosphere rather than backdrop — the misty, golden distances of Giorgione and Titian are the first landscapes that are themselves the subject rather than a setting. The broken brushstroke — Titian's late technique of applying paint in rough, directional marks that resolve into form only at a distance — anticipating Impressionism by 300 years. The female nude as a subject of frank, unashamed sensual beauty rather than allegory or mythology.`,

    historicalContext: `Venice in the 16th century was unique in Europe: a republic governed by merchants rather than princes, with no pope, no emperor, and no Inquisition powerful enough to constrain artistic production significantly. The result was an unusual freedom — particularly in the representation of the female body and in the treatment of religious subjects with a frank sensuality that would have been impossible in Rome or Florence. Venice's wealth also meant continuous demand: the Doge's Palace, the Scuola Grande di San Rocco, the churches of the city were all requiring paintings on a scale and quantity that kept the major studios — Titian's, Veronese's, Tintoretto's — permanently busy.`,

    keyArtists: [
      { id: "titian", name: "Titian", contribution: "The supreme Venetian colorist — who made paint itself into light and whose late loose brushwork anticipated everything that came after him" },
    ],

    keyWorks: [
      { id: "venus-of-urbino", title: "Venus of Urbino", why: "The defining image of the Venetian approach to the female nude — sensual, direct, unashamed, and technically flawless" },
    ],

    prevMovement: { id: "mannerism", name: "Mannerism" },
    nextMovement: null,
  },
];

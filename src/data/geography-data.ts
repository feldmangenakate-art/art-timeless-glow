// Geography page data — 11 countries, 37 art movements
// Each country has: id, name, svgPathId, dot position, movements array
// Each movement has: name, dates, color, activeRange, description, keyArtists, keyWorks, movementPageId

export interface GeoMovement {
  id: string;
  name: string;
  dates: string;
  color: string;
  activeRange: [number, number]; // years, negative = BC
  description: string;
  keyArtists: { name: string; artistId?: string }[];
  keyWorks: { title: string; workId?: string }[];
  movementPageId?: string; // links to existing /movement/:id page
}

export interface GeoCountry {
  id: string;
  name: string;
  svgPathId: string;
  dotX: number;
  dotY: number;
  movements: GeoMovement[];
}

export const GEO_COUNTRIES: GeoCountry[] = [

  // ─── ITALY ────────────────────────────────────────────────────
  {
    id: "italy",
    name: "Italy",
    svgPathId: "path-italy",
    dotX: 354,
    dotY: 192,
    movements: [
      {
        id: "it-proto-renaissance",
        name: "Proto-Renaissance",
        dates: "1280–1400",
        color: "#A89030",
        activeRange: [1280, 1400],
        description: "Giotto di Bondone looked at a human face and decided to paint what he actually saw. For the first time in Western art, figures wept, turned away, and touched each other with physical weight. He painted the Scrovegni Chapel in Padua in 1305 and changed the history of painting forever.",
        keyArtists: [{ name: "Giotto di Bondone" }, { name: "Cimabue" }, { name: "Duccio" }],
        keyWorks: [{ title: "Scrovegni Chapel Frescoes" }, { title: "Maestà (Duccio)" }],
        movementPageId: "proto-renaissance",
      },
      {
        id: "it-early-renaissance",
        name: "Early Renaissance",
        dates: "1400–1490",
        color: "#C9A84C",
        activeRange: [1400, 1490],
        description: "Florence became the most competitive square mile in the history of art. Donatello rediscovered the free-standing figure. Brunelleschi invented perspective. Masaccio combined both in paint. The Medici provided the money and the philosophy. Botticelli provided the beauty.",
        keyArtists: [{ name: "Sandro Botticelli" }, { name: "Donatello" }, { name: "Masaccio" }],
        keyWorks: [{ title: "Birth of Venus", workId: "birth-of-venus" }, { title: "David (Donatello)" }],
        movementPageId: "early-renaissance",
      },
      {
        id: "it-high-renaissance",
        name: "High Renaissance",
        dates: "1490–1527",
        color: "#D4B85C",
        activeRange: [1490, 1527],
        description: "Roughly 35 years. Three artists. The most concentrated explosion of genius in human history. Leonardo painted the Mona Lisa and the Last Supper. Michelangelo painted the Sistine ceiling and carved the David. Raphael painted the School of Athens. All simultaneously, all in competition.",
        keyArtists: [
          { name: "Leonardo da Vinci", artistId: "leonardo-da-vinci" },
          { name: "Michelangelo", artistId: "michelangelo" },
          { name: "Raphael", artistId: "raphael" },
        ],
        keyWorks: [
          { title: "Mona Lisa", workId: "mona-lisa" },
          { title: "Sistine Chapel Ceiling", workId: "sistine-ceiling" },
          { title: "School of Athens", workId: "school-of-athens" },
        ],
        movementPageId: "high-renaissance",
      },
      {
        id: "it-mannerism",
        name: "Mannerism",
        dates: "1520–1600",
        color: "#9A8035",
        activeRange: [1520, 1600],
        description: "What do you do after perfection? You make it strange. Elongated figures, acid colors, airless spaces, impossible poses. The elegant anxiety of artists who knew they came after the greatest generation in the history of art.",
        keyArtists: [{ name: "Pontormo" }, { name: "Parmigianino" }, { name: "Bronzino" }],
        keyWorks: [{ title: "Deposition (Pontormo)" }, { title: "Madonna with the Long Neck" }],
        movementPageId: "mannerism",
      },
      {
        id: "it-baroque",
        name: "Italian Baroque",
        dates: "1600–1700",
        color: "#B87040",
        activeRange: [1600, 1700],
        description: "Caravaggio arrived in Rome and changed everything. Light from absolute darkness. Saints who looked like street people. The sacred made shockingly physical. Bernini made marble breathe. The Counter-Reformation had found its artists.",
        keyArtists: [
          { name: "Caravaggio", artistId: "caravaggio" },
          { name: "Artemisia Gentileschi", artistId: "artemisia-gentileschi" },
          { name: "Gian Lorenzo Bernini" },
        ],
        keyWorks: [
          { title: "The Calling of Saint Matthew", workId: "calling-saint-matthew" },
          { title: "Judith Slaying Holofernes", workId: "judith-holofernes" },
          { title: "Ecstasy of Saint Teresa" },
        ],
        movementPageId: "italian-baroque",
      },
    ],
  },

  // ─── SPAIN ────────────────────────────────────────────────────
  {
    id: "spain",
    name: "Spain",
    svgPathId: "path-spain",
    dotX: 315,
    dotY: 187,
    movements: [
      {
        id: "es-golden-age",
        name: "Spanish Golden Age",
        dates: "1580–1680",
        color: "#C4823A",
        activeRange: [1580, 1680],
        description: "The most powerful empire on earth produced the most psychologically penetrating art. Velázquez invented questions painting is still trying to answer. El Greco brought Byzantine mysticism to Spanish Catholicism. Zurbarán painted monks with the intensity of Caravaggio.",
        keyArtists: [
          { name: "Diego Velázquez", artistId: "velazquez" },
          { name: "El Greco" },
          { name: "Francisco Zurbarán" },
        ],
        keyWorks: [
          { title: "Las Meninas", workId: "las-meninas" },
          { title: "The Burial of the Count of Orgaz (El Greco)" },
        ],
        movementPageId: "flemish-baroque",
      },
      {
        id: "es-goya",
        name: "Goya & Romanticism",
        dates: "1780–1828",
        color: "#8C7040",
        activeRange: [1780, 1828],
        description: "Francisco Goya was the court painter who became the first modern artist. He documented the Napoleonic atrocities with forensic honesty, then retired to his house and painted his nightmares on the walls. The Black Paintings — made for himself, for no audience — are among the most disturbing images ever made.",
        keyArtists: [{ name: "Francisco Goya", artistId: "francisco-goya" }],
        keyWorks: [
          { title: "The Third of May 1808", workId: "third-of-may" },
          { title: "Saturn Devouring His Son" },
        ],
        movementPageId: "realism",
      },
      {
        id: "es-modern",
        name: "Spanish Modernism",
        dates: "1880–1975",
        color: "#C47080",
        activeRange: [1880, 1975],
        description: "Three Catalans who between them defined modern art. Picasso shattered every rule of representation. Miró created a biomorphic abstract language of extraordinary poetic power. Dalí turned the unconscious into a precision instrument. No other country produced three artists of this magnitude in a single century.",
        keyArtists: [
          { name: "Pablo Picasso", artistId: "pablo-picasso" },
          { name: "Salvador Dalí", artistId: "salvador-dali" },
          { name: "Joan Miró" },
        ],
        keyWorks: [
          { title: "Guernica", workId: "guernica" },
          { title: "Les Demoiselles d'Avignon", workId: "demoiselles-avignon" },
          { title: "The Persistence of Memory", workId: "persistence-of-memory" },
        ],
        movementPageId: "cubism",
      },
    ],
  },

  // ─── FRANCE ───────────────────────────────────────────────────
  {
    id: "france",
    name: "France",
    svgPathId: "path-france",
    dotX: 337,
    dotY: 165,
    movements: [
      {
        id: "fr-rococo",
        name: "Rococo",
        dates: "1720–1780",
        color: "#D4A060",
        activeRange: [1720, 1780],
        description: "The aristocracy of Europe decided art should be delightful. Watteau, Fragonard, Boucher — pink flesh, blue sky, silk and sunlight, the fête galante as a way of life. The last purely aristocratic art style in the history of Western painting. It ended with the guillotine.",
        keyArtists: [{ name: "Antoine Watteau" }, { name: "Jean-Honoré Fragonard" }, { name: "François Boucher" }],
        keyWorks: [{ title: "The Swing (Fragonard)" }],
        movementPageId: "rococo",
      },
      {
        id: "fr-neoclassicism",
        name: "Neoclassicism",
        dates: "1780–1830",
        color: "#7A8060",
        activeRange: [1780, 1830],
        description: "David painted the French Revolution and Napoleon. Cold Roman virtue, the citizen-hero, art as political instruction. Then the same painter who had glorified the Revolution crowned Napoleon Emperor — the most spectacular artistic about-face in history.",
        keyArtists: [{ name: "Jacques-Louis David" }, { name: "Jean-Auguste-Dominique Ingres" }],
        keyWorks: [{ title: "The Death of Marat (David)" }, { title: "Napoleon Crossing the Alps" }],
        movementPageId: "realism",
      },
      {
        id: "fr-romanticism",
        name: "Romanticism",
        dates: "1820–1860",
        color: "#9A7040",
        activeRange: [1820, 1860],
        description: "Delacroix put color back at the center of French art after Neoclassicism's cold severity. Liberty Leading the People is the most famous political painting in the world. His feud with Ingres — color versus line, passion versus reason — was the defining artistic controversy of 19th-century France.",
        keyArtists: [
          { name: "Eugène Delacroix", artistId: "eugene-delacroix" },
          { name: "Théodore Géricault" },
        ],
        keyWorks: [
          { title: "Liberty Leading the People", workId: "liberty-leading" },
          { title: "The Raft of the Medusa", workId: "raft-of-medusa" },
        ],
        movementPageId: "realism",
      },
      {
        id: "fr-impressionism",
        name: "Impressionism",
        dates: "1860–1886",
        color: "#70A8B8",
        activeRange: [1860, 1886],
        description: "Eight exhibitions. Hostile critics. No sales. The complete transformation of Western art. Monet painted light on water. Degas painted the backstage of the theater. Renoir painted Sunday afternoons. Together they changed how human beings see.",
        keyArtists: [
          { name: "Claude Monet", artistId: "claude-monet" },
          { name: "Edgar Degas" },
          { name: "Pierre-Auguste Renoir" },
          { name: "Camille Pissarro" },
        ],
        keyWorks: [
          { title: "Water Lilies", workId: "water-lilies" },
          { title: "The Dance Class", workId: "dance-class" },
          { title: "Dance at the Moulin de la Galette", workId: "moulin-galette" },
        ],
        movementPageId: "impressionism",
      },
      {
        id: "fr-post-impressionism",
        name: "Post-Impressionism",
        dates: "1886–1910",
        color: "#7090B8",
        activeRange: [1886, 1910],
        description: "Cézanne, Van Gogh, Gauguin — all working in France, all dissatisfied with Impressionism for different reasons, all going in completely different directions. Their departures defined the entire 20th century in art.",
        keyArtists: [
          { name: "Vincent van Gogh", artistId: "vincent-van-gogh" },
          { name: "Paul Cézanne" },
          { name: "Paul Gauguin" },
          { name: "Georges Seurat" },
        ],
        keyWorks: [
          { title: "The Starry Night", workId: "starry-night" },
          { title: "The Card Players", workId: "card-players" },
          { title: "A Sunday on La Grande Jatte", workId: "grande-jatte" },
        ],
        movementPageId: "post-impressionism",
      },
    ],
  },

  // ─── NETHERLANDS ──────────────────────────────────────────────
  {
    id: "netherlands",
    name: "Netherlands",
    svgPathId: "path-netherlands",
    dotX: 348,
    dotY: 148,
    movements: [
      {
        id: "nl-golden-age",
        name: "Dutch Golden Age",
        dates: "1620–1680",
        color: "#B87040",
        activeRange: [1620, 1680],
        description: "The world's first middle class invented the world's first art market — and got exactly the art it deserved. Rembrandt painted the human face as no one before or since. Vermeer made silence and domestic light holy. Hals captured a laugh in oil paint. The most democratic art tradition in Western history.",
        keyArtists: [
          { name: "Rembrandt van Rijn", artistId: "rembrandt" },
          { name: "Johannes Vermeer", artistId: "vermeer" },
          { name: "Frans Hals" },
          { name: "Jan Steen" },
        ],
        keyWorks: [
          { title: "The Night Watch", workId: "night-watch" },
          { title: "Girl with a Pearl Earring", workId: "girl-pearl-earring" },
          { title: "The Anatomy Lesson", workId: "anatomy-lesson" },
        ],
        movementPageId: "dutch-golden-age",
      },
      {
        id: "nl-de-stijl",
        name: "De Stijl",
        dates: "1917–1931",
        color: "#6080A0",
        activeRange: [1917, 1931],
        description: "Mondrian reduced painting to horizontal and vertical lines in primary colors and declared it a spiritual and social program. Pure abstraction as the universal language that would transcend national differences and create a new world order. The Nazis classified it as degenerate.",
        keyArtists: [{ name: "Piet Mondrian" }, { name: "Theo van Doesburg" }],
        keyWorks: [{ title: "Composition with Red, Yellow, Blue and Black (Mondrian)" }],
        movementPageId: "abstract-expressionism",
      },
    ],
  },

  // ─── GERMANY ──────────────────────────────────────────────────
  {
    id: "germany",
    name: "Germany",
    svgPathId: "path-germany",
    dotX: 370,
    dotY: 155,
    movements: [
      {
        id: "de-northern-renaissance",
        name: "Northern Renaissance",
        dates: "1420–1560",
        color: "#A89040",
        activeRange: [1420, 1560],
        description: "Dürer bridged Flemish craftsmanship and Italian humanism — the first Northern artist with a fully Renaissance consciousness. His 1500 self-portrait, in the full-frontal pose reserved for Christ, is the most audacious self-portrait ever painted. Holbein painted the English court with forensic psychological precision.",
        keyArtists: [
          { name: "Albrecht Dürer", artistId: "albrecht-durer" },
          { name: "Hans Holbein the Younger" },
          { name: "Lucas Cranach the Elder" },
        ],
        keyWorks: [{ title: "Self-Portrait (Dürer)", workId: "self-portrait-durer" }],
        movementPageId: "northern-renaissance",
      },
      {
        id: "de-expressionism",
        name: "Expressionism",
        dates: "1905–1933",
        color: "#A06080",
        activeRange: [1905, 1933],
        description: "Die Brücke, Der Blaue Reiter — distortion as emotional truth. Kirchner's Berlin, Schiele's bodies, Kandinsky's abstractions, Klee's dreamscapes. The most psychologically intense art tradition of the 20th century. The Nazis classified 16,000 works as degenerate and destroyed many of them.",
        keyArtists: [
          { name: "Ernst Ludwig Kirchner" },
          { name: "Wassily Kandinsky" },
          { name: "Paul Klee" },
          { name: "Franz Marc" },
        ],
        keyWorks: [{ title: "The Scream (Munch — Norwegian precursor)", workId: "the-scream" }],
        movementPageId: "expressionism",
      },
      {
        id: "de-bauhaus",
        name: "Bauhaus",
        dates: "1919–1933",
        color: "#607060",
        activeRange: [1919, 1933],
        description: "The school that tried to unite art, craft, and industrial design in a single revolutionary educational program. Klee, Kandinsky, Moholy-Nagy, Breuer, Mies van der Rohe. The Nazis closed it in 1933. Its teachers dispersed across the world and the Bauhaus became the most influential design school in history.",
        keyArtists: [{ name: "Walter Gropius" }, { name: "László Moholy-Nagy" }, { name: "Herbert Bayer" }],
        keyWorks: [{ title: "Bauhaus Building, Dessau (Gropius)" }],
        movementPageId: "expressionism",
      },
    ],
  },

  // ─── ENGLAND ──────────────────────────────────────────────────
  {
    id: "england",
    name: "England",
    svgPathId: "path-england",
    dotX: 317,
    dotY: 137,
    movements: [
      {
        id: "en-holbein",
        name: "Tudor Portraiture",
        dates: "1530–1600",
        color: "#8A7050",
        activeRange: [1530, 1600],
        description: "Hans Holbein the Younger arrived at the court of Henry VIII and painted the most psychologically penetrating royal portraits in English history. His Henry VIII became the defining image of Tudor power — a pose so authoritative it was copied for centuries.",
        keyArtists: [{ name: "Hans Holbein the Younger" }, { name: "Nicholas Hilliard" }],
        keyWorks: [{ title: "Henry VIII (Holbein)" }, { title: "Portrait of a Young Man (Hilliard)" }],
        movementPageId: "northern-renaissance",
      },
      {
        id: "en-romanticism",
        name: "British Romanticism",
        dates: "1780–1860",
        color: "#70A060",
        activeRange: [1780, 1860],
        description: "Turner dissolved the world into light. Constable made the English landscape sacred. The two greatest landscape painters in Western art worked simultaneously in the same country — Turner pushing painting toward pure abstraction, Constable toward naturalistic observation. Both influenced French Impressionism directly.",
        keyArtists: [
          { name: "J.M.W. Turner", artistId: "jmw-turner" },
          { name: "John Constable" },
          { name: "William Blake" },
        ],
        keyWorks: [{ title: "The Fighting Temeraire", workId: "fighting-temeraire" }],
        movementPageId: "realism",
      },
      {
        id: "en-pre-raphaelites",
        name: "Pre-Raphaelites",
        dates: "1848–1900",
        color: "#9070A8",
        activeRange: [1848, 1900],
        description: "Against academic convention, back to before Raphael — to the jewel-bright colors and direct observation of early Italian painting. Millais, Rossetti, Burne-Jones, Holman Hunt. A medieval dream in Victorian London, simultaneously nostalgic and radical.",
        keyArtists: [{ name: "John Everett Millais" }, { name: "Dante Gabriel Rossetti" }, { name: "Edward Burne-Jones" }],
        keyWorks: [{ title: "Ophelia (Millais)" }, { title: "Beata Beatrix (Rossetti)" }],
        movementPageId: "symbolism",
      },
    ],
  },

  // ─── RUSSIA ───────────────────────────────────────────────────
  {
    id: "russia",
    name: "Russia",
    svgPathId: "path-russia",
    dotX: 475,
    dotY: 132,
    movements: [
      {
        id: "ru-icons",
        name: "Russian Icon Painting",
        dates: "988–1700",
        color: "#8060C0",
        activeRange: [988, 1700],
        description: "Russia received Byzantine sacred art through conversion in 988 AD and developed it into its own profound tradition. Andrei Rublev's Trinity icon (c.1411) — three angels at a table, circular composition, colors of extraordinary delicacy — is the supreme achievement of Russian sacred painting and one of the greatest works of art ever made.",
        keyArtists: [{ name: "Andrei Rublev" }, { name: "Theophanes the Greek" }],
        keyWorks: [{ title: "Trinity (Rublev)" }, { title: "Dormition of the Virgin" }],
        movementPageId: "middle-byzantine",
      },
      {
        id: "ru-wanderers",
        name: "The Wanderers",
        dates: "1863–1900",
        color: "#7A8060",
        activeRange: [1863, 1900],
        description: "Russian Realism at its most socially engaged — painters who rejected the academic establishment and traveled across Russia depicting peasant life, the landscape, and historical subjects with political urgency. Repin's Barge Haulers on the Volga is the defining image of Russian social realism.",
        keyArtists: [{ name: "Ilya Repin" }, { name: "Vasily Surikov" }, { name: "Ivan Kramskoy" }],
        keyWorks: [{ title: "Barge Haulers on the Volga (Repin)" }, { title: "Morning of the Streltsy Execution (Surikov)" }],
        movementPageId: "realism",
      },
      {
        id: "ru-avant-garde",
        name: "Russian Avant-Garde",
        dates: "1905–1935",
        color: "#C47080",
        activeRange: [1905, 1935],
        description: "The most extraordinary artistic revolution in the shortest time. Kandinsky invented abstract art. Malevich painted the Black Square — a black square on white canvas — and declared that painting had transcended the visible world. Rodchenko, Tatlin, Goncharova, Chagall. The Revolution of 1917 seemed to make everything possible. Stalin made most of it impossible.",
        keyArtists: [
          { name: "Wassily Kandinsky" },
          { name: "Kazimir Malevich" },
          { name: "Marc Chagall" },
          { name: "Alexander Rodchenko" },
        ],
        keyWorks: [{ title: "Black Square (Malevich)" }, { title: "I and the Village (Chagall)" }],
        movementPageId: "abstract-expressionism",
      },
    ],
  },

  // ─── EGYPT ────────────────────────────────────────────────────
  {
    id: "egypt",
    name: "Egypt",
    svgPathId: "path-egypt",
    dotX: 445,
    dotY: 220,
    movements: [
      {
        id: "eg-old-kingdom",
        name: "Old Kingdom",
        dates: "2686–2181 BC",
        color: "#D4A843",
        activeRange: [-2686, -2181],
        description: "The age of pyramids. The most ambitious funerary architecture ever conceived — mountains of stone built to shelter the body of one man for eternity. The Great Sphinx, the stepped pyramid of Djoser, the canonical seated pharaoh statue. Egypt established its visual language in these 500 years and kept it for 2,500 more.",
        keyArtists: [{ name: "Imhotep (architect of Djoser's pyramid)" }],
        keyWorks: [{ title: "Great Sphinx of Giza" }, { title: "Seated Khafre" }],
        movementPageId: "old-kingdom",
      },
      {
        id: "eg-new-kingdom",
        name: "New Kingdom",
        dates: "1550–1070 BC",
        color: "#C9A84C",
        activeRange: [-1550, -1070],
        description: "Egypt at its most imperial and most afraid of death. Valley of the Kings, Karnak, Abu Simbel. Ramesses II built on a scale that made his predecessors seem modest. And underneath all the official grandeur, the intimate paintings of the private tombs show how Egyptians actually lived — and how desperately they wanted to keep living.",
        keyArtists: [{ name: "Thutmose (sculptor of Nefertiti)" }],
        keyWorks: [{ title: "Bust of Nefertiti", workId: "nefertiti" }, { title: "Abu Simbel temples" }],
        movementPageId: "new-kingdom-egypt",
      },
      {
        id: "eg-amarna",
        name: "Amarna Period",
        dates: "1353–1336 BC",
        color: "#E8C050",
        activeRange: [-1353, -1336],
        description: "17 years of radical revolution under the heretic pharaoh Akhenaten. Elongated figures, intimate royal scenes, the Bust of Nefertiti. A naturalism never seen before or after in Egyptian art. Then total erasure — Akhenaten's name chiseled from every monument, his city abandoned, his art hidden. Rediscovered by archaeology 3,200 years later.",
        keyArtists: [{ name: "Thutmose (royal sculptor)" }],
        keyWorks: [{ title: "Bust of Nefertiti", workId: "nefertiti" }],
        movementPageId: "amarna",
      },
    ],
  },

  // ─── GREECE ───────────────────────────────────────────────────
  {
    id: "greece",
    name: "Greece",
    svgPathId: "path-greece",
    dotX: 402,
    dotY: 195,
    movements: [
      {
        id: "gr-archaic",
        name: "Archaic",
        dates: "700–480 BC",
        color: "#8ABCE0",
        activeRange: [-700, -480],
        description: "The kouros — stiff, smiling, frontal, learning to be human. Borrowed from Egypt, moving toward something entirely Greek. The Archaic smile is not contentment — it is the convention for a living figure, and it has a slightly uncanny quality, as if these figures know something about eternity that they are not telling us.",
        keyArtists: [],
        keyWorks: [{ title: "Kouros of Anavysos" }, { title: "Peplos Kore" }],
        movementPageId: "archaic",
      },
      {
        id: "gr-classical",
        name: "Classical",
        dates: "480–323 BC",
        color: "#7BA3C4",
        activeRange: [-480, -323],
        description: "The Parthenon, Phidias, the Elgin Marbles. The ideal human body as the measure of all beauty — not the body as it is but the body as it should be, purified of imperfection, expressing through physical form the philosophical conviction that beauty and goodness are the same. 150 years that defined Western aesthetics for 2,500 years.",
        keyArtists: [{ name: "Phidias" }, { name: "Polykleitos" }, { name: "Myron" }],
        keyWorks: [
          { title: "Elgin Marbles", workId: "elgin-marbles" },
          { title: "Venus de Milo", workId: "venus-de-milo" },
          { title: "Discobolus of Myron" },
        ],
        movementPageId: "classical",
      },
      {
        id: "gr-hellenistic",
        name: "Hellenistic",
        dates: "323–31 BC",
        color: "#6A90B0",
        activeRange: [-323, -31],
        description: "After Alexander — Greek art went global, got emotional, and stopped being serene. The Laocoön, the Winged Victory, the Dying Gaul. Drama and pathos over idealized calm. Old age, childhood, and drunkenness became legitimate subjects. The boundary between divine and human dissolved.",
        keyArtists: [{ name: "Agesander" }, { name: "Athenodoros" }, { name: "Polydorus" }],
        keyWorks: [{ title: "Laocoön and His Sons", workId: "laocoon" }, { title: "Winged Victory of Samothrace" }],
        movementPageId: "hellenistic",
      },
    ],
  },

  // ─── JAPAN ────────────────────────────────────────────────────
  {
    id: "japan",
    name: "Japan",
    svgPathId: "path-japan",
    dotX: 651,
    dotY: 157,
    movements: [
      {
        id: "jp-heian",
        name: "Heian Painting",
        dates: "794–1185",
        color: "#9B8040",
        activeRange: [794, 1185],
        description: "The Heian court refined Japanese aesthetics to a point of extraordinary delicacy — mono no aware, the beauty of transience. The Tale of Genji scroll paintings (c.1130) are among the most beautiful narrative images ever made. A flat, aerial perspective, figures without individual faces, landscape as pure atmosphere.",
        keyArtists: [{ name: "Unknown court painters" }],
        keyWorks: [{ title: "Tale of Genji Scroll" }, { title: "Shigisan Engi Emaki" }],
        movementPageId: "manuscript",
      },
      {
        id: "jp-ukiyo-e",
        name: "Ukiyo-e",
        dates: "1603–1868",
        color: "#C47080",
        activeRange: [1603, 1868],
        description: "Woodblock prints for the merchant class — images of the floating world (ukiyo) of theater, pleasure quarters, and famous landscapes. Hokusai's Great Wave, Hiroshige's rain on the Tokaido road, Utamaro's women. These prints arrived in Europe as packing material and changed French Impressionism forever.",
        keyArtists: [{ name: "Katsushika Hokusai" }, { name: "Utagawa Hiroshige" }, { name: "Kitagawa Utamaro" }],
        keyWorks: [{ title: "The Great Wave off Kanagawa (Hokusai)" }, { title: "100 Views of Edo (Hiroshige)" }],
        movementPageId: "impressionism",
      },
      {
        id: "jp-nihonga",
        name: "Nihonga & Mono ha",
        dates: "1868–present",
        color: "#7090B8",
        activeRange: [1868, 2025],
        description: "Japanese painting responded to Western modernization with a distinctive synthesis — Nihonga used traditional mineral pigments, silk, and classical subjects while absorbing Western compositional ideas. In the 1960s, the Mono ha movement proposed that materials — stone, paper, rope, water — arranged in space were art.",
        keyArtists: [{ name: "Taikan Yokoyama" }, { name: "Hakuson Yamamoto" }],
        keyWorks: [{ title: "Kutsugen (Yokoyama)" }],
        movementPageId: "art-nouveau",
      },
    ],
  },

  // ─── USA ──────────────────────────────────────────────────────
  {
    id: "usa",
    name: "United States",
    svgPathId: "path-usa",
    dotX: 160,
    dotY: 185,
    movements: [
      {
        id: "us-hudson-river",
        name: "Hudson River School",
        dates: "1825–1880",
        color: "#70A060",
        activeRange: [1825, 1880],
        description: "The first major American art movement — vast luminous landscapes celebrating the wilderness as a sacred national identity. Thomas Cole, Frederic Church, Albert Bierstadt. The American landscape as revelation, as manifest destiny made visible, as a substitute for the historical and religious subjects that defined European painting.",
        keyArtists: [{ name: "Thomas Cole" }, { name: "Frederic Church" }, { name: "Albert Bierstadt" }],
        keyWorks: [{ title: "The Oxbow (Cole)" }, { title: "Heart of the Andes (Church)" }],
        movementPageId: "realism",
      },
      {
        id: "us-american-realism",
        name: "American Realism",
        dates: "1870–1950",
        color: "#80A060",
        activeRange: [1870, 1950],
        description: "Winslow Homer painted the sea and the American wilderness with a directness that had no European equivalent. Thomas Eakins painted surgery, rowing, and boxing with scientific observation and emotional intensity. Edward Hopper painted American loneliness — the diner, the motel room, the office at night — with a formal precision that made the ordinary monumental.",
        keyArtists: [{ name: "Winslow Homer" }, { name: "Thomas Eakins" }, { name: "Edward Hopper" }],
        keyWorks: [{ title: "Nighthawks", workId: "nighthawks" }],
        movementPageId: "realism",
      },
      {
        id: "us-abstract-expressionism",
        name: "Abstract Expressionism",
        dates: "1940–1960",
        color: "#B05070",
        activeRange: [1940, 1960],
        description: "New York took over from Paris after the war. The first American art movement to achieve genuine international influence — and the first to be covertly promoted by the CIA as a Cold War cultural weapon. Pollock, Rothko, de Kooning, Kline. The canvas as arena, the gesture as truth, the color field as spiritual experience.",
        keyArtists: [{ name: "Jackson Pollock" }, { name: "Mark Rothko" }, { name: "Willem de Kooning" }],
        keyWorks: [{ title: "One: Number 31 (Pollock)" }, { title: "Rothko Chapel" }],
        movementPageId: "abstract-expressionism",
      },
      {
        id: "us-pop-art",
        name: "Pop Art",
        dates: "1955–1975",
        color: "#D07080",
        activeRange: [1955, 1975],
        description: "A soup can in a gallery. A question that permanently changed what art could be about. Warhol made celebrity and mass production the subject of serious art — and predicted the Instagram age fifty years before it arrived. Lichtenstein made comic strips monumental. Oldenburg made ordinary objects gigantic. America turned its own culture into art.",
        keyArtists: [{ name: "Andy Warhol", artistId: "andy-warhol" }, { name: "Roy Lichtenstein" }, { name: "Claes Oldenburg" }],
        keyWorks: [
          { title: "Campbell's Soup Cans", workId: "campbells-soup" },
          { title: "Marilyn Diptych", workId: "marilyn-diptych" },
        ],
        movementPageId: "pop-art",
      },
    ],
  },
];

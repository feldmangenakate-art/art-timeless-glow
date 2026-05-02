// Ancient Era — Mesopotamia · Ancient Egypt · Ancient Greece · Roman Empire

export interface AncientMovement {
  id: string;
  name: string;
  dates: string;
  parentCivilization: string;
  parentId: string;
  color: string;
  tagline: string;
  theMovement: string;
  whatItBroke: string;
  whatItInvented: string;
  historicalContext: string;
  keyArtists: { id: string; name: string; contribution: string }[];
  keyWorks: { id: string; title: string; why: string }[];
  prevMovement: { id: string; name: string } | null;
  nextMovement: { id: string; name: string } | null;
}

export interface AncientCivilization {
  id: string;
  name: string;
  dates: string;
  tagline: string;
  overview: string;
  whyItMattered: string;
  historicalContext: string;
  movements: AncientMovement[];
  keyWorks: { id: string; title: string; date: string; location: string }[];
  facts: {
    duration: string;
    where: string;
    medium: string;
    defining: string;
    legacy: string;
  };
}

export const ANCIENT_CIVILIZATIONS: AncientCivilization[] = [

  // ═══ MESOPOTAMIA ═══════════════════════════════════════════════
  {
    id: "mesopotamia",
    name: "Mesopotamia",
    dates: "c. 3500–539 BC",
    tagline: "The world's first cities built the world's first monumental art — and invented the idea that power should be made visible.",

    overview: `Between the Tigris and Euphrates rivers, in the land that is now Iraq and Syria, humanity built its first cities, invented writing, created the first legal codes, and produced the first epic literature. Art in Mesopotamia was never separate from power — it was power's most visible expression. The ziggurat rising above the flat plain announced the presence of the god and the king who served him. The relief carved on the palace wall told the story of the king's conquests to every visitor. The cylinder seal pressed into wet clay was simultaneously a signature, a legal document, and a work of art small enough to wear around the neck.

Mesopotamian art spans nearly three thousand years and multiple successive empires — Sumerian, Akkadian, Babylonian, Assyrian — each with its own stylistic emphases but all sharing a fundamental conviction: that art exists to serve the divine and the political order, that beauty is not an end in itself but a vehicle for authority. The result is an art of extraordinary formal dignity, hierarchical clarity, and — at its best, in the great Assyrian palace reliefs — a psychological intensity that has never been surpassed in stone.`,

    whyItMattered: `Mesopotamia invented the visual vocabulary of power that all subsequent civilizations have drawn on: the frontal, hierarchically scaled figure of the ruler; the narrative relief that tells a story across a continuous surface; the monumental gateway guarded by supernatural beings; the cylinder seal as portable identity. When we see a head of state portrayed larger than his subordinates, or a triumphal arch commemorating military victory, or a law inscribed in public stone, we are looking at ideas that were first worked out on the banks of the Tigris and Euphrates five thousand years ago.`,

    historicalContext: `Mesopotamia was the most fertile and most contested land in the ancient world — blessed with rivers and agriculture, but with no natural defensive boundaries, constantly invaded and conquered. The succession of empires — Sumerian city-states giving way to Akkadian empire, then Babylonian, then Assyrian, then Neo-Babylonian, finally conquered by the Persians under Cyrus in 539 BC — each left its mark on the artistic tradition, absorbing and transforming what came before. The invention of cuneiform writing around 3200 BC made Mesopotamia the first literate civilization, and literacy transformed art: images could now be accompanied by texts that explained, glorified, and fixed their meaning for eternity.`,

    movements: [
      {
        id: "sumerian",
        name: "Sumerian",
        dates: "c. 3500–2350 BC",
        parentCivilization: "Mesopotamia",
        parentId: "mesopotamia",
        color: "#C4823A",
        tagline: "The first cities on earth built the first temples — and the first art made to outlast its makers.",
        theMovement: `The Sumerians of southern Mesopotamia created the world's first urban civilization, and with it the world's first monumental art tradition. The ziggurat — the great stepped temple tower — was the defining architectural achievement: a man-made mountain rising from the flat alluvial plain, visible for miles, the physical manifestation of the city's relationship with its patron god. Around and within these temples, Sumerian artists created a distinctive visual language: frontal figures with enormous eyes (representing the state of perpetual prayer), votive statues placed in temple sanctuaries to pray on behalf of their donors, narrative reliefs celebrating military victories and religious ceremonies.`,
        whatItBroke: `Sumerian art broke from the scattered, largely decorative art of the prehistoric Neolithic communities that preceded it. It was the first art made in the service of a complex, literate, urban society — the first art with an institutional patron (the temple), a professional class of makers (temple craftsmen), and a clear ideological program. It was also the first art that could be dated, attributed, and explained through written records.`,
        whatItInvented: `The votive figure — a statue placed in a temple to pray continuously on behalf of its donor. The narrative relief — a continuous pictorial story carved in stone or cast in metal. The cylinder seal — a small carved stone cylinder that, when rolled across wet clay, left a repeating impression serving as signature and document. The ziggurat as architectural form. The hierarchical scale convention — showing the king or god larger than subordinates regardless of actual physical distance.`,
        historicalContext: `Sumer flourished in the period when writing was being invented (cuneiform, c.3200 BC) and the first cities were being organized. The city-states of Ur, Uruk, Nippur, and Lagash competed politically and economically while sharing a common religious and artistic culture. The Royal Tombs of Ur, excavated by Leonard Woolley in the 1920s, revealed the extraordinary material culture of Sumerian court life — and also its darkest aspect: the practice of human sacrifice at royal funerals, with dozens of attendants buried alive to serve the king in the afterlife.`,
        keyArtists: [],
        keyWorks: [
          { id: "standard-of-ur", title: "Standard of Ur", why: "A wooden box inlaid with shell and lapis lazuli showing scenes of war and peace — the earliest surviving narrative artwork showing multiple registers of continuous story" },
          { id: "ram-in-thicket", title: "Ram in a Thicket", why: "A gold and lapis lazuli sculpture from the Royal Tombs of Ur — one of the most delicate and technically accomplished works of the ancient world" },
        ],
        prevMovement: null,
        nextMovement: { id: "akkadian", name: "Akkadian" },
      },
      {
        id: "akkadian",
        name: "Akkadian",
        dates: "c. 2350–2150 BC",
        parentCivilization: "Mesopotamia",
        parentId: "mesopotamia",
        color: "#B87040",
        tagline: "The first empire in history demanded the first imperial art — and got it.",
        theMovement: `The Akkadian Empire, founded by Sargon of Akkad around 2350 BC, was the first true empire in history — a centralized state ruling over multiple peoples and territories. Akkadian art reflects this new political reality: where Sumerian art was devotional and collective, Akkadian art is imperial and individualizing. The ruler emerges as a specific person — depicted with a particular face, a particular biography, a particular claim to divine favor. The Victory Stele of Naram-Sin (c.2254 BC) is the masterpiece of this tradition: the king, wearing a divine horned helmet, strides up a mountain over the bodies of his enemies, larger than any other figure, his spear pinning an enemy through the throat.`,
        whatItBroke: `Akkadian art broke from the collective, anonymous quality of Sumerian art — where figures were types rather than individuals, and the ruler was just the largest type. Akkadian portraiture introduced the concept of likeness — the idea that a portrait should capture the specific features of a specific person. The bronze Head of an Akkadian Ruler (c.2300 BC) in Baghdad is the first portrait head in history that reads as an attempt to capture an individual rather than a type.`,
        whatItInvented: `Imperial portraiture — the ruler depicted as a specific individual with recognizable features. The triumphal monument — the Victory Stele, celebrating a specific military campaign with specific protagonists. The concept of artistic patronage as a tool of political legitimacy — the idea that commissioning great art was itself an act of royal power.`,
        historicalContext: `The Akkadian Empire collapsed around 2150 BC, probably due to a combination of drought, famine, and invasion by the Gutians from the Zagros mountains. It was the first empire in history, and its collapse was the first demonstration of the fragility of imperial structures — a lesson that would be repeated across the next four thousand years of Mesopotamian history.`,
        keyArtists: [],
        keyWorks: [
          { id: "naram-sin-stele", title: "Victory Stele of Naram-Sin", why: "The first triumphal monument in history — the king as divine conqueror, striding over his enemies on a mountain, larger than nature itself" },
        ],
        prevMovement: { id: "sumerian", name: "Sumerian" },
        nextMovement: { id: "assyrian", name: "Assyrian" },
      },
      {
        id: "assyrian",
        name: "Assyrian",
        dates: "c. 900–612 BC",
        parentCivilization: "Mesopotamia",
        parentId: "mesopotamia",
        color: "#A06030",
        tagline: "The most powerful empire of the ancient world made the most violent art — and the most beautiful.",
        theMovement: `The Neo-Assyrian Empire was the most powerful state the ancient world had yet seen — a military machine that conquered Egypt, Babylon, and most of the known world, and celebrated its power with art of extraordinary sophistication and brutality. The great palace reliefs of Nineveh and Nimrud are among the supreme achievements of ancient art: continuous narrative sequences covering acres of limestone wall, showing the king hunting lions, conducting military campaigns, receiving tribute from conquered peoples. The technical quality is astonishing — figures in confident, naturalistic movement, horses rendered with anatomical precision, landscapes suggested through layered registers.`,
        whatItBroke: `Assyrian art broke from the relatively static, frontal conventions of earlier Mesopotamian art toward a new dynamism and naturalism — particularly in the depiction of animals. The dying lion reliefs from Nineveh (c.650 BC) are among the most emotionally powerful animal paintings in the history of art: lions brought down by arrows, twisting in their death agonies, rendered with a compassion that sits in startling contradiction to the violence being depicted.`,
        whatItInvented: `The continuous narrative relief as a comprehensive political statement — the entire story of a campaign told across hundreds of meters of carved stone. The psychological portrait of the animal — the dying lion rendered with genuine empathy. The lamassu — the colossal human-headed winged bull or lion that guarded palace gateways, combining the strength of a bull, the swiftness of an eagle, and the intelligence of a human in a single supernatural guardian.`,
        historicalContext: `The Assyrian Empire fell with shocking speed — Nineveh, the greatest city in the world, was sacked by a coalition of Babylonians and Medes in 612 BC. The city was so thoroughly destroyed that its location was lost for over two thousand years. When Austen Henry Layard excavated Nimrud and Nineveh in the 1840s, the palace reliefs he found had been buried and forgotten since the 7th century BC. They arrived in the British Museum to general astonishment — nobody had known they existed.`,
        keyArtists: [],
        keyWorks: [
          { id: "lamassu", title: "Lamassu of Nineveh", why: "The colossal human-headed winged bull — guardian of the palace gate, combining the strength of a bull, the swiftness of an eagle, and human intelligence in one supernatural form" },
          { id: "lion-hunt", title: "Lion Hunt Reliefs", why: "The dying lion reliefs from Nineveh — among the most emotionally powerful animal paintings in the history of art, rendered with compassion for the prey" },
        ],
        prevMovement: { id: "akkadian", name: "Akkadian" },
        nextMovement: null,
      },
    ],

    keyWorks: [
      { id: "standard-of-ur", title: "Standard of Ur", date: "c. 2600 BC", location: "British Museum, London" },
      { id: "lamassu", title: "Lamassu of Nineveh", date: "c. 700 BC", location: "British Museum, London" },
      { id: "ishtar-gate", title: "Ishtar Gate of Babylon", date: "c. 575 BC", location: "Pergamon Museum, Berlin" },
    ],

    facts: {
      duration: "~3,000 years across Sumerian, Akkadian, Babylonian & Assyrian periods",
      where: "Modern Iraq, Syria, and southeastern Turkey",
      medium: "Limestone and alabaster relief, bronze casting, glazed brick, cylinder seals",
      defining: "Art as the visible expression of divine and royal power",
      legacy: "The visual vocabulary of empire — monumental gateways, triumphal reliefs, hierarchical scale",
    },
  },

  // ═══ ANCIENT EGYPT ══════════════════════════════════════════════
  {
    id: "egypt",
    name: "Ancient Egypt",
    dates: "c. 3100–30 BC",
    tagline: "Three thousand years of art made to last forever — and it did.",

    overview: `Ancient Egyptian art is the most consistent artistic tradition in human history. For three thousand years — from the unification of Upper and Lower Egypt around 3100 BC to the death of Cleopatra in 30 BC — Egyptian artists worked within a visual system of extraordinary stability. The same conventions of representation, the same canon of proportions, the same hieratic scale, the same combination of frontal and profile views in a single figure persisted across thirty dynasties and three millennia with only gradual change. This is not artistic stagnation — it is a deliberate philosophical choice. Egyptian art was not made to be admired; it was made to function. The statue in the tomb was not a representation of the deceased — it was a vessel for their ka, their life force, to inhabit after death. The painting on the tomb wall was not a memory of life — it was a magical guarantee of its continuation.

The Egyptian visual system is based on the principle of conceptual truth rather than perceptual truth. A figure is not shown as the eye catches it at a given moment — it is shown as the mind knows it to be. The face is in profile because profiles are most characteristic of faces. The shoulders are frontal because frontal shoulders are most characteristic of shoulders. The feet are in profile because profile feet are most characteristic of feet. The result is a figure that is anatomically impossible and conceptually perfect — every important part shown at its most legible, combined into a single timeless image.`,

    whyItMattered: `Egyptian art's influence on subsequent civilizations is incalculable. Greek art learned from Egypt — the earliest Greek sculpture (the kouros tradition) is directly derived from Egyptian standing figures. Roman art absorbed Egyptian motifs after the conquest of Egypt in 30 BC. The Renaissance discovered Egyptian antiquities and was fascinated by their strangeness and power. Napoleon's Egyptian campaign of 1798 sparked a wave of Egyptomania that swept Europe and America in the 19th century. The discovery of Tutankhamun's tomb in 1922 caused a global sensation that shaped Art Deco design across the Western world. No other ancient civilization has been so continuously and so deeply fascinating to subsequent cultures.`,

    historicalContext: `Egypt's extraordinary artistic consistency was made possible by its extraordinary geographical stability. Protected by desert on three sides and sea on the fourth, Egypt was invaded far less frequently than Mesopotamia and maintained a continuous civilization for three thousand years. The Nile's annual flood deposited the fertile silt that made Egyptian agriculture so productive, freeing resources for monumental building and artistic production on a scale no other ancient civilization could match. The theological system — the pharaoh as divine intermediary between the human and divine worlds, responsible for maintaining maat (cosmic order) — gave art a clear function and a clear program that persisted across centuries.`,

    movements: [
      {
        id: "predynastic",
        name: "Predynastic & Early Dynastic",
        dates: "c. 3500–2686 BC",
        parentCivilization: "Ancient Egypt",
        parentId: "egypt",
        color: "#B8922A",
        tagline: "The moment a civilization decided what it would look like — and kept that decision for three thousand years.",
        theMovement: `The Predynastic and Early Dynastic period is when Egyptian art invented itself. In roughly four hundred years — from the first proto-urban settlements along the Nile to the establishment of the unified pharaonic state — Egyptian artists developed the visual conventions that would define their tradition for the next three millennia. The hieroglyphic writing system, the canonical figure style combining frontal and profile views, the hierarchical scale convention showing rulers larger than subordinates, the use of registers to organize narrative — all of these were established before the Old Kingdom began.

The Narmer Palette (c. 3100 BC) is the founding document of Egyptian art. A ceremonial slate palette used for grinding cosmetics, it shows the pharaoh Narmer — traditionally identified as the first ruler of a unified Egypt — on one side wearing the White Crown of Upper Egypt and smiting a kneeling enemy, and on the other wearing the Red Crown of Lower Egypt and inspecting rows of decapitated enemies. Every Egyptian artistic convention is already present: the king shown larger than everyone else, the figure in combined profile and frontal view, the action read in registers from top to bottom. Egyptian art did not develop toward this system over centuries — it began with it, fully formed.`,
        whatItBroke: `Predynastic art broke from the earlier Neolithic tradition of small portable objects — painted pottery, carved ivory figurines, cosmetic palettes — and invented monumental art in the service of political power. The transition from small-scale decorative objects to large ceremonial works expressing royal ideology happened rapidly, driven by the process of political unification that created the Egyptian state.`,
        whatItInvented: `The canonical Egyptian figure — the combination of frontal shoulders, profile face, and profile legs that remained the standard for three thousand years. Hierarchical scale — the ruler shown larger than subordinates as an expression of power rather than spatial proximity. The register system — narrative divided into horizontal bands read from top to bottom. Hieroglyphic writing as an integral part of visual composition. The palette and stele as vehicles for royal narrative and commemoration.`,
        historicalContext: `The unification of Upper and Lower Egypt around 3100 BC was the founding event of Egyptian civilization — the moment when competing chiefdoms along the Nile were consolidated into a single state under a divine king. The process was probably gradual and involved both conquest and negotiation, but Egyptian tradition remembered it as a single heroic act by the first pharaoh. The Early Dynastic period (1st and 2nd Dynasties, c. 3100–2686 BC) was the formative age of Egyptian statecraft and artistic convention — the period in which the institutions, the visual language, and the theological system of pharaonic Egypt were established.`,
        keyArtists: [],
        keyWorks: [
          { id: "narmer-palette", title: "Narmer Palette", why: "The founding document of Egyptian art — every convention already present, fully formed, in a single ceremonial object from 3100 BC" },
        ],
        prevMovement: null,
        nextMovement: { id: "old-kingdom", name: "Old Kingdom" },
      },
      {
        id: "old-kingdom",
        name: "Old Kingdom",
        dates: "c. 2686–2181 BC",
        parentCivilization: "Ancient Egypt",
        parentId: "egypt",
        color: "#D4A843",
        tagline: "The age of pyramids — when Egypt decided its monuments should outlast time itself.",
        theMovement: `The Old Kingdom is the period of the great pyramids — the Stepped Pyramid of Djoser at Saqqara (the first monumental stone building in history), the pyramids of Giza, the Great Sphinx. It is the period in which Egyptian art reached its first and in many ways its definitive expression: the colossal, the eternal, the geometrically perfect. The pyramid is the most ambitious architectural form ever conceived — a mountain of stone built to shelter the body of one man for eternity, oriented with astronomical precision to the cardinal points, its limestone casing originally polished to reflect the sun like a beacon.

Old Kingdom sculpture set the canonical standard that all subsequent Egyptian art measured itself against. The seated statue of Khafre (c.2520 BC) in the Cairo Museum — the pharaoh enthroned, the falcon god Horus spreading his wings protectively around the royal head — is the definitive image of Egyptian royal power: absolute, eternal, serene. The faces are idealized but specific; the bodies are perfected but weighted; the whole composition expresses a theological conviction — that the pharaoh is simultaneously human and divine, mortal body housing an immortal ka.`,
        whatItBroke: `The Old Kingdom broke from the relatively modest funerary architecture of the Early Dynastic period and invented monumental stone construction on a scale that had never been attempted anywhere in the world. The shift from mud brick to limestone, from small mastaba tombs to the pyramid form, represents a quantum leap in architectural ambition and organizational complexity. The pyramid of Khufu — 2.3 million stone blocks averaging 2.5 tons each — required the coordination of tens of thousands of workers over two decades and a logistical system of extraordinary sophistication.`,
        whatItInvented: `The pyramid as architectural form — the most recognizable building shape in human history. The colossal royal statue — the pharaoh on a superhuman scale, embodying divine power. The mastaba and then the pyramid as funerary architecture — the physical guarantee of royal immortality. The ka statue — a sculptural double placed in the tomb to house the deceased's life force. The pyramid complex as a total architectural environment combining pyramid, mortuary temple, valley temple, and causeway.`,
        historicalContext: `The Old Kingdom collapsed around 2181 BC in what Egyptologists call the First Intermediate Period — a time of political fragmentation, famine, and social upheaval that lasted over a century. Ancient texts describe a world turned upside down: the social order dissolved, the pyramids robbed, the divine order of the pharaoh called into question for the first time. The causes were probably a combination of prolonged Nile flooding failures (linked to a global climate event around 2200 BC) and the political overextension of the central state. The pyramids still stand; the civilization that built them nearly did not survive.`,
        keyArtists: [],
        keyWorks: [
          { id: "great-sphinx", title: "Great Sphinx of Giza", why: "The largest monolithic statue in the world — a royal portrait on an inhuman scale, the pharaoh's face on a lion's body, guardian of the royal necropolis at Giza" },
        ],
        prevMovement: { id: "predynastic", name: "Predynastic & Early Dynastic" },
        nextMovement: { id: "middle-kingdom", name: "Middle Kingdom" },
      },
      {
        id: "middle-kingdom",
        name: "Middle Kingdom",
        dates: "c. 2055–1650 BC",
        parentCivilization: "Ancient Egypt",
        parentId: "egypt",
        color: "#C49830",
        tagline: "After the collapse, Egypt rebuilt itself — and made its most human art.",
        theMovement: `The Middle Kingdom emerged from the chaos of the First Intermediate Period — the century of fragmentation that followed the Old Kingdom's collapse — with a new dynasty, a new capital (Thebes), and a subtly transformed artistic sensibility. The royal portraits of the Middle Kingdom are the most psychologically compelling in all of Egyptian art: the pharaohs of the 12th Dynasty — Senusret III, Amenemhat III — are shown with lined, careworn faces that break decisively from the serene idealism of Old Kingdom royal portraiture. These are not gods in human form; they are men bearing the weight of divine responsibility.

This psychological complexity is new to Egyptian art and reflects the changed world that produced it. The First Intermediate Period had been a time of genuine social crisis — of drought, famine, political collapse, and the questioning of the divine order. The pharaohs who reunified Egypt understood that serene divine impassivity was no longer an adequate response to human suffering; their portraits show rulers who have suffered, who have struggled, who carry the burden of their office. It is the most moving royal portraiture of the ancient world.`,
        whatItBroke: `The Middle Kingdom broke from the serene idealism of Old Kingdom royal portraiture — from the convention that the pharaoh should be shown as eternally young, perfect, and divinely impassive. The careworn faces of Senusret III and Amenemhat III introduce psychological realism into Egyptian royal art for the first time, acknowledging that kingship is a burden as well as a glory. This was a response to the political and theological crisis of the First Intermediate Period — an attempt to present the pharaoh as a more human, more empathetic figure.`,
        whatItInvented: `Psychological portraiture in royal art — the king shown with the marks of age, care, and experience. The democratization of funerary art — texts and objects previously reserved for the royal dead became available to the non-royal elite, spreading the artistic tradition beyond the court. The literary golden age — Middle Egyptian became the classical form of the language, and works like the Story of Sinuhe and the Dialogue of a Man with His Soul established a literary tradition that Egyptian scribes would copy and study for over a thousand years.`,
        historicalContext: `The Middle Kingdom was Egypt's classical age — the period that later Egyptians looked back on as a golden time of cultural achievement and political stability. It ended with the Hyksos invasion — the arrival of West Asian peoples in the Nile Delta who established their own dynasty (the 15th) and ruled northern Egypt for over a century. The trauma of foreign rule under the Hyksos — the first time Egypt had been governed by non-Egyptians — produced the fierce nationalism and military expansionism of the New Kingdom that followed.`,
        keyArtists: [],
        keyWorks: [
          { id: "senusret-portrait", title: "Portrait of Senusret III", why: "The most psychologically complex royal portrait of ancient Egypt — a pharaoh's face lined with care and experience, breaking from the serene idealism of Old Kingdom convention" },
        ],
        prevMovement: { id: "old-kingdom", name: "Old Kingdom" },
        nextMovement: { id: "amarna", name: "Amarna Period" },
      },
      {
        id: "amarna",
        name: "Amarna Period",
        dates: "c. 1353–1336 BC",
        parentCivilization: "Ancient Egypt",
        parentId: "egypt",
        color: "#E8C050",
        tagline: "For 17 years, one pharaoh broke every rule of Egyptian art — and was erased from history for it.",
        theMovement: `The Amarna Period is the most radical stylistic revolution in three thousand years of Egyptian art — a brief, intense eruption of naturalism and emotional intimacy that overturned every canonical convention and was then systematically erased by the rulers who followed. The pharaoh Akhenaten — born Amenhotep IV, who changed his name to honor the sun disk Aten — abolished the traditional pantheon of Egyptian gods, moved the capital to a new city (Akhetaten, modern Amarna), and demanded a new art to go with his new theology.

Amarna art is instantly recognizable and unlike anything else in Egyptian tradition. The royal figures have elongated skulls, pendulous abdomens, wide hips, thin limbs, and full lips — a style so different from canonical Egyptian idealism that early scholars assumed it was a realistic depiction of a pathological condition (Marfan syndrome was proposed). It is more likely a theological statement: the pharaoh's body is shown as containing all of creation, male and female, above and below — a visual expression of Akhenaten's monotheistic theology in which Aten, the sun disk, is the only god and the pharaoh is his sole intermediary on earth.`,
        whatItBroke: `Amarna art broke from virtually every convention of Egyptian canonical art — the idealized body, the formal frontal pose, the emotional impassivity, the hierarchical separation of the royal family from ordinary human experience. The royal family was shown in unprecedented intimacy: Akhenaten and Nefertiti playing with their daughters, the king eating a roasted duck, the queen sitting on the king's lap. These images had no precedent in three thousand years of Egyptian royal art.`,
        whatItInvented: `A naturalistic idiom for the human body — elongated and stylized, but showing physical weight, movement, and emotional connection. The intimate royal scene — the king and queen as a couple, parents, human beings rather than divine archetypes. An art of sunlight — Amarna reliefs and paintings are flooded with the warm golden light of the Aten, shown as a sun disk with rays ending in hands that touch the royal family with life-giving energy.`,
        historicalContext: `Akhenaten's revolution ended with his death around 1336 BC. His successors — including the young Tutankhamun, whose name means "living image of Amun" (the god Akhenaten had abolished) — systematically dismantled everything he had built. The new city was abandoned, the temples demolished, Akhenaten's name erased from monuments and king lists. He was known to later Egyptians simply as "the criminal of Amarna." His existence was rediscovered by modern archaeology in the 19th century. The Bust of Nefertiti — found in the ruined workshop of the royal sculptor Thutmose at Amarna in 1912 — is the most celebrated survival of this briefly revolutionary tradition.`,
        keyArtists: [],
        keyWorks: [
          { id: "nefertiti", title: "Bust of Nefertiti", why: "The most reproduced work of ancient Egyptian art — a painted limestone portrait of extraordinary individual presence, found in the ruins of the Amarna sculptor's workshop in 1912" },
        ],
        prevMovement: { id: "middle-kingdom", name: "Middle Kingdom" },
        nextMovement: { id: "new-kingdom-egypt", name: "New Kingdom" },
      },
      {
        id: "new-kingdom-egypt",
        name: "New Kingdom",
        dates: "c. 1550–1070 BC",
        parentCivilization: "Ancient Egypt",
        parentId: "egypt",
        color: "#C9A84C",
        tagline: "Egypt at its most powerful, most imperial — and most secretly afraid of death.",
        theMovement: `The New Kingdom is the period of Egypt's greatest imperial expansion and its most celebrated artistic achievements. The pharaohs of the 18th, 19th, and 20th dynasties — Hatshepsut, Thutmose III, Akhenaten, Tutankhamun, Ramesses II — built on a scale that dwarfed their predecessors. The temple complexes of Karnak and Luxor, built and rebuilt over centuries, are the largest religious buildings ever constructed. The Valley of the Kings, cut into the limestone cliffs west of Thebes, holds the tombs of sixty-three pharaohs, their walls covered in the most elaborate funerary art ever produced. The Abu Simbel temples of Ramesses II — four colossal seated figures of the king, 20 meters high, carved directly from a sandstone cliff — are the most grandiose act of royal self-promotion in history.

New Kingdom art combines the canonical Egyptian tradition with a new energy and an new anxiety. The funerary paintings of the Valley of the Kings are more vivid, more complex, and more theologically elaborate than anything that preceded them — as if the New Kingdom pharaohs, ruling the most powerful empire on earth, were nonetheless more frightened of death than their pyramid-building predecessors. The Book of the Dead — collections of spells and instructions for navigating the afterlife — were produced in thousands of copies for anyone who could afford them, democratizing access to the funerary art tradition.`,
        whatItBroke: `The New Kingdom broke from the post-Amarna restoration of pure Old Kingdom convention and developed a more dynamic, more emotionally expressive style — particularly in the tomb paintings of the Valley of the Kings and the private tombs of Theban officials. The figures are more varied in pose, more naturalistic in movement, more specific in the details of daily life shown. New Kingdom tomb paintings are the richest source we have for understanding how educated Egyptians actually lived.`,
        whatItInvented: `The hypogeum — the underground rock-cut royal tomb, replacing the pyramid as the standard royal burial form, hidden in the Valley of the Kings. The colossal temple facade — the pylon entrance with flanking colossi, the standard form of Egyptian temple architecture. The Book of the Dead as a widely distributed funerary text. Monumental rock-cut architecture — Abu Simbel and the temple of Hatshepsut at Deir el-Bahari as supreme examples.`,
        historicalContext: `The New Kingdom ended with the Bronze Age Collapse of c.1200 BC — a mysterious, multi-generational catastrophe that destroyed virtually every major civilization in the Eastern Mediterranean simultaneously: the Hittite Empire, Mycenaean Greece, Ugarit, and many others all fell within a few decades. Egypt survived but never recovered its imperial power or its cultural confidence. The Valley of the Kings, sealed and forgotten, preserved the tombs of the New Kingdom pharaohs until Howard Carter found Tutankhamun's burial in 1922 — intact, untouched, the most spectacular archaeological discovery in history.`,
        keyArtists: [],
        keyWorks: [
          { id: "book-of-dead", title: "Book of the Dead", why: "The most ambitious funerary text tradition in history — thousands of individual copies produced over five centuries, each one a unique painted manuscript guiding its owner through the perils of the afterlife" },
        ],
        prevMovement: { id: "amarna", name: "Amarna Period" },
        nextMovement: null,
      },
    ],

    keyWorks: [
      { id: "narmer-palette", title: "Narmer Palette", date: "c. 3100 BC", location: "Egyptian Museum, Cairo" },
      { id: "great-sphinx", title: "Great Sphinx of Giza", date: "c. 2500 BC", location: "Giza Plateau, Egypt" },
      { id: "nefertiti", title: "Bust of Nefertiti", date: "c. 1345 BC", location: "Neues Museum, Berlin" },
      { id: "book-of-dead", title: "Book of the Dead", date: "c. 1550–50 BC", location: "Various museums" },
    ],

    facts: {
      duration: "~3,000 years — the longest continuous art tradition after prehistoric art",
      where: "Nile Valley, from the Delta to Nubia",
      medium: "Limestone and granite sculpture, tempera on plaster, papyrus painting, gold work",
      defining: "Conceptual truth over perceptual truth — the figure shown as the mind knows it, not as the eye sees it",
      legacy: "Influenced Greek, Roman, and all subsequent Western art; revived in every era of Egyptomania",
    },
  },

  // ═══ ANCIENT GREECE ═════════════════════════════════════════════
  {
    id: "greece",
    name: "Ancient Greece",
    dates: "c. 900–31 BC",
    tagline: "The invention of the human body as the measure of all beauty — and the foundation of everything that followed.",

    overview: `Ancient Greek art is the source from which the entire Western artistic tradition flows. The Renaissance was a rediscovery of Greek ideals. Neoclassicism was a return to Greek forms. Every academy of art in Europe for four hundred years trained its students by drawing from Greek originals or Roman copies. The idea that ideal beauty is found in the perfected human body, that proportion and harmony are the highest visual values, that the nude figure is the supreme subject of sculpture — all of these convictions originate in ancient Greece.

Greek art developed over roughly nine hundred years, from the geometric abstraction of the early Iron Age through the stiff frontality of the Archaic period to the supreme naturalism of the Classical period and the emotional intensity of the Hellenistic age. The trajectory is one of increasing naturalism — of art progressively closing the gap between the represented figure and the actual appearance of a human being in motion, in light, in space. By the time of Praxiteles and Lysippos in the 4th century BC, Greek sculptors had achieved a mastery of the human figure that would not be surpassed until Michelangelo, two thousand years later.`,

    whyItMattered: `Greek art's influence is so total that it is almost invisible — like the influence of gravity, it shapes everything without being noticed. The architectural orders (Doric, Ionic, Corinthian) that structure every neoclassical building from the US Capitol to the British Museum are Greek inventions. The portrait bust, the equestrian monument, the triumphal arch, the allegorical figure — all Greek. The very concept of the "masterpiece" as a work that achieves an ideal of perfection against which all others are measured is a Greek idea. When we say that something is "classical" — meaning balanced, proportioned, restrained — we are using a word that means "belonging to the highest class of Greek and Roman art."`,

    historicalContext: `Greek art flourished in the context of the city-state (polis) — small, intensely competitive political communities that sponsored art as a form of civic pride and religious devotion. Athens, Corinth, Sparta, Syracuse, Alexandria: each city had its temples, its sculptures, its painted pottery that expressed its particular identity and wealth. The Persian Wars (490–479 BC), in which the Greek city-states united to defeat the Persian Empire, produced a surge of civic confidence that funded the golden age of Athenian art — the Parthenon, Phidias's chryselephantine statues, the painted Stoa. The subsequent conquests of Alexander the Great (334–323 BC) spread Greek culture across the known world, creating the Hellenistic world in which Greek art absorbed and was transformed by Egyptian, Persian, and Near Eastern influences.`,

    movements: [
      {
        id: "archaic",
        name: "Archaic",
        dates: "c. 700–480 BC",
        parentCivilization: "Ancient Greece",
        parentId: "greece",
        color: "#8ABCE0",
        tagline: "The first Greek sculptures stand stiff and smiling — learning to be human.",
        theMovement: `Archaic Greek sculpture is immediately recognizable by two features: the kouros pose (a standing male figure, left foot forward, arms at sides, rigidly frontal) and the Archaic smile (a slight upward curve of the lips that appears on virtually all Archaic figures regardless of subject or context). Both features are borrowed from Egypt — the kouros pose is directly derived from Egyptian standing figures, and the smile is a convention indicating that the figure is alive rather than dead. Greek sculptors were learning from the most sophisticated sculptural tradition available to them, and the Archaic period is the story of their progressive departure from their Egyptian models toward something uniquely Greek.`,
        whatItBroke: `Archaic art broke from the geometric abstraction of the preceding Geometric period (c.900–700 BC), in which figures were represented as angular, schematic silhouettes, and moved toward organic naturalism. The process took two centuries — gradually the stiff kouros figure relaxed, the musculature became more anatomically correct, the smile disappeared, the pose varied. By 480 BC, the year of the Persian sack of Athens, Greek sculpture stood on the threshold of the Classical revolution.`,
        whatItInvented: `The kouros and kore — the canonical standing male and female figure types that established the conventions of monumental Greek sculpture. The narrative frieze — the continuous carved band running around the exterior of a temple telling a mythological story. Black-figure and then red-figure pottery painting — the most sophisticated ceramic art tradition of the ancient world, combining precise draftsmanship with complex mythological and everyday narratives.`,
        historicalContext: `The Archaic period coincided with Greek colonization across the Mediterranean — new city-states were founded in Sicily, southern Italy, the Black Sea coast, and North Africa, spreading Greek culture and bringing Greek artists into contact with Egyptian, Phoenician, and Lydian traditions. The word "Archaic" means "old-fashioned" — it was applied retrospectively by Greeks who saw this period as a preliminary to the Classical achievement, and by later art historians who agreed. But the Archaic period has its own beauty: there is something compelling about the frozen, smiling figures on the threshold of becoming fully human.`,
        keyArtists: [],
        keyWorks: [],
        prevMovement: null,
        nextMovement: { id: "classical", name: "Classical" },
      },
      {
        id: "classical",
        name: "Classical",
        dates: "c. 480–323 BC",
        parentCivilization: "Ancient Greece",
        parentId: "greece",
        color: "#7BA3C4",
        tagline: "The 150 years when Greek art achieved what no tradition before or since has quite matched: the perfect human figure.",
        theMovement: `The Classical period begins with a shock: the Persian sack of Athens in 480 BC, which destroyed the Acropolis and its temples. The rebuilding that followed — funded by the tribute of the Delian League and overseen by Pericles, with Phidias as artistic director — produced the Parthenon, the most perfect building ever constructed, and the chryselephantine statue of Athena that stood inside it (now lost). The Classical style that Phidias, Myron, and Polykleitos defined in the 5th century BC is characterized by a serene, idealized naturalism — figures that look like specific human beings but perfected, freed from the accidents and imperfections of actual bodies, expressing through physical form a philosophical conviction about the human ideal.`,
        whatItBroke: `Classical art broke decisively from the Archaic smile, the frontal stiffness, the sense of figures frozen in time. The Classical figure moves — or is caught in the moment of movement. Myron's Discobolus captures a discus thrower at the apex of his throw, every muscle in maximum tension. The contrapposto (weight shift) that Polykleitos codified in his Doryphoros (Spear-carrier) gave figures a natural, living asymmetry — weight on one leg, hip dropped, shoulder raised — that makes them look as if they have just taken a breath.`,
        whatItInvented: `Contrapposto — the weight-shift pose that gives the figure organic life and replaces the rigid frontality of the Archaic period. The lost-wax bronze casting technique perfected at a monumental scale — most original Classical bronzes are lost (melted down for weapons or metal), but the few that survive (the Riace Warriors, the Zeus of Artemision) show a mastery of the medium that is overwhelming. The idealized portrait — a likeness that preserves individual features while elevating them toward a universal human type.`,
        historicalContext: `The Classical period coincides with the Athenian golden age — the democracy of Pericles, the philosophy of Socrates, Plato, and Aristotle, the drama of Aeschylus, Sophocles, and Euripides. The Parthenon was built between 447 and 432 BC. The Peloponnesian War between Athens and Sparta (431–404 BC) ended with Athens's defeat and the end of its imperial power, but not its cultural dominance — the 4th century BC, after the defeat, produced Praxiteles and Scopas, whose more emotional, individualized style bridges the Classical and Hellenistic periods.`,
        keyArtists: [],
        keyWorks: [
          { id: "elgin-marbles", title: "Elgin Marbles (Parthenon)", why: "The supreme achievement of Classical Greek relief sculpture — 160 meters of continuous frieze showing the Panathenaic procession, each figure distinct, all together creating an image of civic life at its most idealized" },
          { id: "venus-de-milo", title: "Venus de Milo", why: "The most famous sculpture in the world after Michelangelo's David — a late Classical or early Hellenistic Aphrodite whose missing arms have become part of her mystique" },
        ],
        prevMovement: { id: "archaic", name: "Archaic" },
        nextMovement: { id: "hellenistic", name: "Hellenistic" },
      },
      {
        id: "hellenistic",
        name: "Hellenistic",
        dates: "c. 323–31 BC",
        parentCivilization: "Ancient Greece",
        parentId: "greece",
        color: "#6A90B0",
        tagline: "After Alexander: Greek art went global, got emotional, and stopped being serene.",
        theMovement: `The Hellenistic period begins with the death of Alexander the Great in 323 BC and ends with the Roman conquest of Egypt in 31 BC. Alexander's conquests had spread Greek culture from Greece to India, creating a cosmopolitan world in which Greek art absorbed Egyptian, Persian, and Asian influences while retaining its essential vocabulary. Hellenistic art is more dramatic, more emotional, more physically extreme than Classical art — figures twist in agony, faces contort in pain or ecstasy, compositions break from the balanced frontality of the Classical period into dynamic diagonals and complex spatial relationships. The Laocoön, the Winged Victory of Samothrace, the Pergamon Altar — these are works that demand an emotional response, that want to overwhelm the viewer rather than present an ideal for contemplation.`,
        whatItBroke: `Hellenistic art broke from the serene idealism of the Classical period — from the conviction that beauty required restraint, balance, and the suppression of extreme emotion. The Hellenistic world was larger, more diverse, more violent, and more anxious than the Classical city-states, and its art reflected that — embracing extremes of pathos and drama, depicting old age, childhood, drunkenness, and suffering as legitimate subjects, and exploring psychological states that Classical art had excluded.`,
        whatItInvented: `The Baroque — or rather, the Hellenistic Baroque: the use of extreme physical and emotional drama in sculpture, the complex multi-figure group in violent interaction, the theatrical diagonal composition. Genre subjects — old fishermen, children playing, drunken old women — as legitimate artistic subjects alongside gods and heroes. Portraiture that captured individual psychological character rather than idealized type. The colossal — the Colossus of Rhodes, the Pharos of Alexandria — scale as a statement of power and wonder.`,
        historicalContext: `The Hellenistic world was shaped by the successor kingdoms that emerged from Alexander's empire — the Ptolemies in Egypt, the Seleucids in Syria and Persia, the Attalids in Pergamon. Each court competed for cultural prestige by sponsoring art, architecture, and scholarship on an enormous scale. The Library of Alexandria, the Pergamon Altar, the Colossus of Rhodes were all Hellenistic achievements. The period ended with the progressive absorption of the Hellenistic kingdoms into the Roman Empire — but Roman art, in absorbing Greek art, preserved and transmitted it to the entire subsequent Western tradition.`,
        keyArtists: [],
        keyWorks: [
          { id: "laocoon", title: "Laocoön and His Sons", why: "The masterpiece of Hellenistic drama — three figures in the coils of sea serpents, every muscle at maximum tension, the father's face a study in anguish that Michelangelo ran to see when it was unearthed in 1506" },
        ],
        prevMovement: { id: "classical", name: "Classical" },
        nextMovement: null,
      },
    ],

    keyWorks: [
      { id: "elgin-marbles", title: "Elgin Marbles", date: "c. 440 BC", location: "British Museum, London" },
      { id: "venus-de-milo", title: "Venus de Milo", date: "c. 130–100 BC", location: "Louvre Museum, Paris" },
      { id: "laocoon", title: "Laocoön and His Sons", date: "c. 40–30 BC", location: "Vatican Museums, Rome" },
    ],

    facts: {
      duration: "~900 years from Geometric through Hellenistic periods",
      where: "Greece, Aegean islands, and colonies across the Mediterranean from Spain to the Black Sea",
      medium: "Marble and bronze sculpture, ceramic painting, fresco, mosaic",
      defining: "The ideal human body as the measure of all beauty — proportion, harmony, and naturalistic perfection",
      legacy: "The foundation of Western art — every European artistic revival began with a return to ancient Greece",
    },
  },

  // ═══ ROMAN EMPIRE ════════════════════════════════════════════════
  {
    id: "rome",
    name: "Roman Empire",
    dates: "c. 500 BC–476 AD",
    tagline: "Rome inherited Greece and conquered the world — then made art that was unmistakably its own.",

    overview: `Rome's relationship to Greek art was complicated from the beginning. The Romans conquered Greece, looted its temples and collections, shipped thousands of original Greek sculptures to Rome, employed Greek artists to decorate their houses and public buildings, and educated their children in Greek culture — while simultaneously insisting that Roman values (virtus, gravitas, pietas) were superior to Greek softness and frivolity. The result of this ambivalence was an art that is simultaneously deeply Greek and distinctively Roman — that absorbed Greek technical mastery and idealism while adding something Greece had largely avoided: the specific, the historical, the unflinching portrait of actual individual human beings.

Roman portraiture is the greatest tradition of psychological realism in ancient art. Where Greek portraiture idealized — raised the subject toward a universal human type — Roman portraiture individualized: showed the warts, the wrinkles, the jowls, the marks of age and experience and power. The verism of the Republican portrait bust — the old senator with his deeply lined face, his thinning hair, his air of weary authority — was a deliberate ideological statement: these are the faces of men who built an empire through hard work and self-discipline, not through beauty.`,

    whyItMattered: `Roman art shaped the visual culture of Western civilization more directly than any other ancient tradition, because Rome shaped Western civilization itself. Roman architecture — the arch, the vault, the dome, the basilica plan, the triumphal arch, the amphitheater — provided the structural and formal vocabulary from which all subsequent Western architecture developed. The Pantheon's dome was the largest in the world for 1,300 years. The basilica plan became the standard form of the Christian church. The triumphal arch became the model for every commemorative monument from the Arc de Triomphe to the Gateway Arch. Roman law, Roman urban planning, Roman engineering — all expressed in physical form — are still the infrastructure of Western civilization.`,

    historicalContext: `Rome grew from a small city-state on the Tiber to the ruler of the entire Mediterranean world over roughly five hundred years — a process of conquest, assimilation, and administrative genius that has no parallel in history. The Republic (509–27 BC) was governed by a senate of aristocratic families who competed for prestige through military achievement and public building. The Empire (27 BC–476 AD) concentrated power in the hands of successive emperors, each of whom used art and architecture on an enormous scale to legitimize their rule. The fall of the Western Empire in 476 AD — when the last Roman emperor was deposed by a Germanic chieftain — ended one world and began another, but Roman art survived in the monuments, the collections, and the cultural memory that shaped the entire subsequent history of European art.`,

    movements: [
      {
        id: "republican",
        name: "Republican",
        dates: "c. 509–27 BC",
        parentCivilization: "Roman Empire",
        parentId: "rome",
        color: "#C07070",
        tagline: "The faces of the men who built an empire — rendered without mercy.",
        theMovement: `Republican Roman art is dominated by portraiture of a radical realism — the veristic portrait bust that shows its subject aged, lined, and specific in a way that Greek art had never attempted. The Republican aristocracy had a tradition (the ius imaginum) of keeping wax death masks of distinguished ancestors and displaying them in the atrium of the family house — a literal archive of family history worn on the faces of the dead. The portrait bust translated this tradition into marble, creating images of extraordinary psychological immediacy. These are not beautiful faces; they are powerful ones.`,
        whatItBroke: `Republican portraiture broke decisively from the Greek tradition of idealized portraiture — from the convention that a portrait should present its subject at their best, purified of the marks of age and imperfection. Roman verism proposed the opposite: that the marks of age, experience, and character were precisely what a portrait should preserve, because they were the visible evidence of the virtues (courage, endurance, self-discipline) that Roman aristocratic culture most valued.`,
        whatItInvented: `Veristic portraiture — the unflinching realistic depiction of individual faces with all their marks of age and character. The continuous narrative relief — the Ara Pacis (Altar of Peace, 13–9 BC) shows the imperial family and Roman dignitaries in a continuous frieze that combines mythological and historical subjects with a naturalism and spatial depth that Greek relief sculpture had never achieved.`,
        historicalContext: `The Roman Republic ended in a century of civil wars — the conflicts between Marius and Sulla, Caesar and Pompey, Octavian and Antony — that destroyed the aristocratic system that had produced Republican portraiture and replaced it with the imperial system of Augustus. The Augustan age transformed Roman art as completely as it transformed Roman politics.`,
        keyArtists: [],
        keyWorks: [],
        prevMovement: null,
        nextMovement: { id: "imperial", name: "Imperial" },
      },
      {
        id: "imperial",
        name: "Imperial",
        dates: "c. 27 BC–476 AD",
        parentCivilization: "Roman Empire",
        parentId: "rome",
        color: "#A85050",
        tagline: "The emperor as god — and the art that made millions believe it.",
        theMovement: `Imperial Roman art is the art of legitimacy — of making the concentration of absolute power in a single individual seem natural, inevitable, and divinely ordained. Augustus, the first emperor, understood that art was a tool of political communication on a scale his Republican predecessors had not imagined, and he used it accordingly. The Ara Pacis, the Forum of Augustus, the Prima Porta statue — all are carefully calculated statements about the nature of Augustan power, connecting it to the Trojan origins of Rome, the divine favor of Apollo, and the restoration of the moral order after a century of civil war.`,
        whatItBroke: `Imperial art broke from Republican verism in portraiture — Augustus was always shown young, healthy, and idealized regardless of his actual age, in deliberate emulation of Alexander the Great. The emperor's image, multiplied in thousands of copies across the empire, was a political instrument that required careful management. The shift from verism to idealization in the imperial portrait is one of the clearest examples in art history of a stylistic change driven by political necessity.`,
        whatItInvented: `The triumphal column — Trajan's Column (113 AD) is a 30-meter-high spiral relief showing the complete narrative of Trajan's Dacian campaigns, with over 2,500 figures. The technique of continuous narrative wrapped around a column had never been attempted before and has never been quite equaled since. The monumental bath complex (thermae) — buildings of engineering ambition and decorative richness that served as community centers, social venues, and displays of imperial generosity. The mosaic as a major art form — floor and wall mosaics of extraordinary technical sophistication covering the interiors of villas, baths, and public buildings across the empire.`,
        historicalContext: `The Imperial period saw Rome's power reach its maximum extent under Trajan (98–117 AD), followed by a long, gradual decline — military pressure on the frontiers, economic disruption, political instability, and the slow transformation of Roman culture through the spread of Christianity. The Edict of Milan (313 AD) legalized Christianity; Theodosius I made it the official religion of the empire in 380 AD. The conversion of Rome to Christianity was simultaneously the end of classical art and the beginning of medieval art — the same artists, working for new patrons, making images for a new theology.`,
        keyArtists: [],
        keyWorks: [
          { id: "augustus-prima-porta", title: "Augustus of Prima Porta", why: "The definitive imperial portrait — Augustus shown young, idealized, in the pose of a Greek general, his breastplate telling the story of his diplomatic and military achievements in miniature relief" },
          { id: "trajans-column", title: "Trajan's Column", why: "A 30-meter spiral relief showing the complete narrative of two military campaigns — the most ambitious continuous narrative in ancient art, and still standing in Rome after 1,900 years" },
        ],
        prevMovement: { id: "republican", name: "Republican" },
        nextMovement: null,
      },
    ],

    keyWorks: [
      { id: "augustus-prima-porta", title: "Augustus of Prima Porta", date: "c. 20 BC", location: "Vatican Museums, Rome" },
      { id: "trajans-column", title: "Trajan's Column", date: "113 AD", location: "Rome" },
      { id: "pantheon", title: "Pantheon", date: "125 AD", location: "Rome" },
    ],

    facts: {
      duration: "~1,000 years from the Republic through the fall of the Western Empire",
      where: "From Britain to Mesopotamia — the entire Mediterranean world and beyond",
      medium: "Marble sculpture, bronze casting, fresco, mosaic, concrete architecture",
      defining: "Power made permanent and visible — portrait realism, triumphal architecture, engineering as art",
      legacy: "Roman architecture, law, and urban planning remain the infrastructure of Western civilization",
    },
  },
];

// Flat list of all ancient movements for easy lookup in MovementPage
export const ANCIENT_MOVEMENTS: AncientMovement[] = ANCIENT_CIVILIZATIONS.flatMap(c => c.movements);

// Medieval Era — 3 civilizations · 8 movements
// Byzantine: Early Byzantine · Middle Byzantine · Late Byzantine
// Islamic Golden Age: Umayyad · Abbasid
// Medieval Europe: Romanesque · Gothic · Manuscript Illumination

export interface MedievalMovement {
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

export interface MedievalCivilization {
  id: string;
  name: string;
  dates: string;
  tagline: string;
  overview: string;
  whyItMattered: string;
  historicalContext: string;
  movements: MedievalMovement[];
  facts: {
    duration: string;
    where: string;
    medium: string;
    defining: string;
    legacy: string;
  };
}

// ── Byzantine ────────────────────────────────────────────────────────────────

const BYZANTINE_CIVILIZATION: MedievalCivilization = {
  id: "byzantine",
  name: "Byzantine",
  dates: "c. 330–1453 AD",
  tagline: "Rome became Christ — and its art turned toward eternity.",

  overview: `Byzantine civilization was the continuation of the Roman Empire in the East — recentered on Constantinople, the city Constantine founded in 330 AD on the Bosphorus between Europe and Asia. For over a thousand years, while the Western Roman Empire collapsed and was rebuilt in fragments, the Eastern Empire survived, evolving from a Roman state into something distinctly medieval and distinctly Christian: a civilization in which the emperor was the earthly image of God, the church was the supreme institution of social life, and art existed primarily to make the divine visible to human eyes.

Byzantine art is among the most immediately recognizable in the history of human culture. Its gold-ground mosaics, its hieratic icon paintings, its figures of supernatural stillness and formal elegance — these are images that have been contemplated by Orthodox Christians from Constantinople to Moscow to Athens for fifteen centuries. They are not primitive, not failed attempts at naturalism: they are a deliberately cultivated aesthetic of transcendence, in which the reduction of earthly particularity is a theological statement about the nature of divine reality.`,

  whyItMattered: `Byzantine art gave Western civilization the icon — the sacred image as devotional object, as window to the divine, as presence rather than representation. It transmitted Greek learning to the Renaissance through the Byzantine scholars who fled to Italy after the fall of Constantinople in 1453. Its gold-ground technique, its flat compositional style, and its hieratic figure types were the visual language of sacred art across Europe for a thousand years — from the mosaics of Ravenna to the panel paintings of Duccio and Cimabue that stand at the very beginning of the Italian tradition. Every painter who worked on a gold ground before Giotto was working in a Byzantine mode.`,

  historicalContext: `The Byzantine Empire occupied a unique position at the crossroads of Europe and Asia, heir to both the Roman administrative tradition and the Greek philosophical and artistic tradition. Its history was one of intermittent crisis and remarkable resilience — beset by Arab invasions from the 7th century, the Iconoclast controversy of the 8th and 9th centuries, the Latin occupation of Constantinople after the Fourth Crusade (1204–1261), and finally the Ottoman advance that ended the empire in 1453. Through all of this, Byzantine culture maintained an extraordinary continuity — the same image types, the same theological programs, the same dedication to the gold-ground mosaic and the painted icon that had been established in the age of Justinian.`,

  movements: [], // populated below
  facts: {
    duration: "c. 330–1453 AD (over 1,100 years)",
    where: "Constantinople, Ravenna, Greece, the Balkans, Russia",
    medium: "Gold-ground mosaic, fresco, encaustic and egg-tempera icon painting, ivory, enamel",
    defining: "Hieratic stillness — the deliberate suppression of naturalism in favor of transcendent symbolic presence",
    legacy: "The icon tradition, the Orthodox church plan, Byzantine manuscript illumination; direct influence on early Italian painting and the Slavic visual traditions",
  },
};

// ── Islamic Golden Age ────────────────────────────────────────────────────────

const ISLAMIC_CIVILIZATION: MedievalCivilization = {
  id: "islamic",
  name: "Islamic Golden Age",
  dates: "c. 661–1258 AD",
  tagline: "The world's greatest library — built on geometry, calligraphy, and the memory of Greece.",

  overview: `The Islamic Golden Age encompassed the first six centuries of Islamic civilization, from the Umayyad Caliphate centered on Damascus through the Abbasid golden age centered on Baghdad. In this period Islamic civilization created what was arguably the most sophisticated urban culture in the world — producing in mathematics, astronomy, medicine, philosophy, architecture, and the decorative arts achievements that Europe would not match until the Renaissance, and some that it has never surpassed.

Islamic art is distinct from all other great traditions in one fundamental respect: its primary medium is not the human figure but the pattern. Arabic calligraphy, geometric ornament, and the arabesque — the flowing interlaced plant scroll — replaced the figurative narrative that dominated Christian and Buddhist art with an art of pure formal abstraction that carries its meaning through the beauty of its structure rather than through representation. The mosque interior covered in muqarnas and arabesque, the manuscript illuminated with geometric interlace, the ceramic tile panel that extends its pattern infinitely in every direction — these are images that reward contemplation without narrating, that create an experience of ordered complexity that is simultaneously aesthetic and spiritual.`,

  whyItMattered: `Islamic civilization preserved and transmitted the Greek scientific and philosophical tradition to medieval Europe — the translation movement centered on Baghdad's House of Wisdom made Aristotle, Euclid, Galen, and Ptolemy available to European scholars who had lost direct access to the Greek texts. Islamic mathematicians invented algebra, developed trigonometry, and introduced the decimal number system to the West. Islamic architects invented the muqarnas, the pointed arch (which the Gothic borrowed), and the geometric tile program. Islamic decorative arts — ceramics, metalwork, textiles — set standards of technical and aesthetic excellence that shaped European luxury goods from the medieval period through the Renaissance.`,

  historicalContext: `The Islamic world in this period stretched from Spain to Central Asia, encompassing a vast diversity of peoples, languages, and cultures united by the Arabic language of the Quran and the shared practice of Islam. The Umayyad Caliphate (661–750 AD) established the first Islamic empire from Damascus; the Abbasid revolution moved the center to Baghdad and inaugurated a period of cosmopolitan cultural flowering. The catastrophic Mongol destruction of Baghdad in 1258 ended the Abbasid Caliphate and permanently shifted the center of the Islamic world — westward to Egypt and the Maghreb, northward to Turkey and Persia, eastward to Central Asia and India.`,

  movements: [], // populated below
  facts: {
    duration: "c. 661–1258 AD (roughly 600 years)",
    where: "Damascus, Baghdad, Cairo, Córdoba, Samarkand",
    medium: "Mosque architecture, lusterware ceramics, inlaid metalwork, manuscript illumination, geometric tile",
    defining: "The arabesque and geometric ornament — infinite pattern as spiritual contemplation",
    legacy: "Algebra, the pointed arch, the muqarnas, lusterware ceramics; the preservation and transmission of Greek learning to the European Renaissance",
  },
};

// ── Medieval Europe ───────────────────────────────────────────────────────────

const MEDIEVAL_EUROPE_CIVILIZATION: MedievalCivilization = {
  id: "medieval",
  name: "Medieval Europe",
  dates: "c. 1000–1400 AD",
  tagline: "Stone Bibles reaching toward heaven — built by anonymous hands over anonymous centuries.",

  overview: `Medieval European art encompasses the great building programs of the Romanesque and Gothic periods — the cathedrals, pilgrimage churches, and abbeys that transformed the European landscape between 1000 and 1400 AD — together with the manuscript illumination tradition that preserved and decorated the texts of both classical antiquity and Christian scripture. This was an art made entirely in service of religion: every cathedral, every fresco cycle, every illuminated Gospel book existed to make the Christian story visible and emotionally immediate to a population that could not read.

The defining achievement of medieval European art is the Gothic cathedral — a building type invented in the Île-de-France around 1140 that spread across the continent within a century, producing in France, England, Germany, and Spain buildings of extraordinary structural daring and visual beauty. The structural revolution of the pointed arch, the ribbed vault, and the flying buttress allowed medieval builders to achieve heights and lightness that no previous architectural tradition had attempted — to dissolve the solid stone wall into colored glass and make the church interior an image of the heavenly Jerusalem.`,

  whyItMattered: `Medieval European art established the visual language of Western Christianity that persisted from the 11th century to the Reformation and beyond — the Last Judgment over the west portal, the Virgin in the apse, the narrative cycles of Christ's life and Passion that covered every available surface in paint, mosaic, or stained glass. Its greatest individual achievement — the Gothic cathedral — is arguably the most ambitious building program in human history: over 300 years, the cities of France, England, and Germany devoted enormous collective resources to structures designed to last forever and reach toward heaven. The Chartres windows, the Amiens sculptural program, the vaults of King's College Chapel — these are among the supreme achievements of human art in any tradition.`,

  historicalContext: `The medieval period in Europe coincided with the slow recovery from the collapse of the Western Roman Empire — the gradual rebuilding of urban life, commercial exchange, and institutional complexity that culminated in the relative prosperity of the 12th and 13th centuries. The monastic reform movements of the 10th and 11th centuries — Cluniac, Cistercian, and later the mendicant friars — were the primary patrons and producers of art in the early medieval period. The growth of cities from the 12th century created new secular patrons and new audiences for art. The Black Death of 1347–51, which killed between a third and half of Europe's population, marks the psychological end of the Gothic world and the beginning of the profound cultural shift that would produce the Renaissance.`,

  movements: [], // populated below
  facts: {
    duration: "c. 1000–1400 AD",
    where: "France, England, Germany, Spain, Italy — the entire Latin Christian world",
    medium: "Stone architecture, stained glass, fresco, manuscript illumination, ivory carving, embroidery",
    defining: "Light as divine metaphor — the transformation of stone into glass in pursuit of a theological aesthetic",
    legacy: "The Gothic cathedral, the rose window, the historiated portal; the manuscript tradition that preserved classical antiquity; the narrative visual program that shaped European religious imagery for centuries",
  },
};

// ── Movements (from medieval-movements-full.ts) ───────────────────────────────

export const MEDIEVAL_MOVEMENTS: MedievalMovement[] = [

  // ── Byzantine ────────────────────────────────────────────────────────────

  {
    id: "early-byzantine",
    name: "Early Byzantine",
    dates: "c. 330–726 AD",
    parentCivilization: "Byzantine",
    parentId: "byzantine",
    color: "#9070C0",
    tagline: "Rome converted to Christ — and its art was transformed from the inside out.",

    theMovement: `Early Byzantine art is the art of transformation — of a Roman Empire in the process of becoming something entirely new. When Constantine moved the capital to Constantinople in 330 AD and made Christianity the favored religion of the empire, he set in motion a cultural revolution that took two centuries to complete. The earliest Christian art — the catacombs paintings of Rome, the sarcophagus reliefs, the ivory diptychs — used the visual language of Roman art to tell Christian stories. Christ appeared as the Good Shepherd carrying a lamb, in the pose of the classical Hermes Criophoros. The Last Supper was arranged like a Roman triclinium dinner. The language was Roman; the content was new.

By the 5th and 6th centuries, under the great building emperor Justinian (527–565 AD), a distinctly Byzantine visual language had emerged — one that deliberately moved away from Roman naturalism toward a more hieratic, symbolic mode. The great mosaics of Ravenna — San Vitale (547 AD), Sant'Apollinare in Classe, Sant'Apollinare Nuovo — show the culmination of this development: figures of extraordinary formal elegance, their feet barely touching the ground, their gold-ground setting abolishing any sense of earthly space, their faces turning toward the viewer with the impersonal authority of those who exist in eternity rather than time.`,

    whatItBroke: `Early Byzantine art broke from Roman naturalism — from the illusionistic space, the individualized portraiture, and the depiction of figures in credible three-dimensional environments that Roman art had perfected over five centuries. This was not technical regression but theological choice. A naturalistic image of Christ implies that Christ is merely human; a symbolic, hieratic image asserts his divine nature as beyond human comprehension. The gold ground that replaces the painted sky and landscape is not a background — it is divine light made visible.`,

    whatItInvented: `The gold-ground mosaic as the supreme medium for sacred art — tesserae of gold glass creating a surface that catches and transforms natural light rather than imitating it, the interior of the church becoming an image of heaven. The icon as a devotional object — a painted image of a sacred figure understood not as a representation but as a presence, a window through which the divine could be glimpsed. The centralized church plan topped by a dome — Hagia Sophia's dome, completed in 537 AD, floating on a ring of forty windows that made it appear to hover without support.`,

    historicalContext: `The Early Byzantine period coincided with the great theological councils that defined Christian doctrine — Nicaea (325), Constantinople (381), Ephesus (431), Chalcedon (451) — and with the barbarian invasions that destroyed the Western Roman Empire. While Rome fell to the Visigoths in 410 and the Western Empire dissolved in 476, Constantinople and the Eastern Empire survived and thrived. Justinian's ambition to reconquer the West led to the Italian campaigns that gave Ravenna its extraordinary Byzantine mosaics — the city was the Western capital of the Byzantine Empire from 402 to 751 AD.`,

    keyArtists: [],
    keyWorks: [
      { id: "ravenna-mosaics", title: "Ravenna Mosaics", why: "The supreme achievement of Early Byzantine art — figures of otherworldly elegance in a golden light that transforms the church interior into an image of paradise, preserved in extraordinary completeness" },
    ],
    prevMovement: null,
    nextMovement: { id: "middle-byzantine", name: "Middle Byzantine" },
  },

  {
    id: "middle-byzantine",
    name: "Middle Byzantine",
    dates: "c. 843–1204 AD",
    parentCivilization: "Byzantine",
    parentId: "byzantine",
    color: "#8060C0",
    tagline: "After a century of destroying images, Byzantium made the most beautiful ones.",

    theMovement: `The Middle Byzantine period begins with one of the most dramatic moments in the history of art: the Triumph of Orthodoxy on the first Sunday of Lent, 843 AD. For over a century — since the Emperor Leo III ordered the removal and destruction of religious images in 726 AD — the Byzantine Empire had been torn by the Iconoclast controversy: a bitter, sometimes violent theological and political struggle over whether images of Christ and the saints should be permitted at all. The Iconoclasts argued that images were idols, forbidden by scripture; the Iconophiles argued that images were windows to the divine, sanctified by the Incarnation. When the Empress Theodora finally restored icon veneration in 843, she did not merely end a controversy — she established the theological foundation for the entire subsequent tradition of Orthodox sacred art.

What followed was a golden age. The great mosaic programs of the 9th through 12th centuries — in Hagia Sophia itself, in the churches of Thessaloniki, in the Norman-Byzantine churches of Sicily (Cefalù, Monreale, the Cappella Palatina) — show Byzantine sacred art at its most serene, most hierarchically ordered, and most visually magnificent. The image types that had been worked out over centuries — the Christ Pantocrator in the dome, the Theotokos in the apse, the saints and angels in the vaults — were now placed with the precision of a theological argument, each image in its doctrinally correct position in the sacred geography of the church.`,

    whatItBroke: `The Middle Byzantine period resolved rather than broke — it resolved the Iconoclast crisis by establishing a clear, permanent theological justification for sacred images. In doing so it also established the extreme conservatism that characterizes Orthodox icon painting: to change the image is to change the theology. The image type is not an aesthetic preference but a theological statement, and the painter's task is not to express personal vision but to transmit received wisdom with the greatest possible technical perfection.`,

    whatItInvented: `The standardized icon types — Pantocrator, Theotokos Hodegetria (she who shows the way), Deesis, the standing saints — that define Orthodox sacred art to the present day. The iconostasis — the screen of icons that separates the nave from the sanctuary in Orthodox churches, which developed from a simple barrier into a complex theological program. The painted Gospel book as a prestige object — Middle Byzantine illuminated manuscripts with their gold grounds, their lapis lazuli blues, and their figures of extraordinary refinement are among the most beautiful books ever made.`,

    historicalContext: `The Middle Byzantine period saw the empire at its cultural peak under the Macedonian dynasty (867–1056 AD) — a period sometimes called the Byzantine Renaissance, marked by military expansion, administrative sophistication, and intense cultural production. The conversion of the Slavs — Bulgarians in 864, Russians in 988 — spread Byzantine art across Eastern Europe. The period ended catastrophically: the Fourth Crusade, diverted from its stated aim of recovering Jerusalem, sacked Constantinople in 1204 — the most shocking act of Christian-on-Christian violence in the medieval period, which the Byzantines never fully forgave or forgot.`,

    keyArtists: [],
    keyWorks: [
      { id: "christ-pantocrator", title: "Christ Pantocrator, Cefalù", why: "The defining image of Middle Byzantine sacred art — Christ as ruler of the universe, his right hand blessing and his left holding the Gospels, his gaze simultaneously compassionate and absolute" },
    ],
    prevMovement: { id: "early-byzantine", name: "Early Byzantine" },
    nextMovement: { id: "late-byzantine", name: "Late Byzantine" },
  },

  {
    id: "late-byzantine",
    name: "Late Byzantine",
    dates: "c. 1261–1453 AD",
    parentCivilization: "Byzantine",
    parentId: "byzantine",
    color: "#6A4AB0",
    tagline: "An empire dying — making its most human, most moving art.",

    theMovement: `The Late Byzantine period is the Indian summer of a civilization. The empire had been shattered by the Fourth Crusade in 1204 — Constantinople occupied by Latin crusaders for nearly sixty years, its treasures looted, its institutions disrupted. When the Byzantine emperor Michael VIII Palaeologus recaptured the city in 1261, he inherited a much reduced state: Constantinople itself, a few Greek territories, and the ghost of an empire. Surrounded by enemies — the Ottomans to the east, the Latins to the west, the Bulgarians and Serbs to the north — the Palaeologan dynasty presided over a brilliant cultural twilight.

The art of this period — called the Palaeologan Renaissance by art historians — is the most humanly accessible in the entire Byzantine tradition. The mosaics and frescoes of the Chora Church in Constantinople (c. 1315–21), commissioned by the statesman and scholar Theodore Metochites, show figures of unprecedented naturalism, spatial complexity, and emotional depth. The Anastasis (Resurrection) fresco in the Chora's side chapel — Christ descending into Hell, pulling Adam and Eve from their tombs with an almost violent energy, Satan bound beneath his feet — is arguably the greatest single painting of the medieval world. It has the weight, the drama, and the humanity of Giotto — though whether Giotto influenced it, or it influenced Giotto, or both responded independently to the same cultural pressures, remains debated.`,

    whatItBroke: `Late Byzantine art broke from the hieratic formalism of the Middle Byzantine period — from the absolute stillness, the frontal symmetry, the suppression of individual emotion — toward a new naturalism and psychological expressiveness. Figures turn, overlap, gesture toward each other, show genuine emotional responses to the sacred events they witness. This was not a rejection of Byzantine theology but a new approach to its visualization — one that understood emotional identification as a valid form of devotion alongside contemplative hieratic encounter.`,

    whatItInvented: `The Palaeologan style — a distinctly late Byzantine mode combining traditional hieratic conventions with a new naturalism, spatial depth, and emotional range that has clear affinities with contemporary Italian painting. Narrative cycles of unprecedented complexity and animation — the Chora Church's mosaics tell the complete lives of the Virgin and of Christ in dozens of scenes of extraordinary variety and invention. A bridge between Byzantine tradition and the Italian Renaissance that was broken by the Ottoman conquest before it could fully develop.`,

    historicalContext: `When Constantinople fell to Mehmed II on May 29, 1453, Byzantine scholars and artists fled westward — to Venice, Florence, and Rome. They brought Greek manuscripts, philosophical traditions, and artistic techniques that directly contributed to the Italian Renaissance. Cardinal Bessarion donated his library of Greek manuscripts to Venice; it became the foundation of the Biblioteca Marciana. The influence of these Byzantine refugees — and of the Byzantine artistic tradition that Italian painters had been studying for two centuries — on the Renaissance is real, complex, and still debated.`,

    keyArtists: [],
    keyWorks: [
      { id: "chora-anastasis", title: "Anastasis, Chora Church", why: "The greatest painting of the medieval world — Christ pulling Adam and Eve from Hell with the physical force of a man who has conquered death, the theological triumph made viscerally human" },
    ],
    prevMovement: { id: "middle-byzantine", name: "Middle Byzantine" },
    nextMovement: null,
  },

  // ── Islamic Golden Age ────────────────────────────────────────────────────

  {
    id: "umayyad",
    name: "Umayyad",
    dates: "c. 661–750 AD",
    parentCivilization: "Islamic Golden Age",
    parentId: "islamic",
    color: "#5A9C7A",
    tagline: "The first Islamic empire built on the ruins of Rome and Persia — and learned from both.",

    theMovement: `The Umayyad Caliphate, ruling from Damascus, presided over the first flowering of Islamic art — a tradition still in the process of finding its visual language, drawing on Byzantine, Sassanid Persian, and Roman sources while developing distinctly Islamic forms. The Dome of the Rock in Jerusalem, completed in 691 AD, is the earliest surviving Islamic monument and one of the most beautiful buildings ever constructed. It was built by the Caliph Abd al-Malik on the site of the Jewish Temple Mount — one of the most sacred sites in Judaism and Christianity — as a deliberate statement of Islamic theological and political authority. The structure is Byzantine in its centralized plan and mosaic technique; Persian in its decorative vocabulary; entirely Islamic in its integration of Quranic inscription as the primary decorative and theological element.

Umayyad art is the art of a civilization assembling itself from the materials of the civilizations it had conquered — taking Byzantine craft, Persian ornament, and Roman engineering and recombining them under the organizing principle of Islamic theology. The great Umayyad mosque of Damascus (705–715 AD), built on the site of a Roman temple that had become a Byzantine cathedral, retained the rectangular enclosure of its predecessors while transforming the interior into something new: a vast covered prayer hall with three parallel aisles, its mosaics showing paradisiacal landscapes of trees and rivers with no human figures — the first great statement of Islamic ornamental art.`,

    whatItBroke: `Umayyad art broke from — or rather emerged in complex relationship with — the figural traditions of Byzantine and Sassanid court art. Early Umayyad desert palaces (Qusayr Amra, Khirbat al-Mafjar) contain extensive figural paintings and sculptures including hunting scenes, bathing figures, and images of the caliph enthroned — suggesting that the restriction on figural representation in Islamic sacred art was a gradual development applying specifically to religious contexts rather than an immediate universal prohibition.`,

    whatItInvented: `The mosque as a distinct architectural type — the Friday mosque with its covered prayer hall, its open courtyard, its minaret for the call to prayer, and its mihrab indicating the direction of Mecca. Arabic calligraphy as monumental architectural decoration — the Quranic inscriptions of the Dome of the Rock, running around the inner octagonal arcade, are among the earliest examples of Arabic script used at architectural scale. The arabesque — the flowing, infinitely extendable interlaced plant-scroll ornament that became one of the defining decorative languages of Islamic art.`,

    historicalContext: `The Umayyad Caliphate at its greatest extent controlled territory from Spain and Portugal in the west to the borders of China and India in the east — the largest empire the world had yet seen, surpassing even Rome at its height. Its fall to the Abbasid revolution in 750 AD moved the center of Islamic civilization from Damascus to Baghdad, from a Syrian-Arab cultural dominance to a Persian-influenced cosmopolitan civilization. One branch of the Umayyad family escaped to Spain, where they established the Emirate of Córdoba — and eventually the Caliphate of Córdoba — producing the extraordinary Islamic culture of al-Andalus, whose monuments (the Alhambra, the Great Mosque of Córdoba) are among the supreme achievements of world architecture.`,

    keyArtists: [],
    keyWorks: [
      { id: "dome-of-rock", title: "Dome of the Rock, Jerusalem", why: "The earliest surviving Islamic monument — a building of such geometrical perfection and decorative richness that it remains the defining image of Islamic architectural ambition after 1,300 years" },
    ],
    prevMovement: null,
    nextMovement: { id: "abbasid", name: "Abbasid" },
  },

  {
    id: "abbasid",
    name: "Abbasid",
    dates: "c. 750–1258 AD",
    parentCivilization: "Islamic Golden Age",
    parentId: "islamic",
    color: "#4A8C6A",
    tagline: "The greatest library in the world, the most sophisticated city on earth — until the Mongols arrived.",

    theMovement: `The Abbasid Caliphate, centered on Baghdad — founded in 762 AD as the new imperial capital, designed as a perfect circle, called Madinat al-Salam, the City of Peace — presided over the high point of Islamic civilization. This was genuinely a golden age: a cosmopolitan, multilingual, multireligious society in which Muslim, Christian, Jewish, Zoroastrian, and Hindu scholars worked together in the House of Wisdom (Bayt al-Hikma), translating the entire corpus of Greek scientific and philosophical knowledge into Arabic, correcting its errors, and extending it in fundamental ways. While Western European scholars were struggling to preserve fragments of Latin learning, Baghdad's scholars were working with Plato, Aristotle, Euclid, Galen, Ptolemy, and Archimedes in Arabic translation — and producing their own work of comparable originality.

Abbasid art reflects this cosmopolitan confidence. The illustrated manuscripts of the 12th and 13th centuries — the Maqamat of al-Hariri, the Kalila wa Dimna, the Book of Fixed Stars — show a tradition of book illustration of extraordinary delicacy, wit, and narrative sophistication. The ceramics and metalwork of the Abbasid period are technically unmatched in the medieval world — lusterware pottery from Iraq and Iran, inlaid bronze vessels from Khorasan, carved rock crystal from Fatimid Egypt. The great mosques — Samarra (848–852 AD) with its extraordinary spiral minaret, Ibn Tulun in Cairo (876–879 AD) — are vast, austere, and geometrically perfect.`,

    whatItBroke: `Abbasid art broke from Umayyad art's relative conservatism — its lingering debt to Byzantine and Sassanid models — and developed a fully autonomous Islamic aesthetic, one in which the Persian cultural tradition (its love of complex ornament, its sophisticated literary culture, its refined court aesthetics) had been fully integrated. The shift from Damascus to Baghdad was also a shift from Arab to cosmopolitan: Abbasid culture was genuinely multilingual and multireligious in a way that Umayyad culture had not been.`,

    whatItInvented: `The madrasa — the Islamic school organized around a courtyard with iwans (vaulted halls) on each side, which became the standard form for educational architecture across the Islamic world from Morocco to Central Asia. The muqarnas — the honeycomb vaulting system that transforms the transition from wall to dome into a cascade of geometric prismatic forms, creating an effect of infinite complexity from simple repeated units. Lusterware ceramics — pottery painted with metallic oxides that, after a second firing in a reducing atmosphere, produce a shimmering golden or copper surface.`,

    historicalContext: `The Mongol invasion of 1258 ended the Abbasid Caliphate in an act of destruction so comprehensive it permanently changed the history of the Islamic world. Baghdad was besieged for twelve days; when it fell, the last Abbasid caliph was executed (wrapped in a carpet and trampled by horses, to avoid spilling royal blood), and an estimated 100,000 to 800,000 people were killed. The House of Wisdom's books — representing centuries of accumulated scholarship — were thrown into the Tigris, which ran black with ink for days. The city was not rebuilt to its former scale for centuries. The cultural consequences of the Mongol conquest of the Islamic heartland are still debated by historians.`,

    keyArtists: [],
    keyWorks: [
      { id: "alhambra", title: "Alhambra Palace, Granada", why: "The supreme achievement of Islamic architecture in the West — built by the Nasrid dynasty of Granada (1230–1492), a palace complex of overwhelming geometric beauty whose every surface is covered in muqarnas, calligraphy, and arabesque of inexhaustible intricacy" },
    ],
    prevMovement: { id: "umayyad", name: "Umayyad" },
    nextMovement: null,
  },

  // ── Medieval Europe ───────────────────────────────────────────────────────

  {
    id: "romanesque",
    name: "Romanesque",
    dates: "c. 1000–1150 AD",
    parentCivilization: "Medieval Europe",
    parentId: "medieval",
    color: "#708090",
    tagline: "The first pan-European art style — built for pilgrims, made to survive centuries.",

    theMovement: `Romanesque art and architecture — named for its use of the Roman round arch — was the first truly pan-European style, spreading along the great pilgrimage routes from Santiago de Compostela in Spain to Canterbury in England, from Cluny in Burgundy to Worms on the Rhine. The Romanesque church was built for pilgrims — designed to accommodate large crowds moving through the building to venerate relics, with wide aisles flanking the nave, ambulatories running around the apse to allow circulation without disrupting the liturgy, and radiating chapels providing multiple altars for the simultaneous celebration of masses. The architecture is characterized by massive walls, round arches, barrel vaults, and small windows — buildings that feel grounded, solid, and permanent, as different from the Gothic as earth from air.

The carved decoration of Romanesque churches is one of the great achievements of medieval art — the tympanum (the semicircular field over the main door) carved with the Last Judgment or the glorified Christ in Majesty, the historiated capitals (column capitals carved with narrative scenes) in the cloister, the carved facade programs of churches in Poitou and Saintonge. These carvings were a visual Bible for a largely illiterate congregation — telling the stories of scripture and the lives of saints in stone with an expressive force that owes nothing to classical idealism and everything to the direct communication of spiritual content.`,

    whatItBroke: `Romanesque art broke from the relatively modest, decentralized art production of the early medieval period — the small monastic scriptoria, the local craft workshops — and created a large-scale, architecturally integrated tradition that could fill the enormous new churches being built across Europe with a comprehensive program of carved stone, fresco, and mosaic. The scale of ambition — Santiago de Compostela, Cluny (at its completion the largest building in the Christian world), Durham, Speyer — had no precedent in the post-Roman West.`,

    whatItInvented: `The carved stone portal as a comprehensive theological statement — the tympanum with its Last Judgment, the lintel with its narrative scenes, the column figures of apostles and prophets, the carved archivolts of angels and elders. This form, invented in Burgundy around 1100 at churches like Vézelay and Autun, became the defining feature of French medieval church architecture and reached its greatest development in the Gothic portals of Chartres, Reims, and Notre-Dame. The typological program — the systematic correspondence between Old Testament scenes and New Testament events — as a comprehensive iconographic scheme organizing the entire decorative program of a church.`,

    historicalContext: `The Romanesque period coincided with the great monastic reform movements of the 10th and 11th centuries — particularly the Cluniac reform, which reorganized monastic life according to strict Benedictine principles and created a network of monasteries across Europe directly dependent on the great abbey of Cluny in Burgundy. By 1100, Cluny controlled over 1,000 monasteries and priories. The First Crusade (1096–99) opened European pilgrims and warriors to Byzantine and Islamic art and brought back objects, techniques, and ideas that fed directly into the decorative richness of late Romanesque art.`,

    keyArtists: [],
    keyWorks: [
      { id: "bayeux-tapestry", title: "Bayeux Tapestry", why: "Not a tapestry but an embroidered narrative 70 meters long — the most ambitious secular narrative artwork of the Romanesque period, telling the story of the Norman Conquest with the sequential energy of a modern graphic novel" },
    ],
    prevMovement: null,
    nextMovement: { id: "gothic", name: "Gothic" },
  },

  {
    id: "gothic",
    name: "Gothic",
    dates: "c. 1140–1400 AD",
    parentCivilization: "Medieval Europe",
    parentId: "medieval",
    color: "#607090",
    tagline: "The most ambitious building program in human history — 300 years of cathedrals reaching toward heaven.",

    theMovement: `Gothic art began with a specific building in a specific moment: the choir of the royal abbey church of Saint-Denis, north of Paris, rebuilt by the visionary Abbot Suger between 1140 and 1144. Suger's innovation was simultaneously technical and theological. By combining the pointed arch (which distributes weight more efficiently than the round arch) with the ribbed vault (which concentrates structural forces along the ribs) and the flying buttress (which transfers the outward thrust of the vaults to piers outside the building), he could reduce the thickness of the walls to near nothing — and fill the space with windows. The result was an interior flooded with colored light that Suger, drawing on the neo-Platonic theology of Pseudo-Dionysius the Areopagite, understood as a direct image of divine illumination. Lux nova, he called it — new light.

The Gothic style spread from the Île-de-France across Europe with extraordinary speed, reaching Germany, England, Spain, and Italy within a century. Each regional tradition developed its own character — French Gothic was the purest and most systematic, pursuing height and light to their structural limits; English Gothic was more horizontal and more decoratively elaborated, developing the fan vault and the Perpendicular style; German Gothic was the most monumental, producing the great hall churches and the spires of Cologne and Ulm; Italian Gothic was the most resistant, never fully abandoning the classical tradition.`,

    whatItBroke: `Gothic architecture broke from the heavy, massive, earth-bound quality of Romanesque — its thick walls, small windows, barrel vaults, and sense of solid permanence — and replaced it with lightness, height, and luminosity. The structural revolution of the pointed arch and flying buttress was designed specifically to achieve this effect: to make buildings that seemed to defy gravity, to dissolve stone into light, to make the earthly church an image of the heavenly Jerusalem.`,

    whatItInvented: `The flying buttress — the external arch that transfers the outward thrust of the roof vaults to free-standing piers outside the building, allowing the walls to be opened into windows. The rose window — the great circular window filled with stone tracery and stained glass that became the defining element of Gothic cathedral facades. The sculptural portal program — the integrated scheme of carved stone figures covering the doorways of Gothic cathedrals, the most ambitious public sculpture program since antiquity. Stained glass as a major art form — the 176 windows of Chartres Cathedral, covering 2,600 square meters, are among the greatest works of art ever made in any medium.`,

    historicalContext: `The Gothic period coincided with the high point of medieval European civilization — the 12th and 13th centuries saw the founding of the great universities, the synthesis of classical philosophy and Christian theology by Thomas Aquinas, the flowering of vernacular literature (Dante, Chaucer, the troubadour poets), and the economic growth of the cities that funded the great cathedral building programs. The Black Death of 1347–51, which killed between a third and half of Europe's population in three years, marks the psychological end of the Gothic world — the art that followed was already moving, in different ways, toward the Renaissance.`,

    keyArtists: [],
    keyWorks: [
      { id: "notre-dame", title: "Notre-Dame de Paris", why: "The archetypal Gothic cathedral — its three-portal facade, its two square towers, its rose windows, and its flying buttresses defining the Gothic aesthetic for the entire world" },
      { id: "chartres-windows", title: "Chartres Cathedral Windows", why: "176 stained glass windows covering 2,600 square meters — the most complete medieval glazing program surviving, the light filtering through them transforming the cathedral interior into a colored atmosphere that is simultaneously architecture and painting" },
    ],
    prevMovement: { id: "romanesque", name: "Romanesque" },
    nextMovement: { id: "manuscript", name: "Manuscript Illumination" },
  },

  {
    id: "manuscript",
    name: "Manuscript Illumination",
    dates: "c. 600–1400 AD",
    parentCivilization: "Medieval Europe",
    parentId: "medieval",
    color: "#506080",
    tagline: "The most intimate art of the Middle Ages — made for one pair of eyes, by candlelight, in a monastery.",

    theMovement: `Manuscript illumination — the decoration of handwritten books with painted images, ornamental borders, and enlarged initial letters — was the primary vehicle for pictorial art in the early medieval period, before the great age of church fresco and panel painting. In an age when books were produced entirely by hand, each copy requiring months or years of labor by trained scribes and painters, the illuminated manuscript was simultaneously a functional tool, a prestige object, a devotional instrument, and a work of art. The monasteries that produced them were the custodians of literacy in early medieval Europe — they preserved the texts of classical antiquity alongside the scriptures, and they produced the images that accompanied both.

The tradition spans eight centuries and an extraordinary range of styles — from the pure geometric abstraction of the Insular manuscripts (the Book of Kells, the Lindisfarne Gospels, the Book of Durrow) through the Byzantine-influenced court manuscripts of the Carolingian and Ottonian periods to the increasingly naturalistic painting of the Gothic period, culminating in works like the Très Riches Heures du Duc de Berry (c.1412–16), whose calendar illustrations show aristocratic and peasant life in each month of the year with a freshness, specificity, and atmospheric delicacy that anticipates Renaissance painting. The Limbourg brothers, who painted it, died in 1416, probably of plague, before it was completed.`,

    whatItBroke: `The Insular manuscripts broke completely from any residual classical naturalism — the figure style derived from late Roman painting that continued in Mediterranean manuscript traditions — and created a purely abstract visual language of extraordinary geometric and calligraphic complexity. The interlaced animal forms, the knotwork patterns, the zoomorphic initials of the Book of Kells have no precedent and no successor in any other tradition. They emerged from the meeting of Celtic, Germanic, and Christian cultures on the margins of Europe, in the monasteries of Ireland and Northumbria, and they represent one of the great original achievements of medieval art.`,

    whatItInvented: `The historiated initial — the enlarged first letter of a text that contains within it a narrative scene, transforming a typographic element into a painting. The full-page miniature — the image occupying an entire page opposite the text it illustrates, given the same weight and attention as the text. The carpet page — a full page of pure abstract ornament with no figurative element, the visual equivalent of sustained musical improvisation. The marginal scene — the small figures, animals, and grotesque hybrids that populate the margins of Gothic manuscripts, often in comic or ironic counterpoint to the sacred text above.`,

    historicalContext: `The transition from monastic to commercial manuscript production in the 13th century transformed illumination from a devotional practice performed by monks for their own communities into a commercial art produced by professional workshops for wealthy secular patrons. The Très Riches Heures — the most celebrated of all Books of Hours — was made for Jean, Duke of Berry, one of the richest men in Europe and a passionate collector who owned more illuminated manuscripts than any other contemporary patron. The invention of printing by Gutenberg around 1450 ended the manuscript tradition within a generation — the last great illuminated manuscripts were produced in the 1480s and 1490s, their painters aware that they were working in a tradition about to disappear.`,

    keyArtists: [],
    keyWorks: [
      { id: "book-of-kells", title: "Book of Kells", why: "The most elaborately decorated manuscript ever produced — its carpet pages and zoomorphic initials are among the supreme achievements of abstract ornament in any tradition, made on the edge of the known world around 800 AD" },
    ],
    prevMovement: { id: "gothic", name: "Gothic" },
    nextMovement: null,
  },
];

// ── Assign movements to civilizations ─────────────────────────────────────────

BYZANTINE_CIVILIZATION.movements = MEDIEVAL_MOVEMENTS.filter((m) => m.parentId === "byzantine");
ISLAMIC_CIVILIZATION.movements = MEDIEVAL_MOVEMENTS.filter((m) => m.parentId === "islamic");
MEDIEVAL_EUROPE_CIVILIZATION.movements = MEDIEVAL_MOVEMENTS.filter((m) => m.parentId === "medieval");

export const MEDIEVAL_CIVILIZATIONS: MedievalCivilization[] = [
  BYZANTINE_CIVILIZATION,
  ISLAMIC_CIVILIZATION,
  MEDIEVAL_EUROPE_CIVILIZATION,
];

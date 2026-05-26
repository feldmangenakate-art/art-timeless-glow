// artists-renaissance.ts
// Era 1 of 4: Renaissance
// 5 artists: Leonardo · Michelangelo · Raphael · Dürer · Titian
// portraitWikimedia: exact filename on Wikimedia Commons — download from:
// https://commons.wikimedia.org/wiki/File:[filename]
// All images are public domain

export interface Artist {
  id: string;
  name: string;
  born: string;
  died: string;
  nationality: string;
  movement: string;
  era: string;
  eraColor: string;
  portraitImage: string;       // local path after you download & upload
  portraitWikimedia: string;   // exact Wikimedia Commons filename to download
  tagline: string;             // one sentence shown on the tile
  biography: string;           // 2–3 paragraphs, narrative and warm
  shockingTruth: string;       // scandals, rumors, surprising facts — 2 paragraphs
  whyTheyMatter: string;       // legacy, influence — 1–2 paragraphs
  masterworksIds: string[];    // IDs from masterworks.ts for cross-linking
  collectionIds?: string[];   // IDs from collection.ts for cross-linking
}

export const RENAISSANCE_ARTISTS: Artist[] = [

  // ─── LEONARDO DA VINCI ────────────────────────────────────────

  {
    id: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    born: "April 15, 1452 · Vinci, Republic of Florence",
    died: "May 2, 1519 · Amboise, France · aged 67",
    nationality: "Italian",
    movement: "High Renaissance",
    era: "Renaissance",
    eraColor: "#C9A84C",
    portraitImage: "/artists/leonardo.jpg",
    portraitWikimedia: "Francesco_Melzi_-_Portrait_of_Leonardo.png",
    tagline: "The man who wanted to know everything — and nearly did.",

    biography: `Leonardo da Vinci was born illegitimate, the son of a Florentine notary and a peasant woman named Caterina. Illegitimacy barred him from the professions his father practiced, which may be why he turned to art — and why he turned art into something no profession could contain. Apprenticed at 14 to Andrea del Verrocchio in Florence, he so quickly surpassed his master that Verrocchio reportedly put down his brush and never painted again. By his mid-twenties Leonardo was already the most technically gifted painter in Italy, and already restless with painting alone.

He spent his life moving between courts — Florence, Milan, Venice, Rome, and finally France, where he died in the arms of King Francis I, who called him the greatest man who had ever lived. In Milan he served Ludovico Sforza as painter, sculptor, architect, military engineer, and entertainment designer. He filled thousands of notebook pages with observations on anatomy, geology, hydraulics, optics, botany, astronomy, and flight. He designed flying machines, armored vehicles, solar power concentrators, and a rudimentary robot. Almost none of it was built. Almost all of it was correct.

He painted fewer than 20 works that survive with certainty. Each one is a revolution. The Last Supper reinvented narrative painting. The Virgin of the Rocks invented atmospheric perspective. The Mona Lisa invented the modern portrait. He left most of his commissions unfinished — not from laziness but from an impossibly high standard. When Giorgio Vasari wrote his biography 30 years after Leonardo's death, he already understood that he was describing the defining genius of Western civilization.`,

    shockingTruth: `In 1476, when Leonardo was 24, he and three other young men were anonymously accused of sodomy with a 17-year-old male model named Jacopo Saltarelli. The case was brought twice before Florence's Officers of the Night — the morality police — and dismissed both times for lack of witnesses. Leonardo was never convicted, but the accusation hung over him. He never married, never had known relationships with women, and surrounded himself throughout his life with beautiful young male assistants, of whom Gian Giacomo Caprotti — nicknamed Salaì, "little devil" — lived with him for 30 years. Whether their relationship was sexual has been debated for centuries and never resolved.

Leonardo wrote almost nothing personal in his notebooks — they are observations about the world, not confessions about himself. But there is one extraordinary note, written in his 50s, that reads: "I have wasted my hours." The man who filled 13,000 pages with the most wide-ranging intelligence of the Renaissance thought he had not done enough. He also wrote, in mirror script as always: "Tell me if anything was ever done." It may be the most haunting question any artist ever asked.`,

    whyTheyMatter: `Leonardo did not found a school or a movement — he was too singular for that. His direct influence on painting was enormous: Raphael studied his cartoons obsessively, Michelangelo competed with him furiously, and every subsequent painter who used sfumato or atmospheric perspective was working in his shadow. But his deeper influence was on the idea of what an artist could be. Before Leonardo, painters were craftsmen. After Leonardo, they could be scientists, philosophers, visionaries — universal men. The Renaissance ideal of the uomo universale was, in practice, Leonardo.

His notebooks, rediscovered and gradually published from the 19th century onward, shaped how subsequent generations understood both art and science. Bill Gates purchased the Codex Leicester for $30.8 million in 1994. The Mona Lisa is the most visited painting in human history, protected behind bulletproof glass, seen by 10 million people a year — and still, somehow, intimate. That intimacy, that sense of a specific person looking back at you across 500 years, is Leonardo's greatest achievement.`,

    masterworksIds: ["mona-lisa", "last-supper"],
    collectionIds: ["lady-with-ermine", "virgin-of-the-rocks"],
  },

  // ─── MICHELANGELO ─────────────────────────────────────────────

  {
    id: "michelangelo",
    name: "Michelangelo Buonarroti",
    born: "March 6, 1475 · Caprese, Republic of Florence",
    died: "February 18, 1564 · Rome · aged 88",
    nationality: "Italian",
    movement: "High Renaissance / Mannerism",
    era: "Renaissance",
    eraColor: "#C9A84C",
    portraitImage: "/artists/michelangelo.jpg",
    portraitWikimedia: "Michelangelo_Daniele_da_Volterra_(dettaglio).webp",
    tagline: "Sculptor, painter, architect, poet — and the most furious genius who ever lived.",

    biography: `Michelangelo was sent to a wet nurse in a family of stonecutters as an infant, and always said he had absorbed his love of marble with her milk. His father, a minor Florentine official who considered art beneath their family's dignity, beat him for wanting to draw. He was apprenticed at 13 to the painter Domenico Ghirlandaio, left after a year — having learned everything — and was taken into the household of Lorenzo de' Medici, where he ate at the same table as humanist philosophers and learned that art was a form of thought, not just a craft. He was 15 years old.

By 21 he had carved the Pietà. By 26, the David. At 33, reluctantly and furiously, he began the Sistine Chapel ceiling — a project he had tried to refuse, considering himself a sculptor, not a painter. He completed it in four years. At 60 he was appointed chief architect of St. Peter's Basilica and redesigned its dome, which still defines the Rome skyline. He was working on his final Pietà, the Rondanini, six days before his death at 88. In between he wrote hundreds of sonnets, carried on a decades-long passionate correspondence with the noblewoman Vittoria Colonna, and fought with virtually every pope, patron, and rival he encountered.

He was not a pleasant man. He was suspicious, miserly, solitary, and consumed with a terror of death and a desperate hunger for transcendence that drove everything he made. He slept in his clothes and boots, rarely bathed, and ate almost nothing. He also produced, in a single lifetime, more great works than any artist in history.`,

    shockingTruth: `Michelangelo was almost certainly gay, and this was an open secret in Renaissance Rome — dangerous enough that his grand-nephew, after his death, systematically changed the pronouns in his love sonnets from male to female before publishing them. The sonnets were addressed to a young nobleman named Tommaso de' Cavalieri, whom Michelangelo met in 1532 when he was 57 and Tommaso was 23. He wrote him over 300 letters, drew him portraits of mythological scenes of breathtaking beauty, and described his feelings in terms of ecstatic devotion: "With your fair eyes I see a gentle light / which with my blind ones I could never see." Whether the relationship was physical is unknown — the letters are passionate but carefully non-explicit. Tommaso stayed loyal and was present at Michelangelo's deathbed.

He was also the victim of one of art history's greatest acts of vandalism — and caused one himself. In 1972 a mentally ill Hungarian geologist named Laszlo Toth attacked the Pietà with a hammer, striking 15 blows before being stopped, breaking off Mary's arm and damaging her face. The work was restored using fragments gathered by visitors. As for Michelangelo's own act: when Pope Julius II commissioned him to paint the Sistine ceiling, Michelangelo secretly painted his rival Bramante's face on one of the damned souls in Hell. Bramante had recommended him for a project he didn't want, possibly trying to embarrass him. Michelangelo got his revenge 65 feet overhead, where it remained for centuries before being identified.`,

    whyTheyMatter: `Michelangelo's influence on Western art is so total it is almost invisible — like the influence of gravity. Every sculptor who came after him worked either in his tradition or in explicit reaction against it. The heroic male nude, the contrapposto figure, the sense of figures straining against their own material — these are Michelangelo's inventions, and they defined European sculpture for 400 years. His architecture — the Laurentian Library staircase, the Capitoline Hill, the dome of St. Peter's — invented Mannerism and pointed toward the Baroque.

What makes him genuinely unique is the combination of physical perfection and spiritual anguish. His figures are the most beautiful bodies ever rendered in marble, and they are always in pain — straining, twisting, reaching for something just beyond their grasp. That combination — the idealized body as the site of spiritual struggle — is specifically Christian and specifically Michelangelo's, and it has never been equaled.`,

    masterworksIds: ["sistine-ceiling", "creation-of-adam", "david"],
  },

  // ─── RAPHAEL ──────────────────────────────────────────────────

  {
    id: "raphael",
    name: "Raphael Sanzio",
    born: "April 6, 1483 · Urbino, Duchy of Urbino",
    died: "April 6, 1520 · Rome · aged 37",
    nationality: "Italian",
    movement: "High Renaissance",
    era: "Renaissance",
    eraColor: "#C9A84C",
    portraitImage: "/artists/raphael.jpg",
    portraitWikimedia: "Raffaello_Sanzio.webp",
    tagline: "He died on his birthday at 37, having achieved more perfection than anyone before or since.",

    biography: `Raphael was born in Urbino, a small but remarkably cultivated ducal court where his father Giovanni Santi was court painter and poet. He lost both parents before he was 12, but the early immersion in court culture — music, poetry, philosophy, elegant social intercourse — shaped him permanently. He was sociable where Leonardo was solitary, collaborative where Michelangelo was isolated, and serene where Goya was tormented. Vasari called him "so gifted that nature could not have made a better human being." He was also, by all accounts, extraordinarily good-looking and charming, which didn't hurt.

Apprenticed first in Urbino, then in Perugia under Perugino, he arrived in Florence in 1504 at age 21 and spent four years systematically studying Leonardo and Michelangelo — absorbing Leonardo's sfumato and psychological depth, learning from Michelangelo's monumental figures. He didn't copy them; he synthesized them into something entirely his own: a classical serenity and formal perfection that makes his compositions look inevitable, as if they could not have been arranged any other way. In 1508 Pope Julius II summoned him to Rome to decorate the Vatican Stanze. He was 25 years old and had never worked at this scale. The School of Athens, finished when he was 28, is still considered the perfect expression of Renaissance humanism.

He died suddenly on April 6, 1520 — his 37th birthday — after a brief fever. The cause was probably pneumonia, though his contemporaries suspected he had exhausted himself with overwork and an excess of romantic activity. Rome was devastated. The Pope wept. Raphael was laid in state in his studio with his last unfinished painting — the Transfiguration — placed behind his head. He was buried in the Pantheon, where his tomb still draws visitors.`,

    shockingTruth: `Raphael's death sparked one of the great scandals of Renaissance Rome. His biographers, including Vasari, hinted that he died from exhaustion after an unusually intense night with his long-term mistress, the baker's daughter Margherita Luti — known as La Fornarina, "the baker's girl." He had been obsessively devoted to her for years, reportedly unable to work without her present, and had included her in multiple paintings including a celebrated portrait in which she wears an armband inscribed "RAPHAEL URBINAS" — his name, like a brand of ownership. Whether he loved her or was simply obsessed is debated. What is certain is that he never married her, despite his wealth and status, and that when he died he left her nothing in his will.

He was also the most socially successful artist of his age in a way that bordered on scandalous to his more ascetic contemporaries. While Michelangelo ate bread and onions alone in his studio, Raphael maintained a household of 50 assistants and apprentices, attended papal banquets, was engaged to a cardinal's niece (whom he kept deferring from marrying), and moved through Roman high society with the ease of a born aristocrat. Michelangelo reportedly called him a "mere painter" who had learned everything from watching others. Raphael's response, visible in the School of Athens, was to paint Michelangelo's face on the figure of Heraclitus — the brooding, solitary philosopher — and put his own face among the sociable, curious crowd.`,

    whyTheyMatter: `Raphael established the visual grammar of Western religious painting for 300 years. His Madonnas — calm, tender, perfectly composed — became the template for the devotional image across Catholic Europe, reproduced in engravings and paintings in every country from Spain to Poland. The School of Athens established the idea of the great painting as a gathering of minds — an image of civilization thinking about itself — that has been referenced ever since.

His death at 37 made him a symbol of unfulfilled genius, the counterpoint to Leonardo's unfinished projects and Michelangelo's extreme longevity. What he achieved in those 37 years — the Vatican Stanze, the Sistine Madonna, the Transfiguration, the portraits, the architectural projects — would constitute a full career for any other artist. For Raphael it was a beginning cut short. "How much more he would have done," Vasari wrote, "God alone knows."`,

    masterworksIds: ["school-of-athens"],
    collectionIds: ["sistine-madonna", "transfiguration"],
  },

  // ─── ALBRECHT DÜRER ───────────────────────────────────────────

  {
    id: "albrecht-durer",
    name: "Albrecht Dürer",
    born: "May 21, 1471 · Nuremberg, Holy Roman Empire",
    died: "April 6, 1528 · Nuremberg · aged 56",
    nationality: "German",
    movement: "Northern Renaissance",
    era: "Renaissance",
    eraColor: "#C9A84C",
    portraitImage: "/artists/durer.jpg",
    portraitWikimedia: "Albrecht_Dürer_-_1500_self-portrait_(High_resolution_and_detail).webp",
    tagline: "The first artist to paint himself as God — and the most technically perfect draughtsman who ever lived.",

    biography: `Albrecht Dürer grew up in Nuremberg, the third of eighteen children of a goldsmith who had emigrated from Hungary. He was trained in his father's workshop from age 13, learning the goldsmith's precision — the exact, controlled line, the mastery of fine tools — that would characterize everything he ever made. He then apprenticed with the painter and woodcut designer Michael Wolgemut, and at 19 set out on his Wanderjahre — the traditional journeyman's travels — that took him to the Rhine valley and eventually, in 1494 and again in 1505, to Italy.

Those Italian journeys transformed him. He arrived as the greatest craftsman in Northern Europe; he returned as the first Northern artist with a fully Renaissance consciousness — an artist who understood perspective scientifically, who thought about proportion theoretically, who saw himself as a creative intellectual rather than a skilled tradesman. He wrote treatises on measurement, proportion, and fortification. He corresponded with Erasmus and Luther. He was the first Northern artist to achieve pan-European fame in his own lifetime, primarily through his prints — his woodcuts and engravings were reproduced and sold across the continent in the thousands, making him effectively the first artist whose work was widely distributed as multiples.

He was also one of the first artists to consistently sign and date his work, to maintain detailed written records of his prices and sales, and to assert the artist's intellectual ownership of his images. When he discovered that Italian artists were copying his prints without credit or payment, he took legal action — an almost unprecedented step in 1500. He won.`,

    shockingTruth: `The 1500 Self-Portrait in Munich — the one in which Dürer depicts himself in the full-frontal pose reserved exclusively for images of Christ — is the most theologically audacious act in the history of portraiture. It was not a blasphemy (he was a devout Christian) but a claim: that the creative artist participates in divine creation, that the act of making images is sacred, that the artist is made in God's image most fully when making. He inscribed it: "I, Albrecht Dürer of Nuremberg, portrayed myself thus, with undying colors, at the age of 28." The phrase "undying colors" is the giveaway — this is a bid for immortality, a claim to be remembered forever. He was 28 years old and already thinking about eternity.

His marriage to Agnes Frey, arranged by their fathers in 1494, was almost certainly unhappy. Dürer's letters from his travels — particularly his extraordinary diary of his trip to the Netherlands in 1520–21 — mention Agnes rarely and without warmth. He was far more animated by the company of Erasmus, by the sight of Aztec objects brought back by Cortés ("I have never seen anything that has delighted my heart so much"), by the religious crisis of the Reformation, and by his grief at the news that Luther had been captured: "Oh God, if Luther is dead, who will explain the Holy Gospel to us?" He was deeply moved by Luther's challenge to the Church, though he never fully committed to the Reformation — he was too careful, too Nuremberg-civic, for that.`,

    whyTheyMatter: `Dürer bridged two worlds: the medieval craft tradition of the North and the humanist intellectual revolution of the Italian Renaissance. Before him, Northern European art was technically superb but theoretically unself-conscious — craftsmen making beautiful things without theorizing about beauty. After him, it was possible for a German, a Flemish, an English artist to think like a Renaissance man — to see art as science, as philosophy, as a form of knowledge.

His prints — particularly the Three Master Engravings of 1513–14 (Knight, Death and the Devil; Saint Jerome in His Study; Melencolia I) — are the most intellectually ambitious graphic works ever made, dense with symbolic meaning that scholars are still unpacking. Melencolia I in particular, with its brooding winged figure surrounded by the tools of geometry and construction, has been interpreted as a self-portrait, a meditation on creative frustration, an astrological allegory, and a statement about the limits of human knowledge. It is the Northern Renaissance in a single image.`,

    masterworksIds: ["self-portrait-durer"],
    collectionIds: ["young-hare", "praying-hands"],
  },

  // ─── TITIAN ───────────────────────────────────────────────────

  {
    id: "titian",
    name: "Tiziano Vecelli (Titian)",
    born: "c. 1488–1490 · Pieve di Cadore, Republic of Venice",
    died: "August 27, 1576 · Venice · aged ~86–88",
    nationality: "Italian (Venetian)",
    movement: "Venetian Renaissance",
    era: "Renaissance",
    eraColor: "#C9A84C",
    portraitImage: "/artists/titian.jpg",
    portraitWikimedia: "Titian_-_Self-Portrait_(Prado)_2.webp",
    tagline: "The painter who made color itself the subject — and taught every artist who came after him how to use it.",

    biography: `Titian was born in the Dolomite foothills north of Venice, the son of a local official, and sent to Venice as a boy to train as a painter. He entered the workshop of the Bellini family — the dominant painters of Venice — and then worked alongside Giorgione, the most innovative Venetian painter of the early 16th century, until Giorgione's early death in 1510 left Titian as the undisputed master of Venetian painting at around age 22. He would hold that position for the next 65 years.

Venice in the 16th century was the wealthiest city in Europe, a maritime empire whose merchants were simultaneously patrons of extraordinary taste and sophistication. For Titian this meant an unending stream of commissions from the Venetian nobility, the Doge, the Church, and eventually the crowned heads of Europe. Holy Roman Emperor Charles V sat for him three times and awarded him the title of Count Palatine — a distinction never previously given to a painter. Philip II of Spain became his most important patron, receiving over 40 paintings including the celebrated mythological series of poesie — painted poems based on Ovid that are among the most beautiful and erotically charged canvases in the history of art.

He lived and worked into his late eighties — a span of productivity almost without parallel — and his late works, painted with increasingly loose, almost abstract brushwork, anticipate Impressionism and even Abstract Expressionism. He died during a plague epidemic in Venice in 1576, one of the few plague victims to receive a church burial, in recognition of his singular greatness.`,

    shockingTruth: `Titian was extraordinarily shrewd about money — some said ruthlessly so. He systematically inflated his age, claiming to have been born in 1477 rather than the probable 1488–90, in order to appear even more venerable and thus more expensive. He negotiated his fees with the tenacity of a merchant, once holding up the delivery of a painting to Philip II of Spain for three years in a dispute over payment. He ran his studio as an efficient production business, with assistants working up compositions from his sketches and Titian adding the finishing touches — a practice common in the Renaissance but one he carried further than most. Some canvases sold as "by Titian" were mostly by his workshop, a fact that generated lawsuits and disputes even in his own lifetime.

His relationship with his illegitimate son Orazio was close and warm, but his treatment of his legitimate son Pomponio was one of the great disappointments of his life — Pomponio was irresponsible, dissolute, and eventually sold off most of Titian's estate after his father's death to pay his gambling debts. More poignant was the death of his beloved wife Cecilia, who died in 1530 after giving birth to their third child, leaving him a widower at around 40. He never remarried and threw himself into work with a productivity that reads, in retrospect, like grief transformed.`,

    whyTheyMatter: `Titian's influence on European painting is second only to Michelangelo's — and in one crucial area, greater. Where Michelangelo defined the possibilities of form, Titian defined the possibilities of color. His innovation was to treat paint itself — its texture, its layering, its capacity to create the illusion of different surfaces — as the primary expressive medium. Before Titian, painters used color to fill in forms defined by drawing. After Titian, color could create form, define space, generate emotion. Rubens copied his paintings obsessively. Velázquez made a special trip to Venice to study them. Rembrandt built his golden darkness on Titian's foundation. Van Dyck, Reynolds, Gainsborough — the entire tradition of European portraiture runs through him.

The Venus of Urbino in particular has a strange immortality. Manet painted a direct confrontation with it in Olympia (1863). Every reclining nude in Western art since 1538 — whether acknowledged or not — is in dialogue with Titian's relaxed, direct, completely un-self-conscious figure, who looks back at the viewer with an expression of absolute composure. She is, as the art historian Rona Goffen wrote, "the most influential painting in the history of the nude."`,

    masterworksIds: ["venus-of-urbino"],
    collectionIds: ["bacchus-ariadne", "assumption-virgin", "sacred-profane-love"],
  },

  // ─── JAN VAN EYCK ─────────────────────────────────────────────────────────

  {
    id: "jan-van-eyck",
    name: "Jan van Eyck",
    born: "c. 1390 · Maaseik, Flanders",
    died: "July 9, 1441 · Bruges, Flanders · aged approximately 50",
    nationality: "Flemish",
    movement: "Early Netherlandish",
    era: "Northern Renaissance",
    eraColor: "#B09040",
    portraitImage: "/artists/van-eyck.webp",
    portraitWikimedia: "Portrait_of_a_Man_by_Jan_van_Eyck.jpg",
    tagline: "He perfected oil painting so completely that two centuries of painters believed he had invented it.",

    biography: `Jan van Eyck did not invent oil painting — but he perfected it so completely that for two centuries painters believed he had. Working in Bruges at the court of Philip the Good, Duke of Burgundy, he developed a technique of layering translucent oil glazes that could achieve a depth, luminosity, and detail impossible in tempera. His surfaces glow as if lit from within — the velvet looks like velvet, the fur looks like fur, the gold looks like it could be lifted from the panel.

Very little is known about his early life. He was born around 1390, probably in Maaseik in what is now Belgium, and first appears in historical records as court painter to John of Bavaria in The Hague in 1422. By 1425 he had entered the service of Philip the Good of Burgundy — the most powerful ruler in Northern Europe — who valued him so highly that he paid him a salary four times that of other court artists and sent him on diplomatic missions, including a secret embassy to Portugal to paint a portrait of the princess Philip intended to marry.

He settled in Bruges around 1430 and remained there until his death in 1441. His output was not large — roughly two dozen surviving works with confident attribution — but every one is a revolution in the history of seeing. The Ghent Altarpiece, completed in 1432, is the largest and most complex panel painting of the early 15th century. The Arnolfini Portrait, made in 1434, invented the domestic interior as a subject for serious art.`,

    shockingTruth: `Van Eyck's most famous painting generates one of art history's most contested debates: who, exactly, is in the Arnolfini Portrait? The couple were traditionally identified as the Italian merchant Giovanni di Nicolao Arnolfini and his wife — but the identification was convincingly challenged by the scholar Margaret Koster in 2003, who argued that the woman depicted could not be Arnolfini's wife Costanza, who was already dead before the painting's 1434 date. She proposed instead that the painting commemorates Costanza herself, as a kind of memorial.

The inscription above the mirror — 'Johannes de Eyck fuit hic 1434,' in the ornate lettering of a legal document — has also been interpreted as a declaration of witness, as if Van Eyck were signing a contract or certificate. The two figures reflected in the mirror, entering the room, may be the painter himself and a companion. Or they may be the viewer. Nearly 600 years later, the painting refuses to give up its secrets — which is exactly what Van Eyck intended.`,

    whyTheyMatter: `Van Eyck's technical revolution changed everything. The ability to render light falling on silk, the grain of wood, the reflection in a convex mirror, the individual hairs of a fur collar — these became the ambitions of every Northern European painter for the next two centuries. He established the panel painting as a vehicle for psychological complexity and philosophical depth, not just devotional imagery.

Without Van Eyck there is no Vermeer, no Rembrandt, no Dutch Golden Age. The tradition of close observation, of loving fidelity to the visible world, of painting as an act of witnessing — all of it flows from his workshop in Bruges. Giorgio Vasari, writing in 1550, credited him with the invention of oil painting itself. The credit was wrong, but it captures something true: Van Eyck made oil paint do things it had never done before, and painters were still learning from him a century after his death.`,

    masterworksIds: ["arnolfini-portrait"],
    collectionIds: ["ghent-altarpiece", "man-red-turban"],
  },

];

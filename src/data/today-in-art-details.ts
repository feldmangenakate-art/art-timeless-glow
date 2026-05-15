// src/data/today-in-art-details.ts
// Self-contained rich detail entries for the Today in Art History panel.
// Keys: "MM-DD" — one entry per calendar day.
// Dates without an entry show only the short fact with no expand behavior.

export interface TodayInArtDetail {
  title: string;
  body: string[];
  relatedWorkId?: string | null;
  relatedArtistId?: string | null;
}

export const todayInArtDetails: Record<string, TodayInArtDetail> = {

  "01-14": {
    title: "Klimt: The Golden Man of Vienna",
    body: [
      "Gustav Klimt was born on July 14, 1862, in Baumgarten, near Vienna, the son of a gold engraver — which may explain his lifelong obsession with gold leaf, gilded surfaces, and the decorative possibilities of flat pattern. He trained as a decorative painter and spent his early career completing large public commissions with his brother Ernst.",
      "Ernst's death in 1892 broke something in Klimt. He withdrew from the official art world and in 1897 founded the Vienna Secession — a group of artists declaring independence from the academic establishment. Their motto was carved above the entrance to the Secession building: 'To every age its art. To art its freedom.'",
      "His University of Vienna ceiling paintings caused a scandal that essentially ended his official career: the allegorical figures were too erotic, too pessimistic, too un-triumphant for a public institution. He returned the commission fee and kept the paintings. They were destroyed by retreating SS troops in 1945.",
      "What survived — the Portrait of Adele Bloch-Bauer, The Kiss, Judith — distills his vision completely: the human body dissolved into ornament, desire rendered as gold pattern, the erotic and the spiritual made interchangeable."
    ],
    relatedArtistId: "klimt",
    relatedWorkId: "the-kiss-klimt",
  },

  "01-23": {
    title: "Dalí Dies Beneath His Own Museum",
    body: [
      "Salvador Dalí died on January 23, 1989, in Figueres, Catalonia — the town where he had been born 84 years earlier. He was buried, as he had requested, beneath the floor of the Teatro-Museo Dalí, the museum he had designed and filled himself. Visitors now walk over his grave.",
      "His final years had been defined by the loss of Gala, his wife, muse, and business manager, who died in 1982. Without her — whom he had once said was 'more myself than I am' — he retreated completely. He stopped painting; he barely spoke; he refused to eat. He was transferred to the castle of Púbol, which he had given to Gala and where she was buried, then to a tower in the Dalí Triangle after a fire broke out at Púbol under suspicious circumstances.",
      "The question of who controlled his final years — and whether he was manipulated into signing blank canvases and papers — has never been fully resolved. His foundation was contested, his authenticity catalogue is disputed, and the Dalí industry continues to generate controversy.",
      "What is not disputed: the body of work. The persistence of memory, the Sacrament of the Last Supper, the Christ of Saint John of the Cross, the drawings for Dante's Inferno — they constitute one of the most technically accomplished and imaginatively extravagant careers in 20th century art. He asked to be buried so people would walk over him. They do, every day."
    ],
    relatedArtistId: "dali",
    relatedWorkId: "persistence-of-memory",
  },

  "02-18": {
    title: "Michelangelo Dies Standing Up",
    body: [
      "Michelangelo died on February 18, 1564, in Rome, aged 88. He had been working that morning — his assistants had to take the chisel from his hands. He died standing, or close to it, refusing to lie down in what he called the posture of defeat.",
      "He had outlived almost everyone he knew. The Renaissance was over; the Counter-Reformation had begun; the Council of Trent had just declared that sacred art must be clear, decorous, and emotionally accessible — the opposite of Michelangelo's terribilità. He had watched the world change completely around him and had never stopped working.",
      "His final works — the Rondanini Pietà, unfinished and haunting — are nothing like the confident musculature of the David or the Sistine ceiling. The figures are elongated, almost dissolved, reaching toward each other with the tenderness of people who have lost everything except the gesture of consolation. Art historians argue about whether this was a new style or simply the work of a man whose hands could no longer do what they once had. Probably both.",
      "He left a fortune — carefully accumulated over decades — and meticulous instructions for three tombs: one for himself, one for his father, one for his nephew. The Florence he had grown up in no longer existed. He left it to the marble."
    ],
    relatedArtistId: "michelangelo",
    relatedWorkId: "david",
  },

  "02-22": {
    title: "Warhol Dies From a Routine Operation",
    body: [
      "Andy Warhol died on February 22, 1987, in his sleep, following what was described as a routine gallbladder operation at New York Hospital. He was 58. The surgery had gone well; the death was from cardiac arrhythmia in the early morning hours. His doctors were astonished.",
      "He had avoided hospitals his entire adult life, ever since being shot by Valerie Solanas in 1968. The experience of nearly dying — and of seeing his own body opened — had left him with a terror of medicine. His gallbladder had been in crisis for years; he had refused treatment. By the time he agreed to surgery it was an emergency.",
      "He left an estate worth an estimated $220 million, including approximately 600 works of art, 66 file cabinets of documents, and 610 boxes of objects he had accumulated in his habit of compulsive acquisition — a practice he called 'time capsules.' The Warhol Foundation continues to operate; his market has only grown.",
      "His last diary entry, dictated to his assistant on February 17, five days before his death, discusses a hairpiece, a lunch, and a television show he had watched. The ordinariness is very Warhol — the famous blankness maintained to the end."
    ],
    relatedArtistId: null,
    relatedWorkId: "campbells-soup",
  },

  "03-06": {
    title: "Born Into the Renaissance, He Outlived It",
    body: [
      "Michelangelo Buonarroti was born in 1475 in Caprese, a small town in Tuscany, to a minor nobleman who considered art beneath his family's dignity. The father's objections were overruled by the son's obsession. By 13, Michelangelo was apprenticed to Ghirlandaio, the leading fresco painter in Florence. Within a year he had surpassed his master.",
      "He was taken into the household of Lorenzo de' Medici — the greatest art patron of the Renaissance — where he ate at the same table as humanist philosophers, poets, and the intellectual elite of Florence. These years formed his lifelong conviction that sculpture was the highest art form, that the body was the vessel of the divine, and that beauty was a form of truth.",
      "He lived to 88, an almost impossible age for the Renaissance. He outlived the High Renaissance he had defined, outlived Raphael by 44 years, outlived Leonardo by 45. He worked until the week he died — still carving marble at 88, on a Pietà he never finished. His body was smuggled from Rome to Florence hidden in a merchant's bale, because the Florentines feared the Romans would claim him.",
      "He was buried in Santa Croce. Vasari designed the tomb. The city mourned for weeks."
    ],
    relatedArtistId: "michelangelo",
    relatedWorkId: "sistine-ceiling",
  },

  "03-30": {
    title: "Van Gogh Is Born in the Shadow of a Dead Brother",
    body: [
      "Vincent van Gogh was born on March 30, 1853, in Zundert, Netherlands — exactly one year to the day after a stillborn brother who had been given the same name. Vincent Willem van Gogh. The grave of the first Vincent was in the churchyard the living Vincent passed every Sunday of his childhood.",
      "This shadow over his birth is perhaps too neat a psychoanalytic symbol. But it is true that Van Gogh spent his life in acute consciousness of failure and replacement — as a missionary, as a lover, as a member of his family. He did not begin painting seriously until he was 27. He sold one painting in his lifetime.",
      "His entire serious career lasted roughly ten years. In that decade he made over 900 paintings and 1,100 drawings — an almost insane rate of production. He worked in states of intense focus that he described as 'attacks' of creativity, often followed by episodes of illness and collapse.",
      "He wrote over 800 letters to his brother Theo — one of the great correspondences in art history. They document not just a career but a mind in constant, anguished motion, reaching for something just beyond language. The paintings are what he found when words ran out."
    ],
    relatedArtistId: "van-gogh",
    relatedWorkId: "starry-night",
  },

  "04-06": {
    title: "Raphael: Born and Dead on the Same Day",
    body: [
      "The coincidence was too perfect for the Renaissance not to mythologize it: Raphael Sanzio was born on April 6, 1483, and died on April 6, 1520, on Good Friday, aged exactly 37. His contemporaries saw this as divine symmetry — a life so harmonious it had a perfect frame.",
      "In 37 years he transformed the visual language of Western art. His Madonnas defined gentleness; his School of Athens defined intellectual grandeur; his portraits defined psychological presence. He ran the largest painting workshop in Rome, supervised the excavation of ancient ruins, was appointed architect of St. Peter's Basilica, and was so socially graceful that he moved freely among cardinals and kings at a time when most artists were considered craftsmen.",
      "The cause of death was probably a sudden fever — possibly pneumonia, possibly exhaustion from relentless work. Vasari says he died after a night of excess with his mistress; this is almost certainly gossip. More credibly, he had been working himself to destruction for years, taking on more commissions than any studio could execute.",
      "He lay in state in the Vatican with the unfinished Transfiguration painting displayed above his head. Pope Leo X reportedly wept. He was buried in the Pantheon, at his own request, among the ancient Romans he had devoted his life to understanding."
    ],
    relatedArtistId: "raphael",
    relatedWorkId: "school-of-athens",
  },

  "04-15": {
    title: "The Man Who Wanted to Know Everything",
    body: [
      "Leonardo da Vinci was born illegitimate — the son of a Florentine notary and a peasant woman — which paradoxically freed him. Illegitimate sons could not inherit property or enter most professions. Leonardo could not become a notary like his father. Instead he became everything else.",
      "He filled over 7,000 pages of notebooks with investigations into anatomy, hydraulics, flight, geology, optics, botany, and warfare — most of it never published, much of it centuries ahead of its time. He designed a flying machine based on bat anatomy in 1485. He correctly described the action of the heart's valves. He understood erosion, fossil formation, and the movement of water in ways that would not be systematized until the 19th century.",
      "As a painter he completed perhaps 20 works in his lifetime — an astonishingly small number for an artist of his reputation. He was a notorious non-finisher, always pulled toward the next investigation. The Mona Lisa traveled with him to France; he was still working on it the year he died.",
      "He died at Amboise on May 2, 1519, reportedly in the arms of King Francis I of France, who had given him a manor house and the title 'First Painter, Engineer and Architect to the King.' He was 67. Francis later said that no man had known as much as Leonardo."
    ],
    relatedArtistId: "leonardo-da-vinci",
    relatedWorkId: "mona-lisa",
  },

  "04-26": {
    title: "Guernica: The Day the Bombs Fell",
    body: [
      "On April 26, 1937, Nazi German and Fascist Italian warplanes — acting in support of Franco's Nationalist forces — bombed the Basque town of Guernica on a Monday afternoon, market day, when the town was full. The bombing lasted over three hours. Casualties are still disputed: estimates range from 150 to 1,600 dead.",
      "Picasso had already been commissioned by the Spanish Republican government to paint a mural for the Paris International Exposition. When news of Guernica reached him, he abandoned his original concept and began working. He completed the painting — 11 feet tall, 25 feet wide, in black, white, and grey — in 35 days.",
      "The imagery is deliberately non-narrative: a screaming horse, a bull, a mother holding a dead child, a lamp thrust into darkness, a shattered soldier, a woman falling from a burning building. No bombs, no planes, no uniforms, no nationality. Universal horror with no convenient enemy to identify.",
      "The painting traveled to raise funds for the Spanish Republic. When Nazis visited Picasso's Paris studio and one asked, pointing at a photograph of Guernica: 'Did you do this?' Picasso reportedly answered: 'No. You did.'"
    ],
    relatedArtistId: "picasso",
    relatedWorkId: "guernica",
  },

  "05-02": {
    title: "Leonardo Dies in France, Far From Florence",
    body: [
      "Leonardo da Vinci spent his final three years at the Château du Clos Lucé in Amboise, a guest of King Francis I of France. He had accepted the French king's invitation in 1516, packing his notebooks, his unfinished paintings — including the Mona Lisa — and crossing the Alps by mule at the age of 64.",
      "He never returned to Italy. Florence had never made him a court artist; Milan had fallen to the French; Rome had proven disappointing. Francis offered him something rare: a pension, a house, and genuine intellectual companionship. The king reportedly visited him through an underground tunnel connecting the château to the royal castle.",
      "On May 2, 1519, Leonardo died. He was 67. Vasari's famous account of Francis holding Leonardo as he died is probably legend — court records show the king was elsewhere that day. But the gesture captures something true: Leonardo had found in France the unconditional admiration that Italy never quite gave him.",
      "He left the Mona Lisa, the Virgin of the Rocks, and St. John the Baptist to his assistant Salaì. Through various transactions these works entered the French royal collection. That is why the most famous painting in the world hangs in Paris, not Florence."
    ],
    relatedArtistId: "leonardo-da-vinci",
    relatedWorkId: "mona-lisa",
  },

  "05-11": {
    title: "Dalí: The Surrealist Who Survived Everything",
    body: [
      "Salvador Dalí was born on May 11, 1904, in Figueres, Catalonia, eleven months after the death of a brother who was also named Salvador. Like Van Gogh, he grew up in the shadow of a dead predecessor with the same name. Unlike Van Gogh, he responded by constructing the most theatrical public persona in the history of art.",
      "He was expelled from the Madrid School of Fine Arts twice — once for declaring that no one on the faculty was competent to examine him. He was expelled from the Surrealist movement by André Breton, who anagrammed his name as 'Avida Dollars' — eager for dollars. Dalí accepted the anagram as a compliment.",
      "The persistence of memory — those drooping watches in a Catalan landscape — was painted in 1931 in about two hours, reportedly after contemplating a piece of melting Camembert. It became the most recognizable Surrealist image ever made, reproduced on millions of posters, mugs, and t-shirts, which Dalí found entirely appropriate.",
      "He spent his final years in the castle he had bought for his wife Gala, who died in 1982. After her death he retreated to the castle tower and reportedly stopped eating. He died in 1989, aged 84, and was buried — at his own instruction — beneath the floor of his Teatro-Museo Dalí in Figueres, so that visitors would walk over him forever."
    ],
    relatedArtistId: "dali",
    relatedWorkId: "persistence-of-memory",
  },

  "05-15": {
    title: "The Scandal That Broke Academic Art",
    body: [
      "The Salon des Refusés was itself a political earthquake. In 1863 the official Paris Salon rejected over 3,000 works — so many that artists protested publicly. Napoleon III, embarrassed, ordered a parallel exhibition so the public could judge for themselves. It was meant to humiliate the rejected artists. Instead it became the birthplace of modern art.",
      "Manet's 'Luncheon on the Grass' had two layers of provocation. First, a naked woman sits casually with two fully dressed Parisian men — not as Venus or Diana or any mythological alibi, but as an obvious real woman of the city. Academic nudes were permitted only when dressed in mythology. Manet stripped that excuse away.",
      "Second, and more devastating: she looks directly at the viewer. Academic nudes performed unawareness — they existed to be seen without seeing back. Manet's model holds your gaze with complete composure. That look was read as an accusation. Critics called it obscene. The public laughed. Manet was humiliated — and proved right within a decade.",
      "The Impressionists would take the lesson: stop asking the Salon's permission. By 1874 they were exhibiting entirely on their own terms. The crack in the wall that Manet opened became the door through which all of modern art walked."
    ],
    relatedArtistId: null,
    relatedWorkId: "bar-at-folies",
  },

  "05-18": {
    title: "The Louvre Opens Its Doors",
    body: [
      "On May 18, 1803, the Louvre — rechristened the Musée Napoléon — reopened with an expanded collection, much of it looted from conquered territories across Europe and Egypt. The concept was audacious: Paris as the new Rome, the center of world civilization, with all of civilization's art flowing toward it.",
      "The Louvre's history as a museum had begun in 1793 during the Revolution, when the royal collections were declared public property. For the first time, works owned by kings and Church were available to anyone who walked through the door. The revolutionary idea — that great art belongs to the public — has never been fully reversed.",
      "Napoleon took it further, stripping conquered countries of their masterpieces systematically. After his defeat, most works were returned — but not all. The questions of cultural repatriation that the Louvre raised in 1803 are still being litigated today, in cases involving Egyptian artifacts, African art, and colonial-era acquisitions.",
      "Today the Louvre holds over 35,000 works on display and receives 9 million visitors a year, making it the most visited museum in the world. The Mona Lisa, behind its bullet-proof glass, is the center of a daily pilgrimage — 20 seconds per visitor, on average, before the crowd moves on."
    ],
    relatedArtistId: null,
    relatedWorkId: "mona-lisa",
  },

  "06-06": {
    title: "Velázquez: The Painter Who Made Royalty Mortal",
    body: [
      "Diego Velázquez was born in Seville in 1599 and became court painter to Philip IV of Spain at 24 — a position he held for the rest of his life. The relationship between painter and king was extraordinary: Philip visited Velázquez's studio regularly, sat for him dozens of times, and reportedly said that Velázquez was the only man who truly knew how to paint him.",
      "What made Velázquez revolutionary was his refusal to flatter. The Spanish royal family in his portraits are recognizably human — the Habsburgs with their genetic jaw, the infantas with their elaborate dresses and slightly dazed expressions, the king himself aging visibly across decades of portraits. He painted power without idealization, which was itself a form of power.",
      "Las Meninas, painted in 1656, is his masterpiece and one of the most analyzed paintings in Western art. Velázquez includes himself in the picture, brush in hand, looking out at us — or at the king and queen, whose reflections appear in the mirror behind him. The question of who is looking at whom, and who is the real subject of the painting, has occupied philosophers and art historians for centuries.",
      "He died two years after completing it, in 1660, exhausted by the arrangements for the royal wedding at the French border that he had been tasked with organizing. Fittingly, he died not from painting but from protocol."
    ],
    relatedArtistId: "velazquez",
    relatedWorkId: "las-meninas",
  },

  "07-06": {
    title: "Frida Kahlo: Born from a Bus Crash",
    body: [
      "Frida Kahlo was born on July 6, 1907, in Coyoacán, Mexico — though she later claimed 1910, the year of the Mexican Revolution, preferring to be born with her country's rebirth. At 6 she contracted polio, which left one leg thinner than the other and gave her a slight limp she disguised under long skirts.",
      "At 18, the bus she was riding collided with a streetcar. The handrail impaled her through the hip and exited through her vagina. She broke her spinal column, her collarbone, her right leg in eleven places, her right foot, her pelvis. She was in a cast for three months. She had 35 surgeries in her lifetime.",
      "She began painting in the cast, lying flat, using a mirror rigged above her bed. The mirror is why so many of her paintings are self-portraits: she was the subject most available to her. 'I paint myself because I am so often alone,' she said, 'and because I am the subject I know best.'",
      "She became one of the most significant artists of the 20th century — not despite her pain but through it. She transformed suffering into visual language with a directness that Diego Rivera, André Breton, and eventually the world could not look away from."
    ],
    relatedArtistId: "frida-kahlo",
    relatedWorkId: "two-fridas",
  },

  "07-13": {
    title: "Frida Kahlo's Last Entry",
    body: [
      "Frida Kahlo died on July 13, 1954, in the Blue House in Coyoacán — the house where she had been born 47 years earlier. The official cause of death was pulmonary embolism, though some suspected suicide. Her last diary entry, written a few days before, read: 'I joyfully await the exit — and I hope never to return.'",
      "The final year of her life had been brutal. Her right leg had been amputated below the knee in August 1953 — the gangrene that had threatened for decades had finally come. She fell into depression, attempted suicide at least once. Diego Rivera, her husband whom she had divorced and remarried, stayed close but could not reach her.",
      "Her last public appearance was at a protest against the CIA-backed coup that overthrew Guatemala's president Árbenz — she was carried there in her bed, weak and defiant, holding a peace dove. Ten days later she was dead.",
      "She was cremated. At the viewing, her body sat upright in its coffin, dressed in Tehuana costume, covered in flowers, with her friends singing revolutionary songs. Rivera stood alone after everyone had left. He called it the most tragic day of his life. He died three years later."
    ],
    relatedArtistId: "frida-kahlo",
    relatedWorkId: "two-fridas",
  },

  "07-15": {
    title: "Rembrandt: The Painter Who Went Bankrupt and Kept Painting",
    body: [
      "Rembrandt Harmenszoon van Rijn was born in Leiden in 1606, the son of a miller. He dropped out of Leiden University after a few months — not from failure but from impatience. He needed to paint. By 22 he was in Amsterdam. By 28 he was the most sought-after portrait painter in the Dutch Republic.",
      "The Night Watch, completed in 1642, is often cited as the turning point where fashions changed and his commissions dried up. This is largely myth — the painting was celebrated in its time. What actually changed was a series of personal catastrophes: his wife Saskia died in 1642, his finances collapsed through overspending and poor investment, and in 1656 he was declared insolvent. His collection — hundreds of prints, drawings, exotic objects, art by other masters — was auctioned off.",
      "He kept painting. The late self-portraits, made when he was poor, old, and largely forgotten by the fashionable world, are among the most psychologically penetrating images ever made. He looked at his own aging face without flattery or self-pity, with the same unflinching attention he had given to everyone else.",
      "He died in 1669 with almost nothing. Four people attended his burial. His studio was found full of unfinished work."
    ],
    relatedArtistId: "rembrandt",
    relatedWorkId: "night-watch",
  },

  "07-29": {
    title: "Van Gogh Dies in a Wheat Field, or Close Enough",
    body: [
      "Vincent van Gogh shot himself on July 27, 1890, in Auvers-sur-Oise, in a wheat field — or possibly a farmyard, the exact location has never been established. He walked back to the inn where he was staying, climbed the stairs, and lay down. The innkeeper sent for Theo. Vincent died on July 29, with Theo holding his hand. His last words, reportedly: 'The sadness will last forever.'",
      "He was 37. He had been painting in Auvers for 70 days and had completed 70 paintings. In his final weeks he produced some of his most extraordinary work — Wheat Field with Crows, the portrait of Dr. Gachet, the Auvers church. The pace was frantic, as if he knew.",
      "Theo survived his brother by six months. He collapsed from grief and illness and died in January 1891. They are buried side by side in Auvers, the graves covered with ivy that Theo's widow planted.",
      "The painting that may have been his last — Wheat Field with Crows — shows a path ending abruptly in a field under a turbulent sky, with crows rising. Whether it is a suicide note or simply a landscape has been debated ever since. Probably it is both."
    ],
    relatedArtistId: "van-gogh",
    relatedWorkId: "starry-night",
  },

  // NOTE: August 6 is both Velázquez's death (1660) and Warhol's birth (1928).
  // Only one entry per date is supported. Velázquez's death is kept here;
  // the Warhol birth entry has been moved to 08-07 as the nearest free date.
  "08-06": {
    title: "Velázquez Dies of the Court",
    body: [
      "Velázquez died on August 6, 1660, eight days after returning from the Isla de los Faisanes — Pheasant Island — where he had spent months organizing the extraordinarily elaborate ceremony for the marriage of the Infanta María Teresa to Louis XIV of France.",
      "He had designed the pavilion, overseen the decorations, managed logistics for hundreds of courtiers on both sides of the border. It was the grandest diplomatic event of Philip IV's reign, and Velázquez was responsible for making Spain look magnificent. He succeeded. And it killed him.",
      "He fell ill immediately upon returning to Madrid, with what contemporary accounts describe as a tertian fever — probably malaria. He died eight days later, aged 61. His wife Juana, who had been his companion for 40 years, died eight days after him.",
      "He was buried with full honors in the church of San Juan Bautista. During the Peninsular War, French troops burned the church and the graves were lost. The man who had painted the Spanish monarchy so searingly left no marked grave — only Las Meninas, still hanging in Madrid, still looking back."
    ],
    relatedArtistId: "velazquez",
    relatedWorkId: "las-meninas",
  },

  "08-07": {
    title: "Warhol: The Factory Opens",
    body: [
      "Andy Warhol was born on August 6, 1928, in Pittsburgh, Pennsylvania, the son of Carpatho-Rusyn immigrant parents. He was a sickly child who spent long periods in bed with Sydenham's chorea; during these periods he drew, listened to the radio, and became devoted to celebrity culture — collecting photographs of movie stars and pinning them to his bedroom wall.",
      "He moved to New York and became one of the most successful commercial illustrators of the 1950s, known for his whimsical shoe drawings for I. Miller. The leap to fine art was strategic and total: in 1961 he put Campbell's Soup Cans in a store window; by 1962 he was showing at the Ferus Gallery in Los Angeles and being discussed as one of the defining artists of his generation.",
      "The Factory — his studio on East 47th Street, later on Union Square — was silver-painted and relentlessly social. It produced not just paintings and films but a culture: superstars, Velvet Underground concerts, Interview magazine, the ongoing performance of Andy Warhol as a character who claimed to feel nothing and recorded everything.",
      "He was shot by Valerie Solanas in 1968 and nearly died. He wore a surgical corset for the rest of his life. He died in 1987 from complications after gallbladder surgery — routine, preventable, absurd. He was 58. The Factory had become a corporation; the art had become a brand; the brand outlived the man."
    ],
    relatedArtistId: null,
    relatedWorkId: "marilyn-diptych",
  },

  "10-04": {
    title: "Rembrandt's Last Day",
    body: [
      "Rembrandt died on October 4, 1669, in Amsterdam, in the modest house on the Rozengracht where he had lived since his bankruptcy. He was 63. The death record is almost all that survives — no letters, no deathbed accounts, no reported last words.",
      "He had outlived his son Titus, who died in 1668, just months before him. He had outlived Hendrickje Stoffels, his common-law wife and model, who died in 1663. He had outlived his bankruptcy, his fame, and the world that had first celebrated him. What remained was the work.",
      "In the final decade he painted with a freedom that astonished later centuries. The impasto thickened; the surfaces became almost sculptural; the light grew warmer and more interior. The late Saul and David, the Jewish Bride, the final self-portraits — these paintings contain everything he had learned in 40 years of looking.",
      "Four people attended his burial in the Westerkerk. The grave was unmarked. Two centuries later the church couldn't say exactly where he lay."
    ],
    relatedArtistId: "rembrandt",
    relatedWorkId: "anatomy-lesson",
  },

  "10-18": {
    title: "The Night Watch Almost Destroyed",
    body: [
      "Rembrandt's Night Watch has been attacked three times. In 1911 a cook slashed it with a knife. In 1975 a schoolteacher named Willem de Rijk slashed it 12 times with a bread knife before guards stopped him; the cuts, some 30 centimeters long, took five years of restoration. In 1990 a man sprayed acid on the surface; guards intervened before the acid penetrated through the varnish.",
      "The painting had already survived its first mutilation at the hands of those who commissioned it: in the early 18th century it was cut on three sides to fit a new doorway in Amsterdam's Town Hall. The missing strips — including two complete figures on the left side — are known only from a small contemporary copy.",
      "It is the most-studied painting in the Dutch collection, the subject of ongoing research using neutron scans, X-ray fluorescence, and multispectral imaging. In 2019 the Rijksmuseum began 'Operation Night Watch' — the most sophisticated conservation project ever undertaken — in full public view, surrounded by glass, so visitors could watch the scientists work.",
      "The painting keeps surviving. It has been cut, slashed, sprayed, and moved across centuries. It remains the largest painting Rembrandt ever made, and arguably the greatest group portrait in Western art."
    ],
    relatedArtistId: "rembrandt",
    relatedWorkId: "night-watch",
  },

  "10-25": {
    title: "Picasso: The Child Who Was Born Already an Artist",
    body: [
      "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso was born on October 25, 1881, in Málaga, Spain. His father was an art teacher. The story — possibly apocryphal, certainly beloved — is that his father gave him his brushes at age 13, recognizing that the son had already surpassed the father.",
      "Picasso could draw with academic precision before he could read fluently. His early academic paintings are technically flawless and utterly conventional. What changed everything was Paris, poverty, and the death of his friend Carlos Casagemas, who shot himself in 1901. The Blue Period that followed — those cold, elongated figures of the poor and lonely — was grief made visible.",
      "He invented or co-invented Cubism with Georges Braque between 1907 and 1914, transforming how Western art understood the relationship between seeing and representing. He then spent the rest of his career — another 60 years — restlessly reinventing himself, producing an estimated 20,000 works in painting, sculpture, ceramics, and printmaking.",
      "He died in 1973 at 91, still working. His last words, reportedly to guests who had come for dinner: 'Drink to me, drink to my health. You know I can't drink any more.'"
    ],
    relatedArtistId: "picasso",
    relatedWorkId: "guernica",
  },

  "11-14": {
    title: "Monet Is Born, and Light Gets a Painter",
    body: [
      "Claude Monet was born on November 14, 1840, in Paris, and grew up in Normandy — in the coastal town of Le Havre, where the sea light is particularly active and unstable. It was the right place to develop an obsession with the relationship between light and water, between the seen world and the painted surface.",
      "He was rebellious early: his teacher Boudin took him outside to paint en plein air — directly from nature — and Monet never went back inside. The studio, with its controlled light and arranged still lifes, held no interest. He wanted the moment, the specific light of this Tuesday morning, these clouds moving in from the northwest.",
      "The word 'Impressionism' was coined as an insult, derived from his 1872 painting 'Impression, Sunrise' — a misty harbor scene so loosely painted that a hostile critic said it was less finished than wallpaper. Monet kept the insult as a badge.",
      "He outlived nearly all his contemporaries, dying in 1926 at 86. His final years at Giverny, nearly blind from cataracts, produced the monumental Water Lilies series — paintings of a garden that he had designed himself, a subject entirely of his own making. He had spent his life chasing light; at the end he built a world where the light would wait for him."
    ],
    relatedArtistId: "monet",
    relatedWorkId: "water-lilies",
  },

  "12-05": {
    title: "Monet Goes Blind and Keeps Painting",
    body: [
      "Claude Monet died on December 5, 1926, at Giverny, aged 86. He had spent the last decade nearly blind from cataracts — able to distinguish light and shadow, some color, but not the precise atmospheric effects he had spent his life chasing.",
      "He refused surgery for years, terrified that the operation would change his color perception. When he finally agreed in 1923, the surgery partially restored his sight — but as he had feared, his color balance shifted. Some art historians believe the particularly intense blues and yellows of his late paintings are the result of altered color perception rather than artistic choice. Others think it made no difference to work of such confidence.",
      "He continued painting through near-blindness, producing the enormous Water Lilies panels — some over 40 feet wide — that he donated to the French state. He worked on them in the oval rooms of the Orangerie in Paris that he designed himself, insisting they be hung without frames or partitions, so viewers would be completely surrounded.",
      "He died the same year the Orangerie rooms opened. He never saw them installed. Clemenceau, his oldest friend, was at his bedside. He left Giverny — the house, the garden, the Japanese bridge, the water lilies — to his son, and eventually to the state. The garden is still there, still planted according to his design."
    ],
    relatedArtistId: "monet",
    relatedWorkId: "water-lilies",
  },

  "12-28": {
    title: "Vermeer: The Painter Nobody Remembered for 200 Years",
    body: [
      "Johannes Vermeer was baptized on October 31, 1632, in Delft, and died there on December 15, 1675, aged 43, leaving his wife Catharina with 11 children and catastrophic debt. He had painted perhaps 35 works in his lifetime, worked slowly, and sold mostly to a single patron — the wealthy Pieter van Ruijven.",
      "After his death he was almost completely forgotten. His widow sold the famous Art of Painting to her mother to pay off debts; the rest of his work dispersed into other collections without his name attached. For nearly two centuries, paintings now recognized as among the greatest ever made circulated as 'unknown Dutch master.'",
      "The rediscovery came in 1866 when the French critic Thoré-Bürger published an essay identifying Vermeer's work and arguing for his greatness. Within decades he was recognized as a giant. The Girl with a Pearl Earring, the Milkmaid, the View of Delft — works that had sat in collections unattributed — suddenly had an author.",
      "The lesson of Vermeer is not reassuring: greatness does not guarantee recognition. Sometimes it takes 200 years, one determined critic, and considerable luck."
    ],
    relatedArtistId: "vermeer",
    relatedWorkId: "girl-pearl-earring",
  },

};

/** Returns today's rich entry, or null if none exists for this date. */
export function getTodayInArtDetail(): TodayInArtDetail | null {
  const now = new Date();
  const key = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  return todayInArtDetails[key] ?? null;
}

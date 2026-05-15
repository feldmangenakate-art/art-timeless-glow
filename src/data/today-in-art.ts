// today-in-art.ts
// 365-day "Today in Art History" dataset
// Keys: "MM-DD" — one entry per calendar day

// ─── Rich detail entries (used in the expanded panel) ────────────────────────

export interface TodayDetail {
  date: string;           // e.g. "MAY 15, 1863"
  title: string;          // large heading for expanded panel
  body: string[];         // paragraphs
  relatedWorkId?: string; // optional masterwork ID for "Explore the work →" link
}

export const TODAY_IN_ART_DETAIL: Record<string, TodayDetail> = {
  "01-02": {
    date: "JANUARY 2, 1839",
    title: "The Day Painting Lost Its Monopoly",
    body: [
      "On this day Louis Daguerre demonstrated his photographic process to the French Academy of Sciences. Within months the daguerreotype was publicly available, and within a decade commercial portrait studios had opened across Europe and America.",
      "Painters panicked — and then adapted. The question 'why paint what a camera can record?' forced art toward everything a camera could not do: emotion, subjectivity, the felt quality of light. Impressionism is, in part, photography's greatest unintended consequence.",
      "Degas used photographs as compositional references. Cézanne sought what he called 'the sensation behind the sensation.' The camera did not kill painting. It freed it."
    ],
  },
  "01-19": {
    date: "JANUARY 19, 1839",
    title: "The Man Who Broke the Box",
    body: [
      "Paul Cézanne was born in Aix-en-Provence on this day in 1839 — the son of a banker who wanted him to study law, a man who failed the entrance exam to the École des Beaux-Arts twice, and the artist who dismantled six centuries of pictorial convention.",
      "Where the Renaissance established a fixed viewpoint — one eye, one moment, one perspective — Cézanne painted what two eyes actually see: a table that curves slightly, an apple seen from above and the side simultaneously, a mountain that seems to exist in multiple atmospheric states at once.",
      "Picasso called him 'the father of us all.' Matisse owned his bathers. Without Cézanne there is no Cubism, no abstraction, no modern art as we understand it. He died in 1906 having been caught in a rainstorm while painting outdoors — still working, as always."
    ],
    relatedWorkId: "card-players",
  },
  "01-23": {
    date: "JANUARY 23, 1832",
    title: "The Painter Who Killed Academic Art",
    body: [
      "Édouard Manet was born in Paris on this day in 1832 — and no painter did more to destroy what painting had been and make it what it would become. His 'Olympia' (1863) placed a recognizable modern Parisian nude on the compositional throne of Titian's Venus. The official Salon hung it, then recoiled from the public scandal.",
      "Manet's crime was not nudity but modernity. His figures don't pose in myth or allegory — they stand in Paris, in contemporary clothes or out of them, looking directly back at you with the unsentimental gaze of people who know they're being watched.",
      "He was refused by the Salon, mocked by critics, and privately adored by the painters who learned most from him. He never exhibited with the Impressionists, though he was their spiritual center. He died in 1883, eleven days after his leg was amputated."
    ],
    relatedWorkId: "bar-at-folies",
  },
  "02-18": {
    date: "FEBRUARY 18, 1564",
    title: "Four Days Before the End",
    body: [
      "Michelangelo died in Rome on this day in 1564 at the age of 88, four days after he had been found at work on his final Pietà — the Rondanini, which he had been carving and re-carving for over a decade. He was still chipping stone at 88. They had to take the hammer from his hand.",
      "He outlived four popes who had employed him. He outlived Leonardo by 45 years. He watched the Reformation transform the world his art had decorated. He designed the dome of St. Peter's and did not live to see it built.",
      "The stone he left unfinished in his studio — a figure emerging from marble, half-alive, caught between form and formlessness — became the defining image of Michelangelo: a man who believed that the sculpture already existed inside the marble, and that his job was only to release it."
    ],
    relatedWorkId: "sistine-ceiling",
  },
  "03-06": {
    date: "MARCH 6, 1475",
    title: "Born in Caprese, Italy",
    body: [
      "Michelangelo di Lodovico Buonarroti Simoni was born on this day in 1475, in the small town of Caprese in Tuscany. His mother died when he was six. He was sent to live with a stonecutter's family, and later claimed that his love of marble came from his wet nurse's milk — she was the wife of a stonecutter.",
      "By thirteen he was apprenticed to Ghirlandaio, one of the finest painters in Florence. By sixteen he was living in the Medici household, studying the ancient sculptures in Lorenzo de' Medici's garden. By twenty-four he had carved the Pietà. By thirty he had painted the Sistine ceiling's main panels. He called himself a sculptor, not a painter, and resented the commission for the rest of his life.",
      "He was difficult, suspicious, solitary, and possibly the most talented human being who has ever lived."
    ],
    relatedWorkId: "creation-of-adam",
  },
  "03-28": {
    date: "MARCH 28, 1483",
    title: "The Master of Grace",
    body: [
      "Raphael Sanzio was born in Urbino on this day in 1483 — the son of a court painter who died when Raphael was eleven, leaving him the paintbrushes and the lesson that elegance, if pursued with sufficient intelligence, becomes its own kind of truth.",
      "He arrived in Florence at twenty-one, absorbed Leonardo's sfumato and Michelangelo's anatomical power, synthesized them into something neither man could have produced, and moved to Rome at twenty-five to begin the Vatican Stanze — the most ambitious fresco cycle since the Sistine Chapel, executed simultaneously with it, by a man twenty-three years younger than its creator.",
      "He died on his 37th birthday. All of Rome went into mourning. His unfinished 'Transfiguration' hung at the head of his bier. He is buried in the Pantheon, where he asked to be placed — near the gods."
    ],
    relatedWorkId: "school-of-athens",
  },
  "03-30": {
    date: "MARCH 30, 1853",
    title: "Born in Groot-Zundert",
    body: [
      "Vincent van Gogh was born on this day in 1853 in the southern Netherlands — the son of a Protestant minister, the eldest surviving child (a brother named Vincent Willem had been stillborn exactly one year before). He grew up anxious, intense, difficult to employ, and one of the finest letter-writers in any language.",
      "He did not begin painting seriously until he was twenty-seven. He spent time as an art dealer, a schoolteacher, a preacher among coal miners. When he finally turned to painting he had roughly ten years left to live and produced over two thousand works in them.",
      "In his lifetime he sold one painting. The letters he wrote to his brother Theo — over 600 of them, covering everything from Japanese prints to the texture of Provençal sunlight — are now considered one of the greatest documents in the history of art."
    ],
    relatedWorkId: "starry-night",
  },
  "04-06": {
    date: "APRIL 6, 1520",
    title: "All of Rome Mourned",
    body: [
      "Raphael died in Rome on this day in 1520 — Good Friday, his 37th birthday. The cause was almost certainly a fever, possibly contracted while supervising the excavation of ancient Roman ruins. He had been working that morning.",
      "Pope Leo X wept. The body lay in state in the Vatican apartments, surrounded by his unfinished 'Transfiguration,' which had been propped at the head of the bier. Contemporary accounts describe crowds filling the streets. Giorgio Vasari, writing decades later, said the sky itself seemed to darken.",
      "He was buried in the Pantheon, next to his fiancée's father, beneath an inscription that reads: 'Here lies Raphael, by whom Nature herself feared to be outdone while he lived, and when he died, feared that she too would die.'"
    ],
    relatedWorkId: "school-of-athens",
  },
  "04-08": {
    date: "APRIL 8, 1973",
    title: "The Last Cubist",
    body: [
      "Pablo Picasso died in Mougins, France, on this day in 1973 at age 91 — still married to Jacqueline Roque, still painting almost daily, still controversial, still prodigiously productive. He had outlived nearly everyone who had known him in Paris before the First World War.",
      "The inventory of his estate took years: 1,885 paintings, 1,228 sculptures, 2,880 ceramics, 18,000 engravings and lithographs, 12,000 drawings. He had never stopped. He had moved through Cubism, Surrealism, Classicism, and back to figuration with a restless energy that made every decade feel like a different artist.",
      "He was buried at Vauvenargues, beneath a bronze sculpture he had made himself. Jacqueline Roque was not permitted at the funeral by his children from previous relationships. Even in death, the biographical drama continued."
    ],
    relatedWorkId: "guernica",
  },
  "04-15": {
    date: "APRIL 15, 1452",
    title: "The Man Who Wanted to Know Everything",
    body: [
      "Leonardo da Vinci was born on this day in 1452 in the village of Vinci in Tuscany — the illegitimate son of a notary and a peasant woman, raised by his father's family, apprenticed at fourteen to Andrea del Verrocchio in Florence.",
      "By the time he left Verrocchio's workshop he was already the finest painter alive. But painting was only one of the things he wanted to do. His notebooks — over 7,000 pages survive, probably a quarter of what he produced — contain designs for flying machines, solar power concentrators, armored vehicles, anatomical studies, hydraulic systems, optical instruments, and investigations into the nature of light, water, and air.",
      "He left the Mona Lisa unfinished for four years, carrying it with him from commission to commission, adding and refining. When he died in France in 1519, King Francis I was reportedly holding his hand. The Mona Lisa was in the room."
    ],
    relatedWorkId: "mona-lisa",
  },
  "04-19": {
    date: "APRIL 19, 1828",
    title: "The Most Modern Old Master",
    body: [
      "Francisco Goya died in Bordeaux on this day in 1828, aged 82, in self-imposed exile from a Spain he no longer recognized. He had survived the Napoleonic invasion, the Inquisition, a mysterious illness that left him completely deaf at 46, and the political chaos of the Restoration.",
      "The deafness was the turning point. Goya had been the brilliant, celebrated court painter of Charles IV — witty, grand, technically dazzling. After the illness, something darker entered the work. The Saturn devouring his son. The witches' sabbath. The firing squad at dawn.",
      "He painted those Black Paintings directly onto the walls of his house, for himself alone, with no intention of ever showing them. They were not discovered until after his death, transferred to canvas and shown to the public for the first time in 1878. They look like they were made yesterday."
    ],
    relatedWorkId: "third-of-may",
  },
  "04-26": {
    date: "APRIL 26, 1798",
    title: "The Lion of Romanticism",
    body: [
      "Eugène Delacroix was born near Paris on this day in 1798 — possibly the illegitimate son of the diplomat Talleyrand, certainly the heir to everything that made French Romantic painting electrifying. He was twenty-four when he showed 'The Barque of Dante' at the Salon and found himself, overnight, the leader of a movement he hadn't intended to start.",
      "He traveled to Morocco in 1832 and returned with notebooks full of drawings, sketches, and color observations that fed his work for the rest of his career. He was obsessed with color — unblended, vibrating, laid beside its complement to intensify both. Baudelaire called him 'the last great painter.' Van Gogh copied his pietà from a black-and-white print.",
      "He quarreled famously with Ingres, the titan of academic line. The argument between color and drawing — between Delacroix and Ingres — is still, in some form, alive."
    ],
    relatedWorkId: "liberty-leading",
  },
  "05-02": {
    date: "MAY 2, 1519",
    title: "In the Arms of the King",
    body: [
      "Leonardo da Vinci died at the Château du Clos Lucé in Amboise, France, on this day in 1519 — invited there by King Francis I, who gave him a house, a stipend, and the title 'Premier Painter, Engineer, and Architect to the King.' He was 67. He had brought three paintings with him from Italy: the Mona Lisa, the Virgin and Child with Saint Anne, and the Saint John the Baptist.",
      "The Mona Lisa never returned to Italy. Leonardo had been working on it, on and off, for sixteen years. After his death it passed into the French royal collection, hung for a time in Versailles, and eventually came to rest in the Louvre — where it still is.",
      "Francis I reportedly wept at his bedside. The story that he held Leonardo's dying head in his arms was first told by Vasari and is probably not literally true. But Leonardo had spent the last years of his life in France, comfortable and respected, filling notebooks, unable to paint much anymore because his right hand had been partially paralyzed by a stroke. He drew with his left."
    ],
    relatedWorkId: "mona-lisa",
  },
  "05-11": {
    date: "MAY 11, 1904",
    title: "The Last Surrealist",
    body: [
      "Salvador Dalí was born in Figueres, Catalonia, on this day in 1904 — the flamboyant, meticulous, commercially savvy, possibly calculating, certainly singular painter who made the unconscious visible with the technical precision of a Flemish master.",
      "'The Persistence of Memory' (1931) was painted in two hours on a small piece of wood while Gala was out at the cinema. The melting watches came to him, he said, while contemplating a piece of runny Camembert cheese. He painted them before she returned. When she saw it she said he would be unable to forget it once he had seen it.",
      "He lived until 1989, long enough to see himself become an industry, a brand, a theme park of himself. He moved back to the castle in Púbol he had given Gala, who is buried there. He died in a tower in Figueres, in the theater-museum he had built on the ruins of the municipal theater where his first exhibition had been held."
    ],
    relatedWorkId: "persistence-of-memory",
  },
  "05-15": {
    date: "MAY 15, 1863",
    title: "The Scandal That Broke Academic Art",
    body: [
      "On this day in 1863, Napoleon III opened the Salon des Refusés — an exhibition of work rejected by the official Paris Salon jury. Among the 1,200 rejected works was Édouard Manet's 'Le Déjeuner sur l'herbe': a naked Parisian woman seated with two fully clothed men in a modern park, staring directly out at the viewer. Nothing mythological. No allegorical excuse. Just a woman, naked, looking at you.",
      "The crowds came to laugh, and largely did. What made it scandalous was not the nudity — the official Salon exhibited mythological nudes every year — but the modernity. Titian's Venus sleeps and averts her gaze. Manet's woman sits up, looks directly at you, and clearly knows exactly what is happening.",
      "But a generation of painters — Monet, Pissarro, Cézanne — understood immediately what Manet had done. He had stepped painting out of antiquity and into the street. The Impressionist revolution, which would formally begin eleven years later, was already announced in the Salon des Refusés on this afternoon."
    ],
    relatedWorkId: "bar-at-folies",
  },
  "05-17": {
    date: "MAY 17, 1510",
    title: "Forgotten for Three Centuries",
    body: [
      "Sandro Botticelli died in Florence on this day in 1510 — poor, largely forgotten, and with no idea that 'The Birth of Venus' and 'Primavera' would one day be the most recognized paintings of the Italian Renaissance.",
      "He had been Medici Florence's most celebrated painter. After Lorenzo de' Medici's death and Savonarola's rise, Botticelli apparently turned religious and destroyed some of his own secular works. His late paintings are darker, stranger, less comfortable. He stopped receiving major commissions.",
      "It was John Ruskin and the Pre-Raphaelites in the 1860s who rediscovered him — seeing in his graceful, slightly melancholy line exactly the quality that academic art had lost. The Birth of Venus entered the Uffizi and began its long ascent to ubiquity. Botticelli had been in his grave for 350 years."
    ],
    relatedWorkId: "birth-of-venus",
  },
  "05-21": {
    date: "MAY 21, 1471",
    title: "The Northern Renaissance, in One Person",
    body: [
      "Albrecht Dürer was born in Nuremberg on this day in 1471 — the son of a goldsmith, trained in the precision of metalwork, and the man who single-handedly transplanted Italian Renaissance ideas about proportion, anatomy, and perspective into the Northern European tradition.",
      "He traveled to Venice twice. He painted himself with the severity and directness of a saint — the 1500 self-portrait, in which he stares directly at the viewer with his hand raised in an echo of Christ's gesture of blessing, is one of the most audacious acts of self-presentation in art history.",
      "But his prints were his greatest legacy. Woodcuts and engravings that circulated across Europe, carrying Italian ideas to workshops in Germany, Flanders, and England. In an age before museums, Dürer's prints were how the Renaissance traveled."
    ],
  },
  "07-06": {
    date: "JULY 6, 1907",
    title: "The Most Famous Female Artist in History",
    body: [
      "Frida Kahlo was born in Coyoacán, Mexico, on this day in 1907 — or so she always said; her birth certificate gives 1907 but she sometimes claimed 1910, the year of the Mexican Revolution, to align herself with the founding of the country she loved and painted.",
      "She was eighteen when a bus accident broke her spine, collarbone, ribs, pelvis, and right leg. She spent her life in pain, in plaster corsets, and in defiance of both. She began painting during her first long convalescence, using a mirror mounted above her bed. 'I paint myself because I am so often alone,' she said, 'and because I am the subject I know best.'",
      "She married Diego Rivera twice. She had affairs with Trotsky and Josephine Baker. She wore Tehuana dress and pre-Columbian jewelry as a political act. She did not live to see herself become an icon — she died in 1954, and her international reputation was built almost entirely posthumously."
    ],
    relatedWorkId: "two-fridas",
  },
  "07-14": {
    date: "JULY 14, 1862",
    title: "The Painter of Gold and Desire",
    body: [
      "Gustav Klimt was born in Baumgarten, near Vienna, on this day in 1862 — the son of a gold engraver, a fact that seems almost too perfect. He grew up handling gold, understanding how it catches and holds light, how it can make the ordinary sacred.",
      "'The Kiss' (1907–08) is the most reproduced painting in the Vienna Secession and arguably the most romantic image in the Western tradition: two figures, swathed in gold, at the edge of a precipice of flowers, caught in a moment that appears to dissolve the boundary between person and ornament, between desire and landscape.",
      "Klimt founded the Vienna Secession in 1897 precisely to escape academic constraint. He designed everything — the building, the magazine 'Ver Sacrum,' the exhibition installations. He believed there was no hierarchy between the fine and decorative arts. His studio was legendary for its cats, its peacocks, and his working in a loose robe with nothing underneath."
    ],
    relatedWorkId: "the-kiss-klimt",
  },
  "07-15": {
    date: "JULY 15, 1606",
    title: "The Greatest Dutch Painter",
    body: [
      "Rembrandt van Rijn was born in Leiden on this day in 1606 — the son of a miller, one of nine children, who would become the greatest Dutch painter and the man who understood better than anyone before or since what a human face can hold.",
      "His self-portraits — over 80 of them across five decades — form the most sustained visual autobiography in Western art. You can watch him age in them: the confident young man with the feathered beret; the prosperous master of the 1630s; the bankrupt, widowed, aging painter of the 1650s and 60s, looking out from the canvas with an acceptance so complete it amounts to a kind of grace.",
      "He died in 1669, bankrupt, having outlived his wife Saskia, his son Titus, and his companion Hendrickje. The inventory of his studio — listed when he was declared insolvent in 1656 — is one of the most poignant documents in art history: 'a number of antique busts, a bundle of old armor, some wax models, a stack of prints, assorted globes.'"
    ],
    relatedWorkId: "night-watch",
  },
  "07-18": {
    date: "JULY 18, 1610",
    title: "A Violent Life, a Violent End",
    body: [
      "Michelangelo Merisi da Caravaggio died on a beach near Porto Ercole on this day in 1610, aged 38 — feverish, exhausted, possibly poisoned, certainly alone. He had spent his final years fleeing a murder charge across Malta, Sicily, and Naples, painting with the furious intensity of someone who knew he might not finish the next commission.",
      "His life had the drama of his paintings. He killed a man in a brawl in Rome in 1606 — the circumstances are disputed but the death sentence was real — and spent four years on the run, accepting commissions from any church or noble who would shelter him. The paintings from those years are extraordinary: darker, stranger, more desperate than anything before.",
      "He had applied to the Pope for a pardon and was apparently on his way back to Rome when he died. The pardon arrived days after his death. He had no pupils, refused to teach, left no theoretical writing. But the whole of Baroque painting flows directly from the things he discovered about how light falls on a face in darkness."
    ],
    relatedWorkId: "calling-saint-matthew",
  },
  "07-29": {
    date: "JULY 29, 1890",
    title: "The Sadness Will Last Forever",
    body: [
      "Vincent van Gogh died in Auvers-sur-Oise on this day in 1890, two days after shooting himself in a wheat field. He was 37. His last words to his brother Theo, who had rushed from Paris and sat with him through the night, were reportedly: 'The sadness will last forever.'",
      "He had painted over 2,000 works in ten years. He had sold one painting in his lifetime — 'The Red Vineyard,' in Brussels, for 400 francs. The 137 letters he wrote to Theo in the last eighteen months of his life are among the most extraordinary documents in the history of art: detailed, precise, full of observations about color and light that would take the art world decades to understand.",
      "Theo survived him by six months, dying in January 1891. They are buried side by side in the cemetery at Auvers, under ivy that Theo's wife Jo planted. She spent the rest of her life ensuring that the world would eventually understand what her brother-in-law had done."
    ],
    relatedWorkId: "starry-night",
  },
  "08-06": {
    date: "AUGUST 6, 1660",
    title: "The Greatest Spanish Painter",
    body: [
      "Diego Velázquez died in Madrid on this day in 1660, aged 61, five days after falling ill at the elaborate ceremonies for the marriage of the Infanta María Teresa to Louis XIV of France — the event he had spent months helping to organize as the king's chief court official.",
      "'Las Meninas,' painted four years earlier, was already in the royal collection. Nobody knew yet that it would become the most analyzed painting in Western art — that Foucault would open his masterwork of philosophy with it, that Picasso would spend a year making 58 variations on it, that it would eventually be recognized as the painting that most completely interrogates the nature of representation itself.",
      "He had been court painter to Philip IV for 37 years. He painted the king, the queen, the infantas, the dwarfs, the jesters, the pope, and — in 'The Rokeby Venus' — one of the only female nudes in Spanish Baroque painting. He was knighted three years before he died, the honor he had wanted most."
    ],
    relatedWorkId: "las-meninas",
  },
  "08-11": {
    date: "AUGUST 11, 1956",
    title: "The Founder of Action Painting",
    body: [
      "Jackson Pollock died in a car accident near his home in Springs, Long Island, on this day in 1956. He was 44, drunk, and driving. Two passengers died with him. He had not produced a significant new work in almost two years.",
      "The drip paintings of 1947–1950 — made by laying the canvas on the floor and moving around it, pouring and flicking paint from cans and hardened brushes — had made him the most famous living American painter. Life magazine had run a two-page spread in 1949 under the headline 'Is he the greatest living painter in the United States?' He was not yet 40.",
      "He had started drinking again heavily in 1950, after a period of sobriety that had produced his greatest work. The last years were difficult — long silences, failed canvases, the sense of an artist who had found his method and then found it insufficient. He was buried in the Green River Cemetery in East Hampton, under a large glacial boulder."
    ],
    relatedWorkId: "guernica",
  },
  "08-21": {
    date: "AUGUST 21, 1911",
    title: "The Theft That Made Her Famous",
    body: [
      "The Mona Lisa was stolen from the Louvre on this day in 1911 by Vincenzo Peruggia, an Italian handyman who had previously worked in the museum. He removed the painting from the wall on a Monday morning when the Louvre was closed to the public, hid in a broom closet overnight, and walked out the next morning with the painting concealed under his coat.",
      "She was missing for two years and three months. The global newspaper coverage was unprecedented — this was the first media event in art history. More people visited the Louvre to see the empty space on the wall than had visited to see the painting. Peruggia was caught in Florence when he tried to sell her to an antiques dealer, and she was returned to Paris in January 1914.",
      "Before the theft, the Mona Lisa was one great painting among many in the Louvre. After it, she was the most famous painting in the world. Peruggia, who believed he was repatriating an Italian treasure stolen by Napoleon, served eight months in prison."
    ],
    relatedWorkId: "mona-lisa",
  },
  "08-27": {
    date: "AUGUST 27, 1576",
    title: "The Warmth of Living Flesh",
    body: [
      "Titian died in Venice of plague on this day in 1576, at approximately 88 years of age — though some sources give 99, and the uncertainty is itself part of the legend. He had outlived almost every artist of his generation. He had painted six popes, two Holy Roman Emperors, and the most powerful rulers of his age.",
      "His late style — loose, shimmering, almost dissolved into pure light and tone — was not understood by his contemporaries. Critics who visited his studio in the 1570s found the unfinished works baffling, even embarrassing. Three centuries later, those same late paintings were recognized as the first Impressionism, as the discovery that paint itself could carry meaning independent of the subject it depicted.",
      "He died in his studio surrounded by his brushes. Because of the plague, he was buried without ceremony — one of the few Venetians of his stature denied a public funeral. The church of the Frari, where his 'Assumption of the Virgin' still hangs above the high altar, is his real monument."
    ],
    relatedWorkId: "venus-of-urbino",
  },
  "09-09": {
    date: "SEPTEMBER 9, 1901",
    title: "The Chronicler of Montmartre",
    body: [
      "Henri de Toulouse-Lautrec died at his mother's estate at Malromé on this day in 1901, aged 36 — a small man with a large genius and a body that had been breaking down since a childhood fall left his legs permanently stunted and painful.",
      "He had spent his most productive years in Montmartre, in the dance halls and cabarets and brothels, sketching the performers who became his subjects: Jane Avril, Yvette Guilbert, La Goulue, the Can-Can dancers of the Moulin Rouge. He drew them not as spectacle but as workers — the boredom between performances, the exhaustion behind the makeup.",
      "His posters — bold, flat, graphically revolutionary — turned commercial art into fine art almost overnight. They covered the walls of Paris in the 1890s. The originals are now in museums. He left 737 paintings, 275 watercolors, 363 prints, and 5,000 drawings, produced in a career of barely fifteen years."
    ],
    relatedWorkId: "moulin-galette",
  },
  "09-24": {
    date: "SEPTEMBER 24, 1501",
    title: "Three Years to Free a Figure from Stone",
    body: [
      "On this day in 1501, Michelangelo signed his contract with the Opera del Duomo in Florence to carve a statue of David from a block of Carrara marble that had been quarried forty years earlier, half-roughed-out by a previous sculptor, and abandoned. The stone had been sitting in the cathedral workshop, deemed too long and narrow to carve successfully, for a generation.",
      "Michelangelo worked on it for three years, mostly alone, covering the workshop so no one could see it in progress. When he finished, a committee that included Leonardo da Vinci debated where to place it. They chose the Piazza della Signoria — the political heart of Florence — where it was installed in May 1504 after four days of slow transportation through the narrow streets.",
      "It is 17 feet tall and weighs six tons. Michelangelo carved it from a single block, adding nothing. The stone that was 'too narrow' became the figure that still defines what sculpture can be."
    ],
    relatedWorkId: "david",
  },
  "09-28": {
    date: "SEPTEMBER 28, 1573",
    title: "The Painter Who Brought Darkness to Light",
    body: [
      "Caravaggio was born in Milan on this day in 1573 — or possibly in Caravaggio, the small town whose name he took as his own. His early years are obscure. He arrived in Rome around 1592 and spent a difficult period painting small devotional works, flowers, fruit, and the occasional young man with an ambiguous gaze.",
      "The commission for the Contarelli Chapel in 1599 changed everything. The 'Calling of Saint Matthew' and 'The Martyrdom of Saint Matthew' introduced the world to chiaroscuro as pure drama: total darkness from which figures emerge into a single raking light, as if illuminated by a torch held just outside the frame.",
      "He was violent, difficult, and probably brilliant in a way he himself barely understood. He killed a man in 1606 and spent the rest of his short life on the run, painting with the intensity of someone who suspects he won't finish the next commission. He was right. He died at 38, still running."
    ],
    relatedWorkId: "calling-saint-matthew",
  },
  "10-04": {
    date: "OCTOBER 4, 1669",
    title: "Bankrupt and Forgotten",
    body: [
      "Rembrandt van Rijn died in Amsterdam on this day in 1669 — bankrupt, having outlived his wife, his son, and his companion; the greatest Dutch painter of the 17th century, in a city that had largely forgotten him.",
      "The bankruptcy had come in 1656. His collection was auctioned off — the antique sculptures, the armor, the prints, the drawing books. He was forced to move to a smaller house. He kept painting. The work from the 1660s is among the most extraordinary in Western art: the self-portraits, the 'Return of the Prodigal Son,' the 'Jewish Bride' — all painted by a man with no money and diminishing patronage.",
      "The inventory of his estate at death listed a few pieces of old clothing, some painting equipment, and two small cabinets. The 'Night Watch,' which hangs in the Rijksmuseum and is visited by millions each year, was already in the possession of the city. He left it knowing it was there. He did not know it would eventually be considered the greatest painting in the Netherlands."
    ],
    relatedWorkId: "night-watch",
  },
  "10-22": {
    date: "OCTOBER 22, 1906",
    title: "Still Working",
    body: [
      "Paul Cézanne died in Aix-en-Provence on this day in 1906 — caught in a rainstorm while painting his beloved Mont Sainte-Victoire, he collapsed and was brought home, where he died five days later. He had been painting outdoors that morning despite being 67 and unwell. He did not consider stopping.",
      "He had been working in near-isolation in Aix for decades, regarded by Parisian critics as a failure — the man who had tried and missed. He sold almost nothing. He showed rarely. He lived on an allowance from his father and later his inheritance.",
      "After his death, two retrospective exhibitions — in 1907 and 1910 — revealed the work to a generation of young painters who saw in it something nobody had seen before: a new way of organizing space, a new kind of pictorial truth, a method of looking that would become the foundation of Cubism, abstraction, and everything that defines modern art. Picasso called him 'the father of us all.' He had been dead four years."
    ],
    relatedWorkId: "card-players",
  },
  "10-25": {
    date: "OCTOBER 25, 1881",
    title: "The Most Prolific Artist in History",
    body: [
      "Pablo Picasso was born in Málaga, Spain, on this day in 1881 — the son of an art teacher who recognized his son's ability early and reportedly gave him his own brushes when the boy was thirteen, declaring that his own art career was over.",
      "The statistics are almost incomprehensible: 1,885 paintings, 1,228 sculptures, 2,880 ceramics, 18,000 engravings and lithographs, 12,000 drawings. He worked every day of his adult life. He moved through more styles in a single lifetime than most movements produce in a century: Blue Period, Rose Period, African-influenced work, Analytical Cubism, Synthetic Cubism, Neoclassicism, Surrealism, and back to figuration.",
      "He said: 'Every child is an artist. The problem is how to remain an artist once we grow up.' He solved this problem by never growing up in the relevant sense — by maintaining, to the end of his 91 years, the conviction that the next painting might contain something that had never been seen before."
    ],
    relatedWorkId: "guernica",
  },
  "10-31": {
    date: "OCTOBER 31, 1632",
    title: "Painter of Silence and Light",
    body: [
      "Johannes Vermeer was born in Delft on this day in 1632 — baptized in the Nieuwe Kerk, the son of an innkeeper and art dealer who died when Vermeer was twenty-one, leaving him the inn, the art business, and eleven children to raise.",
      "He painted slowly. In a career of roughly twenty years he produced perhaps 34 surviving paintings — an average of less than two per year. He worked in the same small house, using the same north-facing room, painting the same women, the same furniture, the same light falling through the same window at the same angle across the same Turkish carpet.",
      "He died in 1675, bankrupt, leaving his wife and eleven children in debt to a baker who had been accepting paintings as payment for bread. His reputation did not recover until 1866, when the critic Thoré-Bürger published a series of articles attributing to him works that had been attributed to other painters. Before that, almost no one knew his name."
    ],
    relatedWorkId: "girl-pearl-earring",
  },
  "11-12": {
    date: "NOVEMBER 12, 1840",
    title: "The Sculptor Who Made Marble Breathe",
    body: [
      "Auguste Rodin was born in Paris on this day in 1840 — the son of a police clerk, a poor student, rejected three times by the École des Beaux-Arts (they would later offer him honorary membership, which he declined). He spent his twenties doing decorative stonework for other sculptors.",
      "At 37 he exhibited 'The Age of Bronze' — so lifelike that critics accused him of casting it from a living model rather than carving it. He hadn't. He had simply learned to observe the human body more precisely than any sculptor since Michelangelo.",
      "The commission for 'The Gates of Hell' arrived in 1880 and occupied him for the rest of his life — he was still modifying it when he died in 1917 at 77. 'The Thinker' was originally made for the top of the Gates as a self-portrait of the artist. He eventually made it monumental. It stands now in museums and public squares across the world, usually mistaken for a representation of thought in general, when it was first a portrait of Dante at the entrance to the Inferno."
    ],
  },
  "11-14": {
    date: "NOVEMBER 14, 1840",
    title: "The Painter of Light Itself",
    body: [
      "Claude Monet was born in Paris on this day in 1840 — and grew up in Normandy, where the light off the Channel and the soft moisture in the air taught him everything he needed to know about the elusiveness of color.",
      "He founded Impressionism almost by accident. 'Impression, Sunrise' (1872) was shown at the group's first exhibition in 1874 and mocked by a critic who borrowed the title sarcastically. Monet kept the name. The movement kept the name. The critic is forgotten.",
      "He was nearly blind from cataracts in his final decade, his perception of color shifted toward yellow by the condition, and still he worked. The water lily canvases he painted for the Orangerie — 8 panels, 91 meters total — were his gift to France on Armistice Day 1918. He died in 1926. They were installed in 1927. He did not see them on the walls."
    ],
    relatedWorkId: "water-lilies",
  },
  "11-17": {
    date: "NOVEMBER 17, 1917",
    title: "The Last Great Sculptor",
    body: [
      "Auguste Rodin died at Meudon on this day in 1917, aged 77 — in the house next door to the studio where 'The Gates of Hell' still stood, technically unfinished, as it had stood for 37 years. He had never stopped working on it.",
      "The war had devastated him. His friends were dying, his country was suffering, and the government that had commissioned 'The Gates' was now too occupied with other catastrophes to think about public sculpture. He had been sick for a year, his mind slipping, refusing to eat.",
      "He left everything to the French state: the studio, the works, the collection of ancient sculpture and Japanese prints he had accumulated over a lifetime. The Musée Rodin opened in his house in Paris in 1919. 'The Thinker' sits in the garden. 'The Burghers of Calais' stand in the courtyard. The Gates are inside, still working their way toward completion."
    ],
  },
  "12-04": {
    date: "DECEMBER 4, 1866",
    title: "The First Abstraction",
    body: [
      "Wassily Kandinsky was born in Moscow on this day in 1866 — trained as a lawyer, practicing as an art teacher, and thirty when he saw a Monet haystack painting in Moscow and could not identify what he was looking at in the fading evening light. The fact that the subject was unrecognizable did not prevent the painting from being extraordinarily powerful. That observation changed his life.",
      "He spent the next decade pursuing the implication. If subject matter was not necessary for emotional power, then color and form alone could carry meaning — as music carries meaning without representing anything in the world. His first fully abstract watercolor, made around 1910, is usually identified as the first non-representational work in Western art history.",
      "'Concerning the Spiritual in Art' (1911) — the theoretical text he wrote alongside these first abstractions — remains abstraction's founding document, the book that explains why painting might not need to look like anything."
    ],
  },
  "12-05": {
    date: "DECEMBER 5, 1926",
    title: "Still Painting",
    body: [
      "Claude Monet died at Giverny on this day in 1926, aged 86 — nearly blind, having refused surgery on his cataracts for years because he feared losing what vision he had left, and finally having the surgery, which helped somewhat but left his color perception permanently altered.",
      "He had been working on the water lily paintings for twenty years. The garden at Giverny — the Japanese bridge, the willow trees, the pond — was itself a work of art, designed and planted and managed over decades as a painting subject. He tended it obsessively.",
      "The eight panels of the Grande Décoration, installed in the Orangerie in Paris in 1927, are among the largest paintings ever made — immersive, total, more like an environment than a picture. He had conceived them as a gift to France after the First World War. He did not live to see them installed, dying six months before the opening. His friend Georges Clemenceau attended the ceremony and reportedly wept."
    ],
    relatedWorkId: "water-lilies",
  },
  "12-12": {
    date: "DECEMBER 12, 1863",
    title: "The Face of Anxiety",
    body: [
      "Edvard Munch was born in Løten, Norway, on this day in 1863 — the son of a doctor, a child who lost his mother to tuberculosis at five and his sister Sophie at fifteen; a man for whom anxiety was not a mood but a climate.",
      "'The Scream' (1893) exists in four versions — one in oil, one in tempera, two in pastel. The sky he painted it under was the sky over Ekeberg, on an evening walk when, he wrote in his diary, he felt 'an infinite scream passing through nature.' The swirling colors, the distorted bridge, the two figures walking away — these are not Expressionist stylization. They are what he said he saw.",
      "He gave the painting to Germany. When the Nazis labeled his work degenerate and confiscated it from German museums, he was still alive — he died in 1944, months after his 80th birthday. He left his entire estate, including 1,008 paintings and 15,391 prints, to the city of Oslo. The Munch Museum opened in 1963."
    ],
    relatedWorkId: "the-scream",
  },
  "12-15": {
    date: "DECEMBER 15, 1675",
    title: "Bankrupt, Unknown, Magnificent",
    body: [
      "Johannes Vermeer died in Delft on this day in 1675, aged 43 — leaving his wife Catharina with eleven children, enormous debts, and a house full of paintings that the baker who had been accepting them as payment for bread immediately claimed as collateral.",
      "The Delft art market had collapsed during the French invasion of 1672, which Vermeer always called 'the disaster year.' He had produced almost nothing in the last three years of his life. Catharina later declared that the stress of the invasion had driven him to a 'frenzy' in which he lost his health and died within a day and a half.",
      "His paintings were dispersed and misattributed for two centuries — collected without being recognized as his, sold cheaply, hung in minor rooms. In 1866, the critic Thoré-Bürger published a study that identified 66 works as his (the number is now generally 34–36 authenticated works). The rediscovery was one of the great detective stories in art history."
    ],
    relatedWorkId: "girl-pearl-earring",
  },
  "12-23": {
    date: "DECEMBER 23, 1888",
    title: "The Night in Arles",
    body: [
      "On this night in 1888, Vincent van Gogh cut off the lower portion of his own left ear in his room at the Yellow House in Arles, France — wrapping it in newspaper, walking to a nearby brothel, and presenting it to a woman named Rachel, asking her to 'keep this object carefully.' Gauguin, who had been staying with him and had left that morning after an argument, sent a telegram to Theo.",
      "The causes remain disputed: the argument with Gauguin, financial pressure, the collapse of his dream of an artists' colony in Provence, the onset of what may have been temporal lobe epilepsy, or some combination of all of these. He was hospitalized, released, and then institutionalized voluntarily at Saint-Paul-de-Mausole in May 1889.",
      "From the asylum he painted some of his greatest works — including 'The Starry Night,' painted from the view outside his window in June 1889. He described the whirling sky not as visionary but as what he observed through his barred window every night, trying to understand the motion of stars."
    ],
    relatedWorkId: "starry-night",
  },
  "12-31": {
    date: "DECEMBER 31, 1869",
    title: "The Antidote",
    body: [
      "Henri Matisse was born in Le Cateau-Cambrésis, in northern France, on the last day of 1869 — the son of a grain merchant, destined for a career in law, who was given a box of paints at twenty-one while recovering from appendicitis and understood immediately that he had found the thing he was supposed to do.",
      "He was the great counter-weight to Picasso — equally influential, almost exactly contemporary, and temperamentally opposite. Where Picasso fragmented and destabilized, Matisse simplified and harmonized. 'What I dream of,' he wrote, 'is an art of balance, of purity and serenity — something like a good armchair.'",
      "He died in 1954 with scissors in his hand, in the middle of a cut-out. He had been confined to a wheelchair after surgery in 1941, and had spent the last decade creating the paper cut-outs — simple, joyful shapes in pure color — that many consider his greatest achievement. The Matisse Chapel in Vence, which he designed entirely in his 80s from a wheelchair, is one of the most beautiful rooms in the world."
    ],
    relatedWorkId: "the-dance-matisse",
  },
};

export const TODAY_IN_ART: Record<string, string> = {

  // ─── JANUARY ─────────────────────────────────────────────────────────────────

  "01-01": "1879: Pierre de Coubertin is born — his revival of the Olympic Games included art competitions in painting, sculpture, and architecture from 1912 to 1948.",
  "01-02": "1839: Louis Daguerre demonstrates his photographic process to the French Academy of Sciences — within months, the daguerreotype changes how humanity records the visible world.",
  "01-03": "1883: Gustave Doré dies in Paris — illustrator of Dante's Inferno, Don Quixote, and the Bible, his dramatic engravings shaped the Victorian visual imagination more than any painter.",
  "01-04": "1643: Isaac Newton is born in Woolsthorpe — his experiments on light and color, published in Opticks (1704), gave painters the first scientific framework for understanding the spectrum.",
  "01-05": "1592: The construction of Isfahan's great mosque complexes begins under Shah Abbas I — one of the world's supreme achievements in architectural tile art and geometric ornament.",
  "01-06": "1412: Joan of Arc is born in Domrémy — her image has been painted by Ingres, Millais, and Rossetti, and she remains one of the most depicted figures in Western art.",
  "01-07": "1768: The Royal Academy of Arts is founded in London by King George III, with Joshua Reynolds as its first president — the institution that will define British art for two centuries.",
  "01-08": "1824: Eugène Delacroix writes to a friend that he has discovered 'the true secret of painting' — his turn toward pure, unblended color defines Romantic painting.",
  "01-09": "1873: Napoleon III dies in exile in England — the Second Empire whose lavish court culture patronized Ingres, Géricault, and Delacroix ends not with a proclamation but a quiet death.",
  "01-10": "1863: The National Gallery in London acquires Velázquez's 'Rokeby Venus' — the first Velázquez to enter a British public collection.",
  "01-11": "1928: Thomas Hardy dies in Dorchester — the landscape of Dorset he described in his novels inspired a generation of English pastoral painters.",
  "01-12": "1628: Charles Perrault born in Paris — his fairy tales, including Cinderella and Sleeping Beauty, inspire centuries of illustrators from Gustave Doré to Arthur Rackham.",
  "01-13": "1898: Émile Zola publishes 'J'Accuse' in L'Aurore — the novelist who championed the Impressionists and was painted by Manet makes his most courageous public act.",
  "01-14": "1875: Albert Schweitzer is born — his philosophy of reverence for life would influence 20th-century humanitarian art and the ethics of documentary photography.",
  "01-15": "1929: Martin Luther King Jr. is born in Atlanta — his movement would inspire a generation of American artists, from Jacob Lawrence and Romare Bearden to Faith Ringgold.",
  "01-16": "1944: Allied forces begin recovering Nazi-looted art from German salt mines — millions of stolen masterpieces, including works by Raphael and Vermeer, begin their long journey home.",
  "01-17": "1706: Benjamin Franklin is born in Boston — his portrait by the French painter Joseph Siffred Duplessis became the defining image of the American Enlightenment.",
  "01-18": "1882: A.A. Milne is born in London — E.H. Shepard's gentle illustrations for Winnie-the-Pooh are among the most beloved drawings in the history of children's literature.",
  "01-19": "1839: Paul Cézanne is born in Aix-en-Provence — the painter who dismantled the Renaissance tradition of fixed perspective and built the foundation for Cubism and modern art.",
  "01-20": "1921: Amedeo Modigliani's memorial exhibition opens in Paris — already gone for a year, the sculptor and portraitist is being discovered by the very collectors who ignored him in life.",
  "01-21": "1793: Louis XVI is executed in Paris — Jacques-Louis David, the Revolution's official artist, witnesses it; he has already designed the visual imagery of the trial.",
  "01-22": "1561: Francis Bacon (the philosopher) is born — his empiricism and inductive method reshaped how European thought engaged with observation, the basis of both science and realist art.",
  "01-23": "1832: Édouard Manet is born in Paris — the painter who destroyed academic convention by placing modern Parisian life in the compositional space once reserved for gods and allegories.",
  "01-24": "1848: Gold is discovered at Sutter's Mill in California — the Gold Rush that follows transforms American landscape painting and establishes the mythology of the Western frontier.",
  "01-25": "1882: Virginia Woolf is born in London — her writing on vision, time, and consciousness directly influenced visual artists across Bloomsbury and far beyond.",
  "01-26": "1905: The Gustave Moreau Museum opens in Paris — the Symbolist painter bequeathed his studio-house, with its thousands of paintings and drawings, to the French state.",
  "01-27": "1756: Wolfgang Amadeus Mozart is born in Salzburg — the relationship between music and visual art defines the classical age; Ingres painted him and played violin at his own concerts.",
  "01-28": "1547: Henry VIII dies — under his reign Hans Holbein the Younger transformed English court portraiture and created the definitive visual record of the Tudor dynasty.",
  "01-29": "1886: Karl Benz patents the first true automobile — by 1909, Marinetti's Futurist Manifesto will declare the racing car more beautiful than the Victory of Samothrace.",
  "01-30": "1948: Mahatma Gandhi is assassinated in New Delhi — Margaret Bourke-White's Life magazine portraits define his image for history; her photographs are among the century's most powerful.",
  "01-31": "1797: Franz Schubert is born in Vienna — the Lied composer whose intimate music parallels the emotional scale and personal feeling of German Romantic painting.",

  // ─── FEBRUARY ────────────────────────────────────────────────────────────────

  "02-01": "1893: The Columbian Exposition in Chicago completes its preparations — its 'White City' of classical buildings launches the City Beautiful movement in American urban design.",
  "02-02": "1882: James Joyce is born in Dublin — stream of consciousness in literature runs parallel to Cubism in art; both shatter linear time and unified perspective.",
  "02-03": "1809: Felix Mendelssohn is born in Hamburg — his revival of Bach's 'St. Matthew Passion' in 1829 mirrors the Nazarene painters' revival of Renaissance devotional art.",
  "02-04": "1948: The National Gallery returns to Trafalgar Square after wartime evacuation — all 1,800 paintings had been hidden in Welsh slate quarries throughout the Blitz.",
  "02-05": "1840: The first daguerreotype portrait session opens a commercial studio in London — within weeks, painted portraiture begins its long recession as photography takes its place.",
  "02-06": "1665: Anne of Austria dies — the French queen mother who commissioned Peter Paul Rubens to paint the Luxembourg Palace cycle, one of the grandest Baroque decorative programs ever executed.",
  "02-07": "1878: Pope Pius IX dies — his papacy preserved and greatly expanded the Vatican Museums, keeping Rome the supreme destination for art pilgrims from around the world.",
  "02-08": "1587: Mary Queen of Scots is executed at Fotheringhay — her image, preserved in Nicholas Hilliard's miniatures, becomes one of the most emotionally compelling faces of the 16th century.",
  "02-09": "1637: The Dutch tulip market collapses after Tulip Mania — the same flower appears in Dutch Golden Age still-life paintings by Jan Davidsz. de Heem and Rachel Ruysch.",
  "02-10": "1258: The Mongols sack Baghdad and burn the House of Wisdom — among history's greatest losses of illustrated manuscripts, scientific diagrams, and decorative art.",
  "02-11": "1847: Thomas Edison is born in Milan, Ohio — electric light transforms how paintings are exhibited; Impressionism was already anticipating the difference between gaslight and daylight.",
  "02-12": "1809: Abraham Lincoln is born in Kentucky — his portraits by George P.A. Healy and Mathew Brady's photographs define America's visual memory of the Civil War era.",
  "02-13": "1883: Richard Wagner dies in Venice — the composer whose concept of Gesamtkunstwerk (total artwork) directly shapes Art Nouveau's drive to unify all the arts.",
  "02-14": "1400: Richard II of England dies — patron of the Wilton Diptych, the most exquisite small-scale masterpiece of the International Gothic style.",
  "02-15": "1564: Galileo Galilei is born in Pisa — his telescopic observations reshape the philosophical context for Baroque art and establish the tradition of scientific illustration.",
  "02-16": "1959: Frank Lloyd Wright's Guggenheim Museum receives its final public certification before opening — its spiral ramp permanently redefines how art and architecture can coexist.",
  "02-17": "1653: Arcangelo Corelli is born — his concertos embody the same structural clarity that defines Baroque painting: a balance between ornament and order, emotion and control.",
  "02-18": "1564: Michelangelo dies in Rome at 88 — the greatest artist of the Western tradition, who worked until four days before his death on his final Pietà.",
  "02-19": "1473: Nicolaus Copernicus is born in Royal Prussia — his heliocentric revolution displaces humanity from the center of the cosmos and begins reordering the symbolic world of art.",
  "02-20": "1792: The French Convention votes to make the Louvre a national museum — declaring art the property of all citizens, the revolutionary act that transforms the museum from royal treasury to public institution.",
  "02-21": "1677: Baruch Spinoza dies in The Hague — his philosophical writings on beauty and the infinite shaped the aesthetic sensibility of the Dutch Golden Age.",
  "02-22": "1630: Dutch tulip speculation is at its peak — the same year Jan Davidsz. de Heem paints some of his most extravagant flower pieces; commerce and art share the same obsession.",
  "02-23": "1455: Johannes Gutenberg completes printing the first Bible — its decorated initials bridge medieval manuscript illumination and print; the age of the illustrated book begins.",
  "02-24": "1786: Wilhelm Grimm is born in Hanau — his fairy tales with brother Jacob inspire illustrators from Rackham to Maurice Sendak; the Grimm tradition defines illustrated storytelling.",
  "02-25": "1841: Pierre-Auguste Renoir is born in Limoges — the Impressionist painter of light, joy, and the outdoor pleasures of Paris who proved beauty was a worthy subject for serious art.",
  "02-26": "1802: Victor Hugo is born in Besançon — his novel Notre-Dame de Paris (1831) launches a century of architectural preservation movements across Europe.",
  "02-27": "1902: John Steinbeck is born in Salinas, California — 'The Grapes of Wrath' directly inspires Dorothea Lange's Dust Bowl photographs, among the most powerful documentary images ever made.",
  "02-28": "1533: Michel de Montaigne is born in Périgord — the essayist whose self-examination parallels Rembrandt's lifelong practice of self-portraiture: both men put the examined self at the center of art.",

  // ─── MARCH ───────────────────────────────────────────────────────────────────

  "03-01": "1469: Niccolò Machiavelli is born in Florence — his political realism and the world of Renaissance Florence's art patronage are inseparable.",
  "03-02": "1793: The Louvre opens as a public museum for the first time with 537 paintings on display — the revolutionary act of making art the property of all citizens.",
  "03-03": "1847: Alexander Graham Bell is born in Edinburgh — the telegraph and telephone he helps pioneer transform art criticism by allowing instant cultural conversation across continents.",
  "03-04": "1394: Rogier van der Weyden is born in Tournai — the greatest Flemish painter after van Eyck, whose emotional intensity and psychological depth define Northern Gothic art.",
  "03-05": "1770: The Boston Massacre takes place — Paul Revere's engraving of the event, rushed out within weeks, becomes America's first major work of political art.",
  "03-06": "1475: Michelangelo is born in Caprese, Italy — sculptor, painter, architect, poet, and singular force of nature who defined human creative ambition for all time.",
  "03-07": "1875: Maurice Ravel is born in Ciboure — his 'Pictures at an Exhibition' orchestration creates music in explicit conversation with Hartmann's paintings; art forms commune.",
  "03-08": "1717: The Banqueting House in Whitehall installs Rubens's ceiling paintings — the greatest Baroque decorative cycle in England, commissioned by Charles I.",
  "03-09": "1934: Yuri Gagarin is born in Klushino — his 1961 space flight inspires cosmic abstraction and a generation of Space Age design that transforms popular visual culture.",
  "03-10": "1876: Alexander Graham Bell makes the first telephone call — meanwhile Auguste Rodin is beginning work on 'The Gates of Hell,' the project that will consume his creative life.",
  "03-11": "1818: Mary Shelley publishes 'Frankenstein' — the novel's imagery of the created being and the terrible sublime directly shapes Romantic painting's engagement with ambition and hubris.",
  "03-12": "1685: George Frideric Handel is born in Halle — his oratorios inspire the monumental religious history paintings of the 18th century, particularly in England.",
  "03-13": "1639: Nicolas Poussin writes his famous letter from Rome defining modes in painting — the theoretical foundation of French academic classicism for the next two centuries.",
  "03-14": "1883: Karl Marx dies in London — his theories of labor and alienation would profoundly shape 20th-century art movements from social realism to the Situationist International.",
  "03-15": "44 BC: Julius Caesar is assassinated in the Theatre of Pompey — one of Western art's most depicted scenes, painted by Vincenzo Camuccini and carved on countless Roman reliefs.",
  "03-16": "1838: The National Gallery in London acquires its founding collection — 38 paintings given by Sir George Beaumont establish one of the world's great public art institutions.",
  "03-17": "1834: Edgar Degas is born in Paris — the painter of ballet dancers, café life, and horse races who understood that modern art had to be found in the margins of spectacle.",
  "03-18": "1745: William Kent dies — the English architect who invented the landscape garden, making natural scenery into an aesthetic experience designed to be walked through like a painting.",
  "03-19": "1628: Rembrandt van Rijn receives his first recorded commission in Leiden — the greatest Dutch painter's career begins with a portrait for a wealthy merchant.",
  "03-20": "1828: Henrik Ibsen is born in Skien, Norway — his theatrical realism transformed dramatic art across Europe and shaped the visual world of Norwegian and Scandinavian painting.",
  "03-21": "1685: Johann Sebastian Bach is born in Eisenach — whose mathematical musical architecture is the auditory equivalent of Baroque visual complexity; the two arts share the same mind.",
  "03-22": "1832: Johann Wolfgang von Goethe dies in Weimar — his Theory of Colors (1810) directly influenced Turner and the Impressionists; he believed Newton had got color entirely wrong.",
  "03-23": "1953: Raoul Dufy dies in Forcalquier — the Fauve painter who brought explosive, joyful color to Riviera scenes, horse races, and concert halls.",
  "03-24": "1603: Elizabeth I dies — under her reign Nicholas Hilliard created the Tudor miniature, England's first truly original art form and the ancestor of the portrait photograph.",
  "03-25": "1436: Brunelleschi's dome of Florence Cathedral is consecrated — the engineering marvel that proves the Renaissance can surpass antiquity; the dome still defines the Florentine skyline.",
  "03-26": "1827: Ludwig van Beethoven dies in Vienna — Delacroix painted him; his Eroica Symphony defined Romantic art's concept of the heroic individual against fate.",
  "03-27": "1845: Wilhelm Röntgen is born — his 1895 discovery of X-rays allows scientists to look beneath the paint surface of Old Masters; conservation science is born.",
  "03-28": "1483: Raphael is born in Urbino, Italy — the master of grace, harmony, and the ideal human form, who died at 37 having completed works that define the High Renaissance.",
  "03-29": "1891: Georges Seurat dies in Paris at 31, leaving his final painting 'Le Cirque' unfinished — the inventor of Pointillism cut short before his greatest ambitions could be realized.",
  "03-30": "1853: Vincent van Gogh is born in Groot-Zundert, Netherlands — the painter whose work sold for almost nothing in his lifetime and whose 'Starry Night' is now America's most beloved painting.",
  "03-31": "1596: René Descartes is born in La Haye en Touraine — 'I think therefore I am' shapes the Enlightenment's turn toward rational, observable truth as the basis of all representation.",

  // ─── APRIL ───────────────────────────────────────────────────────────────────

  "04-01": "1939: The Spanish Civil War ends — Picasso's 'Guernica,' painted in response to the Nazi bombing of a Basque town two years earlier, has already become the century's defining anti-war image.",
  "04-02": "1875: Hans Christian Andersen dies in Copenhagen — his fairy tales inspire generations of illustrators from Edmund Dulac to Kay Nielsen; the tradition of the literary picture book begins here.",
  "04-03": "1882: Jesse James is shot — the mythology of the American West that figures like Jesse James embody becomes the subject of Remington, Russell, and a century of Western painters.",
  "04-04": "1968: Martin Luther King Jr. is assassinated in Memphis — the Civil Rights movement had already inspired a generation of activist art; his death galvanizes it further.",
  "04-05": "1588: Thomas Hobbes is born in Malmesbury — his political philosophy of absolute power shapes the imagery of sovereignty in European court painting and royal portraiture.",
  "04-06": "1520: Raphael dies in Rome on his 37th birthday — all of Rome mourns; his body lies in state in the Vatican before burial in the Pantheon.",
  "04-07": "1770: William Wordsworth is born in Cockermouth — his poetry of natural beauty and the sublime directly shapes the Romantic landscape tradition of Constable and Turner.",
  "04-08": "1973: Pablo Picasso dies in Mougins, France, at age 91 — the most prolific and influential artist of the 20th century, who remade painting three times in a single lifetime.",
  "04-09": "1865: The American Civil War ends — Winslow Homer's paintings of the aftermath become the defining images of national reconciliation and a changed country.",
  "04-10": "1778: William Hazlitt is born in Maidstone — the greatest English art critic of his age, who rescued Rembrandt and the Dutch masters from neglect with passionate, original writing.",
  "04-11": "1827: Charles Willson Peale dies — founder of America's first public museum and painter of George Washington; he named his children Rembrandt, Rubens, and Titian.",
  "04-12": "1861: The American Civil War begins — photography will transform war documentation forever; Matthew Brady's images redefine what it means to witness history.",
  "04-13": "1743: Thomas Jefferson is born at Shadwell, Virginia — architect, art collector, and the man who brought Neoclassicism to American public buildings and to Monticello.",
  "04-14": "1865: Lincoln is shot at Ford's Theatre — Alexander Gardner's photographs of the death scene and the funeral train become among the most studied images in American cultural history.",
  "04-15": "1452: Leonardo da Vinci is born in Vinci, Italy — the man who wanted to know everything and nearly did; painter, sculptor, architect, engineer, anatomist, and the defining genius of Western civilization.",
  "04-16": "1867: Käthe Kollwitz is born in Königsberg — the greatest German artist of social suffering, whose prints of poverty, war, and grief have never been surpassed for moral power.",
  "04-17": "1790: Benjamin Franklin dies in Philadelphia — his portrait by Joseph Siffred Duplessis, replicated on the $100 bill, is the most reproduced image of any Founding Father.",
  "04-18": "1882: Charles Darwin dies in Down, Kent — his theory of evolution transforms Western art's understanding of humanity's place in nature and the legitimacy of the animal as subject.",
  "04-19": "1828: Francisco Goya dies in Bordeaux at 82, in exile from Spain — the most modern of all Old Masters, whose 'Black Paintings' would not be understood for another century.",
  "04-20": "1927: Joan Miró completes 'The Hunter (Catalan Landscape)' — the work that announces his break from representation and his invention of a purely symbolic visual language.",
  "04-21": "753 BC: Rome is traditionally founded — the city whose art, architecture, and mythology would shape Western visual culture for 2,500 years and counting.",
  "04-22": "1870: Vladimir Lenin is born in Simbirsk — his revolution would impose Socialist Realism as state doctrine and drive the Russian avant-garde underground or into exile.",
  "04-23": "1616: William Shakespeare dies in Stratford-upon-Avon — his plays have inspired more paintings, sculptures, and illustrations than any other literary work in history.",
  "04-24": "1916: The Easter Rising begins in Dublin — Jack B. Yeats immortalizes Irish revolutionary mythology in paint; the uprising becomes the founding myth of a visual culture.",
  "04-25": "1873: Walter Sickert is born in Munich — the English painter who bridges French Impressionism and Camden Town Realism, and whose dark domestic interiors anticipate film noir.",
  "04-26": "1798: Eugène Delacroix is born in Charenton-Saint-Maurice — master of Romantic color, the most important French painter of the 19th century, and the godfather of Impressionism.",
  "04-27": "1791: Samuel Morse is born in Charlestown, Massachusetts — inventor of the telegraph and a significant painter who founded the National Academy of Design in New York.",
  "04-28": "1442: Lorenzo de' Medici is born in Florence — the greatest art patron of the Renaissance, under whose leadership Botticelli, Leonardo, and Michelangelo all flourish.",
  "04-29": "1863: William-Adolphe Bouguereau shows 'Birth of Venus' at the Paris Salon — the academic masterwork of ideal beauty that the Impressionists would spend a decade revolting against.",
  "04-30": "1883: Édouard Manet dies in Paris at 51 — nine days after his left leg is amputated; the painter who destroyed academic convention and made modern painting possible is gone.",

  // ─── MAY ─────────────────────────────────────────────────────────────────────

  "05-01": "1851: The Great Exhibition opens at the Crystal Palace in Hyde Park — the world's first international exhibition of industry and design, attended by six million visitors.",
  "05-02": "1519: Leonardo da Vinci dies at Amboise, France, in the arms of King Francis I — who reportedly wept and said he had never met a man who knew so much about painting, sculpture, and architecture.",
  "05-03": "1469: Niccolò Machiavelli is born in Florence — his analysis of power and the necessity of appearances shapes the visual culture of Italian court portraiture.",
  "05-04": "1970: Four students are shot at Kent State University — John Filo's photograph wins the Pulitzer Prize and becomes the defining anti-Vietnam War image.",
  "05-05": "1879: Honoré Daumier dies in Valmondois — the greatest caricaturist in the history of art, whose savage images of lawyers and politicians invented art as social criticism.",
  "05-06": "1856: Sigmund Freud is born in Moravia — without his theories of the unconscious there is no Surrealism: no Dalí, no Magritte, no Ernst.",
  "05-07": "1833: Johannes Brahms is born in Hamburg — his lifelong friendship with Clara Schumann inspired some of the most emotionally charged art of the Romantic era.",
  "05-08": "1903: Paul Gauguin dies in the Marquesas Islands at 54 — alone, half-blind, and in debt; 'Where Do We Come From?' is already hanging in Boston, still not yet famous.",
  "05-09": "1800: John Brown of Haddington dies — the theologian whose moral seriousness and Scottish intellectual culture shaped the Presbyterian aesthetic that influenced American portraiture.",
  "05-10": "1796: Asher B. Durand is born in New Jersey — the painter who defined the Hudson River School's philosophy: the American wilderness as sacred text, a cathedral without walls.",
  "05-11": "1904: Salvador Dalí is born in Figueres, Catalonia — painter of the unconscious, whose 'Persistence of Memory' makes the melting watch the most recognized symbol of dreamlike unreality.",
  "05-12": "1820: Florence Nightingale is born in Florence, Italy — her rose diagram (1858) is one of the most beautiful and consequential statistical infographics ever created.",
  "05-13": "1648: The Académie Royale de Peinture et de Sculpture is founded in Paris — the institution that will control French art for 150 years and against which all future revolutions are defined.",
  "05-14": "1940: As Nazi forces invade the Netherlands, Dutch museum directors evacuate their collections — Vermeer's 'Girl with a Pearl Earring' is removed from the Mauritshuis and hidden.",
  "05-15": "1863: The Salon des Refusés opens in Paris — a parallel exhibition for work rejected by the official Salon; Manet's 'Luncheon on the Grass' creates a scandal that changes art history.",
  "05-16": "1763: James Boswell meets Samuel Johnson for the first time in a London bookshop — Reynolds will paint both men; the great friendship produces the most illustrated biography in English literature.",
  "05-17": "1510: Sandro Botticelli dies in Florence — the painter of the 'Birth of Venus' dies poor and forgotten; it will take Ruskin and the Pre-Raphaelites to recognize his greatness three centuries later.",
  "05-18": "1909: The Ballets Russes premieres in Paris at the Théâtre du Châtelet — Diaghilev's collaboration with Picasso, Matisse, and Braque transforms theatrical and costume design.",
  "05-19": "1536: Anne Boleyn is executed at the Tower of London — Hans Holbein's portraits of Henry VIII's court record the human cost of Tudor politics in faces that survive the politics themselves.",
  "05-20": "1506: Christopher Columbus dies in Valladolid — his voyages brought pre-Columbian gold, textiles, and carved objects to European eyes, permanently expanding the world of decorative arts.",
  "05-21": "1471: Albrecht Dürer is born in Nuremberg — master printmaker, painter, and theorist who bridged the Northern and Italian Renaissance and made the self-portrait a serious art form.",
  "05-22": "1813: Richard Wagner is born in Leipzig — his concept of Gesamtkunstwerk (total artwork) directly inspires Art Nouveau's drive to unify architecture, painting, and the decorative arts.",
  "05-23": "1707: Carl Linnaeus is born in Råshult — his taxonomic system becomes the model for Winckelmann's classification of Greek art styles; science and art history share the same intellectual method.",
  "05-24": "1844: Samuel Morse sends the first telegraph message — the inventor of the telegraph was also a painter who studied in Europe and founded the National Academy of Design.",
  "05-25": "1803: Ralph Waldo Emerson is born in Boston — his essay 'Nature' (1836) becomes the philosophical foundation of the Hudson River School and American landscape painting.",
  "05-26": "1564: Christopher Marlowe is born in Canterbury — the playwright whose supernatural imagery and Faustian themes inspire Symbolist painters from Delacroix to Moreau.",
  "05-27": "1703: St. Petersburg is founded by Peter the Great — he will import European art wholesale, found the Hermitage collection, and begin Russia's great museum tradition.",
  "05-28": "1888: The Moulin Rouge dance hall opens in Montmartre — Henri de Toulouse-Lautrec's posters make it immortal; poster art becomes a serious medium overnight.",
  "05-29": "1453: Constantinople falls to the Ottomans — Byzantine art traditions disperse to Italy, bringing icon painting, mosaic technique, and Greek manuscripts that fertilize the Renaissance.",
  "05-30": "1431: Joan of Arc is burned at the stake in Rouen — one of Western art's most depicted martyrdoms, painted by Ingres, Millais, Jules Bastien-Lepage, and hundreds of others.",
  "05-31": "1819: Walt Whitman is born in West Hills, New York — his 'Song of Myself' inspires American realist painters from Thomas Eakins to George Bellows with its democratic celebration of the body.",

  // ─── JUNE ────────────────────────────────────────────────────────────────────

  "06-01": "1926: Marilyn Monroe is born in Los Angeles — Andy Warhol's 'Marilyn Diptych' (1962) transforms her into the supreme icon of Pop Art and mass media's power over identity.",
  "06-02": "1840: Thomas Hardy is born in Higher Bockhampton, Dorset — his novels' pastoral landscapes shaped the English rural painting tradition; the same countryside that Constable had painted.",
  "06-03": "1875: Georges Bizet dies in Bougival — his opera 'Carmen' inspires Sargent's Spanish paintings and Sorolla's sunlit Valencian scenes; Romantic Spain becomes a visual obsession.",
  "06-04": "1783: The Montgolfier brothers launch the first public hot-air balloon in Annonay — the spectacle immediately becomes a popular subject for Neoclassical prints and decorative arts.",
  "06-05": "1898: Federico García Lorca is born in Fuente Vaqueros — his surreal imagery, Andalusian sensibility, and friendship with Dalí link Spanish poetry to the Surrealist visual world.",
  "06-06": "1944: D-Day landings take place at Normandy — Robert Capa's blurred, terrifying photographs from Omaha Beach are among the most powerful war images ever made.",
  "06-07": "1848: Paul Gauguin is born in Paris — the painter who fled European civilization for the South Pacific, searching for a primitive spiritual authenticity free of academic convention.",
  "06-08": "1869: Frank Lloyd Wright is born near Richland Center, Wisconsin — the architect who invented organic architecture in dialogue with Japanese design, the Arts and Crafts movement, and the American prairie.",
  "06-09": "1963: The Peggy Guggenheim Collection in Venice is incorporated into the Solomon R. Guggenheim Foundation — one of the finest private collections of modern art is secured for the public.",
  "06-10": "1190: Holy Roman Emperor Frederick Barbarossa drowns in the Saleph River — his Crusade imagery appears in medieval illustrated manuscripts as an epic of Christian ambition and failure.",
  "06-11": "1864: Richard Strauss is born in Munich — his symphonic poems inspire a generation of Symbolist painters; music and painting share the same ambition of evoking the ineffable.",
  "06-12": "1890: Egon Schiele is born in Tulln, Austria — the Expressionist draughtsman whose raw, angular self-portraits pushed figurative art to the edge of what portraiture could bear.",
  "06-13": "1865: William Butler Yeats is born in Sandymount, Dublin — his poetry and mysticism directly inspire Celtic Revival art and the visual culture of Irish nationalism.",
  "06-14": "1777: The Stars and Stripes is adopted as the American flag — Betsy Ross and the flag's graphic design become subjects of patriotic American history painting throughout the 19th century.",
  "06-15": "1594: Nicolas Poussin is born in Les Andelys, Normandy — the French painter who moved to Rome and established the classical tradition in French art; every academic painter after him owes a debt.",
  "06-16": "1903: James McNeill Whistler dies in London — the American expatriate who proved that a painting could be pure music, need tell no story, and still be profound.",
  "06-17": "1703: John Wesley is born in Epworth — his Methodist movement profoundly affected British social painting, from Hogarth's moral narratives to the Victorian religious canvases of the Royal Academy.",
  "06-18": "1815: The Battle of Waterloo ends Napoleon's empire — David paints the defeated emperor across the Channel in Elba; a whole visual culture of Napoleonic glory is suddenly obsolete.",
  "06-19": "1623: Blaise Pascal is born in Clermont-Ferrand — his writings on the infinite and the human condition shape the Romantic and Symbolist art that follows his philosophical tradition.",
  "06-20": "1837: Queen Victoria ascends to the throne — her 63-year reign, the longest in English history to that point, becomes one of the most artistically prolific and debated periods in cultural history.",
  "06-21": "1527: The Sack of Rome by Charles V's imperial troops — one of the great catastrophes of Renaissance art; many artists flee north, and the Mannerist style scatters across Europe.",
  "06-22": "1805: Giuseppe Mazzini is born in Genoa — his nationalist politics inspire the Italian Risorgimento and its visual culture of patriotic history painting and commemorative public sculpture.",
  "06-23": "1912: Alan Turing is born in London — the mathematician whose computer science would eventually power digital art, generative imagery, and the tools of contemporary visual creation.",
  "06-24": "1842: Ambrose Bierce is born in Horse Cave Creek, Ohio — his dark, sardonic vision would influence Expressionist and Symbolist art's engagement with death and irony.",
  "06-25": "1906: Stanford White, the great Gilded Age architect and designer of Madison Square Garden and numerous New York landmarks, is shot dead at a rooftop dinner — one of the era's defining scandals.",
  "06-26": "1963: President Kennedy delivers his 'Ich bin ein Berliner' speech in West Berlin — the divided city becomes a canvas for Cold War symbolism that culminates in the Berlin Wall's murals.",
  "06-27": "1880: Helen Keller is born in Tuscumbia, Alabama — Paul Fjelde's sculpture of Keller and Anne Sullivan is among the most moving portraits in American commemorative art.",
  "06-28": "1914: Archduke Franz Ferdinand is assassinated in Sarajevo — the First World War it triggers will destroy a generation of European artists and permanently fracture academic tradition.",
  "06-29": "1900: Antoine de Saint-Exupéry is born in Lyon — author and illustrator of 'The Little Prince,' the most translated book in French literature, whose watercolors are instantly recognizable worldwide.",
  "06-30": "1685: Domenico Scarlatti is born in Naples — his harpsichord sonatas embody the same decorative elegance, wit, and controlled ornamentation that define the Rococo visual style.",

  // ─── JULY ────────────────────────────────────────────────────────────────────

  "07-01": "1916: The Battle of the Somme begins on the Western Front — Paul Nash and Christopher Nevinson will document the landscape of mechanical slaughter in paintings that define British war art.",
  "07-02": "1850: The Pre-Raphaelite Brotherhood is publicly denounced by Charles Dickens in Household Words — the controversy makes them famous and their exhibition attendance triples.",
  "07-03": "1883: Franz Kafka is born in Prague — his dreamlike narratives of bureaucratic entrapment directly inspire Surrealist imagery; Dalí's work is often called Kafkaesque before Kafka's term was coined.",
  "07-04": "1776: The United States Declaration of Independence is signed — John Trumbull's painting of this moment hangs in the Capitol Rotunda; the Founding Fathers become the subjects of American civic art.",
  "07-05": "1810: Phineas Taylor Barnum is born in Bethel, Connecticut — his showmanship and the spectacle economy he creates shape commercial art, poster design, and the aesthetics of popular entertainment.",
  "07-06": "1907: Frida Kahlo is born in Coyoacán, Mexico — the painter of personal mythology, physical suffering, and Mexican identity whose self-portraits make her the most recognized female artist in history.",
  "07-07": "1860: Gustav Mahler is born in Kaliště, Bohemia — his symphonies occupy the same cultural moment as Klimt's 'The Kiss' and Schiele's drawings; the fin-de-siècle crisis expressed in sound and image.",
  "07-08": "1839: The French Academy of Sciences officially announces the daguerreotype — the beginning of photography as a public art form and the most consequential change in image-making since oil paint.",
  "07-09": "1850: Zachary Taylor dies — his presidency overlaps with the height of Hudson River School painting; Thomas Cole's 'The Course of Empire' captures the Romantic America of the era.",
  "07-10": "1834: James Whistler is born in Lowell, Massachusetts — the painter who proved art need not tell a story, prove a moral, or represent anything other than the sensation of color and light.",
  "07-11": "1767: John Quincy Adams is born — the only American president who was also a serious poet; his patronage of Thomas Sully contributed to early American portraiture.",
  "07-12": "1536: Desiderius Erasmus dies in Basel — the humanist patron of Hans Holbein who commissioned his most important portraits; Holbein's Erasmus defines what a great portrait can do.",
  "07-13": "1793: Charlotte Corday murders Jean-Paul Marat in his bath in Paris — Jacques-Louis David paints 'The Death of Marat' within weeks; it immediately becomes one of history's great political paintings.",
  "07-14": "1862: Gustav Klimt is born in Baumgarten, Vienna — painter of gold, sexuality, and the death-haunted beauty of the Vienna Secession whose 'The Kiss' is the most romantic painting ever made.",
  "07-15": "1606: Rembrandt van Rijn is born in Leiden, Netherlands — the greatest Dutch painter, whose self-portraits form the most profound visual autobiography in Western art history.",
  "07-16": "1969: Apollo 11 launches from Cape Canaveral — the photographs of Earth from space transform environmental consciousness and inspire a generation of cosmic abstract painting.",
  "07-17": "1853: The first world's fair art exhibition opens at the New York Crystal Palace — European academic art confronts American naturalism for the first time on American soil.",
  "07-18": "1610: Caravaggio dies on a beach near Porto Ercole at 38 — one of the most violent and brilliant lives in art history ends in fever and destitution, far from the Rome he had conquered.",
  "07-19": "1834: Edgar Degas is born in Paris — the painter of ballet rehearsals, jockeys, and café tables; the artist who made Impressionism look at the unglamorous work behind every performance.",
  "07-20": "1969: Neil Armstrong walks on the moon — the iconic photographs of the mission are among the most reproduced images in human history; the Moon landing transforms how humanity sees itself.",
  "07-21": "1899: Ernest Hemingway is born in Oak Park, Illinois — his terse, precise prose is the literary equivalent of Matisse's economy of means: maximum effect from minimum means.",
  "07-22": "1376: Lorenzo Ghiberti is born in Florence — sculptor of the Baptistery 'Gates of Paradise,' the bronze doors Michelangelo called worthy of the entrance to heaven.",
  "07-23": "1840: James Clark Ross returns from his first Antarctic expedition — his voyage inspires the Romantic tradition of sublime polar landscape painting and the imagery of the unconquered earth.",
  "07-24": "1783: Simón Bolívar is born in Caracas — the liberation of South America from Spain opens a new chapter for Latin American art; a century of national painting follows the wars of independence.",
  "07-25": "1554: Mary I of England marries Philip II of Spain — the political union temporarily transfers Flemish art traditions to the English court; Habsburg taste reshapes English patronage.",
  "07-26": "1875: Carl Jung is born in Kesswil, Switzerland — his archetypes, collective unconscious, and theories of the anima become the theoretical framework for much 20th-century symbolic and mythological art.",
  "07-27": "1890: Vincent van Gogh shoots himself in a wheat field near Auvers-sur-Oise — he will linger for two days, dying on July 29, with his brother Theo at his bedside.",
  "07-28": "1866: Beatrix Potter is born in Kensington, London — her delicate watercolor illustrations of Peter Rabbit and friends define the English children's book tradition for generations.",
  "07-29": "1890: Vincent van Gogh dies in Auvers-sur-Oise at 37 — 'The sadness will last forever,' he says; his brother Theo dies six months later; in 30 years their work will be worth millions.",
  "07-30": "1863: Henry Ford is born in Dearborn, Michigan — the assembly line he invents inspires both Futurism's worship of machines and Diego Rivera's 'Detroit Industry Murals.'",
  "07-31": "1919: The Weimar Constitution is adopted in Germany — Walter Gropius opens the Bauhaus the same year; the most influential design school in history launches amid political crisis.",

  // ─── AUGUST ──────────────────────────────────────────────────────────────────

  "08-01": "1944: Anne Frank makes her last diary entry in Amsterdam — her hiding place is discovered the next day; her story becomes one of the most powerful testimonies in the history of human suffering.",
  "08-02": "1876: Wild Bill Hickok is shot dead in Deadwood, South Dakota — his image becomes central to American Western mythology, endlessly reproduced in painting, illustration, and film.",
  "08-03": "1778: La Scala opera house opens in Milan — its ornate interior becomes a template for theatrical design and the grand interior spaces painted by Guardi and Canaletto.",
  "08-04": "1792: Percy Bysshe Shelley is born in Field Place, Sussex — his 'Ozymandias' is the Romantic era's great meditation on the destruction of art and the vanity of those who commission it.",
  "08-05": "1962: Marilyn Monroe dies in Los Angeles — Warhol begins his 'Marilyn' silkscreen series within weeks; grief becomes icon; mass reproduction transforms a face into a symbol.",
  "08-06": "1660: Diego Velázquez dies in Madrid at 61 — the greatest Spanish painter, whose 'Las Meninas' would not be fully analyzed for another 300 years; Foucault opens 'The Order of Things' with it.",
  "08-07": "1876: Mata Hari is born in Leeuwarden — her image, constructed through Otto Wegener's photographs and her own performance, is one of the early 20th century's most fascinating studies in self-invention.",
  "08-08": "1786: Mont Blanc is climbed for the first time by Balmat and Paccard — the conquest of the Alps transforms landscape painting; the mountain sublime becomes Romanticism's defining subject.",
  "08-09": "1593: Izaak Walton is born in Stafford — author of 'The Compleat Angler,' whose pastoral English riverscape would inspire the tradition of English countryside painting.",
  "08-10": "1874: Herbert Hoover is born in West Branch, Iowa — as president, he championed the founding of the National Gallery of Art in Washington, which opened in 1941.",
  "08-11": "1956: Jackson Pollock dies in a car accident in Springs, Long Island, at 44 — the founder of Action Painting is gone; the art world will never fully process the loss of his restless energy.",
  "08-12": "1955: Thomas Mann dies in Zurich — his novella 'Death in Venice' is the 20th century's most sustained meditation on the relationship between beauty, art, and fatal obsession.",
  "08-13": "1899: Alfred Hitchcock is born in Leytonstone, London — his visual storytelling makes cinema the 20th century's pre-eminent art form; every frame of his films is a composed image.",
  "08-14": "1457: Johannes Gutenberg's financial partnership with Fust dissolves — the conflict ends the printing project and forces Gutenberg from his own workshop; the history of illustrated books pivots.",
  "08-15": "1771: Walter Scott is born in Edinburgh — his historical novels inspire the most productive era of history painting in British art, from Delacroix's Ivanhoe scenes to Millais's Ophelia.",
  "08-16": "1888: T.E. Lawrence is born in Tremadoc, Wales — 'Lawrence of Arabia,' whose portrait by Eric Kennington defines the romantic mythology of the desert campaign.",
  "08-17": "1786: Antonio Canova's 'Theseus and the Minotaur' is unveiled in Rome — the young sculptor's breakthrough launches Neoclassical sculpture's dominance over the Baroque tradition.",
  "08-18": "1587: Virginia Dare is born on Roanoke Island — the first English child born in America; John White's watercolors from the same colony are the first European illustrations of North American life.",
  "08-19": "1819: James Watt dies in Birmingham — the steam engine pioneer whose technology transforms the industrial landscape that Turner and Constable will paint through clouds of coal smoke.",
  "08-20": "1940: Leon Trotsky is assassinated in Mexico City — his death coincides with the high point of Diego Rivera's and Siqueiros's radical mural work in the same country.",
  "08-21": "1911: The Mona Lisa is stolen from the Louvre by Vincenzo Peruggia — she is missing for two years, triggering global headlines; the theft makes her the most famous painting in history.",
  "08-22": "1485: The Battle of Bosworth Field — Richard III is killed, the Tudor dynasty begins, and Hans Holbein's court portraits of the new royal family define the era's visual record.",
  "08-23": "1754: Louis XVI is born at Versailles — the last king whose court patronage maintained the greatest concentration of art in French history, much of it later transferred to the Louvre.",
  "08-24": "79 AD: Mount Vesuvius erupts, destroying Pompeii — the city's rediscovery in 1748 triggers Neoclassicism and provides the most vivid surviving evidence of Roman decorative art.",
  "08-25": "1900: Friedrich Nietzsche dies in Weimar — his philosophy of the will to power and the Dionysian impulse reshaped modern art's relationship to beauty, morality, and the purpose of creating.",
  "08-26": "1743: Antoine Lavoisier is born in Paris — the chemist later guillotined by the Revolution; his work on combustion and the nature of color contributed to the science of artists' pigments.",
  "08-27": "1576: Titian dies in Venice of plague at approximately 88 — the greatest Venetian painter, who changed forever how paint on canvas could describe the warmth of living flesh.",
  "08-28": "1749: Johann Wolfgang von Goethe is born in Frankfurt — poet, novelist, and author of 'Theory of Colors' (1810), which influenced Turner and the Impressionists with its attack on Newton.",
  "08-29": "1632: John Locke is born in Wrington — his philosophy of knowledge through experience and sensory observation shapes the Enlightenment's turn toward empirical, observable truth in painting.",
  "08-30": "1871: Ernst Haeckel publishes plates from his biological illustrations — his radiolarian and jellyfish drawings are among the most beautiful scientific images ever produced, directly inspiring Art Nouveau.",
  "08-31": "1870: The Siege of Paris begins during the Franco-Prussian War — for four months, Impressionist Paris is a city under siege; the experience accelerates the Commune and the exile of many artists.",

  // ─── SEPTEMBER ───────────────────────────────────────────────────────────────

  "09-01": "1939: Germany invades Poland, beginning World War II — the war will define art's moral horizon for a generation; the Holocaust will produce testimonial art unlike anything in history.",
  "09-02": "1666: The Great Fire of London destroys the medieval city — Wren's rebuilding, including St. Paul's Cathedral, reshapes London's skyline and creates the English Baroque.",
  "09-03": "1943: Allied troops land in mainland Italy — they will find Nazi-looted artworks hidden in villas in the Florentine hills, beginning the great postwar restitution effort.",
  "09-04": "1958: Brigitte Bardot appears on the cover of Life magazine — Pop Art's obsession with the mass-media female image begins crystallizing; Warhol will make this the century's dominant art subject.",
  "09-05": "1698: Peter the Great returns from his European 'Grand Embassy' — his tour of Dutch studios and workshops transforms Russian art, architecture, and design for the next century.",
  "09-06": "1766: John Dalton is born in Eaglesfield — his atomic theory and his personal color blindness together contribute to the scientific study of color perception that informs Impressionist theory.",
  "09-07": "1533: Queen Elizabeth I is born at Greenwich Palace — the Tudor court's visual culture, defined by Hilliard's miniatures, reaches its extraordinary peak under her long reign.",
  "09-08": "1830: Frédéric Mistral is born in Maillane — the Nobel laureate whose celebration of Provençal landscape and culture directly inspired the post-Impressionist painters working in the same region.",
  "09-09": "1901: Henri de Toulouse-Lautrec dies at the Château Malromé at 36 — the chronicler of Montmartre's performers leaves a collection of 700 paintings and 5,000 drawings of unflinching humanity.",
  "09-10": "1846: Elias Howe patents the sewing machine — the industrialization of textile production changes the economics of fabric art; the Pre-Raphaelites are embroidering their own frames this same decade.",
  "09-11": "2001: The attacks on the World Trade Center destroy artworks and create an empty skyline that becomes one of the most powerful memorial images of the century.",
  "09-12": "1888: Vincent van Gogh arrives in Arles and rents the Yellow House — the most productive 15 months in the history of painting begins; he will complete over 300 works before leaving.",
  "09-13": "1822: Jean-François Champollion announces he has deciphered Egyptian hieroglyphics — ancient Egyptian art opens to scholarly understanding for the first time; Egyptomania transforms decorative arts.",
  "09-14": "1321: Dante Alighieri dies in Ravenna — his 'Divine Comedy,' illustrated by Botticelli, Gustave Doré, and Blake, becomes the most illustrated literary text in Western history.",
  "09-15": "1890: Agatha Christie is born in Torquay — her detective fiction is illustrated with the graphic clarity that influenced Art Deco design; her early editions define inter-war book cover art.",
  "09-16": "1620: The Mayflower departs from Plymouth, England — the Pilgrim voyagers carry a visual culture that will eventually become distinctly American; John White had painted these shores 30 years earlier.",
  "09-17": "1862: The Battle of Antietam — Alexander Gardner's photographs of the battlefield dead, exhibited in New York, are the first American photographs of battlefield casualties.",
  "09-18": "1709: Samuel Johnson is born in Lichfield — his 'Dictionary' and critical writings shape 18th-century aesthetic discourse; he is painted by Reynolds multiple times.",
  "09-19": "1551: Henry II of France orders the decoration of the Fontainebleau Palace — Italian Mannerists Rosso Fiorentino and Primaticcio transform French royal taste permanently.",
  "09-20": "1946: The first Cannes Film Festival is held — cinema becomes the 20th century's pre-eminent visual art form; the Palme d'Or is awarded from the same cultural impulse that gave us the Turner Prize.",
  "09-21": "1452: Girolamo Savonarola is born in Ferrara — the Dominican friar whose Bonfire of the Vanities (1497) destroyed Renaissance paintings, mirrors, and books in the Piazza della Signoria.",
  "09-22": "1792: The French Republic is proclaimed — the revolutionary government renames, nationalizes, and reorganizes royal art collections; the modern public museum is born.",
  "09-23": "1846: The planet Neptune is discovered — the revelation of new worlds changes art's relationship to science; the infinite becomes a subject for the Symbolists and later the Abstract Expressionists.",
  "09-24": "1501: Michelangelo signs his contract to carve 'David' from a block of marble previously abandoned by two sculptors — three years later, the statue will be carried through the streets of Florence.",
  "09-25": "1903: Mark Rothko is born in Dvinsk, Russia — the painter whose color-field canvases make color itself the subject, and who described his works as 'basic human emotions — tragedy, ecstasy, doom.'",
  "09-26": "1888: T.S. Eliot is born in St. Louis, Missouri — 'The Waste Land' (1922) parallels Picasso's Cubist fragmentation of narrative; both arts shatter linear time and unified perspective simultaneously.",
  "09-27": "1917: Edgar Degas dies in Paris — he has quietly outlived Impressionism, living to see his work celebrated by the very critics who once dismissed it; he leaves 150 sculptures and 700 paintings.",
  "09-28": "1573: Caravaggio is born in Milan — the painter who brought brutal, democratic realism to sacred subjects, who invented chiaroscuro as pure drama, and whose influence never stopped.",
  "09-29": "1571: The Battle of Lepanto — the Christian fleet defeats the Ottomans in the largest naval battle since antiquity; Titian commemorates it in a painting for Philip II of Spain.",
  "09-30": "1452: The Gutenberg Bible is completed — the first major book produced by movable-type printing; its hand-painted decorated initials bridge the medieval manuscript tradition and the printed age.",

  // ─── OCTOBER ─────────────────────────────────────────────────────────────────

  "10-01": "1949: Mao Zedong proclaims the People's Republic of China — Chinese art is immediately redirected toward Socialist Realism; traditional ink painting survives underground.",
  "10-02": "1452: Richard III is born — his disputed face, captured in Tudor portraits and debated ever since, makes him one of history's most-discussed portrait subjects.",
  "10-03": "1867: The United States purchases Alaska from Russia for $7.2 million — new arctic landscapes open to Western painters; the imagery of the sublime cold frontier expands.",
  "10-04": "1669: Rembrandt van Rijn dies in Amsterdam — the greatest Dutch painter, bankrupt and forgotten by the city whose merchant class he once celebrated; he leaves 600 paintings and 1,400 drawings.",
  "10-05": "1864: Louis Lumière is born in Besançon — the inventor of cinema, along with his brother Auguste, creates the 20th century's defining art form and the most democratic picture-making machine.",
  "10-06": "1908: The Ashcan School's landmark exhibition opens in New York — Robert Henri's gritty urban realism, painted in the streets of New York, permanently expands what American art considers worthy.",
  "10-07": "1849: Edgar Allan Poe dies in Baltimore — his Gothic imagination and philosophy of beauty directly inspire the Symbolist movement in France and the darkest works of Redon and Moreau.",
  "10-08": "1871: The Great Chicago Fire destroys much of the city — the rebuilding produces the Chicago School of Architecture, the first to use the steel frame and the direct ancestor of the modern skyscraper.",
  "10-09": "1835: The Great Comet of 1835 appears — Turner paints comets and atmospheric spectacles; the same comet visible to ancient peoples becomes a subject for Romantic painting of the natural sublime.",
  "10-10": "1880: The Metropolitan Museum of Art opens its Fifth Avenue building in Central Park — one of the world's great museums finds the home it still inhabits today.",
  "10-11": "1521: Pope Leo X dies — the Medici pope whose patronage financed Raphael's Vatican rooms and the first serious plans for the rebuilding of St. Peter's Basilica.",
  "10-12": "1492: Columbus reaches the Bahamas — beginning the global exchange that would bring pre-Columbian gold, featherwork, and carved jade to European eyes; world art is permanently enlarged.",
  "10-13": "1884: The Greenwich Meridian is adopted as the world's prime meridian — standardized maps become tools for empire; cartography as visual art reaches its political and aesthetic peak.",
  "10-14": "1066: The Battle of Hastings — the Bayeux Tapestry, begun within years of the battle, becomes the most important embroidered narrative in art history: a 70-meter strip of political illustration.",
  "10-15": "1844: Friedrich Nietzsche is born in Röcken — his concept of the Dionysian impulse and his proclamation that 'God is dead' reshape modern art's relationship to beauty, suffering, and the sacred.",
  "10-16": "1793: Marie Antoinette is executed at the guillotine — the last queen whose court style defined the Rococo now becomes a subject for Romantic painters; her image is perpetually reconsidered.",
  "10-17": "1849: Frédéric Chopin dies in Paris at 39 — his intimate salon music parallels Delacroix's intimate oil sketches; both men explore Romantic emotion in the smallest possible scale.",
  "10-18": "1776: John Adams writes admiringly from Paris about the French art academies — the Founding Fathers' engagement with European aesthetic culture shapes early American artistic ambition.",
  "10-19": "1216: King John of England dies — his Magna Carta is illustrated in medieval manuscripts that survive as some of the earliest examples of political art and legal iconography.",
  "10-20": "1632: Christopher Wren is born in East Knoyle, Wiltshire — architect of St. Paul's Cathedral, 51 London churches, and the defining master of the English Baroque.",
  "10-21": "1879: Thomas Edison successfully demonstrates the practical electric light bulb — artificial illumination transforms how paintings are exhibited and how artists depict the night.",
  "10-22": "1906: Paul Cézanne dies in Aix-en-Provence — caught in a rainstorm while painting outdoors, he collapses and dies five days later; the father of modern art never stops working.",
  "10-23": "1648: The Peace of Westphalia ends the Thirty Years War — the Dutch Republic, victorious and prosperous, enters its Golden Age of painting; Rembrandt, Vermeer, and Hals are all at work.",
  "10-24": "1260: Chartres Cathedral is consecrated — the supreme achievement of Gothic stained glass, whose filtered colored light is the closest the medieval world comes to abstract painting.",
  "10-25": "1881: Pablo Picasso is born in Málaga, Spain — the most prolific and transformative artist of the 20th century, who said 'Every child is an artist; the problem is how to remain one as an adult.'",
  "10-26": "1759: The British Museum opens to the public — the world's first national public museum, founded with the collection of Hans Sloane; universal access to art and culture becomes a principle.",
  "10-27": "1728: James Cook is born in Marton, Yorkshire — his Pacific voyages bring back drawings of peoples and places never seen by Europeans; the artists aboard his ships expand the world of art.",
  "10-28": "1886: The Statue of Liberty is dedicated in New York Harbor — Frédéric Auguste Bartholdi's colossal copper sculpture, the largest in the world at the time, is a gift of art between nations.",
  "10-29": "1787: Mozart's 'Don Giovanni' premieres in Prague — its theatrical staging sets templates for dramatic design; the opera's visual culture will inspire paintings for the next century.",
  "10-30": "1883: The Metropolitan Opera opens in New York — its grand interior architecture and theatrical design define American cultural ambition at the height of the Gilded Age.",
  "10-31": "1632: Johannes Vermeer is born in Delft — the painter of silence, domestic light, and the poetry of ordinary rooms; he will leave only 34 paintings, each one a world.",

  // ─── NOVEMBER ────────────────────────────────────────────────────────────────

  "11-01": "1755: The Lisbon earthquake kills 60,000 and destroys the city — the catastrophe tests Enlightenment philosophy and unleashes a wave of Romantic imagery about the power of nature over civilization.",
  "11-02": "1755: Marie Antoinette is born at Schönbrunn Palace — her fashion, her patronage, and her tragic fate define the last flowering of Rococo art at the Palace of Versailles.",
  "11-03": "1901: André Malraux is born in Paris — whose concept of the 'museum without walls,' made possible by photography, revolutionized access to art and the concept of art history itself.",
  "11-04": "1922: Howard Carter discovers the entrance to Tutankhamun's tomb in the Valley of the Kings — the greatest archaeological discovery of the century; Egyptian art floods into popular visual culture.",
  "11-05": "1855: Søren Kierkegaard dies in Copenhagen — his philosophy of anxiety, the self, and the leap of faith directly influences Expressionist art and provides the intellectual world of Munch's 'The Scream.'",
  "11-06": "1814: Adolphe Sax is born in Dinant — inventor of the saxophone; musical instruments become subjects for Cubist still-life paintings by Picasso and Braque throughout the 1910s.",
  "11-07": "1867: Marie Curie is born in Warsaw — the first woman to win a Nobel Prize; her work on radioactivity influences avant-garde thinking about invisible forces and the nature of matter.",
  "11-08": "1519: Hernán Cortés enters the Aztec capital Tenochtitlán — the encounter with Aztec art, architecture, and gold objects astonishes the Spanish; reports of the city describe an aesthetic wonder.",
  "11-09": "1989: The Berlin Wall falls — overnight, the wall itself becomes a canvas; the East Side Gallery murals painted on its remnants become the most politically charged street art in history.",
  "11-10": "1483: Martin Luther is born in Eisleben — the Reformation he ignites would transform European art forever: saints disappear from Protestant churches; the portrait rises to fill the void.",
  "11-11": "1821: Fyodor Dostoevsky is born in Moscow — his novels of suffering, guilt, and transcendence directly inspire the visual world of Russian Expressionism and 20th-century psychological realism.",
  "11-12": "1840: Auguste Rodin is born in Paris — the sculptor who liberated sculpture from its pedestal, brought Michelangelo's unfinished quality into modern art, and made marble breathe.",
  "11-13": "1850: Robert Louis Stevenson is born in Edinburgh — his 'Treasure Island' illustrated by N.C. Wyeth defines the adventure-illustration tradition; the book's images outlast the text for many readers.",
  "11-14": "1840: Claude Monet is born in Paris — founder of Impressionism and painter of light itself, who proved that the subject of painting is not a lily pond but the changing light that falls on it.",
  "11-15": "1492: Columbus's journal describes indigenous Caribbean art for the first time — gold ornaments, woven cotton, and carved wooden objects noted with wonder and immediately sent to Spain.",
  "11-16": "1532: Francisco Pizarro captures the Inca Emperor Atahualpa — the Spanish proceed to melt down tons of Inca gold objects to smelt into bars; a civilization's art disappears in weeks.",
  "11-17": "1917: Auguste Rodin dies at Meudon at 77 — the greatest sculptor since Michelangelo, whose 'Thinker,' 'Gates of Hell,' and Balzac monument define what modern sculpture could be.",
  "11-18": "1928: Mickey Mouse makes his debut in 'Steamboat Willie' — animation becomes an art form; Disney's visual style shapes a century of popular imagery and the aesthetics of childhood.",
  "11-19": "1828: Franz Schubert dies in Vienna at 31 — his intimate music parallels the scale and personal emotion of German Romantic painting; like Keats, he packs a lifetime's work into a brief one.",
  "11-20": "1917: The Battle of Cambrai introduces mass tank warfare — Paul Nash's paintings of the blasted Western Front will record mechanical warfare's apocalyptic landscape with unforgettable precision.",
  "11-21": "1694: Voltaire is born in Paris — the Enlightenment's wittiest voice whose writings shaped how educated Europeans thought about art, taste, and the social purpose of beauty.",
  "11-22": "1963: President Kennedy is assassinated in Dallas — the Zapruder film and the news photographs become among the most analyzed visual documents in American cultural history.",
  "11-23": "1221: Alfonso X of Castile is born — the 'Wise King' whose court produced the Cantigas de Santa Maria, the most sumptuously illustrated musical manuscript of the Middle Ages.",
  "11-24": "1864: Henri de Toulouse-Lautrec is born in Albi — the aristocrat whose congenital illness stunted his legs and drove him to Montmartre, where he immortalized its performers in paint and print.",
  "11-25": "1844: Karl Benz is born in Mühlburg — the internal combustion engine he patents would transform industry, inspire Futurism's worship of the machine, and produce Pop Art's car culture imagery.",
  "11-26": "1792: Claude Chappe demonstrates his optical telegraph system in Paris — the visual transmission of information at speed transforms the relationship between art, journalism, and public knowledge.",
  "11-27": "1095: Pope Urban II calls the First Crusade at Clermont — the Crusades bring Byzantine icon painting, Islamic geometric ornament, and Eastern textile design into contact with Romanesque Europe.",
  "11-28": "1520: Ferdinand Magellan enters the Pacific Ocean — his circumnavigation confirms the globe's size; the visual world begins to absorb Asian art, Pacific islanders, and the scope of the earth.",
  "11-29": "1832: Louisa May Alcott is born in Germantown, Pennsylvania — the illustrators of 'Little Women' establish the tradition of American domestic scene painting in miniature.",
  "11-30": "1667: Jonathan Swift is born in Dublin — his satire, illustrated by Grandville and John Tenniel, defines the tradition of literary caricature and the satirical image in English visual culture.",

  // ─── DECEMBER ────────────────────────────────────────────────────────────────

  "12-01": "1913: The Armory Show closes in New York after 88,000 visitors — the most consequential art exhibition in American history; Duchamp's 'Nude Descending a Staircase' is the scandal of the century.",
  "12-02": "1859: Georges Seurat is born in Paris — the inventor of Pointillism who applied the science of optical color mixing to painting, making art systematically and scientifically beautiful.",
  "12-03": "1795: Sir Joshua Reynolds dies in London — first president of the Royal Academy, he defined British Grand Manner painting and elevated portraiture to the dignity of history painting.",
  "12-04": "1866: Wassily Kandinsky is born in Moscow — the painter who produced the first purely abstract painting around 1910 and wrote 'Concerning the Spiritual in Art,' abstraction's founding text.",
  "12-05": "1926: Claude Monet dies at Giverny at 86 — the last great Impressionist, who painted until his final weeks despite near-blindness; the water lily canvases at the Orangerie are his monument.",
  "12-06": "1768: The Royal Academy of Arts holds its first exhibition in London — the institution that will define British art for two centuries opens, with Reynolds's portrait of King George III.",
  "12-07": "1598: Gian Lorenzo Bernini is born in Naples — sculptor, architect, and theatrical genius who transformed Rome into a Baroque stage set and made marble look like living flesh.",
  "12-08": "1542: Mary Queen of Scots is born at Linlithgow Palace — her image, preserved in miniatures and state portraits, becomes one of the most emotionally compelling faces of the 16th century.",
  "12-09": "1679: Jan Steen dies in Leiden — the Dutch genre painter whose boisterous, moralizing household scenes are among the most technically accomplished and socially observant in the Golden Age.",
  "12-10": "1896: Alfred Nobel dies in San Remo — his prizes, awarded for the first time in 1901, bring international recognition to scientists and writers whose work intersects with the world of art.",
  "12-11": "1475: Paolo Uccello dies in Florence — the eccentric painter of perspective whose 'Battle of San Romano' is the most technically audacious work of the early Renaissance.",
  "12-12": "1863: Edvard Munch is born in Løten, Norway — the painter who gave anxiety a face; 'The Scream' is the most recognizable image of psychological anguish in the history of art.",
  "12-13": "1553: Henry IV of France is born — his wars of religion and eventual conversion to Catholicism shape a France that will produce the great baroque religious painting of the 17th century.",
  "12-14": "1799: George Washington dies at Mount Vernon — his portrait by Gilbert Stuart, replicated from life on the Athenaeum canvas, becomes the most reproduced portrait in American history.",
  "12-15": "1675: Johannes Vermeer dies in Delft at 43 — bankrupt, leaving eleven children and a wife; his paintings were so little known that he was not rediscovered as a master until the 1860s.",
  "12-16": "1775: Jane Austen is born in Steventon, Hampshire — her novels' acute social observation parallels the precision of Regency portrait painting; both chart the same world with the same eye.",
  "12-17": "1770: Ludwig van Beethoven is baptized in Bonn — born a day or two earlier, his music defines the transition from Classical to Romantic in all the arts; his death mask becomes an icon.",
  "12-18": "1879: Paul Klee is born in Münchenbuchsee, Switzerland — the painter-musician who made childlike imagery and cosmic structure inseparable; his Bauhaus teaching transformed design education.",
  "12-19": "1848: Emily Brontë dies in Haworth at 30 — her 'Wuthering Heights' landscape is the literary equivalent of Turner's sublime; the Yorkshire moors she describes are already becoming images.",
  "12-20": "1848: The Pre-Raphaelite Brotherhood publishes the first issue of 'The Germ' — their magazine of art and poetry launches the movement; Rossetti publishes 'The Blessed Damozel' in its pages.",
  "12-21": "1898: Marie and Pierre Curie announce the discovery of radium — the invisible energy within matter inspires avant-garde thinking about unseen forces; abstraction owes something to radioactivity.",
  "12-22": "1858: Giacomo Puccini is born in Lucca — his operas inspire the most sumptuous theatrical designs of the Art Nouveau and early 20th-century period; 'La Bohème' is set in an artist's Paris garret.",
  "12-23": "1888: Vincent van Gogh cuts off the lower part of his own ear in Arles, France — the act of self-mutilation becomes art history's most famous personal crisis; Gauguin has left that morning.",
  "12-24": "1818: 'Silent Night' is performed for the first time in Oberndorf — the carol's global spread parallels the commercialization of Christmas imagery, from the Pre-Raphaelites to Victorian greeting cards.",
  "12-25": "1642: Isaac Newton is born at Woolsthorpe Manor (Old Style) — his Opticks (1704) gives painters the first scientific account of color, light, and the spectrum; the Impressionists work in his shadow.",
  "12-26": "1791: Charles Babbage is born in London — inventor of the analytical engine, the precursor to computers; the digital tools of contemporary art trace their ancestry to his mechanical dreams.",
  "12-27": "1571: Johannes Kepler is born in Weil der Stadt — his laws of planetary motion transform the Baroque's understanding of cosmic order and the infinite; the heavens become mathematically beautiful.",
  "12-28": "1895: The Lumière brothers hold the first public film screening in Paris at the Grand Café — cinema, the 20th century's defining visual medium, is born in a basement on the Boulevard des Capucines.",
  "12-29": "1890: The Wounded Knee Massacre occurs in South Dakota — one of the most photographed catastrophes in American history; its visual record shapes Native American memorial and protest art.",
  "12-30": "1865: Rudyard Kipling is born in Bombay — his 'Jungle Book' illustrated by John Lockwood Kipling and his imperial vision of India shape the visual language of late-Victorian expansionism.",
  "12-31": "1869: Henri Matisse is born in Le Cateau-Cambrésis, France — the painter whose pure color and joyful line are the antidote to everything dark in modern art; he will die with scissors in his hand.",
};

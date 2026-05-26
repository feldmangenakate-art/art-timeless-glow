// artists-modern.ts
// Era 4 of 4: Modern (1860–1970s)
// 8 artists: Monet · Van Gogh · Klimt · Picasso · Dalí · Magritte · Kahlo · Warhol
// portraitWikimedia: exact filename on Wikimedia Commons — download from:
// https://commons.wikimedia.org/wiki/File:[filename]
// All images are public domain or Creative Commons

import { Artist } from "./artists-renaissance";

export const MODERN_ARTISTS: Artist[] = [

  // ─── CLAUDE MONET ─────────────────────────────────────────────

  {
    id: "claude-monet",
    name: "Claude Monet",
    born: "November 14, 1840 · Paris, France",
    died: "December 5, 1926 · Giverny, France · aged 86",
    nationality: "French",
    movement: "Impressionism",
    era: "Modern",
    eraColor: "#70A8B8",
    portraitImage: "/artists/monet.jpg",
    portraitWikimedia: "Claude_Monet_1899_Nadar_crop.webp",
    tagline: "The man who spent 26 years painting the same pond — and invented modern painting in the process.",

    biography: `Claude Monet was born in Paris but grew up in Normandy, where his father ran a grocery business and his mother sang. He showed early talent as a caricaturist — quick, irreverent portraits of local worthies that he sold for ten to twenty francs — and was taken under the wing of the landscape painter Eugène Boudin, who introduced him to painting outdoors. That encounter was decisive. Boudin's insistence on capturing the specific quality of light at a specific moment — not the generalized golden light of academic painting but the actual light of Normandy on a particular Tuesday afternoon in October — became the foundation of everything Monet would spend his life pursuing.

He moved to Paris in 1859, studied at the Académie Suisse, met Pissarro, Renoir, Sisley, and Bazille, and gradually developed the loose, broken brushwork and high-key color that would define Impressionism. The movement got its name — initially as an insult — from his painting Impression, Sunrise, shown at the first Impressionist exhibition in 1874. The critic Louis Leroy wrote a satirical review mocking the work's sketchiness; the artists adopted the name with pride. Monet spent the following decades in financial struggle, personal loss (his first wife Camille died of tuberculosis in 1879 at age 32, and Monet painted her on her deathbed, watching his hand mix colors with a horrified detachment he later described as an act of compulsion), and gradual, hard-won recognition.

In 1883 he settled in Giverny, a village in Normandy, and began creating the garden that would become both his greatest work and his greatest subject. He bought the house, then the meadow across the road, diverted a stream, built a Japanese bridge, planted water lilies, and for the last 30 years of his life painted almost nothing else. The great Water Lilies series — culminating in the eight enormous panels now installed in the Orangerie in Paris, each wall-sized, showing the pond surface in different lights and seasons — was conceived as a total environment, what Monet called a "refuge of peaceful meditation." He worked on them through World War One, through the deaths of his son and his close friend Clemenceau, and through increasingly severe cataracts that eventually left him nearly blind.`,

    shockingTruth: `Monet was a deeply difficult man in his personal life. His relationship with Alice Hoschedé — who became his second wife in 1892 — began while her husband Ernest was still alive, and both families lived together at Giverny in an arrangement that Normandy society found scandalous. Ernest, a bankrupt department store magnate who had been one of Monet's early patrons, died in 1891; Monet and Alice married the following year. Monet's sons from his first marriage and Alice's six children from hers were raised together, and two of them — his son Jean and her daughter Blanche — eventually married each other.

More disturbing is the account of what happened when Monet's cataracts became severe. He knew his color perception was failing — he was seeing the blues and violets that a cataract-affected lens distorts toward yellow and brown. He repainted finished canvases in rage and frustration, destroying works he had considered complete. After cataract surgery in 1923, when his clear vision was restored, he was horrified by the colors he had been using and went back through his recent work with a palette knife, scraping and repainting. Several of the late paintings we now see as proto-abstract masterpieces were, to Monet, failures — evidence of his inability to see correctly. He destroyed a number of them. The ones that survived were hidden by Blanche and later given to the nation.`,

    whyTheyMatter: `Monet's influence operates on two levels. The first is technical: his dissolution of form into light and color, his willingness to leave brushstrokes visible rather than blending them away, his use of the canvas surface as a record of perception rather than a window onto reality — all of this became the foundation of modern painting. Without Monet there is no Cézanne, no Matisse, no Abstract Expressionism, no Color Field painting. The argument that the entire history of 20th-century painting flows from the Impressionist revolution is not much of an exaggeration.

The second level is more specific and more beautiful. The Water Lilies at the Orangerie in Paris — eight paintings installed in two oval rooms exactly as Monet specified — are one of the few genuinely transcendent experiences that art offers. The rooms are silent. The light is controlled. The paintings surround you completely. You are inside them, not in front of them. Standing there, you understand what Monet meant by "refuge of peaceful meditation" — and you understand why he spent the last decade of his life, half-blind, in a garden in Normandy, trying to get it right.`,

    masterworksIds: ["water-lilies"],
    collectionIds: ["impression-sunrise", "haystacks", "rouen-cathedral", "japanese-bridge"],
  },

  // ─── VINCENT VAN GOGH ─────────────────────────────────────────

  {
    id: "vincent-van-gogh",
    name: "Vincent Willem van Gogh",
    born: "March 30, 1853 · Zundert, Netherlands",
    died: "July 29, 1890 · Auvers-sur-Oise, France · aged 37",
    nationality: "Dutch",
    movement: "Post-Impressionism",
    era: "Modern",
    eraColor: "#70A8B8",
    portraitImage: "/artists/van-gogh.jpg",
    portraitWikimedia: "Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_(454045).webp",
    tagline: "He sold one painting in his lifetime. He changed art forever.",

    biography: `Vincent van Gogh was born in Zundert in the Dutch province of Brabant, the eldest surviving son of a Dutch Reformed pastor. He was named after a stillborn brother born exactly a year before him — a shadow presence whose name he carried throughout his life and who has been the subject of extensive psychobiographical speculation. He spent his twenties failing at everything he tried: art dealer (fired for expressing his opinions too forcefully), teacher (briefly, in England), bookshop assistant, theology student (failed the entrance exam), and lay preacher (dismissed for living too squalidly among the miners he was serving). He was 27 years old before he decided to become a painter.

What followed is one of the most concentrated and extraordinary creative careers in history. Working largely in isolation, supported financially by his devoted brother Theo — a successful art dealer who sent him a monthly allowance in exchange for paintings — Van Gogh produced over 2,100 works in ten years, including 860 oil paintings. He was largely self-taught, learning from prints and from copying Millet and Delacroix, developing his technique through sheer obsessive practice. He moved to Paris in 1886, encountered Impressionism and Japanese woodblock prints, and his palette transformed almost overnight from the dark, earth-toned realism of his Dutch period to the blazing, expressive color of his mature work.

In 1888 he went south to Arles, dreaming of founding an artists' colony in the Midi. He invited Gauguin to join him. The two men lived together for nine weeks, argued constantly, and the episode ended with Van Gogh cutting off part of his own ear and delivering it to a woman at a local brothel. He checked himself into the asylum at Saint-Paul-de-Mausole in Saint-Rémy in 1889, where he painted the Starry Night and over 150 other works. He died in Auvers-sur-Oise on July 29, 1890, two days after being shot — whether by his own hand or by someone else remains disputed. He was 37 years old. He had sold one painting in his lifetime: The Red Vineyard, for 400 francs, four months before his death.`,

    shockingTruth: `The ear episode is the most famous act of self-mutilation in art history, but the details are stranger than the myth. Van Gogh did not cut off his entire ear — he cut off only the lower portion of his left earlobe. The recipient was not a lover but a woman named Rachel, possibly a cleaner at the local brothel, to whom he presented the wrapped ear with the instruction to "keep this object carefully." The exact cause of the breakdown is debated: most accounts blame the catastrophic collapse of his friendship with Gauguin, who was preparing to leave Arles; some scholars implicate the stress of his estrangement from his family following his brother Theo's recent engagement.

The death is even more mysterious than commonly told. The official account — that Van Gogh shot himself in a field outside Auvers — has been challenged by two art historians, Steven Naifeh and Gregory White Smith, who argued in their 2011 biography that he was accidentally shot by a local teenage boy who had been taunting him, and that Van Gogh, not wanting to get the boy in trouble, took responsibility for the wound. The evidence is circumstantial but suggestive — most notably, the angle of the wound, which was difficult to self-inflict, and the absence of the gun, which was never found. The theory remains contested but has never been definitively refuted.`,

    whyTheyMatter: `Van Gogh's posthumous influence is almost impossible to measure because it operates at every level simultaneously — technical, emotional, mythological, commercial. Technically, his use of color as pure expression — not describing what things look like but what they feel like — opened the door to Fauvism, Expressionism, and the entire tradition of emotionally charged abstraction. Matisse, Kirchner, and every Expressionist painter acknowledged the debt.

Commercially, he is the artist against whom auction records are measured. His Portrait of Dr. Gachet sold for $82.5 million in 1990; his portraits and landscapes regularly appear in the top ten most expensive paintings ever sold. The Starry Night at MoMA is the single most visited painting in the United States. And mythologically — the mad genius, the suffering artist, the genius unrecognized in his lifetime — he is the figure against whom every subsequent narrative of the tortured artist is measured. Whether that myth serves his work or obscures it is the central question of Van Gogh studies. The paintings themselves, when you stand before them, cut through the myth with extraordinary directness. They are not the work of madness. They are the work of a man looking at the world with absolute attention and painting exactly what he saw.`,

    masterworksIds: ["starry-night", "sunflowers"],
    collectionIds: ["bedroom-arles", "potato-eaters", "portrait-gachet"],
  },

  // ─── GUSTAV KLIMT ─────────────────────────────────────────────

  {
    id: "gustav-klimt",
    name: "Gustav Klimt",
    born: "July 14, 1862 · Baumgarten, Austria",
    died: "February 6, 1918 · Vienna · aged 55",
    nationality: "Austrian",
    movement: "Symbolism / Art Nouveau / Vienna Secession",
    era: "Modern",
    eraColor: "#9B8040",
    portraitImage: "/artists/klimt.jpg",
    portraitWikimedia: "Klimt_-_Klimt_und_Emilie.webp",
    tagline: "The painter of desire and gold — who made erotic art sacred and sacred art erotic.",

    biography: `Gustav Klimt was born in a suburb of Vienna, the second of seven children of a gold engraver from Bohemia. The craft of his father — the working of metal into decorative surface — is visible in everything Klimt ever made. He trained at the Vienna School of Arts and Crafts and established himself in the 1880s as a highly successful decorative painter, creating ceiling frescoes and murals for public buildings in the grand academic manner of the Habsburg Empire. He was respectable, technically brilliant, and completely conventional. Then, in 1897, he co-founded the Vienna Secession.

The Secession was Vienna's break from academic art — a declaration that art should serve life rather than tradition, that decoration and fine art were equal, that the applied arts deserved the same seriousness as painting and sculpture. Klimt's contribution to the movement's exhibition space — the Beethoven Frieze of 1902 — showed exactly where he was heading: monumental, symbolically dense, and intensely erotic figures in a flattened, two-dimensional style that owed something to Byzantine mosaics, something to Japanese woodblock prints, and something to no prior tradition at all.

The gold paintings that followed — Portrait of Adele Bloch-Bauer I, The Kiss, Judith, Danaë — made him the most celebrated and most controversial painter in Vienna. The University of Vienna had commissioned him to paint allegorical figures of Philosophy, Medicine, and Jurisprudence for its Great Hall; when the finished paintings were unveiled, the faculty were so scandalized by the explicit sexuality and pessimistic philosophy that they petitioned to have them rejected. Klimt, furious, bought them back himself. They were destroyed by retreating SS troops in 1945 — some of the most significant losses of the Second World War.`,

    shockingTruth: `Klimt never married. He wore a long monk's robe in his studio, had no known permanent romantic relationship with any woman, and was surrounded by a constant stream of female models — by his own account he drew and painted the female body every day of his working life. He fathered at least fourteen illegitimate children by various women, all of whom he acknowledged and supported financially, none of whom he lived with. His lifelong companion was Emilie Flöge — a fashion designer, his brother's sister-in-law, an independent and highly intelligent woman who traveled with him, photographed him, and was with him when he died. Whether their relationship was ever sexual remains unknown and hotly debated. She burned all his letters to her before her own death.

The most dramatic episode of his afterlife is the Bloch-Bauer story. His Portrait of Adele Bloch-Bauer I — the most celebrated of the gold paintings, showing the wife of a Jewish sugar magnate in a golden cocoon of Byzantine ornament — was looted by the Nazis in 1941 and hung in the Belvedere museum in Vienna for decades as a symbol of Austrian culture. In 2006, after a landmark legal battle, it was returned to Adele's niece Maria Altmann — and sold to the cosmetics heir Ronald Lauder for $135 million, then the highest price ever paid for a painting. The case became a film (Woman in Gold, 2015) and remains one of the most significant art restitution cases in history.`,

    whyTheyMatter: `Klimt's influence operates in two registers. As a painter of surfaces — of the relationship between the decorated and the undecorated, the ornamental and the figurative, the flat and the three-dimensional — he had no successor who could do what he did, and his work remains sui generis. The combination of Byzantine gold, Japanese flatness, and explicitly sexual figuration is entirely his own.

As a cultural figure, he represents the late Habsburg world at its most brilliant and most anxious — the golden surface over the abyss, the beautiful object made in the shadow of collapse. Vienna in 1900 produced, in a generation, Klimt and Schiele in painting, Freud in psychology, Wittgenstein in philosophy, Mahler and Schoenberg in music, and Adolf Loos in architecture. Klimt was the most visible representative of that extraordinary moment, and his paintings — particularly The Kiss, which hangs in the Belvedere like a secular altarpiece — have become the most reproduced images of that civilization.`,

    masterworksIds: ["the-kiss-klimt"],
    collectionIds: ["adele-bloch-bauer", "judith-klimt", "tree-of-life-klimt"],
  },

  // ─── PABLO PICASSO ────────────────────────────────────────────

  {
    id: "pablo-picasso",
    name: "Pablo Ruiz y Picasso",
    born: "October 25, 1881 · Málaga, Spain",
    died: "April 8, 1973 · Mougins, France · aged 91",
    nationality: "Spanish",
    movement: "Cubism / Modern Art",
    era: "Modern",
    eraColor: "#C47080",
    portraitImage: "/artists/picasso.jpg",
    portraitWikimedia: "Pablo_picasso_1.webp",
    tagline: "The most influential artist of the 20th century — who broke every rule and invented new ones before breakfast.",

    biography: `Pablo Picasso was born in Málaga, the son of an art teacher named José Ruiz Blasco who recognized his son's extraordinary talent early and allegedly gave him his own brushes and palette when Pablo was still a child, saying he would never paint as well. The family moved to Barcelona in 1895, where Picasso's father took a position at the School of Fine Arts. Picasso completed the school's entrance exam — normally taken over a month — in a single day. He was 14 years old.

He arrived in Paris for the first time in 1900 and settled there permanently in 1904, living in the ramshackle artists' building known as the Bateau-Lavoir in Montmartre, surrounded by poets, dealers, and fellow painters. The Blue Period (1901–04), dominated by cold blues and images of poverty, isolation, and melancholy, gave way to the Rose Period (1904–06), warmer and more playful, populated by circus performers. Then, in 1907, after months of obsessive preparation and the shattering encounter with African masks at the Trocadéro, he produced Les Demoiselles d'Avignon — and changed painting forever.

The Cubism that followed, developed in close and deeply competitive collaboration with Georges Braque, was the most radical reinvention of pictorial representation since the invention of perspective in the 15th century. Rather than showing a subject from a single viewpoint, Cubism showed multiple viewpoints simultaneously, fracturing the image into facets that could be read as different aspects of the same object seen from different angles and at different moments. It was not an aesthetic preference — it was a philosophical proposition about how vision and consciousness actually work. Picasso went on to produce Surrealist paintings, classical neoclassical drawings, Guernica, the ceramics of his old age, and an estimated 20,000 works in total. He was 91 when he died, still working.`,

    shockingTruth: `Picasso's treatment of the women in his life is the darkest chapter of his biography, and increasingly central to how his work is understood. He had two wives (Olga Khokhlova, a Russian ballerina, and Jacqueline Roque), at least four major mistresses (Fernande Olivier, Marcelle Humbert, Marie-Thérèse Walter, Dora Maar), and numerous affairs. Two of his partners killed themselves: Marie-Thérèse Walter, his secret mistress for years and the model for some of his most famous paintings, hanged herself in 1977, four years after his death; Jacqueline Roque shot herself in 1986. His granddaughter Pablita committed suicide in 1977, the same year as Marie-Thérèse. Dora Maar had a breakdown after Picasso left her and was treated by Lacan. His son Paulo died of cirrhosis, broken by his father's neglect.

Françoise Gilot, who had two children with him and was the only partner who ever left him rather than being left, wrote a memoir (Life with Picasso, 1964) that gave the most detailed account of his psychological cruelty. He tried to have it suppressed through legal action in France and failed. She survived him, became a painter of distinction in her own right, married Jonas Salk, and is at the time of writing still alive at 102. Picasso once told her: "For me there are only two kinds of women: goddesses and doormats." He meant it as a compliment, which is perhaps the most revealing thing about him.`,

    whyTheyMatter: `Picasso's influence on 20th-century art is so total as to be almost meaningless as a statement — like saying that Shakespeare influenced English literature. The specific innovations of Cubism — the fracturing of form, the simultaneous multiple viewpoint, the collapsing of figure and ground — were absorbed into the vocabulary of modern art so completely that artists who have never looked at a Cubist painting are working in its aftermath.

Guernica deserves separate consideration. It is not just a painting but a moral event — the moment when a major artist used his full technical and emotional resources to document a war crime and demand that the world not look away. Its power has not diminished in 80 years. When Colin Powell presented the case for the Iraq War at the UN Security Council in 2003, the tapestry reproduction of Guernica that hangs outside the chamber was covered with a blue curtain. Someone understood what it meant to make that argument in front of that painting.`,

    masterworksIds: ["guernica", "demoiselles-avignon"],
    collectionIds: ["three-musicians"],
  },

  // ─── SALVADOR DALÍ ────────────────────────────────────────────

  {
    id: "salvador-dali",
    name: "Salvador Domingo Felipe Jacinto Dalí i Domènech",
    born: "May 11, 1904 · Figueres, Catalonia, Spain",
    died: "January 23, 1989 · Figueres · aged 84",
    nationality: "Spanish (Catalan)",
    movement: "Surrealism",
    era: "Modern",
    eraColor: "#6080A0",
    portraitImage: "/artists/dali.webp",
    portraitWikimedia: "Salvador_Dali_NYWTS.webp",
    tagline: "The showman who made Surrealism famous — and the most technically gifted painter of the 20th century.",

    biography: `Salvador Dalí was born in Figueres, a small Catalan town near the French border, the second child of a prosperous notary. His parents had lost their first child — also named Salvador — nine months before Dalí's birth, and they told him from childhood that he was the reincarnation of his dead brother. This peculiar beginning — the sense of being simultaneously oneself and someone else, the living replacement of the dead — fed directly into his lifelong obsession with identity, mortality, and the uncanny. His father was authoritarian and demanding; his mother, who died when he was 16, was the great tenderness of his early life.

He studied at the Real Academia de Bellas Artes de San Fernando in Madrid, where he met Federico García Lorca and Luis Buñuel, was expelled twice (once for refusing to sit an exam on the grounds that the examiners were incompetent to judge him), and developed a technical virtuosity that was, by his mid-twenties, extraordinary — a hyper-realistic precision that he applied to impossible subjects with the serenity of a Dutch still-life painter. He visited Paris in 1926, met Picasso ("I have come to see you before visiting the Louvre," Dalí told him; Picasso said: "You were right"), encountered Surrealism, and joined the movement in 1929.

The same year he met Gala — Elena Ivanovna Diakonova, the Russian-born wife of the Surrealist poet Paul Éluard — and embarked on the relationship that would define his life. Gala left Éluard for Dalí, became his model, his muse, his business manager, his protector, and the object of a devotion so extreme that he eventually signed his paintings with both their names. He bought her a castle at Púbol and promised never to visit without a written invitation. She died in 1982; he moved into the castle immediately and stopped painting almost entirely. He died seven years later in Figueres, in the tower of the Teatro-Museo Dalí that he had built as his monument, buried in a crypt beneath the stage.`,

    shockingTruth: `Dalí was expelled from the Surrealist movement by André Breton in 1934, ostensibly for making a painting that appeared to glorify Hitler. Breton put him on trial and found him guilty of "counter-revolutionary activity." Dalí's defense was characteristically baroque: he said that he had dreamed of Hitler as a woman, with smooth white skin and the form of the back of a nurse, and that his interest was purely erotic and therefore Surrealist. The group was not convinced. Breton, who loathed him, created the anagram "Avida Dollars" from Dalí's name — a reference to his increasingly shameless commercialism — and the name stuck.

His relationship with Gala was, by multiple accounts, deeply strange. She was older than him by ten years, sexually voracious in ways that Dalí — who claimed to be essentially asexual and found physical contact disturbing — could not satisfy, and increasingly tyrannical as she aged. She conducted numerous affairs with younger men, which Dalí tolerated or encouraged. In her later years she developed a taste for tranquilizers and young rock musicians and apparently obtained prescriptions by forging Dalí's signature. When she died, the cocktail of drugs in her system was severe enough that her death was kept secret for two days while the legal complications were sorted out. Dalí was inconsolable. Without her, he had no reason to live, and he largely didn't — not really — for the seven years that followed.`,

    whyTheyMatter: `Dalí is the artist most responsible for making Surrealism a popular rather than an avant-garde movement — the one who took the movement's ideas about the unconscious, dreams, and the irrational and made them accessible, even entertaining, to a mass audience. The Persistence of Memory is the most recognized Surrealist image in the world; it appears on posters, mugs, t-shirts, and album covers with a frequency that rivals the Mona Lisa. That ubiquity is partly Dalí's deliberate manufacture — he was the first major artist to understand celebrity in the modern sense, to cultivate a public persona (the mustache, the ocelot, the cane, the statements) as carefully as he cultivated the paintings.

His technical achievement is less celebrated than it should be, partly because the showmanship distracts from it. The late paintings — the nuclear mysticism series of the 1950s and 60s, the stereoscopic works of the 70s — are among the most technically ambitious of the 20th century, combining hyper-realistic detail with genuine scientific curiosity about optics and perception. He corresponded with Watson and Crick about the structure of DNA. He studied holography. He was, underneath the mustache, a serious and rigorous visual thinker.`,

    masterworksIds: ["persistence-of-memory"],
    collectionIds: ["elephants-dali", "metamorphosis-narcissus", "dream-bee-pomegranate"],
  },

  // ─── RENÉ MAGRITTE ────────────────────────────────────────────

  {
    id: "rene-magritte",
    name: "René Magritte",
    born: "November 21, 1898 · Lessines, Belgium",
    died: "August 15, 1967 · Brussels, Belgium · aged 68",
    nationality: "Belgian",
    movement: "Surrealism",
    era: "Modern",
    eraColor: "#7a8c6e",
    portraitImage: "/artists/magritte.webp",
    portraitWikimedia: "René_Magritte_en_juin_1922_(cropped)_(Remini_enhanced).jpg",
    tagline: "The painter who proved that everything we see hides something else — and that a pipe is never just a pipe.",

    biography: `René Magritte was born in Lessines, a small industrial town in the Belgian province of Hainaut, the eldest of three sons of a tailor and a milliner. When he was thirteen, his mother Régina drowned herself in the Sambre river — she had attempted suicide several times before, and this time she succeeded. According to an account that circulated in his lifetime and that Magritte never fully confirmed or denied, he was present when her body was pulled from the water, her nightgown or dress wound around her face so that her features were obscured. Whether or not he witnessed this directly, the image of the veiled face — a face that should reveal but conceals, a face hidden by the very fabric that surrounds it — became the most persistent motif of his mature work. He studied at the Académie Royale des Beaux-Arts in Brussels from 1916 to 1918, where he absorbed the standard academic techniques without particular distinction.

For most of the 1920s, Magritte supported himself and his wife Georgette — his childhood sweetheart, whom he had known since he was fifteen and married in 1922 — by working as a commercial artist: designing wallpaper patterns for a Brussels factory and producing advertising posters and catalogue illustrations. This was not a transitional phase he later disowned; the clear, flat, illustration-like quality of his mature painting style is directly descended from commercial art. He made his first Surrealist pictures around 1925, and in 1927, with a contract from the Brussels dealer Paul-Gustave van Hecke, he moved to Perreux-sur-Marne, outside Paris, for three years. He met André Breton, became close to Paul Éluard, Jean Arp, and Joan Miró, exhibited with the Surrealists, and was immediately identified as a significant new voice. In 1930, without explanation and with little fanfare, he returned to Brussels and lived there for the rest of his life.

That decision to return — and to stay — defined everything. While Dalí cultivated New York society and Breton held court in Paris, Magritte painted in a small suburban house in the commune of Jette in a borrowed jacket and tie, working at an easel set up in his dining room, walking his Pomeranian dog in the afternoons, playing chess at weekends. He was deliberately, obstinately bourgeois — the suit and bowler hat were not an ironic costume but an aggressive statement of ordinariness. He had no studio separate from his living quarters until late in his career. He painted The Treachery of Images at thirty, The Son of Man at sixty-five, and hundreds of variations on the same handful of obsessions — windows, curtains, apples, bowler hats, pipes, birds, men in suits — with the patient determination of someone who understood that the mystery of the visible world was inexhaustible.`,

    shockingTruth: `The two most embarrassing episodes of Magritte's career are rarely given the prominence they deserve. During the Nazi occupation of Belgium between 1940 and 1944, he made a deliberate and sustained change of style: abandoning the cold, precise imagery of his Surrealist period and adopting a warm, loose Impressionist palette derived explicitly from Renoir. He called this his "Renoir period" and believed it represented a form of defiance — an affirmation of pleasure and sunlight in conditions of occupation and fear. His Surrealist colleagues found it bewildering and, frankly, embarrassing; Breton condemned it as a capitulation to bourgeois taste. The paintings are genuinely strange — Magritte's impossible subjects (floating men, petrified forests, inverted landscapes) rendered in dappled Impressionist light — and they have never been comfortably incorporated into his received legacy.

Equally suppressed is the story of his 1948 Paris exhibition, the so-called "vache period." For his long-awaited solo debut in Paris — at the Galerie du Faubourg — Magritte produced in a matter of weeks a body of work in a deliberately crude, aggressive, almost ugly style: thick impasto, garish color, cartoon-like distortion, figures that seemed designed to offend. It was a provocation aimed at what he perceived as the pretensions and snobberies of the Parisian art world he had escaped in 1930. It was received as a catastrophe. Critics were baffled or contemptuous; sales were negligible; the show was widely regarded as a failure of nerve or a bizarre miscalculation. Magritte returned to Brussels and his habitual style almost immediately. He rarely discussed either period afterward, and they remain the most confusing chapters of an otherwise remarkably consistent career.`,

    whyTheyMatter: `Magritte's influence on the second half of the twentieth century operates less through stylistic imitation — his flat, deadpan manner is easily parodied but difficult to genuinely extend — than through the conceptual framework he established. The central proposition of his work: that the image is not the thing it depicts, that representation is always a kind of betrayal, that what we see is always a screen between us and what is hidden — became the foundational problem of Conceptual art. When Joseph Kosuth placed a physical chair, a photograph of a chair, and a dictionary definition of a chair side by side in One and Three Chairs (1965), he was working through an argument Magritte had made in paint a generation earlier. His "This is not a pipe" anticipated Foucault's analysis of it (published 1973) and the entire semiotic turn of late-twentieth-century art theory.

More immediately visible is his influence on graphic design, advertising, and popular visual culture. The visual pun — the image that means one thing on first reading and another on reflection — is the basic unit of modern advertising, and Magritte is its principal inventor. His direct influence on René Barjavel, the Belgian school of comic art (particularly Hergé), British Surrealist advertising of the 1960s and 70s, and the visual vocabulary of album cover design (John Lennon's Walls and Bridges, The Beatles' Apple Corps logo) is well documented. He died of pancreatic cancer in Brussels on August 15, 1967, still largely unknown to the mass public outside Belgium and a small circle of collectors. His posthumous fame has expanded so far beyond anything he experienced in his lifetime that it constitutes its own kind of surrealism — a pipe dreamed of by a man who is no longer there to see it.`,

    masterworksIds: ["son-of-man"],
    collectionIds: ["treachery-images"],
  },

  // ─── FRIDA KAHLO ──────────────────────────────────────────────

  {
    id: "frida-kahlo",
    name: "Magdalena Carmen Frida Kahlo y Calderón",
    born: "July 6, 1907 · Coyoacán, Mexico City",
    died: "July 13, 1954 · Coyoacán · aged 47",
    nationality: "Mexican",
    movement: "Surrealism / Mexican Modernism",
    era: "Modern",
    eraColor: "#6080A0",
    portraitImage: "/artists/kahlo.jpg",
    portraitWikimedia: "Frida_Kahlo,_by_Guillermo_Kahlo.webp",
    tagline: "She painted her own reality — and made the world see that reality was extraordinary.",

    biography: `Frida Kahlo was born in Coyoacán, a suburb of Mexico City, the daughter of a German-Hungarian Jewish photographer and a mestiza Mexican mother. At six she contracted polio, which left her right leg thinner than her left and forced her to walk with a slight limp; she disguised it for the rest of her life with long, full skirts. At eighteen, the bus she was traveling on was struck by a streetcar. The collision broke her spinal column in three places, her collarbone, her right leg (in eleven places), her right foot, her pelvis, and crushed her right shoulder. A steel handrail pierced her hip and exited through her vagina. She was not expected to survive.

She spent three months in a full body cast and began painting to pass the time — her mother had a special easel constructed so she could work lying down, with a mirror fixed to the bed's canopy so she could see herself. "I paint myself because I am so often alone," she said later, "and because I am the subject I know best." She had thirty-five surgical operations in her lifetime and was in pain for almost all of her adult life. She had three miscarriages, all depicted in paintings of raw, forensic power. She drank heavily, took morphine for pain, and died — probably of pneumonia, though the possibility of intentional overdose has never been fully ruled out — at 47.

She met Diego Rivera when she was 15 and he was painting murals at her school; they married in 1929, divorced in 1939, and remarried in 1940. The relationship was the central drama of her life — she was passionately devoted to him; he was chronically unfaithful, including an affair with her younger sister Cristina that broke her most deeply. She was also unfaithful, with both men and women, including a documented affair with Leon Trotsky, who was living in political asylum at their house in Coyoacán. When Trotsky was assassinated in 1940, Kahlo was briefly arrested as a suspect.`,

    shockingTruth: `Kahlo's reputation during her lifetime was largely as "Diego Rivera's wife." She had her first solo exhibition in Mexico only in 1953, a year before her death — and attended it lying in her four-poster bed, which was transported to the gallery because she was too ill to stand. She arrived by ambulance, was carried into the gallery on her bed, and held court from it for hours while guests came to her. It was her first and last major solo show in Mexico. She died two weeks later.

Her global fame is almost entirely posthumous — and specifically a creation of the 1970s and 80s feminist art movement, which rediscovered her work as a radical statement of female experience, physical suffering, and Mexican identity. The rehabilitation was so thorough that she is now, by some measures, the most famous woman artist in history. Her face is on Mexican banknotes. Her Coyoacán house — the Casa Azul, the Blue House — is Mexico's most visited museum. In 2021, her painting Diego and I sold for $34.9 million, the highest price ever paid for a Latin American work of art. She would have been amused and possibly appalled.`,

    whyTheyMatter: `Kahlo's importance is inseparable from what she painted — herself, relentlessly, in pain, in defiance, with a directness that no previous artist (male or female) had brought to the depiction of female experience from the inside. The miscarriages, the operations, the broken body, the complicated sexuality, the political convictions — all of it went into the paintings with a literalness that makes them impossible to look at neutrally. They demand a response.

She also invented, almost single-handedly, a visual language for the intersection of personal and political identity that has been enormously influential on subsequent artists — particularly artists from marginalized communities who recognized in her work the possibility of using autobiographical painting as a form of cultural resistance. The Chicano art movement, feminist art, Indigenous art movements across Latin America — all have claimed her as a foremother. Whether she would have accepted these claims is unknowable; she was too specific, too Frida, to be comfortably claimed by any movement.`,

    masterworksIds: ["two-fridas", "self-portrait-thorn"],
    collectionIds: ["broken-column", "self-portrait-monkey"],
  },

  // ─── ANDY WARHOL ──────────────────────────────────────────────

  {
    id: "andy-warhol",
    name: "Andy Warhol",
    born: "August 6, 1928 · Pittsburgh, Pennsylvania, USA",
    died: "February 22, 1987 · New York City · aged 58",
    nationality: "American",
    movement: "Pop Art",
    era: "Modern",
    eraColor: "#C47080",
    portraitImage: "/artists/warhol.jpg",
    portraitWikimedia: "Andy_Warhol_by_Jack_Mitchell.webp",
    tagline: "The man who said everyone would be famous for 15 minutes — and made fame itself his medium.",

    biography: `Andy Warhol was born Andrew Warhola in Pittsburgh, Pennsylvania, the youngest of three sons of Carpatho-Rusyn immigrants from a village in what is now Slovakia. His father worked in construction and died of tuberculosis when Andy was 13. His mother Julia, a deeply devout Byzantine Catholic, moved to New York to live with him after his father's death and remained with him, on and off, for the rest of his life — washing his dishes, making his soup, and drawing the decorative cat pictures that he incorporated into some of his early commercial work. He was devoted to her, though he rarely acknowledged her existence in interviews.

He studied pictorial design at Carnegie Mellon University in Pittsburgh and moved to New York in 1949, where he quickly established himself as one of the city's most successful commercial illustrators — his whimsical drawings for shoe advertisements and record covers were widely admired for their immediacy and wit. In 1960 he began making paintings based on newspaper advertisements and comic strips — simultaneously with Roy Lichtenstein and several other artists — and showed them to Leo Castelli, the most important dealer in New York. Castelli told him that Lichtenstein was already doing very similar work and declined to represent him. Warhol showed the same paintings to Ivan Karp, Castelli's assistant, who sent him to the Eleanor Ward Gallery. The Campbell's Soup Cans, shown at the Ferus Gallery in Los Angeles in 1962, established him as the central figure of American Pop Art.

The Factory — his silver-painted studio on East 47th Street, later moved to Union Square — became the center of New York's avant-garde social world in the mid-1960s. He produced films (Sleep, Empire, Chelsea Girls), managed the Velvet Underground, published Interview magazine, and manufactured a relentless stream of paintings, prints, and sculptures with an assembly-line efficiency that was itself a statement about the nature of art production. He was shot in 1968 by Valerie Solanas, a radical feminist who had appeared in one of his films; he survived the attack but his health was permanently damaged, and he wore a surgical corset for the rest of his life.`,

    shockingTruth: `Warhol was a deeply devout Catholic who attended Mass almost every Sunday at St. Vincent Ferrer on Lexington Avenue, prayed with a rosary, and volunteered at a soup kitchen for the homeless — a fact he kept almost entirely secret from the social world he inhabited. The gap between his public persona (amoral, ironic, obsessed with glamour and celebrity) and his private life (religious, shy, domestically devoted to his mother) is the central paradox of his biography.

He was also the victim of a significant and long-unacknowledged theft. After his death in 1987 — of cardiac arrhythmia following routine gallbladder surgery, a death his doctors later admitted was probably preventable — his estate was valued for probate at $220 million. His studio manager Fred Hughes, who controlled access to the estate, was subsequently found to have removed significant quantities of work from the Factory over the years. More significantly, the process of authentication — deciding which works are "real" Warhols — has been so beset by legal action and financial conflict that the Andy Warhol Foundation shut down its authentication board in 2012, leaving a market full of disputed works and no official mechanism for resolving the disputes.`,

    whyTheyMatter: `Warhol's question — what is art, who decides, and what does it mean that we live in a world saturated by reproduced images — remains the central question of contemporary visual culture. He posed it first and most clearly, and every subsequent artist who has worked with appropriation, celebrity, brand identity, or the relationship between art and commerce has been working in the territory he mapped.

His specific prediction — "in the future, everyone will be world-famous for 15 minutes" — was made in 1968, before the internet, before reality television, before social media. Its accuracy is now so complete that the statement has become a cliché, which is itself very Warhol. He understood something about the logic of media and image reproduction that would not become universally visible for another 40 years. The selfie, the viral moment, the influencer, the celebrity chef — all of it is Warhol's world, built on Warhol's principles, whether its inhabitants know it or not.`,

    masterworksIds: ["campbells-soup", "marilyn-diptych"],
    collectionIds: ["brillo-boxes", "mao-warhol", "self-portrait-warhol"],
  },

];

// artists-18th-19th.ts
// Era 3 of 4: 18th–19th Century
// 3 artists: Goya · Turner · Delacroix
// portraitWikimedia: exact filename on Wikimedia Commons — download from:
// https://commons.wikimedia.org/wiki/File:[filename]
// All images are public domain

import { Artist } from "./artists-renaissance";

export const CENTURY_18_19_ARTISTS: Artist[] = [

  // ─── FRANCISCO GOYA ───────────────────────────────────────────

  {
    id: "francisco-goya",
    name: "Francisco José de Goya y Lucientes",
    born: "March 30, 1746 · Fuendetodos, Aragon, Spain",
    died: "April 16, 1828 · Bordeaux, France · aged 82",
    nationality: "Spanish",
    movement: "Romanticism / Proto-Modernism",
    era: "18th–19th Century",
    eraColor: "#8C7040",
    portraitImage: "/artists/goya.jpg",
    portraitWikimedia: "Goya_self-portrait_(1815).webp",
    tagline: "Court painter who became the first modern artist — and painted his nightmares on the walls of his own house.",

    biography: `Francisco Goya was born in a tiny village in Aragon, the son of a gilder, and spent his youth trying and failing to win prestigious art prizes in Madrid and Rome. He was not a prodigy. Success came slowly, through determination and the cultivation of useful connections: a marriage into a family with ties to the court painter Francisco Bayeu, commissions for church decorations in Zaragoza, and eventually, in 1786, appointment as court painter to King Charles III of Spain. By 1799, under Charles IV, he was First Court Painter — the highest artistic position in Spain.

For the first forty years of his career, Goya was a successful, fashionable, and largely conventional court and portrait painter, producing tapestry cartoons of charming everyday life, flattering likenesses of the aristocracy, and religious paintings of polished competence. Then, in 1792, he was struck by a catastrophic illness — probably a combination of lead poisoning from his paints and a severe neurological event — that left him permanently and completely deaf. He was 46 years old. The deafness did not diminish him. It transformed him.

The work that followed the illness is among the most original and disturbing in the history of art. The Caprichos (1799) — a series of 80 satirical etchings attacking superstition, the Inquisition, and human folly — were so dangerous that Goya preemptively donated the plates to the King to avoid prosecution. The Disasters of War (1810–20), documenting the atrocities of the Napoleonic invasion of Spain with forensic and compassionate horror, were not published in his lifetime. The Black Paintings, made in the last decade of his life on the walls of his own house outside Madrid, were never intended for any audience at all. They are the private nightmare of a deaf old man living alone, and they are among the most powerful images ever made.`,

    shockingTruth: `The Black Paintings are the most disturbing body of work any artist has produced in their own home. Between 1819 and 1823, Goya decorated two rooms of his country house — La Quinta del Sordo, "the House of the Deaf Man" — with fourteen large murals painted directly on the plaster walls. Nobody commissioned them. Nobody was meant to see them. They show Saturn devouring his son (one of the most harrowing images in Western art), two men fighting while sinking into quicksand, a dog's head barely visible above a vast empty space, a gathering of witches, a pilgrimage of hideous faces. They are painted with a freedom and violence that anticipates Expressionism by a century.

What makes the Black Paintings inexplicable is their context. Goya painted them while living in voluntary semi-exile after the restoration of the absolutist Ferdinand VII — a king whose reactionary policies reversed the liberal reforms Goya had hoped for. He had survived the French occupation (during which he documented atrocities), the Inquisition (which investigated him for the nude Maja), the destruction of the liberal constitution, and the deaths of most of his friends and colleagues. He was 73 years old, deaf, ill, and increasingly isolated. He left Spain in 1824, ostensibly for health reasons, and settled in Bordeaux, where he continued to draw and paint — including some of his most tender and intimate images — until his death at 82. He never saw the Black Paintings again after leaving Spain, and he never explained them to anyone.`,

    whyTheyMatter: `Goya stands at the hinge of Western art history — the last great master of the Old World and the first great master of the new. His court portraits look back to Velázquez; his Black Paintings look forward to Munch, to Bacon, to the entire tradition of Expressionist horror. He invented the modern war image — the idea that art could document atrocity without glorifying it, that the suffering of ordinary people was a legitimate and urgent subject for painting — in the Disasters of War and the Third of May, and every subsequent photographer of conflict has worked in his shadow.

He also invented the idea of the artist as a critical intelligence rather than a craftsman serving power. His Caprichos and Black Paintings are works of private vision, made without commission and outside any established tradition. The freedom they represent — the freedom to make work that nobody asked for, that serves no patron and illustrates no text, that exists purely because the artist needed to make it — is the defining condition of modern art. Goya claimed it first, in a house outside Madrid, in paint on plaster walls that no one was supposed to see.`,

    masterworksIds: ["third-of-may"],
  },

  // ─── J.M.W. TURNER ────────────────────────────────────────────

  {
    id: "jmw-turner",
    name: "Joseph Mallord William Turner",
    born: "April 23, 1775 · Covent Garden, London",
    died: "December 19, 1851 · Chelsea, London · aged 76",
    nationality: "British",
    movement: "Romanticism / Proto-Impressionism",
    era: "18th–19th Century",
    eraColor: "#8C7040",
    portraitImage: "/artists/turner.jpg",
    portraitWikimedia: "Joseph_Mallord_William_Turner_(self_portrait).webp",
    tagline: "The painter who dissolved the world into light — and terrified everyone who saw him do it.",

    biography: `J.M.W. Turner was born above his father's barbershop in Covent Garden, London — about as far from the aristocratic patronage world of European art as it was possible to get. His father, a cheerful, supportive man who displayed young William's drawings in the shop window, was his first and most loyal champion. His mother was mentally ill and eventually committed to Bethlem Royal Hospital ("Bedlam"), where she died. Turner never spoke of her. The shadow of her breakdown — and his terror of inheriting her instability — may explain the obsessive, driven quality of his working life.

He entered the Royal Academy Schools at 14, the youngest student they had ever accepted, and exhibited his first watercolor the same year. From the beginning he was astonishingly technically gifted and astonishingly ambitious — he wanted not just to master the existing tradition of landscape painting but to go beyond it, to make landscape carry the emotional and intellectual weight that history painting carried. He studied the Old Masters systematically — Claude Lorrain for light and atmospheric depth, Rembrandt for darkness, Dutch marine painters for water — and then pushed beyond all of them into territory that no previous painter had mapped.

He traveled constantly — to Wales, Scotland, the Lake District, France, Switzerland, Italy — filling thousands of sketchbooks with observations of light, weather, and water. His late works, from the 1830s onward, increasingly dissolved solid form into fields of color and light that left his contemporaries baffled and his most perceptive admirers — including the young John Ruskin, who became his greatest champion — convinced they were witnessing something unprecedented. He was not wrong. Turner's late paintings are the first abstract paintings in Western art, in everything but name.`,

    shockingTruth: `Turner lived a double life with extraordinary persistence and secrecy. He maintained two separate households — his official residence and studio, known to the art world, and a second house in Chelsea under the assumed name "Mr. Booth" where he lived with a widow named Sophia Booth and was known to the neighbors as an eccentric retired admiral. The arrangement lasted nearly 20 years. When he died in 1851, he was found in Sophia's house in Chelsea; the neighbors were astonished to learn that the old man they had known as Admiral Booth was the most famous painter in England.

His will, when it was finally settled after years of legal dispute, revealed the other great secret of his life: he had amassed a fortune and intended to leave almost all of it — his paintings, his money, his house — to establish a home for "decayed English artists" and to endow a professorship of landscape painting. His relatives contested the will furiously and successfully, stripping out most of the money. What remained — nearly 300 paintings and 30,000 works on paper — went to the nation, forming the Turner Bequest, now housed in Tate Britain and constituting the largest collection of works by a single artist in any national collection in the world. He wanted to be buried beside Reynolds in St. Paul's Cathedral and dressed in his own painting, Rain, Steam and Speed, as a shroud. He got the burial. The shroud was declined.`,

    whyTheyMatter: `Turner's influence on subsequent art divides into two streams. The first is direct and well-documented: when Monet and Pissarro visited London in 1870–71, fleeing the Franco-Prussian War, they saw Turner's late paintings in the National Gallery and were electrified. The dissolution of form into light and atmosphere, the broken brushwork, the refusal to define edges — all of it pointed toward what they were trying to do with Impressionism. Monet later acknowledged the debt, though he was also careful to assert his independence.

The second stream is deeper and less easily traced: the idea that landscape — weather, water, light, the inhuman scale of natural forces — could be the vehicle for the most profound emotional and philosophical experiences that art could provide. Before Turner, landscape was a minor genre, a backdrop for historical or mythological scenes. After Turner, it was capable of expressing what religion had previously expressed: the sublime, the terrible, the overwhelming encounter with forces beyond human comprehension. That elevation of landscape — which runs through Friedrich, through the Hudson River School, through Cézanne's Mont Sainte-Victoire, through Rothko's color fields — is Turner's permanent contribution to the history of feeling.`,

    masterworksIds: ["fighting-temeraire"],
  },

  // ─── EUGÈNE DELACROIX ─────────────────────────────────────────

  {
    id: "eugene-delacroix",
    name: "Ferdinand-Victor-Eugène Delacroix",
    born: "April 26, 1798 · Charenton-Saint-Maurice, France",
    died: "August 13, 1863 · Paris · aged 65",
    nationality: "French",
    movement: "Romanticism",
    era: "18th–19th Century",
    eraColor: "#8C7040",
    portraitImage: "/artists/delacroix.jpg",
    portraitWikimedia: "Eugène_Delacroix_-_Self-Portrait.webp",
    tagline: "The painter of passion and revolution — who put color back at the center of French art.",

    biography: `Eugène Delacroix was born into one of the most extraordinary families in French history — or possibly not. His legal father, Charles Delacroix, was a diplomat and politician who died when Eugène was seven. His mother was a beautiful and cultivated woman from the Oeben-Riesener family of cabinet-makers to the French crown. But Charles Delacroix had been medically incapable of fathering children in the years before Eugène's birth, having undergone surgery for a massive testicular tumor. His mother's close friend at the time was Talleyrand — the most brilliant and cynical politician of the age, who bore a striking physical resemblance to the adult Delacroix. Whether Talleyrand was Delacroix's biological father has never been proved or disproved, but the rumor shadowed his life and many historians consider it probable.

He entered the École des Beaux-Arts and the studio of Pierre-Paul Guérin, where he met Théodore Géricault, six years his senior, whose Raft of the Medusa was being prepared in a rented studio nearby. The friendship with Géricault — passionate, brief, ended by Géricault's early death at 32 — was decisive: it showed Delacroix that painting could be contemporary, political, and viscerally physical. His first Salon submission, the Barque of Dante (1822), announced his arrival. His Massacre at Chios (1824) — painted in response to the Greek War of Independence — established him as the leader of the Romantic movement in French painting and the sworn enemy of Ingres and the Neoclassical establishment.

He traveled to Morocco and Algeria in 1832 with a diplomatic mission — the first major French painter to visit North Africa — and was overwhelmed by the light, the color, and what he experienced as the living presence of antiquity. The notebooks and sketches from that trip fed his imagination for the rest of his life. He was extraordinarily productive — the posthumous inventory of his studio listed over 9,000 works — and kept a journal from 1822 until shortly before his death that is one of the greatest documents of artistic thought in any language.`,

    shockingTruth: `Delacroix never married and spent his life in a series of passionate but carefully managed relationships, the most important of which was his decades-long intimate friendship with the soprano and actress Marie-Elisabeth Boulanger — known as "la belle Mme. Boulanger" — and, more durably, with his cousin Joséphine de Forget, who remained devoted to him until his death. He was simultaneously, for many years, the close friend and probable lover of George Sand — the novelist who dressed in men's clothes, smoked cigars, and scandalized Parisian society — during the period of her famous relationship with Chopin. The three of them formed one of the great intellectual triangles of the 19th century, meeting regularly at Sand's estate at Nohant, where Chopin played and Delacroix painted and Sand wrote and everyone discussed everything.

His feud with Ingres was the defining artistic controversy of 19th-century France — a battle between Romantic color and Neoclassical line, between passion and reason, between Rubens and Raphael. The two men despised each other with a thoroughness that their students inherited and perpetuated. When they met in public they were coldly civil. In private, Ingres called Delacroix "that sulfur-smelling painter" and said his work looked as if it had been painted by a drunk man with a broom. Delacroix wrote in his journal that Ingres's work had "the perfection of the incomplete." Both assessments contain a grain of truth, which is what made the feud so productive for French painting.`,

    whyTheyMatter: `Delacroix's direct influence on Impressionism and Post-Impressionism is documented and substantial. He was the first French painter to use pure, unmixed colors in juxtaposition rather than blending them — anticipating the optical color theory that would underpin Impressionism and Seurat's Pointillism. Cézanne said that Delacroix was the painter from whom he had learned most. Van Gogh made copies of his work. Renoir worshipped him. His journal — published posthumously in 1893 — became essential reading for every serious French artist of the late 19th century, a guide to thinking about color, composition, and the relationship between imagination and observation.

Liberty Leading the People has a separate immortality as a political image. It was the model for the Statue of Liberty (which carries a torch as Liberty carries a musket), the inspiration for Marianne — the allegorical figure of the French Republic — and has been reproduced in posters, murals, and political imagery across two centuries. The bare-breasted woman striding over the bodies of the fallen with a flag in one hand and a weapon in the other is one of the most powerful political images ever created, and it has never lost its charge. When Charlie Hebdo was attacked in 2015, the image immediately appeared in solidarity demonstrations across the world.`,

    masterworksIds: ["liberty-leading", "raft-of-medusa"],
  },

];

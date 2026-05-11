// Impressionism Era — 1 civilization · 6 movements
// Realism · Impressionism · Post-Impressionism · Symbolism · Art Nouveau · Neo-Impressionism

export interface ImpressionistMovement {
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

export interface ImpressionistCivilization {
  id: string;
  name: string;
  dates: string;
  tagline: string;
  overview: string;
  whyItMattered: string;
  historicalContext: string;
  movements: ImpressionistMovement[];
  keyWorks: { id: string; title: string; date: string; location: string }[];
  facts: {
    duration: string;
    where: string;
    medium: string;
    defining: string;
    legacy: string;
  };
}

export const IMPRESSIONISM_CIVILIZATION: ImpressionistCivilization = {
  id: "impressionism",
  name: "Impressionism",
  dates: "c. 1848–1910",
  tagline: "The first art to say: what matters is not the thing, but the light falling on the thing.",

  overview: `The Impressionist era is the hinge of Western art history — the sixty years that separated the academic tradition of the previous five centuries from the modernism of the twentieth century. It began with Courbet's blunt refusal to beautify the working poor, moved through Manet's strange paintings of modern life that looked simultaneously too new and too indebted to old masters, and culminated in the fragmentation of Impressionist color into the four radically different directions of Cézanne, Van Gogh, Gauguin, and Seurat.

The word "Impressionism" was an insult before it became a triumph. The critic Louis Leroy applied it mockingly to Monet's Impression, Sunrise at the first group exhibition in 1874. The painters adopted it with pride. Within two decades the movement that had been rejected by the Paris Salon had transformed the entire direction of Western art — and created the template for every artistic avant-garde that followed: the small group, the manifesto, the hostile official reception, the eventual canonical triumph.`,

  whyItMattered: `The Impressionists broke the academic tradition's authority over what painting could and should depict — and in doing so, they opened the door to all subsequent modern art. Every artist working after 1886 was either responding to Impressionism, building on it, or reacting against it. Cézanne's response produced Cubism. Van Gogh's response produced Expressionism. Seurat's response produced the systematic color painting that fed Matisse and the Fauves. Gauguin's response produced the Symbolist, Primitivist, and eventually Surrealist traditions. The Impressionist revolution was the last time Western art moved as a coherent group before shattering into the multiple, competing modernisms of the twentieth century.`,

  historicalContext: `The Impressionist era coincided with the transformation of Paris into a modern city and France into a modern industrial state. Haussmann's rebuilding program created the city the Impressionists painted: the grand boulevards, the parks, the cafés and theaters and racetracks of bourgeois leisure. The Franco-Prussian War (1870–71) interrupted and scattered the group; the Paris Commune that followed briefly turned the city into a revolutionary commune before its bloody suppression. The political upheaval gave the Realists their subject matter and urgency; the subsequent prosperity and expansion of the middle class gave the Impressionists their patrons and their subjects.`,

  movements: [
    {
      id: "realism",
      name: "Realism",
      dates: "c. 1848–1880",
      parentCivilization: "Impressionism",
      parentId: "impressionism",
      color: "#807060",
      tagline: "Courbet looked at a stone breaker and said: this is as worthy of paint as any emperor.",

      theMovement: `Realism was born from political crisis. The revolutions of 1848 swept across Europe, briefly putting workers and radicals in power before being bloodily suppressed. In Paris, Gustave Courbet emerged from this upheaval with a radical artistic manifesto: he would paint only what he could see with his own eyes. No mythological goddesses, no historical heroes, no idealized peasants. Stone breakers breaking stones. Peasants burying their dead in an unremarkable provincial town. His own enormous, disreputable face.

The Burial at Ornans (1849–50) was the provocation that defined the movement — a canvas the size of a history painting (normally reserved for the Battle of Marathon or the Coronation of Napoleon) showing the entirely unremarkable burial of an unknown man in Ornans, Courbet's hometown. The figures are ugly, specific, unsentimental. There is no nobility, no transcendence, no compositional idealism. There is just the facts of a burial — the black coats, the indifferent faces, the freshly dug earth. The Salon jury was appalled. Courbet was delighted. He understood exactly what he was doing.`,

      whatItBroke: `Realism broke from academic painting's hierarchy of subjects — the system that placed history painting (mythological, biblical, and historical subjects) at the top of artistic dignity and genre scenes (everyday life) at the bottom. It broke from the idealization that accompanied that hierarchy: the academic painter showed a peasant as a timeless type, a picturesque figure in a compositionally arranged landscape. Courbet showed a peasant as a specific person doing specific labor in a specific place, with no compositional prettification.`,

      whatItInvented: `The social-realist tradition in Western art — the conviction that the lives of ordinary working people are a legitimate and urgent subject for serious painting, treated with the same formal ambition previously reserved for gods and emperors. The artist as social critic — Daumier's caricatures of lawyers, judges, and politicians established the tradition of politically engaged art that runs through Toulouse-Lautrec, Grosz, Kollwitz, and Diego Rivera. The unposed, unheroic depiction of labor — Millet's peasants bending over their work without romance or sentimentality, their figures heavy with fatigue.`,

      historicalContext: `Courbet was a committed socialist and friend of the anarchist philosopher Pierre-Joseph Proudhon. His Realism was not merely an aesthetic position but a political one — a deliberate attack on the cultural values of bourgeois society. During the Paris Commune of 1871, he was appointed head of the arts commission and oversaw (or allegedly oversaw) the demolition of the Vendôme Column, a symbol of Napoleonic imperialism. He was sentenced to prison and ordered to pay for the column's reconstruction. He fled to Switzerland, where he died in 1877, still in exile, still painting.`,

      keyArtists: [],
      keyWorks: [
        { id: "third-of-may", title: "The Third of May 1808 (Goya)", why: "The greatest predecessor to Realism — the first anti-war painting, showing anonymous ordinary men facing an anonymous firing squad with no heroism, no glory, and no narrative resolution" },
        { id: "bar-at-folies", title: "A Bar at the Folies-Bergère (Manet)", why: "Manet bridges Realism and Impressionism — the barmaid's blank professional face is the most honest depiction of alienated labor in 19th-century painting" },
      ],
      prevMovement: null,
      nextMovement: { id: "impressionism", name: "Impressionism" },
    },

    {
      id: "impressionism",
      name: "Impressionism",
      dates: "c. 1860–1886",
      parentCivilization: "Impressionism",
      parentId: "impressionism",
      color: "#70A8B8",
      tagline: "Eight exhibitions. Hostile critics. No sales. The complete transformation of Western art.",

      theMovement: `Impressionism proper lasted roughly twenty-five years — from Manet's scandalous Déjeuner sur l'herbe (1863) to the final group exhibition in 1886. In that time, a loose group of Paris-based painters invented a new way of seeing and a new way of painting that made everything that had come before feel suddenly, irreversibly old. They painted outdoors, in direct light, responding to the immediate visual experience of their subject rather than constructing a finished image in the studio. They used broken, visible brushstrokes instead of the smooth blended surfaces of academic painting. They juxtaposed pure colors instead of mixing them on the palette to achieve tone. They painted the shimmer of light on water, the dapple of sunlight through leaves, the movement of dancers in rehearsal, the steam of a locomotive filling a station with white cloud — all the flickering, immediate, sensory richness of modern Parisian life.

The name was given to them as an insult. The critic Louis Leroy reviewed the first group exhibition in 1874 under the title "Exhibition of the Impressionists," mocking the apparent sketchiness of Monet's Impression, Sunrise. The painters adopted the name with pride. The first exhibition attracted 3,500 visitors and almost no buyers. By the time of the eighth and final exhibition in 1886, the movement had transformed the entire direction of Western art — though most of its practitioners were still not wealthy.`,

      whatItBroke: `Impressionism broke from academic painting in four simultaneous ways: subject matter (everyday modern life instead of mythological and historical scenes), technique (broken visible brushwork instead of smooth finish), relationship to light (painting the specific quality of light at a specific moment rather than conventional studio lighting), and finish (paintings that looked "unfinished" by academic standards — sketchy, immediate, optically active rather than settled and resolved). No single previous rupture in Western art had been so comprehensive.`,

      whatItInvented: `Plein-air painting as a systematic practice and finished work — not a preparatory sketch but the definitive statement, valued precisely because it captured something that studio painting could not. The series painting — Monet's haystacks (1890–91), Rouen Cathedral (1892–94), and water lilies (1896–1926) showing the same subject at different times of day and seasons, investigating light rather than subject matter. The fugitive moment as a subject worthy of paint — the conviction that a specific instant of light and atmosphere has aesthetic value even if (because) it cannot last.`,

      historicalContext: `The Impressionists worked in a Paris being rebuilt from the ground up. Haussmann's massive urban renewal program had demolished medieval neighborhoods and replaced them with the grand boulevards, parks, and public spaces of the modern city. The new Paris was a city of leisure for the prosperous middle classes — cafés, theaters, racetracks, seaside resorts, suburban parks — and these were exactly the subjects the Impressionists painted. The Franco-Prussian War (1870–71) scattered the group temporarily: Monet and Pissarro fled to London, where they encountered Turner's late paintings in the National Gallery and were, by their own accounts, transformed by them.`,

      keyArtists: [
        { id: "claude-monet", name: "Claude Monet", contribution: "The defining Impressionist — whose water lily series is the movement's ultimate destination: painting that is entirely about light, entirely about perception, and entirely abstract" },
      ],
      keyWorks: [
        { id: "water-lilies", title: "Water Lilies", why: "The ultimate Impressionist painting — light on water without horizon or ground, pure sensation, the most sustained investigation of a single subject in the history of art" },
        { id: "moulin-galette", title: "Dance at the Moulin de la Galette", why: "Renoir's masterpiece — Sunday afternoon in Montmartre, the dappled light through leaves, the uncomplicated joy of ordinary Parisian life painted with extraordinary technical virtuosity" },
        { id: "dance-class", title: "The Dance Class", why: "Degas at his most characteristic — the backstage view, the labor behind the spectacle, the anti-theatrical representation of theater that defines his entire contribution to the movement" },
      ],
      prevMovement: { id: "realism", name: "Realism" },
      nextMovement: { id: "post-impressionism", name: "Post-Impressionism" },
    },

    {
      id: "post-impressionism",
      name: "Post-Impressionism",
      dates: "c. 1886–1910",
      parentCivilization: "Impressionism",
      parentId: "impressionism",
      color: "#7090B8",
      tagline: "Four painters took Impressionism as their foundation and went in four completely different directions.",

      theMovement: `Post-Impressionism is not a movement — it is a label for four painters who each took Impressionism as their point of departure and moved beyond it in their own direction, with consequences that shaped the entire subsequent history of art. Paul Cézanne investigated how paint could construct the illusion of three-dimensional form through planes of color, systematically dismantling the conventional tools of perspective and chiaroscuro. Vincent van Gogh loaded paint with emotional intensity, using color and brushwork not to describe what he saw but to communicate what he felt. Paul Gauguin fled European civilization for the South Seas, searching for a primitive spiritual authenticity that he half-found and half-invented. Georges Seurat applied the optical color theories of Chevreul and Rood to create a painting system of scientific precision — the dot of pure color, optically mixed by the viewer's eye.

What these four share, despite their enormous differences, is a dissatisfaction with Impressionism's purely sensory focus. Each felt that painting needed to do more than capture a moment of light — that it needed to express something more durable, more structural, more emotionally or spiritually charged. Cézanne famously said he wanted to "redo Poussin from nature" — to combine Impressionist observation with classical structure. Van Gogh wanted paint that burned with feeling. Gauguin wanted images that were primitive, symbolic, and sacred. Seurat wanted a system as rigorously constructed as a scientific theory. None of them got exactly what they wanted. What they got instead changed the world.`,

      whatItBroke: `Post-Impressionism broke from Impressionism's exclusive concern with the visual sensation of light and the immediate moment. Cézanne felt that Impressionism was "without bones" — beautiful surfaces with no underlying structure. Van Gogh felt it was emotionally insufficient. Gauguin felt it was spiritually empty. Seurat felt it was scientifically imprecise. Each departure from Impressionism defined a new direction for subsequent art.`,

      whatItInvented: `Cézanne's planar construction of form — the direct foundation of Cubism, acknowledged by both Picasso and Braque. Van Gogh's expressive distortion of color and brushwork — the direct foundation of Expressionism and Fauvism. Seurat's Pointillism (or Divisionism, as he preferred) — the foundation of systematic color theory in subsequent painting. Gauguin's Synthetism — flat areas of pure color bounded by dark outlines — the foundation of the Nabis and a major influence on Art Nouveau and early Fauvism.`,

      historicalContext: `The Post-Impressionists worked in the 1880s and 1890s — the fin-de-siècle, a period of intense cultural anxiety across Europe. The confident materialism and rationalism of mid-19th century positivism had failed to deliver the promised social progress; the Decadent and Symbolist movements in literature expressed a widespread sense that the rational, visible world was insufficient. Each of the Post-Impressionists was, in their different way, reaching for something beyond the visible surface — something structural, emotional, spiritual, or scientific — that Impressionism's devotion to the skin of things had excluded.`,

      keyArtists: [
        { id: "vincent-van-gogh", name: "Vincent van Gogh", contribution: "The most emotionally direct painter in the history of art — who made personal suffering universal and gave Expressionism its founding visual vocabulary" },
      ],
      keyWorks: [
        { id: "starry-night", title: "The Starry Night", why: "Van Gogh's most celebrated painting — a night sky of supernatural energy, the paint itself swirling with the forces it depicts, the defining image of art as emotional experience rather than visual record" },
        { id: "sunflowers", title: "Sunflowers", why: "Five distinct yellows, thick impasto, the surface of paint as a physical presence — Van Gogh's investigation of color as structure and emotion simultaneously" },
        { id: "grande-jatte", title: "A Sunday on La Grande Jatte", why: "Seurat's masterpiece — two years of work, every centimeter covered in dots of pure unmixed color, a Sunday afternoon in the Paris suburbs frozen into something as permanent as an ancient frieze" },
        { id: "card-players", title: "The Card Players", why: "Cézanne's most celebrated painting — two men at a table, the composition a systematic investigation of form and space that Picasso studied obsessively before inventing Cubism" },
      ],
      prevMovement: { id: "impressionism", name: "Impressionism" },
      nextMovement: { id: "symbolism", name: "Symbolism" },
    },

    {
      id: "symbolism",
      name: "Symbolism",
      dates: "c. 1880–1910",
      parentCivilization: "Impressionism",
      parentId: "impressionism",
      color: "#9070A8",
      tagline: "Against the visible world — art as a door into something beyond.",

      theMovement: `Symbolism was the literary and artistic movement most directly opposed to Impressionism's devotion to visible reality. Where the Impressionists painted what they saw, the Symbolists painted what they felt, dreamed, or feared — the interior life made visible through suggestive imagery, color used for emotional rather than optical effect, subjects drawn from mythology, literature, dream, and the unconscious. Gustave Moreau painted jeweled biblical and mythological scenes of hallucinatory richness — Salome, Orpheus, the Sphinx — that shimmer with gold and precious stone like Byzantine icons converted to erotic fantasy. Odilon Redon drew spiders with human faces, giant eyeballs floating through cosmic space, flowers in colors that had no natural equivalent. The Belgian Fernand Khnopff painted women of icy, ambiguous beauty in settings of dreamlike unreality. Edvard Munch painted the scream that has no sound and the anxiety that has no object.

The Symbolist manifesto, published by the poet Jean Moréas in Le Figaro in 1886, declared that art should clothe an idea in sensuous form rather than describe the visible world. The painting was a symbol — a sensory surface that pointed toward invisible realities. This was a profoundly anti-Impressionist proposition, and it was enormously influential: Symbolism fed directly into Expressionism, Surrealism, and the entire tradition of psychological and spiritual art in the 20th century.`,

      whatItBroke: `Symbolism broke from both academic realism and Impressionist naturalism — from any conviction that painting's primary subject should be the visible world. The Symbolist painter looked inward rather than outward, treating the external world as a vocabulary of symbols for internal states. It also broke from Realism's social engagement — the Symbolists were uninterested in the lives of workers and the condition of society, absorbed instead in the interior landscape of feeling, dream, and spiritual aspiration.`,

      whatItInvented: `The systematic use of color for psychological and emotional effect rather than description — Symbolist painters were the first to develop a conscious theory of color as mood, anticipating the color psychology that would pervade 20th-century art and design. The painted dreamscape — environments of ambiguous, non-naturalistic space in which the normal laws of perspective and scale are suspended. The femme fatale as a dominant artistic type — the dangerous, mysterious, sexually powerful woman (Salome, the Sphinx, the Medusa) who was simultaneously feared and desired by fin-de-siècle male culture.`,

      historicalContext: `Symbolism was the visual expression of the fin-de-siècle mood — the anxiety, decadence, and spiritual searching that characterized European culture in the 1880s and 1890s. The influence of Wagner's music-drama (the idea of the total artwork, the Gesamtkunstwerk, emotion expressed through symbolic rather than realistic means), Schopenhauer's pessimist philosophy (the primacy of irrational will over reason), and the new science of psychology (the discovery of unconscious processes beneath conscious experience) all fed into the Symbolist conviction that reality's most important dimensions were invisible — accessible only through art, music, and dream.`,

      keyArtists: [],
      keyWorks: [
        { id: "the-scream", title: "The Scream", why: "The defining image of Symbolist anxiety — not a painting of the external world but of an internal state: the dissolution of the self in the face of existential terror, rendered in lines of color that follow the contours of feeling rather than of nature" },
        { id: "the-kiss-klimt", title: "The Kiss", why: "Klimt's Symbolist masterpiece — two figures dissolved into a golden cocoon of ornament, the erotic and the spiritual inseparable, the visible world transcended through decoration and abstraction" },
      ],
      prevMovement: { id: "post-impressionism", name: "Post-Impressionism" },
      nextMovement: { id: "art-nouveau", name: "Art Nouveau" },
    },

    {
      id: "art-nouveau",
      name: "Art Nouveau",
      dates: "c. 1890–1910",
      parentCivilization: "Impressionism",
      parentId: "impressionism",
      color: "#9B8040",
      tagline: "The last time Western art tried to make everything beautiful — furniture, posters, buildings, and spoons.",

      theMovement: `Art Nouveau was the first truly international design movement — a style that swept across Europe and America in the 1890s and early 1900s, applying the same curvilinear, plant-inspired ornamental vocabulary to architecture, interior design, furniture, jewelry, ceramics, glass, posters, and typography simultaneously. Its ambition was totalizing: to eliminate the distinction between fine art and applied art, to make the entire designed environment beautiful, to give everyday objects the aesthetic dignity previously reserved for painting and sculpture.

The movement had different names in different countries — Jugendstil in Germany and Austria, Modernisme in Catalonia, Stile Liberty in Italy, Style Nouille (noodle style, for its sinuous curves) in France — but shared a common vocabulary derived from natural observation: the sinuous curves of plant stems and roots, the patterns of dragonfly wings and peacock feathers, the movement of water and flame. These natural forms were applied to the structural elements of architecture and the decorative elements of every object — Hector Guimard's Paris Métro entrances (1900), still the most beautiful pieces of urban furniture in the world, are organic forms in cast iron that look simultaneously like plants, insects, and something entirely invented.`,

      whatItBroke: `Art Nouveau broke from the historicism that had dominated 19th-century design — the habit of reviving historical styles (Gothic, Renaissance, Baroque, classical) for every new building or object, producing eclectic pastiches that had no relationship to modern life. It demanded a new ornamental language appropriate to the present — one drawn from nature rather than history, from direct observation rather than historical precedent. It also broke from the industrial aesthetic of unadorned utility, insisting that beauty was not a luxury but a necessity.`,

      whatItInvented: `The modern concept of graphic design — Art Nouveau poster artists (Alphonse Mucha, Toulouse-Lautrec, Jules Chéret) invented the visual language of commercial advertising that still underlies contemporary graphic design: the integrated text and image, the female figure as decorative element, the flat areas of color with outlined forms. The total interior — every element of a room designed as part of a unified visual program. The glass and ironwork entrance — Guimard's Métro, Gaudi's buildings in Barcelona, Victor Horta's houses in Brussels.`,

      historicalContext: `Art Nouveau flourished in the brief Belle Époque — the period of relative peace, prosperity, and cultural confidence between the Franco-Prussian War (1870) and the First World War (1914). It died with the war — its optimistic faith that beauty could transform daily life seemed irreparably naive in the face of industrial-scale slaughter. The stripped-down functional aesthetic of the Bauhaus and International Modernism replaced it after 1918, and Art Nouveau was dismissed for decades as decadent and overwrought. Its rehabilitation began in the 1960s with the counterculture's taste for organic ornament, and its influence on graphic design and decorative arts has never entirely disappeared.`,

      keyArtists: [],
      keyWorks: [
        { id: "the-kiss-klimt", title: "The Kiss (Klimt)", why: "Klimt's work sits at the intersection of Symbolism and Art Nouveau — his use of gold leaf, flat decorative pattern, and organic ornament makes The Kiss simultaneously a painting and a designed object" },
      ],
      prevMovement: { id: "symbolism", name: "Symbolism" },
      nextMovement: { id: "neo-impressionism", name: "Neo-Impressionism" },
    },

    {
      id: "neo-impressionism",
      name: "Neo-Impressionism",
      dates: "c. 1886–1910",
      parentCivilization: "Impressionism",
      parentId: "impressionism",
      color: "#60A090",
      tagline: "Seurat turned Impressionism into a science — and made Sunday afternoons last forever.",

      theMovement: `Neo-Impressionism — the term coined by the critic Félix Fénéon to describe the work of Georges Seurat and his followers — was the attempt to put Impressionist color observation on a scientific foundation. Seurat had studied the color theories of Michel Eugène Chevreul and Ogden Rood, which described how colors placed next to each other on a surface would blend optically in the viewer's eye to produce a more luminous result than physically mixed pigments. His method — applying tiny dots of pure unmixed color systematically across the entire canvas surface — he called Divisionism or Chromoluminarism. Critics called it Pointillism, the name that stuck.

The result was paintings of extraordinary luminosity and formal rigor — and extraordinary labor. A Sunday on La Grande Jatte took two years to complete. Seurat made dozens of preparatory studies for each figure and area of the composition, then applied the final dots with the systematic patience of a craftsman laying a mosaic. The figures in the finished painting have a strange, frozen quality — more monumental than naturalistic, their simplified silhouettes giving them an Egyptian or archaic Greek quality that Seurat admired. They are the figures of a modern Parthenon frieze, standing in Sunday sunlight forever.`,

      whatItBroke: `Neo-Impressionism broke from the spontaneity and intuition of Impressionism — from Monet's conviction that the painting should be a direct record of immediate visual experience, made quickly enough to capture the quality of a specific moment. Seurat proposed the opposite: a methodical, scientific approach in which every element of color and composition was calculated in advance and executed with systematic precision. The painting was not a record of experience but a construction — as rigorously planned as an engineering project.`,

      whatItInvented: `The systematic application of color theory to painting practice — Seurat's work demonstrated that optical color mixing (colors blending in the eye rather than on the palette) could produce greater luminosity than physical mixing, a principle that influenced Matisse and the Fauves and ultimately the entire tradition of pure-color painting. The simplified, monumental figure type — Seurat's flattened silhouettes, influenced by Egyptian reliefs and Greek vase painting, pointed toward the schematic figures of Cubism and the geometric abstraction of the 20th century.`,

      historicalContext: `Seurat died in 1891 at the age of 31 — of what was probably meningitis, contracted in a matter of days. He had completed only seven large paintings. His followers — Paul Signac, Henri-Edmond Cross, Théo van Rysselberghe — continued the movement into the early 20th century, and Signac's book D'Eugène Delacroix au Néo-Impressionnisme (1899) spread Seurat's ideas to a new generation of painters. Matisse encountered Signac and Cross in the South of France in 1904 and was temporarily converted to Divisionism — the experience of painting in pure divided color directly influenced his development of Fauvism the following year.`,

      keyArtists: [],
      keyWorks: [
        { id: "grande-jatte", title: "A Sunday on La Grande Jatte", why: "The definitive Neo-Impressionist work — two years of preparation, 3.5 million dots of pure color, a Sunday afternoon in the Paris suburbs elevated to the permanence and formality of an ancient monument" },
      ],
      prevMovement: { id: "art-nouveau", name: "Art Nouveau" },
      nextMovement: null,
    },
  ],

  keyWorks: [
    { id: "water-lilies",   title: "Water Lilies",                   date: "1906 (series 1896–1926)", location: "Musée de l'Orangerie, Paris" },
    { id: "grande-jatte",   title: "A Sunday on La Grande Jatte",    date: "1884–1886",               location: "Art Institute of Chicago" },
    { id: "moulin-galette", title: "Dance at the Moulin de la Galette", date: "1876",                 location: "Musée d'Orsay, Paris" },
    { id: "starry-night",   title: "The Starry Night",               date: "1889",                    location: "MoMA, New York" },
  ],

  facts: {
    duration: "~60 years — from Courbet's Realism to the dissolution of Post-Impressionism",
    where: "Paris above all — then Lyon, London, Amsterdam, Brussels, Vienna",
    medium: "Oil on canvas, plein-air and studio; pastel; printmaking",
    defining: "The visible sensation of light at a specific moment — perception as subject matter",
    legacy: "Broke the academic tradition and opened the door to all subsequent modern art",
  },
};

export const IMPRESSIONISM_MOVEMENTS: ImpressionistMovement[] = IMPRESSIONISM_CIVILIZATION.movements;

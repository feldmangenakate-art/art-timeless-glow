// Modern & Contemporary Era — 1 civilization · 3 movements
// Fauvism & Cubism · Expressionism & Surrealism · Abstract Expressionism & Pop Art

export interface ModernMovement {
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

export interface ModernCivilization {
  id: string;
  name: string;
  dates: string;
  tagline: string;
  overview: string;
  whyItMattered: string;
  historicalContext: string;
  movements: ModernMovement[];
  facts: {
    duration: string;
    where: string;
    medium: string;
    defining: string;
    legacy: string;
  };
}

export const MODERN_CIVILIZATION: ModernCivilization = {
  id: "modern",
  name: "Modern & Contemporary",
  dates: "c. 1900–present",
  tagline: "The 20th century shattered every rule — and the 21st century is still counting the pieces.",

  overview: `Modern art is the story of a deliberate destruction. From Cézanne's instruction to "treat nature by the cylinder, the sphere, the cone" to Duchamp's urinal in the gallery, to Pollock's dripped paint and Warhol's soup cans, modern artists systematically dismantled every convention that Western art had spent five centuries constructing — single-viewpoint perspective, harmonious composition, the depicted subject, the hand-made object, the gallery itself as the appropriate space for art — and asked at each stage whether anything essential had been lost or whether the convention had been a disguise all along.

The answer varied. Fauvism liberated color; Cubism shattered form; Expressionism turned inward; Surrealism went to the unconscious; Abstract Expressionism made the painter's gesture the subject; Pop Art made the question itself the subject. Each movement was both a liberation and an imposition — freeing art from one set of constraints while creating new ones. The history of modern art is a sequence of revolts, each generation overthrowing its immediate predecessor, the avant-garde itself becoming the establishment, the radical gesture becoming the academy.

What remained constant through all the changes was ambition: the conviction that art could and should do something that nothing else could do — not illustrate, not decorate, not record, but fundamentally change the way people saw and understood the world they inhabited.`,

  whyItMattered: `Modern art changed what art is. Before the 20th century, art was understood to be, at its core, a representation — of the visible world, of sacred narratives, of historical events, of human ideals. After the 20th century, art could be anything: an action, an idea, a question, a provocation, a duration, a relationship. This is not a small change. It is the most comprehensive redefinition of an art form in recorded history — larger in its implications than the Renaissance, which changed how art looked without fundamentally changing what art was for.

The specific technical innovations of modern art — Cubism's multiple viewpoints, Expressionism's distortion, Surrealism's unconscious imagery, Abstract Expressionism's gesture, Pop Art's appropriation — have been absorbed into the general visual vocabulary of contemporary culture so completely that they are now invisible. Every film with a non-linear narrative, every advertisement with an unexpected visual juxtaposition, every piece of graphic design that uses color for emotional rather than descriptive purposes is working with tools that modern art invented.`,

  historicalContext: `Modern art was made in the century of the two World Wars, the Holocaust, Hiroshima, the Cold War, decolonization, the civil rights movement, feminism, the Sexual Revolution, the digital revolution, and climate change. No previous century in human history had produced events of such magnitude and velocity. The artists who lived through the First World War made art that anticipated and expressed its catastrophic rupture. Those who survived the Second World War and the Holocaust faced a moral and aesthetic crisis unprecedented in Western culture: after Auschwitz, Theodor Adorno asked whether poetry was still possible, and meant it seriously.

The other great context of modern art is capitalism's production of mass culture — advertising, cinema, television, photography, and eventually the internet and social media — which created a world saturated in images to a degree no previous culture had experienced. Modern and contemporary art has been, in large part, a sustained attempt to think critically about the image in a world overwhelmed by images.`,

  movements: [], // populated below
  facts: {
    duration: "c. 1900–present (still unfolding)",
    where: "Paris · New York · Berlin · London · Mexico City · Tokyo — then everywhere",
    medium: "Oil paint, found objects, performance, photography, video, installation, digital media — everything",
    defining: "Art as idea, as question, as provocation — the work is no longer the object but the thinking",
    legacy: "Still being written. We are living inside it",
  },
};

export const MODERN_MOVEMENTS: ModernMovement[] = [
  {
    id: "fauvism-cubism",
    name: "Fauvism & Cubism",
    dates: "c. 1905–1920",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#C47080",
    tagline: "Two movements that broke painting — one through color, one through form.",

    theMovement: `Fauvism and Cubism arrived within a few years of each other and between them dismantled every remaining convention of Western painting. They were not planned — they emerged from the work of individual painters responding independently to the same cultural pressure: the sense that the Impressionist and Post-Impressionist tradition, for all its achievements, had exhausted its possibilities, and that something more radical was needed.

Fauvism erupted at the Salon d'Automne in Paris in October 1905. A group of painters — Henri Matisse, André Derain, Maurice de Vlaminck, Raoul Dufy — showed canvases of violent, non-naturalistic color that left critics and public alike bewildered and outraged. The critic Louis Vauxcelles noticed a small bronze sculpture of a child in the classical manner placed among the paintings and wrote that it was "Donatello among the wild beasts" — les fauves. The painters adopted the label with pride. Their colors were not descriptions — a face could be green, a shadow orange, a river vermilion — they were structural and emotional forces, used for their visual impact rather than their descriptive accuracy. The movement lasted less than three years before its practitioners moved in different directions. But in those three years it permanently liberated color from its obligation to describe.

Cubism was a slower, more systematic revolution, developed in close and deliberately secretive collaboration between Pablo Picasso and Georges Braque between 1907 and 1914. Beginning from Cézanne's instruction to "treat nature by the cylinder, the sphere, the cone," and radicalized by Picasso's encounter with African masks at the Trocadéro museum in 1907, they developed a way of painting that showed its subjects from multiple viewpoints simultaneously — fracturing the image into overlapping planes that could be read as different aspects of the same object seen from different angles and at different moments in time. By 1912, Analytic Cubism (monochromatic, densely fragmented) had given way to Synthetic Cubism (flatter, more colorful, incorporating collaged materials) — and the entire vocabulary of 20th-century abstract art had been invented.`,

    whatItBroke: `Fauvism broke from the careful, systematic relationship between observed and painted color that had governed Western painting from the Renaissance to Impressionism. Color had always been in the service of description — of making things look like themselves. Fauvism freed color from this obligation entirely. Cubism broke from single-viewpoint perspective — the organizing principle of Western pictorial space since Brunelleschi's invention in the 1420s, which had remained unchallenged for nearly five hundred years. With Cubism, the picture plane was no longer a window onto a unified three-dimensional space — it was a flat surface on which multiple spatial and temporal fragments could be simultaneously arranged.`,

    whatItInvented: `Fauvism invented color as an autonomous expressive element — pure sensation, freed from descriptive function, capable of communicating emotion and creating pictorial structure without reference to the appearance of the natural world. Cubism invented the fracturing of pictorial space — the overlapping planes, the multiple viewpoints, the collapsing of figure and ground — that made all subsequent abstract art possible. Collage — the direct incorporation of non-painted materials (newspaper, wallpaper, sand, found objects) into the picture surface — was a Cubist invention that permanently expanded the definition of what a painting could be and anticipated the mixed-media and conceptual art of the rest of the century.`,

    historicalContext: `Fauvism and Cubism both emerged in Paris in the decade before the First World War — the decade that also saw Einstein's special theory of relativity (1905), Freud's Three Essays on Sexuality (1905), Bergson's Creative Evolution (1907), and the Wright brothers' first powered flight (1903). The sense of a world being fundamentally remade — its physical laws rewritten, its psychological assumptions overturned, its spatial and temporal certainties dissolved — was pervasive in European intellectual culture. The artists were not illustrating these scientific and philosophical revolutions, but they were responding to the same cultural moment. When the First World War came in 1914, it validated every premonition of rupture and catastrophe that Cubism's fractured surfaces had seemed to express.`,

    keyArtists: [
      {
        id: "pablo-picasso",
        name: "Pablo Picasso",
        contribution: "The inventor of Cubism and the most influential artist of the 20th century — his Les Demoiselles d'Avignon of 1907 is the single most discussed painting of the modern era, the moment the fracture began",
      },
    ],
    keyWorks: [
      {
        id: "demoiselles-avignon",
        title: "Les Demoiselles d'Avignon",
        why: "The most important painting of the 20th century — five nude figures whose bodies fracture into planes, the African mask as the rupture point with the European tradition, nine months of preparatory studies for a canvas that changed everything",
      },
      {
        id: "the-dance-matisse",
        title: "The Dance",
        why: "Matisse's masterpiece of liberated color — five figures reduced to pure vermilion against cobalt blue and emerald green, joy distilled to its absolute pictorial essence, three colors and a circle and a moment that lasts forever",
      },
    ],
    prevMovement: null,
    nextMovement: { id: "expressionism-surrealism", name: "Expressionism & Surrealism" },
  },

  {
    id: "expressionism-surrealism",
    name: "Expressionism & Surrealism",
    dates: "c. 1905–1950",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#6080A0",
    tagline: "Inside the mind — two movements that made the interior world the primary subject of art.",

    theMovement: `Expressionism and Surrealism both turned inward — away from the visible external world and toward the psychological interior. They are related but distinct: Expressionism distorts external reality to express internal emotional states, while Surrealism bypasses external reality entirely, working directly with the materials of dreams, fantasy, and unconscious association. Both movements were responses to the same underlying crisis — the failure of rational, materialist, progress-oriented 19th-century civilization to deliver on its promises, a failure confirmed with catastrophic finality by the First World War.

German Expressionism — centered on the groups Die Brücke (The Bridge, Dresden, 1905) and Der Blaue Reiter (The Blue Rider, Munich, 1911) — distorted color, line, and form to communicate psychological states with maximum urgency. Ernst Ludwig Kirchner painted Berlin street scenes in jagged acid colors that made the modern city feel simultaneously exciting and threatening. Egon Schiele drew figures of raw sexual anguish with a line of such expressive force that it constituted an entirely personal visual language. Oskar Kokoschka painted portraits in which the sitter's inner life seemed to show through the painted surface like something burning beneath skin.

Surrealism was founded by the poet André Breton in Paris in 1924, with a Manifesto that drew explicitly on Freud's theories of the unconscious to propose that the materials of dreams and irrational association were more artistically valuable than rational, conscious observation. Salvador Dalí developed his paranoiac-critical method — a self-induced hallucinatory state in which irrational images presented themselves for recording with Old Master precision. René Magritte placed familiar objects in impossible combinations that revealed the arbitrariness of normal perception. Max Ernst created images through automatic processes (frottage, grattage, decalcomania) designed to bypass conscious control and liberate the unconscious. Frida Kahlo — who rejected the Surrealist label while being claimed by the movement — painted her own physical and psychological reality with an unflinching literalness that was more disturbing than any pure fantasy.`,

    whatItBroke: `Expressionism broke from the Impressionist and Post-Impressionist interest in the visible world, however subjectively perceived, and made the psychological interior the primary subject of art. Beauty, harmony, and formal resolution were abandoned in favor of expressive force — the work could be ugly, disturbing, or formally chaotic if the emotional content demanded it. Surrealism broke from rationalism itself — from the conviction that conscious, logical thought was the appropriate mode for artistic creation or for understanding human experience. In doing so it proposed that art's proper domain was the unconscious, the dream, and the irrational.`,

    whatItInvented: `Expressionism invented the aesthetic of deliberate distortion — the angular, acid-colored, formally fractured image that communicates psychological states through its departure from visual normality. This vocabulary of expressive distortion runs through Francis Bacon, the Neo-Expressionists of the 1980s, and contemporary figurative painting. Surrealism invented the systematic exploration of the unconscious as an artistic method — automatic writing and drawing, the found object, the dream image rendered with hallucinatory precision, the uncanny juxtaposition of familiar objects in unfamiliar combinations. Surrealism's influence on advertising, film, and fashion has been so total as to become invisible.`,

    historicalContext: `German Expressionism flourished in the Weimar Republic (1919–33) and was destroyed by the Nazis with deliberate efficiency. The 1937 "Entartete Kunst" (Degenerate Art) exhibition in Munich displayed 650 confiscated Expressionist and modernist works alongside art by psychiatric patients and children, with captions designed to provoke ridicule and revulsion. Over 16,000 works were confiscated from German museums; many were sold to foreign buyers, many were burned. Surrealism was scattered by the Second World War — Breton, Dalí, Ernst, Masson, Matta, and others fled to New York, where their presence directly influenced the Abstract Expressionists who were just beginning their careers. The trauma and moral horror of the war — particularly the Holocaust — made Expressionism's premonitions of catastrophe retrospectively prophetic.`,

    keyArtists: [
      {
        id: "salvador-dali",
        name: "Salvador Dalí",
        contribution: "The showman of Surrealism — whose paranoiac-critical method produced hallucinatory images rendered with Old Master precision, making the irrational convincingly real",
      },
      {
        id: "frida-kahlo",
        name: "Frida Kahlo",
        contribution: "Who painted her own reality — physical suffering, sexuality, Mexican identity, and the complexity of personal relationships rendered with unflinching directness and iconographic richness",
      },
    ],
    keyWorks: [
      {
        id: "persistence-of-memory",
        title: "The Persistence of Memory",
        why: "The defining Surrealist image — melting watches in a Catalan landscape, painted with the precision of a Dutch still life, time itself made soft and subjective in a canvas smaller than a sheet of A4 paper",
      },
      {
        id: "guernica",
        title: "Guernica",
        why: "The greatest political painting of the 20th century — Picasso's response to the Nazi bombing of a Basque town in 1937, a Cubist language turned to express the fragmentation of bodies and civilization under violence",
      },
      {
        id: "two-fridas",
        title: "The Two Fridas",
        why: "Kahlo's most ambitious painting — made in the weeks after her divorce from Rivera, showing two versions of herself holding hands, one heart whole and one cut open, the most direct image of heartbreak in the history of art",
      },
    ],
    prevMovement: { id: "fauvism-cubism", name: "Fauvism & Cubism" },
    nextMovement: { id: "abstract-pop", name: "Abstract Expressionism & Pop Art" },
  },

  {
    id: "abstract-pop",
    name: "Abstract Expressionism & Pop Art",
    dates: "c. 1940–1970",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#C47080",
    tagline: "New York took over from Paris — and asked two completely opposite questions about what art is for.",

    theMovement: `After the Second World War, the center of the art world moved from Paris to New York — carried there by the European artists who had fled the war (Mondrian, Léger, Ernst, Dalí, Chagall all spent years in New York) and anchored by a new generation of American painters who had absorbed their influence and were ready to go further. Abstract Expressionism — the first major American art movement and the first to achieve international influence — was not a unified style but a shared ambition: to make painting that carried the full weight of human experience, that did not illustrate or represent but directly communicated psychological and emotional truth through the act of painting itself.

Jackson Pollock placed his canvases on the floor and moved through them, dripping and pouring paint from above, the painting a record of his physical movement through space and time. Mark Rothko built vast, shimmering color fields — rectangles of color that seemed to pulse and breathe — that he insisted were not abstract but profoundly human, designed to produce in the viewer the same overwhelming emotional states as religious experience. Willem de Kooning returned again and again to the female figure, painting and repainting with a violence that left the surface charged with conflicting energies. Franz Kline made large calligraphic gestures in black and white that read simultaneously as landscapes, architectural fragments, and pure pictorial force.

Pop Art arrived in the late 1950s as the apparent — and perhaps deliberate — opposite of Abstract Expressionism. Where Abstract Expressionism looked inward to the psychological depths, Pop Art looked outward at the surfaces of consumer culture. Where Abstract Expressionism was serious, difficult, and demanded emotional engagement, Pop Art was cheerful, immediately accessible, and apparently ironic. Andy Warhol screened soup cans and celebrity photographs. Roy Lichtenstein painted enlarged comic strip panels. Claes Oldenburg made giant soft sculptures of everyday objects. Jasper Johns painted flags and targets. All were asking the same question — what does it mean to make art in a world saturated by mass-produced images? — but from positions of apparent ease and irony rather than apparent anguish and difficulty. Whether that irony was critical of consumer culture or complicit with it is still debated.`,

    whatItBroke: `Abstract Expressionism broke from figuration entirely — making the act of painting itself, the gesture and the physical mark, the primary subject of the work. It also broke from the European tradition of compositional refinement — from the idea that a painting should be carefully planned, formally resolved, and visually harmonious. The painter's gesture, however impulsive or violent, was the work. Pop Art broke from Abstract Expressionism's high seriousness and its insistence on the artist's psychological depths as the source of value. It also broke from the modernist tradition's hostility to popular culture and commercial imagery — Pop Art embraced these as its primary material.`,

    whatItInvented: `Action painting — the canvas as an arena, the painting as a physical event, the gesture as a direct record of the artist's body moving through space and time. The color field — Rothko's large areas of translucent color as meditative environments rather than representational images, designed to be experienced at close range for extended periods. The artist as celebrity and brand — Warhol's systematic cultivation of a public persona (the silver wig, the sunglasses, the Factory, the aphorisms) was itself a work of art, anticipating the influencer culture of the digital age fifty years before it arrived. The appropriated image — Warhol's use of existing commercial and media images as the raw material of art, which defined the dominant approach of contemporary art for the next fifty years.`,

    historicalContext: `Abstract Expressionism was made in the shadow of the Second World War and the Holocaust — a historical catastrophe so extreme that it called into question every previous assumption about civilization, progress, and human nature. The painters' ambition to create art of existential weight was a direct response to this historical moment. Pop Art was made in the consumer boom of the late 1950s and 1960s — when American mass culture was producing unprecedented quantities of advertising images, celebrity photographs, packaged goods, and television programming. The Cold War context shaped both movements: Abstract Expressionism was promoted internationally by the US government and the CIA as evidence of American cultural vitality against Soviet social realism; Pop Art was received by some critics as a critique of consumer capitalism and by others as its celebration.`,

    keyArtists: [
      {
        id: "andy-warhol",
        name: "Andy Warhol",
        contribution: "The artist who made celebrity, mass production, and consumer culture the explicit subject of serious art — and who predicted the social media age with his observation that in the future everyone would be world-famous for fifteen minutes",
      },
    ],
    keyWorks: [
      {
        id: "campbells-soup",
        title: "Campbell's Soup Cans",
        why: "The question made visible — Warhol placed 32 canvases showing every variety of Campbell's soup on gallery shelves and asked whether that counted as art. By asking, he permanently changed what the question meant",
      },
      {
        id: "marilyn-diptych",
        title: "Marilyn Diptych",
        why: "Made weeks after Monroe's death in 1962 — the left panel blazing with artificial color, the right fading through repetition to barely visible ghost. Celebrity and death and mass reproduction in one image, the icon consuming itself",
      },
      {
        id: "nighthawks",
        title: "Nighthawks",
        why: "Hopper's American loneliness — a diner at 3am, no door into the building, the viewer permanently outside looking at the minimum of human warmth available in the modern city. The most used image in American art",
      },
    ],
    prevMovement: { id: "expressionism-surrealism", name: "Expressionism & Surrealism" },
    nextMovement: null,
  },
];

// Assign movements to civilization
MODERN_CIVILIZATION.movements = MODERN_MOVEMENTS;

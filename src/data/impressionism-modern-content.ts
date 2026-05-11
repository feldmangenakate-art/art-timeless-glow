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
    id: "fauvism",
    name: "Fauvism",
    dates: "c. 1905–1910",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#C47080",
    tagline: "Wild beasts in a gallery — the moment color was finally set free.",

    theMovement: `Fauvism lasted barely five years and had no manifesto, no theoretical program, and no agreed membership. What it had was a moment — the Salon d'Automne in Paris in October 1905, when a group of painters showed canvases of such violent, non-naturalistic color that the critic Louis Vauxcelles noticed a small bronze sculpture of a child in the classical manner placed among them and wrote that it was "Donatello among the wild beasts" — les fauves. Henri Matisse, André Derain, Maurice de Vlaminck, Raoul Dufy, and Georges Braque (briefly) adopted the label with pride. They were not offended. They knew exactly what they were doing.

What they were doing was using color as a purely expressive and structural force — independent of its descriptive function. A Fauvist face could be green, a shadow orange, a river vermilion, a sky red. These were not mistakes or distortions — they were deliberate choices made for the visual and emotional impact of the color itself, not for its accuracy to observation. The liberation was complete and irreversible. After Fauvism, no painter could claim that color had to describe. Color could feel, structure, and communicate on its own terms.`,

    whatItBroke: `Fauvism broke the last remaining obligation of color to describe the appearance of things. From the Renaissance through Impressionism, color had always been in some relationship to observed reality — even when Impressionists used broken brushwork and high-key palettes, the color was still motivated by what they saw. Fauvism cut that connection entirely. Color was liberated to operate as pure sensation and structural force.`,

    whatItInvented: `Color as an autonomous expressive element — the foundation of all subsequent pure-color painting, from Matisse's late cut-outs to Rothko's color fields to contemporary abstract painting. The decorative as a positive value — Matisse's conviction that a painting should give pleasure, should be "like a good armchair," was itself a radical proposition in a tradition that had always valued difficulty and seriousness over sensory delight.`,

    historicalContext: `The Fauvist moment coincided with the first years of Einstein's special relativity, Freud's Three Essays on Sexuality, and the Wright brothers' first flight. The world was being fundamentally remade, and the painters felt it. The movement dissolved almost as quickly as it formed — by 1908 most of the Fauves had moved in different directions. Braque joined Picasso in inventing Cubism. Matisse developed his own highly personal synthesis of color and decoration that would sustain him for the next fifty years.`,

    keyArtists: [],
    keyWorks: [
      {
        id: "the-dance-matisse",
        title: "The Dance",
        why: "Matisse's masterpiece of liberated color — three colors, five figures, a circle, and an emotion that has never been more directly expressed in paint",
      },
    ],
    prevMovement: null,
    nextMovement: { id: "cubism", name: "Cubism" },
  },

  {
    id: "cubism",
    name: "Cubism",
    dates: "c. 1907–1920",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#C06070",
    tagline: "The most radical reinvention of pictorial space since the invention of perspective.",

    theMovement: `Cubism was developed in close, deliberately secretive collaboration between Pablo Picasso and Georges Braque between 1907 and 1914 — a partnership so intense that they later said they were "like two mountaineers roped together." Beginning from Cézanne's instruction to treat nature through geometric forms, and radicalized by Picasso's encounter with African masks at the Trocadéro museum in Paris in 1907, they developed a way of painting that showed its subjects from multiple viewpoints simultaneously — fracturing the image into overlapping planes that could be read as different aspects of the same object seen from different angles and at different moments in time.

The development had two phases. Analytic Cubism (1908–12) was monochromatic — ochres, greys, and browns — the image fragmented almost to the point of illegibility, the subject barely recoverable from the interlocking planes. Synthetic Cubism (1912–20) was flatter, more colorful, and introduced collage — the direct incorporation of newspaper, wallpaper, and other non-painted materials into the picture surface. The guitar, the wine glass, the newspaper, the café table — these humble subjects were turned into the arena for the most fundamental investigation of pictorial representation in five hundred years.`,

    whatItBroke: `Cubism broke single-viewpoint perspective — the organizing principle of Western pictorial space since Brunelleschi's invention in the 1420s. For nearly five hundred years, a painting had been understood as a window onto a unified three-dimensional space seen from a single fixed point at a single moment in time. Cubism proposed that this was a convention, not a truth — that vision was actually multiple, temporal, and constructive, and that painting could show this.`,

    whatItInvented: `The fracturing of pictorial space into overlapping planes — the foundation of all subsequent abstract art. Collage as a fine art medium — the direct incorporation of found materials into the picture surface, which permanently expanded the definition of what a painting could be. The constructed sculpture — Picasso's Cubist constructions of wood, metal, and found objects were the origin of 20th-century constructed and assembled sculpture.`,

    historicalContext: `Cubism emerged in Paris in the years immediately before the First World War — a period when the foundations of classical physics were being dismantled by Einstein and Planck, and when the certainties of 19th-century European civilization were approaching their catastrophic collapse. The war of 1914–18 validated every premonition of fracture and catastrophe that Cubism's shattered surfaces seemed to express, and the movement's influence spread internationally in the war's aftermath.`,

    keyArtists: [
      {
        id: "pablo-picasso",
        name: "Pablo Picasso",
        contribution: "Co-inventor of Cubism and the most influential artist of the 20th century — his Les Demoiselles d'Avignon of 1907 is the painting that began the rupture",
      },
    ],
    keyWorks: [
      {
        id: "demoiselles-avignon",
        title: "Les Demoiselles d'Avignon",
        why: "The painting that began Cubism — five figures whose bodies fracture into planes, the African mask as the rupture point with the entire European tradition",
      },
    ],
    prevMovement: { id: "fauvism", name: "Fauvism" },
    nextMovement: { id: "expressionism", name: "Expressionism" },
  },

  {
    id: "expressionism",
    name: "Expressionism",
    dates: "c. 1905–1930",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#A06080",
    tagline: "When the world became too much — art that screamed back.",

    theMovement: `Expressionism was the first art movement to propose that distortion — of color, form, space, and the human figure — was not a failure but a virtue. The Expressionist painter did not distort because they could not draw accurately; they distorted because accuracy was beside the point. What mattered was the intensity of the internal state being communicated, and if that required a green face, an angular body, and a sky that vibrated with anxiety, then so be it.

The movement centered on two German groups: Die Brücke (The Bridge), founded in Dresden in 1905 by Ernst Ludwig Kirchner, Erich Heckel, and Karl Schmidt-Rottluff, who made woodcuts and paintings of raw, urgent power in acid colors; and Der Blaue Reiter (The Blue Rider), founded in Munich in 1911 by Wassily Kandinsky and Franz Marc, who were more interested in the spiritual dimensions of color and form. In Austria, Egon Schiele and Oskar Kokoschka developed a more psychologically intense, sexually explicit variant that made Vienna deeply uncomfortable. Edvard Munch in Norway, though technically a generation earlier, provided the movement's founding image: The Scream.`,

    whatItBroke: `Expressionism broke from the Impressionist and Post-Impressionist interest in the visible world, however subjectively perceived. It also broke from the classical value of beauty — Expressionist art could be deliberately ugly, disturbing, or formally chaotic if the emotional content demanded it. The Expressionist figure is not beautiful; it is expressive, and expressive of states — anxiety, desire, despair, ecstasy — that classical beauty had systematically excluded.`,

    whatItInvented: `The aesthetic of deliberate distortion for emotional effect — the foundational vocabulary of Expressionism runs through Francis Bacon, the German Neo-Expressionists of the 1980s (Baselitz, Kiefer, Polke), and virtually all contemporary figurative painting that values psychological intensity over formal resolution. The woodcut as a primary medium for fine art — the Die Brücke painters revived the woodcut's raw, angular qualities as an expressive tool perfectly suited to their emotional program.`,

    historicalContext: `German Expressionism flourished in the Weimar Republic (1919–33) and was destroyed by the Nazis with deliberate efficiency. The 1937 "Entartete Kunst" (Degenerate Art) exhibition displayed 650 confiscated Expressionist works alongside art by psychiatric patients, with captions designed to provoke ridicule. Over 16,000 works were confiscated from German museums. The painters who could fled — those who couldn't faced persecution. The movement's premonitions of catastrophe were confirmed by the very regime that destroyed it.`,

    keyArtists: [],
    keyWorks: [
      {
        id: "the-scream",
        title: "The Scream",
        why: "The defining image of Expressionist anxiety — not a painting of the external world but of an internal state, the dissolution of the self in existential terror",
      },
    ],
    prevMovement: { id: "cubism", name: "Cubism" },
    nextMovement: { id: "dada", name: "Dada" },
  },

  {
    id: "dada",
    name: "Dada",
    dates: "c. 1916–1924",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#907090",
    tagline: "If civilization produces the trenches, civilization deserves no respect — and neither does its art.",

    theMovement: `Dada was the art of total refusal. It began in Zurich in 1916, in the Cabaret Voltaire, a small nightclub where artists and writers who had fled the First World War gathered to make noise. Hugo Ball performed phonetic poetry — strings of invented syllables, meaning abolished. Marcel Janco made masks. Emmy Hennings sang. Tristan Tzara issued manifestos. The name "Dada" was allegedly found by inserting a knife at random into a dictionary — it means "hobby horse" in French, nothing in particular in other languages. The arbitrariness was the point.

Dada was not primarily a visual art movement — it was an attitude, a provocation, a declaration that the values of Western civilization that had produced four years of industrial slaughter deserved nothing but contempt and mockery. If rational thought had led to the trenches, then irrationality was the appropriate response. If beauty had served the culture that produced the Somme, then ugliness was the honest alternative. Marcel Duchamp, working independently in New York from 1913, had already anticipated the Dada position: he submitted a urinal titled Fountain to an art exhibition in 1917, signed with a fictional name. It was rejected. The rejection proved his point.`,

    whatItBroke: `Dada broke from the entire tradition of Western art — not just from specific styles but from the fundamental premise that art was a valuable and serious activity worthy of respect. It broke from beauty, from craft, from meaning, from the gallery system, from the distinction between artist and audience, from the idea that art should communicate anything in particular. It proposed that the appropriate response to a civilization in ruins was not to make beautiful things but to make nothing, or to make things that made nothing of themselves.`,

    whatItInvented: `The readymade — Duchamp's gesture of taking an existing manufactured object (a urinal, a bicycle wheel, a bottle rack) and declaring it art by placing it in an art context. This single invention has determined the direction of contemporary art more than any other — every work of conceptual art, every found object, every institutional critique traces back to Duchamp's readymades. Performance art — Dada's cabaret evenings, with their noise, absurdity, and audience provocation, were the first performance art events. The photomontage — Hannah Höch's and John Heartfield's collages of newspaper photographs created a new medium of political imagery.`,

    historicalContext: `Dada emerged directly from the trauma of the First World War — the industrialized slaughter of the Western Front, which killed ten million soldiers and wounded twenty million more. The artists who gathered in neutral Zurich were refugees from this catastrophe, and their nihilism was a rational response to an irrational reality. Dada dissolved as a movement around 1924, when many of its practitioners joined or were absorbed into Surrealism — Breton's Surrealist Manifesto of 1924 took Dada's interest in the irrational and gave it a theoretical framework in Freudian psychology.`,

    keyArtists: [],
    keyWorks: [
      {
        id: "campbells-soup",
        title: "Campbell's Soup Cans (Warhol)",
        why: "The direct descendant of Duchamp's readymade — the ordinary manufactured object placed in a gallery context and declared art, forty years after Dada asked whether that was possible",
      },
    ],
    prevMovement: { id: "expressionism", name: "Expressionism" },
    nextMovement: { id: "surrealism", name: "Surrealism" },
  },

  {
    id: "surrealism",
    name: "Surrealism",
    dates: "c. 1924–1950",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#6080A0",
    tagline: "The unconscious is more real than reality — and art should go there.",

    theMovement: `Surrealism was founded by the poet André Breton in Paris in 1924, with a Manifesto that drew explicitly on Freud's theories of the unconscious to propose that the materials of dreams and irrational association were more artistically valuable than rational, conscious observation. The movement attracted writers, painters, photographers, and filmmakers — it was from the beginning a multimedia enterprise, concerned not just with art but with a total transformation of human experience. Breton's program was political as well as aesthetic: the liberation of the unconscious was inseparable from the liberation of humanity from the constraints of capitalist rationalism.

The visual artists associated with Surrealism developed remarkably different approaches. Salvador Dalí used his "paranoiac-critical method" — a self-induced hallucinatory state — to generate irrational images that he then rendered with the smooth, seamless technique of a Dutch Old Master. René Magritte placed familiar objects in impossible combinations with deadpan matter-of-factness, revealing the arbitrariness of normal perception. Max Ernst created images through automatic processes (frottage — rubbing over textured surfaces; grattage — scraping wet paint) designed to bypass conscious control. Joan Miró developed a biomorphic abstract language of floating shapes that suggested organic life and unconscious symbol simultaneously.`,

    whatItBroke: `Surrealism broke from rationalism itself — from the conviction that conscious, logical thought was the appropriate mode for artistic creation or for understanding human experience. It also broke from the Freudian pessimism that saw the unconscious as a site of repression to be analyzed and overcome — Surrealism celebrated the unconscious as the source of truth, creativity, and liberation.`,

    whatItInvented: `The systematic exploration of the unconscious as an artistic method — automatic writing and drawing, the dream image rendered with hallucinatory precision, the uncanny juxtaposition of familiar objects in unfamiliar combinations. The exquisite corpse — the collaborative drawing game in which each participant adds to a composition without seeing what the others have done, creating images that no single conscious mind could have generated. Surrealism's influence on advertising, fashion, and film has been so comprehensive as to become invisible — every unexpected image combination in contemporary visual culture is a Surrealist inheritance.`,

    historicalContext: `Surrealism flourished in Paris between the wars and was scattered by the Second World War — Breton, Dalí, Ernst, Masson, Matta, and others fled to New York, where their presence directly influenced the Abstract Expressionists who were beginning their careers. The movement's encounter with the New World — with Indigenous American art, with Caribbean culture, with the scale and energy of New York — transformed it in turn. After the war, Surrealism as a coherent movement dissolved, but its methods and images had become part of the permanent vocabulary of Western visual culture.`,

    keyArtists: [
      {
        id: "salvador-dali",
        name: "Salvador Dalí",
        contribution: "The showman of Surrealism — whose paranoiac-critical method produced hallucinatory images rendered with Old Master precision, making the irrational convincingly real and unforgettably strange",
      },
      {
        id: "frida-kahlo",
        name: "Frida Kahlo",
        contribution: "Who rejected the Surrealist label while being claimed by the movement — painting her own reality with a directness and iconographic richness that was more disturbing than any pure fantasy",
      },
    ],
    keyWorks: [
      {
        id: "persistence-of-memory",
        title: "The Persistence of Memory",
        why: "The defining Surrealist image — melting watches in a Catalan landscape, painted with Dutch precision, time itself made soft and subjective in a canvas smaller than a sheet of paper",
      },
      {
        id: "two-fridas",
        title: "The Two Fridas",
        why: "Kahlo's most ambitious painting — two selves holding hands, one heart whole and one cut open, the most direct image of heartbreak in the history of art",
      },
    ],
    prevMovement: { id: "dada", name: "Dada" },
    nextMovement: { id: "abstract-expressionism", name: "Abstract Expressionism" },
  },

  {
    id: "abstract-expressionism",
    name: "Abstract Expressionism",
    dates: "c. 1940–1960",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#B05070",
    tagline: "New York, after the war — painting that carried the full weight of what had happened.",

    theMovement: `Abstract Expressionism was the first major American art movement and the first to achieve genuine international influence — shifting the center of the Western art world from Paris to New York in the decade after the Second World War. It was not a unified style but a shared ambition: to make painting that carried the full weight of human experience, that did not illustrate or decorate but directly communicated psychological and existential truth through the act of painting itself.

The movement had two broad tendencies. Action painting — Pollock, de Kooning, Kline — emphasized the physical act of painting as the primary subject. Pollock placed his canvases on the floor and moved through them, dripping and pouring paint from above; the painting was a record of his body moving through space and time, and it asked to be experienced as such — entered rather than viewed. Color field painting — Rothko, Newman, Still — used large areas of color as meditative environments. Rothko's paintings, which he insisted were not abstract but deeply human, were designed to be experienced at close range for extended periods, their soft, luminous color fields producing — in susceptible viewers — states of emotion that Rothko compared to religious experience. He was not exaggerating.`,

    whatItBroke: `Abstract Expressionism broke from figuration entirely — making the act of painting itself, the gesture and the physical mark on the surface, the primary subject of the work. It also broke from European compositional refinement and from the idea that a painting should be carefully planned and formally resolved. The painter's direct physical engagement with the canvas — however impulsive, violent, or uncontrolled — was the work's source of value and meaning.`,

    whatItInvented: `Action painting — the canvas as an arena, the painting as a physical event, the gesture as a direct record of the artist's body in time and space. The color field as a meditative environment — Rothko's large paintings as spaces to enter rather than objects to observe. The very large canvas as a standard format — Abstract Expressionism established that painting could be architectural in scale, surrounding the viewer rather than addressing them from a fixed position on a wall.`,

    historicalContext: `Abstract Expressionism was made in the shadow of the Second World War and the Holocaust — a historical catastrophe so extreme that it called into question every previous assumption about civilization, human nature, and the value of culture. Many of the painters were Jewish immigrants or the children of immigrants, and the weight of European history was personal as well as historical. The movement was also shaped by the Cold War: the US government and the CIA covertly promoted Abstract Expressionism internationally as evidence of American cultural freedom and vitality against Soviet social realism.`,

    keyArtists: [],
    keyWorks: [
      {
        id: "guernica",
        title: "Guernica",
        why: "The great predecessor — Picasso's Cubist language turned to bear the full weight of political violence, the painting that established that abstraction could carry moral and historical meaning",
      },
    ],
    prevMovement: { id: "surrealism", name: "Surrealism" },
    nextMovement: { id: "pop-art", name: "Pop Art" },
  },

  {
    id: "pop-art",
    name: "Pop Art",
    dates: "c. 1955–1970",
    parentCivilization: "Modern & Contemporary",
    parentId: "modern",
    color: "#D07080",
    tagline: "A soup can in a gallery. A question that changed everything.",

    theMovement: `Pop Art arrived in the late 1950s as the apparent — and perhaps deliberate — opposite of Abstract Expressionism. Where Abstract Expressionism looked inward to psychological depths, Pop Art looked outward at the surfaces of consumer culture. Where Abstract Expressionism was serious, difficult, and demanded emotional engagement, Pop Art was cheerful, immediately accessible, and apparently ironic. The shared subject matter — advertising images, comic strips, celebrity photographs, packaged goods, movie stars — was precisely the visual material that high modernism had always excluded as beneath consideration. Pop Art made it the center of serious art.

Pop Art emerged independently and almost simultaneously in Britain and America in the mid-1950s. The British version — Richard Hamilton, Eduardo Paolozzi, the Independent Group — was more analytical and less celebratory, treating American consumer culture as a fascinating anthropological phenomenon observed from a distance. The American version — Andy Warhol, Roy Lichtenstein, Claes Oldenburg, Jasper Johns, Robert Rauschenberg — was more ambiguous: were these artists celebrating consumer culture or critiquing it? Warhol's deadpan refusal to explain was itself an answer. When asked whether he liked Campbell's soup, he said he had eaten it for lunch every day for twenty years. Was that admiration or indictment? The question was the art.`,

    whatItBroke: `Pop Art broke from Abstract Expressionism's high seriousness and its insistence that the artist's psychological depths were the source of artistic value. It also broke from the modernist tradition's consistent hostility to popular culture, mass media, and commercial imagery — the conviction that high art and low culture were fundamentally opposed and that the artist's task was to resist the degradations of mass taste. Pop Art embraced those degradations as its primary material and proposed that the distinction between high and low was itself a cultural prejudice worth examining.`,

    whatItInvented: `The appropriated image — Warhol's use of existing commercial and media images as the raw material of art, which defined the dominant approach of contemporary art for the next fifty years and anticipated the internet culture of image circulation and remix. The silkscreen as a fine art medium — Warhol's use of photographic silkscreen printing introduced the aesthetics of mechanical reproduction into painting, making the imperfections of the process (misregistration, bleeding, inconsistency) part of the meaning. The artist as brand — Warhol's systematic cultivation of a public persona (the silver wig, the Factory, the aphorisms) was itself a work of art.`,

    historicalContext: `Pop Art emerged in the consumer boom of the late 1950s and 1960s — when American (and British) mass culture was producing unprecedented quantities of advertising images, celebrity photographs, packaged goods, and television programming. The movement coincided with the Kennedy assassination, the Civil Rights Movement, the Vietnam War, and the counterculture — a period of intense cultural and political upheaval in which the images of consumer culture (Marilyn Monroe, the electric chair, race riots, soup cans) took on complex and contradictory meanings. Warhol's Marilyn Diptych, made weeks after Monroe's death in 1962, captures this complexity exactly: the left panel blazing with artificial color, the right fading through repetition to barely visible ghost.`,

    keyArtists: [
      {
        id: "andy-warhol",
        name: "Andy Warhol",
        contribution: "The artist who made celebrity, mass production, and consumer culture the explicit subject of serious art — and who predicted the social media age with his observation that in the future everyone would be famous for fifteen minutes",
      },
    ],
    keyWorks: [
      {
        id: "campbells-soup",
        title: "Campbell's Soup Cans",
        why: "The question made visible — 32 canvases on gallery shelves showing every variety of Campbell's soup, and a single question: is this art? By asking it seriously, Warhol permanently changed what the question meant",
      },
      {
        id: "marilyn-diptych",
        title: "Marilyn Diptych",
        why: "Celebrity and death and mass reproduction in one image — the left panel blazing with color, the right fading to ghost, the icon consuming itself through repetition",
      },
    ],
    prevMovement: { id: "abstract-expressionism", name: "Abstract Expressionism" },
    nextMovement: null,
  },
];

// Assign movements to civilization
MODERN_CIVILIZATION.movements = MODERN_MOVEMENTS;

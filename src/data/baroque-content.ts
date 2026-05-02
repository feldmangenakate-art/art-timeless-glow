// Baroque Era — 1 civilization · 4 movements
// Italian Baroque · Dutch Golden Age · Flemish Baroque · Rococo

export interface BaroqueMovement {
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

export interface BaroqueCivilization {
  id: string;
  name: string;
  dates: string;
  tagline: string;
  overview: string;
  whyItMattered: string;
  historicalContext: string;
  movements: BaroqueMovement[];
  facts: {
    duration: string;
    where: string;
    medium: string;
    defining: string;
    legacy: string;
  };
}

export const BAROQUE_CIVILIZATION: BaroqueCivilization = {
  id: "baroque",
  name: "Baroque",
  dates: "c. 1600–1750",
  tagline: "Drama, shadow, ecstasy — the art that wanted to overwhelm you.",

  overview: `The Baroque emerged from a specific crisis: the Protestant Reformation had broken the unity of Western Christianity, and the Catholic Church needed art to fight back. The Council of Trent (1545–63) had declared that religious images should move the faithful emotionally — should make the stories of scripture immediate, physical, and overwhelming. The result was an art of extraordinary theatrical power: Caravaggio's brutal pools of light from absolute darkness, Bernini's marble that breathes and moves, Rubens's canvases so full of flesh and color that they seem to pulse with life. The Baroque was Counter-Reformation propaganda — and it was also the greatest explosion of painterly genius in the history of Western art.

The word "baroque" was originally an insult — from the Portuguese barroco, an irregularly shaped pearl — applied retrospectively by critics who found its drama excessive and its emotion overwrought after the cool reason of the Enlightenment. It stuck as a label but lost its pejorative edge. Today the Baroque is recognized as one of the supreme achievements of Western art — the period that produced Caravaggio, Rembrandt, Velázquez, Vermeer, Rubens, Poussin, Bernini, Bach, and Handel simultaneously, across different countries and traditions, all responding to the same fundamental question: how do you represent the divine in a world that has lost its theological certainty?`,

  whyItMattered: `The Baroque established the technical and expressive foundations of Western painting that lasted until the Impressionist revolution. Chiaroscuro — the dramatic contrast of light and dark — as a primary expressive tool. Illusionistic ceiling painting that seemed to open the roof onto heaven. The oil sketch as a legitimate finished work. The landscape as an independent subject capable of carrying philosophical weight. The still life as a meditation on mortality and beauty. The genre scene — ordinary people in ordinary moments — as worthy of the same attention as mythological and religious subjects. All of these were Baroque inventions that remained central to Western painting for 250 years.`,

  historicalContext: `The Baroque unfolded against a backdrop of almost continuous warfare — the Thirty Years War (1618–48) devastated Central Europe, the Dutch revolt against Spanish rule created the first modern republic, the English Civil War executed a king, and the Ottoman Empire pressed against the gates of Vienna. The period also saw the Scientific Revolution — Galileo, Kepler, Newton, Descartes — which transformed the European understanding of the cosmos and humanity's place in it. The art of the Baroque was made in a world simultaneously more violent, more uncertain, and more intellectually exciting than any that had preceded it. That tension — between faith and doubt, between earthly beauty and transcendent aspiration, between darkness and light — is the subject of the greatest Baroque art.`,

  movements: [
    {
      id: "italian-baroque",
      name: "Italian Baroque",
      dates: "c. 1600–1700",
      parentCivilization: "Baroque",
      parentId: "baroque",
      color: "#C08050",
      tagline: "Caravaggio brought God into the tavern — and Bernini made marble breathe.",

      theMovement: `Italian Baroque art was born in Rome at the turn of the 17th century, in the workshops and churches of a city determined to assert Catholic supremacy after the trauma of the Reformation. Two artists defined the movement's extremes: Caravaggio and Annibale Carracci, who arrived in Rome within years of each other and immediately established competing approaches to the central question of how sacred art should look. Caravaggio's answer was radical realism — saints who looked like street people, divine light arriving like a spotlight through a tavern window, the sacred made shockingly physical. Carracci's answer was a reformed classicism — the ideal figure of the Renaissance tradition, but given new emotional warmth and dynamic energy.

Both approaches were enormously influential, but it was Caravaggio's that changed the history of painting. His tenebrism — the technique of lighting figures from a single source against absolute darkness — became the dominant painterly language of the 17th century, spreading through the work of his followers (the Caravaggisti) across Italy, Spain, the Netherlands, and France. Every painter in Europe who worked with strong directional light after 1600 was responding to Caravaggio.`,

      whatItBroke: `Italian Baroque art broke from the elegant, self-conscious sophistication of Mannerism — from the elongated figures, acid colors, airless spaces, and knowing complexity that had dominated Italian painting since the 1520s. Both Caravaggio and Carracci, in their different ways, demanded a return to directness, physicality, and emotional engagement — to art that moved rather than impressed, that felt rather than displayed.`,

      whatItInvented: `Tenebrism — the extreme chiaroscuro technique in which figures emerge from near-absolute darkness into a single focused light. The altarpiece as a dramatic theatrical event rather than a devotional object. The ceiling fresco as total illusionistic environment — Annibale Carracci's Farnese ceiling (1597–1608) and Pietro da Cortona's ceiling in the Palazzo Barberini (1633–39) created vaulted heavens that appeared to open through the actual ceiling of the room. Baroque sculpture in the hands of Gian Lorenzo Bernini — marble captured at the instant of maximum emotional and physical intensity, drapery in impossible movement, faces contorted with ecstasy or agony.`,

      historicalContext: `Rome in the early 17th century was the most important art market in the world — popes, cardinals, and noble families competed to commission the greatest artists, and artists from across Europe came to Rome to study and work. The papal patronage system that had funded the High Renaissance continued under the Baroque popes, but the Counter-Reformation program gave it new urgency. The Church needed art that would make the faithful feel the reality of Catholic theology — the physical reality of Christ's suffering, the ecstatic reality of the saints' encounters with the divine — and it found in the Baroque the perfect instrument.`,

      keyArtists: [
        { id: "caravaggio", name: "Caravaggio", contribution: "Invented tenebrism and the radical realism that transformed European painting — his street-people saints shocked Rome and inspired every subsequent painter who worked with dramatic light" },
        { id: "artemisia-gentileschi", name: "Artemisia Gentileschi", contribution: "The most powerful woman painter of the Baroque — whose Judith paintings brought a physical force and psychological directness unprecedented in the treatment of female subjects" },
      ],

      keyWorks: [
        { id: "calling-saint-matthew", title: "The Calling of Saint Matthew", why: "Caravaggio's masterpiece — divine grace arriving as a shaft of light in a Roman tavern, the moment of transformation rendered with documentary realism" },
        { id: "judith-holofernes", title: "Judith Slaying Holofernes", why: "Artemisia Gentileschi's most celebrated work — two women decapitating a general with the focused efficiency of people doing a necessary job" },
      ],

      prevMovement: null,
      nextMovement: { id: "dutch-golden-age", name: "Dutch Golden Age" },
    },

    {
      id: "dutch-golden-age",
      name: "Dutch Golden Age",
      dates: "c. 1620–1680",
      parentCivilization: "Baroque",
      parentId: "baroque",
      color: "#B87040",
      tagline: "The world's first middle class invented the world's first art market — and got exactly the art it deserved.",

      theMovement: `The Dutch Golden Age produced one of the most distinctive and recognizable art traditions in Western history — an art of domestic interiors, precise still lifes, winter landscapes, and psychological portraits made for a new kind of patron: the prosperous merchant and professional classes of the Dutch Republic, the world's first modern economy. Unlike the art of Catholic Europe — funded by Church and court, dedicated to religious and mythological subjects, designed for public display — Dutch art was made for private homes, hung in rooms rather than churches, depicting the world the buyer actually lived in.

The result was an extraordinary democratization of artistic subject matter. Vermeer painted a woman reading a letter by a window. De Hooch painted a mother combing her child's hair in a sunlit courtyard. Ruisdael painted the flat Dutch landscape under enormous cloudy skies. Heda painted a half-eaten meal on a table — the rumpled tablecloth, the overturned silver cup, the half-peeled lemon — with a precision that makes the absent diner feel present. These subjects had been considered beneath the dignity of serious art for two thousand years. The Dutch Golden Age made them the center of a great art tradition.`,

      whatItBroke: `Dutch Golden Age art broke from the hierarchical system of genres — in which history painting (mythological and religious subjects) was the highest form of art, followed by portraiture, then landscape, then still life — and treated all subjects with equal seriousness and technical ambition. A Vermeer interior was painted with as much care and philosophical depth as a Raphael altarpiece; a Rembrandt self-portrait explored the human condition as profoundly as any history painting.`,

      whatItInvented: `The art market as we know it — open commercial galleries, art dealers, auctions, speculative collecting — was a Dutch invention. The still life as a philosophically serious art form — Dutch vanitas paintings (skulls, hourglasses, wilting flowers, extinguished candles alongside luxury objects) meditated on mortality and the transience of worldly pleasure with a consistency and depth that amounts to a philosophical tradition. The domestic interior as a subject — Vermeer's rooms, De Hooch's courtyards, Steen's chaotic households.`,

      historicalContext: `The Dutch Republic was the most unusual political entity in 17th-century Europe — a republic governed by merchants, with religious tolerance, freedom of the press, and a level of prosperity unmatched anywhere else. Amsterdam was the financial capital of the world, its East India Company the first multinational corporation. The absence of a royal court and a dominant Church as art patrons meant that the market for art was unusually democratic — and unusually commercially competitive. Rembrandt went bankrupt not because he couldn't sell his work but because he spent more than he earned.`,

      keyArtists: [
        { id: "rembrandt", name: "Rembrandt van Rijn", contribution: "The greatest painter of the human face — his self-portraits form the most sustained autobiographical project in art, tracking a life from cocky young master to ruined, magnificent old man" },
        { id: "vermeer", name: "Johannes Vermeer", contribution: "The painter of silence — who found in the fall of northern light on a white wall something that looks, unmistakably, like the sacred" },
      ],

      keyWorks: [
        { id: "night-watch", title: "The Night Watch", why: "Rembrandt's most ambitious composition — a group portrait transformed into a theatrical event, every figure individualized, light and shadow creating a drama from what should have been a formal occasion" },
        { id: "girl-pearl-earring", title: "Girl with a Pearl Earring", why: "Vermeer's most celebrated work — a face turning toward us, about to speak, caught in the moment of recognition that defines all intimate portraiture" },
        { id: "anatomy-lesson", title: "The Anatomy Lesson of Dr. Tulp", why: "The painting that established Rembrandt as Amsterdam's greatest portraitist — a public dissection transformed into a meditation on knowledge, mortality, and the individual face" },
      ],

      prevMovement: { id: "italian-baroque", name: "Italian Baroque" },
      nextMovement: { id: "flemish-baroque", name: "Flemish Baroque" },
    },

    {
      id: "flemish-baroque",
      name: "Flemish Baroque",
      dates: "c. 1600–1680",
      parentCivilization: "Baroque",
      parentId: "baroque",
      color: "#A86030",
      tagline: "Rubens painted flesh like no one before or since — and made excess into a philosophy.",

      theMovement: `Flemish Baroque art — centered on Antwerp, capital of the Spanish Netherlands — represents the Catholic South's answer to the Protestant North's Dutch Golden Age. Where Dutch art was intimate, domestic, and modest in scale, Flemish Baroque art was monumental, exuberant, and overwhelming. Peter Paul Rubens was its central figure and its supreme achievement: a painter of such technical mastery, such physical energy, and such sheer productivity that he dominated European art for fifty years while simultaneously conducting a diplomatic career on behalf of the Spanish Crown.

Rubens's art is an art of excess in the best sense — canvases of enormous size covered with figures in violent motion, colors of saturated intensity, flesh painted with a warmth and tactility that makes Venetian painting seem restrained. He had absorbed everything — Titian's color, Michelangelo's figures, Caravaggio's light, classical antiquity's compositional principles — and synthesized it into a personal style of irresistible vitality. His workshop, which employed dozens of assistants and trained Anthony van Dyck, was the most successful commercial art enterprise in Europe.`,

      whatItBroke: `Flemish Baroque art broke from the relatively contained, precise quality of earlier Flemish painting — from the jewel-like detail and carefully organized compositions of the Northern Renaissance — and embraced the full Baroque vocabulary of dynamic movement, dramatic light, and overwhelming scale. Rubens specifically broke from Mannerist elegance and artifice, demanding a return to the physical, the sensual, and the emotionally direct.`,

      whatItInvented: `The modello — the oil sketch presented to a patron for approval before the full-scale work was executed — as a recognized art form in its own right. The hunting piece — monumental paintings of royal hunts involving horses, hounds, and wild animals in violent combat — as a major genre. The garden portrait — aristocratic families shown in their gardens, in informal attitudes that anticipate the conversation piece of the 18th century. Anthony van Dyck's aristocratic portrait style — cool, elegant, psychologically penetrating — which defined portraiture for the English court and influenced portrait painting for two centuries.`,

      historicalContext: `Antwerp in the early 17th century was recovering from decades of religious war and economic disruption — the Spanish Fury of 1576 had devastated the city, and the closure of the Scheldt estuary by the Dutch had crippled its trade. The art market that Rubens dominated was a partial compensation, serving a wealthy Catholic elite that wanted magnificent altarpieces for their churches and equally magnificent secular paintings for their houses. Rubens himself was the embodiment of Flemish Baroque success — wealthy, internationally celebrated, socially mobile, moving between the world of art and the world of power with equal confidence.`,

      keyArtists: [],

      keyWorks: [
        { id: "descent-from-cross", title: "Descent from the Cross", why: "Rubens's masterpiece of religious painting — the dead weight of Christ's body handled by straining figures, the composition a study in controlled physical force" },
      ],

      prevMovement: { id: "dutch-golden-age", name: "Dutch Golden Age" },
      nextMovement: { id: "rococo", name: "Rococo" },
    },

    {
      id: "rococo",
      name: "Rococo",
      dates: "c. 1720–1780",
      parentCivilization: "Baroque",
      parentId: "baroque",
      color: "#D4A060",
      tagline: "The aristocracy of Europe decided art should be delightful — and got exactly that, right before the guillotine.",

      theMovement: `Rococo emerged in France in the early 18th century as a reaction against the grandeur and solemnity of Louis XIV's Baroque court style — against the heavy architecture, the formal gardens, the crushing scale of Versailles, and the official art of Le Brun that had served it. The Régence period after Louis XIV's death in 1715 saw French aristocratic culture relax into a more intimate, more playful, more overtly sensual mode — smaller rooms with curved walls and gilded ornament, lighter colors, freer and more varied ornamental forms. The art that accompanied this shift was Rococo: light, witty, elegant, erotic, and supremely skilled.

Antoine Watteau invented the fête galante — elegant figures in shimmering silks gathered in dreamlike parkland settings, playing music, conversing, and courting — a genre that had no precedent and perfectly captured the mood of French aristocratic life in the early 18th century. Fragonard pushed the genre toward frank eroticism and painterly freedom. Boucher covered every surface with pink flesh and blue sky. The Rococo was an art of pleasure, and it knew it — which is both its strength (it achieves what it sets out to do with dazzling skill) and its limitation (it does not set out to do very much).`,

      whatItBroke: `Rococo broke from the Baroque's religious intensity, its grandeur, its darkness, and its weight. Where Baroque art wanted to overwhelm, Rococo wanted to charm. Where Baroque art served Church and absolute monarchy, Rococo served the aristocratic private sphere — the boudoir, the salon, the intimate supper party. The rejection of solemnity was itself a statement: after a century of religious warfare and Louis XIV's crushing absolutism, French culture wanted to be light.`,

      whatItInvented: `The fête galante as a genre — Watteau's invention, recognized by the Académie as a new category when they admitted him. The boudoir as an architectural and artistic program — small, intimate rooms whose every surface (walls, ceiling, furniture, objects) was designed as a unified decorative environment. Porcelain as a major art form — the factories of Meissen, Sèvres, and Chelsea produced Rococo figures and vessels of extraordinary refinement. The pastoral fantasy — shepherds and shepherdesses in idealized countryside — as a vehicle for aristocratic nostalgia and erotic suggestion simultaneously.`,

      historicalContext: `Rococo flourished during the reign of Louis XV (1715–74) and reached its peak in the years around 1750. It was already being criticized as frivolous and morally corrupt — Diderot and the Encyclopédistes found it empty; the Neoclassical reaction led by David was already forming — when the French Revolution of 1789 rendered it permanently obsolete. The Rococo was literally guillotined — its aristocratic patrons killed, their houses confiscated, their contents dispersed. David's stark Neoclassicism, with its Republican virtues and classical severity, replaced it almost overnight. The Rococo was the last purely aristocratic art style in the history of Western painting.`,

      keyArtists: [],

      keyWorks: [
        { id: "swing-fragonard", title: "The Swing", why: "Fragonard's most celebrated painting — a young woman on a swing, her shoe flying off toward a hidden admirer below, the whole scene a barely veiled erotic fantasy painted with technique of extraordinary freedom and lightness" },
      ],

      prevMovement: { id: "flemish-baroque", name: "Flemish Baroque" },
      nextMovement: null,
    },
  ],

  facts: {
    duration: "~150 years — from Caravaggio to the decline of Rococo",
    where: "Rome, Amsterdam, Antwerp, Madrid, Paris — then all of Europe",
    medium: "Oil on canvas at monumental scale, marble sculpture, ceiling fresco, decorative arts",
    defining: "Art as overwhelming emotional experience — light from darkness, movement from stillness, flesh from stone",
    legacy: "Established the technical foundations of Western painting that lasted until Impressionism",
  },
};

export const BAROQUE_MOVEMENTS: BaroqueMovement[] = BAROQUE_CIVILIZATION.movements;

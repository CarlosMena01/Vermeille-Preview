/* Données des projets — reconstruites à partir du portfolio PDF de Vermeille Pontoire */

/* =========================================================================
   ORDRE D'AFFICHAGE DU PORTFOLIO
   -------------------------------------------------------------------------
   C'est cette liste — et elle seule — qui décide de l'ordre des projets
   dans la grille. Pour réorganiser : déplacer une ligne vers le haut ou
   vers le bas, rien d'autre à toucher.

   • un projet absent de cette liste s'affiche quand même, à la fin
   • un id qui n'existe pas ici est simplement ignoré
   ========================================================================= */
const PROJECT_ORDER = [
  "haricots",                    //  1 · Début des haricots — restaurant végan
  "vermeille",                   //  2 · Vermeille — identité de marque personnelle
  "gobelet",                     //  3 · Gobelet La Piautre
  "brochure-annuelle",           //  4 · Brochure Annuelle — Richou Voyages
  "jcg",                         //  5 · JCG Créations — refonte d'identité
  "motion-rse",                  //  6 · Motion design — RSE
  "festival",                    //  7 · Festival du cinéma espagnol — versions 1 et 2
  "illustration-affiches-pop",   //  8 · Affiches pop
  "orelsan",                     //  9 · Civilisation — Orelsan
  "brochure-thematique",         // 10 · Brochure thématique — Richou Voyages
  "cohezia",                     // 11 · Refonte des entités — Richou Voyages
  "video-alternance",            // 12 · Vidéo Richou alternance
  "illustrations-paysages",      // 13 · Illustrations paysages — Santorin, Lisbonne, bord de mer
  "vagabond",                    // 14 · Vagabond — application de mobilité
  "absolut",                     // 15 · Absolut Mythologik

  /* — le reste du portfolio, dans l'ordre précédent — */
  "illustrations-voyage",        // Illustrations de voyage — Sardaigne & Turquie
  "serigraphie-plat",            // Sérigraphie à plat — Muralla Roja et illustration imprimée
  "brochure-inspiration",        // Brochure Inspiration — Richou Voyages
  "photos-personnelles",         // Photos personnelles
  "cardgame",                    // Traits de caractère — jeu de cartes
  "voyage-amerique",             // Logo voyage Amérique Latine
  "illustration-route",          // Sur la route — Vernet-les-Bains & Lohéac
  "split",                       // Dépliant Split
  "illustration-venise",         // Venise
  "animation-valise",            // Animation Richou Voyages — bagage cabine
  "pochette-cadeau",             // Pochette Cadeau — Richou Voyages
  // "brochure-groupe",             // Brochure groupe — Richou Voyages
  "serigraphie-artisanale",      // Sérigraphie artisanale — tote bag
  "photos-studiom",              // Photo Studio M
  "video-voyage",                // Vidéo Richou voyages
  "flyer-bons-plans",            // Flyer bon plan — Richou Voyages
  "pictogrammes",                // Pictogrammes voyage
];

/* Les N premiers projets de PROJECT_ORDER sont la sélection mise en avant :
   ils gardent un placement strict ligne par ligne dans la grille. Les suivants
   comblent la colonne la plus courte, pour éviter un grand vide tout en bas. */
const PROJECT_ORDER_FEATURED = 15;

/* Aperçu du portfolio : la grille s'arrête à ce projet et un bouton déplie
   le reste, pour ne pas assommer le visiteur avec trente et une cartes. */
const PROJECT_PREVIEW_LAST = "illustrations-paysages";


/* `coverRatio` = largeur / hauteur de l’image de couverture. Il réserve la bonne
   hauteur avant même que l’image soit chargée : la grille ne saute plus au
   défilement et elle peut être équilibrée dès le premier rendu. */
const PROJECTS = [
  {
    id: "vermeille",
    title: "Vermeille",
    subtitle: "Identité de marque personnelle",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/brand-vermeille-cover.jpg",
    coverRatio: 1.333,
    gallery: [
      "assets/img/brand-vermeille-logo.png",
      "assets/img/brand-vermeille-cover.jpg",
      "assets/img/brand-vermeille-detail-1.jpg"
    ],
    description: "Création de l’identité visuelle et de plusieurs supports de communication liés à ma marque personnelle, dans l’éventualité où je créerais un jour mon propre studio de graphisme.\nLogo réalisé sur Illustrator, avec des formes arrondies et des courbes douces, afin de créer un univers chaleureux, accueillant et décontracté, qui reflète l’ambiance que je souhaite donner à mon studio.",
    tags: ["Logo", "Charte graphique", "Papeterie"]
  },
  {
    id: "festival",
    title: "Festival du cinéma espagnol",
    subtitle: "Identité visuelle — versions 1 et 2",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/festival-v1-cover.jpg",
    coverRatio: 1.605,
    gallery: [
      "assets/img/festival-v1-cover.jpg",
      "assets/img/festival-v1-detail-1.jpg",
      "assets/img/festival-v1-detail-2.jpg",
      "assets/img/festival-v1-detail-3.jpg",
      "assets/img/festival-v2-cover.jpg",
      "assets/img/festival-v2-detail-1.jpg"
    ],
    description: "Création de l’identité visuelle d’un festival de cinéma espagnol, avec la contrainte de réaliser une typographie pour tout un alphabet, ainsi que différents supports de communication demandés pour l’événement : carton d’invitation, affiche, cartes de visite, page de site internet, logo et quelques goodies.\n\nJ’ai réalisé deux versions aux identités visuelles proches, mais reposant sur des concepts distincts. La première a été retenue parmi plusieurs propositions, puis déclinée sur l’ensemble des supports ; la seconde reprend la forme rectangulaire visible dans le viseur d’une caméra au moment du tournage.",
    tags: ["Typographie sur-mesure", "Logo", "Affiche", "Goodies"]
  },
  {
    id: "brochure-annuelle",
    title: "Brochure Annuelle",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-annuelle-cover.jpg",
    coverRatio: 0.705,
    gallery: [
      "assets/img/brochure-annuelle-cover.jpg",
      "assets/img/brochure-annuelle-detail-1.jpg"
    ],
    description: "Richou Voyages sort tous les ans une brochure annuelle avec des voyages pour l'été et l'hiver, destinée à une cible de personnes âgées qui souhaitent voyager avec des séjours entièrement organisés, accompagnés d'un guide et d'accompagnateurs. Mon objectif était de réaliser la couverture de cette brochure, ainsi que la mise en page des pages annexes et des pages produits.",
    tags: ["Couverture", "Mise en page"]
  },
  {
    id: "pictogrammes",
    title: "Pictogrammes voyage",
    subtitle: "Brochure Richou Voyages",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/pictogrammes-detail-1.jpg",
    coverRatio: 1.0,
    gallery: [
      "assets/img/pictogrammes-detail-1.jpg"
    ],
    description: "Chaque année, Richou Voyages publie deux brochures afin de présenter et de promouvoir ses différents voyages organisés auprès de ses clients. Pour simplifier la compréhension des informations et alléger la mise en page, j'ai été chargée de créer des pictogrammes vectoriels respectant la charte graphique et garantissant une cohérence avec l'ensemble des brochures.",
    tags: ["Pictogrammes", "Système vectoriel"]
  },
  {
    id: "vagabond",
    title: "Vagabond",
    subtitle: "Application de mobilité douce",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/vagabond-cover.jpg",
    coverRatio: 2.028,
    gallery: [
      "assets/img/vagabond-logo.jpg",
      "assets/img/vagabond-cover.jpg",
      "assets/img/vagabond-detail-1.jpg",
      "assets/img/vagabond-detail-2.jpg",
      "assets/img/vagabond-detail-4.jpg"
    ],
    description: "J'ai réalisé l'identité graphique de Vagabond, une application de mobilité qui prône la flânerie et la découverte. Les utilisateurs ne choisissent pas l'itinéraire le plus rapide, mais un parcours les guidant vers des œuvres de street art, des parcs, des architectures singulières et d'autres lieux d'intérêt. Le but était de concevoir l'identité visuelle, la première version de l'application pour l'agglomération d'Angers, ainsi qu'une campagne de communication pour son lancement.",
    tags: ["App mobile", "Logo", "Campagne de lancement"]
  },
  {
    id: "cohezia",
    title: "Refonte des entités",
    subtitle: "Richou Voyages",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/cohezia-cover.png",
    coverRatio: 1.413,
    gallery: [
      "assets/img/cohezia-cover.png",
      "assets/img/cohezia-detail-1.png",
      "assets/img/cohezia-detail-2.png",
      "assets/img/cohezia-detail-3.png",
      "assets/img/cohezia-detail-4.png",
      "assets/img/cohezia-detail-5.png",
      "assets/img/cohezia-detail-6.jpg",
      "assets/img/cohezia-detail-7.jpg",
      "assets/img/cohezia-detail-10.jpg",
      { video: "assets/video/cohezia-animation-logos.mp4", poster: "assets/img/cohezia-animation-logos-poster.jpg" }
    ],
    description: "J’ai eu pour projet de concevoir les identités visuelles et les chartes graphiques de chacune des entités, en m’adaptant à l’identité existante de Richou Voyages, afin que l’on comprenne que ces marques font partie de l’entreprise. Ensuite, j’ai dû décliner différents supports en fonction des marques.",
    tags: ["Charte graphique", "Papeterie", "Déclinaisons de marque"]
  },
  {
    id: "cardgame",
    title: "Traits de caractère",
    subtitle: "Jeu de cartes pour enfants",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/cardgame-cover.jpg",
    coverRatio: 1.042,
    gallery: [
      "assets/img/cardgame-cover.jpg",
      "assets/img/cardgame-detail-1.jpg",
      "assets/img/cardgame-detail-2.jpg",
      "assets/img/illustration-cartes.jpg"
    ],
    description: "Réalisation d’un jeu de cartes pour les enfants, regroupant plusieurs mini-jeux. Création d’un logo, d’une boîte de jeu, des visuels des cartes « caractères », des cartes « lettres » et des cartes « calques », ainsi que d’un support présentant les règles du jeu.",
    tags: ["Packaging", "Illustration", "Jeu"]
  },
  {
    id: "brochure-inspiration",
    title: "Brochure Inspiration",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-inspiration-cover.jpg",
    coverRatio: 1.223,
    gallery: [
      "assets/img/brochure-inspiration-cover.jpg",
      "assets/img/brochure-inspiration-detail-1.jpg",
      "assets/img/brochure-inspiration-detail-2.jpg"
    ],
    description: "Richou Voyages a sorti une nouvelle brochure dans le but de promouvoir des voyages auprès d'une cible plus jeune : familles, couples, solos… et souhaitait une brochure entièrement repensée, à l'image de cette nouvelle cible. J'ai donc eu pour objectif de réaliser toute la création et la mise en page de cette brochure.",
    tags: ["Mise en page", "Édition"]
  },
  {
    id: "pochette-cadeau",
    title: "Pochette Cadeau",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/pochette-cadeau-cover.jpg",
    coverRatio: 1.383,       // photo pivotée par l’EXIF : c’est le ratio affiché qui compte
    gallery: [
      "assets/img/pochette-cadeau-cover.jpg",
      "assets/img/pochette-cadeau-detail-1.jpg",
      "assets/img/pochette-cadeau-detail-2.jpg",
      "assets/img/pochette-cadeau-detail-3.jpg",
      "assets/img/pochette-cadeau-detail-4.jpg"
    ],
    description: "J’ai eu pour objectif de réaliser une pochette cadeau que l’on puisse remplir en fonction du client et du voyage offert. La contrainte était de faire quelque chose de moderne, qui rappelle le voyage, et dans un format assez important pour que l’on puisse y glisser les documents liés au voyage au format A5. J’ai donc réalisé deux versions différentes.",
    tags: ["Packaging", "Illustration"]
  },
  {
    id: "gobelet",
    title: "Gobelet La Piautre",
    subtitle: "Festival de bière artisanale",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/gobelet-cover.jpg",
    coverRatio: 0.667,
    gallery: [
      "assets/img/gobelet-cover.jpg",
      "assets/img/gobelet-detail-1.png"
    ],
    description: "Réalisation d'un visuel pour un gobelet sur le thème des bords de Loire pour un festival organisé par la marque de bière La Piautre. Conception de l'illustration sur Illustrator.",
    tags: ["Illustration", "Packaging"]
  },
  {
    id: "orelsan",
    title: "Civilisation — Orelsan",
    subtitle: "Pochette d'album",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/orelsan-cover.jpg",
    coverRatio: 1.5,
    gallery: [
      "assets/img/orelsan-cover.jpg",
      "assets/img/orelsan-detail-1.png",
      "assets/img/orelsan-detail-2.png"
    ],
    description: "Réalisation de l’identité graphique et de la campagne de communication de l’album Civilisation de l’artiste Orelsan. Ce projet fictif est né d’une réinterprétation de la direction artistique de cet album à ma manière, inspirée de la technique de la risographie.",
    tags: ["Direction artistique", "Risographie"]
  },
  {
    id: "absolut",
    title: "Absolut Mythologik",
    subtitle: "Affiche de campagne",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/absolut-cover.jpg",
    coverRatio: 1.313,
    gallery: [
      "assets/img/absolut-cover.jpg",
      "assets/img/absolut-detail-1.jpg"
    ],
    description: "Réalisation d'une affiche pour la sortie de la nouvelle bouteille « Absolut » de la marque de vodka, avec comme thème de campagne la mythologie. J'ai décidé de réutiliser l'image de Méduse ainsi que l'idée de ses cheveux de serpent, tout en y mêlant une notion artistique avec des illustrations à la manière d'Andy Warhol.",
    tags: ["Affiche", "Mythologie"]
  },
  {
    id: "serigraphie-artisanale",
    title: "Sérigraphie artisanale",
    subtitle: "Tote bag — Studio M",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/serigraphie-artisanale-cover.jpg",
    coverRatio: 0.792,
    gallery: [
      "assets/img/serigraphie-artisanale-cover.jpg",
      "assets/img/serigraphie-artisanale-detail-1.jpg",
      "assets/img/serigraphie-artisanale-detail-2.jpg",
      "assets/img/serigraphie-artisanale-detail-3.jpg",
      "assets/img/serigraphie-artisanale-detail-4.png"
    ],
    description: "Durant mes études à Studio M, j'ai eu l'occasion de réaliser un motif en sérigraphie manuelle. Le but était tout d'abord de créer un motif sur Illustrator, puis de l'incruster sur un support à l'aide de la technique manuelle de la sérigraphie, pour l'imprimer sur un tote bag.",
    tags: ["Sérigraphie manuelle", "Motif"]
  },
  {
    id: "serigraphie-plat",
    title: "Sérigraphie à plat",
    subtitle: "Deux illustrations imprimées",
    category: "print",
    categoryLabel: "Print et Édition",
    extraCategories: ["illustrations"],
    cover: "assets/img/illustration-architecture.jpg",
    coverRatio: 0.708,
    gallery: [
      "assets/img/illustration-architecture.jpg",
      "assets/img/serigraphie-plat-cover.jpg",
      "assets/img/serigraphie-plat-detail-1.jpg"
    ],
    description: "Réalisation de deux illustrations sur le logiciel Illustrator sur un thème choisi. Impression dans une imprimerie que nous avons eu la chance de visiter, avec la technique de la sérigraphie.",
    tags: ["Sérigraphie", "Illustration vectorielle", "Affiche"]
  },
  {
    id: "illustrations-voyage",
    title: "Illustrations de voyage",
    subtitle: "Sardaigne & Turquie",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-sardaigne.jpg",
    coverRatio: 0.562,
    gallery: [
      "assets/img/illustration-sardaigne.jpg",
      "assets/img/illustration-turquie.jpg"
    ],
    description: "Réalisation d'une illustration de la Sardaigne et d'une illustration de la Turquie. Je devais réaliser différentes illustrations de paysages pour une campagne de publicité visant à promouvoir différentes destinations.",
    tags: ["Illustration vectorielle", "Campagne publicitaire", "Voyage"]
  },
  {
    id: "illustrations-paysages",
    title: "Illustrations paysages",
    subtitle: "Illustrations d'après photo",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-fenetre.jpg",
    coverRatio: 0.708,
    gallery: [
      "assets/img/illustration-fenetre.jpg",
      "assets/img/illustration-lisbonne.png",
      "assets/img/illustration-plage.jpg"
    ],
    description: "Réalisation de différentes illustrations sur le logiciel Illustrator à l'aide de différents outils, à partir d'une photo représentant des paysages variés.\nIci : Santorin, la Crète et Lisbonne.",
    tags: ["Illustration vectorielle", "D'après photo", "Voyage"]
  },
  {
    id: "illustration-route",
    title: "Sur la route",
    subtitle: "Vernet-les-Bains & Lohéac",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-vernet.png",
    coverRatio: 0.679,
    gallery: [
      "assets/img/illustration-vernet.png",
      "assets/img/illustration-loheac.jpg"
    ],
    description: "Réalisation de deux illustrations de voyage destinées à être imprimées sous forme d'affiches, sur le thème des véhicules de collection, pour l'événement « La Baule Automobile ». Les deux illustrations ont été réalisées sur Illustrator.",
    tags: ["Illustration vectorielle", "Affiche", "Événement"]
  },
  {
    id: "illustration-venise",
    title: "Venise",
    subtitle: "Illustration isométrique",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-venise.png",
    coverRatio: 1.0,
    gallery: [
      "assets/img/illustration-venise.png"
    ],
    description: "Réalisation de l'illustration d'une ville à l'aide des outils 3D du logiciel Illustrator. J'ai créé une scène vénitienne en vue isométrique : un canal, son pont et ses façades pastel reconstitués comme une maquette.",
    tags: ["Illustration vectorielle", "Outils 3D Illustrator", "Isométrie"]
  },
  {
    id: "illustration-affiches-pop",
    title: "Affiches pop",
    subtitle: "Série décorative",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-aperol.jpg",
    coverRatio: 0.707,
    gallery: [
      "assets/img/illustration-aperol.jpg",
      "assets/img/illustration-bottes.jpg",
      "assets/img/illustration-disco.jpg"
    ],
    description: "Réalisation d'affiches décoratives pensées pour une chambre : une boule disco, un spritz sur damier ondulé et une paire de bottes santiag fleuries. Palette saturée de roses et d'oranges vifs pour une harmonie dynamique.",
    tags: ["Illustration vectorielle", "Affiche", "Décoration"]
  },
  {
    id: "jcg",
    title: "JCG Créations",
    subtitle: "Refonte de l’identitée visuelle",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/jcg-cover.jpg",
    coverRatio: 1.5,
    gallery: [
      "assets/img/jcg-cover.jpg",
      "assets/img/jcg-detail-2.jpg",
      "assets/img/jcg-detail-1.jpg",
      "assets/img/jcg-detail-3.jpg",
      "assets/img/jcg-detail-4.jpg",
      "assets/img/jcg-detail-5.jpg",
      "assets/img/jcg-detail-6.jpg",
      "assets/img/jcg-detail-7.jpg",
      "assets/img/jcg-detail-8.jpg",
      "assets/img/jcg-detail-9.jpg"
    ],
    description: "Refonte de la charte graphique de l’entreprise JCG Créations, un fabricant de vans aménagés. Le but était de revoir complètement le logo et le système graphique de l’entreprise pour qu’ils soient plus modernes et qu’ils représentent mieux les valeurs de l’entreprise, à savoir le côté haut de gamme des produits, l’idée du road trip et de la liberté, mais aussi l’autonomie.\n\nJ’ai donc retravaillé le logo, mais aussi les couleurs et les typographies, créé un motif et décliné plusieurs supports de communication avec cette nouvelle charte graphique (comptoir, panneau Dibond, oriflamme, carte de visite, signature mail…).",
    tags: ["Refonte de logo", "Charte graphique", "Motif", "Supports"]
  },
  {
    id: "haricots",
    title: "Le début des haricots",
    subtitle: "Identité visuelle — restaurant végan",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/haricots-detail-6.jpg",
    coverRatio: 1.415,
    gallery: [
      "assets/img/haricots-cover.jpg",
      "assets/img/haricots-detail-1.jpg",
      "assets/img/haricots-detail-2.jpg",
      "assets/img/haricots-detail-3.jpg",
      "assets/img/haricots-detail-4.jpg",
      "assets/img/haricots-detail-5.jpg",
      "assets/img/haricots-detail-6.jpg",
      "assets/img/haricots-detail-7.jpg",
      "assets/img/haricots-detail-8.jpg",
      "assets/img/haricots-detail-9.jpg",
      "assets/img/haricots-detail-10.jpg"
    ],
    description: "Création complète de l’identité visuelle d’un restaurant végan. Réalisation du logo puis de sa charte graphique avec pattern, mascotte, choix des couleurs et des typographies… Puis réalisation de différents supports de communication comme un menu ou encore des contenus pour les réseaux sociaux.",
    tags: ["Logo", "Charte graphique", "Mascotte", "Menu"]
  },
  {
    id: "voyage-amerique",
    title: "Logo voyage Amérique Latine",
    subtitle: "Projet personnel — tee-shirts & stickers",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/voyage-amerique-detail-4.jpg",
    coverRatio: 1.333,
    gallery: [
      "assets/img/voyage-amerique-detail-4.jpg",
      "assets/img/voyage-amerique-detail-3.jpg",
      "assets/img/voyage-amerique-detail-1.jpg",
      "assets/img/voyage-amerique-detail-5.jpg",
      "assets/img/voyage-amerique-detail-6.jpg"
    ],
    description: "Ce projet personnel me tenait particulièrement à cœur. À l’occasion d’un voyage de trois mois en Amérique latine avec ma sœur, j’ai eu envie de créer notre propre identité graphique, que nous pourrions ensuite décliner sur différents supports : des tee-shirts et des stickers à coller dans les lieux que nous allions découvrir tout au long de notre aventure.",
    tags: ["Logo", "Illustration", "Textile", "Stickers"]
  },
  {
    id: "brochure-thematique",
    title: "Brochure thématique",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-thematique-cover.jpg",
    coverRatio: 1.5,
    gallery: [
      "assets/img/brochure-thematique-cover.jpg",
      "assets/img/brochure-thematique-detail-1.jpg",
      "assets/img/brochure-thematique-detail-2.jpg"
    ],
    description: "Réalisation d’une brochure pour présenter les différents voyages thématiques de Richou Voyages, à savoir les carnavals, les marchés de Noël, les réveillons du Nouvel An, les voyages à la neige… Mise en page réalisée sur InDesign à l’aide du logiciel EasyCatalog.",
    tags: ["Mise en page", "InDesign", "EasyCatalog"]
  },
  // {
  //   id: "brochure-groupe",
  //   title: "Brochure groupe",
  //   subtitle: "Richou Voyages",
  //   category: "print",
  //   categoryLabel: "Print et Édition",
  //   cover: "assets/img/brochure-groupe-cover.jpg",
  //   gallery: [
  //     "assets/img/brochure-groupe-cover.jpg",
  //     "assets/img/brochure-groupe-detail-1.jpg"
  //   ],
  //   description: "Dans le cadre de mon poste chez Richou Voyages, j’ai eu l’occasion de réaliser une petite plaquette pour présenter quelques voyages proposé à faire en groupe de voyage (amis, famille, entreprise…) Plaquette réalisée sur indesign.",
  //   tags: ["Plaquette", "Mise en page", "InDesign"]
  // },
  {
    id: "split",
    title: "Dépliant Split",
    subtitle: "Brochure sur le film Split",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/split-cover.jpg",
    coverRatio: 1.5,
    gallery: [
      "assets/img/split-cover.jpg",
      "assets/img/split-detail-1.jpg",
      "assets/img/split-detail-2.jpg",
      "assets/img/split-detail-3.jpg",
      "assets/img/split-detail-4.jpg",
      "assets/img/split-detail-5.jpg"
    ],
    description: "Réalisation d’une brochure sur le film Split, avec la contrainte de réaliser plusieurs illustrations et photomontages à l’aide de Photoshop, tout en réutilisant l’aspect graphique du film tout au long de la brochure.\n\nLa plaquette contient différents contenus : synopsis, résumé, témoignages et illustrations.",
    tags: ["Photomontage", "Illustration", "Photoshop", "Mise en page"]
  },
  {
    id: "flyer-bons-plans",
    title: "Flyer bon plan",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/flyer-bons-plans-cover.jpg",
    coverRatio: 0.867,
    gallery: [
      "assets/img/flyer-bons-plans-cover.jpg",
      "assets/img/flyer-bons-plans-detail-1.jpg"
    ],
    description: "Réalisation d’un flyer pour présenter à nos clients les différents bons plans proposés par Richou Voyages et leur donner envie de passer par l’agence plutôt que par une autre.",
    tags: ["Flyer", "Mise en page"]
  },
  {
    id: "motion-rse",
    title: "Motion design",
    subtitle: "Animation sur la RSE",
    category: "video",
    categoryLabel: "Motion et Vidéo",
    cover: "assets/img/motion-rse-poster.jpg",
    coverRatio: 1.778,
    gallery: [
      { video: "assets/video/motion-rse.mp4", poster: "assets/img/motion-rse-poster.jpg" }
    ],
    description: "Réalisation d’une animation sur le thème de la RSE, le but était de mettre en avant ce principe de Responsabilité Sociétale des Entreprises en le présentant aux entreprises et en y intégrant une voix off et des animations claires et ludiques.",
    tags: ["Motion design", "Voix off", "Animation"]
  },
  {
    id: "animation-valise",
    title: "Animation Richou Voyages",
    subtitle: "Préparer son bagage cabine",
    category: "video",
    categoryLabel: "Motion et Vidéo",
    cover: "assets/img/animation-valise-poster.jpg",
    coverRatio: 1.778,
    gallery: [
      { video: "assets/video/animation-valise.mp4", poster: "assets/img/animation-valise-poster.jpg" }
    ],
    description: "Réalisation d’une animation sur After Effects pour clarifier les différents équipements autorisés dans un bagage lors d’un voyage avec Richou Voyages. Cela permet aux clients de savoir, de manière ludique, ce qu’ils ont ou non le droit d’emporter.",
    tags: ["Motion design", "After Effects"]
  },
  {
    id: "video-alternance",
    title: "Vidéo Richou alternance",
    subtitle: "Campagnes d’alternance",
    category: "video",
    categoryLabel: "Motion et Vidéo",
    cover: "assets/img/alternance-richou-recrute-poster.jpg",
    coverRatio: 0.562,
    gallery: [
      { video: "assets/video/alternance-richou-recrute.mp4", poster: "assets/img/alternance-richou-recrute-poster.jpg" },
      { video: "assets/video/alternance-journee-juliette.mp4", poster: "assets/img/alternance-journee-juliette-poster.jpg" },
      { video: "assets/video/alternance-temoignage-lorine.mp4", poster: "assets/img/alternance-temoignage-lorine-poster.jpg" },
      { video: "assets/video/alternance-prejuges.mp4", poster: "assets/img/alternance-prejuges-poster.jpg" },
      { video: "assets/video/alternance-3-avantages.mp4", poster: "assets/img/alternance-3-avantages-poster.jpg" }
    ],
    description: "Réalisation d’une campagne d’alternance chaque nouvelle année durant mon poste chez Richou Voyages. Le but était de trouver un nouveau concept chaque année pour donner envie aux futurs alternants de nous rejoindre. Par exemple, sous forme de témoignages d’alternants, de préjugés vs réalité ou encore de « Une journée type en alternance chez Richou Voyages ».\n\nAvec la réalisation d’un logo et d’une animation spéciale pour cette campagne « Richou a besoin de vous », sur le logiciel After Effects.",
    tags: ["Tournage", "Montage", "After Effects", "Réseaux sociaux"]
  },
  {
    id: "video-voyage",
    title: "Vidéo Richou voyages",
    subtitle: "Destinations & témoignages",
    category: "video",
    categoryLabel: "Motion et Vidéo",
    cover: "assets/img/video-voyage-budapest-poster.jpg",
    coverRatio: 1.778,
    gallery: [
      { video: "assets/video/video-voyage-budapest.mp4", poster: "assets/img/video-voyage-budapest-poster.jpg" },
      { video: "assets/video/video-voyage-top5-culture.mp4", poster: "assets/img/video-voyage-top5-culture-poster.jpg" },
      { video: "assets/video/video-voyage-temoignage-inde.mp4", poster: "assets/img/video-voyage-temoignage-inde-poster.jpg" }
    ],
    description: "Réalisation de différentes vidéos pour présenter les voyages, soit sous la forme d’une vidéo de présentation d’une destination par l’un de nos conseillers voyages soit sous la forme de témoignage client lors de nos voyages ou encore des vidéos rapides qui présentent un Top 5.",
    tags: ["Tournage", "Montage", "Réseaux sociaux"]
  },
  {
    id: "photos-personnelles",
    title: "Photos personnelles",
    subtitle: "Retouche & prise de vue",
    category: "photographie",
    categoryLabel: "Photographie",
    cover: "assets/img/photo-personal-1.jpg",
    coverRatio: 0.562,
    gallery: [
      "assets/img/photo-personal-1.jpg",
      "assets/img/photo-personal-2.jpg",
      "assets/img/photo-personal-3.jpg",
      "assets/img/photo-personal-4.jpg",
      "assets/img/photo-personal-5.jpg",
      "assets/img/photo-personal-6.jpg",
      "assets/img/photo-personal-7.jpg",
      "assets/img/photo-personal-8.jpg"
    ],
    description: "Réalisation de photos dans le cadre de ma vie personnelle, puis retouche des photos sur Photoshop.",
    tags: ["Photographie", "Retouche"]
  },
  {
    id: "photos-studiom",
    title: "Photo Studio M",
    subtitle: "Composition & prise de vue",
    category: "photographie",
    categoryLabel: "Photographie",
    cover: "assets/img/photo-studiom-1.jpg",
    coverRatio: 0.751,
    gallery: [
      "assets/img/photo-studiom-1.jpg",
      "assets/img/photo-studiom-2.jpg",
      "assets/img/photo-studiom-3.jpg",
      "assets/img/photo-studiom-4.jpg",
      "assets/img/photo-studiom-5.jpg"
    ],
    description: "Réalisation de photos en utilisant le principe des lignes graphiques et de la règle des tiers. Prise de vue de plusieurs sujets avec un appareil photo numérique durant mes études à Studio M.",
    tags: ["Composition", "Studio"]
  }
];

/* Le parcours se lit par étapes : chaque étape réunit un diplôme et
   l'expérience qui l'accompagne, côte à côte sur la même ligne et sur un
   seul point. Une étape peut n'avoir qu'un seul des deux. L'ordre du
   tableau est l'ordre affiché. */
const TIMELINE = [
  {
    experience: { date: "Juin 2018", title: "Graphiste (stage)", place: "Publi Impress, La Séguinière", desc: "Première expérience en agence de communication visuelle." }
  },
  {
    formation:  { date: "Juillet 2020", title: "BAC STD2A", place: "Lycée Jeanne Delanoue, Cholet", desc: "Baccalauréat Sciences et Technologies du Design et des Arts Appliqués." },
    experience: { date: "Juin 2019", title: "Graphiste textile (stage)", place: "ICODE, Saint-Macaire-en-Mauges", desc: "Création graphique appliquée au textile." }
  },
  {
    formation:  { date: "Juin 2022", title: "BTS Communication", place: "ESUPEC, Cholet", desc: "Obtention de mon BTS Communication." },
    experience: { date: "Mai — Juin 2021", title: "Assistante communication et graphisme (stage)", place: "Mraude, Trélazé", desc: "Support graphique et communication pour l'agence." }
  },
  {
    experience: { date: "Février 2022", title: "Assistante commerciale (stage)", place: "Univision, Cholet", desc: "Immersion côté commercial, complémentaire à mon profil créatif." }
  },
  {
    formation:  { date: "Juillet 2023", title: "Bachelor Infographie", place: "Studio M — école de l'ESPL, Angers", desc: "Obtention de mon Bachelor Infographie." },
    experience: { date: "2022 — 2024", title: "Graphiste et assistante communication (alternance)", place: "Richou Voyages, Cholet", desc: "Création de supports de communication et refonte d'identités visuelles pour le groupe." }
  },
  {
    formation:  { date: "Septembre 2024", title: "Bachelor Design Graphique", place: "EEGP, Angers", desc: "Obtention de mon Bachelor Design Graphique." },
    experience: { date: "2024 — 2025", title: "Graphiste et assistante communication", place: "Richou Voyages, Cholet", desc: "Poursuite de mon poste au sein de l'entreprise, en charge de la création graphique." }
  }
];


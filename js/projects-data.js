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
  "cohezia",                     //  9 · Refonte des entités — Richou Voyages
  "brochure-thematique",         // 10 · Brochure thématique — Richou Voyages
  "orelsan",                     // 11 · Civilisation — Orelsan
  "illustration-lisbonne",       // 12 · Lisbonne
  "illustration-fenetre",        // 12 · Vue sur Santorin
  "illustration-plage",          // 12 · Bord de mer
  "video-alternance",            // 13 · Vidéo Richou alternance
  "vagabond",                    // 14 · Vagabond — application de mobilité
  "absolut",                     // 15 · Absolut Mythologik

  /* — le reste du portfolio, dans l'ordre précédent — */
  "illustrations-voyage",        // Illustrations de voyage — Sardaigne & Turquie
  "illustration-architecture",   // Muralla Roja
  "brochure-inspiration",        // Brochure Inspiration — Richou Voyages
  "photos-personnelles",         // Photos personnelles
  "cardgame",                    // Traits de caractère — jeu de cartes
  "voyage-amerique",             // Logo voyage Amérique Latine
  "illustration-route",          // Sur la route — Vernet-les-Bains & Lohéac
  "split",                       // Dépliant Split
  "illustration-venise",         // Venise
  "animation-valise",            // Animation Richou Voyages — bagage cabine
  "pochette-cadeau",             // Pochette Cadeau — Richou Voyages
  "brochure-groupe",             // Brochure groupe — Richou Voyages
  "serigraphie-artisanale",      // Sérigraphie artisanale — tote bag
  "photos-studiom",              // Photo Studio M
  "video-voyage",                // Vidéo Richou voyages
  "serigraphie-plat",            // Sérigraphie à plat
  "flyer-bons-plans",            // Flyer bon plan — Richou Voyages
  "pictogrammes",                // Pictogrammes voyage
];

const PROJECTS = [
  {
    id: "vermeille",
    title: "Vermeille",
    subtitle: "Identité de marque personnelle",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/brand-vermeille-cover.jpg",
    gallery: [
      "assets/img/brand-vermeille-logo.png",
      "assets/img/brand-vermeille-cover.jpg",
      "assets/img/brand-vermeille-detail-1.jpg"
    ],
    description: "Création de l'identité visuelle et de plusieurs supports de communication liés à ma marque personnelle, si je créais un jour un studio de graphisme. Logo réalisé sur Illustrator dans un esprit enfantin et moelleux afin de refléter le côté chaleureux et dynamique de mon studio.",
    tags: ["Logo", "Charte graphique", "Papeterie"]
  },
  {
    id: "festival",
    title: "Festival du cinéma espagnol",
    subtitle: "Identité visuelle — versions 1 et 2",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/festival-v1-cover.jpg",
    gallery: [
      "assets/img/festival-v1-cover.jpg",
      "assets/img/festival-v1-detail-1.jpg",
      "assets/img/festival-v1-detail-2.jpg",
      "assets/img/festival-v1-detail-3.jpg",
      "assets/img/festival-v2-cover.jpg",
      "assets/img/festival-v2-detail-1.jpg"
    ],
    description: "Création de l'identité visuelle d'un festival de cinéma espagnol, avec la contrainte de réaliser une typographie pour tout un alphabet, ainsi que différents supports de communication demandés pour l'événement : carton d'invitation, affiche, cartes de visite, page de site internet, logo et quelques goodies. J'ai réalisé deux versions aux identités visuelles proches mais reposant sur des concepts distincts. La première a été retenue parmi plusieurs propositions, puis déclinée sur l'ensemble des supports ; la seconde reprend la forme rectangulaire visible dans le viseur d'une caméra au moment du tournage.",
    tags: ["Typographie sur-mesure", "Logo", "Affiche", "Goodies"]
  },
  {
    id: "brochure-annuelle",
    title: "Brochure Annuelle",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-annuelle-cover.jpg",
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
    gallery: [
      "assets/img/cohezia-cover.png",
      "assets/img/cohezia-detail-1.png",
      "assets/img/cohezia-detail-2.png",
      "assets/img/cohezia-detail-3.png",
      "assets/img/cohezia-detail-4.png",
      "assets/img/cohezia-detail-5.png",
      "assets/img/cohezia-detail-6.jpg",
      "assets/img/cohezia-detail-7.jpg",
      "assets/img/cohezia-detail-8.jpg",
      "assets/img/cohezia-detail-9.jpg",
      "assets/img/cohezia-detail-10.jpg",
      { video: "assets/video/cohezia-animation-logos.mp4", poster: "assets/img/cohezia-animation-logos-poster.jpg" }
    ],
    description: "J'ai eu pour projet de concevoir les identités visuelles et la charte graphique de chacune des entités, en m'adaptant à l'identité existante de Richou Voyages, afin que l'on comprenne que ces marques font partie de l'entreprise. Ensuite, j'ai dû décliner différents supports en fonction des marques.",
    tags: ["Charte graphique", "Papeterie", "Déclinaisons de marque"]
  },
  {
    id: "cardgame",
    title: "Traits de caractère",
    subtitle: "Jeu de cartes pour enfants",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/cardgame-cover.jpg",
    gallery: [
      "assets/img/cardgame-cover.jpg",
      "assets/img/cardgame-detail-1.jpg",
      "assets/img/cardgame-detail-2.jpg",
      "assets/img/illustration-cartes.jpg"
    ],
    description: "Réalisation d'un jeu de cartes pour les enfants avec différents mini-jeux dans un même jeu. Création d'un logo, d'une boîte de jeu, des visuels des cartes « caractères », des cartes « lettres » et des cartes « calques », ainsi que d'un support pour les règles du jeu.",
    tags: ["Packaging", "Illustration", "Jeu"]
  },
  {
    id: "brochure-inspiration",
    title: "Brochure Inspiration",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-inspiration-cover.jpg",
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
    gallery: [
      "assets/img/pochette-cadeau-cover.jpg",
      "assets/img/pochette-cadeau-detail-1.jpg",
      "assets/img/pochette-cadeau-detail-2.jpg",
      "assets/img/pochette-cadeau-detail-3.jpg",
      "assets/img/pochette-cadeau-detail-4.jpg"
    ],
    description: "J'ai eu pour objectif de réaliser une pochette cadeau que l'on puisse remplir en fonction du client et du voyage offert. La contrainte était de faire quelque chose de moderne, qui rappelle le voyage et dans un format assez important pour que l'on puisse y glisser les documents liés au voyage en format A5. J'ai donc réalisé deux versions différentes.",
    tags: ["Packaging", "Illustration"]
  },
  {
    id: "gobelet",
    title: "Gobelet La Piautre",
    subtitle: "Festival de bière artisanale",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/gobelet-cover.jpg",
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
    gallery: [
      "assets/img/orelsan-cover.jpg",
      "assets/img/orelsan-detail-1.png",
      "assets/img/orelsan-detail-2.png"
    ],
    description: "Réalisation de l'identité graphique et de la campagne de communication de l'album Civilisation de l'artiste Orelsan. Ce projet était un projet fictif né d'une réinterprétation de la direction artistique de cet album à ma manière, inspiré de la technique de la risographie.",
    tags: ["Direction artistique", "Risographie"]
  },
  {
    id: "absolut",
    title: "Absolut Mythologik",
    subtitle: "Affiche de campagne",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/absolut-cover.jpg",
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
    subtitle: "Illustration imprimée",
    category: "print",
    categoryLabel: "Print et Édition",
    extraCategories: ["illustrations"],
    cover: "assets/img/serigraphie-plat-cover.jpg",
    gallery: [
      "assets/img/serigraphie-plat-cover.jpg",
      "assets/img/serigraphie-plat-detail-1.jpg"
    ],
    description: "Réalisation d'une illustration sur un thème choisi sur le logiciel Illustrator afin de l'imprimer dans une imprimerie que nous avons eu la chance de visiter, avec la technique d'impression de la sérigraphie.",
    tags: ["Sérigraphie", "Illustration"]
  },
  {
    id: "illustrations-voyage",
    title: "Illustrations de voyage",
    subtitle: "Sardaigne & Turquie",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-sardaigne.jpg",
    gallery: [
      "assets/img/illustration-sardaigne.jpg",
      "assets/img/illustration-turquie.jpg"
    ],
    description: "Réalisation d'une illustration de la Sardaigne et d'une illustration de la Turquie. Je devais réaliser différentes illustrations de paysages pour une campagne de publicité visant à promouvoir différentes destinations.",
    tags: ["Illustration vectorielle", "Campagne publicitaire", "Voyage"]
  },
  {
    id: "illustration-lisbonne",
    title: "Lisbonne",
    subtitle: "Illustration de voyage",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-lisbonne.png",
    gallery: [
      "assets/img/illustration-lisbonne.png"
    ],
    description: "Réalisation d'une illustration à partir d'une photo représentant un paysage de Lisbonne, construite autour des façades colorées et de leurs azulejos. Illustration réalisée sur Illustrator à l'aide de différents outils.",
    tags: ["Illustration vectorielle", "D'après photo", "Voyage"]
  },
  {
    id: "illustration-route",
    title: "Sur la route",
    subtitle: "Vernet-les-Bains & Lohéac",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-vernet.png",
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
    gallery: [
      "assets/img/illustration-venise.png"
    ],
    description: "Réalisation de l'illustration d'une ville à l'aide des outils 3D du logiciel Illustrator. J'ai créé une scène vénitienne en vue isométrique : un canal, son pont et ses façades pastel reconstitués comme une maquette.",
    tags: ["Illustration vectorielle", "Outils 3D Illustrator", "Isométrie"]
  },
  {
    id: "illustration-plage",
    title: "Bord de mer",
    subtitle: "Illustration d'après photo",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-plage.jpg",
    gallery: [
      "assets/img/illustration-plage.jpg"
    ],
    description: "Réalisation d'une illustration sur Illustrator, à partir d'une photo. Illustration représentant deux personnes face à un coucher de soleil sur la mer.",
    tags: ["Illustration vectorielle", "D'après photo"]
  },
  {
    id: "illustration-fenetre",
    title: "Vue sur Santorin",
    subtitle: "Illustration d'après photo",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-fenetre.jpg",
    gallery: [
      "assets/img/illustration-fenetre.jpg"
    ],
    description: "Réalisation d'une illustration à partir d'une photo représentant un paysage de la ville de Santorin, depuis une petite boutique d'artiste. Illustration réalisée sur Illustrator à l'aide des différents outils.",
    tags: ["Illustration vectorielle", "D'après photo"]
  },
  {
    id: "illustration-architecture",
    title: "Muralla Roja",
    subtitle: "Affiche sérigraphiée",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-architecture.jpg",
    gallery: [
      "assets/img/illustration-architecture.jpg"
    ],
    description: "Réalisation d'une affiche pour impression en sérigraphie sur un thème choisi. J'ai décidé de réaliser sur Illustrator un graphisme représentant un paysage qui m'intrigue beaucoup, en variant entre aplats et dégradés.",
    tags: ["Illustration vectorielle", "Sérigraphie", "Affiche"]
  },
  {
    id: "illustration-affiches-pop",
    title: "Affiches pop",
    subtitle: "Série décorative",
    category: "illustrations",
    categoryLabel: "Illustrations",
    cover: "assets/img/illustration-aperol.jpg",
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
    description: "Refonte de la charte graphique de l’entreprise JCG Créations, une entreprise de fabricant de van aménagés. Le but étant de revoir complètement le logo et le sytème graphique de l’entreprise pour qu’il soit plus moderne et qu’il représente mieux les valeurs de l’entreprise, à savoir le côté haut de gamme des produits, l’idée du road trip et de la liberté mais aussi l’autonomie. J’ai donc retravaillé le logo mais aussi les couleurs, les typographies, crée un motif et décliner plusieurs supports de communication avec cette nouvelle charte graphique (comptoir, panneau dibond, oriflamme, carte de visite, signature mail…)",
    tags: ["Refonte de logo", "Charte graphique", "Motif", "Supports"]
  },
  {
    id: "haricots",
    title: "Début des haricots",
    subtitle: "Identité visuelle — restaurant végan",
    category: "visuelles",
    categoryLabel: "Identités visuelles",
    cover: "assets/img/haricots-detail-6.jpg",
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
    cover: "assets/img/voyage-amerique-cover.jpg",
    gallery: [
      "assets/img/voyage-amerique-cover.jpg",
      "assets/img/voyage-amerique-detail-1.jpg",
      "assets/img/voyage-amerique-detail-2.jpg",
      "assets/img/voyage-amerique-detail-3.jpg"
    ],
    description: "Ce projet est un projet personnel qui m’a tenu à coeur de mettre en place. Je suis partis en voyage pendant trois mois en Amérique latine avec ma soeur et avait donc pour une idée de nous réaliser une identité graphique à décliner ensuite sur des tee-shirts et des tickets à coller sur les différents lieux que l’on allait découvrir.",
    tags: ["Logo", "Illustration", "Textile", "Stickers"]
  },
  {
    id: "brochure-thematique",
    title: "Brochure thématique",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-thematique-cover.jpg",
    gallery: [
      "assets/img/brochure-thematique-cover.jpg",
      "assets/img/brochure-thematique-detail-1.jpg",
      "assets/img/brochure-thematique-detail-2.jpg"
    ],
    description: "Réalisation d’une brochure pour présenter les différents voyages thématiques de Richou Voyages, à savoir les carnavals, les marchés de Noel, les nouvel an, les voyages neiges… Mise en page réalisée sur Indesign à l’aide du logiciel Easycatalogue",
    tags: ["Mise en page", "InDesign", "EasyCatalog"]
  },
  {
    id: "brochure-groupe",
    title: "Brochure groupe",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/brochure-groupe-cover.jpg",
    gallery: [
      "assets/img/brochure-groupe-cover.jpg",
      "assets/img/brochure-groupe-detail-1.jpg"
    ],
    description: "Dans le cadre de mon poste chez Richou Voyages, j’ai eu l’occasion de réaliser une petite plaquette pour présenter quelques voyages proposé à faire en groupe de voyage (amis, famille, entreprise…) Plaquette réalisée sur indesign.",
    tags: ["Plaquette", "Mise en page", "InDesign"]
  },
  {
    id: "split",
    title: "Dépliant Split",
    subtitle: "Brochure sur le film Split",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/split-cover.jpg",
    gallery: [
      "assets/img/split-cover.jpg",
      "assets/img/split-detail-1.jpg",
      "assets/img/split-detail-2.jpg",
      "assets/img/split-detail-3.jpg",
      "assets/img/split-detail-4.jpg",
      "assets/img/split-detail-5.jpg"
    ],
    description: "Réalisation d’une brochure sur le film Split avec la contrainte de réaliser plusieurs illustrations et photomontage à l’aide de Photoshop et de réutiliser l’aspect graphique du film tout le long de la brochure. La plaquette contient différent contenu : synopsis, résumé, témoignages, illustrations.",
    tags: ["Photomontage", "Illustration", "Photoshop", "Mise en page"]
  },
  {
    id: "flyer-bons-plans",
    title: "Flyer bon plan",
    subtitle: "Richou Voyages",
    category: "print",
    categoryLabel: "Print et Édition",
    cover: "assets/img/flyer-bons-plans-cover.jpg",
    gallery: [
      "assets/img/flyer-bons-plans-cover.jpg",
      "assets/img/flyer-bons-plans-detail-1.jpg"
    ],
    description: "Réalisation d’un flyer pour présenter à nos clients les différents bons plans proposer par Richou voyages et leur donner envie de passer par l’agence plutôt qu’une autre.",
    tags: ["Flyer", "Mise en page"]
  },
  {
    id: "motion-rse",
    title: "Motion design",
    subtitle: "Animation sur la RSE",
    category: "video",
    categoryLabel: "Motion et Vidéo",
    cover: "assets/img/motion-rse-poster.jpg",
    gallery: [
      { video: "assets/video/motion-rse.mp4", poster: "assets/img/motion-rse-poster.jpg" }
    ],
    description: "Réalisation d’une animation sur le thème de la RSE, le but était de mettre en avant ce principe de Responsabilité Sociétale des Entreprises en le présentant aux entreprises et en y intégrant une voix off et des animations claire et ludiques.",
    tags: ["Motion design", "Voix off", "Animation"]
  },
  {
    id: "animation-valise",
    title: "Animation Richou Voyages",
    subtitle: "Préparer son bagage cabine",
    category: "video",
    categoryLabel: "Motion et Vidéo",
    cover: "assets/img/animation-valise-poster.jpg",
    gallery: [
      { video: "assets/video/animation-valise.mp4", poster: "assets/img/animation-valise-poster.jpg" }
    ],
    description: "Réalisation d’une animation sur After Effects pour clarifier les différents équipements autorisés dans un bagage lors d’un voyage avec Richou voyages. Cela permet au client de savoir de manière ludique ce qu’ils ont ou non le droit d’emporter.",
    tags: ["Motion design", "After Effects"]
  },
  {
    id: "video-alternance",
    title: "Video Richou alternance",
    subtitle: "Campagnes d’alternance",
    category: "video",
    categoryLabel: "Motion et Vidéo",
    cover: "assets/img/alternance-richou-recrute-poster.jpg",
    gallery: [
      { video: "assets/video/alternance-richou-recrute.mp4", poster: "assets/img/alternance-richou-recrute-poster.jpg" },
      { video: "assets/video/alternance-journee-juliette.mp4", poster: "assets/img/alternance-journee-juliette-poster.jpg" },
      { video: "assets/video/alternance-temoignage-lorine.mp4", poster: "assets/img/alternance-temoignage-lorine-poster.jpg" },
      { video: "assets/video/alternance-prejuges.mp4", poster: "assets/img/alternance-prejuges-poster.jpg" },
      { video: "assets/video/alternance-3-avantages.mp4", poster: "assets/img/alternance-3-avantages-poster.jpg" }
    ],
    description: "Réalisation d’une campagne d’alternance chaque nouvelle année durant mon poste chez Richou voyages. Le but était de trouver un nouveau concept chaque année pour donner envie aux futurs alternants de nous rejoindre. Par exemple sous forme de témoignages des alternants, de préjugés vs réalité ou encore « une journée type en alternance chez Richou Voyages » Avec la réalisation d’un logo et d’une animation spéciale pour cette campagne « Richou à besoin de vous » sur le logiciel After Effects « Transmettre » était également la campagne d’alternance d’une autre année que j’ai réalisée.",
    tags: ["Tournage", "Montage", "After Effects", "Réseaux sociaux"]
  },
  {
    id: "video-voyage",
    title: "Vidéo Richou voyages",
    subtitle: "Destinations & témoignages",
    category: "video",
    categoryLabel: "Motion et Vidéo",
    cover: "assets/img/video-voyage-budapest-poster.jpg",
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

const TIMELINE = {
  formation: [
    { date: "Juillet 2020", title: "BAC STD2A", place: "Lycée Jeanne Delanoue, Cholet", desc: "Baccalauréat Sciences et Technologies du Design et des Arts Appliqués." },
    { date: "Juin 2022", title: "BTS Communication", place: "ESUPEC, Cholet", desc: "Obtention de mon BTS Communication." },
    { date: "Juillet 2023", title: "Bachelor Infographie", place: "Studio M — école de l'ESPL, Angers", desc: "Obtention de mon Bachelor Infographie." },
    { date: "Septembre 2024", title: "Bachelor Design Graphique", place: "EEGP, Angers", desc: "Obtention de mon Bachelor Design Graphique." }
  ],
  experience: [
    { date: "Juin 2018", title: "Graphiste (stage)", place: "Publi Impress, La Séguinière", desc: "Première expérience en agence de communication visuelle." },
    { date: "Juin 2019", title: "Graphiste textile (stage)", place: "ICODE, Saint-Macaire-en-Mauges", desc: "Création graphique appliquée au textile." },
    { date: "Mai — Juin 2021", title: "Assistante communication et graphisme (stage)", place: "Mraude, Trélazé", desc: "Support graphique et communication pour l'agence." },
    { date: "Février 2022", title: "Assistante commerciale (stage)", place: "Univision, Cholet", desc: "Immersion côté commercial, complémentaire à mon profil créatif." },
    { date: "2022 — 2024", title: "Graphiste et assistante communication (alternance)", place: "Richou Voyages, Cholet", desc: "Création de supports de communication et refonte d'identités visuelles pour le groupe." },
    { date: "2024 — 2025", title: "Graphiste et assistante communication", place: "Richou Voyages, Cholet", desc: "Poursuite de mon poste au sein de l'entreprise, en charge de la création graphique." }
  ]
};

const app01 = require.context('../assets/projects/app01-nasa', false, /\.(png|jpe?g|svg)$/);
const app02 = require.context('../assets/projects/app02-portfolio', false, /\.(png|jpe?g|svg)$/);
const app03 = require.context('../assets/projects/app03-patronos', false, /\.(png|jpe?g|svg)$/);
const app04 = require.context('../assets/projects/app04-music', false, /\.(png|jpe?g|svg)$/);


const game01 = require.context('../assets/projects/game01-bto', false, /\.(png|jpe?g|svg)$/);
const game02 = require.context('../assets/projects/game02-death', false, /\.(png|jpe?g|svg)$/);
const game03 = require.context('../assets/projects/game03-2king', false, /\.(png|jpe?g|svg)$/);

const importAll = (r) => {
  return r.keys().map((item) => r(item)); 
};

const app01Images = importAll(app01);
const app02Images = importAll(app02);
const app03Images = importAll(app03);
const app04Images = importAll(app04);

const game01Images = importAll(game01);
const game02Images = importAll(game02);
const game03Images = importAll(game03);

export const applications = [
  {
    title: "NASA SPACE APPS 2023 - GLOBAL WINNER",
    description: "My team, 'Greetings from Earth!', won the Galactic Impact Award on NASA Space Apps 2023. We develop an interactive website where users assume the role of an alien receiving a transmission from Earth. This transmission integrates graphics, 3D models, satellite images, and a quiz game I built in Unity.",
    technologies: "React, CSS, Unity, WebGL",
    imgUrls: app01Images,
    siteUrl: "https://www.spaceappschallenge.org/2023/find-a-team/greetings-from-earth1/?tab=project",
    repoUrl: "https://github.com/OceanGardens/oceangardens.github.io",
  },
  {
    title: "PATRONOS CAREER CENTER",
    description: "I volunteered in the development of the 'Centro de Carreiras' project by Fundo Patronos, an open-source platform that connects students with mentors to guide them through various career paths. The platform is now live and actively being used by real users to facilitate mentoring meetings and help students advance in their careers.",
    technologies: "React, Next, FastAPI, NodeJs, NocoDB",
    imgUrls: app03Images,
    siteUrl: "https://carreiras.patronos.org/",
    repoUrl: "https://github.com/Fundo-Patronos/centro-de-carreiras",
  },
  {
    title: "Self-Supervised Learning of Music Representations for Recommendation Systems",
    description: "Researched and implemented self-supervised learning using SimCLR and transformers to create music embeddings from spectrograms. Built a prototype recommendation system using latent space analysis of audio features.",
    technologies: "Python, SimCLR, Transformers, Audio Spectrograms, Contrastive Learning",
    imgUrls: app04Images,
    siteUrl: "https://TheDeas343.github.io",
    repoUrl: "https://github.com/TheDeas343/TheDeas343.github.io",
  },
  {
    title: "MY PORTFOLIO",
    description: "A responsive portfolio website showcasing my development projects and digital artwork. Features interactive galleries, smooth animations, and a clean modern design built with React components and custom CSS.",
    technologies: "React, CSS, HTML, JavaScript",
    imgUrls: app02Images,
    siteUrl: "https://www.researchgate.net/publication/386465252_Self-Supervised_Learning_of_Music_Representations_for_Recommendation_Systems#fullTextFileContent",
    repoUrl: "https://github.com/TheDeas343/MusicSSRL",
  }
];

export const games = [
  {
    title: "DOUBLE KING (in development)",
    description: "A Rogue-like chess game developed as my Final Graduation Project, featuring customizable rules and progressive difficulty scaling. Players can modify chess mechanics and face increasingly challenging opponents as they advance. Built while studying Game Design theory from 'Rules of Play: Game Design Fundamentals' to create an innovative take on traditional chess gameplay.",
    technologies: "Unity, C#, LibreSprite, FaityStockfish",
    imgUrls: game03Images,
    siteUrl: "https://github.com/TheDeas343/Double-King/tree/develop",
    repoUrl: "https://github.com/TheDeas343/Double-King/tree/develop",
  },
  {
    title: "BLOONS TOWER OFFENSE",
    description: "Game made for GMTK Game Jam 2023, featuring original pixel art created in just two days. Bloons Tower Offense is a Role Reversed mode of Bloons Tower Defense that you as a Balloon need break into the monkey base. For that, you have to collect helium gas to upgrade your life and speednes while dodging enemy dart attacks",
    technologies: "Unity, C#, LibreSprite",
    imgUrls: game01Images,
    siteUrl: "https://the-deas.itch.io/bloonstoweroffense",
    repoUrl: "https://github.com/TheDeas343/BloonsTowerOffense",
  },
  {
    title: "DEATH GOD",
    description: "Mini game created to be part of 'Gamutoware', a collection of short, simple, and creative open-source minigames developed by various contributors. I forked the repository, added my game, and after submitting a Merge Request, it was successfully merged into the project. Now, my game is officially part of Gamutoware, alongside many other unique minigames. The game is a macabre mini game where you control the god of death and take the lives of your followers.",
    technologies: "Godot, GDScript, LibreSprite",
    imgUrls: game02Images,
    siteUrl: "https://moraguma.itch.io/gamutoware",
    repoUrl: "https://github.com/moraguma/GamutoWare/tree/master/microjogos/2023S1/projeto-thedeas",
  },

];

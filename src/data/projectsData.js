import imgBase from "../assets/img/imgBase.jpg"; 


const app01 = require.context('../assets/projects/app01-nasa', false, /\.(png|jpe?g|svg)$/);
const app02 = require.context('../assets/projects/app02-portfolio', false, /\.(png|jpe?g|svg)$/);
const app03 = require.context('../assets/projects/app03-patronos', false, /\.(png|jpe?g|svg)$/);

const game01 = require.context('../assets/projects/game01-bto', false, /\.(png|jpe?g|svg)$/);
const game02 = require.context('../assets/projects/game02-death', false, /\.(png|jpe?g|svg)$/);
const game03 = require.context('../assets/projects/game03-2king', false, /\.(png|jpe?g|svg)$/);

const importAll = (r) => {
  return r.keys().map((item) => r(item)); 
};

const app01Images = importAll(app01);
const app02Images = importAll(app02);
const app03Images = importAll(app03);

const game01Images = importAll(game01);
const game02Images = importAll(game02);
const game03Images = importAll(game03);

export const applications = [
  {
    title: "CENTRO DE CARREIRAS (in development)",
    description: "I am volunteering in the development of the 'Centro de Carreiras' project by Fundo Patronos, which will be an open-source platform. The goal is to create a platform that will support students at the start of their careers. The platform will help students connect with mentors who can guide them through various career paths.",
    technologies: "React, Next, FastAPI, NodeJs, NocoDB",
    imgUrls: app03Images,
    siteUrl: "https://github.com/Fundo-Patronos/centro-de-carreiras",
    repoUrl: "https://github.com/Fundo-Patronos/centro-de-carreiras",
  },
  {
    title: "MY PORTFOLIO",
    description: "This portfolio is one of the projects I've built to showcase and organize my work, including development projects and artwork, all in one place.",
    technologies: "React, CSS, HTML, JavaScript",
    imgUrls: app02Images,
    siteUrl: "https://TheDeas343.github.io",
    repoUrl: "https://github.com/TheDeas343/TheDeas343.github.io",
  },
  {
    title: "NASA SPACE APPS 2023 - GLOBAL WINNER",
    description: "My team, 'Greetings from Earth!', won the Galactic Impact Award with this project. We develop an interactive website where users assume the role of an alien receiving a transmission from Earth. This transmission integrates graphics, 3D models, satellite images, and a quiz game",
    technologies: "React, CSS, Unity, WebGL",
    imgUrls: app01Images,
    siteUrl: "https://www.spaceappschallenge.org/2023/find-a-team/greetings-from-earth1/?tab=project",
    repoUrl: "https://github.com/OceanGardens/oceangardens.github.io",
  },
  
];

export const games = [
  {
    title: "DOUBLE KING (in development)",
    description: "I'm creating a modified Chess RPG where  playing chess isn't the hardest part. Players must not only play chess but also stay alive, use special rule-altering cards, and incorporate RPG-style dice mechanics. The game will feature a 1v1 multiplayer mode and a player vs bot mode ",
    technologies: "Unity, C#, LibreSprite",
    imgUrls: game03Images,
    siteUrl: "https://github.com/TheDeas343/Double-King",
    repoUrl: "https://github.com/TheDeas343/Double-King",
  },
  {
    title: "BLOONS TOWER OFFENSE",
    description: "Game made for GMTK Game Jam 2023, featuring original pixel art created in just two days. Bloons Tower Offense is a Role Reversed mode of Bloons Tower Defense that you as a Balloon need break into the monkey base. For that, you have to collect helium gas to upgrade your life and speednes while dodging enemy dart attacks",
    technologies: "Unity, C#, LibreSprite",
    imgUrls: game01Images,
    siteUrl: "https://the-deas.itch.io/bloonstoweroffense",
    repoUrl: "https://the-deas.itch.io/bloonstoweroffense",
  },
  {
    title: "DEATH GOD",
    description: "Mini game created to be part of 'Gamutoware', a collection of short, simple, and creative open-source minigames developed by various contributors. I forked the repository, added my game, and after submitting a Merge Request, it was successfully merged into the project. Now, my game is officially part of Gamutoware, alongside many other unique minigames. The game is a macabre mini game where you control the god of death and take the lives of your followers.",
    technologies: "Godot, GDScript, LibreSprite",
    imgUrls: game02Images,
    siteUrl: "https://the-deas.itch.io/bloonstoweroffense",
    repoUrl: "https://github.com/moraguma/GamutoWare/tree/master/microjogos/2023S1/projeto-thedeas",
  },

];

export const drawings = [
 
];

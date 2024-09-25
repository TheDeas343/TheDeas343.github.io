import imgBase from "../assets/img/imgBase.jpg"; 


const app01 = require.context('../assets/projects/app01-nasa', false, /\.(png|jpe?g|svg)$/);
const app02 = require.context('../assets/projects/app02-portfolio', false, /\.(png|jpe?g|svg)$/);

const importAll = (r) => {
  return r.keys().map((item) => r(item)); 
};

const app01Images = importAll(app01);
const app02Images = importAll(app02);

export const applications = [
  {
    title: "MY PORTFOLIO",
    description: "This portfolio is one of the projects I've built to showcase and organize my work, including development projects and artwork, all in one place.",
    technologies: "React, CSS, HTML, JavaScript",
    imgUrls: app02Images,
    siteUrl: "https://TheDeas343.github.io",
    repoUrl: "https://github.com/TheDeas343/personal-portifolio",
  },
  {
    title: "NASA SPACE APPS 2023 - GLOBAL WINNER",
    description:
      "My team Greetings from Earth! foi um dos vencedores do maior hackathon do mundo com um projeto interativo utilizando dados da NASA, com componentes de interação como globos, slides, música e jogo quiz",
    technologies: "React, CSS, Unity, WebGL",
    imgUrls: app01Images,
    siteUrl: "https://www.spaceappschallenge.org/2023/find-a-team/greetings-from-earth1/?tab=project",
    repoUrl: "https://github.com/OceanGardens/oceangardens.github.io",
  },
  
];

export const games = [
  {
    title: "Game 1",
    description: "Description for game 1",
    technologies: "Unity, C#",
    imgUrls: [imgBase],
    siteUrl: "https://www.google.com/search?q=game1",
    repoUrl: "https://www.google.com/search?q=game1",
  },
  // Adicione outros jogos aqui
];

export const drawings = [
  {
    title: "Drawing 1",
    description: "Description for drawing 1",
    technologies: "Pencil, Paper",
    imgUrls: [imgBase],
    siteUrl: "https://www.google.com/search?q=drawing1",
    repoUrl: "https://www.google.com/search?q=drawing1",
  },
  // Adicione outros desenhos aqui
];

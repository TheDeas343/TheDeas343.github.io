const drawingsContext = require.context('../assets/drawings', false, /\.(png|jpe?g|svg)$/);

const importAll = (r) => {
  return r.keys().map((item) => r(item)); 
};

const drawingsImages = importAll(drawingsContext);

const findImageByName = (imageName) => {
  const imagePath = require(`../assets/drawings/${imageName}`);
  return imagePath;
};

const findImageByNameWithoutExt = (imageName) => {
  const extensions = ['.png', '.jpg', '.jpeg', '.svg'];
  for (const ext of extensions) {
    try {
      const imagePath = require(`../assets/drawings/${imageName}${ext}`);
      return imagePath;
    } catch (e) {
    }
  }
  return null;
};

export const drawings = [
  {
    id: 0,
    image: findImageByNameWithoutExt("Pom-Pom"),
    category: "character-design",
    date: "2024-01-15"
  },
  
  {
    id: 1,
    image: findImageByNameWithoutExt("Conny-TPNL"),
    category: "fan-art",
    date: "2024-01-20"
  },
  
  {
    id: 2,
    image: findImageByNameWithoutExt("KIBIYA"),
    category: "character-design",
    date: "2024-01-25"
  },
  
  {
    id: 3,
    image: findImageByNameWithoutExt("Menina"),
    category: "portrait",
    date: "2024-02-01"
  },
  
  {
    id: 4,
    image: findImageByNameWithoutExt("Nyama"),
    category: "character-design",
    date: "2024-02-05"
  },
  
  {
    id: 5,
    image: findImageByNameWithoutExt("Nyama1"),
    category: "character-design",
    date: "2024-02-10"
  },
  
  {
    id: 6,
    image: findImageByNameWithoutExt("OK"),
    category: "illustration",
    date: "2024-02-15"
  },
  
  {
    id: 7,
    image: findImageByNameWithoutExt("Personagens"),
    category: "character-design",
    date: "2024-02-20"
  },
  
  {
    id: 8,
    image: findImageByNameWithoutExt("ZALIA_FINAL"),
    category: "character-design",
    date: "2024-02-25"
  },
  
  {
    id: 9,
    image: findImageByNameWithoutExt("14"),
    category: "digital-art",
    date: "2024-03-01"
  }
];

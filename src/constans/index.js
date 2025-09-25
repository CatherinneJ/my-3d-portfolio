const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
    {
        name: "About",
        link: "#about",
    },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 0, suffix: "+", label: "Years of Experience" },
  { value: 0, suffix: "+", label: "Satisfied Clients" },
  { value: 7, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
    {
        imgPath: "/images/logo2.png",
    },
];

const abilities = [
    {
        imgPath: "/images/venice.jpg",
        title: "Creative Thinker",
        desc: "Bringing fresh perspectives and creativity into projects.",
    },
    {
        imgPath: "/images/profile.jpg",
        title: "Quality Focus",
        desc: "Focused on delivering high-quality web solutions.",
  },
    {
        imgPath: "/images/milano.jpg",
        title: "Problem Solver",
        desc: "Creative problem-solving and original thinking.",
    },
];

const techStackImgs = [
  {
    name: "React\n Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Katarina is reliable and always tries to find a solution even for difficult tasks.",
    icon: "👨‍💻",
    logoPath: "/images/logo1.png",
    title: "Portfolio Website",
    date: "2025",
    responsibilities: [
        "Developed a personal portfolio featuring 3D elements and animations.",
        "Built with Vite + React for fast and optimized development.",
        "Integrated Three.js to create an engaging 3D visual experience.",
        "Showcased personal projects, skills, and certificates.",
    ],
  },


{
    review: "Katrina has a strong eye for detail and beautifully visually crafted projects.",
    icon: "👌",
    logoPath: "/images/logo2.png",
    title: "Sony Dashboard (Final Project)",
    date: "2025",
    responsibilities: [
        "Built an interactive dashboard for Sony data visualization.",
        "Implemented dynamic data rendering with JavaScript and API integration.",
        "Focused on clean UX and clear data presentation.",
    ],
  },
  {
    review: "Katarina brought creativity and she is a team player – actively collaborates and supports colleagues.",
    icon: "👩‍💻",
    logoPath: "/images/logo3.png",
    title: "Responsive Property Website",
    date: "2025",
    responsibilities: [
        "Designed and developed a responsive real estate website.",
        "Ensured cross-device compatibility for both mobile and desktop.",
        "Applied HTML, CSS, and Tailwind for a clean and modern layout.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/janikova/",
        imgPath: "/images/linkedin.png",
    },
    {
        name: "github",
        url: "https://github.com/CatherinneJ",
        imgPath: "/images/github.png",
    },

];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

import TrailergazeScreen from "../assets/img/trailergaze-scrnshot.svg";
import TrailergazeScreen2 from "../assets/img/trailergaze-scrnshot-2.svg";
import TrailergazeScreen3 from "../assets/img/trailergaze-scrnshot-3.svg";
import TrailergazeScreen4 from "../assets/img/trailergaze-scrnshot-4.svg";
import TrailergazeIcon from "../assets/img/trailergaze-i.svg";

import CollectionScreen from "../assets/img/collection-scrnshot.svg";
import CollectionScreen2 from "../assets/img/collection-scrnshot-2.svg";
import CollectionScreen3 from "../assets/img/collection-scrnshot-3.svg";
import CollectionScreen4 from "../assets/img/collection-scrnshot-4.svg";
import CollectionIcon from "../assets/img/collection-i.svg";

import TeslaScreen from "../assets/img/tesla-scrnshot.svg";
import TeslaScreen2 from "../assets/img/tesla-scrnshot-2.svg";
import TeslaScreen3 from "../assets/img/tesla-scrnshot-3.svg";
import TeslaScreen4 from "../assets/img/tesla-scrnshot-4.svg";
import TeslaIcon from "../assets/img/tesla-i.svg";

import QuizAppScreen from "../assets/img/quizapp-scrnshot.svg";
import QuizAppScreen2 from "../assets/img/quizapp-scrnshot-2.svg";
import QuizAppIcon from "../assets/img/quizapp-i.svg";

export const PROJECTS = [
  {
    id: 1,
    img: TrailergazeScreen,
    img2: TrailergazeScreen2,
    img3: TrailergazeScreen3,
    img4: TrailergazeScreen4,
    icon: TrailergazeIcon,
    title: "Trailergaze",
    type: "Movie API",
    desc: "Trailergaze showcases the most popular film trailers, using TMDB API, while giving users the freedom to search for their favourite film and add it to their watchlist. This project was developed using React.JS, Framer Motion, Tailwind CSS and Context API.",
    site: "https://trailergaze.netlify.app/",
    git: "https://github.com/TheHamzaDev/Trailergaze-MovieAPI",
  },
  {
    id: 2,
    img: CollectionScreen,
    img2: CollectionScreen2,
    img3: CollectionScreen3,
    img4: CollectionScreen4,
    icon: CollectionIcon,
    title: "Collection",
    type: "Ecommerce",
    desc: "Collection is an e-commerce website that  allows users to view products, gathered from the NIKE newsroom, and add it to their carts for checkout. This project was developed using React.JS, Framer Motion, Tailwind CSS and Context API.",
    site: "https://collection-ecommerce.netlify.app/",
    git: "https://github.com/TheHamzaDev/Collection-Ecommerce",
  },
  {
    id: 3,
    img: TeslaScreen,
    img2: TeslaScreen2,
    img3: TeslaScreen3,
    img4: TeslaScreen4,
    icon: TeslaIcon,
    title: "Tesla Clone",
    type: "Clone",
    desc: "This project is a clone of the current Tesla website with each link redirecting the user to the corresponding page and assets being taken from the official Tesla website, created using HTML, CSS and JavaScript.",
    site: "https://web-teslaclone.netlify.app/",
    git: "https://github.com/TheHamzaDev/Tesla-Clone",
  },
  {
    id: 4,
    img: QuizAppScreen,
    img2: QuizAppScreen2,
    icon: QuizAppIcon,
    title: "Quiz App",
    type: "TypeScript App",
    desc: "A simple quiz application created using React.JS, TypeScript and styled components. Users can test their general knowledge based on their chosen difficulty, fetching the questions and answers from the OpenTDB.",
    site: "https://quizzatron-app.netlify.app/",
    git: "https://github.com/TheHamzaDev/Quiz-App",
  },
];

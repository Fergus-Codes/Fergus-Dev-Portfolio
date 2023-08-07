

import React from "react";
import Project from "./project";

const projects = [
  {
    id: 0,
    title: "Social Network API",
    languages: "html, css, js, handlebars",
    image: "./img/Social-Network-API.png",
    description:
      "This app forms the foundation of a full-stack social network using MongoDB for the database, Express.js for routing, and Mongoose ODM.",
    repo: "https://github.com/Fergus-Codes/Social-Network-API",
  },
  {
    id: 1,
    title: "PWA Text Editor",
    languages: "html, css, js, handlebars",
    image: "/img/PWATXTEDITOR.png",
    description:
      " A simple text editor that allows you to save your work to your local machine, and then access it again later.",
    repo: "https://github.com/Fergus-Codes/PWA-Text-Editor",
  },
  {
    id: 2,
    title: "AI-Doctor - Artificial Intelligence Symptom Checker",
    languages: "html, css, js, handlebars",
    image: "/img/AIdoc.png",
    description:
      "The AI-Doctor is a command line interface program that acts as an intelligent symptom checker. It allows users to input their symptoms and receive potential illness suggestions, along with descriptions and treatment advice.",
    repo: "https://github.com/Fergus-Codes/AI-Doctor",
  },
  {
    id: 3,
    title: "Employee Tracker SQL",
    languages: "html, css, js",
    image: "/img/EtrackerSQL.png",
    description:
      "This simple employee tracker app was designed to allow employers to view, add and edit data on their database. It is all done through the terminal, so no browser is required to run this app. ",
    repo: "https://github.com/Fergus-Codes/Employee-Tracker-SQL",
  },
  {
    id: 4,
    title: "Note Taker Using Express.JS",
    languages: "html, css, js",
    image: "/img/notetaker.png",
    description:
      "This note taker application was built using express & node Javascript, Javascript, css and html. It has been deployed on heroku so that it is easy to use. THis app allows the user to create, store and delete notes. ",
    repo: "https://github.com/Fergus-Codes/Note-Taker-Express.js",
  },
  {
    id: 5,
    title: "OOP SVG Logo Maker",
    languages: "html, css",
    image: "/img/PLS-SVG-Example.png",
    description:
      "This application was created to help developers create simple Logos for projects. It allows developers to make simple Logos without having to pay a graphic designer to create one. ",
    repo: "https://github.com/Fergus-Codes/OOP-SVG-Logo-Maker",
  },
  {
    id: 6,
    title: "Server-Side APIs: Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/WeatherDashboard.png",
    description:
      "A simple weather dashboard that allows you to search for a city and see the current weather and a 5 day forecast.",
    repo: "https://github.com/Fergus-Codes/Server-Side-API-Weather-Dashboard",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;

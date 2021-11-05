import { ProjectExperience } from "@/types/types";

const allProjects: ProjectExperience[] = [
  {
    name: "Programming Language and Interpreter",
    links: {
      github: "https://github.com/Johan-Liebert1/interpreter"
    },
    description: [
      "Built a programming language and an interpreter in Golang",
      "Implemented variable and function declarations, conditional statements, loops, operator precedance, type checking and error handling",
      "Coded Lexical Analyzer, Parser, Symbol Table, Interpreter and implemented Call Stack and Activation Records",
      "Used Abstract Syntax Trees and Recursive Descent Parsing for interpretation",
      "Technologies - Golang"
    ]
  },

  {
    name: "Algorithms Visualizer",
    links: {
      live: "https://algos-viz.netlify.app/",
      github: "https://github.com/Johan-Liebert1/Algorithms-Visualizer"
    },
    description: [
      "Implemented 8 Sorting, 4 Path Finding, and 4 Maze Generating Algorithms and visualized them using VueJS",
      "Implemented algorithms related to Data Structures such as Heaps, Binary Trees and Linked Lists and visualized them using PaperJS",
      "Allowed control over the speed of the visualizations",
      "Technologies - TypeScript, Vue, PaperJS"
    ]
  },
  {
    name: "Online Multiplayer Games Website",
    links: {
      live: "http://ec2-13-234-177-50.ap-south-1.compute.amazonaws.com/",
      github: "https://github.com/Johan-Liebert1/Multiplayer-Games"
    },
    description: [
      "Designed and deployed a full stack web app that allows users to play games (Chess, Checkers & Sketch.io) with others over the internet",
      "Added functionality to create different rooms to hold multiple games concurrently. Also added the ability to chat in game.",
      "Designed a REST API that allows users to save and analyze their games",
      "Created S3 buckets to store profile picture, and used PostgreSQL database",
      "Used docker to containerize the application and configured AWS EC2 instance to host the server using nginx.",
      "Technologies - TypeScript, FastAPI, React, PostgreSQL, AWS, Docker, Nginx"
    ]
  },
  {
    name: "COVID-19 Dashboard",
    links: {
      live: "https://covid19-data-viz.herokuapp.com/",
      github: "https://github.com/Johan-Liebert1/Covid-19_DataAnalysis"
    },
    description: [
      "Scraped data from the internet; cleaned and organized the data, and created python scripts to plot and analyze COVID-19 pandemic data.",
      "Used Flask to develop an API for the visualizations created through Pandas and Matplotlib. Used ReactJS for the frontend.",
      "Technologies - Pandas, GeoPandas, Numpy, Matplotlib, Flask, ReactJS"
    ]
  }
];

export default allProjects;

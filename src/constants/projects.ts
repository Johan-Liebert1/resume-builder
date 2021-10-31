import { ProjectExperience } from "@/types/types";

const allProjects: ProjectExperience[] = [
  {
    name: "Online Multiplayer Games Website",
    links: {
      live: "http://ec2-13-234-177-50.ap-south-1.compute.amazonaws.com/",
      github: "https://github.com/Johan-Liebert1/Multiplayer-Games"
    },
    description: [
      "Designed and deployed a full stack web app that allows users to play games Chess, Checkers & Sketch.io) with their friends over the internet",
      "Added functionality to create different rooms to hold multiple games concurrently. Also added the ability to chat in game.",
      "Designed a REST API that allows users to save and analyze their games",
      "Created S3 buckets to store profile picture, and used PostgreSQL database",
      "Used docker to containerize the application and configured AWS EC2 instance to host the server using nginx.",
      "Technologies - TypeScript, FastAPI, React, PostgreSQL, AWS, Docker"
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
  }
];

export default allProjects;

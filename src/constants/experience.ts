import { ProjectExperience } from "@/types/types";

const allExperiences: ProjectExperience[] = [
  {
    name: "Software Developer Intern",
    company: "Neverinstall",
    startDate: "09/2021",
    endDate: "Ongoing",
    description: [
      "Integrated end to end subscription based payment system using stripe",
      "Built custom Kubernetes scheduler plugin to give preference to subscribed users",
      "Worked with distribued systems, and implemented SQL triggers along with Web Sockets and Redis (as a pub-sub mechanism) as an alternative to HTTP polling",
      "Analyzed and Optimized SQL queries which reduced page load times by 4 seconds",
      "Integrated Web Push Notifications and updates that helped in increasing user engagement",
      "Technologies - Go, NextJS, PostgreSQL, GraphQL, AWS, Azure, Kubernetes, Docker, Microservices, Stripe, Redis, Firebase"
    ]
  },
  {
    name: "Web Developer Intern",
    company: "AI Monk",
    startDate: "03/2021",
    endDate: "07/2021",
    description: [
      `Worked on a full stack project that allows creation of annotations on images for use in training Machine Learning Models`,
      "Worked with vector graphics using PaperJS and HTML Canvas",
      "Implemented Undo and Redo functionality throughout the product",
      `Implemented tree data structure, to create, read, update and delete tags on annotations.`,
      "Added ReCaptcha verification on Login and Register forms",
      "Technologies - VueJS, Flask, MongoDB, PaperJS"
    ]
  },
  {
    name: "Freelance Developer",
    company: "Fiverr",
    startDate: "09/2020",
    endDate: "09/2021",
    description: [
      "Built and deployed chess training website for mentally handicapped individuals.",
      "Developed games in Python and JavaScript",
      "Worked closely with clients to ensure project quality",
      "Maintained a 5star rating on Fiverr for 6 months"
    ]
  }
];

export default allExperiences;

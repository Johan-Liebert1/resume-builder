import { ProjectExperience } from "@/types/types";

const allExperiences: ProjectExperience[] = [
  {
    name: "Web Developer Intern",
    company: "AI Monk",
    startDate: "03/2021",
    endDate: "07/2021",
    description: [
      `Worked on a full stack project - Neuralmarker - that allows creation of annotations on images for use in training Machine Learning Models`,
      "Worked with vector graphics using PaperJS and HTML Canvas",
      "Implemented Undo and Redo functionality throughout the product",
      `Implemented tree data structure, to create, read, update and delete tags on annotations. Modified API end point to facilitate proper storage of tags.`,
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
      "Used Pandas and Matplotlib to analyze efficiency of various algorithms",
      "Worked closely with clients to ensure project quality",
      "Maintained a 5star rating on Fiverr for 6 months"
    ]
  }
];

export default allExperiences;

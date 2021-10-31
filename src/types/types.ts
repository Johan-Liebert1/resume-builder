export type ProjectExperience = {
  name: string;
  startDate?: string;
  endDate?: string;
  links?: {
    live?: string;
    github?: string;
  };
  description: string[];
};

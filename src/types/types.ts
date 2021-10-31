export type ProjectExperience = {
  name: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  links?: {
    live?: string;
    github?: string;
  };
  description: string[];
};

export type SkillsType = {
  type: string;
  skills: string[];
};

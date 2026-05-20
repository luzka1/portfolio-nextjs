export interface IProjectsContext {
    projects: ProjectProps[];
  }
  
  export interface ProjectProps {
    id: string;
    img: Parse.File;
    name: string;
    tiny_description: string;
    full_description?: string;
    proj_link?: string;
    git_link?:string;
    techs?: string[];
    tiny_desc_en?: string;
    full_desc_en?: string;
  }
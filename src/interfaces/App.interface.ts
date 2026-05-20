export interface IAppConfigContext {
  dataConfig?: IAppConfig;
}

export interface IAppConfig{
  id: string;
  whatsapp_number: string;
  whatsapp_text: string;
  email: string;
}

export interface ITextsContext {
  data: IData;
  setData: (value: string) => void;
}

export interface IData {
  lang: string;
  header: IHeader;
  banner: IBanner;
  section1: ISection;
  section2: ISection;
  section3: ISection;
  section4: ISection;
  footer: IFooter;
  projectsPage: IPageProjects;
  projectPage: IPageProject;
}

export interface IHeader {
  texts: ITextsHeader[];
}

export interface ITextsHeader {
  name: string;
  linkTo: string;
}

export interface IBanner {
  subtitle: string[];
  buttons: string[];
  scroll: string;
}

export interface ISection {
  title?: string;
  subtitle?: string;
  text?: string;
  email?: string;
  subject?: string;
  message?: string;
  buttons?: string[] | string;
  button?: string;
  itemsExp?: IItemExperience[];
}

export interface IItemExperience {
  id: number;
  description: string;
}


export interface IFooter {
  texts: ITextsHeader[];
  rights: string;
}

export interface IPageProjects {
  title: string;
  subtitle: string;
}

export interface IPageProject {
  title: string;
  subtitle: string;
}
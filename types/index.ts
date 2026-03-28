export type Next_Page_Url = string;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    tagline: string;
    year: number;
    description: string;
    bullets: string[];
    role: string;
    techStack: string[];
    thumbnail: string;
    longThumbnail: string;
    images: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
}

export interface IExperience {
    title: string;
    company: string;
    companyUrl: string;
    duration: string;
    bullets: string[];
}

export interface IEducation {
    degree: string;
    institution: string;
    year?: string;
}

export type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
    alt?: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export type CrewMember = {
  name: string;
  images: {
    png: string;
    webp: string;
    alt?: string;
  };
  role: string;
  bio: string;
};

export type Technology = {
  name: string;
  images: {
    mobile: string 
    tablet: string
    desktop: string
    portrait: string;
    landscape: string;
  };
  description: string;
};

export type spaceTypes = {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
};

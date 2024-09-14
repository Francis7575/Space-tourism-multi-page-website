type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
    alt: string;
  };
  description: string;
  distance: string;
  travel: string;
};

type CrewMember = {
  name: string;
  images: {
    png: string;
    webp: string;
    alt: string;
  };
  role: string;
  bio: string;
};

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
    alt: string;
  };
  description: string;
};

export type SpaceData = {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
};
import { ContextModel } from './context.model';

export class Me {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: { icon: string; url: string };
  twitter: { icon: string; url: string };
  instagram: { icon: string; url: string };
  github: { icon: string; url: string };
  location: {
    city: string;
    country: string;
    coordinates: { lat: number; lng: number };
  };
  companies: { name: string; url: string; title: string }[];
  languages: { lang: string; skillLvl: string }[];
  illustratedPic: string;
  livePic: string;
  freelanceStatus: string;
  tagline: string;
  beliefs: string;
  goals: string;
  story: string;
  designContext: ContextModel;
  codeContext: ContextModel;
  createContext: ContextModel;
}

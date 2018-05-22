import { ContextModel } from './context.model';
import { SocialMediaLink } from './social-media-link.model';

export class Me {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
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
  linkedin: SocialMediaLink;
  twitter: SocialMediaLink;
  instagram: SocialMediaLink;
  github: SocialMediaLink;
  designContext: ContextModel;
  codeContext: ContextModel;
  createContext: ContextModel;
}

import { ContextModel } from './context.model';
import { SocialMediaLink } from './social-media-link.model';

export class Me {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  blog: string;
  location: {
    city: string;
    country: string;
    coordinates: { lat: string; lng: string };
  };
  companies: { name: string; url: string; title: string }[];
  languages: { lang: string; skillLvl: string }[];
  umbracoCert: string;
  devTo: string;
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
}

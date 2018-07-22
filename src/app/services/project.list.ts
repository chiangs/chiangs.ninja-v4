import { Project } from '../models/project.model';

const chiangsNinja = new Project(`Chiangs.Ninja`);
chiangsNinja.year = 2018;
chiangsNinja.summary = `Personal Portfolio`;
chiangsNinja.technology = [
  `Progressive Web App (PWA)`,
  `Angular 6`,
  `Netlify`,
  `TypeScript`,
  `HTML5`,
  `CSS3 / SASS`
];
chiangsNinja.roles = [`Designer`, `Developer`];
chiangsNinja.url = `www.chiangs.ninja`;
chiangsNinja.contributions = ``;
chiangsNinja.repoUrl = ``;
chiangsNinja.projectImageUrl = `../../assets/projects/chiangs.jpg`;
chiangsNinja.designImageUrl = `../../assets/projects/chiangs.jpg`;

const antoniaDesigns = new Project(`Antonia-Designs`);
antoniaDesigns.year = 2018;
antoniaDesigns.summary = `Local Artist Portfolio`;
antoniaDesigns.technology = [
  `Angular 6`,
  `Netlify`,
  `TypeScript`,
  `HTML5`,
  `CSS3 / SASS`
];
antoniaDesigns.roles = [`Designer`, `Developer`];
antoniaDesigns.contributions = `Simple local artist's gallery to show of their crafts, built with CSS grid and Flexbox to responsively build a mosaic-like grid that adjusts to the window size. Continuously integrated and deployed view GitHub and Netlify.`;
antoniaDesigns.url = `www.antonia-designs.com`;
antoniaDesigns.repoUrl = ``;
antoniaDesigns.projectImageUrl = `../../assets/projects/chiangs.jpg`;
antoniaDesigns.designImageUrl = `../../assets/projects/chiangs.jpg`;

const ot = new Project(`OsloTaxi`);
ot.year = 2018;
ot.summary = `Taxi ordering platform`;
ot.technology = [
  `Angular 4`,
  `TypeScript`,
  `HTML5`,
  `CSS3 / SASS`,
  `Azure`,
  `C# .NET`,
  `Umbraco`
];
ot.roles = [`Developer`];
ot.contributions = `Front-end feature development and API consumption. Back-end development of Umbraco as headless CMS.`;
ot.repoUrl = ``;
ot.projectImageUrl = `../../assets/projects/chiangs.jpg`;
ot.designImageUrl = `../../assets/projects/chiangs.jpg`;

const tf = new Project(`TaxiFix`);
tf.year = 2018;
tf.summary = `Consolidated taxi ordering platform and accont management portal`;
tf.technology = [
  `Angular 6`,
  `TypeScript`,
  `HTML5`,
  `CSS3 / SASS`,
  `Azure`,
  `C# .NET`,
  `Umbraco`
];
tf.roles = [`Developer`];
tf.contributions = `Front-end complete refresh, refactor, and feature development, API consumption. Back-end development of Umbraco as headless CMS.`;
tf.repoUrl = ``;
tf.projectImageUrl = `../../assets/projects/chiangs.jpg`;
tf.designImageUrl = `../../assets/projects/chiangs.jpg`;

const wns = new Project(`Wendy's Newborn Services`);
wns.year = 2018;
wns.summary = `Static site for newborn care services provider`;
wns.technology = [`Angular 6`, `TypeScript`, `HTML5`, `CSS3 / SASS`, `Netlify`];
wns.roles = [`Designer`, `Developer`];
wns.contributions = `Logo and front-end design. Development of front-end, depoyment and continuous integration`;
wns.repoUrl = ``;
wns.projectImageUrl = `../../assets/projects/chiangs.jpg`;
wns.designImageUrl = `../../assets/projects/chiangs.jpg`;

const clib = new Project('Angular Component Library - Open Source');
const ch = new Project(`Code & Hammer Design`);
const tgh = new Project('TheGuest.House');
const nettop = new Project(`Nettopp`);
const parkr = new Project(`ParkR`);

export const Projects = [chiangsNinja, antoniaDesigns, ot, tf, wns, clib];

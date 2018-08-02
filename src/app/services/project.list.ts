import { Project } from '../models/project.model';
const des = `Designer`;
const dev = `Developer`;
const pwa = `Progressive Web App (PWA)`;
const ng6 = `Angular 6`;
const ng5 = `Angular 5`;
const ng4 = `Angular 4`;
const angularJS = `Angular JS`;
const react = `React`;
const rxjs = `RxJs`;
const vscode = `Visual Studio Code`;
const css = `CSS3 / SASS`;
const html = `HTML5`;
const js = `JavaScript`;
const ts = `TypeScript`;
const unitTests = `Unit tests`;
const flexbox = `Flexbox`;
const grid = `CSS Grid`;
const netlify = `Netlify`;
const azure = `Azure Web Services`;
const aws = `Amazon Web Services (AWS)`;
const c = `C# .NET`;
const tfs = `Team Foundation Server (TFS)`;
const vs = `Visual Studio`;
const umbraco = `Umbraco CMS`;
const fe = `Front-end`;
const be = `Back-end`;
const git = `Git / GitHub`;
const oss = `Open Source`;
const pipes = `Pipes`;
const svc = `Services`;
const language = `Multi-Language / Translated`;
const figma = `Figma`;
const gMaps = `Google Maps APIs`;
const logo = `logo`;

// chiangs.ninja //
const chiangsNinja = new Project(`Chiangs.Ninja`);
chiangsNinja.year = 2018;
chiangsNinja.summary = `Personal Portfolio`;
chiangsNinja.technology = [
  pwa,
  ng6,
  vscode,
  css,
  html,
  js,
  ts,
  unitTests,
  flexbox,
  grid,
  netlify,
  git,
  fe,
  pipes,
  oss,
  svc,
  language,
  figma
];
chiangsNinja.roles = [des, dev];
chiangsNinja.url = `www.chiangs.ninja`;
chiangsNinja.contributions = `Complete design, development, and deployment`;
chiangsNinja.projectImageUrl = `../../assets/projects/chiangs.jpg`;
chiangsNinja.designImageUrl = `../../assets/projects/chiangs.jpg`;

// antonia-designs //
const antoniaDesigns = new Project(`Antonia-Designs`);
antoniaDesigns.year = 2018;
antoniaDesigns.summary = `Local Artist Portfolio`;
antoniaDesigns.technology = [
  ng6,
  netlify,
  js,
  ts,
  html,
  css,
  grid,
  flexbox,
  fe,
  git,
  language,
  figma,
  vscode
];
antoniaDesigns.roles = [des, dev];
antoniaDesigns.contributions = `Simple local artist's gallery to show of their crafts, built with CSS grid and Flexbox to responsively build a mosaic-like grid that adjusts to the window size. Continuously integrated and deployed view GitHub and Netlify.`;
antoniaDesigns.url = `www.antonia-designs.com`;
antoniaDesigns.projectImageUrl = `../../assets/projects/antoniadesigns.png`;
antoniaDesigns.designImageUrl = `../../assets/projects/antoniadesigns.png`;

// ot //
const ot = new Project(`OsloTaxi`);
ot.year = 2018;
ot.summary = `Taxi ordering platform`;
ot.technology = [
  ng4,
  ts,
  js,
  html,
  css,
  fe,
  be,
  git,
  azure,
  c,
  umbraco,
  tfs,
  vscode,
  vs,
  svc,
  rxjs,
  language,
  gMaps
];
ot.roles = [dev];
ot.contributions = `Front-end feature development and API consumption. Back-end development of Umbraco as headless CMS.`;
ot.url = `www.oslotaxi.no`;
ot.projectImageUrl = `../../assets/projects/chiangs.jpg`;
ot.designImageUrl = `../../assets/projects/chiangs.jpg`;

// tf //
const tf = new Project(`TaxiFix`);
tf.year = 2018;
tf.summary = `Consolidated taxi ordering platform and accont management portal`;
tf.technology = [
  ng5,
  ts,
  js,
  html,
  css,
  fe,
  be,
  azure,
  c,
  umbraco,
  rxjs,
  git,
  vscode,
  vs,
  language,
  gMaps
];
tf.roles = [dev];
tf.contributions = `Front-end complete refresh, refactor, and feature development, API consumption. Back-end development of Umbraco as headless CMS.`;
tf.url = `www.antonia-designs.com`;
tf.projectImageUrl = `../../assets/projects/chiangs.jpg`;
tf.designImageUrl = `../../assets/projects/chiangs.jpg`;

// clib //
const clib = new Project('Angular Component Library - Open Source');
clib.year = 2018;
clib.summary = `An open source Angular Component library`;
clib.technology = [
  ng6,
  ng5,
  ts,
  js,
  fe,
  vscode,
  git,
  oss,
  html,
  css,
  flexbox,
  grid
];
clib.roles = [dev];
clib.contributions = `Reusable and flexiblbe components, library admin`;
clib.repoUrl = ``;
clib.projectImageUrl = ``;

// sysres //
const sysres = new Project('Systematic-Resumes');
sysres.year = 2017;
sysres.summary = `Commercial site for resumé / CV writing service`;
sysres.technology = [js, aws, fe, vscode, git, html, css];
sysres.roles = [dev];
sysres.contributions = `Complete design, develop, deployment and maintenance`;
sysres.url = `www.systematic-resumes.com`;
sysres.projectImageUrl = `./../assets/projects/sysres.png`;

// wns //
const wns = new Project(`Wendy's Newborn Services`);
wns.year = 2018;
wns.summary = `Static site for newborn care services provider`;
wns.technology = [figma, logo];
wns.roles = [des, dev];
wns.contributions = `Logo and front-end design. Development of front-end, depoyment and continuous integration`;
wns.projectImageUrl = `../../assets/projects/wns.png`;
wns.designImageUrl = `../../assets/projects/wns.png`;

// code & hammer //
const ch = new Project(`Code & Hammer Design`);
const tgh = new Project('TheGuest.House');
const nettop = new Project(`Nettopp`);
const parkr = new Project(`ParkR`);
const mamafit = new Project(`MamaFitness.app`);
const taco = new Project(`TacoTruck.app`);

// publish projects to display
export const Projects = [
  chiangsNinja,
  antoniaDesigns,
  ot,
  tf,
  wns,
  clib,
  sysres
];

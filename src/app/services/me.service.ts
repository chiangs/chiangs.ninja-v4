import { Injectable } from '@angular/core';
import { Me } from '../models/me.model';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  private me = new Me();

  constructor() {
    this.me.firstName = 'stephen';
    this.me.middleName = 'e.';
    this.me.lastName = 'chiang';
    this.me.email = 'stephen.e.chiang@gmail.com';
    this.me.blog = 'https://dev.to/chiangs';
    this.me.linkedin = {
      iconD: '../../assets/images/icons/linkedin-blk.svg',
      iconL: '../../assets/images/icons/linkedin-wht.svg',
      url: 'https://www.linkedin.com/in/chiangs'
    };
    this.me.twitter = {
      iconD: '../../assets/images/icons/twitter-blk.svg',
      iconL: '../../assets/images/icons/twitter-wht.svg',
      url: 'https://www.twitter.com/chiangse'
    };
    this.me.instagram = {
      iconD: '../../assets/images/icons/instagram-blk.svg',
      iconL: '../../assets/images/icons/instagram-wht.svg',
      url: 'https://www.instagram.com/chiangse'
    };
    this.me.github = {
      iconD: '../../assets/images/icons/github-blk.svg',
      iconL: '../../assets/images/icons/github-wht.svg',
      url: 'https://www.github.com/chiangs'
    };
    this.me.location = {
      city: 'stavanger',
      country: 'norway',
      coordinates: { lat: `58.97˚`, lng: `5.73˚` }
    };
    this.me.companies = [
      {
        name: 'code & hammer',
        url: 'codehammer.design',
        title: 'founder & developer'
      },
      { name: 'bouvet', url: 'bouvet.no', title: 'consultant' }
    ];
    this.me.languages = [
      { lang: 'english', skillLvl: 'C2 / C2' },
      { lang: 'dansk', skillLvl: 'B1 / B2' },
      { lang: 'norsk', skillLvl: 'A2 / B2' },
      { lang: '中文', skillLvl: 'A1 / B1 | ' }
    ];
    this.me.illustratedPic = 'string';
    this.me.livePic = 'string';
    this.me.freelanceStatus = 'string';
    this.me.tagline = 'Full-stack developer & designer';
    this.me.beliefs = 'string';
    this.me.goals = 'string';
    this.me.story = 'string';
  }

  getMe(): Me {
    return this.me;
  }
}

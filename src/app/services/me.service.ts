import { Injectable } from '@angular/core';
import { Me } from '../models/me.model';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  private me = new Me();

  // The only place information needs to be populated and updated.
  // Use lowercase to allow for more styling flexibility in css.
  constructor() {
    this.me.firstName = 'stephen';
    this.me.middleName = 'e.';
    this.me.lastName = 'chiang';
    this.me.email = 'stephen.e.chiang@gmail.com';
    this.me.phone = '+47 4122 3902';
    this.me.linkedin = {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/chiangs'
    };
    this.me.twitter = {
      icon: 'twitter',
      url: 'https://www.twitter.com/chiangse'
    };
    this.me.instagram = {
      icon: 'instagram',
      url: 'https://www.instagram.com/chiangse'
    };
    this.me.github = { icon: 'github', url: 'https://www.github.com/chiangs' };
    this.me.location = {
      city: 'stavanger',
      country: 'norway',
      coordinates: { lat: 58.97, lng: 5.731 }
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
    this.me.welcome = 'string';
    this.me.beliefs = 'string';
    this.me.goals = 'string';
    this.me.story = 'string';
  }

  getMe(): Me {
    return this.me;
  }
}

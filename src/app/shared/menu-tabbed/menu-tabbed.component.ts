import { Component, OnInit } from '@angular/core';
import { DEFAULT_SCROLL_TIME } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-menu-tabbed',
  templateUrl: './menu-tabbed.component.html',
  styleUrls: ['./menu-tabbed.component.scss']
})
export class MenuTabbedComponent implements OnInit {
  centralTab: {
    label: string;
    centrals: { icon: string; centralName: string }[];
  };
  carOptionsTab: {
    label: string;
    notSupportedInstructions: string;
    options: { icon: string; option: string; isSupported: boolean }[];
  };
  pickUpInfoTab: {
    label: string;
    userInstructions1: string;
    userInstructions2: string;
  };
  paymentOptionTab: {
    label: string;
    userInstructions1: string;
    options: { icon: string; option: string }[];
  };
  selectedTab = 0;

  constructor() {
    this.centralTab = {
      label: `taxisentral`,
      centrals: [
        { icon: `../../../assets/images/temp/taxi.svg`, centralName: `kurs` },
        {
          icon: `../../../assets/images/temp/taxi.svg`,
          centralName: `stavanger`
        },
        { icon: `../../../assets/images/temp/taxi.svg`, centralName: `oslo` }
      ]
    };
    this.carOptionsTab = {
      label: `tillegsvalg`,
      notSupportedInstructions: `For bestilling av utilgjengelige biltyper, ring`,
      options: [
        { icon: `iconPath`, option: `normal`, isSupported: true },
        { icon: `iconPath`, option: `stasjonsvogn`, isSupported: true },
        { icon: `iconPath`, option: `astma/allergi`, isSupported: true },
        { icon: `iconPath`, option: `rullestol`, isSupported: false },
        { icon: `iconPath`, option: `barnesete`, isSupported: true },
        { icon: `iconPath`, option: `maxitaxi`, isSupported: false }
      ]
    };
    this.pickUpInfoTab = {
      label: `Informasjon om hentested`,
      userInstructions1: `Beskjed til sjåfør`,
      userInstructions2: `Skriv en melding for å gi sjåføren flere
detaljer om henteadresse`
    };
    this.paymentOptionTab = {
      label: `Betaling`,
      userInstructions1: `Velg betalingsalternativ`,
      options: [
        { icon: `iconPath`, option: `Betal i taxi` },
        { icon: `iconPath`, option: `Familikonto` }
      ]
    };
  }

  onTabSelect(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }

  ngOnInit() {}
}

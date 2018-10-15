import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { LamparaPage } from '../lampara/lampara';
import { SmartphonePage } from '../smartphone/smartphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bocina = BocinaPage;
tv = TvPage;
lampara = LamparaPage;
tel = SmartphonePage;
  constructor(public navCtrl: NavController) {

  }

  Bocina()
  {
    this.navCtrl.push(this.bocina);
  }
  TV()
  {
    this.navCtrl.push(this.tv);
  }
  Lampara()
  {
    this.navCtrl.push(this.lampara);
  }
  Smartphone()
  {
    this.navCtrl.push(this.tel);
  }
}

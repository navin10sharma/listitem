import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetailsPage } from '../../pages/details/details';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {

  }
  details () {
    this.navCtrl.push(DetailsPage);
  }
}

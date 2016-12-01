import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TwoOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-two-one',
  templateUrl: 'two-one.html'
})
export class TwoOnePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TwoOnePage Page');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OneTwoOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-one-two-one',
  templateUrl: 'one-two-one.html'
})
export class OneTwoOnePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OneTwoOnePage Page');
  }

}

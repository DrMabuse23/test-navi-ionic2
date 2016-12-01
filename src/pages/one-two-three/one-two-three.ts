import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OneTwoThree page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-one-two-three',
  templateUrl: 'one-two-three.html'
})
export class OneTwoThreePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OneTwoThreePage Page');
  }

}

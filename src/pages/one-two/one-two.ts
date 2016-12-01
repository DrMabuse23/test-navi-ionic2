import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OneTwo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-one-two',
  templateUrl: 'one-two.html'
})
export class OneTwoPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OneTwoPage Page');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Two page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-two',
  templateUrl: 'two.html'
})
export class TwoPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TwoPage Page');
  }

}

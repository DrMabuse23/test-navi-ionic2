import {DeepLinker} from 'ionic-angular/navigation/deep-linker';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OneOne page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-one-one',
  templateUrl: 'one-one.html'

})
export class OneOnePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OneOnePage Page');
  }

}

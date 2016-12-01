import {NavStore} from '../providers/nav-store';
import {OnePage} from '../pages/one/one';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


@Component({
  templateUrl: 'app.html',
  providers: [NavStore]
})
export class MyApp {
  rootPage = OnePage;

  constructor(platform: Platform, private navStor: NavStore) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

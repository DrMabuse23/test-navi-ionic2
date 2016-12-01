import {Nav} from 'ionic-angular/components/nav/nav';
import {ViewChild} from '@angular/core/src/metadata/di';
import {INavStore, NavStore} from '../../providers/nav-store';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-one',
  templateUrl: 'one.html'
})
export class OnePage {
  public pageTree: INavStore;
  public rootPage;

  @ViewChild('oneRoot') slot: Nav;
  constructor(public navCtrl: NavController, public navStore: NavStore) {

  }

  ionViewDidLoad() {
    console.log('loaded');
    this.pageTree = this.navStore.onePagetree;
    this.slot.insert(0, this.pageTree.children[0].component, this.pageTree.children[0].params);
  }

  getPage(title) {
    return this.pageTree.children.filter(subPage => subPage.params.title === title)[0];
  }

  openPage(title) {
    const page = this.getPage(title);
    if (page.component) {
      this.navCtrl.push(page.component, page.params);
      // this.oneRoot.push(page.component).then((res) => {
      //   console.log(page.title, res);
      // });
    }
  }
}

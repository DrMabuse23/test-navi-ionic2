import {NavController} from 'ionic-angular/navigation/nav-controller';
import {Nav} from 'ionic-angular/components/nav/nav';
import {ViewController} from 'ionic-angular/navigation/view-controller';
import {ViewChild} from '@angular/core/src/metadata/di';
import {INavStore} from '../../providers/nav-store';
import {Input} from '@angular/core/src/metadata/directives';
import { Component } from '@angular/core';

export interface pageMenu extends INavStore{
  isEnabled: boolean;
}
@Component({
  selector: 'pager',
  templateUrl: 'pager.html'
})
export class PagerComponent {

  menu: Array<pageMenu>;
  viewChild: Nav;

  @Input() set menuInput(menu) {
    this.menu = menu.map((item: pageMenu, index) => {
      if (index === 0) {
        item.isEnabled = true;
      } else {
        item.isEnabled = false;
      }
      return item;
    });
  }

  @Input() set viewChildInput(viewChild) {
    this.viewChild = viewChild;
  }

  constructor(private navctrl : NavController) {
    console.log('Hello Pager Component');
  }

  get title() {
    const active = this.viewChild.getActive();
    return active.getNavParams().data.title;
  }

  get count() {
    return this.menu.length;
  }

  get activeIndex() {
    const active = this.viewChild.getActive();
    return this.viewChild.indexOf(active);
  }

  getPagesToIndex() {

  }
  next() {
    let next = this.activeIndex + 1;
    if (this.activeIndex >= 0 && next < this.count && this.menu[next]) {
      const page = this.menu[next];
      this.menu[this.activeIndex].isEnabled = false;

      this.viewChild.push(page.component, page.params).then(() => {
        page.isEnabled = true;
      });
    }
  }

  prev() {
    let next = this.activeIndex - 1;
    if (this.activeIndex >= 0 && next >= 0 && this.menu[next]) {
      const pages = [];
      this.menu[this.activeIndex].isEnabled = false;
      for (var i = 0, l = next; i <= l; i++) {
        this.viewChild.insert(i, this.menu[i].component, this.menu[i].params);
      }
      this.menu[next].isEnabled = true;
    }
  }
}

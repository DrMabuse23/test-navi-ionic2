import {OnePage} from '../pages/one/one';
import {Component} from '@angular/core/src/metadata/directives';
import {OneTwoPage} from '../pages/one-two/one-two';
import {OneOnePage} from '../pages/one-one/one-one';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
export interface INavStore {
  component : Component;
  params : {
    title: string,
    [key : string]: any
  };
  children?: Array < INavStore >;
}

@Injectable()
export class NavStore {

  constructor() {
    console.log('Hello NavStore Provider');
  }

  public get onePagetree() : INavStore {
    return {
      component: OnePage,
      params: {
        title: 'OnePage'
      },
      children: [
        {
          component: OneOnePage,
          params: {
            title: 'OneOnePage'
          }
        },
        {
          component: OneTwoPage,
          params: {
            title: 'OneTwoPage'
          }
        }
      ]
    }
  }
}

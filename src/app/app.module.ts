import {PagerComponent} from '../components/pager/pager';
import {NavStore} from '../providers/nav-store';
import {OneTwoThreePage} from '../pages/one-two-three/one-two-three';
import {OneTwoTwoPage} from '../pages/one-two-two/one-two-two';
import {OneTwoOnePage} from '../pages/one-two-one/one-two-one';
import {OneTwoPage} from '../pages/one-two/one-two';
import {OneOnePage} from '../pages/one-one/one-one';
import {OnePage} from '../pages/one/one';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

@NgModule({
  declarations: [
    MyApp,
    PagerComponent,
    OnePage,
    OneOnePage,
    OneTwoPage,
    OneTwoOnePage,
    OneTwoTwoPage,
    OneTwoThreePage
  ],
  imports: [IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PagerComponent,
    OnePage,
    OneOnePage,
    OneTwoPage,
    OneTwoOnePage,
    OneTwoTwoPage,
    OneTwoThreePage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBtdFCQdvez8Xpi2ojSIQ3DtpAPH3j2gcY",
  authDomain: "shoppingapp-a1bd9.firebaseapp.com",
  databaseURL: "https://shoppingapp-a1bd9.firebaseio.com",
  projectId: "shoppingapp-a1bd9",
  storageBucket: "shoppingapp-a1bd9.appspot.com",
  messagingSenderId: "825262889931",
  appId: "1:825262889931:web:1138390a31f32863"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ AngularFirestoreModule,AngularFireModule.initializeApp(firebaseConfig),BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

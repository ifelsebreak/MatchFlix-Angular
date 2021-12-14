import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CardComponent } from './components/card/card.component';
import { GroupsListComponent } from './components/groups/groups-list/groups-list.component';
import { GroupsListEntryComponent } from './components/groups/groups-list-entry/groups-list-entry.component';
import { GroupPageComponent } from './components/groups/group-page/group-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DeckComponent } from './components/deck/deck.component';
import { MembersListEntryComponent } from './components/users/members-list-entry/members-list-entry.component';
import { CardDraggingDirective } from './directives/card-dragging.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LikeComponent } from './components/cards/tags/like/like.component';
import { DislikeComponent } from './components/cards/tags/dislike/dislike.component';
import { ShoutComponent } from './components/cards/tags/shout/shout.component';
import { SaveComponent } from './components/cards/tags/save/save.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { SignupPageComponent } from './components/auth/signup-page/signup-page.component';
import { PublicPageComponent } from './components/auth/public-page/public-page.component';
import { EmailComponent } from './components/auth/email/email.component';
import { ProfileComponent } from './components/auth/profile/profile.component';

const firebaseConfig = {

  apiKey: "PUT YOUR OWN FIREBASE API KEY HERE",// "AIzaSyDVloO-Ux712CvNELxyIT6PE7Yp1ABYld4",

  authDomain: "PUT YOUR FIREBASE APP DETAILS HERE",

  databaseURL: "PUT YOUR FIREBASE APP DETAILS HERE",

  storageBucket: "PUT YOUR FIREBASE APP DETAILS HERE",

  messagingSenderId: "PUT YOUR FIREBASE APP DETAILS HERE",

  appId: "PUT YOUR FIREBASE APP DETAILS HERE",

  measurementId: "PUT YOUR FIREBASE APP DETAILS HERE",

  projectId: "PUT YOUR FIREBASE APP DETAILS HERE"

};



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GroupsListComponent,
    GroupsListEntryComponent,
    GroupPageComponent,
    WelcomeComponent,
    DeckComponent,
    MembersListEntryComponent,
    CardDraggingDirective,
    LikeComponent,
    DislikeComponent,
    ShoutComponent,
    SaveComponent,
    LoginPageComponent,
    SignupPageComponent,
    PublicPageComponent,
    EmailComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately' // 'registerWhenStable:30000'
    }),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    DragDropModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

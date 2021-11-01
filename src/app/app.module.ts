import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DeckComponent } from './components/deck/deck.component';
import { MembersListEntryComponent } from './components/users/members-list-entry/members-list-entry.component';
import { DesktopHomeComponent } from './desktop-home/desktop-home.component';
import { CardDraggingDirective } from './directives/card-dragging.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LikeComponent } from './components/cards/tags/like/like.component';
import { DislikeComponent } from './components/cards/tags/dislike/dislike.component';
import { ShoutComponent } from './components/cards/tags/shout/shout.component';
import { SaveComponent } from './components/cards/tags/save/save.component';

const firebaseConfig = {

  apiKey: "AIzaSyDVloO-Ux712CvNELxyIT6PE7Yp1ABYld4",

  authDomain: "matchflix-c4607.firebaseapp.com",

  databaseURL: "https://matchflix-c4607-default-rtdb.firebaseio.com",

  projectId: "matchflix-c4607",

  storageBucket: "matchflix-c4607.appspot.com",

  messagingSenderId: "165157065036",

  appId: "1:165157065036:web:63d27aa3f681c7a0f1ffe9",

  measurementId: "G-3MLD304WBT"

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
    DesktopHomeComponent,
    CardDraggingDirective,
    LikeComponent,
    DislikeComponent,
    ShoutComponent,
    SaveComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

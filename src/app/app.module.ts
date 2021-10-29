import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately' // 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatChipsModule,
    MatSlideToggleModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

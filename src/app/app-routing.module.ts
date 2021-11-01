import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsListComponent } from './components/groups/groups-list/groups-list.component';
import { DeckComponent } from './components/deck/deck.component';
import { CardComponent } from './components/card/card.component';
import { GroupPageComponent} from './components/groups/group-page/group-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DesktopHomeComponent } from './desktop-home/desktop-home.component';
import { CURRENT_USER } from 'src/app/repos/current-user';
import { User } from './models/user';
import { AppComponent } from './app.component';

const routes: Routes = [
  /*{ 
    path: 'group', component: WelcomeComponent, children: [
      {path: ':id', component: DeckComponent, children: [
        {path: 'settings', component: GroupPageComponent}
      ]},
    //{path: 'group', component: DeckComponent},
  ]},*/
  //{ path: '', redirectTo: 'group/' + CURRENT_USER.favoriteGroup, pathMatch: 'full' },
  { path: 'group/:id/settings', component: GroupPageComponent },
  { path: 'group/:id', component: DeckComponent },
  { path: 'groups/', component: WelcomeComponent },
  { path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  currentUser: User = CURRENT_USER;

}

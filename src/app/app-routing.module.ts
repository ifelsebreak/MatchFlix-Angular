import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsListComponent } from './components/groups/groups-list/groups-list.component';
import { DeckComponent } from './components/deck/deck.component';
import { CardComponent } from './components/card/card.component';
import { GroupPageComponent} from './components/groups/group-page/group-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CURRENT_USER } from 'src/app/repos/current-user';
import { User } from './models/user';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/auth/login-page/login-page.component';
import { EmailComponent } from './components/auth/email/email.component';
import { SignupPageComponent } from './components/auth/signup-page/signup-page.component';
import { ProfileComponent } from './components/auth/profile/profile.component';



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
  { path: 'groups/', component: WelcomeComponent, pathMatch: 'full' },
  { path: '', component: WelcomeComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'email-login', component: EmailComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/),],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  currentUser: User = CURRENT_USER;

}

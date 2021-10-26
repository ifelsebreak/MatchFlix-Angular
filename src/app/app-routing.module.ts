import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './components/deck/deck.component';
import { GroupPageComponent} from './components/groups/group-page/group-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CURRENT_USER } from 'src/app/repos/current-user';
import { User } from './models/user';

const routes: Routes = [
  { path: '', redirectTo: 'group/' + CURRENT_USER.favoriteGroup, pathMatch: 'full' },
  {path: 'group/:id', component: DeckComponent},
  {path: 'group/:id/settings', component: GroupPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  currentUser: User = CURRENT_USER;

}

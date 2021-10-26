import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { GroupPageComponent} from './components/groups/group-page/group-page.component';

const routes: Routes = [
  {path: '', component: CardComponent},
  {path: 'group', component: GroupPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

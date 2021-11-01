import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Group } from '../../../models/group';
import { GroupService } from '../../../services/group-service.service';
import { User } from '../../../models/user';
import { UserService} from '../../../services/users.service';
import {CURRENT_USER} from '../../../repos/current-user';
import { MatSliderModule } from '@angular/material/slider';
import { group } from '@angular/animations';


@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})


export class GroupPageComponent implements OnInit {
  group: Group = {id: 0, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};
  id: number = 0;
  member: User = {id: 0, name: '', avatar_path: '', groups: [], likes: [], saves: [], favoriteGroup: 0};
  currentUser: User = CURRENT_USER;

  constructor(
    private router: Router,
    private _groupService: GroupService,
    private activatedRoute: ActivatedRoute,
    ) { 
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
        console.log(`I look for the group with ID ${this.id}`);
        });
        this.getCurrentGroup(this.id);
      
      }

  ngOnInit(): void {
    
      console.log(`This is group ${this.group.name} with id ${this.group.id}`);
      
    }
  
  ngOnChanges(): void {

  }


  onInputChange(event: any) {
    console.log("This is emitted as the thumb slides");
    this.group.minApprove = event.value;
    console.log(event.value);
    console.log(` MinApprove: ${this.group.minApprove}`);
  }

  favorite() {
    this.currentUser.favoriteGroup = this.group.id;
  }

  unfavorite() {
    this.currentUser.favoriteGroup = 0;
  }

  async getCurrentGroup(id: any) {
    this.group = await this._groupService.getGroup(this.id);
    console.log("I found this group:")
    console.log(this.group);
  }
  
}

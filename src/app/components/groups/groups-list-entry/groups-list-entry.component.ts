import { Component, OnInit, Input, Output } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupService } from '../../../services/group-service.service';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/users.service';
import { CURRENT_USER } from 'src/app/repos/current-user';
import { group } from '@angular/animations';


@Component({
  selector: 'app-groups-list-entry',
  templateUrl: './groups-list-entry.component.html',
  styleUrls: ['./groups-list-entry.component.scss']
})
export class GroupsListEntryComponent implements OnInit {
  @Input() group: Group = {id: 999, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};
  //id : number = this.group.id;

  @Output() currentGroup: Group = this.group;

  groups: Group[] = [];
  members: User[] = [];
  currentUser: User = CURRENT_USER;
  favoriteGroup: number = CURRENT_USER.favoriteGroup;
  selectedGroupId: number = this.favoriteGroup;
  //group: Group = this.group;

  constructor(
    private _groupService: GroupService,
    private _userService: UserService
    ) { }

  ngOnInit(): void {
    this.groups = this._groupService.getGroups();
    ;
    this.members = this._userService.getMembers(this.group.members);
  
    console.log('this.group');
    console.log(this.members);
    console.log(this.group);

  }

  onClick() {
    //var target = event.target || event.srcElement || event.currentTarget;
    //targedID: HTMLDivElement = target.attributes.id;
    //this.currentlyActive = target;
    
  }

  ngOnChanges(): void {

  }
  

}

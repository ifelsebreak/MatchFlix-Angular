import { Component, OnInit, Input } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupService } from '../../../services/group-service.service';
import { User } from 'src/app/models/user';
import { UserService } from '../../../services/users.service';


@Component({
  selector: 'app-groups-list-entry',
  templateUrl: './groups-list-entry.component.html',
  styleUrls: ['./groups-list-entry.component.scss']
})
export class GroupsListEntryComponent implements OnInit {
  @Input() group: Group = {id: 5, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};
  id : number = this.group.id;

  groups: Group[] = [];
  members: User[] = [];

  constructor(
    private _groupService: GroupService,
    private _userService: UserService
    ) { }

  ngOnInit(): void {
    this.groups = this._groupService.getGroups();
    // this.members = this._userService.getMembers(IDs);
    console.log(this.groups);
  }

}

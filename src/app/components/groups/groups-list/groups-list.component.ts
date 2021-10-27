import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { GroupService } from '../../../services/group-service.service';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  groups: Group[] = [];
  group: Group = {id: 999999999, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};

  constructor(private _groupService: GroupService) { }

  ngOnInit(): void {
    this.groups = this._groupService.getGroups();
    console.log(this.groups);
    //this.group = this._groupService.getGroup(wantedID);
  }

  getGroup(wantedID: number): Group {
      this.group = this._groupService.getGroup(wantedID);
      return this.group;
  }

}

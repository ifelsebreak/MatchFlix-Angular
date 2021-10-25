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

  constructor(private _groupService: GroupService) { }

  ngOnInit(): void {
    this.groups = this._groupService.getGroups();
    console.log(this.groups);
  }

}

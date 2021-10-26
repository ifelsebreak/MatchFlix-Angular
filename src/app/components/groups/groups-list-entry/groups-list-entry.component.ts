import { Component, OnInit, Input } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupService } from '../../../services/group-service.service';


@Component({
  selector: 'app-groups-list-entry',
  templateUrl: './groups-list-entry.component.html',
  styleUrls: ['./groups-list-entry.component.scss']
})
export class GroupsListEntryComponent implements OnInit {
  @Input() group: Group = {id: 0, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};

  groups: Group[] = [];

  constructor(private _groupService: GroupService) { }

  ngOnInit(): void {
    this.groups = this._groupService.getGroups();
    console.log(this.groups);
  }

}

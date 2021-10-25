import { Injectable } from '@angular/core';
import { Group } from '../models/group';
import { GROUPS } from '../repos/groups-repo';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Group[] {
    return GROUPS;
  }

  addGroup(newItem: Group): void {
    GROUPS.unshift(newItem);
  }

  deleteGroup(unwantedItemIndex: number): void {
    // GROUPS.splice(unwantedItemIndex, 1);
    delete GROUPS[unwantedItemIndex];
  }

}

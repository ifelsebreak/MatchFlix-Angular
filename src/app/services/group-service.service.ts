import { Injectable } from '@angular/core';
import { Group } from '../models/group';
import { GROUPS } from 'src/app/repos/groups-repo';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Group[] {
    return GROUPS;
  }
  getGroup(id: any): Group {
    console.log(typeof(id));
    console.log("Found group:");
    console.log(GROUPS.find(element => element.id === Number(id)));
    return GROUPS.find(element => element.id === id)!;
    
  }

  addGroup(newItem: Group): void {
    GROUPS.unshift(newItem);
  }

  deleteGroup(unwantedItemIndex: number): void {
    // GROUPS.splice(unwantedItemIndex, 1);
    delete GROUPS[unwantedItemIndex];
  }

}

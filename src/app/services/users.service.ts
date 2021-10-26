import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../repos/users-repo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

  getMembers(wantedIDs : number[]): User[] {
    let members : User[] = [];
      wantedIDs.forEach((ID, index) => {
        members.push(USERS.find(element => element.id = ID)!);
        
      });
    return members;
  }

  addGroup(newItem: User): void {
    USERS.unshift(newItem);
  }

  deleteGroup(unwantedItemIndex: number): void {
    // GROUPS.splice(unwantedItemIndex, 1);
    delete USERS[unwantedItemIndex];
  }
}

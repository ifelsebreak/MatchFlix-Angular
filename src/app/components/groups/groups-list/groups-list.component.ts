import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { GroupService } from '../../../services/group-service.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  //groups: Group[] = [];
  group: any;//Group = {id: 999999999, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};
  //groups: Observable<any>;

  private groupsCollection: AngularFirestoreCollection<Group>;
  groups: Observable<Group[]>;

  constructor(
    private _groupService: GroupService,
    private db: AngularFirestore) {
      this.groupsCollection = this.db.collection<Group>('groups');
      this.groups = this.groupsCollection.valueChanges();
      console.log("I gruppi trovati nella collection 'groups'");
      console.log(this.groups);
      console.log("Singolo documento richiesto alla collection 'groups'");
      /*this.group = this.groups.pipe(map(res => {
        return Object.keys(res).map(x => res[Number(x)]);
      }));
      console.log(typeof(this.group));
      console.log(this.group);*/
    }


  ngOnInit(): void {
    //this.groups = this._groupService.getGroups();
    
    //this.group = this._groupService.getGroup(wantedID);
  }

  /*getGroup(wantedID: number): Group {
      this.group = this._groupService.getGroup(wantedID);
      return this.group;
  }*/

  getGroups(){ 
    return this.db.collection("groups").valueChanges();
          // you can either use:
          // .valueChanges() 
          // .snapshotChanges() 
          // .stateChanges()
          // or .auditTrail()
 }

 getGroup(docID: number){ 
  return this.db.doc(`groups/${docID}`).valueChanges(); 
             // you can use either: 
             // .valueChanges()
             // or .snapshotChanges()
}

}

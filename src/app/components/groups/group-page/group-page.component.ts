import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Group } from '../../../models/group';
import { GroupService } from '../../../services/group-service.service';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})


export class GroupPageComponent implements OnInit {
  group: Group = {id: 0, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};
  id: number = 0;
  constructor(
    private _groupService: GroupService,
    private activatedRoute: ActivatedRoute
    ) { 
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
        console.log(`This is group with ID ${this.id}`);
        });
      
      }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.group = this._groupService.getGroup(routeParams.id);
      console.log(`This is group ${this.group.name}`);
      
    });
  }


  onInputChange(event: any) {
    console.log("This is emitted as the thumb slides");
    this.group.minApprove = event.value;
    console.log(event.value);
    console.log(` MinApprove: ${this.group.minApprove}`);
  }

  

}

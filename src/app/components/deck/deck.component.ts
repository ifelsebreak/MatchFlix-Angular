import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../models/group';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})


export class DeckComponent implements OnInit {

  cards = [1, 2, 3, 4, 5, 6];

  @Input() group: Group = {id: 999, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};
  id : number = this.group.id;

  constructor() { }

  ngOnInit(): void {
  }

}

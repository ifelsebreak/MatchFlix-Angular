import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../models/group';
import { Movie } from '../../models/movie';
import { MoviesServiceService } from '../../services/movies-service.service';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})


export class DeckComponent implements OnInit {
  data: any;
  movies: Movie[] = [];
  movie: Movie = {title : '', id : 0, posterPath : '', backdropPath : '', overview : '', tagline : '', populariy : 0.0, voteCount : 0, voteAverage : 0.0, genres : []};
  cards: Array<any> = [
    {id: 1, poster_path: 'https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg'},
    {id: 2, poster_path: ''},
    {id: 3, poster_path: ''},
    {id: 4, poster_path: ''},
    {id: 5, poster_path: ''},
  ];

  @Input() group: Group = {id: 999, name: '', pic: '', members: [], admin: 0, minApprove: 2, movies: true, shows: false, genres: [], matches: []};
  id : number = this.group.id;

  constructor(private _moviesService: MoviesServiceService) { }

  ngOnInit(): void {
    //this.loadCards(1);
    
  }


  async loadCards(page: number) {
    this.data = await this._moviesService.getMoviesData(page);
    console.log('Data:');
    console.log(this.data);
    this.data.forEach( (element: any) => (
      this.cards.push(element)
      ));
    console.log('Cards:');
    console.log(this.cards);
  }

}

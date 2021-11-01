import { Injectable } from '@angular/core';
import * as globals from '../../assets/globals';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  api_key: string = globals.api_key;
  language: string = globals.language;

  constructor(private http: HttpClient) { }

  async getMoviesJson(page: number): Promise<any> {
      // CALL JSON FILE
      var JSONdata;
      var url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + this.api_key + '&language=' + this.language + '&sort_by=popularity.desc&include_adult=false&page='+ page.toString();
      console.log(url);
      var response = this.http.get(url);
      console.log(response);
      response.subscribe(data =>{
        console.log('getMoviesJson:');
        console.log(data);
        JSONdata = data;
      });
      return JSONdata;
  }
    
  //GET DATA FROM JSON FILE
  async getMoviesData(page: number) {
    var data: any = await this.getMoviesJson(page);
    console.log('getMoviesData:')
    console.log(data);
    return data['results'];
  }
  
}

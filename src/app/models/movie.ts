export class Movie {
    public title: string = '';
    public id: number = 0;
    public posterPath: string = '';
    public backdropPath: string = '';
    public overview: string = '';
    public tagline: string = '';
    public populariy: number = 0.0;
    public voteCount: number = 0;
    public voteAverage: number = 0.0;
    public genres: Array<number> = [];
    
  
    public constructor(init?:Partial<Movie>) {
      Object.assign(this, init);
  }
  }
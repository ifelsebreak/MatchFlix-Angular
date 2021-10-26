export class Group {
    public id: number = 0;
    public name: string = '';
    public pic: string = '';
    public members: Array<number> = [];
    public admin: number = 0;
    public minApprove: number = 2;
    public movies: boolean = true;
    public shows: boolean = false;
    public genres: Array<number> = [];
    public matches: Array<number> = [];
    
  
    public constructor(init?:Partial<Group>) {
      Object.assign(this, init);
  }
  }
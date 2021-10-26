export class User {
    public id: number = 0;
    public name: string = '';
    public avatar_path: string = '';
    public groups: Array<number> = [];
    public likes: Array<number> = [];
    public saves: Array<number> = [];
    public favoriteGroup: number = 0;
  
    public constructor(init?:Partial<User>) {
      Object.assign(this, init);
  }
  }
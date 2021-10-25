export class User {
    public id: number = 0;
    public name: string = '';
    public avatar_path: string = '';
    public groups: Array<number> = [];
    
  
    public constructor(init?:Partial<User>) {
      Object.assign(this, init);
  }
  }
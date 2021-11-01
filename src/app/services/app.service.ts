import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) { }

  checkIfNeeded() { // metto la grouplist outofview a meno che la route attuale sia /group
    
    if(window.innerHeight > window.innerWidth && this.router.url != "/" ){
      console.log(Boolean(this.router.url == "/group/4/settings"))
      console.log("Portrait!");
      console.log(this.router.url);
      return false;
    } else if (window.innerHeight < window.innerWidth || this.router.url == "/" ) {
      console.log("Landscape!");
      return true;
    }
  }
}

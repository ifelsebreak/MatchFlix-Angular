import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MatchFlix';
  isNeeded: boolean = true;
  isMobile: boolean = true;

  constructor(private router: Router ) {
    this.checkIfNeeded();
    this.checkIfMobile();

  }

  ngOnInit() {
    this.checkIfNeeded();
    this.checkIfMobile();
  }

  ngAfterViewChecked() {
    this.checkIfNeeded();
    this.checkIfMobile();
  }

  checkIfNeeded() { // metto la grouplist outofview a meno che la route attuale sia /group
    
    if(window.innerHeight > window.innerWidth && this.router.url != "/" ){
      console.log(Boolean(this.router.url == "/group/4/settings"))
      console.log("Portrait!");
      console.log(this.router.url);
      this.isNeeded = false;
    } else if (window.innerHeight < window.innerWidth || this.router.url == "/" ) {
      console.log("Landscape!");
      this.isNeeded = true;
    }
  }

  checkIfMobile() { // mostro le icone in cima quando viene mostrato il layout mobile
    
    if (window.innerHeight > window.innerWidth){
      this.isMobile = true;
      console.log("isMobile:");
      console.log(this.isMobile);
    } else if (window.innerHeight < window.innerWidth) {
      this.isMobile = false;
      console.log("isMobile:");
      console.log(this.isMobile);
    }
  }

}


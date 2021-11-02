import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() movie: object = {};
  @Input() index: any;
  @ViewChild('card', {read: ElementRef })  cardElement: any
  @ViewChild('liketag', {read: ElementRef })  likeTagElement: any
  @ViewChild('disliketag', {read: ElementRef })  dislikeTagElement: any
  @ViewChild('shouttag', {read: ElementRef })  shoutTagElement: any
  @ViewChild('savetag', {read: ElementRef })  saveTagElement: any


  constructor() {}


  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      console.log(`Gli elementi Card: ${this.cardElement.nativeElement}`);
      console.log(this.cardElement.nativeElement);
    }, 1000);

    this.likeTagElement.nativeElement.style.opacity = 0.0; // imposto l'opacità iniziale delle esclamazioni su zero
    this.dislikeTagElement.nativeElement.style.opacity = 0.0;
    this.shoutTagElement.nativeElement.style.opacity = 0.0;
    this.saveTagElement.nativeElement.style.opacity = 0.0;
  }

  onChanges() {
    console.log(`Posizione di Card: ${this.cardElement.nativeElement}`);
    console.log(this.cardElement.nativeElement);
  }

  dragAndRotate(e: any) { // Evento sctenato mentre il dito/click è premuto
    console.log("Distanza X:");
    console.log(e.distance.x);
    console.log("Distanza Y:");
    console.log(e.distance.y);
    console.log("Altezza carta:");
    console.log(this.cardElement.nativeElement.clientHeight);
    console.log("Trigger:");
    console.log(-(this.cardElement.nativeElement.clientHeight / 5));
    this.cardElement.nativeElement.style.transform = `rotate(${-(e.distance.x / 15)}deg) translate(${(e.distance.x)}px, ${e.distance.y * 1.3}px)`;
    this.likeTagElement.nativeElement.style.opacity = e.distance.x / 150;
    this.dislikeTagElement.nativeElement.style.opacity = -e.distance.x / 150;
    if (e.distance.x < 80 && e.distance.x > -80) {this.shoutTagElement.nativeElement.style.opacity = -e.distance.y / 250} else {this.shoutTagElement.nativeElement.style.opacity = 0};
    if (e.distance.x < 80 && e.distance.x > -80) {this.saveTagElement.nativeElement.style.opacity = e.distance.y / 250} else {this.saveTagElement.nativeElement.style.opacity = 0};
  }

  releasedDrag(event: any) { // Evento scatenato nell'istante in cui l'utente rimuove il dito/click, prima di qualsiasi animazione
    console.log("evento release");
    
    this.cardElement.nativeElement.setAttribute('style', 'transition: transform 0.4s ease'); // imposto lo stile per un'animazione di ritorno fluida
    this.likeTagElement.nativeElement.setAttribute('style', 'transition: opacity 0.4s ease');
    this.dislikeTagElement.nativeElement.setAttribute('style', 'transition: opacity 0.4s ease');
    this.shoutTagElement.nativeElement.setAttribute('style', 'transition: opacity 0.4s ease');
    this.saveTagElement.nativeElement.setAttribute('style', 'transition: opacity 0.4s ease');
    
    setTimeout(() => {
      this.cardElement.nativeElement.setAttribute('style', 'transition: ') // // una volta terminata, rimuovo lo stile per l'animazione
      this.likeTagElement.nativeElement.setAttribute('style', 'opacity: 0');
      this.dislikeTagElement.nativeElement.setAttribute('style', 'opacity: 0');
      this.shoutTagElement.nativeElement.setAttribute('style', 'opacity: 0');
      this.saveTagElement.nativeElement.setAttribute('style', 'opacity: 0');
    }, 400);
  }

  endedDrag(event: any) { // Evento scatenato dopo l'evento release, qui faccio partire le animazioni
    console.log("evento fine:");   
    //console.log(event.source.getFreeDragPosition());
    if (event.distance.x > this.cardElement.nativeElement.clientWidth / 2) { // LIKE
      this.cardElement.nativeElement.style.transform = `translate(2000px, ${event.distance.y * 10}px)`; // sposto la Card fuori visuale con un'animazione
      setTimeout(() => {
        this.cardElement.nativeElement.remove(); // aspetto che l'animazione sia terminata e distruggo la card
      }, 400);
    } else if (event.distance.x < -(this.cardElement.nativeElement.clientWidth / 2)) { // DISLIKE
      this.cardElement.nativeElement.style.transform = `translate(-2000px, ${event.distance.y * 10}px)`; // sposto la Card fuori visuale con un'animazione
      setTimeout(() => {
        this.cardElement.nativeElement.remove(); // aspetto che l'animazione sia terminata e distruggo la card
      }, 400);
    } else if (event.distance.y < -(this.cardElement.nativeElement.clientHeight / 5)) { // SHOUT
      this.cardElement.nativeElement.style.transform = `translate(0px, -2000px)`; // sposto la Card fuori visuale con un'animazione
      setTimeout(() => {
        this.cardElement.nativeElement.remove(); // aspetto che l'animazione sia terminata e distruggo la card
      }, 400);
    } else if (event.distance.y > this.cardElement.nativeElement.clientHeight / 5) { // SAVE
      this.cardElement.nativeElement.style.transform = `translate(0px, 2000px)`; // sposto la Card fuori visuale con un'animazione
      setTimeout(() => {
        this.cardElement.nativeElement.remove(); // aspetto che l'animazione sia terminata e distruggo la card
      }, 400);
    } else {
      this.cardElement.nativeElement.style.transform = `translate(0, 0)`;
      this.likeTagElement.nativeElement.style.opacity = `0`;
      this.dislikeTagElement.nativeElement.style.opacity = `0`;
      this.shoutTagElement.nativeElement.style.opacity = `0`;
      this.saveTagElement.nativeElement.style.opacity = `0`;
    }
    
    //this.cardElement.nativeElement.style.transition = `translate(0, 0) 300 ease-out 0`;
    /*this.cardElement.nativeElement.animate(
      [
        {transform: `translate(${event.dropPoint.x}, ${event.dropPoint.y})`},
        {transform: "translate(0, 0)"},
        
      ], 
      {
        duration: 300,
        delay: 0,
        fill: "both",
        easing :'ease-out'
      }
    );
    //this.cardElement.nativeElement.classList.remove('style');*/
  }

}

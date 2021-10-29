import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Observable } from "rxjs";
import { LikeComponent } from '../cards/tags/like/like.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import Spring from 'tiny-spring'; 


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
 
//[ngStyle]="{ 'transform': 'rotate( xPos deg)' }"


export class CardComponent implements OnInit {
  @Input() index: number = -1;
  @ViewChild('card', {read: ElementRef })  cardElement: any
  @ViewChild('liketag', {read: ElementRef })  likeTagElement: any
  @ViewChild('disliketag', {read: ElementRef })  dislikeTagElement: any
  posterPath: string = 'https://image.tmdb.org/t/p/w500//ekZobS8isE6mA53RAiGDG93hBxL.jpg';

  constructor() {}


  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      console.log(`Posizione di Card: ${this.cardElement.nativeElement}`);
      console.log(this.cardElement.nativeElement.offsetLeft);
      console.log("BEFORE");
      console.log(this.cardElement.nativeElement);
    }, 1000);

    this.likeTagElement.nativeElement.style.opacity = 0.0; // imposto l'opacità iniziale delle esclamazioni su zero
    this.dislikeTagElement.nativeElement.style.opacity = 0.0;
  }

  onChanges() {
    console.log(`Posizione di Card: ${this.cardElement.nativeElement}`);
    console.log(this.cardElement.nativeElement);
  }

  dragAndRotate(e: any) {
    console.log(e);
    this.cardElement.nativeElement.style.transform = `rotate(${-(e.distance.x / 15)}deg) translate(${(e.distance.x)}px, ${e.distance.y * 1.3}px)`;
    this.likeTagElement.nativeElement.style.opacity = e.distance.x / 150;
    this.dislikeTagElement.nativeElement.style.opacity = -e.distance.x / 150;
  }

  endedDrag(event: any) {
    console.log("evento fine:");
    console.log(event);
    console.log(event.dropPoint.x);
    //console.log(event.source.getFreeDragPosition());
    this.cardElement.nativeElement.style.transform = `translate(0, 0)`;
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
    );*/
    //this.cardElement.nativeElement.classList.remove('style');
  }

  /*releasedDrag(event: any) {
    console.log("evento release");
    console.log(event);
    console.log(event.source._dragRef._activeTransform);
    let endPosX: number = event.source._dragRef._activeTransform.x;
    let endPosY: number = event.source._dragRef._activeTransform.y;
    this.cardElement.nativeElement.animate(
      [
        {transform: `translate(${endPosX}, ${endPosY})`},
        {transform: "translate(0, 0)"},
        
      ], 
      {
        duration: 300,
        delay: 0,
        fill: "both",
        easing :'ease-out'
      }
    );

    console.log("AFTER");
    console.log(this.cardElement.nativeElement); //.remove('style');
    this.cardElement.nativeElement.removeAttribute('style');
  }*/

}

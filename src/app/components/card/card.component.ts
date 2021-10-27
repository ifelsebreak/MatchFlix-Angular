import { Component, OnInit } from '@angular/core';
import Spring from 'tiny-spring';
 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
 



export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const spring = Spring();
const element = document.getElementById('front-card');
 
spring.onUpdate(val => {
  //element!.style.transform = `translateX(${val}px)`;
});
 
// Set value to 50 without animating
spring.setValue(50);
 
// Transition from current value (50) to 100
spring.transitionTo(100);
 
// Transition again from whatever the current value is to 200
spring.transitionTo(200);
 
// Stop animation and remove callback
spring.destroy();

  }

}

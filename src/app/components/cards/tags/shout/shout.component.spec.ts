import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoutComponent } from './shout.component';

describe('ShoutComponent', () => {
  let component: ShoutComponent;
  let fixture: ComponentFixture<ShoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

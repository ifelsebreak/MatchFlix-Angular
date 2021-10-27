import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListEntryComponent } from './members-list-entry.component';

describe('MembersListEntryComponent', () => {
  let component: MembersListEntryComponent;
  let fixture: ComponentFixture<MembersListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

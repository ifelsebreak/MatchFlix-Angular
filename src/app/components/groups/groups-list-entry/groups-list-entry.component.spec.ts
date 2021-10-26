import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsListEntryComponent } from './groups-list-entry.component';

describe('GroupsListEntryComponent', () => {
  let component: GroupsListEntryComponent;
  let fixture: ComponentFixture<GroupsListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

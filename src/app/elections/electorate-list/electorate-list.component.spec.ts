import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectorateListComponent } from './electorate-list.component';

describe('ElectorateListComponent', () => {
  let component: ElectorateListComponent;
  let fixture: ComponentFixture<ElectorateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectorateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectorateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

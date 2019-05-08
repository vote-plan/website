import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectoratesComponent } from './electorates.component';

describe('ElectoratesComponent', () => {
  let component: ElectoratesComponent;
  let fixture: ComponentFixture<ElectoratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectoratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectoratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

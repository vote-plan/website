import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionHomeComponent } from './election-home.component';

describe('ElectionHomeComponent', () => {
  let component: ElectionHomeComponent;
  let fixture: ComponentFixture<ElectionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

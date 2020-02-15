import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificDetailComponent } from './scientific-detail.component';

describe('ScientificDetailComponent', () => {
  let component: ScientificDetailComponent;
  let fixture: ComponentFixture<ScientificDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

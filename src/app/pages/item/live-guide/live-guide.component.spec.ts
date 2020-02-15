import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveGuideComponent } from './live-guide.component';

describe('LiveGuideComponent', () => {
  let component: LiveGuideComponent;
  let fixture: ComponentFixture<LiveGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

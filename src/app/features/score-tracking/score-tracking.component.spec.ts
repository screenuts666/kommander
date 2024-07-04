import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTrackingComponent } from './score-tracking.component';

describe('ScoreTrackingComponent', () => {
  let component: ScoreTrackingComponent;
  let fixture: ComponentFixture<ScoreTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScoreTrackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

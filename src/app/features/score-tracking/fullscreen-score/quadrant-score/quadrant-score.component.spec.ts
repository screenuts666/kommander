import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrantScoreComponent } from './quadrant-score.component';

describe('QuadrantScoreComponent', () => {
  let component: QuadrantScoreComponent;
  let fixture: ComponentFixture<QuadrantScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuadrantScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuadrantScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

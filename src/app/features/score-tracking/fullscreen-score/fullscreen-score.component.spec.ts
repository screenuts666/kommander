import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenScoreComponent } from './fullscreen-score.component';

describe('FullscreenScoreComponent', () => {
  let component: FullscreenScoreComponent;
  let fixture: ComponentFixture<FullscreenScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullscreenScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullscreenScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

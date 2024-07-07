import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsScoreComponent } from './settings-score.component';

describe('SettingsScoreComponent', () => {
  let component: SettingsScoreComponent;
  let fixture: ComponentFixture<SettingsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

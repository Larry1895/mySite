import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporationTimelineComponent } from './corporation-timeline.component';

describe('CorporationTimelineComponent', () => {
  let component: CorporationTimelineComponent;
  let fixture: ComponentFixture<CorporationTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorporationTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudienceViewComponent } from './audience-view.component';

describe('AudienceViewComponent', () => {
  let component: AudienceViewComponent;
  let fixture: ComponentFixture<AudienceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudienceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudienceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

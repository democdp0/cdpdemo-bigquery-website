import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenrecordComponent } from './goldenrecord.component';

describe('GoldenrecordComponent', () => {
  let component: GoldenrecordComponent;
  let fixture: ComponentFixture<GoldenrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindrancesComponent } from './hindrances.component';

describe('HindrancesComponent', () => {
  let component: HindrancesComponent;
  let fixture: ComponentFixture<HindrancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindrancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HindrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

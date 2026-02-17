import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TZ } from './tz';

describe('TZ', () => {
  let component: TZ;
  let fixture: ComponentFixture<TZ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TZ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TZ);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

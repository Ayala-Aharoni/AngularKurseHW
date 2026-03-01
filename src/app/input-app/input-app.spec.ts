import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputApp } from './input-app';

describe('InputApp', () => {
  let component: InputApp;
  let fixture: ComponentFixture<InputApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteApp } from './autocomplete-app';

describe('AutocompleteApp', () => {
  let component: AutocompleteApp;
  let fixture: ComponentFixture<AutocompleteApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

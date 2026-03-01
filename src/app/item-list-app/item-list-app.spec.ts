import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListApp } from './item-list-app';

describe('ItemListApp', () => {
  let component: ItemListApp;
  let fixture: ComponentFixture<ItemListApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

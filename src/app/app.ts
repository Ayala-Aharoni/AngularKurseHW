import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TZ } from './tz/tz';
import { TodoComponent } from './todo/todo';
import { ListComponent } from './list/list';
import { CommonModule } from '@angular/common';
import {Item} from './Shared/Item';
import { ItemListAppComponent } from './item-list-app/item-list-app';  
import { AutocompleteApp } from './autocomplete-app/autocomplete-app';  



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TZ, TodoComponent, CommonModule,ListComponent,ItemListAppComponent,AutocompleteApp], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('project1');

 // רשימת צבעים
  colors: Item[] = [
    new Item("אדום"),
    new Item("כחול"),
    new Item("ירוק")
  ];

  // רשימת ארצות
  countries: Item[] = [
    new Item("ישראל"),
    new Item("יפן"),
    new Item("ברזיל")
  ];

  inputNameForColors: string = 'color-favorite';
  inputNameForCountries: string = 'address';
}
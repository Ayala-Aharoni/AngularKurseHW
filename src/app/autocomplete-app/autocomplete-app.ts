import { ItemListAppComponent } from '../item-list-app/item-list-app';
import { Component, Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list'; 
import { Item } from '../Shared/Item';
import { InputApp } from '../input-app/input-app';



@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [ItemListAppComponent,CommonModule,ListComponent,InputApp],
  templateUrl: './autocomplete-app.html',
  styleUrl: './autocomplete-app.scss',
})
export class AutocompleteApp implements OnInit {

  @Input() items: Item[] = [];

  @Input() inputName: string = '';
  filteredItems: Item[] = [];

  ngOnInit() {
    this.filteredItems = [...this.items]; // אתחול: filteredItems = כל הרשימה
  }

  // -------------------------------------------
  // פונקציה שמקבלת את מה שהבן (InputApp) שולח ומסננת את הרשימה
  filterItems(searchText: string) {
    this.filteredItems = this.items.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
      }
}

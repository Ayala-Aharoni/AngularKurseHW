import { Component,Input } from '@angular/core';
import {Item} from '../Shared/Item';
import { CommonModule } from '@angular/common';
import { ItemListAppComponent } from '../item-list-app/item-list-app';
@Component({
  selector: 'app-list',
  standalone: true,      
  imports: [CommonModule,ItemListAppComponent],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class ListComponent  {
  @Input() items: Item[] = [];


  
 // listItems: Item[] = [
//  new Item("צמיד"),
//  new Item("שרשרת"),
 //   new Item("עגיל", crypto.randomUUID())
//  ];

}

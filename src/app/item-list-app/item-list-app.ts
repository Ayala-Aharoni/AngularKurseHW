import { Component, Input } from '@angular/core';
import { Item } from '../Shared/Item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list-app.html',
  styleUrls: ['./item-list-app.scss']
})
export class ItemListAppComponent {
  @Input() item!: Item; 
}
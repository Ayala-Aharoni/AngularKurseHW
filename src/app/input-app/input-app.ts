import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input,Output ,EventEmitter } from '@angular/core';




@Component({
  selector: 'app-input-app',
  imports: [FormsModule,CommonModule],
  templateUrl: './input-app.html',
  styleUrl: './input-app.scss',
})
export class InputApp {
  searchText: string = '';

  @Input() name: string = '';
  @Input() inputName: string = '';

  showTitle() {
    alert(`הוקשו ${this.searchText.length} תווים`);
  }


   // Output עם alias בשם 'search'
   @Output('search') onSearch = new EventEmitter<string>();

   // פונקציה שנקראת בכל שינוי באינפוט
   emitSearch() {
     this.onSearch.emit(this.searchText);
   }
}

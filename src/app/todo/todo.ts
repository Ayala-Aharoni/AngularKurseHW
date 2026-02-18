import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoStatus } from '../Shared/ToDo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],   
  templateUrl: './todo.html',
  styleUrls: ['./todo.scss']

})
export class TodoComponent {
  TodoStatus = TodoStatus; // כדי להשתמש ב-enum ב-HTML

  todos: Todo[] = [
    {
      id: crypto.randomUUID(),
      title: 'ללמוד Angular',
      targetDate: new Date(2026, 1, 20),
      status: TodoStatus.NotDone
    },
    {
      id: crypto.randomUUID(),
      title: 'להגיש תרגיל',
      targetDate: new Date(2026, 1, 18),
      status: TodoStatus.InProgress
    },
    {
      id: crypto.randomUUID(),
      title: 'לעבור על החומר',
      targetDate: new Date(2026, 1, 15),
      status: TodoStatus.Done
    }
  ];
  
  isExpired(date: Date): boolean {
    return new Date(date) < new Date();
  }

updateStatus(todo: Todo, newStatus: TodoStatus) {
  todo.status = newStatus;
   }
editingTodoId: string | null = null;

startEdit(id: string) {
  this.editingTodoId = id;
}

saveEdit() {
  this.editingTodoId = null;
}
updateDate(todo: Todo, dateString: string) {
  todo.targetDate = new Date(dateString);
}

// אובייקט ריק שמשמש כטיוטה למשימה החדשה
newTodo: any = {
  title: '',
  targetDate: ''
};

addTodo() {
  if (this.newTodo.title && this.newTodo.targetDate) {
    const newTask: Todo = {
      id: crypto.randomUUID(),
      title: this.newTodo.title,
      targetDate: new Date(this.newTodo.targetDate),
      status: TodoStatus.NotDone // סטטוס ברירת מחדל
    };

    this.todos.push(newTask); // הוספה למערך
    
    // איפוס הטופס לאחר ההוספה
    this.newTodo = { title: '', targetDate: '' };
  } else {
    alert("נא למלא כותרת ותאריך יעד");
  }
}

deleteTodo(index: number) {
  this.todos.splice(index, 1);
}
}
  



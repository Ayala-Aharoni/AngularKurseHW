import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TZ } from './tz/tz';
import { TodoComponent } from './todo/todo';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TZ, TodoComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('project1');
}
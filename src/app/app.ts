import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TZ } from './tz/tz';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TZ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('project1');
}
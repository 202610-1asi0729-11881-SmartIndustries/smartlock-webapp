import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Layout} from './shared/presentation/component/layout/layout';

@Component({
  selector: 'app-root',
  imports: [
    Layout,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smartlock-webapp');
}

import { Component, signal } from '@angular/core';
import { SecondComponent } from './second-component/second-component';
import { ThirdComponent } from './third-component/third-component';

@Component({
  selector: 'app-root',
  imports: [SecondComponent,ThirdComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = '';
}

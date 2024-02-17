import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { Task2Component } from './task2/task2.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TaskComponent,Task2Component,DataBindingDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTask';
}

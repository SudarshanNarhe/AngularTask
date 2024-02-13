import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myclass } from '../task2/task2.component';

@Component({
  selector: 'app-taskked',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {

      number:any='';
    
      Enroll(){
        console.log(this.number);
       return this.number;
      }

     myobj:Myclass= new Myclass();  // we can use export the class every componenet but if it is locally we cannot use

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import path from 'path';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})

export class DataBindingDemoComponent {
      name="Sudarshan";

      course:string[]=["java","python","C#"];
      // num:number=10;
      flag:boolean=false;
      path:string='';
      show(){
        if(this.flag){
          this.path="../assets/fingerprint-identity-.jpg"
      }
      else{
        this.path="../assets/tree-736885_1280.jpg"
      }
     
      }

      color:string="red";
      columnspan:number=2;

      myStyle={
        'font-weight':'bold',
        'color':'blue'
      };

      

}

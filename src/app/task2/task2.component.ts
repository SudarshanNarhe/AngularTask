import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})

export class Task2Component {

      coursename:string='';
      cobj:Courses = new Courses();
      courseList:any[]=[]

      addcourse(){
        
        this.cobj={coursename:this.coursename,colorname:'Orange'}

        this.courseList.push(this.cobj);

      } 
      getCourse(){
        return this.courseList
      }

      checkitem(courseobj:Courses)
        {
          let i=0;
          for(;i<this.courseList.length;i++)
          {
            if(this.courseList[i].coursename==courseobj.coursename)
            {
              this.courseList[i].colorname='white'
              
            }
          }
  }

}

// export keyword is used in ts so we can use this class to every componenet of the project

export class Courses{

    colorname?:string;
    coursename?:string; 

    // ? is used as navigation operator in ts file it will return null value if there is no any value pass to it 
    //  and if give any value it will return than particular value

}

export class Myclass{
  num?:number;
  num2:number=90;
 // num3:number;   //it will show the error no initializer and not definetel assigned to the constructor

}

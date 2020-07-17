import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public tasks;
  public newTask ={
    title:"",
    description:""
  }
  constructor(private taskSrvice:TasksService) { }

  ngOnInit(): void {
    this.getTask;
  }

  getTask(){
    this.taskSrvice.getTasks().subscribe(res=>{
      this.tasks = res;
    })
  }
  createTask(){
    this.taskSrvice.createTask(this.newTask).subscribe(res=>{
        this.getTask();
    });
  }

}

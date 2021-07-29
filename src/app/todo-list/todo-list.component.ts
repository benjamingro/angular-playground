import { Component, OnInit } from '@angular/core';
import { faTimesCircle, faCheck, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

type toDoItem = {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  faTimesCircle = faTimesCircle; 
  faCheck = faCheck; 
  faSyncAlt = faSyncAlt; 

  // addToDo = new FormControl('', {validators: Validators.required});
  addToDoForm = new FormGroup({
    addToDo: new FormControl('', {validators: Validators.required}),
  });

  get addToDo() { return this.addToDoForm.get('addToDo'); }


  public toDoList : toDoItem[] = [
    {task:'learn angular',completed:false},
    {task:'meet friend for lunch',completed:false},
    {task:'build todo app',completed:false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() : void{
    const item : toDoItem = {task: this.addToDoForm.value.addToDo, completed:false}; 
    // console.log(item);
    // if the task is not an empty string, push it onto the todo list
    if(item.task.trim().length)
    {
      this.toDoList.push(item);
    }
     
    // this.addToDo.setValue('');
    // this.addToDo.setValue('');
    this.addToDoForm.setValue({addToDo:''});
  }

  addToDoItem(task : string){
    this.toDoList.push({task:task,completed:false});
  }

  completeItem(index : number){
    this.toDoList[index].completed = true; 
  }

  redoItem(index : number){
    this.toDoList[index].completed = false; 
  }

  removeItem(index : number){
    this.toDoList.splice(index,1); 
  }

}

import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTask: string = '';
  editedTask: string = '';
  editingTaskId: number | null = null;
  todos: Todo[] = [];
  showCalculator: boolean = false;
 

  constructor(private router: Router) {}
  

  ngOnInit() {
    this.loadFromLocalStorage();
  }

  addTodo() {
    if (this.newTask.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        task: this.newTask.trim(),
        isCompleted: false
      };
      this.todos.push(newTodo);
      this.newTask = '';
      this.saveToLocalStorage();
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveToLocalStorage();
  }

  toggleComplete(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.saveToLocalStorage();
  }

  startEdit(todo: Todo) {
    this.editingTaskId = todo.id;
    this.editedTask = todo.task;
  }

  updateTodo() {
    const todo = this.todos.find(t => t.id === this.editingTaskId);
    if (todo && this.editedTask.trim()) {
      todo.task = this.editedTask.trim();
      this.editingTaskId = null;
      this.editedTask = '';
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }
  goToCalculator() {
    this.showCalculator = !this.showCalculator;
  }
  

 
}
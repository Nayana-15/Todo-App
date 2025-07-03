import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'calculator', component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

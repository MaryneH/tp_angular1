import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-recap',
  standalone: true,
  imports: [],
  templateUrl: './todo-recap.component.html',
  styleUrl: './todo-recap.component.scss'
})
export class TodoRecapComponent {
  todoCount: number = 0;
  inProgressCount: number = 0;
  doneCount: number = 0;

  ngOnInit(): void {
    const categories = JSON.parse(localStorage.getItem('categories') || '[]');
    
    if (categories.length > 0) {
      this.todoCount = categories[0]?.taches.length || 0;
      this.inProgressCount = categories[1]?.taches.length || 0;
      this.doneCount = categories[2]?.taches.length || 0;
    }
  }
}

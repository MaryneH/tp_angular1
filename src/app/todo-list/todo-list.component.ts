import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoRecapComponent } from '../todo-recap/todo-recap.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoRecapComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  nomTache: string = '';
  nomCategorie: string = '';

  categories: { nom: string, taches: string[] }[] = [];

  ngOnInit() {
    const categoriesSauvegarde = localStorage.getItem('categories');
    if (categoriesSauvegarde == null) {
      this.reset();
    } else {
      this.categories = JSON.parse(categoriesSauvegarde);
    }
  }

  get todoCount(): number {
    console.log(this.categories[0]?.taches.length)
    return this.categories[0]?.taches.length || 0;
  }

  get inProgressCount(): number {
    return this.categories[1]?.taches.length || 0;
  }

  get doneCount(): number {
    console.log(this.categories[2]?.taches.length);
    return this.categories[2]?.taches.length || 0;
  }

  onClickAjouterTache() {
    if (this.nomTache != '') {
      this.categories[0].taches.push(this.nomTache);
      this.nomTache = '';
      this.sauvegarde();
    }
  }

  reset() {
    this.categories = [
      {
        nom: 'Todo',
        taches: []
      },
      {
        nom: 'In progress',
        taches: []
      },
      {
        nom: 'Done',
        taches: []
      }
    ];

    this.sauvegarde();
  }

  sauvegarde() {
    localStorage.setItem('categories', JSON.stringify(this.categories));
  }

  onClickChangementCategorie(indexCategorie: number, indexTache: number, moins: boolean) {
    const newCategoryIndex = indexCategorie + (moins ? 1 : -1);
  
    if (newCategoryIndex >= 0 && newCategoryIndex < this.categories.length) {
      const tacheToMove = this.categories[indexCategorie].taches[indexTache];
  
      if (tacheToMove) {
        this.categories[newCategoryIndex].taches.push(tacheToMove);
  
        this.categories[indexCategorie].taches.splice(indexTache, 1);
  
        this.sauvegarde();
      }
    }
  }
  

  onClickSupprime(indexCategorie: number, indexTache: number) {
    //on supprime la tache de la catégorie actuelle
    this.categories[indexCategorie].taches.splice(indexTache, 1);

    this.sauvegarde();
  }
}

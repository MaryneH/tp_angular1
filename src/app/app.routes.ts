import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Page404Component } from './page404/page404.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRecapComponent } from './todo-recap/todo-recap.component';


export const routes: Routes = [
    {path: "accueil", component: AccueilComponent},
    {path: "connexion", component: ConnexionComponent},
    {path: "todo-list", component: TodoListComponent},
    {path: "todo-recap", component: TodoRecapComponent},
    {path: "", redirectTo: "accueil", pathMatch: 'full' },
    {path: "**", component: Page404Component}
];

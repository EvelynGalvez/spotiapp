import { Routes }  from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // Al no agregar ruta, redirecciona a home (ruta por defecto)
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // Al agregar cualquier  otra ruta, redirecciona a home
];
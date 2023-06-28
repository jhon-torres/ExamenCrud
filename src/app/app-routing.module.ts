import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-concierto',
    loadChildren: () => import('./crear-concierto/crear-concierto.module').then( m => m.CrearConciertoPageModule)
  },
  {
    path: 'editar-concierto/:id',
    loadChildren: () => import('./editar-concierto/editar-concierto.module').then( m => m.EditarConciertoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

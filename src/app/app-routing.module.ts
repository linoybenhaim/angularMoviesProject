import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfItemsComponent } from './core/list-of-items/list-of-items.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

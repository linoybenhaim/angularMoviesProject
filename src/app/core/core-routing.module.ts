import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component'
import { AboutmeComponent } from './aboutme/aboutme.component'
import { HomeComponent } from './home/home.component'



const mainRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'movies',
        component: ListOfItemsComponent
      },
      {
        path: 'aboutme',
        component: AboutmeComponent
      }

];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }

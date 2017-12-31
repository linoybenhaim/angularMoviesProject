import { ModuleWithProviders,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { DataCenterService } from './services/data-center.service';
import { CoreRoutingModule } from './core-routing.module';
import { MaterialModule } from '../material.module';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    ListOfItemsComponent,
    AboutmeComponent,
    HomeComponent,
  ],
  exports:[
    HeaderComponent,
    ListOfItemsComponent,
    CoreRoutingModule,
    HomeComponent
  ],
  providers: [ DataCenterService ] ,
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        DataCenterService
      ]
    };
}
}

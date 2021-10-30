import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SortSelectMenuComponent } from './sort-select-menu/sort-select-menu.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'sorting', component: SortSelectMenuComponent },
  { path: 'datePicker', component: DatePickerComponent },
  { path: 'tables', component: TablesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

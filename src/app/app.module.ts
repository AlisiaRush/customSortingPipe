import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApiServiceService } from './api-service.service';
import { OrderModule } from 'ngx-order-pipe';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { SortSelectMenuComponent } from './sort-select-menu/sort-select-menu.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    SortSelectMenuComponent,
    HomeComponent,
    DatePickerComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

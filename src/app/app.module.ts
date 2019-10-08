import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { BottomNavComponent } from './layout/bottom-nav/bottom-nav.component';
import { AddCardComponent } from './add-card/add-card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { CardComponent } from './card/card.component';
import { SortComponent } from './sort/sort.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomNavComponent,
    AddCardComponent,
    DisplayCardsComponent,
    CardComponent,
    SortComponent,
  
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

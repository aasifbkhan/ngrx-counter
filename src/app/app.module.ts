import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { CounterOutputComponent } from './components/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter/counter-buttons/counter-buttons.component';
import { counterReducer } from './components/counter/state/counter.reducer';
import { CustomCounterInputComponent } from './components/counter/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { booksReducer } from './components/book-list/state/books.reducer';
import { collectionReducer } from './components/book-list/state/collection.reducer';
import { BookListComponent } from './components/book-list/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-list/book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
    BookListComponent,
    BookCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer, books: booksReducer, collection: collectionReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

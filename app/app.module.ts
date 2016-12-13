// import all required Modules
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// import all required Components
import { AppComponent }  from './app.component';
import { CardComponent } from './card/card.component';

// create Module decorator
@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, CardComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
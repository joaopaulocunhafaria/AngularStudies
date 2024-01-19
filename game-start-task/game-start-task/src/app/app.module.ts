import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameStarterComponent } from './game-starter/game-starter.component';
import { OddComponent } from './odd/odd.component';
import { EveenComponent } from './eveen/eveen.component';
import { GrifComponent } from './grif/grif.component';

@NgModule({
  declarations: [
    AppComponent,
    GameStarterComponent,
    OddComponent,
    EveenComponent,
    GrifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

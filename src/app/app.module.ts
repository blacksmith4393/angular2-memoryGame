import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';

import { TilesService } from './tiles.service';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

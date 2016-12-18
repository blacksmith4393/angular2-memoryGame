import { Component } from '@angular/core';

import { GameboardComponent } from './gameboard/gameboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  shuffle(arr) {
    var m = arr.length, t, i;
    // While there remain elements to shuffle…
    while(m){
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element
      t = arr[m];
      arr[m]=arr[i];
      arr[i] = t;
    }
    return arr;
  }

  //constructor(gameboard: GameboardComponent) {}

  newGame(): void {
    //this.shuffle();
  }
}

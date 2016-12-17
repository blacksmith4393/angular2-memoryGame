import { Injectable } from '@angular/core';

import { Tile } from './tile';

@Injectable()
export class CompareClicksService {

  public clickedTiles: Tile[] = [];

  compareClicks(tile: Tile): void {

    if(!this.clickedTiles[0] || this.clickedTiles[0].id !== tile.id){
      this.clickedTiles.push(tile); // Store clicked in clickedTiles array
    }

    if(this.clickedTiles.length == 2){
      if(this.clickedTiles[0].name !== this.clickedTiles[1].name ) {
        //For loop to hide non-matching tiles
        /*for (var i = 0; i < this.clickedTiles.length; i++){
          this.clickedTiles[i].childNodes[1].classList.remove('show');
        }*/
        // Clear clickedTiles array
        this.clickedTiles = [];
      } else {
        alert("It's a match");
        this.clickedTiles = [];
      }
    }

    console.log(this.clickedTiles);
  }

  constructor() { }

}

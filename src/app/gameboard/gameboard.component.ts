import { Component, OnInit } from '@angular/core';

import {Tile} from '../tile';
import { TilesService } from '../tiles.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  tiles: Tile[];

  getTiles(): void {
    this.tiles = this.tilesService.getTiles();
  }

  clickedTile: Tile;

  onClick(tile: Tile): void {
    this.clickedTile = tile;
  }

  constructor(private tilesService: TilesService) { }

  ngOnInit() {
    this.getTiles();
  }

}

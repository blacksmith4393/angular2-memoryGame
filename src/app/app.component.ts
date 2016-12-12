import { Component } from '@angular/core';

export class Tile {
  id: number;
  name: string;
  class: string;
}

const TILES: Tile[] = [
  { id: 1, name:'android', class: "material-icons md-48"},
  { id: 2, name: 'alarm', class: "material-icons md-48"},
  { id: 3, name: 'cloud', class: "material-icons md-48" },
  { id: 4, name: 'delete', class: "material-icons md-48" },
  { id: 5, name: 'android', class: "material-icons md-48" },
  { id: 6, name: 'alarm', class: "material-icons md-48" },
  { id: 7, name: 'cloud', class: "material-icons md-48" },
  { id: 8, name: 'delete', class: "material-icons md-48"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tiles = TILES;

  selectedTile: Tile;

  onSelect(tile: Tile): void {
    this.selectedTile = tile;
  }

}

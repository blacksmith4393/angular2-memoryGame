import { Injectable } from '@angular/core';

import { Tile } from './tile';

import { TILES } from './tilesList';


@Injectable()
export class TilesService {
  getTiles(): Tile[]{

    return TILES;

  }
  constructor() { }

}

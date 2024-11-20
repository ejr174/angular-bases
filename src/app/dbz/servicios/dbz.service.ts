import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 300,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 950,
    },
  ];

  addCharacter(character: Character): void {

    /*
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    };*/

    //MEJORADO PARA CUANDO SON MUCHAS PROPIEDADES
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  deleteChatacterById (idCharacter: string) {
    this.characters = this.characters.filter( character => character.id !== idCharacter);
  }
}

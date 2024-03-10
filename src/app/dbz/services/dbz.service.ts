import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class DbzService {
  public character: Character[] = [{ id: uuid(), name: 'Kriling', power: 1000 }, { id: uuid(), name: 'Goku', power: 9500 }, { id: uuid(), name: 'Vegeta', power: 7500 }];

  addCharacter(character: Character): void {
    //{...character, id:uuid()} copia el contenido de character y crea un nuevo id, para evitar que no tenga id ya que es opcional
    this.character.push({...character, id:uuid()})
  }

  onDeleteCharacter(indice: number): void {
    this.character.splice(indice, 1);
  }

  deleteChatacterById(id: string): void {
    this.character = this.character.filter( character => character.id !== id);
  }

}

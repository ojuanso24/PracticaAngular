import { Component } from '@angular/core';
import { DbzService } from './../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService:DbzService) {}

  public get character(): Character[]{
    return [...this.dbzService.character]
  }

  public onDeleteCharacter(id: string) :void{
    this.dbzService.deleteChatacterById(id);
  }

  public onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }

}

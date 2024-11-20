import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() // Propiedad que quiero recibir desde el mundo exterior.
  public characterList: Character[] = [{
    name : 'Trunks',
    power : 10
  }]

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(idCharacter? : string):void {

    if ( !idCharacter ) return

     this.onDeleteId.emit(idCharacter);
  }

}

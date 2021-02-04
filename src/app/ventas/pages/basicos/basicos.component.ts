import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'enric';
  nombreUpper: string = 'ENRIC';
  nombreCompleto: string = 'eNriC sArRadEll';


  fecha: Date = new Date(); // el día de hoy

}

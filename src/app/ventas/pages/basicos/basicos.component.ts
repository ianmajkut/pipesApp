import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'tu nombre';
  nombreUpper: string = 'TU NOMBRE';
  nombreCompleto: string = 'Tu noMbrE';

  fecha: Date = new Date(); //dia actual
 
}

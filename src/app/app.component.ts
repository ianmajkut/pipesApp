import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre: string = 'tU NomBre';
  valor: number = 1000;
  obj = {
    nombre: 'Nombre'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

}

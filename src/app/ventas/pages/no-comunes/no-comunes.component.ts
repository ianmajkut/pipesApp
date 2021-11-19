import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes:string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  constructor() { }

  cambiarCliente(){
    this.nombre = 'Juan';
    this.genero = 'masculino';
  }

  borrarCliente(){
    //console.log(`Array original: ${this.clientes}`)
    this.clientes.pop();
    //console.log(this.clientes);
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Sergio',
    edad: 35,
    direccion: 'Barrio Norte'
  }

  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: true
    }
  ]

  //Async Pipe
  miObservable = interval(1000); 
  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  })

}

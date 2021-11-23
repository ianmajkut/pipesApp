# PipesApp

Proyecto desarrollado en Angular para poner en práctica el uso de los [pipes](https://angular.io/api?query=pipe), utilizando los componentes de [PrimeNG](https://www.primefaces.org/primeng/showcase/#/setup). Para ver el proyecto final haga [click acá](https://modest-minsky-01b0a4.netlify.app/).

## PrimeNG

Para empezar a utilizarlo, visitar el link de la documentación adjuntada al inicio. Para el proyecto se creó un módulo específico para importar los componentes (dentro de `app\prime-ng\prime-ng.module.ts`)

```ts
// Importamos componentes de PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

//Exportamos los componentes a utilizar
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
  ],
})
```

Dentro de `ventas\ventas.module.ts` importamos `PrimeNgModule` y luego importamos el `ventas.module.ts` dentro de `app.module.ts` para poder utilizarlo e implementarlo.

Nota: es importante importar `import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';` dentro de `app.module.ts` y luego importarlas en el `@NgModule`

## Textos y Fechas

![pipesTextosYFechas](https://github.com/ianmajkut/pipesApp/blob/main/src/pipesAppImgGif/pipesTextosYFechas.png)

En esta sección es importante que importemos los "locale" que queramos. En la aplicación se definió "localEsAr" que proviene de `'@angular/common/locales/es-AR';` y "localeFr" de `'@angular/common/locales/fr';`. Luego debemos registrarlos de la siguiente manera `registerLocaleData(localeName);`. En mi caso sería `registerLocaleData(localeEsAr);
registerLocaleData(localeFr);`. Como en mi caso quiero que se use el es-AR de manera global, hay que definirlo dentro de `app.module.ts` en los providers.

```ts
...
providers: [
    //Definimos de manera global 'es-AR'
    {provide: LOCALE_ID, useValue: 'es-AR'}
  ],
...
```

## Números

![pipesNumeros](https://github.com/ianmajkut/pipesApp/blob/main/src/pipesAppImgGif/pipesNumeros.png)

En los pipes utilizados en esta sección se usa `digitisInfo`, que tiene el siguiente formato

```ts
{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
```

minIntegerDigits : el número mínimo de dígitos enteros antes del punto decimal. El valor predeterminado es 1.

minFractionDigits : el número mínimo de dígitos después del punto decimal. El valor predeterminado es 0.

maxFractionDigits : el número máximo de dígitos después del punto decimal. El valor predeterminado es 3.

## No comunes

![pipesNoComunes](https://github.com/ianmajkut/pipesApp/blob/main/src/pipesAppImgGif/pipesNoComunes.png)

### I18nSelectPipe

```ts
//i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }
...
cambiarCliente(){
    this.nombre = 'Juan';
    this.genero = 'masculino';
  }
```

Dependiendo del valor del `genero` va a variar si es "invitarlo" o "invitarla". Para corroborar el cambio se definió la función `cambiarCliente()` que cambia el `nombre` y el `genero` 

### I18nPluralPipe

```ts
//i18nPlural
  clientes:string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
...
borrarCliente(){
   
    this.clientes.pop();

  }
```

Dependiendo del tamaño de `clientes` va a variar el texto. Si el `clientes.length` es 0 se usará "no tenemos ningún cliente esperando", si es 1 "tenemos un cliente esperando", etc. Para ver el funcionamiento se definió la función `borrarCliente()` que elimina el último elemento de `clientes`

### SlicePipe

Utilizando el mismo array `clientes`, usamos el `SlicePipe` (`slice: x:yslice: x:y`) donde "x" inidica la posición inicial e "y" indica la posición final, excluyendo al mismo.
Recordar que como es el posicionamiento en los arrays

```ts
clientes:string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando']
                     //0         1       2         3          4
```

### JsonPipe

Convierte un objeto a formato JSON

### KeyValuePipe

Convierte un objeto o map a un array de key-value

### Async Pipe

Este pipe sirve para suscribirnos a un `Observable` o `Promise` y devuelve el último valor emitido

## Pipes Personalizados

![pipesPersonalizados](https://github.com/ianmajkut/pipesApp/blob/main/src/pipesAppImgGif/pipesPersonalizados.png)

Para generar pipes podemos usar el Angular CLI escribiendo `ng g p pipeName`. En mi caso hice 3 pipes y se encuentran dentro de la carpeta `pipes`. Es importante destacar que los pipes hay que declararlos dentro de su correspondiente módulo, en mi caso, `ventas.module.ts`. Para entender mejor la creación y funcionamiento de los pipes puede ver la [documentación](https://angular.io/guide/pipes#creating-pipes-for-custom-data-transformations).

![pipesPersonalizadosGif](https://github.com/ianmajkut/pipesApp/blob/main/src/pipesAppImgGif/pipesPersonalizadosGif.gif)

### Mayúsculas Pipe 

Al hacer click en "Toggle mayusculas" llama al método cambiar() que cambia la variable boolean `enMayusculas`. Luego al implementar el pipe pasamos `enMayusculas` como parámetro: `{{'nosotros' | mayusculas: enMayusculas}}`.

```ts
export class MayusculasPipe implements PipeTransform{
    
    transform(valor: string, enMayusculas: boolean = true): string {
        //Si enMayusculas es true pone el valor en mayúsculas, sino en minúsculas
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }
}
```

### Vuela Pipe

En `ordenar.component.ts` definimos un objecto heroes

```ts
heroes: Heroe[] = [
    {
      nombre : 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre : 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre : 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre : 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre : 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]
```

Nota: en `interfaces\ventas.interface.ts` se definió la interface `Heroe`

Dentro de la tabla en `ordenar.component.html` implementamos el pipe

```
 <td>{{heroe.vuela | vuela | titlecase}}</td>
```

Y lo que hace el `vuela.pipe.ts` es lo siguiente: 

```ts
export class VuelaPipe implements PipeTransform {
    transform(value: boolean): string {
    //Si el valor es true devuelve "si, vuela", sino "no, no vuela"
        return (value) ? "si, vuela" : "no, no vuela";
    }
}
```

### Ordenar Pipe 

Este pipe lo que nos permite es ordenar según el botón al que se le haga click utilizando el método [sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```
 <button pButton type="button" icon="pi pi-sort" label="Por nombre" (click)="cambiarOrden('nombre')" class="mr-1"></button>
 <button pButton type="button" icon="pi pi-sort" label="Vuela" (click)="cambiarOrden('vuela')" class="mr-1 p-button-success"></button>
 <button pButton type="button" icon="pi pi-sort" label="Por color" (click)="cambiarOrden('color')" class="mr-1 p-button-help"></button>
```

Dependiendo qué botón apretemos, va a enviar un cierto string al método  `cambiarOrden(valor: string)` y le asigna a la variable `odenarPor` el `valor` 

```
<p-table [value]="heroes | ordenar: ordenarPor">
```

Al implementar el pipe `ordenar` le pasamos como parámetro `ordenarPor` y el pipe hace un switch de ese valor y dependiendo cuál sea el valor del string ordena por campo

```ts
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderPor: string = 'sin valor'): Heroe[] {

    switch(orderPor){
      case 'nombre':
        return heroes.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'vuela':
        return heroes.sort((a,b) => (a.vuela > b.vuela) ? 1 : -1);
      case 'color':
        return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);
      default:
        return heroes;
    }
  }
}
```

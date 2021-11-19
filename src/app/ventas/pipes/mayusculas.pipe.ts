import { Pipe, PipeTransform } from "@angular/core";

//Decorador para indicar que es un pipe
@Pipe({
    name: 'mayusculas',
})

//Todos los pipes deben implementar PipeTransform
export class MayusculasPipe implements PipeTransform{
    
    transform(valor: string, enMayusculas: boolean = true): string {

        // if(enMayusculas){
        //     return valor.toUpperCase();
        // }else{
        //     return valor.toLowerCase();
        // }
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }

}
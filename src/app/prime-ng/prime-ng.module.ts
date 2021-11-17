import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroImagenPipe } from './filtro-imagen.pipe';
import { GeneroPipe } from './genero.pipe';

@NgModule({
  declarations: [
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe,
    GeneroPipe
  ],
  exports: [
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe,
    GeneroPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

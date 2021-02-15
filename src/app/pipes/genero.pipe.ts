import { Pipe, PipeTransform } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
 
@Pipe({
  name: 'genero'
})
 
export class GeneroPipe implements PipeTransform {
 
  transform( peliculas: PeliculaDetalle[], genero: Genre ): PeliculaDetalle[] {
    const pelisFiltradas: PeliculaDetalle[] = [];
    for ( const peli of peliculas ) {
      for ( const gene of peli.genres ) {
        if ( gene.id === genero.id ) {
          pelisFiltradas.push(peli);
        }
      }
    }
    return pelisFiltradas;
  }
 
}

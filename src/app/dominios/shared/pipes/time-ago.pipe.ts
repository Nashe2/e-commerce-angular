import { Pipe, PipeTransform } from '@angular/core';
/* Importo la libreria formatDistance, automaticamente se importa el path  */
import { FormatDistanceFn, formatDistance } from 'date-fns';
import { format } from 'path';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string) : string {
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today,date);
  }
/*
- Recibo u string y devuelve un string
- Convertir ese string en fecha y crearlo desde ese value
- Metodo para nueva fecha
- A la fecha nueva le pasare la fecha actual para que transforme el string
- Posteriormente retorno ese value con formatDistance */
}

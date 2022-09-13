import { Component } from '@angular/core';
import { Alumno } from './modelo/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listaAlum: Array<Alumno> = [];

  public agregarAlum(asd: Alumno): void{
    this.listaAlum.push(asd)
  }
}

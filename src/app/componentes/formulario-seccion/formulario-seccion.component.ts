import { Component, Output, EventEmitter} from '@angular/core';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent{
  @Output() public salidaSeccion = new EventEmitter<Seccion>();


  public nuevaSeccion: Seccion= {
    id_sec: 0,
    nombre_sec: ''
  }
  public alumSeccion(event: Event): void{
    const variable = event.target as HTMLInputElement;
    this.nuevaSeccion.nombre_sec = variable.value;

  }
  public guardarSeccion(): void {
    const r1: Seccion= {
      ...this.nuevaSeccion
    }
    this.salidaSeccion.emit(r1)
    this.nuevaSeccion.nombre_sec= '';
  }

}

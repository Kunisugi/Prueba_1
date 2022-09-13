import { Component, Output, EventEmitter} from '@angular/core';
import { Alumno } from 'src/app/modelo/alumno';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent{
@Output() public salidaAlum = new EventEmitter<Alumno>();
public Aseccion: Array<Seccion>=[];
public registrarAlum: Alumno = {
  rut: '',
  nombre: '',
  apellido: '',
  edad: 0,
  seccion: { id_sec: 0,
    nombre_sec: ''
  }

}
public rutAlum(event: Event){
const variable = event.target as HTMLInputElement;
this.registrarAlum.rut = variable.value;
}
public nombreAlum(event: Event){
  const variable = event.target as HTMLInputElement;
  this.registrarAlum.nombre = variable.value;
}
public apellidoAlum(event: Event){
  const variable = event.target as HTMLInputElement;
  this.registrarAlum.apellido = variable.value;
}

public edadAlum(event: Event){
  const variable = event.target as HTMLInputElement;
  this.registrarAlum.edad = Number.parseInt(variable.value) ||0;
}

public registrarAlumno(): void{
  const r1: Alumno = {
    ...this.registrarAlum
  }
  this.salidaAlum.emit(r1);
  this.registrarAlum.rut = '',
  this.registrarAlum.nombre = '',
  this.registrarAlum.apellido = '',
  this.registrarAlum.edad = 0,
  this.registrarAlum.seccion = { id_sec: 0, nombre_sec: ''}
  console.log(r1)
}
public agregarSeccion(seccion : Seccion): void{
const id: number = this.Aseccion.length + 1;
seccion.id_sec = id;
this.Aseccion.push(seccion)
}


}

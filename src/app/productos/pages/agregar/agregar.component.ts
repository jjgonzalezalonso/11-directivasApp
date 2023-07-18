import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  constructor(private fb: FormBuilder) { }

  texto1: string='Fernando Herrera';
  color: string='red';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required ]
  });

   cambiarNombre(){
    this.texto1=Math.random().toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color=color;
  }

  tieneError( campo: string ): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

}

import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement:ElementRef<HTMLElement>;
  @Input() color: string='red';
  @Input() mensaje: string='Este campo es necesario';

  constructor(private el:ElementRef<HTMLElement>) { 
    this.htmlElement=el;
    console.log("constructor");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["mensaje"]){
      const Mimensaje=changes['mensaje']?.currentValue;
      //const mensaje=changes["mensaje"]?.currentValue; // FUNCIONA
      //console.log(mensaje);
      this.htmlElement.nativeElement.innerText=Mimensaje;
    }
    if (changes["color"]){
      const Micolor=changes['color']?.currentValue;
      //const mensaje=changes["mensaje"]?.currentValue; // FUNCIONA
      //console.log(mensaje);
      this.htmlElement.nativeElement.style.color=Micolor;
    }
}

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color=this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerText=this.mensaje;
  }

}

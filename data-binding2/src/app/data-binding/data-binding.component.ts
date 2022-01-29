import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com.br';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/400/200';

  valorAtual: string = '';
  valorSalvo: any = '';

  isMouseOver: boolean = false;

  nome: string = 'abc' ;

  salvarValor(valor: any){
    this.valorSalvo = valor.value;
    console.log(this.valorSalvo);
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  getValor(){
    return 1;
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> evento.target).value;

  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

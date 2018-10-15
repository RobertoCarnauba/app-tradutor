import { Component,OnChanges, OnInit, Input } from '@angular/core';

import { Coracao } from './../shared/coracao.model';



@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string ='/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'

  @Input() public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]

  constructor() {
    
   }

   ngOnChanges() {
    
    if(this.tentativas !== this.coracoes.length){
      //varaivel para alterar o indice do array
      let indice = this.coracoes.length - this.tentativas

      //altera o array alterando a imagem(coração cheio coração vazio)
      this.coracoes[indice - 1].cheio = false
    }

    console.log('Tentativas', this.tentativas)
   }

  ngOnInit() {
    
  }

}

import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from './../shared/frases.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

   
  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza para o Português: "
  public resposta: string = ''
  

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 3

  @Output() public ecerrarJogo: EventEmitter<string> = new EventEmitter()
  


  constructor() { 
    this.atulaizaRoda()
    
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
   
  }

  ngOnDestroy() {
    
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public veriifcarResposta(): void{

    if(this.rodadaFrase.frasePtbr == this.resposta){
      

      //Troca as Frases a serem traduzidas
      this.rodada++

      //Altera barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      // console.log(this.progresso)
      
      //Chama a função atualizarRodada
      this.atulaizaRoda()
      console.log(this.rodadaFrase)

      if(this.rodada === 4){
        this.ecerrarJogo.emit('Vitoria')
        //alert("Você comcluiu a tarefa Parabens!")
      }
     
    }
    else {
      // Decrementa a varaivel tentavias
      this.tentativas--
      //Verifica se ainda há tentativas
      if(this.tentativas === -1){
        this.ecerrarJogo.emit('Derrota')
         //alert("Se fodeu!!! :S")
      }
      
    }

    
    
  }

  

  public atulaizaRoda(): void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}

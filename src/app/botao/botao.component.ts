import { Component, Output, EventEmitter, Input } from "@angular/core";


@Component({
    selector: 'app-botao',
    templateUrl:'./botao.component.html'
})
export class BotaoComponent {
   
   @Output ()
   clickBotao = new EventEmitter()
   @Output()
   botaoMouseOver = new EventEmitter()

   @Input()
   conteudo :string;
   @Input()
   corFundo :string;
   @Input()
   tamanho :string;
   @Input()
   altura :string;
   
    botaoClick(): void{
        console.log('BotaoComponent -> botaoClick')
        this.clickBotao.emit();
    }
    mouseOver(): void{
        console.log('BotaoComponent -> mouseOver')
        this.botaoMouseOver.emit();
    }
 }
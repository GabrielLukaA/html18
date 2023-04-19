import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula1804';

appBotaoClick(): void {
console.log('appComponent -> appBotaoClick')
}

mouseOverBotao(){
  console.log('appComponent -> mouseOverBotao')
}
}

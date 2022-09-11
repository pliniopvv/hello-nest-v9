import { ClientDTO } from './../dto/client';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() client: ClientDTO;
  @Output() btnEnviar = new EventEmitter();

  _mensagens: string = "Entrou no chat ...";
  mensagens: string[] = ["Entrou no chat ..."];

  entrada: string = '';

  constructor() { }

  ngOnInit(): void {
    this.mensagens = this.client.mensagens;
  }

  enviarMensagem() {
    this.addMensagem(this.entrada);
    this.entrada = "";
    this.btnEnviar.emit(this.entrada);
  }

  // FUNÇÕES DE USO INTERNO:
  addMensagem(msg: string) {
    this.mensagens.push(msg);
    this._mensagens = this.mensagens.join("<br>");
  }

  checkEnter(ev: KeyboardEvent) {
    // console.log(`Evento:`,ev);
    if (ev.key == 'Enter')
      this.enviarMensagem();
  }
}

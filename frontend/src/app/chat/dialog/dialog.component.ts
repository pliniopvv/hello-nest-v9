import { ClientDTO } from './../dto/client';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() client: ClientDTO;
  @Input() mensagens: string;
  @Output() btnEnviar = new EventEmitter();

  entrada: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensagem() {
    this.btnEnviar.emit(this.entrada);
    this.entrada = "";
  }

  checkEnter(ev: KeyboardEvent) {
    if (ev.key == 'Enter')
      this.enviarMensagem();
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientDTO } from './dto/client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  client: ClientDTO;

  constructor() { }

  ngOnInit(): void {
  }

  msgEnviada(mensagem: string) {
    this.client.mensagens.push(mensagem);
  }
}

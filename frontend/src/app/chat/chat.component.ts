import { Component, OnInit } from '@angular/core';
import { ClientDTO } from './dto/client';
import io from 'socket.io-client';
import { Mensagem } from './dto/mensagem';

const socket = io('http://localhost:3333');

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  client: ClientDTO;
  mensagens: string;

  constructor() { }

  ngOnInit(): void {
    this.client = new ClientDTO();
    socket.on('msgToClient', (payload) => {
      console.log(payload);
      this.receberMensagem(payload);
    });
    this.displayMensagem("Entrou no chat ...");
  }

  receberMensagem(mensagem: string) {
    this.displayMensagem(mensagem);
  }

  onMsgEnviada(mensagem: string) {
    let m = new Mensagem();
    m.data = new Date();
    m.mensagem = mensagem;
    socket.emit('msgToServer', mensagem);
  }








  displayMensagem(_mensagem: string) {
    let m = new Mensagem();
    m.data = new Date();
    m.mensagem = _mensagem;
    this.client.mensagens.push(m);
    let msg: string[] = [];
    this.client.mensagens.forEach(m => msg.push(m.data.toTimeString().substr(0,8) + ' - ' +  m.mensagem));
    this.mensagens = msg.join("<br>");
  }
}

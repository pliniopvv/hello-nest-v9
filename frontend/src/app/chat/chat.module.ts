import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { DialogComponent } from './dialog/dialog.component';
import { ChatRoutingModule } from './chat-routing.module';



@NgModule({
  declarations: [
    ChatComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }

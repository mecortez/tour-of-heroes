import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(public _messageService: MessageService) /**
      The messageService property must be public because you're going to bind to it in the template.
      Angular only binds to public component properties.
    **/
  {}

  ngOnInit(): void {}
}

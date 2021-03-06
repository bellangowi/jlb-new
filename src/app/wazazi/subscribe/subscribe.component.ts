import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Subscribers } from '../../subscribers';
import { SubscribersService } from '../../core/subscribers.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor( private subscribersService: SubscribersService ) { }
  subscriber = new Subscribers();
  subscribers:Subscribers[];

  @Output() myevent = new EventEmitter();
  @Output() myEvent = new EventEmitter();

  onClick(button){
       this.myEvent.emit(button);
  }

  onClick1(button){
       this.myevent.emit(button);
  }


  add():void {
    
    if (!this.subscriber.phone_number) { return; }
    this.subscribersService.create(this.subscriber) 
    .then(subscriber => {
    this.subscribers.push(subscriber);
                });
  
            }

  ngOnInit() { }
  
}

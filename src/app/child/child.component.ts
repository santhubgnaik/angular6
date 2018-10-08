import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {
chaildMessage = 'Message From Child Component Hello  - CHILD';


  // @Input() childComponentMessage: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }
  sendMessage() {
    // alert('am child message' + this.chaildMessage);
    this.messageEvent.emit(this.chaildMessage);
  }

  // ngOnInit() {
  // }

}

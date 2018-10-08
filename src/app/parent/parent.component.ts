import { ChildComponent } from './../child/child.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent  {
  parentMessage = 'Message From Parent Componet ';

  chaildMessage: string;

  @ViewChild(ChildComponent) child;

  constructor() { }
  // chaildMessage: string;

  reciveMessage($event) {
    // this.chaildMessage = $event;
    this.chaildMessage = $event;
  }

  // ngAfterViewInit() {
  //   this.chaildMessage = this.child.chaildMessage;
  // }

}

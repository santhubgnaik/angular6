import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  public pageName = 'interpolation component';
  public siteUrl = window.location.href;
  public clickEventDatabinding = '';
  // public clickCapture = '';
  constructor() { }

  ngOnInit() {
  }

  sampleExample() {
    return 'Hello ' + this.pageName;
  }

  // Event Binding

  clickEvent() {
    console.log('interpolation component');
    this.clickEventDatabinding = 'interpolation component';
  }
  clickCapture(event) {
    console.log(event);
    this.clickEventDatabinding = event.type;
  }

  // template referance variables
  logMessage(value) {
    console.log(value);
  }
}

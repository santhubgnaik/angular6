import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.scss']
})
export class TwowaydatabindingComponent implements OnInit {
  public titleOfTwayDatabinding = 'Two way data binding ';
  public myId = 'testId';

  public isDisabled = 'false';
  // public isDisabled = 'true';
  public successClass = 'text-success';

  public myName = '';

  constructor() { }

  ngOnInit() {
  }

}

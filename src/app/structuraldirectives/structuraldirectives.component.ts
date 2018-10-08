import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.scss']
})
export class StructuraldirectivesComponent implements OnInit {
  public structuraldirectives = 'structuraldirectives';
  public displaystructuraldirectives = true;
  public hidestructuraldirectives = false;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.scss']
})
export class LazyloadingComponent implements OnInit {
  public lazyloadingHeader = 'Lazy Loading ';
  constructor() { }

  ngOnInit() {
  }

}

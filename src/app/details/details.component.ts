import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { DataService } from './../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {

     this.route.params.subscribe( params => this.user$ = params.id );
     console.log('user$....' + this.user$);
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    );
    console.log('user$....' + this.user$ + this.data);
  }


}

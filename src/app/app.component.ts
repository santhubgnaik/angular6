import { Component, OnInit} from '@angular/core';
import { NavigationService } from './navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navigation$: Object;
  // public siteUrl = window.location.href; getting the page url

  constructor(private navigationdata: NavigationService) { }


  ngOnInit() {
    this.navigationdata.getNavigation().subscribe(navigationdata => {
      this.navigation$ = navigationdata;
      console.log('navigationdata.....', navigationdata);

    });


}
}

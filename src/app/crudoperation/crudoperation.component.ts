import { CrudupdateproductComponent } from './../crudupdateproduct/crudupdateproduct.component';
import { CrudaddproductComponent } from './../crudaddproduct/crudaddproduct.component';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
// import 'rxjs/add/operator/toPromise';
import 'rxjs';

const routes: Routes = [

  {
    path: 'product',
    component: CrudaddproductComponent
  },
  {
    path: 'updateProduct',
    component: CrudupdateproductComponent
  }


];

@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.scss']
})
export class CrudoperationComponent implements OnInit {
  public crudAppHeader = 'Create Update Delete ';

  constructor(private http: Http) { }

  id: number;
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  products = [];

  fetechData = function() {
    this.http.get('http://localhost:3000/products').subscribe(
        (res: Response) => {
          this.products = res.json();
          console.log('sssssssssss.............', res.json());
        }
      );
  };

  deleteProducts = function(id) {
    if (confirm('Are You Sure ?')) {
      const url = `${'http://localhost:3000/products'}/${id}`;
      // once delete the date reload and test the data
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.featchData();
      });
    }
    // alert('am delete btn');
  };

  ngOnInit() {
    this.fetechData();
    // this.deleteProducts();
    // this.http.get('http://localhost:3000/products').subscribe(res => {
    //   this.products = res.json();
    // });
  }


}

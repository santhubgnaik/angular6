import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-crudaddproduct',
  templateUrl: './crudaddproduct.component.html',
  styleUrls: ['./crudaddproduct.component.scss']
})
export class CrudaddproductComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString: string  = 'New Product has been added';
  isAdded: boolean = false;
  productObj: object = [];

  addNewProduct = function(product) {
    this.productObj = {
      'name': product.name,
      'color': product.color
    };
    this.http.post('http://localhost:3000/products/', this.productObj).subscribe((res: Response) =>  {
      this.isAdded = true;
      console.log('res....' + res);
    });

  };
  ngOnInit() {
  }

}

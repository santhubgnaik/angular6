import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs';

@Component({
  selector: 'app-crudupdateproduct',
  templateUrl: './crudupdateproduct.component.html',
  styleUrls: ['./crudupdateproduct.component.scss']
})
export class CrudupdateproductComponent implements OnInit {

  id: number;
  data: object = {};
  products = [];
  exist = false;
  productObj: object = {};
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  updateProduct(product) {
    this.productObj = {
      'name': product.name,
      'color': product.color
    };
    const url = `${'http://localhost:3000/products'}/${this.id}`;
    this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers})
    .toPromise()
    .then(() => {
      this.router.navigate(['/crud']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get('http://localhost:3000/products').subscribe(
        (res: Response) => {
          this.products = res.json();
          console.log('sssssssssss.............', res.json());
          for (let i = 0; i < this.products.length; i++) {
            if (parseInt(this.products[i].id) === this.id) {
              this.exist = true;
              this.data = this.products[i];
              break;
            } else {
              this.exist = false;
            }
          }
        }
      );
  }

}

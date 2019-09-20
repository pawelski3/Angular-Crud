import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product, IProduct } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Observable<Product[]> = null;
  constructor(
    private router: Router,
    private productservice: ProductService) { }



  ngOnInit() {
    this.products = this.productservice.getAllProducts();

  }

  deleteProduct(product): void {
    this.productservice.deleteProduct(product);
  }

  viewProduct(product:IProduct):void{
    this.router.navigate(['products/view/'+product.id]);
  }

}

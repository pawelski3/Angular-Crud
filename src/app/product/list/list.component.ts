import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Observable<Product[]> = null;
  constructor(private productservice: ProductService) { }



  ngOnInit() {
    this.products = this.productservice.getAllProducts();

  }

  deleteProduct(product):void{
    this.productservice.deleteProduct(product);
  }


}

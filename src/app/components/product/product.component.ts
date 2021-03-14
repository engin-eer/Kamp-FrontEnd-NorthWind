import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
 

  products:Product[] =[];
  dataLoaded=false;
  //a
  constructor(private productServise:ProductService) { }

  ngOnInit(): void { 
    this.getProducts();
  }
  
  getProducts(){
    this.productServise.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded=true;
    })
    
  }
}
  

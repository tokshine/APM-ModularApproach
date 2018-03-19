import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { productService } from './product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
 
})
export class ProductListComponent implements OnInit {

  pageTitle:string='Product List';
  showImage:boolean=false;
  imageWidth:number=50;
  imageMargin:number=2;
  _listFilter:string;
  filteredProduct:IProduct[];
  errorMessage:string;
  products:IProduct[]
  // products:IProduct[]= [
    // {
    //     "productId": 1,
    //     "productName": "Leaf Rake",
    //     "productCode": "GDN-0011",
    //     "releaseDate": "March 19, 2016",
    //     "description": "Leaf rake with 48-inch wooden handle.",
    //     "price": 19.95,
    //     "starRating": 3.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // },
    // {
    //     "productId": 2,
    //     "productName": "Garden Cart",
    //     "productCode": "GDN-0023",
    //     "releaseDate": "March 18, 2016",
    //     "description": "15 gallon capacity rolling garden cart",
    //     "price": 32.99,
    //     "starRating": 4.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    // }];
  constructor(private _productService:productService) {   
   
    
  }
                                                
  ngOnInit() {
     this._productService.getProducts().
     subscribe(p=> {this.products= p;
      this.filteredProduct = this.products;
     },
      errors=>this.errorMessage = <any>errors);
    
     //i want to see all products ,removed filter
    //this.listFilter='cart';
    
  }

  toggleImage() {
    this.showImage = ! this.showImage;
  }
//getter property
  get listFilter(){
    return this._listFilter;
  }
  //setter property
  set listFilter(value:string) {
    
    this._listFilter=value;
   
    this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter):this.products;
  }

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClick(message):void {
    this.pageTitle = 'Product List' + message;
  }
}

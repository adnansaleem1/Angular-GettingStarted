import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',

})
export class ProductListComponent implements OnInit {


    _listFilter: string = '';
    FilterList: IProduct[]=[];
    set listFilter(value: string) {
        this._listFilter = value;
        this.FilterList = this._listFilter ? this.performFilter(value) : this.products;
    }
    pageTitle: string = 'Product List';
    showImage: boolean = true;
    products: IProduct[]=[] ;
    imageWidth: number = 30;
    imageMargin: number = 30;
    constructor(private _productService:ProductService) {
        
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._productService.getProducts().subscribe(data=>this.FilterList=this.products= data);
        this.FilterList = this.products;
        console.log('In it Done');
    }
    fromChild(text: string): void {
        console.log(text);
    }
    performFilter(filter: string): IProduct[] {
        filter = filter.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) != -1);
    }
}

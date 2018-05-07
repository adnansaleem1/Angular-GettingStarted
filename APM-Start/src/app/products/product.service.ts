import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class ProductService {
    handleError(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    private _productUrl:string='./api/products/products.json';
    constructor(private _http: HttpClient){
    }
    getProducts():Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }
}
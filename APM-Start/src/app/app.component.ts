import {Component} from '@angular/core'
import { templateSourceUrl } from '@angular/compiler';
import { ProductService } from './products/product.service';

@Component({
  selector:'pm-root',
  templateUrl:'./app.component.html',
  providers:[ProductService],
})
export class AppComponent{
MyTitle:string ="This is Test Component";
}
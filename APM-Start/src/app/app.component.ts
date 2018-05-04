import {Component} from '@angular/core'
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector:'pm-root',
  templateUrl:'./app.component.html',
})
export class AppComponent{
MyTitle:string ="This is Test Component";
}
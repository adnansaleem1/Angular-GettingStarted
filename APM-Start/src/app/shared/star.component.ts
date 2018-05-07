import { OnChanges, Component, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector:"pm-star",
    templateUrl:'./star.component.html',
})
export class StarComponent implements OnChanges {
    @Input() rating:number;
    starWidth:number;
    @Output() notify : EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth=this.rating*86/5;
    }
    onClick(): void{
        this.notify.emit('This is Test Sending');
    //console.log("MainLcik");
    }
}
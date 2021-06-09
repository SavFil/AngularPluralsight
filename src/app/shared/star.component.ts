import { Component, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(changes: SimpleChanges): void {
        let starWidth = 15;
        this.cropWidth = this.rating * starWidth;
    }
}
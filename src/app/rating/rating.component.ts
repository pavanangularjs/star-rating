import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rate ;
  @Input() edit;
  @Output() rated = new EventEmitter<number>();

  starList: any;

  ngOnInit() {
    this.setStar(this.rate);
  }

  setStar(rate: number) {
    this.rated.emit(rate);
    this.starList = [0, 0, 0, 0, 0];

    for(let i=0; i<rate; i++) {
      this.starList[i] = 1;
    }

    if(!Number.isInteger(rate)) {
      this.starList[Math.floor(rate)] = 0.5;
    }
  }

}

import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() carInfo!: Car;
  @Output() delete = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }
  onBuy() { 
    this.carInfo.isSold = true
  }
  onDelete(id?:number) {
    this.delete.emit(id)
  }

}

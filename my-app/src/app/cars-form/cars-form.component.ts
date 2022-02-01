import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Car } from "../car.model";
import * as moment from "moment";


@Component({
    selector: "app-cars-form",
    templateUrl: "./cars-form.component.html",
    styleUrls: ["./cars-form.component.scss"],
})
export class CarsFormComponent implements OnInit {
    carName = "";
    carModel = "";
    id = 2;
   @Output() addCar = new EventEmitter<Car>();
    constructor() {}

  ngOnInit(): void { }
  
  onAdd() {
        if (this.carModel === "" || this.carName === "") {
            return;
        }
        this.id += 1;
        const car = new Car(
            this.carName,
            moment().format("DD.MM.YY"),
            this.carModel,
            false,
            this.id
        );
      this.addCar.emit(car);
      this.carModel=this.carName= ""
    }
    onLoad() {}
}

import { Component } from "@angular/core";
import { Car, Cars } from "./car.model";
import { CarComponent } from "./car/car.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  cars: Car[] = [new Car("Ford", "11.11.11", "Focus", false, 1), new Car("Audi", "12.12.12", "A4", false, 2)];
  
  addCarHadler(car: any) {
    this.cars.unshift(car)
    console.log(car)
  }
  onDeleteCar(id:number) {
   this.cars= this.cars.filter(car=> car.id!=id)
  }
}

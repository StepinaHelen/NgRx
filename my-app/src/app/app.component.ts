import { Component } from "@angular/core";
import { Car, Cars } from "./car.model";
import { CarComponent } from "./car/car.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    cars: Car[] = [];

    addCarHadler(car: any) {
        this.cars.unshift(car);
        console.log(car);
    }
    onDeleteCar(id: number) {
        this.cars = this.cars.filter((car) => car.id != id);
    }
}

import { Action } from "@ngrx/store";
import { Car } from "../car.model";

export const intialState = [
    new Car("Ford", "11.11.11", "Focus", false, 1),
    new Car("Audi", "12.12.12", "A4", false, 2),
];
export function carsReducer(state = intialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}

// export interface Car {
//     name: string
//     date: string
//     model: string
//     isSold: boolean
//     id?:number
// }



export class Car {
    constructor(
        public name: string,
        public date: string,
        public model: string,
        public isSold: boolean = false,
        public id?: number
    ) {}
}

export interface Cars {
    cars: Car[];
}
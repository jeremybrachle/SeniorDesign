export class Car {
    constructor(
        public name: string,
        public pricePerDay: number,
        public defaultImg: string,
        public milesIncluded: number,
        public additionalMileage: number,
        public securityDeposit: number
    ) { }
}

export class Car {
    constructor(
        public name: string,
        public pricePerDay: number,
        public defaultImg: string,
        public milesIncluded: number,
        public additionalMileage: number,
        public securityDeposit: number,
        public pickupTime: Date,
        public pickupLocation: string,
        public dropoffTime: Date,
        public dropoffLocation: string
    ) { }
}

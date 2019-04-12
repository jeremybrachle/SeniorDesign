export class Car {
    constructor(
        public name: string,
        public price: number,
        public defaultImg: string,
        public allImgArray: Array<string>,
        public pickupTime: Date,
        public pickupLocation: string,
        public dropoffTime: Date,
        public dropoffLocation: string
    ) { }
}

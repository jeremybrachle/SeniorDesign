import { Order } from './order-model';

export class User {
    constructor(
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public phone: number,
        public dob: Date,
        public address: string,
        public city: string,
        public state: string,
        public zip: number,
        public cardType: string,
        public cardNumber: number,
        public csv: number,
        public cardHolder: string,
        public expMonth: string,
        public expYear: number,
        public billingAddress: string,
        public billingCity: string,
        public billingState: string,
        public billingZip: number,
        public licNumber: string,
        public licExp: string,
        public licState: string,
        public insuranceCompany: string,
        public insuraneExp: string,
        public insurancePhone: number,
        public insuranceContact: string,
        public insurancePolicy: number
    ) { }
}

// get everyhing from the profile page, the number of stars also, etc...


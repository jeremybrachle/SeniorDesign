export class EntertainmentItem {

    constructor(
        public name: string,
        public price: number,
        public eventType: string,
        public imgUrl: string,
        public isSelected: boolean
        ) { this.isSelected = false; }

    selectOption() {
        this.isSelected = true;
    }
    cancelOption() {
        this.isSelected = false;
    }

}

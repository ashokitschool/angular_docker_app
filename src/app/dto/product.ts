export class Product {

    constructor(
        public id: number,
        public name: string,
        public title: string,
        public unitPrice: number,
        public description: string,
        public imageUrl: string,
        public active: boolean,
        public unitsInStock: number,
        public dateCreated: Date,
        public lastUpdated: Date
    ) { }
}
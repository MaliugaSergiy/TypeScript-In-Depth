/* eslint-disable no-underscore-dangle */
import { positiveInteger } from '../decorators';
import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    printItem(): void {
        super.printItem();
        Object.getPrototypeOf(this);
        console.log(Object.getPrototypeOf(this));
        console.log(this);

        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(p?: number): void {
        console.log(`${this.title} (${this.year})`);
    }
}

// class Encyclopedia2 extends ReferenceItem {
//     constructor(id: number, title: string, year: number, public edition: number) {
//         super(id, title, year);
//     }

//     printItem(): void {
//         super.printItem();
//         Object.getPrototypeOf(this);
//         // console.log(Object.getPrototypeOf(this));
//         // console.log(this);

//         console.log(`Edition: ${this.edition} (${this.year})`);
//     }

//     printCitation(p: number): void {
//         console.log(`${this.title} (${this.year})`);
//     }
// }

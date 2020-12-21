/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */

import { timeout } from '../decorators';

// export class ReferenceItem {
export abstract class ReferenceItem {
    // title: string;
    // year: number;

    #id: number;

    private _publisher: string;

    // constructor(newTitle: string, newYear: number) {
    //     console.log(`'Creating a new ReferenceItem..`);
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    static department: string = 'Classical Literature';

    constructor(id: number, public title: string, protected year: number) {
        console.log(`Creating a new ReferenceItem..`);
        this.#id = id;
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    getID(): number {
        return this.#id;
    }

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    // абстрактные методы описывают сигнатуру, а сам метод будет реализоваан в наследнике
    abstract printCitation(): void;
}

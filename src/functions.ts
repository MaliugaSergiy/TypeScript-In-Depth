/* eslint-disable no-redeclare */
import { Category } from './enums';
import { Book, LibMgrCallback } from './interfaces';
import { ArrayOfBooks, BookOrUndefined, BookProperties } from './types';

export function getAllBooks(): ArrayOfBooks {
    // const books: ArrayOfBooks = [
    const books = <const>[
        {
            id: 1,
            category: Category.JavaScript,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            category: Category.JavaScript,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        {
            id: 4,
            category: Category.JavaScript,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];

    return books;
}

// console.log('getAllBooks', getAllBooks());

// 2. Реализуйте функцию logFirstAvailable(), которая принимает массив книг в качестве параметра
// и выводит в консоль:
// a. количество книг в массиве
// b. название первой доступной книги

export const logFirstAvailable = function logFirstAvailable(books: ArrayOfBooks = getAllBooks()): void {
    const numberOfBooks = books.length;
    const firstAvailable = books.find(book => book['available'])['title'];
    console.log('firstAvailable', firstAvailable);
    console.log(`Number of books ${numberOfBooks}`);
};

// 3. Запустите функцию logFirstAvailable()
// logFirstAvailable(getAllBooks());

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    let titles: string[] = [];

    titles = books.filter(book => book['category'] === category).map(book => book['title']);
    return titles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach((title: string) => console.log(title));
}

export const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index] as { title: string; author: string };
    return [title, author];
}

// console.log('getBookAuthorByIndex', getBookAuthorByIndex(3));

export const calcTotalPages = function calcTotalPages(): bigint {
    // const data: Lib[] = [
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ] as const;

    const amountOfPages = data.reduce((summ, curr) => summ + BigInt(curr.books * curr.avgPagesPerBook), 0n);

    return amountOfPages;
};

// console.log('calcTotalPages', calcTotalPages());

// TYPE ASSERTIONS
// Приведение к типу

// ("angle-brackets" syntax)

// let someValue: any = 'string';
// let strString: number = (<string>someValue).length;

// ("as" syntax)
// let strString: number = (someValue as string).length;
// console.log('🚀 ~ file: app.ts ~ line 139 ~ strString', strString);

// Const Assertions (приведение к константе)

// let x = 'hello' as const;
// let x = <const>'hello';

// x = '';

// x = "fdfd" // Error

// TASK 02.02 Const Assertions

// 03. Functions
// Task 03.01. Function Type

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export const myId: string = createCustomerID('Serhii', 1517);
// console.log('🚀 ~ file: app.ts ~ line 173 ~ myId', myId);

let idGenerator: (name: string, id: number) => string = (name: string, id: number) => `${id}-${name}`;

idGenerator = createCustomerID;
export const id1: string = idGenerator('Serhii_1', 151732323);
// console.log('🚀 ~ file: app.ts ~ line 180 ~ id1', id1);

// Task 03.02. Optional, Default and Rest Parameters

export function createCustomer(name: string, age?: number, city?: string, ...rest: boolean[]): void {
    console.log('name: ', name);
    Boolean(age) && console.log('age: ', age);
    Boolean(city) && console.log('city: ', city);
    console.log('============');
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    // console.log('🚀 ~ file: app.ts ~ line 193 ~ getBookByID ~ books', books);
    const result = books.find(book => book.id === id);
    return result as Book;
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);
    const titles: string[] = [];
    bookIDs.forEach(id => {
        const book = getBookByID(id);
        // if (book && book.available) {
        if (book?.available) {
            titles.push(book.title);
        }
    });
    return titles;
}

// описываем сигнатуры ф-и (Function Overloading - перегрузка)
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }

    return [];
}

// Task 03.04. Assertion Functios
// существует 2 вида ф-й утверждения:

// 1. функция утверждения значений
export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should be a string');
    }
}
// 2. функция утверждения условия
export function assertStringCondition(condition: any): asserts condition {
    if (!condition) {
        throw new Error('value should be a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

// 04. Interfaces
// Task 04.01. Defining an Interface
export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop][name]; // от куды мы взяли переменную name ?
    }

    return book[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

// type logCategrySearchTypeTuple = Parameters<LibMgrCallback>;

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error: ${err.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export const logSearchResults = async (category: Category): Promise<string[]> => {
    const titles = await getBooksByCategoryPromise(category);
    console.log('🚀 ~ file: functions.ts ~ line 261 ~ logSearchResults ~ titles', titles);
    // return Promise.resolve(titles);
    return titles;
};

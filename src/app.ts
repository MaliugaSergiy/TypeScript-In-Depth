import { Reader } from './classes/reader';
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/quotes */
// showHello('greeting', 'TypeScript');
import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from './classes/index';
import { Category } from './enums';
import { Librarian, Loger, Author, Person, Book, Magazine } from './interfaces';
import {
    BookProperties,
    PersonBook,
    Lib,
    BookOrUndefined,
    ArrayOfBooks,
    BookRequiredFields,
    UpdatedBook,
    AuthorWithoutEmail,
    СreateCustomerFunctionType,
} from './types';
import {
    getAllBooks,
    getBookAuthorByIndex,
    getBookByID,
    getBookProp,
    getBookTitlesByCategory,
    getTitles,
    logFirstAvailable,
    logBookTitles,
    calcTotalPages,
    createCustomer,
    createCustomerID,
    assertStringValue,
    bookTitleTransform,
    printBook,
    purge,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import type { Library } from './classes';

// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }

// let num: Array<number> = [1, 2, 3];

// let roNum: ReadonlyArray<number> = [...num];

// num = roNum as Array<number>;

// let muTyple: [number, string] = [25, 'string'];

// let otuple: [number, ...string[]]; // открыьтый Tuple
// let otupleT: [number, ...Array<string | number>]; // открыьтый Tuple
// otupleT = [5, 'cxcx', 'cxcx', 'cxcx', 'cxcx', 5];

// let a: bigint = BigInt(100);
// console.log('🚀 ~ file: app.ts ~ line 21 ~ a', a);

// typeof a;
// console.log('🚀 ~ file: app.ts ~ line 24 ~ typeof a', typeof a);
/**
 * // 1. 1. Реализуйте функцию getAllBooks(), которая возвращает коллекцию книжек. Объявите эту
 * коллекцию внутри функции, используя let/const.
 * a. [
 *        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
 *        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
 *        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
 *        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true },
 *    ]

 */

// const pElement: HTMLElement | null = document.getElementById('greetingd');
// pElement!.innerText = '444';

// Task 03.02

// createCustomer('sergii');
// createCustomer('sergii', 35);
// createCustomer('sergii', 35, 'Kyiv');
// createCustomer('sergii', 35, 'Kyiv', true);

// console.log('getBookTitlesByCategory(Category.CSS)', getBookTitlesByCategory(Category.CSS));
// console.log('getBookTitlesByCategory()', getBookTitlesByCategory());
// logFirstAvailable();

// console.log(getBookByID(1));
// const myBooks: string[] = сheckoutBooks(`Ann`, 1, 2, 4);
// console.log('🚀 ~ file: app.ts ~ line 223 ~ myBooks', myBooks);

// Task 03.03. Function Overloading

// console.log('🚀 ~ file: app.ts ~ line 253 ~ сheckoutBooks ~ getTitles(1, true)', getTitles(1, false));
// getTitles(true, 1);

// Task 03.04. Assertion Functions
// console.log(bookTitleTransform(getAllBooks()[0].title));
// console.log(bookTitleTransform(555));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02. Defining an Interface for Function Types
// const logDamage: Loger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03. Extending Interface
// const favoriteAuthor: Author = {
//     email: 'example@mail.com',
//     name: 'Sehii',
//     numBooksPublished: 10,
// };
// const favoriteLibrarian: Librarian = {
//     email: 'Larisa@mail.com',
//     name: 'Larisa',
//     department: 'classical Literature',
//     assistCustomer(name: string) {
//         console.log(`assist ${name}`);
//     },
// };

// Task 04.04. Optional Chaining
// const offer: any = {
//     magazine: [1, 2],
// };
// console.log(offer?.magazine?.getTitle?.());
// console.log(offer?.magazine[0].getTitle?.());
// console.log(offer.magazine?.[0]?.());

// Task 04.05. Keyof Operator

// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Task 05.01. Creating and Using Classes
// const ref: ReferenceItem = new ReferenceItem(1, 'JavaScript', 2015);
// console.log('🚀 ~ file: app.ts ~ line 141 ~ ref', ref);
// ref.printItem();

// ref.publisher = 'some_string';

// console.log('🚀 ~ file: app.ts ~ line 146 ~ ref.publisher', ref.publisher);

// console.log(ref.getID());

// console.log('getID' in ref);
// console.log(ref.hasOwnProperty('title'));

// // Task 05.02. Extending Classes
// const refBook = new RefBook(1, 'TypeScript', 2020, 3);
// console.log('🚀 ~ file: app.ts ~ line 428 ~ refBook', refBook);
// refBook.printItem();

// Task 05.03. Creating Abstract Classes
// refBook.printCitation();

// Task 05.04. Interfaces for Class Types
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05. Intersection and Union Types
// const personBook: PersonBook = {
//     id: 1,
//     name: 'Anna',
//     email: 'dssd@sd.dsd',
//     author: 'Serhii',
//     available: false,
//     category: Category.CSS,
//     title: 'NoName',
// };
// console.log(' personBook', personBook);

// Task 06.05.
// const flag = true;
// if (flag) {
//     import('./classes').then(moduleSet => {
//         const reader = new moduleSet.Reader();
//         console.log('🚀 ~ file: app.ts ~ line 179 ~ import ~ reader', reader);
//         reader.name = 'Anna';
//         reader.take(getAllBooks()[1]);
//         console.log(reader);
//     });
// }

// Task 06.06.

// const lib: Library = new Library;
// const lib: Library = {
//     id: 1,
//     name: 'Unknown',
//     address: 'Kyiv...',
// };

// console.log(lib);
// function identity<T>(arg: T): T {
//     return arg;
// }

// console.log(identity<string>('fdfdfd'));
// console.log(identity<string>(false));

// Task 07.01 Generic Functions
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// console.log(purge<Book>(inventory));

// Task 07.02 Generic Interfaces and Classes

// // const bookShelf: Shelf<Book>= new Shelf<Book>();
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook = bookShelf.getFirst();
// console.log('firstBook', firstBook);

// // const magazines: Array<Magazine> = [
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// const firstMagazine = magazineShelf.getFirst();
// console.log('firstMagazine', firstMagazine);

// // Task 07.03 Generic Constraints
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// // ----------------------------
// type Writable<T> = {
//     -readonly [K in keyof T]: T[K];
// };

// interface TTT {
//     readonly aaa: string;
// }

// const odj: Writable<Readonly<TTT>> = {
//     aaa: '',
// };

// odj.aaa = 'fdfd';

// // ----------------------------
// type Book1 = {
//     title: string;
//     author: string;
//     copies: number;
//     year: number;
// };
// type BookWithTitleAndAuthor = Pick<Book1, 'title' | 'author'>; // противоположность расширения интерфейсов
// // ----------------------------

// Task 07.04. Utility Types
// const book: BookRequiredFields = {
//     available: false,
//     author: 'Anna',
//     category: Category.CSS,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'UnKnown',
// };

// const updatedBook: UpdatedBook = {
//     category: Category.Angular,
//     title: 'Leon King',
//     id: 1,
// };

// const params: Parameters<СreateCustomerFunctionType> = ['Ann'];
// createCustomer(...params);

/// 08. Decorators
// Task 08.01. Class Decorators (sealed)

// const odj = new UniversityLibrarian();
// console.log('🚀 ~ file: app.ts ~ line 300 ~ odj', odj);
// UniversityLibrarian.prototype['setName'] = function () {};
// console.log(odj.__proto__);
// Object.getPrototypeOf(odj);

// Task 08.02. Class Decorators that replace constructor functions (logger)
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log('🚀 ~ file: app.ts ~ line 304 ~ fLibrarian', fLibrarian);
// fLibrarian['printLibrarian']();

// Task 08.03. Method Decorator (writable)
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;
// console.log('🚀 ~ file: app.ts ~ line 319 ~ fLibrarian', fLibrarian);

// Task 08.04. Method Decorator (timeout)
// const enc = new RefBook(1, 'EMC', 2020, 3);
// enc.printItem();

// Task 08.05. Parameter Decorator (logParameter)
// const o = new UniversityLibrarian();

// o.name = 'Anna';
// console.log('🚀 ~ file: app.ts ~ line 321 ~ o', o);
// o.assistCustomer('Boris');

// Task 08.06. Property Decorator
// const o = new UniversityLibrarian();

// o.name = 'Anna';
// console.log('🚀 ~ file: app.ts ~ line 326 ~ o.name', o.name);

// Task 08.07. Accessor Decorator
// const enc = new RefBook(1, 'EMC', 2020, 3);

// enc.copies = 13;
// enc.copies = -9;

// Task 09.01. Callback Functions
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02. Promises
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log('getBooksByCategoryPromise', titles);
//         return titles.length;
//     })
//     .then(length => console.log(length))
//     .catch(err => {
//         console.log(err);
//     });
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => {
//         console.log('getBooksByCategoryPromise', titles);
//         return titles.length;
//     })
//     .then(length => console.log(length))
//     .catch(err => {
//         console.log(err);
//     });
// console.log('End');

// Task 09.03. Async Functions
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(err => console.error(err));

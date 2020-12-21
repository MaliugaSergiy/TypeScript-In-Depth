import { Author, Book, Person } from './interfaces';

// type Book = {
//     id: number;
//     category: Category;
//     title: string;
//     author: string;
//     available: boolean;
//     pages?: number;
//     markDamaged?: (reason: string) => void;
// };
type myFunc = (name: string, id: number) => string;

type BookProperties = keyof Book;
type PersonBook = Person & Book;
type Lib = { lib: string; books: number; avgPagesPerBook: number };
type BookOrUndefined = Book | undefined;

// type ArrayOfBooks = ReadonlyArray<Book>;
type ArrayOfBooks = readonly Book[];

type BookRequiredFields = Required<Book>;

type UpdatedBook = Partial<Book>;

type AuthorWithoutEmail = Omit<Author, 'email'>;

type СreateCustomerFunctionType = (name: string, age?: number, city?: string, ...rest: boolean[]) => void;

const createCustomerIDArr: myFunc = (name: string, id: number): string => `${id} - ${name}`;

export {
    BookProperties,
    PersonBook,
    Lib,
    BookOrUndefined,
    ArrayOfBooks,
    BookRequiredFields,
    UpdatedBook,
    AuthorWithoutEmail,
    СreateCustomerFunctionType,
    createCustomerIDArr,
};

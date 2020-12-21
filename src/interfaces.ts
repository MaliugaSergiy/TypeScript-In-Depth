import { Category } from './enums';

interface DamageLogger {
    (p: string): void;
}
interface Book {
    id: number;
    category: Category;
    title: string;
    author: string;
    available: boolean;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;

    // firstName: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (castName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

export { DamageLogger as Loger, Author, Librarian, Person, Book, Magazine, ShelfItem, LibMgrCallback };

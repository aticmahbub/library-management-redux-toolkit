export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre:
        | 'FICTION'
        | 'NON_FICTION'
        | 'SCIENCE'
        | 'HISTORY'
        | 'BIOGRAPHY'
        | 'FANTASY'
        | 'NONE';
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
}

export type TBorrow = {
    isbn: number;
    title: string;
};
export interface IBorrow extends IBook {
    quantity: number;
    dueDate: Date | null;
    totalQuantity: number;
    book: TBorrow;
    _id: string;
}
export interface IBookProps {
    book: IBook;
}

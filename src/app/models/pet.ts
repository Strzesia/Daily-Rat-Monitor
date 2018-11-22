export interface Pet {
    id: number;
    species: string;
    name: string;
    photo: File;
    age: Date;
    weightHistory: number[];
    coat: string;
    note: string;
}
import { Rat } from './rat';

export interface Measurements {
    id: number;
    rat: Rat;
    weight: number;
    date: Date;
}
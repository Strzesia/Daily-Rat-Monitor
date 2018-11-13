import { Pet } from './pet';

export interface Measurements {
    id: number;
    pet: Pet;
    weight: number;
    date: Date;
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pet } from "../models/pet";

@Injectable()
export class PetsService {

    private json = './assets/data/pets.json';

    constructor(
        private http: HttpClient
    ) {}

    getPets(): Observable<Pet[]> {
        return this.http.get(
            this.json
        ) as Observable<Pet[]>;
    } 

    getPet(id: number): Pet {
        var pet: Pet;
        this.getPets().subscribe((pets) => {
            pet = pets[id];
        });
        console.log(pet)
        return pet;
    }

}
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../../models/pet';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { PetsService } from '../../services/pets.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.less'],
  animations: [
    trigger('state', [
      state('show', style({
        display: 'block',
      })),
      state('hide', style({
        display: 'none',
      })),
    ])
  ]
})
export class PetsListComponent implements OnInit {

  petForm: FormGroup;
  pets: Pet[];

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetsService,
    private modalService: NgbModal
  ) { }

  open(modal) {
     this.modalService.open(modal)
  }

  ngOnInit() {
    this.petForm = this.buildPetForm();
    this.getData();
  }

  state = 'hide';

  toggleState() {
    this.state = this.state === 'show' ? 'hide' : 'show';
  }

  getData(): void {
    this.petService.getPets()
    .subscribe((pets) => {
      this.pets = pets;
      console.log(pets)
    });
  }

  buildPetForm() {
    return this.formBuilder.group({
      species: ['', Validators.required],
      name: ['', Validators.required],
      photo: '',
      age: ['', Validators.required],
      weight: ['', Validators.required],
      coat: '',
      note: ''
    })
  }

}
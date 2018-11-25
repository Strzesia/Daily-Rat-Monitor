import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddPetModalComponent } from '../add-pet-modal/add-pet-modal.component';
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
  closeResult: string;

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetsService,
    private modalService: NgbModal,
  ) { }

  openFormModal() {
    const modalRef = this.modalService.open(AddPetModalComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  // open(modal) {
  //    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

  ngOnInit() {
    this.petForm = this.buildPetForm();
    this.getData();
  }

  getData(): void {
    this.petService.getPets()
    .subscribe((pets) => {
      this.pets = pets;
      //console.log(pets)
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
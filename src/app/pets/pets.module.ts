import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsListComponent } from './pets-list/pets-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PetComponent } from './pet/pet.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPetModalComponent } from './add-pet-modal/add-pet-modal.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [PetsListComponent],
  declarations: [PetsListComponent, PetComponent, PetDetailsComponent, AddPetModalComponent],
  entryComponents: [ AddPetModalComponent ]
})
export class PetsModule { }

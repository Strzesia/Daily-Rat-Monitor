import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.less']
})
export class PetDetailsComponent implements OnInit {

  @Input() pet: Pet;

  constructor() { }

  ngOnInit() {
  }

}

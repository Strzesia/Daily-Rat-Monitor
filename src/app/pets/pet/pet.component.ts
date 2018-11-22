import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.less']
})
export class PetComponent implements OnInit {

  @Input() pet: Pet;

  constructor() { }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [StartComponent],
  declarations: [StartComponent]
})
export class CoreModule { }

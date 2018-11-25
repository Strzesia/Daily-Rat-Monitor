import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PetsModule } from './pets/pets.module';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './main/start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { PetsService } from './services/pets.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    PetsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

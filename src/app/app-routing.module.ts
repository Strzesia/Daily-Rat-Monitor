import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { PetsListComponent } from "./pets/pets-list/pets-list.component";
import { StartComponent } from "./main/start/start.component";

const APP_ROUTES: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'start' },
    { path: 'start', component: StartComponent },
    { path: 'pets', component: PetsListComponent }

]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

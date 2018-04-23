import {NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";

import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
    {path:'Contact', component:ContactComponent}
    ];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

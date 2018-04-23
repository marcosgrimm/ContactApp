import {NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";

import {ContactComponent} from "./components/contact/contact.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ContactDetailComponent} from "./components/contact-detail/contact-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {path:'dashboard', component:DashboardComponent},
    {path:'contact', component:ContactComponent},
    {path:'contact/detail/:id', component:ContactDetailComponent}
    ];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";

import {ContactComponent} from "./components/contact/contact.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ContactDetailComponent} from "./components/contact-detail/contact-detail.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ProfileDetailComponent} from "./components/profile-detail/profile-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {path:'dashboard', component:DashboardComponent},
    {path:'contact', component:ContactComponent},
    {path:'profile', component:ProfileComponent},
    {path:'contact/detail/:id', component:ContactDetailComponent},
    {path:'profile/detail/:id', component:ProfileDetailComponent}
];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactService} from "./services/contact.service";
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileDetailComponent } from "./components/profile-detail/profile-detail.component";
import { ProfileService } from "./services/profile.service";
import {faChevronLeft, faChevronRight, faStar} from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';


@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        ContactDetailComponent,
        MessagesComponent,
        DashboardComponent,
        ProfileComponent,
        ProfileDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,

    ],
    providers: [ContactService, MessageService,ProfileService],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(){
        fontawesome.library.add(faChevronLeft, faChevronRight,faStar);
    }
}

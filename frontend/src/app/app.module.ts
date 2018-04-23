import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule} from "@angular/material";
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {ContactService} from "./services/contact.service";
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
    MessagesComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCheckboxModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

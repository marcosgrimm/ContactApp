import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatButtonModule,
    MatCheckboxModule,
    MatIcon,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
} from "@angular/material";
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import {ContactService} from "./services/contact.service";
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [ContactService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

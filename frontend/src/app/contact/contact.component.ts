import {Component, OnInit} from '@angular/core';
import {Contact} from "../models/Contact";
import {ContactService} from "../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  selectedContact : Contact;
  contacts : Contact[];

  ngOnInit() {
      this.getContacts();
  }

  getContacts():void
  {
      this.contactService.getContacts().subscribe(
          contacts =>this.contacts = contacts
      );
  }

  onSelect (contact):void
  {
      this.selectedContact = contact;
  }

}

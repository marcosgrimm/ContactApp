import {Component, OnInit} from "@angular/core";
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../models/Contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

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

}

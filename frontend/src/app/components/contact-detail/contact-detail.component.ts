import {Component, Input, OnInit} from '@angular/core';

import {Contact} from "../../models/Contact";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact:Contact;

  constructor(private route: ActivatedRoute,
              private contactService:ContactService,
              private location: Location) { }


  ngOnInit () {
    this.getContact();
  }

  getContact() :void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
        .subscribe(contact => this.contact = contact);
  }

  goBack(): void {
      this.location.back();
  }
}

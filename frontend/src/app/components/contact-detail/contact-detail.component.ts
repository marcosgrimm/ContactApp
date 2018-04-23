import {Component, Input, OnInit} from '@angular/core';

import {Contact} from "../../models/Contact";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor() { }

  @Input() contact:Contact;

  ngOnInit() {
  }

}

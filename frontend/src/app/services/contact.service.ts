import { Injectable } from '@angular/core';
import {Contact} from "../models/Contact";
import {CONTACTS} from "../samples/ContactSample";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";

@Injectable()
export class ContactService {

  constructor(private messageService: MessageService) { }

  getContacts() : Observable<Contact[]> {
    this.messageService.add('ContactService: fetched contacts')
    return of(CONTACTS);
  }
}

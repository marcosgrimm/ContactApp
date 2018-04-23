import { Injectable } from '@angular/core';
import {Contact} from "../models/Contact";
import {CONTACTS} from "../samples/ContactSample";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class ContactService {

  constructor() { }

  getContacts() : Observable<Contact[]> {
    return of(CONTACTS);
  }
}

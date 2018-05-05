import { Injectable } from '@angular/core';
import {Profile} from "../models/Profile";
import {PROFILES} from "../samples/ProfileSample";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";

@Injectable()
export class ProfileService {

  constructor(private messageService: MessageService) { }

    getProfiles() : Observable<Profile[]> {
    this.messageService.add('ProfileService: fetched profiles')
    return of(PROFILES);
    }

    getProfile(id: number): Observable<Profile> {
        // TODO: send the message _after_ fetching the hero
        // this.messageService.add(`ProfileService: fetched profile id=${id}`);
        return of(PROFILES.find(profile => profile.id === id));
    }
}

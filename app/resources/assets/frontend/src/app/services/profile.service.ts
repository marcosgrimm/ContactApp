import { Injectable } from '@angular/core';
import {Profile} from "../models/Profile";
import {PROFILES} from "../samples/ProfileSample";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class ProfileService {

    constructor(private http:HttpClient) { }

    profiles: Array<Profile> = [];

    // getProfiles() : Observable<Profile[]> {
    getProfiles(){

        let profiles = this.http.get('/api/profiles').pipe(map((response:Response) => {

            // console.log(response);
            //response.json();
        })).subscribe();

        // this.messageService.add('ProfileService: fetched profiles')
        return of(PROFILES);
    }

    getProfile(id: number): Observable<Profile> {
        // TODO: send the message _after_ fetching the hero
        // this.messageService.add(`ProfileService: fetched profile id=${id}`);
        return of(PROFILES.find(profile => profile.id === id));
    }
}

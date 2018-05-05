import { Component, OnInit } from '@angular/core';
import {Profile} from "../../models/Profile";
import {ProfileService} from "../../services/profile.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    profiles: Profile[] = [];
    profilesShown:Profile[] = [];
    profile: Profile;
    qtyProfilesShown:number=3;
    constructor(private profileService: ProfileService) { }

    ngOnInit() {
        this.getProfiles();
    }

    getProfiles(): void {
        this.profileService.getProfiles()
            .subscribe(profiles =>
                this.profiles= profiles
            );
        this.updateProfilesShown()
    }

    removeCard(index){
        this.profiles.splice(index,1);
        this.updateProfilesShown();
    }

    updateProfilesShown(){

        this.profilesShown = this.profiles.slice(0,this.qtyProfilesShown);
    }


}
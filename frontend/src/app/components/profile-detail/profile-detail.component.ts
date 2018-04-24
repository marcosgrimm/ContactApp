import {Component, Input, OnInit} from '@angular/core';

import {Profile} from "../../models/Profile";
import {ActivatedRoute} from "@angular/router";
import {ProfileService} from "../../services/profile.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  @Input() profile:Profile;

  constructor(private route: ActivatedRoute,
              private profileService:ProfileService,
              private location: Location) { }


  ngOnInit () {
    this.getProfile();
  }

  getProfile() :void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
        .subscribe(profile => this.profile = profile);
  }

  goBack(): void {
      this.location.back();
  }
}

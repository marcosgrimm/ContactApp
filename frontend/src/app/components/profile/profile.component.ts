import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray,Validators} from "@angular/forms";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    form: FormGroup;
    skills: any = [];
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(){
        this.createForm();
    }

    createForm (){
        let emptyRequired = ['',Validators.required];
        this.form = this.formBuilder.group({
            email:emptyRequired,
            name:emptyRequired,
            title:emptyRequired,
            summary:['',[Validators.maxLength(280),Validators.required]],
            skills:this.formBuilder.array([this.createSkill()])
        });
    }

    createSkill(): FormGroup {
        return this.formBuilder.group({
            name: '',
            experience: ''
        });
    }

    addSkill(){
        this.skills = this.form.get('skills') as FormArray;
        this.skills.push(this.createSkill());
    }

    submit(){
        console.log(`submited`);
    }
}

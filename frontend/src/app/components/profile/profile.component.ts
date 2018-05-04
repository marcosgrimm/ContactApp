import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray,Validators} from "@angular/forms";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    form: FormGroup;
    skills: FormArray;
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(){
        this.createForm();
    }

    getForm(){
        return this.form;
    }

    getControl(formControlName){
        return this.getForm().get(formControlName);
    }

    getValue(formControlName){
        return this.getControl(formControlName).value;
    }
    createForm (){
        let emptyRequired = ['',Validators.required];
        this.form = this.formBuilder.group({
            email:emptyRequired,
            name:emptyRequired,
            title:emptyRequired,
            summary:['',[Validators.required]],
            skills:this.formBuilder.array([]),
            newSkill:this.formBuilder.group(
                { name:emptyRequired,
                    experience:emptyRequired})
        });

        this.skills = this.getControl('skills') as FormArray;

    }

    createSkill(params:any): FormGroup {
        return this.formBuilder.group({
            name: params.name,
            experience: params.experience
        });
    }

    addSkill(){
        let name = this.getValue('newSkill.name');
        let experience = this.getValue('newSkill.experience');

        let params = {
            name:name,
            experience:experience
        }
        this.skills.push(this.createSkill(params));


        this.getControl('newSkill').reset();
    }

    submit(){
        console.log(`submited`);
    }
}

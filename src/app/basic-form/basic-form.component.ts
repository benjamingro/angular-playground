import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  public submitted = false; 

  basicForm = new FormGroup({
    firstName: new FormControl('', {validators: Validators.required}),
    lastName: new FormControl('', {validators: Validators.required}),
    userName: new FormControl('', {validators: Validators.required}),
    city: new FormControl('', {validators: Validators.required}),
    state: new FormControl('', {validators: Validators.required}),
    zipCode: new FormControl('', {validators: Validators.required}),
    agree: new FormControl('', {validators: Validators.requiredTrue}),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    console.warn(this.basicForm.value);
    this.submitted=true; 
  }

  get firstName() { return this.basicForm.get('firstName'); }
  get lastName() { return this.basicForm.get('lastName'); }
  get userName() { return this.basicForm.get('userName'); }
  get city() { return this.basicForm.get('city'); }
  get state() { return this.basicForm.get('state'); }
  get zipCode() { return this.basicForm.get('zipCode'); }
  get agree() { return this.basicForm.get('agree'); }



}

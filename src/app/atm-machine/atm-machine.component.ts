import { Component, OnInit } from '@angular/core';
import { faDollarSign, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators, AbstractControl  } from '@angular/forms';

@Component({
  selector: 'app-atm-machine',
  templateUrl: './atm-machine.component.html',
  styleUrls: ['./atm-machine.component.scss']
})
export class AtmMachineComponent implements OnInit {

  faDollarSign = faDollarSign;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;  

  state = 'home'; // states: home, deposit, withdraw, balance, withdrawSuccess, depositSuccess
  balance = 20; 

  withdrawForm = new FormGroup({
    // withdrawInput: new FormControl('', {validators: Validators.required}),
    withdrawInput: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.pattern("^[0-9]*$"),
      // Validators.max(this.balance), 
      (control: AbstractControl) => Validators.max(this.balance)(control)
    ]),

  });

  get withdrawInput() { return this.withdrawForm.get('withdrawInput'); }

  withdrawSubmitted = false; 

  depositForm = new FormGroup({
    depositInput: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.pattern("^[0-9]*$"),
    ]),

  });

  get depositInput() { return this.depositForm.get('depositInput'); }

  depositSubmitted = false; 

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit_withdraw(){
    // console.log('submitted withdraw');
    // console.log(`this.withdrawForm.valid = ${this.withdrawForm.valid}`);
    // console.log(`this.withdrawForm.value.withdrawInput = ${JSON.stringify(this.withdrawForm.value)}`);
    

    this.withdrawSubmitted = true; 
    if(this.withdrawForm.valid)
    {
      console.log('the form is valid');
      this.balance -= this.withdrawForm.value.withdrawInput;
      this.state='withdrawSuccess'; 
      this.withdrawForm.setValue({withdrawInput:''});

    }
  }

  onSubmit_deposit(){
    this.depositSubmitted = true; 
    if(this.depositForm.valid)
    {
      console.log('the deposit form is valid');
      this.balance += Number(this.depositForm.value.depositInput);
      this.state='depositSuccess'; 
      this.depositForm.setValue({depositInput:''});

    }
  }

  setState(newState : string){
    this.state = newState; 
    this.withdrawSubmitted = false;
  }

}

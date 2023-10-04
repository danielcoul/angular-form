import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { User } from './user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public user: User = new User();
  public registerForm!: FormGroup;

  constructor(private  fb: FormBuilder){}

  ngOnInit(): void {

    this.registerForm =  this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      latsName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      notification: 'email',
      sendCatalog: false,
    });
    //  this.registerForm = new FormGroup({
    //    firstName: new FormControl(),
    //    latsName: new FormControl(),
    //    email: new FormControl(),
    //    sendCatalog : new FormControl(true)
    //  });
  }

  public saveData(){
    console.log(this.registerForm);
    console.log('valeurs:', JSON.stringify(this.registerForm.value));
  }

  public fillFormData(): void {
    this.registerForm.setValue({
      firstName: 'John',
      latsName: 'Daniel',
      email: 'daniel@gmail.com',
      sendCatalog: true
    })
  }
}


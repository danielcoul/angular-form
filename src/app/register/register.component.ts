import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { User } from './user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public user: User = new User();
  public registrerForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
     this.registrerForm = new FormGroup({
       firstName: new FormControl(),
       latsName: new FormControl(),
       email: new FormControl(),
       sendCatalog : new FormControl(true)
     });
  }

  public saveData(){
    console.log(this.registrerForm);
    console.log('valeurs:', JSON.stringify(this.registrerForm));
  }
}

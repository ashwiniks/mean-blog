import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public __authService:AuthService) { }

  ngOnInit() {
  }

  onSignup(signupData:NgForm)
  {
    let email= signupData.value.email;
    let password = signupData.value.password;
    alert("cadds");
    this.__authService.postSignup(email,password).subscribe((result)=>{
     console.log(result);
    });
  }

}

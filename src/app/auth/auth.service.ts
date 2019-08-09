import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth} from  './auth.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private __http : HttpClient) { }

  postSignup(email:string,password : string)
  {  
    const authData : Auth  = {email:email,password:password};
    return this.__http.post("http://localhost:3000/api/auth/signup",authData);
  }
}

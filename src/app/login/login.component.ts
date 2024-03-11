import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  

  LoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onClick() {
    const person = this.loginForm.get('username')?.value; // Access username from loginForm
    const password = this.loginForm.get('password')?.value; // Access username from loginForm
    console.log('Email: ', person);
    console.log('Password: ', this.loginForm.value.password);
    
    if(this.authService.login(person, password)){
      this.router.navigate(['contact']);
    }
    else{
      alert("Sorry, you're not allowed to access the contact list");
    }
  }
  
}
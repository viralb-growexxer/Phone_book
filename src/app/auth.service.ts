import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isLoggedIn = false;
  allowedPeople = ['viral.barodia@growexx.com', 'rahul.solanki@growexx.com', 'xyz@growexx.com', 'abc@growexx.com'];
  allowedPassWords = ['123456', '123456', '123456', '123456'];

  constructor() { }

  // Method to check if user is logged in
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Method to log in user
  login(person: string, password: string): boolean {

    if(this.allowedPeople.includes(person)){
        let idx = this.allowedPeople.indexOf(person);
        console.log(`Person is: ${person} at index: ${idx} and the corresponding pwd is: ${this.allowedPassWords[idx]}`);
        if(this.allowedPassWords[idx] == password){
            this.isLoggedIn=true;
            return true;
        }
    }
    else{
        this.isLoggedIn = false;
        return false;
    }
  }

  // Method to log out user
  logout(): void {
    this.isLoggedIn = false;
  }
}

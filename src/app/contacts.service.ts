import { Injectable } from '@angular/core';
import { Contact } from './contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


    contacts: Contact[] = [
        {index: 1, name: 'Viral', phone: '9712921266', email: 'viral.barodia@growexx.com', gender: 'Male', birthDate: new Date('2001-12-01')},
        {index: 2, name: 'Jay', phone: '9825121589', email: 'xyz@growexx.com', gender: 'Male', birthDate: new Date('2002-06-23')},
        {index: 3, name: 'Vijaya', phone: '9374068954', email: 'abc@growexx.com', gender: 'Female', birthDate: new Date('2001-10-16')},
        {index: 4, name: 'Rahul Sir', phone: '123456789', email: 'rahul.solanki@growexx.com', gender: 'Male', birthDate: new Date('2001-10-16')}
    ];


    constructor(){}

    getContacts(){
        return this.contacts;
    }

    deleteContact(index: number){
        if(confirm("Do you really want to delete this contact?"))
            this.contacts.splice(index, 1);
        else
            return;
    }
    
}
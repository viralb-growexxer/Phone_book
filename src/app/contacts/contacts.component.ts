import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';
import { ContactService } from '../contacts.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  editModes: boolean[] = [];

  constructor(private contactsService: ContactService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
    }
    this.loadContacts();
  }

  loadContacts(): void {
    this.contacts = this.contactsService.getContacts();
    this.editModes = new Array(this.contacts.length).fill(false);
  }

  editContact(index: number): void {

    this.editModes[index] = !this.editModes[index];
  }

  updateContact(index: number): void {
    this.editModes[index] = false;
  }

  deleteContact(index: number): void {

    this.contactsService.deleteContact(index);
  }
}

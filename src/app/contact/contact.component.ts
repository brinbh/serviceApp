import { Component, OnInit } from '@angular/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact.module";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  selectedContact = Contact;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {this.selectedContact = Contact});
  }

}

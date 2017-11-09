import {Injectable, EventEmitter} from '@angular/core';
import {Contact} from "./contact.module";
import {CONTACTS} from "./CONTACTS";

@Injectable()
export class ContactService {

  contacts: Contact[]=[];
  group: string ="1";
  contactSelectedEvent = new EventEmitter<Contact>();
  constructor() {
    this.contacts = CONTACTS;
    //sort documents by date
    this.contacts = this.orderContacts(this.contacts);
    //get array list of all documents for certain group
    this.getContacts(this.group);
    //get specific document
    // this.getDocument(this.documents.id);

  }

  orderContacts(contacts: Contact[]){
    return contacts;
  }
  getContacts(group: string) {
    return this.contacts.slice();
  }
  getContact(id: string){
    return this.contacts[0];
  }
  getContactIndex(id: number){
    return this.contacts[id];
  }

}

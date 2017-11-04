import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Contact {
  public id: string;
  public fName: string;
  public lName: string;
  public job: string;
  public company: string;
  public phoneNumber: string;
  public email: string;
  public otherNotes: string;

  constructor(id: string, fName: string,
              lName: string, job: string,
              company: string, phoneNumber: string,
              email: string, otherNotes: string){
    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.job = job;
    this.company = company;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.otherNotes = otherNotes;
  }
}

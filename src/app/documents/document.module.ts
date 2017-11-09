import { NgModule } from '@angular/core';

@NgModule()
export class Document {
  id: string;
  group: string;
  subject: string;
  date: string;
  note: string;

  constructor(id: string, group: string, subject: string, date: string, note: string){
    this.id = id;
    this.group = group;
    this.subject = subject;
    this.date = date;
    this.note = note;
  }

}

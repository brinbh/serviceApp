import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupItemComponent } from './groups/group-item/group-item.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { ContactItemComponent } from './contact/contact-item/contact-item.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import {GroupService} from "./groups/group.service";
import {DocumentService} from "./documents/document.service";
import {AppRoutingModule} from "./app-routing";
import { HeaderComponent } from './header/header.component';
import { LoadPageComponent } from './load-page/load-page.component';
import { ManagerComponent } from './manager/manager.component';
import {ContactService} from "./contact/contact.service";

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    DocumentDetailComponent,
    DocumentItemComponent,
    DocumentListComponent,
    GroupsComponent,
    GroupListComponent,
    GroupItemComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactItemComponent,
    ContactListComponent,
    HeaderComponent,
    LoadPageComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GroupService, DocumentService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

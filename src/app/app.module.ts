import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    DocumentDetailComponent,
    DocumentItemComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

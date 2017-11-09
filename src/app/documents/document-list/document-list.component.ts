import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../document.service";
import {Document} from "../document.module";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  // document: Document;
  group = "1";
  constructor(private documentService: DocumentService) { }

  ngOnInit(){
    this.documents = this.documentService.getDocuments(this.group);
    this.documents = this.documents.filter(
      (document: any)=>{
      return document.group == this.group;
    });
  }
  // onSelectedDocument(id: string){
  //   this.document = this.documentService.getDocument(id);
  // }
  // filterGroup(group: string, document: Document){
  //   if (this.document.group == this.group){
  //     return document;
  //   }
  // }
}

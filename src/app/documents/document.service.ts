import { Injectable, EventEmitter } from '@angular/core';
import {DOCUMENTS} from "./DOCUMENTS";
import {Document} from "./document.module";

@Injectable()
export class DocumentService {
  documents: Document[]=[];
  group: string ="1";
  documentSelectedEvent = new EventEmitter<Document>();
  constructor() {
    this.documents = DOCUMENTS;
    //sort documents by date
    //get array list of all documents for certain group
    this.getDocuments(this.group);
    //get specific document
    // this.getDocument(this.documents.id);

  }

  getDocuments(group: string){
    return this.documents.slice();
    // for (var i = 0; i < this.documents.length; i++){
    //   this.documents[i];
    //   if (this.documents.group = group){
    //     return this.documents.slice();
    //   }
    // }
    // for (var i = 0; i < this.documents.length; i++){
    //   if (this.documents[i]){
    //
    //   }
    // }

  }
  getDocument(id: string){
    return this.documents[0];
  }
  getDocumentIndex(id: number){
    return this.documents[id];
  }

}

import { Injectable} from '@angular/core';
import {DOCUMENTS} from "./DOCUMENTS";
import {Document} from "./document.module";
import {Subject} from "rxjs/Subject";
import {Group} from "../groups/group.module";

@Injectable()
export class DocumentService {
  documents: Document[]=[];
  group: Group;
  documentChangedEvent = new Subject<Document[]>();
  constructor() {
    this.documents = DOCUMENTS;
    //sort documents by date
    //get array list of all documents for certain group
    this.getDocuments();
    //get specific document
    // this.getDocument(this.documents.id);

  }

  getDocuments(){
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
  getDocumentIndex(id: number){
    return this.documents[id];
  }
  onDeleteService(document: Document){
    if (document == null){
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0){
      return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.next(this.documents.slice());

  }

}

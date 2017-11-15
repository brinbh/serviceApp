import { Component, OnInit } from '@angular/core';
import {DocumentService} from "../document.service";
import {Document} from "../document.module";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  groupId = "1";
  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.documents = this.documentService.getDocuments();
    this.documentService.documentChangedEvent.subscribe(
      (documents: Document[])=>{
        this.documents = documents;
      }
    );
    this.documents = this.documents.filter(
      (document: any)=>{
      return document.group == this.groupId;
    });

  }

  onNewDocument(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

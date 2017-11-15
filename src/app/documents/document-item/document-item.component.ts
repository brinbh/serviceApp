import {Component, OnInit, Input} from '@angular/core';
import {DocumentService} from "../document.service";
import {Params, ActivatedRoute, Router} from "@angular/router";
import {Document} from "../document.module";

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
  @Input() document: Document;
  @Input() index: number;
  id: number = this.index;
  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params["id"];
        this.document = this.documentService.getDocumentIndex(this.id);
      }
    );
  }
  onDeleteDocument(){
    this.documentService.onDeleteService(this.document);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onEditDocument(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onStarDocument(){}
}

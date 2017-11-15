import {Component, OnInit, Input} from '@angular/core';
import {Params, ActivatedRoute} from "@angular/router";
import {DocumentService} from "../document.service";
import {Document} from "../document.module";

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  @Input() document: Document;
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params["id"];
        this.editMode = params['id'] != null;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {GroupService} from "../group.service";
import {Group} from "../group.module";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[] = [];
  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.getGroups();

  }

}

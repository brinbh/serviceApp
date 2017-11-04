import { Component, OnInit } from '@angular/core';
import {GroupService} from "./group.service";
import {Group} from "./group.module";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  selectedGroup: Group;
  constructor(private groupService: GroupService) {  }

  ngOnInit() {
    this.groupService.groupSelectedEvent.subscribe(
      (group: Group) => {this.selectedGroup = group});
  }

}

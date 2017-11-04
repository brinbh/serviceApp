import {Component, OnInit, Input} from '@angular/core';
import {GroupService} from "../group.service";
import {Group} from "../group.module";

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  @Input() group: Group;
  constructor(private groupService: GroupService) { }

  ngOnInit() {

  }
  onSelected(){
    this.groupService.groupSelectedEvent.emit(this.group);
  }

}

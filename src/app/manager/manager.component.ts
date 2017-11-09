import {Component, OnInit, Input} from '@angular/core';
import {GroupService} from "../groups/group.service";
import {Group} from "../groups/group.module";
import {DocumentService} from "../documents/document.service";
import {ContactService} from "../contact/contact.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  @Input() selectedGroup: Group;
  constructor(private groupService: GroupService){ }


  ngOnInit() {
    // let contact: Contact = this.contactService.getContact(this.message.msgSender);
    // this.messageSender = contact.name;
    // this.groupService.groupSelectedEvent.subscribe(
    //     (group: Group) => {this.selectedGroup = group});
    // let group: Group  = this.groupService.getGroup(id);
    // this.selectedGroup = group;
    this.groupService.groupSelectedEvent.subscribe(
      (group: Group) => {this.selectedGroup = group});
    // let currentGroup: Group = this.groupService.getGroup(this.selectedGroup.groupId);
}


}

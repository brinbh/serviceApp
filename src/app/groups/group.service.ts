import {Injectable, EventEmitter} from '@angular/core';
import {Group} from "./group.module";
import {GROUPS} from "./GROUPS";

@Injectable()
export class GroupService {
  groups: Group[] = [];
  groupSelectedEvent = new EventEmitter<Group>();

  constructor() {
    this.groups = GROUPS;
    this.getGroups();
    this.getGroup(this.groups[0].groupId);
  }
  getGroups(){
    return this.groups.slice();
  }
  getGroup(id: string){
    for (var i = 0; i < this.groups.length; i++){
      if (this.groups[i].groupId == id){
        return this.groups[i];
      }
    }
    return null;
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Group {
  public groupId: string;
  public groupName: string;

  constructor(groupId: string, groupName: string){
    this.groupId = groupId;
    this.groupName = groupName;
  }
}

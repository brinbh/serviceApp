import {Component, OnInit, Input} from '@angular/core';
import {GroupService} from "../groups/group.service";
import {Group} from "../groups/group.module";
import {Params, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  selectedGroup: Group;
  id: number;
  constructor(private groupService: GroupService,
              private route: ActivatedRoute){ }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id: string = params["id"];
        this.selectedGroup = this.groupService.getGroup(id);
      }
    );
    this.getId();
    console.log("This is the Group: " + this.selectedGroup);
  }
  getId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("manager cmp. id: " + id);
  }


}

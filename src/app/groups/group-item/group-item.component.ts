import {Component, OnInit, Input} from '@angular/core';
import {GroupService} from "../group.service";
import {Group} from "../group.module";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  @Input() group: Group;
  constructor(private groupService: GroupService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.groupService.groupSelectedEvent.subscribe(
      (group: Group) => {this.group = group});
  }

  onSelected(){
    this.groupService.groupSelectedEvent.next(this.group);
    // this.router.navigate(['manager'], {relativeTo: this.route});
  }

}

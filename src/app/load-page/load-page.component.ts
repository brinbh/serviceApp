import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.css']
})
export class LoadPageComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}

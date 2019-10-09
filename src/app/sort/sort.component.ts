import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor() { }

  @Output() childEvent = new EventEmitter();
  sort(sorttype: string) {
    this.childEvent.emit(sorttype);
  }

  ngOnInit() {
  }

}

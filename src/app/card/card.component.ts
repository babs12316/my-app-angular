import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Output() childEvent = new EventEmitter();

  delete(title:string){
    this.childEvent.emit(this.title);
}

  constructor() { }

 

  ngOnInit() {
  }

}

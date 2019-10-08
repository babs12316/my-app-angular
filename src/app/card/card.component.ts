import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() card_id: number;
  @Output() childEvent = new EventEmitter();


  delete1(title:string){
    this.childEvent.emit(this.title);
}
delete(card_id:number){
  this.childEvent.emit(this.card_id);
}

  constructor() { }

 

  ngOnInit() {
  }

}

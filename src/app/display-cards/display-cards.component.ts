import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {
  @Input() name: string;
  @Input() test: string;
  @Input() titles: string [];
  

  delete(card_id:number){
    card_id=card_id-1;
    this.titles.splice(card_id, 1);
   }
 
  constructor() { }

  ngOnInit() {
  }

}


/*var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word != "limit");

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
*/

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
  

  delete(title:string){
    console.log("hello"+title+"this title array is"+this.titles);
  //  title = "'"+title+"'";
    console.log("double quoted title is"+title);
    this.titles = this.titles.filter(word => word != title);
    console.log("result is"+this.titles);
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

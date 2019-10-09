import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {
  @Input() name: string;
  @Input() test: string;
  @Input() titles: string[];
  @Input() msg: string;


  delete(card_id: number) {
    card_id = card_id - 1;
    this.titles.splice(card_id, 1);
  }

  sort(sorttype: string) {
    if (sorttype === "asc") {
      this.titles.sort();
    } else if (sorttype == "desc") {
      this.titles.reverse();
    }

  }
  constructor() { }

  ngOnInit() {
  }

}



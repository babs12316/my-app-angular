import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {
  closeResult: string;
  title: string = null;
  titleArray: string[] = [];
  test: string;

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.titleArray.push(this.title);
      this.title = null;
    }, (reason) => {
      this.title = null;
    });
  }


}

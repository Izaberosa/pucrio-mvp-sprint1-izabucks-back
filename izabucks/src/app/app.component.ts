import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ModalFormCardComponent } from './shared/modal-form-card/modal-form-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private matDialog: MatDialog
  ) {

  }

  add(): void {
    this.matDialog.open(ModalFormCardComponent, {
      width: '50vw',
      height: '60vh',
    })
  }
}

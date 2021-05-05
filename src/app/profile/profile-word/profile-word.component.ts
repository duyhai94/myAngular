import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../component/modal-form/modal-form.component';
@Component({
  selector: 'app-profile-word',
  templateUrl: './profile-word.component.html',
  styleUrls: ['./profile-word.component.scss'],
})
export class ProfileWordComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    this.dialog
      .open(ModalFormComponent, {
        data: {},
      })
      .afterClosed()
      .subscribe(() => {});
  }
}

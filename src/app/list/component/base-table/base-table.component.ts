import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {
  @Input() Table;
  @Input() dataApi;
  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  declarations: [BaseTableComponent],
  imports: [CommonModule, FormsModule ],
  exports: [BaseTableComponent]
})
export class BaseTableModule{}

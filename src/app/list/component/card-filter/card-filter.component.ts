import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss'],
})
export class CardFilterComponent implements OnInit, OnChanges {
  @Input() ListData;
  @Output() callback = new EventEmitter();
  constructor() {}
  ngOnChanges(): void {
    console.log(this.ListData);
  }
  ngOnInit(): void {}

  onChangeValue = () => {
    this.callback.emit();
  };
}
@NgModule({
  declarations: [CardFilterComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CardFilterComponent],
})
export class CardFilterModule {}

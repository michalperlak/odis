import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BytesPerRangeParameters} from '../../domain/stats';

@Component({
  selector: 'app-date-input-modal',
  templateUrl: './date-input-modal.component.html',
  styleUrls: ['./date-input-modal.component.css']
})
export class DateInputModalComponent implements OnInit {

  @Output()
  notify: EventEmitter<BytesPerRangeParameters> = new EventEmitter<BytesPerRangeParameters>();

  bytesPerRangeParameters: BytesPerRangeParameters = new BytesPerRangeParameters();

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  returnParameters() {
    this.notify.emit(this.bytesPerRangeParameters);
    this.activeModal.dismiss('Parameters returned');
  }

  updateBeginDate(event: string) {
    this.bytesPerRangeParameters.begin = new Date(event);
  }

  updateEndDate(event: string) {
    this.bytesPerRangeParameters.end = new Date(event);
  }

}
import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class ChartService {

  isNeedRefresh = false;

  @Output() refresh: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  refreshChart() {
    this.isNeedRefresh = !this.isNeedRefresh;
    this.refresh.emit(this.isNeedRefresh);
    this.isNeedRefresh = false;
  }
}

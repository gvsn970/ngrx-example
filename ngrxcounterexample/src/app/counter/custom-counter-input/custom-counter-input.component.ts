import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { changeChannelName, customIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName$: Observable<string>;
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }
  onChangeChannelName(){
    this.store.dispatch(changeChannelName());
  }
  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
}

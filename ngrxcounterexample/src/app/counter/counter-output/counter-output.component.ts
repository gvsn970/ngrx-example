import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  counter: number;
  //counter$:Observable<number>
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      console.log('Counter Observable called');
      this.counter = data.counter;
    });
   // this.counter$=this.store.select(getCounter)
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable} from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.sass']
})
export class CounterOutputComponent implements OnInit {

  counter$: Observable<number> | undefined;
  constructor(
    private store: Store<{ counter: CounterState }>
  ) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}

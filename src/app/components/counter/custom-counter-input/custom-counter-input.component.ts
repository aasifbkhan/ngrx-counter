import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.sass']
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  channelName$: Observable<string> | undefined;

  constructor(
    private store: Store<{counter: CounterState}>
  ){}

  ngOnInit() : void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd(){
    this.store.dispatch(customIncrement({count: +this.value}));
  }

  onChangeChannelName(){
    this.store.dispatch(changeChannelName());
  }
}

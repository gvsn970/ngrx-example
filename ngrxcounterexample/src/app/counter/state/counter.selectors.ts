import { createFeatureSelector, createSelector } from "@ngrx/store";
import { changeChannelName } from "./counter.action";
import { CounterState } from "./counter.state";



const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});
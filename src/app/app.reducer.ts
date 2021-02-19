import { createReducer, on } from '@ngrx/store';
import { setHello, setWorld } from './app.action';

export const reducer = createReducer(
  {
    hello: '',
    world: ''
  },
  on(setHello, (state, action) => ({ ...state, hello: action.hello })),
  on(setWorld, (state, action) => ({ ...state, world: action.world }))
);

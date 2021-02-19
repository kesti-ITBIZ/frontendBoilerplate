import { createAction, props } from '@ngrx/store';

export const setHello = createAction('SET_HELLO', props<{ hello: string }>());
export const setWorld = createAction('SET_WORLD', props<{ world: string }>());

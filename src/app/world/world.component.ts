import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setWorld } from '../app.action';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  world: Observable<string>;

  constructor(private store: Store<{ reducer: { hello: string, world: string } }>) {
    this.world = this.store.select(state => state.reducer.world);
  }

  ngOnInit(): void {
    this.store.dispatch(setWorld({ world: 'World' }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setHello } from '../app.action';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  hello: Observable<string>;

  constructor(private store: Store<{ reducer: { hello: string, world: string } }>) {
    this.hello = this.store.select(state => state.reducer.hello);
  }

  ngOnInit(): void {
    this.store.dispatch(setHello({ hello: 'Hello' }));
  }
}

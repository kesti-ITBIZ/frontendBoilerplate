import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { reducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

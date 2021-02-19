import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'hello',
      component: HelloComponent
    },
    {
      path: 'world',
      component: WorldComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

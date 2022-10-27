import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RollDieComponent } from './roll-die/roll-die.component';
import { RollHistoryComponent } from './roll-history/roll-history.component';

@NgModule({
  declarations: [
    AppComponent,
    RollDieComponent,
    RollHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

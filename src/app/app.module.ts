import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './services/config.service';
import { TimerListComponent } from './timer-list/timer-list.component';
import { TimerItemComponent } from './timer-list/timer-item/timer-item.component';
import { TimerListActionsComponent } from './timer-list/timer-list-actions/timer-list-actions.component';
import { TimerService } from './services/timer.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerListComponent,
    TimerItemComponent,
    TimerListActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConfigService, TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

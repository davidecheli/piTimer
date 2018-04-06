import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './services/config.service';
import { TimerListComponent } from './timer-list/timer-list.component';
import { TimerItemComponent } from './timer-list/timer-item/timer-item.component';
import { TimerListActionsComponent } from './timer-list/timer-list-actions/timer-list-actions.component';
import { TimerService } from './services/timer.service';

import { credentials } from './config';
import { AutoFocusDirective } from './shared/auto-focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerListComponent,
    TimerItemComponent,
    TimerListActionsComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(credentials.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [ConfigService, TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

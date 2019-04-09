import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnnounceModule } from './announcements/announcements.module';
import { WinAuthInterceptor } from './win-auth-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AnnounceModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: WinAuthInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }

}

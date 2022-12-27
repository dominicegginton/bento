import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PushModule } from '@ngrx/component';
import { AppComponent } from '@bento/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PushModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

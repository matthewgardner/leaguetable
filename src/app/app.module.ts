import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

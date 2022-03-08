import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { ZikirmatikComponent } from './components/zikirmatik/zikirmatik.component';

@NgModule({
  declarations: [AppComponent, PatientInfoComponent, ZikirmatikComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

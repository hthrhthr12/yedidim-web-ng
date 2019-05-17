import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { CallFinishedComponent } from './pages/call-finished/call-finished.component';
import { ProblemsFormComponent } from './pages/problems-form/problems-form.component';
import { AppeallerDetailsFormComponent } from './pages/appealler-details-form/appealler-details-form.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProblemsFormComponent,
    AppeallerDetailsFormComponent,
    CallFinishedComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

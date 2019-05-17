import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { CallFinishedComponent } from './pages/call-finished/call-finished.component';
import { ProblemsFormComponent } from './pages/problems-form/problems-form.component';
import { AppeallerDetailsFormComponent } from './pages/appealler-details-form/appealler-details-form.component';
import { AddressComponent } from './pages/address/address.component';
import { MapPickerComponent } from './pages/map-picker/map-picker.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    MapPickerComponent,
    AppComponent,
    HeaderComponent,
    ProblemsFormComponent,
    AppeallerDetailsFormComponent,
    CallFinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqxcnf5MCqc8BaR8Uc5_UqafaV9OhF-eY',
      libraries: ["places"]
    }),
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

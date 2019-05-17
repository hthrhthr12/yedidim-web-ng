import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppeallerDetailsFormComponent } from './pages/appealler-details-form/appealler-details-form.component';
import { ProblemsFormComponent } from './pages/problems-form/problems-form.component';
import { CallFinishedComponent } from './pages/call-finished/call-finished.component';
import { CallTrackingComponent } from './pages/call-tracking/call-tracking.component';
import { MainComponent } from './pages/main/main.component';
import { AddressComponent } from './pages/address/address.component';
import { MapPickerComponent } from './pages/map-picker/map-picker.component';

const routes: Routes = [
  { path: 'address', component: AddressComponent },
  { path: 'mapPicker', component: MapPickerComponent },
  { path: "appealler-details-form", component: AppeallerDetailsFormComponent },
  { path: "problems-form", component: ProblemsFormComponent },
  { path: "call-finished/:callId", component: CallFinishedComponent },
  { path: "call-tracking/:callId", component: CallTrackingComponent },
  { path: "main", component: MainComponent },
  { path: "", redirectTo: "/main", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppeallerDetailsComponent } from './pages/appealler-details/appealler-details.component';

const routes: Routes = [
  { path: "appealler-details", component: AppeallerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

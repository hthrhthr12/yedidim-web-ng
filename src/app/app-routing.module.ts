import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppeallerDetailsFormComponent } from './pages/appealler-details-form/appealler-details-form.component';
import { ProblemsFormComponent } from './pages/problems-form/problems-form.component';
import { CallFinishedComponent } from './pages/call-finished/call-finished.component';
import { MainComponent} from './pages/main/main.component'

const routes: Routes = [
  { path: "appealler-details-form", component: AppeallerDetailsFormComponent },
  { path: "problems-form", component: ProblemsFormComponent },
  { path: "call-finished", component: CallFinishedComponent },
  { path: "main", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

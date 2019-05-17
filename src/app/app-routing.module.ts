import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppeallerDetailsComponent } from './pages/appealler-details/appealler-details.component';
import { MainComponent} from './pages/main/main.component'

const routes: Routes = [
  { path: "appealler-details", component: AppeallerDetailsComponent },
  { path: "main", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

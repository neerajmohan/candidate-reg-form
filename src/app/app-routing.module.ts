import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  {"path":"",component:RegistrationComponent},
  {"path":"response",component:ResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

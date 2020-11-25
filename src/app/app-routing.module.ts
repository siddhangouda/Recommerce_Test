import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

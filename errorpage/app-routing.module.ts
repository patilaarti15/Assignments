import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'errorpage', component: ErrorpageComponent },
  { path: 'contactus', component:ContactusComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorpageComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

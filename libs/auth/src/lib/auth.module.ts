import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
export { Authenticate } from './authenticate';
import { MaterialModule  } from '@async/material';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
     LoginFormComponent
    ],
  exports: [],
})
export class AuthModule {}

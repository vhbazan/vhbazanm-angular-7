import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ]
})
export class CoreModule { }

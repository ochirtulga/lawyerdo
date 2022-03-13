import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app.guard';

import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './shared/auth/authentication.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AppGuard] },
  // { path: 'protected', component: ProtectedComponent, canActivate: [AuthenticationGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  // {
  //   path: 'courses',
  //   data: {
  //     scopes: ['ADMIN']
  //   },
  //   loadChildren: () => import('./course/course.module').then(m => m.CourseModule),
  //   canActivate: [AppGuard]
  // },
  { path: '**', redirectTo : 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
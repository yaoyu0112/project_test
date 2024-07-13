import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components or pages
import { PlatformComponent } from './main/platform/platform.component';
import { LoginComponent } from './main/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/main/login', pathMatch: 'full' }, // 預設路由到 login
  { path: 'main/platform', component: PlatformComponent },
  { path: 'main/login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

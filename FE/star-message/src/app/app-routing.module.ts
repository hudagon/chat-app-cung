import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './features/chat/main/main.component';
import { LoginComponent } from './shared/pages/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'chat', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

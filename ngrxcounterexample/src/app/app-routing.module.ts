import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HighchatComponent } from './highchat/highchat.component';

const routes: Routes = [
  {
    path:'',component: AppComponent
  },
  {
    path:'chat',component: HighchatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

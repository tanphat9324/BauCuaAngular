import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GameComponent } from './game/game.component';
import { RankComponent } from './rank/rank.component';

const routes: Routes = [{
  path:"", component:HomePageComponent
},
{
  path:"login", component:LoginComponent
},
{
  path:"register", component:RegisterComponent
},
{
  path:"game", component:GameComponent
},
{
  path:"rank", component:RankComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

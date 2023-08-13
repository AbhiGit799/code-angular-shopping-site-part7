import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  // { path: 'landingpage', component:LandingPageComponent },

   {path : '', redirectTo : 'home/shop', pathMatch : 'full'},

   {
     path: '', component: MainComponent, children: [
       { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
       { path: 'home', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
     ]
   }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

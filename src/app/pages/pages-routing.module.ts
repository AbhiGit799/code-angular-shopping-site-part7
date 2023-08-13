import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [

  {
    path:'',children:[
      {path:'about-us',component:AboutUsComponent},
      {path:'contact-us',component:ContactUsComponent},
      {path:'faq',component:FaqComponent},
      {path:'404',component:ErrorPageComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegistrationComponent}
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

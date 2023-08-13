import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './footer/footer-two/footer-two.component';
import { CategoryComponent } from './footer/widgets/category/category.component';
import { CopyrightsComponent } from './footer/widgets/copyrights/copyrights.component';
import { InformationComponent } from './footer/widgets/information/information.component';
import { SocialComponent } from './footer/widgets/social/social.component';
import { WhyWeChooseUsComponent } from './footer/widgets/why-we-choose-us/why-we-choose-us.component';
import { HeaderOneComponent } from './header/header-one/header-one.component';
import { HeaderTwoComponent } from './header/header-two/header-two.component';
import { LeftMenuComponent } from './header/widgets/left-menu/left-menu.component';
import { NavbarComponent } from './header/widgets/navbar/navbar.component';
import { TopbarComponent } from './header/widgets/topbar/topbar.component';
import { SettingsComponent } from './header/widgets/settings/settings.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';






@NgModule({
  declarations: [
    FooterOneComponent,
    FooterTwoComponent,
    CategoryComponent,
    CopyrightsComponent,
    InformationComponent,
    SocialComponent,
    WhyWeChooseUsComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    LeftMenuComponent,
    NavbarComponent,
    TopbarComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [HeaderOneComponent, HeaderTwoComponent, FooterOneComponent, FooterTwoComponent]
})
export class SharedModule { }

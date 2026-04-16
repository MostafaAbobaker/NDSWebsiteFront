import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/component/navbar/navbar.component';
import { FooterComponent } from "../../shared/component/footer/footer.component";
import { PlatformApplicationsComponent } from '../../features/pages/home/platform-applications/platform-applications.component';
import { ProductsComponent } from '../../features/pages/home/products/products.component';
import { PricingComponent } from '../../features/pages/home/pricing/pricing.component';
import { PartnersComponent } from '../../features/pages/home/partners/partners.component';
import { ScheduleDemoComponent } from "../../features/pages/home/schedule-demo/schedule-demo.component";
import { MainBannerComponent } from '../../features/pages/home/main-banner/main-banner.component';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent,
    FooterComponent,
    MainBannerComponent,
    PlatformApplicationsComponent,
    ProductsComponent,
    PricingComponent,
    PartnersComponent, ScheduleDemoComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

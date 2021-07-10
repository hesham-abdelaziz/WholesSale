import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { NgwWowModule } from 'ngx-wow';
import { ResponsiveDevicesComponent } from './responsive-devices/responsive-devices.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TabletComponent } from './tablet/tablet.component';
import { MobileComponent } from './mobile/mobile.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturestwoComponent } from './featurestwo/featurestwo.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoContainerComponent,
    ResponsiveDevicesComponent,
    DesktopComponent,
    TabletComponent,
    MobileComponent,
    FeaturesComponent,
    FeaturestwoComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

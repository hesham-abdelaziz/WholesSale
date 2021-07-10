import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TabletComponent } from './tablet/tablet.component';
const routes: Routes = [
  { path: 'desktop', component: DesktopComponent },
  { path: 'tablet', component: TabletComponent },
  { path: 'mobile', component: MobileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

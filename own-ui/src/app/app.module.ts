import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { SareeDetailsComponent } from './saree-details/saree-details.component';
// import { WebPageComponent } from './web-page/web-page.component';
// import { ReversePipe } from './reverse.pipe';
// import { CategoryComponent } from './category/category.component';
// import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
      closeButton: true,

    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    // SareeDetailsComponent,
    // WebPageComponent,
    // ReversePipe,
    // TransactionsComponent,
    // CategoryComponent,
    // UsersComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

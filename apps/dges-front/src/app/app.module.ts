import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { UiSnackbarModule } from '@dges/ui/snackbar';
import { RootStoreModule } from './root-store.module';
import { UiLoginDialogModule } from '@dges/ui/login-dialog';
import { UiConfirmDialogModule } from '@dges/ui/confirm-dialog';
import { UiDropDownMenuModule } from '@dges/ui/drop-down-menu';
import { UiFullLengthMenuModule } from '@dges/ui/full-length-menu';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    MatRippleModule,
    MatIconModule,

    UiSnackbarModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    RootStoreModule,
    UiLoginDialogModule,
    UiConfirmDialogModule,
    UiFullLengthMenuModule,
    UiDropDownMenuModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

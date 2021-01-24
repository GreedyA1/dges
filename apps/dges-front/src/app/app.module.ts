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
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { UiLoginDialogModule } from '@dges/ui/login-dialog';
import { RootStoreModule } from './+store/root-store.module';
import { MatMenuModule } from '@angular/material/menu';
import { UiSnackbarModule } from '@dges/ui/snackbar';
import { UiConfirmDialogModule } from '@dges/ui/confirm-dialog';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatDialogModule,
    UiLoginDialogModule,
    RootStoreModule,
    UiSnackbarModule,
    MatMenuModule,
    UiConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
